import { PwaManager } from '../service';
import FirebaseProvider from '../push/FirebaseProvider';
import {FirebaseMessaging} from "@firebase/messaging-types";
import { FirebaseApp } from '@firebase/app-types';

/**
 * Methods for managing about Push
 */
export default class PushManager {
  private firebase: FirebaseProvider | null;

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
   * Init firebase Notifications
   * @param firebaseApp initialized firebase app
   * @return Return the firebase provider created.
   */
  public initFirebase(firebaseApp: FirebaseApp): FirebaseProvider {
    this.firebase = new FirebaseProvider(PwaManager.getServiceWorkerRegistration(), firebaseApp);

    return this.firebase;
  }

  /**
   * Get the Firebase provider. Call initFirebase before.
   * @return Firebase provider or null if init function was not called.
   */
  public getFirebase(): FirebaseProvider | null {
    if (!this.firebase) {
      throw new Error('You have to call initFirebase method before');
    }

    return this.firebase;
  }
}
