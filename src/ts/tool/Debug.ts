import { detect } from 'detect-browser';
import manifest, { WebManifest, WebManifestIcon } from 'web-manifest-reader';
import { logger } from '../service';

export default class Debug {
  private static readonly TXT: { [key: string]: string } = {
    SW_SUPPORTED: 'Service Worker is supported by the current browser.',
    VALID_PROTOCOL: 'You use https protocol or you are in localhost.',
    COMPLETE_MANIFEST_NAME: 'Manifest includes short_name and name properties.',
    COMPLETE_MANIFEST_START_URL: 'Manifest includes start_url property.',
    COMPLETE_MANIFEST_ICON: '512px sized icon is specified.',
    SW_REGISTERED: 'Service worker is correctly registered.',
  };

  private sw: ServiceWorkerRegistration;

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
        this.testManifest(webManifestData);
      });
    });
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
    this.showResult(Debug.TXT.COMPLETE_MANIFEST_NAME, !(!data.short_name || !data.name));
    this.showResult(Debug.TXT.COMPLETE_MANIFEST_START_URL, data.start_url !== null);
    this.showResult(
      Debug.TXT.COMPLETE_MANIFEST_ICONL,
      data.icons && data.icons.find((i: WebManifestIcon) => i.sizes && i.sizes === '512x512') !== false,
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
  private async loadManifest(): Promise<WebManifest> {
    return manifest.read();
  }

  /**
   * Show an ok in console
   */
  private showOk(txt: string): void {
    logger.debug(`PWA Debug : OK - ${txt}`);
  }

  /**
   * Show an error in console
   */
  private showErr(txt: string): void {
    logger.error(`PWA Debug : ERR - ${txt}`);
  }

  private showResult(txt: string, ok: boolean): void {
    if (ok) {
      this.showOk(txt);
    } else {
      this.showErr(txt);
    }
  }
}
