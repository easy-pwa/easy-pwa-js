import FirebaseProvider from '../Push/FirebaseProvider';
import AbstractManager from "./AbstractManager";
import App from "../App";

/**
 * Methods for managing about Push
 */
export default class PushManager extends AbstractManager {
  private firebaseInstance: FirebaseProvider | null;

  public init(): Promise<void> {
    if (App.configuration.firebaseApp) {
      return this.initFirebase();
    }

    return Promise.resolve();
  }

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
    return navigator.serviceWorker.ready.then(
        serviceWorkerRegistration => serviceWorkerRegistration.showNotification(title, options)
    );
  }

  /**
   * Check if notifications are supported in the current browser
   * @return true if notification is supported.
   */
  public isNotificationSupported(): boolean {
    return 'Notification' in window;
  }

  /**
   * Get the Firebase provider.
   * @return Firebase provider or null if init function was not called.
   */
  public firebase(): FirebaseProvider | null {
    if (!this.firebaseInstance) {
      throw new Error('You have to provide a firebase app initialized');
    }

    return this.firebaseInstance;
  }

  protected initFirebase(): Promise<void> {
    if (!App.configuration.firebaseApp.messaging) {
      throw new Error('Firebase messaging script is not loaded.');
    }

    return new Promise(resolve => {
      navigator.serviceWorker.ready.then(registration => {
        this.firebaseInstance = new FirebaseProvider(
            registration,
            App.configuration.firebaseApp
        );

        resolve();
      });
    });
  }
}
