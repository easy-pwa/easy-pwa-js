import { PwaManager } from '../service';
import FirebaseProvider from '../push/FirebaseProvider';
import {FirebaseAppMessaging} from "../push/FirebaseAppMessaging";

/**
 * Methods for managing about Push
 */
export default class PushManager {
  private firebaseInstance: FirebaseProvider | null;

  /**
   * Requests permission
   * @return Return a promise with the notification permission status.
   */
  public requestPermission(): Promise<NotificationPermission> {
    return new Promise((resolve, reject): void => {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          resolve(permission);
        } else {
          reject(permission);
        }
      });
    });
  }

  /**
   * Show a notification.
   * @param title The notification's title
   * @param options The notification's options.
   * @return Return a promise when notification is showed.
   */
  public showNotification(title: string, options: NotificationOptions): Promise<void> {
    return PwaManager.getServiceWorkerRegistration().showNotification(title, options);
  }

  /**
   * Check if notifications are supported in the current browser
   * @return true if notification is supported.
   */
  public isNotificationSupported(): boolean {
    return 'Notification' in window;
  }

  /**
   * Get the Firebase provider. First time, you have to pass a firebase app initialized
   * @param firebaseApp initialized firebase app
   * @return Firebase provider or null if init function was not called.
   */
  public firebase(firebaseApp?: FirebaseAppMessaging): FirebaseProvider | null {
    if (!firebaseApp.messaging) {
      throw new Error('Firebase messaging script is not loaded.');
    }

    if (firebaseApp) {
      this.firebaseInstance = new FirebaseProvider(PwaManager.getServiceWorkerRegistration(), firebaseApp);
    }

    if (!this.firebaseInstance) {
      throw new Error('You have to provide a firebase app initialized');
    }

    return this.firebaseInstance;
  }
}
