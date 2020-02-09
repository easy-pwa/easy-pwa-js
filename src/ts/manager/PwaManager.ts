import manifest, { WebManifest } from 'web-manifest-reader';
import { WindowNavigator } from '../type';
import PageChangingEvent from '../event/PageChangingEvent';
import AbstractManager from "./AbstractManager";
import App from "../App";

/**
 * All methods for managing PWA.
 */
export default class PwaManager extends AbstractManager {
  private onUpdateFoundCallback: (reg: ServiceWorkerRegistration) => void;

  private serviceWorkerRegistration?: ServiceWorkerRegistration = null;

  private manifest?: WebManifest = null;

  public async init(): Promise<void> {
    this.initOfflineClass();
    this.initPageChangingEvent();
    this.manifest = await manifest.read();
    require('../../../node_modules/pwacompat/pwacompat.min.js');
    this.serviceWorkerRegistration = await this.registerServiceWorker(
        App.configuration.swPath,
        App.configuration.registrationOptions
    );
  }

  /**
   * Check if site is launched in fullscreen (app)
   * @return true if you are in PWA mode.
   */
  public isAppMode(): boolean {
    return (
      window.matchMedia('(display-mode: standalone)').matches ||
      ('standalone' in window.navigator && (window.navigator as WindowNavigator).standalone === true)
    );
  }

  /**
   * Function to execute when a new update can be proposed to user
   */
  private onUpdateFound(callback: (reg: ServiceWorkerRegistration) => void): void {
    this.onUpdateFoundCallback = callback;
    navigator.serviceWorker.oncontrollerchange = (): void => {
      window.location.reload();
    };
  }

  /**
   * When you want to update app (get a service worker refresh)
   */
  private forceUpdateApp(reg: ServiceWorkerRegistration): void {
    reg.waiting.postMessage('skipWaiting');
  }

  /**
   * Register service worker
   * @param swUrl Path to service worker
   * @param options Options to pass to register
   */
  private registerServiceWorker(swUrl: string, options?: RegistrationOptions): Promise<ServiceWorkerRegistration> {
    return new Promise<ServiceWorkerRegistration>((resolve, reject): void => {
      if (!navigator.serviceWorker) {
        reject(new Error('Service Worker not supported'));
      }

      navigator.serviceWorker
        .register(swUrl, options)
        .then((reg: ServiceWorkerRegistration) => {
          if (reg.active) {
            reg.addEventListener('updatefound', (): void => {
              const worker = reg.installing;
              worker.addEventListener('statechange', (): void => {
                if (worker.state === 'installed') {
                  if (this.onUpdateFoundCallback) {
                    this.onUpdateFoundCallback(reg);
                  }
                }
              });
            });
          }

          if (reg.active && reg.active.state === 'activated') {
            resolve(reg);
          }

          if (!reg.installing) {
            return;
          }
          const worker = reg.installing;
          worker.addEventListener('statechange', (): void => {
            if (worker.state === 'redundant') {
              reject();
            }

            if (worker.state === 'activated' && !navigator.serviceWorker.controller) {
              resolve(reg);
            }
          });
        })
        .catch(reject);
    });
  }

  /**
   * Get the service worker registration
   * @return Get the service worker registration or null if it's bad registered.
   */
  public getServiceWorkerRegistration(): ServiceWorkerRegistration | null {
    return this.serviceWorkerRegistration;
  }

  /**
   * Get the manifest content.
   * @return Get the manifest's content if it was read successfully, null otherwise.
   */
  public getManifest(): WebManifest | null {
    return this.manifest;
  }

  /**
   * Function to execute when browser starts to changes page.
   * because browser loader is not visible in standalone mode
   */
  private initPageChangingEvent(): void {
    if (!this.isAppMode()) {
      return;
    }

    const pageChanging = (): void => {
      if (document.visibilityState === 'visible') {
        window.dispatchEvent(new Event(PageChangingEvent.EVENT_NAME));
      }
    };

    window.addEventListener('beforeunload', pageChanging);
    window.addEventListener('pagehide', pageChanging);
  }

  private initOfflineClass(): void {
    const setConnectionStatus = (online: boolean): void => {
      document.body.classList.toggle('offline', !online);
    };

    window.addEventListener('online', (): void => {
      setConnectionStatus(true);
    });

    window.addEventListener('offline', (): void => {
      setConnectionStatus(false);
    });

    window.addEventListener('load', (): void => {
      setConnectionStatus(navigator.onLine);
    });
  }
}
