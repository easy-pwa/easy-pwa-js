import FirebaseProvider from '../Push/FirebaseProvider';
import AbstractManager from './AbstractManager';
/**
 * Methods for managing about Push
 */
export default class PushManager extends AbstractManager {
    private firebaseInstance;
    init(): Promise<void>;
    /**
     * Requests permission
     * @return Return a promise with the notification permission status.
     */
    requestPermission(): Promise<NotificationPermission>;
    /**
     * Show a notification.
     * @param title The notification's title
     * @param options The notification's options.
     * @return Return a promise when notification is showed.
     */
    showNotification(title: string, options: NotificationOptions): Promise<void>;
    /**
     * Check if notifications are supported in the current browser
     * @return true if notification is supported.
     */
    isNotificationSupported(): boolean;
    /**
     * Get the Firebase provider.
     * @return Firebase provider or null if init function was not called.
     */
    firebase(): FirebaseProvider | null;
    protected initFirebase(): Promise<void>;
}
