import { detect } from 'detect-browser';
import Logger from './Logger';
import { WebManifest, WebManifestIcon, WebManifestDisplay } from '../type';

export default class Debug {
  private sw: ServiceWorkerRegistration = null;

  public analyse(): void {

    this.browser();

    if ('serviceWorker' in navigator) {

      this.testProtocol();

      this.loadServiceWorker().then(() => {
        this.loadManifest().then(manifest => {
          this.testManifest(manifest);
        });
      });
    } else {
      this.showErr('Service Worker is not supported by current browser');
    }
  }

  /**
   * Info about current browser
   */
  private browser(): void {
    Logger.info(detect());
  }

  /**
   * Test if basic elements exist
   */
  private testManifest(data: WebManifest): void {
    if ((!('short_name' in data) || data.short_name === '') && (!('name' in data) || data.name === '')) {
      this.showErr('Manifest must includes short_name or name property');
    }

    if (!('start_url' in data)) {
      this.showErr('start_url is not specified.');
    }

    if (!data.display || data.display !== WebManifestDisplay.STANDALONE) {
      this.showErr('display property is not defined or is not configured for standalone');
    }

    if (!data.icons || data.icons.find((i: WebManifestIcon) => i.sizes && i.sizes === '512x512') === null) {
      this.showErr('A 512px sized icon must be specified');
    }
  }

  /**
   * Test if protocol is accepted for pwa
   */
  private testProtocol(): void {
    if (
      window.location.protocol !== 'https:' &&
      !window.location.host.includes('localhost') &&
      !window.location.host.includes('127.0.0.1')
    ) {
      this.showErr('Https protocol is required.');
    }
  }

  /**
   * Load et check if Service Worker is correctly registered
   */
  private loadServiceWorker(): Promise<void> {
    return new Promise((resolve, reject): void => {
      setTimeout(() => {
        if (this.sw === null) {
          this.showErr('Service Worker is not correctly registered');
          reject();
        }
      }, 5000);

      navigator.serviceWorker.ready.then(reg => {
        this.sw = reg;
        resolve();
      });
    });
  }

  /**
   * Search, load and check manifest
   */
  private loadManifest(): Promise<WebManifest> {
    return new Promise((resolve, reject): void => {
      const manifestEl: HTMLLinkElement = document.head.querySelector('link[rel="manifest"]');
      const manifestHref = manifestEl ? manifestEl.href : '';

      if (manifestHref === '') {
        this.showErr('Manifest file is not declared in head page');
        reject();
      }

      fetch(manifestHref)
        .then(response => response.json())
        .then((data): void => {
          resolve(data);
        })
        .catch((): void => {
          this.showErr("Manifest file specified doesn't exist");
          reject();
        });
    });
  }

  /**
   * Show an error in console
   * @param {string} txt
   */
  private showErr(txt: string): void {
    Logger.error(`PWA Debug : ${txt}`);
  }
};
