import { pwaManager } from '../service';
import FirebaseProvider from '../push/FirebaseProvider';

/**
 * PWA - Push Manager
 */
export default class PushManager {
  private firebase: FirebaseProvider | null;

  /**
   * Requests permission
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

  public initFirebase(messagingSenderId: string): FirebaseProvider {
    navigator.serviceWorker.controller.postMessage(`firebaseMessagingSenderId=${messagingSenderId}`);
    this.firebase = new FirebaseProvider(pwaManager.getServiceWorkerRegistration(), messagingSenderId);

    return this.firebase;
  }

  public getFirebase(): FirebaseProvider | null {
    if (!this.firebase) {
      throw new Error('You have to call initFirebase method before');
    }

    return this.firebase;
  }
}
