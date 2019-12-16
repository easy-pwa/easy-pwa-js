import { WebManifest } from 'web-manifest-reader';
import InstallManager from './InstallManager';
import PushManager from './PushManager';
/**
 * All methods for managing PWA.
 */
export default class {
    private onUpdateFoundCallback;
    private serviceWorkerRegistration?;
    private manifest?;
    /**
     * Get the Push Manager for managing Notification Push.
     */
    getPushManager(): PushManager;
    /**
     * Get the Home Screen Manager for managing HomeScreen.
     */
    getInstallManager(): InstallManager;
    /**
     * Check if site is launched in fullscreen (app)
     */
    isAppMode(): boolean;
    /**
     * Function to execute when a new update can be proposed to user
     */
    onUpdateFound(callback: (reg: ServiceWorkerRegistration) => void): void;
    /**
     * Function to execute when browser starts to changes page.
     * Browser loader is not visible in standalone mode
     */
    onPageLoading(callback: () => void): void;
    /**
     * When you want to update app (get a service worker refresh)
     */
    forceUpdateApp(reg: ServiceWorkerRegistration): void;
    /**
     * Register service worker
     * @param swUrl Path to service worker
     * @param options Options to pass to register
     */
    private registerServiceWorker;
    /**
     * Get the service worker registration
     */
    getServiceWorkerRegistration(): ServiceWorkerRegistration | null;
    getManifest(): WebManifest | null;
    /**
     * Enable debug mode
     */
    enableDebug(): void;
    /**
     * Init PWA
     */
    init(swPath: string, options?: RegistrationOptions): Promise<void>;
    private initOfflineClass;
}
