import {detect as BrowserDetect} from 'detect-browser';

import HelperAvailableEvent from '../Event/HelperAvailableEvent';
import ReadyEvent from '../Event/ReadyEvent';
import AbstractManager from './AbstractManager';
import App from '../App';

const tmpl = require('blueimp-tmpl');

/**
 * Methods for managing about Installing
 */
export default class InstallManager extends AbstractManager {
  private static readonly KEY_STORAGE_INVITATION = 'easy-pwa-last-invitation-answered';

  private homeScreenPrompt: null|BeforeInstallPromptEvent = null;

  constructor() {
    super();
    this.initEvents();
  }

  public init(): Promise<void> {
    return Promise.resolve();
  }

  /**
   * Show an automatic invite to add to Home Screen.
   */
  private async showInvite(): Promise<void> {
    this.createInvitePopup(tmpl(require('../../templates/invite.html'), {
        trans: App.translator.getTranslations(),
        manifest: App.pwaManager.getManifest(),
      })
    );
  }

  /**
   * When Event has been sent by browser, it's possible to call prompt method to add to home screen
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
    const system = BrowserDetect();

    if (system === null || system.os === null) {
      return null;
    }

    const operatingSystem = system.os as string;
    const browserName = system.name;
    const browserVersion = parseFloat(system.version);

    if (this.installPromptReady() && (App.configuration.desktop || !RegExp('Windows|Linux').test(operatingSystem))) {
      return this.showInstallPrompt;
    }

    if (operatingSystem === 'iOS' && (browserName === 'safari' || browserName === 'ios') && browserVersion >= 11.3) {
      return this.showIOSHelper;
    }

    if (operatingSystem === 'Android OS' && browserName === 'firefox') {
      return this.showFirefoxHelper;
    }

    if (operatingSystem === 'Android OS' && browserName === 'samsung' && browserVersion >= 4) {
      return this.showSamsungHelper;
    }

    return null;
  }

  /**
   * Check if a helper is available for the current browser
   */
  private helperIsAvailable(): boolean {
    return !App.pwaManager.isAppMode() && typeof this.getHelperByBrowser() === 'function';
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
   * IOS Helper
   */
  private showIOSHelper(): void {
    this.createHelperPopup(
      tmpl(require('../../templates/helper/ios.html'), App.translator.getTranslations()),
      'pwa-ios'
    );
  }

  /**
   * Firefox Helper
   */
  private showFirefoxHelper(): void {
    this.createHelperPopup(
      tmpl(require('../../templates/helper/firefox.html'), App.translator.getTranslations()),
      'pwa-firefox'
    );
  }

  /**
   * Samsung Helper
   */
  private showSamsungHelper(): void {
    this.createHelperPopup(
      tmpl(require('../../templates/helper/samsung.html'), App.translator.getTranslations()),
      'pwa-samsung'
    );
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
    // @ts-ignore
    window.addEventListener('beforeinstallprompt', (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      App.logger.info('Event beforeinstallprompt received.');
      this.homeScreenPrompt = e;

      if (App.isReady) {
        this.emitHelperAvailableEvent();
      }
    });

    // Artificial helper is available right now
    window.addEventListener(ReadyEvent.EVENT_NAME, () => {
      navigator.serviceWorker.ready.then(() => {
        if (this.helperIsAvailable()) {
          this.emitHelperAvailableEvent();
        }
      });
    });
  }

  /**
   * Emit an Event to indicate a helper is available for installing on the current browser
   */
  private emitHelperAvailableEvent(): void {
    if (!this.isTimeToInvite()) {
      return;
    }

    const event = new HelperAvailableEvent(
      this,
      this.homeScreenPrompt,
      this.inviteProcessed,
      this.showInvite,
      this.showHelper
    );
    window.dispatchEvent(event);
  }

  /**
   * Check if Event to add home screen has been sent by browser (chrome/edge)
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

      document.getElementsByClassName('pwa-homescreen-helper')[0]?.remove();
      document.getElementsByClassName('pwa-homescreen-helper-mask')[0]?.remove();
    };

    popupContent.addEventListener('click', closeHelper);
    window.setTimeout(closeHelper, 12000);

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

    popupContent.getElementsByClassName('pwa-homescreen-invite-close')[0].addEventListener('click', (e: Event) => {
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
      if (diffDay < App.configuration.intervalBetweenInvitation) {
        return false;
      }
    }

    return App.configuration.additionalInviteCriteria();
  }
}
