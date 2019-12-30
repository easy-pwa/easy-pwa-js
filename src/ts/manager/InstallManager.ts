import { detect } from 'detect-browser';
import { BeforeInstallPromptEvent } from '../type';
import Logger from '../tool/Logger';
import { PwaManager, Translator, logger } from '../service';
import HelperAvailableEvent from '../event/HelperAvailableEvent';
import BrowserInfo from '../../model/BrowserInfo';
import { default as PwaManagerClass } from "./PwaManager";

/**
 * Methods for managing about Installing
 */
export default class InstallManager {
  private static readonly DEFAULT_INTERVAL_BETWEEN_INVITATION = 50;

  private static readonly KEY_STORAGE_INVITATION = 'easy-pwa-last-invitation-answered';

  private homeScreenPrompt?: BeforeInstallPromptEvent = null;

  private desktopPwaEnabled = false;

  private inviteCriteria: () => boolean = () => true;

  private intervalBetweenInvitation = InstallManager.DEFAULT_INTERVAL_BETWEEN_INVITATION;

  constructor() {
    this.initEvents();
  }

  /**
   * Set interval in day before to invite again
   * @param dayInterval Interval in day between invitation
   */
  public setIntervalBetweenInvitation(dayInterval: number): void {
    this.intervalBetweenInvitation = dayInterval;
  }

  /**
   * Add additional criteria before propose invite to install
   * @param callback A function which has to respond a boolean. True if you are ready to show invite, false overwise
   */
  public addInviteCriteria(callback: () => boolean): void {
    this.inviteCriteria = callback;
  }

  /**
   * Show an automatic invite to add to Home Screen.
   */
  private async showInvite(): Promise<void> {
    const template = require('../../templates/invite.html.twig');
    this.createInvitePopup(
      template({
        trans: Translator.getTranslations(),
        manifest: PwaManager.getManifest(),
      }),
    );
  }

  /**
   * When event has been sent by browser, it's possible to call prompt method to add to home screen
   */
  private showInstallPrompt(): void {
    if (this.homeScreenPrompt !== null) {
      this.homeScreenPrompt.prompt();
      this.homeScreenPrompt = null;
    }
  }

  /**
   * Get the corresponding helper to the current browser. Helper differs between browsers
   */
  private getHelperByBrowser(): Function | null {
    const bo = this.getBrowserInfo();

    if (this.installPromptReady() && (this.desktopPwaEnabled || !RegExp('Windows|Linux').test(bo.os))) {
      return this.showInstallPrompt;
    }

    if (bo.os === 'iOS' && (bo.browser === 'safari' || bo.browser === 'ios') && bo.version >= 11.3) {
      return this.showIOSHelper;
    }

    if (bo.os === 'Android OS' && bo.browser === 'firefox') {
      return this.showFirefoxHelper;
    }

    if (bo.os === 'Android OS' && bo.browser === 'samsung' && bo.version >= 4) {
      return this.showSamsungHelper;
    }

    return null;
  }

  /**
   * Check if a helper is available for the current browser
   */
  private helperIsAvailable(): boolean {
    return !PwaManager.isAppMode() && typeof this.getHelperByBrowser() === 'function';
  }

  /**
   * Show the available helper
   */
  private showHelper(): void {
    const helpModal = this.getHelperByBrowser();
    if (helpModal != null) {
      helpModal.call(this);
    }
  }

  /**
   * Enable desktop Pwa
   */
  public enableDesktopPwa(): void {
    this.desktopPwaEnabled = true;
  }

  /**
   * IOS Helper: this function should be only called to test
   */
  private showIOSHelper(): void {
    const template = require('../../templates/helper/ios.html.twig');
    this.createHelperPopup(template(Translator.getTranslations()), 'pwa-ios');
  }

  /**
   * Firefox Helper: this function should be only called to test
   */
  private showFirefoxHelper(): void {
    const template = require('../../templates/helper/firefox.html.twig');
    this.createHelperPopup(template(Translator.getTranslations()), 'pwa-firefox');
  }

  /**
   * Samsung Helper: this function should be only called to test
   */
  private showSamsungHelper(): void {
    const template = require('../../templates/helper/samsung.html.twig');
    this.createHelperPopup(template(Translator.getTranslations()), 'pwa-samsung');
  }

