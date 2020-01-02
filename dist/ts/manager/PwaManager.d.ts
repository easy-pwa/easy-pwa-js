import { WebManifest } from 'web-manifest-reader';
import { default as InstallManagerClass } from './InstallManager';
import { default as PushManagerClass } from './PushManager';
/**
 * All methods for managing PWA.
 */
export default class PwaManager {
    private onUpdateFoundCallback;
    private serviceWorkerRegistration?;
    private manifest?;
    /**
     * Call this function, first.
     * @param swPath The path to the service worker
     * @param options options to pass to service worker registration.
     * @return Return a promise when treatment is finished.
     */
    init(swPath: string, options?: RegistrationOptions): Promise<ServiceWorkerRegistration>;
    /**
     * Get the Push Manager for managing push notification.
     */
    getPushManager(): PushManagerClass;
    /**
     * Get the Install Manager for managing Home Screen.
     */
    getInstallManager(): InstallManagerClass;
    /**
     * Check if site is launched in fullscreen (app)
     * @return true if you are in PWA mode.
     */
    isAppMode(): boolean;
    /**
     * Function to execute when a new update can be proposed to user
     */
    private onUpdateFound;
    /**
     * When you want to update app (get a service worker refresh)
     */
    private forceUpdateApp;
    /**
     * Register service worker
     * @param swUrl Path to service worker
     * @param options Options to pass to register
     */
    private registerServiceWorker;
    /**
     * Get the service worker registration
     * @return Get the service worker registration or null if it's bad registered.
     */
    getServiceWorkerRegistration(): ServiceWorkerRegistration | null;
    /**
     * Get the manifest content.
     * @return Get the manifest's content if it was read successfully, null otherwise.
     */
    getManifest(): WebManifest | null;
    /**
     * Enable Debug mode. More information is showed in the console for helping to Debug your PWA.
     */
    enableDebug(): void;
    /**
     * Function to execute when browser starts to changes page.
     * because browser loader is not visible in standalone mode
     */
    private initPageChangingEvent;
    private initOfflineClass;
}
