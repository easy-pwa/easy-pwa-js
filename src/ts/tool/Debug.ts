import { detect } from 'detect-browser';
import manifest, { WebManifest, WebManifestIcon } from 'web-manifest-reader';
import { logger } from '../service';

export default class Debug {
  private sw: ServiceWorkerRegistration = null;

  public analyse(): void {
    this.browser();

    if ('serviceWorker' in navigator) {
      this.testProtocol();

      this.loadServiceWorker().then(() => {
        this.loadManifest().then(webManifestData => {
          this.testManifest(webManifestData);
        });
      });
    } else {
      this.showErr('Service Worker is not supported by the current browser');
    }
  }

  /**
   * Info about current browser
   */
  private browser(): void {
    logger.info(detect());
  }

  /**
   * Test if basic elements exist
   */
  private testManifest(data: WebManifest): void {
    if (!data.short_name || !data.name) {
      this.showErr('Manifest must includes short_name or name property');
    }

    if (!data.start_url) {
      this.showErr('start_url is not specified.');
    }

    if (!data.icons || !data.icons.find((i: WebManifestIcon) => i.sizes && i.sizes === '512x512')) {
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
      this.showErr('https protocol is required or test in localhost.');
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
  private async loadManifest(): Promise<WebManifest> {
    return manifest.read();
  }

  /**
   * Show an error in console
   * @param {string} txt
   */
  private showErr(txt: string): void {
    logger.error(`PWA Debug : ${txt}`);
  }
}