  /**
   * Propose invite again later
   */
  private inviteProcessed(): void {
    localStorage.setItem(InstallManager.KEY_STORAGE_INVITATION, new Date().toDateString());
  }

  /**
   * Init all events about add home screen
   */
  private initEvents(): void {
    window.addEventListener('beforeinstallprompt', (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      logger.info('Event beforeinstallprompt received.');
      this.homeScreenPrompt = e;

      this.emitHelperAvailableEvent();
    });

    // Artificial helper is available right now
    window.addEventListener(PwaManagerClass.EVENT_READY, () => {
      navigator.serviceWorker.ready.then(() => {
        if (this.helperIsAvailable()) {
          this.emitHelperAvailableEvent();
        }
      });
    });
  }

  /**
   * Emit an event to indicate a helper is available for installing on the current browser
   */
  private emitHelperAvailableEvent(): void {
    if (!this.isTimeToInvite()) {
      return;
    }

    const event = new CustomEvent(HelperAvailableEvent.EVENT_NAME, {
      detail: new HelperAvailableEvent(
        this,
        this.homeScreenPrompt,
        this.inviteProcessed,
        this.showInvite,
        this.showHelper,
      ),
    });
    window.dispatchEvent(event);
  }

  /**
   * Check if event to add home screen has been sent by browser (chrome/edge)
   */
  private installPromptReady(): boolean {
    return this.homeScreenPrompt !== null;
  }

  /**
   * Create a helper popup
   */
  private createHelperPopup(text: string, browserClass: string): void {
    const popupContent = document.createElement('div');
    popupContent.classList.add(browserClass);
    popupContent.classList.add('pwa-homescreen-helper');
    popupContent.innerHTML = text;

    const mask = document.createElement('div');
    mask.classList.add('pwa-homescreen-helper-mask');

    const closeHelper = (): void => {
      document.body.classList.remove('pwa-helper-active');
      document.getElementsByClassName('pwa-homescreen-helper')[0].remove();
      document.getElementsByClassName('pwa-homescreen-helper-mask')[0].remove();
    };

    popupContent.addEventListener('click', closeHelper);
    window.setTimeout(closeHelper, 9000);

    document.body.appendChild(popupContent);
    document.body.appendChild(mask);

    document.body.classList.add('pwa-helper-active');
  }

  /**
   * Create a invite popup
   */
  private createInvitePopup(text: string): void {
    const closeInvite = (): void => {
      document.body.classList.remove('pwa-invite-active');
      document.getElementsByClassName('pwa-homescreen-invite')[0].remove();
      this.inviteProcessed();
    };

    const popupContent = document.createElement('div');
    popupContent.classList.add('pwa-homescreen-invite');
    popupContent.innerHTML = text;

    document.body.appendChild(popupContent);
    setTimeout(() => {
      document.body.classList.add('pwa-invite-active');
    }, 500);

    popupContent.addEventListener('click', () => {
      this.showHelper();
      closeInvite();
    });

    popupContent.getElementsByClassName('pwa-homescreen-invite-close')[0].addEventListener('click', e => {
      e.stopPropagation();
      closeInvite();
    });
  }

  /**
   * Check criteria for proposing install.
   */
  private isTimeToInvite(): boolean {
    if (!this.helperIsAvailable()) {
      return false;
    }

    const lastInvitationAnswered = localStorage.getItem(InstallManager.KEY_STORAGE_INVITATION);
    if (lastInvitationAnswered) {
      const dateLastInvitationAnswered = new Date(lastInvitationAnswered);
      const diffDay = (new Date().getTime() - dateLastInvitationAnswered.getTime()) / 1000 / 86400;
      if (diffDay < this.intervalBetweenInvitation) {
        return false;
      }
    }

    if (this.inviteCriteria) {
      return this.inviteCriteria();
    }

    return true;
  }

  /**
   * Get Browser Info
   */
  private getBrowserInfo(): BrowserInfo {
    const bo = detect();

    return {
      os: bo.os,
      browser: bo.name,
      version: parseFloat(bo.version),
    };
  }
}
