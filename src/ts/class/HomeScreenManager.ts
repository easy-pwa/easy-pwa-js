import { detect } from 'detect-browser';
import { BeforeInstallPromptEvent, WindowNavigator } from '../type';
import Logger from './Logger';
import {translator} from "../service";

/**
 * Methods for managing about Homescreen.
 */
export default class HomeScreenManager {
  private homeScreenPrompt?: BeforeInstallPromptEvent = null;

  private callbackInstallPrompt: (e: BeforeInstallPromptEvent) => void;

  private callbackAppInstalled: () => void;

  private desktopPwaEnabled: boolean = false;

  constructor() {
    this.initEvents();
    this.callbackAppInstalled = (): void => {
      Logger.info('App is installed');
    };
  }

  /**
   * Check if site is launched in fullscreen (app)
   */
  public isAppMode(): boolean {
    return (
      window.matchMedia('(display-mode: standalone)').matches ||
      ('standalone' in window.navigator && (window.navigator as WindowNavigator).standalone === true)
    );
  }

  /**
   * Function to execute when install prompt event is emitted by browser.
   */
  public onEventInstallPromptEmitted(callback: (e: BeforeInstallPromptEvent) => void): void {
    this.callbackInstallPrompt = callback;
  }

  /**
   * Function to execute when app is successfully installed
   */
  public onAppInstalled(callback: () => void): void {
    this.callbackAppInstalled = callback;
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
   * Get invite. Method differs between browsers
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
   * Check if a addHomeScreen prompt is available
   */
  public helperIsAvailable(): boolean {
    return !this.isAppMode() && typeof this.getHelperByBrowser() === 'function';
  }

  /**
   * If a helper is available, show it
   */
  public showHelper(): Function {
    if (!this.isAppMode()) {
      const helpModal = this.getHelperByBrowser();
      if (helpModal != null) {
        helpModal.call(this);
      }
    }

    return null;
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
  public showIOSHelper(): void {

    const template = require('../../templates/ios.html.twig');
    this.createPopup(template(translator.getTranslations()), 'pwa-ios');
  }

  /**
   * Firefox Helper: this function should be only called to test
   */
  public showFirefoxHelper(): void {
    const template = require('../../templates/firefox.html.twig');
    this.createPopup(template(translator.getTranslations()), 'pwa-firefox');
  }

  /**
   * Samsung Helper: this function should be only called to test
   */
  public showSamsungHelper(): void {
    const template = require('../../templates/samsung.html.twig');
    this.createPopup(template(translator.getTranslations()), 'pwa-samsung');
  }

  /**
   * Init all events about add home screen
   */
  private initEvents(): void {
    window.addEventListener('beforeinstallprompt', (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      Logger.info('Event beforeinstallprompt received.');
      this.homeScreenPrompt = e;
      if (this.callbackInstallPrompt && this.helperIsAvailable()) {
        this.callbackInstallPrompt(e);
      }
    });

    window.addEventListener('appinstalled', () => {
      this.callbackAppInstalled();
    });
  }

  /**
   * Check if event to add home screen has been sent by browser (chrome/edge)
   */
  private installPromptReady(): boolean {
    return this.homeScreenPrompt !== null;
  }

  /**
   * Create a arrow popup
   * @param text
   * @param browserClass
   */
  private createPopup(text: string, browserClass: string): void {
    const popup = document.createElement('div');
    popup.classList.add('pwa-homescreen-helper');
    popup.classList.add(browserClass);
    popup.innerHTML = text;

    const mask = document.createElement('div');
    mask.classList.add('pwa-homescreen-helper-mask');

    const closeHelper = (): void => {
      document.body.classList.remove('pwa-helper-active');
      document.getElementsByClassName('pwa-homescreen-helper')[0].remove();
      document.getElementsByClassName('pwa-homescreen-helper-mask')[0].remove();
    };

    popup.addEventListener('click', closeHelper);
    window.setTimeout(closeHelper, 10000);

    document.body.appendChild(popup);
    document.body.appendChild(mask);
    document.body.classList.add('pwa-helper-active');
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

interface BrowserInfo {
  os: string;
  browser: string;
  version: number;
}
