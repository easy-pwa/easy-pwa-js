import manifest, { WebManifest } from 'web-manifest-reader';
import InstallManager from './InstallManager';
import PushManager from './PushManager';
import {debug, homeScreenManager, logger, loggerParameter, pushManager} from '../service';
import { WindowNavigator } from '../type';

/**
 * All methods for managing PWA.
 */
export default class PwaManager {
  public static readonly EVENT_READY = 'easy-pwa-ready';

  private onUpdateFoundCallback: (reg: ServiceWorkerRegistration) => void;

  private serviceWorkerRegistration?: ServiceWorkerRegistration = null;

  private manifest?: WebManifest = null;

  /**
   * Call this function, first.
   * @param swPath The path to the service worker
   * @param options options to pass to service worker registration.
   * @return Return a promise when treatment is finished.
   */
  public async init(swPath: string, options?: RegistrationOptions): Promise<ServiceWorkerRegistration> {
    this.initOfflineClass();
    this.manifest = await manifest.read();
    this.serviceWorkerRegistration = await this.registerServiceWorker(swPath, options);

    const event = new Event(PwaManager.EVENT_READY);
    window.dispatchEvent(event);

    return this.serviceWorkerRegistration;
  }

  /**
   * Get the Push Manager for managing push notification.
   */
  public getPushManager(): PushManager {
    if (!this.serviceWorkerRegistration) {
      throw new Error('A Service worker has to be registered before.');
    }

    return pushManager;
  }

  /**
   * Get the Install Manager for managing Home Screen.
   */
  public getInstallManager(): InstallManager {
    if (!this.serviceWorkerRegistration) {
      throw new Error('A Service worker has to be registered before.');
    }

    return homeScreenManager;
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
   * Function to execute when browser starts to changes page.
   * because browser loader is not visible in standalone mode
   * @param callback A function to execute when page is changing.
   */
  public onPageChanging(callback: () => void): void {
    if (!this.isAppMode()) {
      return;
    }

    // iosCase
    const addCheckLoader = (event: Event): void => {
      const isA = event.composedPath().find((elem: HTMLLinkElement) => {
        if (elem.localName === 'a') {
          const origin = window.location.href.split('#')[0];
          const target = elem.href.split('#')[0];
          return origin !== target && !RegExp('javascript').test(elem.href);
        }
        return false;
      });
      if (isA) {
        callback();
      }
    };

    document.body.addEventListener('click', addCheckLoader);
    window.addEventListener('beforeunload', () => {
      if (document.visibilityState === 'visible') {
        callback();
      }
    });
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
   * @return Get the manifest's content if it was read successfly, null otherwise.
   */
  public getManifest(): WebManifest | null {
    return this.manifest;
  }

  /**
   * Enable debug mode. More information is showed in the console for helping to debug your PWA.
   */
  public enableDebug(): void {
    loggerParameter.enableDebug();
    logger.warn('DEBUG ENABLED');
    debug.analyse();
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
