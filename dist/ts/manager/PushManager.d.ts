import FirebaseProvider from '../push/FirebaseProvider';
/**
 * PWA - Push Manager
 */
export default class PushManager {
    private firebase;
    /**
     * Requests permission
     */
    requestPermission(): Promise<NotificationPermission>;
    /**
     * Show a notification.
     */
    showNotification(title: string, options: NotificationOptions): Promise<void>;
    /**
     * Check if notifications are supported in the current browser
     */
    isNotificationSupported(): boolean;
    initFirebase(messagingSenderId: string): FirebaseProvider;
    getFirebase(): FirebaseProvider | null;
}
