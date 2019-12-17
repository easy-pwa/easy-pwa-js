import FirebaseProvider from '../push/FirebaseProvider';
/**
 * Methods for managing about Push
 */
export default class PushManager {
    private firebase;
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
     * Init firebase Notifications
     * @param messagingSenderId: The firebase messaging sender id
     * @return Return the firebase provider created.
     */
    initFirebase(messagingSenderId: string): FirebaseProvider;
    /**
     * Get the Firebase provider. Call initFirebase before.
     * @return Firebase provider or null if init function was not called.
     */
    getFirebase(): FirebaseProvider | null;
}
