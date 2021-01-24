import AbstractManager from './AbstractManager';

/**
 * Methods for managing about Push
 */
export default class PushManager extends AbstractManager {

  protected static readonly GRANTED = 'granted';

  public init(): Promise<void> {
    return Promise.resolve();
  }

  /**
   * Check if permission is already granted
   * @return Return true if permission is already granted
   */
  public hasPermission(): boolean {
    return Notification.permission === PushManager.GRANTED;
  }

  /**
   * Requests permission
   * @return Return a promise with the notification permission status.
   */
  public requestPermission(): Promise<NotificationPermission> {
    return new Promise((resolve, reject): void => {
      if (this.hasPermission()) {
        resolve(PushManager.GRANTED);
      }

      Notification.requestPermission().then(permission => {
        if (permission === PushManager.GRANTED) {
          resolve(permission);
        } else {
          reject(permission);
        }
      });
    });
  }

  /**
   * Check if notifications are supported in the current browser
   * @return true if notification is supported.
   */
  public isNotificationSupported(): boolean {
    return 'Notification' in window;
  }
}
