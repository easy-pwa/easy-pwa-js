import HomeScreenManager from './HomeScreenManager';
import PushManager from './PushManager';
import Debug from './Debug';
import Logger, { LoggerParameter } from './Logger';

/**
 * All methods for managing PWA.
 */
export default class {
  private onUpdateFoundCallback: (reg: ServiceWorkerRegistration) => void;

  private readonly homeScreenManager: HomeScreenManager;

  private readonly pushManager: PushManager;

  constructor(homeScreenManager: HomeScreenManager, pushManager: PushManager) {
    this.homeScreenManager = homeScreenManager;
    this.pushManager = pushManager;
    this.init();
  }

  /**
   * Register service worker
   * @param swUrl Path to service worker
   * @param options Options to pass to register
   * @param messagingSenderId If you want to use push notifications.
   */
  public registerServiceWorker(
    swUrl: string,
    options?: RegistrationOptions,
    messagingSenderId?: string,
  ): Promise<ServiceWorkerRegistration> {
    return new Promise<ServiceWorkerRegistration>((resolve, reject): void => {
      if (!navigator.serviceWorker) {
        reject(new Error('Service Worker not supported'));
      }

      const url = messagingSenderId ? `${swUrl}?${messagingSenderId}` : swUrl;

      navigator.serviceWorker
        .register(url, options)
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
   * Get the Push Manager for managing Notification Push.
   */
  public getPushManager(): PushManager {
    return this.pushManager;
  }

  /**
   * Get the Home Screen Manager for managing HomeScreen.
   */
  public getHomeScreenManager(): HomeScreenManager {
    return this.homeScreenManager;
  }

  /**
   * Function to execute when a new update can be proposed to user
   */
  public onUpdateFound(callback: (reg: ServiceWorkerRegistration) => void): void {
    this.onUpdateFoundCallback = callback;
    navigator.serviceWorker.oncontrollerchange = (): void => {
      window.location.reload();
    };
  }

  /**
   * Function to execute when browser starts to changes page.
   * Browser loader is not visible in standalone mode
   */
  public onPageLoading(callback: () => void): void {
    if (!this.getHomeScreenManager().isAppMode()) {
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
  public forceUpdateApp(reg: ServiceWorkerRegistration): void {
    reg.waiting.postMessage('skipWaiting');
  }

  /**
   * Enable debug mode
   */
  public enableDebug(): void {
    LoggerParameter.enableDebug();
    Logger.warn('DEBUG ENABLED');
    Debug.analyse();
  }

  /**
   * Init PWA utils
   */
  private init(): void {
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
