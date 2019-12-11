import {pwaManager} from "../service";
import PushFirebase from "./PushFirebase";

/**
 * PWA - Push Manager
 */
export default class PushManager {

  private firebase: PushFirebase|null;

  /**
   * Requests permission
   */
  public requestPermission(): Promise<NotificationPermission> {
    return new Promise((resolve, reject): void => {
      Notification.requestPermission().then((permission) => {
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
   */
  public showNotification(title: string, options: NotificationOptions): Promise<void> {
    return pwaManager.getServiceWorkerRegistration().showNotification(title, options);
  }

  /**
   * Check if notifications are supported in the current browser
   */
  public isNotificationSupported(): boolean {
    return 'Notification' in window;
  }

  public initializeFirebase(serviceWorker: ServiceWorkerRegistration, messagingSenderId: string): void {
    this.firebase = new PushFirebase(serviceWorker, messagingSenderId);
  }

  public getFirebase(): PushFirebase|null {
    if (!this.firebase) {
      throw new Error('You have to provide a messagingSenderId when you register the service worker.');
    }

    return this.firebase;
  }
}
