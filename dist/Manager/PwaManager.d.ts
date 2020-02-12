import { WebManifest } from 'web-manifest-reader';
import AbstractManager from './AbstractManager';
/**
 * All methods for managing PWA.
 */
export default class PwaManager extends AbstractManager {
    private onUpdateFoundCallback;
    private serviceWorkerRegistration?;
    private manifest?;
    init(): Promise<void>;
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
     * When you want to update app (get a Service worker refresh)
     */
    private forceUpdateApp;
    /**
     * Register Service worker
     * @param swUrl Path to Service worker
     * @param options Options to pass to register
     */
    private registerServiceWorker;
    /**
     * Get the manifest content.
     * @return Get the manifest's content if it was read successfully, null otherwise.
     */
    getManifest(): WebManifest | null;
    /**
     * Function to execute when browser starts to changes page.
     * because browser loader is not visible in standalone mode
     */
    private initPageChangingEvent;
    private initOfflineClass;
    private initPwaCompat;
}
