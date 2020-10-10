import { detect as BrowserDetect } from 'detect-browser';
import manifest, { WebManifest, WebManifestIcon } from 'web-manifest-reader';

import App from '../App';

export default class Debug {
  private static readonly TXT: { [key: string]: string } = {
    SW_SUPPORTED: 'Service Worker is supported by the current browser.',
    VALID_PROTOCOL: 'You use https protocol or you are in localhost.',
    READABLE_MANIFEST: 'Manifest is readable',
    COMPLETE_MANIFEST_NAME: 'Manifest includes short_name and name properties.',
    COMPLETE_MANIFEST_START_URL: 'Manifest includes start_url property.',
    COMPLETE_MANIFEST_ICON: '512px sized icon is specified.',
    SW_REGISTERED: 'Service worker is correctly registered.',
  };

  private sw: ServiceWorkerRegistration|null = null;

  public analyse(): void {
    this.browser();

    const swSupported = 'serviceWorker' in navigator;
    this.showResult(Debug.TXT.SW_SUPPORTED, swSupported);

    if (!swSupported) {
      return;
    }

    this.testProtocol();

    this.loadServiceWorker().then(() => {
      this.loadManifest().then(webManifestData => {
        if (webManifestData === null) {
          this.showResult(Debug.TXT.READABLE_MANIFEST, swSupported);
          return;
        }
        this.testManifest(webManifestData);
      });
    });
  }

  /**
   * Info about current browser
   */
  private browser(): void {
    App.logger.info(BrowserDetect());
  }

  /**
   * Test if basic elements exist
   */
  private testManifest(data: WebManifest): void {
    this.showResult(Debug.TXT.COMPLETE_MANIFEST_NAME, !(!data.short_name || !data.name));
    this.showResult(Debug.TXT.COMPLETE_MANIFEST_START_URL, data.start_url !== null);
    this.showResult(
      Debug.TXT.COMPLETE_MANIFEST_ICONL,
      data.icons !== undefined && data.icons.find((i: WebManifestIcon) => i.sizes && i.sizes === '512x512') !== false
    );
  }

  /**
   * Test if protocol is accepted for pwa
   */
  private testProtocol(): void {
    const isInvalidProtocol =
      window.location.protocol !== 'https:' &&
      !window.location.host.includes('localhost') &&
      !window.location.host.includes('127.0.0.1');
    this.showResult(Debug.TXT.VALID_PROTOCOL, !isInvalidProtocol);
  }

  /**
   * Load et check if Service Worker is correctly registered
   */
  private loadServiceWorker(): Promise<void> {
    return new Promise((resolve, reject): void => {
      setTimeout(() => {
        if (this.sw === null) {
          this.showErr(Debug.TXT.SW_REGISTERED);
          reject();
        }
      }, 5000);

      navigator.serviceWorker.ready.then(reg => {
        this.sw = reg;
        this.showOk(Debug.TXT.SW_REGISTERED);
        resolve();
      });
    });
  }

  /**
   * Search, load and check manifest
   */
  private async loadManifest(): Promise<WebManifest|null> {
    return manifest.read();
  }

  /**
   * Show an ok in console
   */
  private showOk(txt: string): void {
    App.logger.debug(`OK - ${txt}`);
  }

  /**
   * Show an error in console
   */
  private showErr(txt: string): void {
    App.logger.error(`ERR - ${txt}`);
  }

  private showResult(txt: string, ok: boolean): void {
    if (ok) {
      this.showOk(txt);
    } else {
      this.showErr(txt);
    }
  }
}
