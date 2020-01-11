import FirebaseProvider from '../push/FirebaseProvider';
import FirebaseAppMessaging from '../push/FirebaseAppMessaging';
/**
 * Methods for managing about Push
 */
export default class PushManager {
    private firebaseInstance;
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
     * Get the Firebase provider. First time, you have to pass a firebase app initialized
     * @param firebaseApp initialized firebase app
     * @return Firebase provider or null if init function was not called.
     */
    firebase(firebaseApp?: FirebaseAppMessaging): FirebaseProvider | null;
}
