import AbstractManager from './AbstractManager';
/**
 * Methods for managing about Push
 */
export default class PushManager extends AbstractManager {
    protected static readonly GRANTED = "granted";
    init(): Promise<void>;
    /**
     * Check if permission is already granted
     * @return Return true if permission is already granted
     */
    hasPermission(): boolean;
    /**
     * Requests permission
     * @return Return a promise with the notification permission status.
     */
    requestPermission(): Promise<NotificationPermission>;
    /**
     * Check if notifications are supported in the current browser
     * @return true if notification is supported.
     */
    isNotificationSupported(): boolean;
}
