import { FirebaseMessaging } from '@firebase/messaging-types';
import { FirebaseApp } from '@firebase/app-types';
import { PushManager, logger } from '../service';
import { FirebasePayloadMessage } from '../type';

export default class FirebaseProvider {
  private firebaseApp: FirebaseApp;

  private readonly messaging: FirebaseMessaging;

  private tokenFetchedCallback: (token: string) => void;

  private foregroundMessageCallback: (payload: FirebasePayloadMessage) => void;

  constructor(serviceWorker: ServiceWorkerRegistration, firebaseApp: FirebaseApp) {

    this.tokenFetchedCallback = (token: string): void => {
      logger.info(`Token to send to server: ${token}`);
    };

    this.firebaseApp = firebaseApp;
    this.messaging = firebaseApp.messaging();
    this.messaging.useServiceWorker(serviceWorker);
    this.messaging.onTokenRefresh(this.fetchToken);
    this.messaging.onMessage(this.foregroundNotification);
  }

  /**
   * Check if firebase is initialized
   */
  public isInitialized(): boolean {
    return this.firebaseApp !== null && this.messaging !== null;
  }

  /**
   * @param callback Callback to execute if notification is received when user is currently on the site
   */
  public onForegroundNotification(callback: (payload: FirebasePayloadMessage) => void): void {
    this.foregroundMessageCallback = callback;
  }

  /**
   * When a token is fetched, function to execute (send it to server for example)
   * @param callback
   */
  public onTokenFetched(callback: (token: string) => void): void {
    this.tokenFetchedCallback = callback;
  }

  /**
   * Fetch token and notify server
   */
  public fetchToken(): Promise<string | Error> {
    return new Promise((resolve, reject): void => {
      this.getToken()
        .then((token: string) => {
          if (token) {
            this.tokenFetchedCallback(token);
            resolve(token);
          } else {
            reject(new Error('No Instance ID token available. Request permission to generate one.'));
          }
        })
        .catch((err: Error) => {
          reject(new Error(`Error when fetch token ${err}`));
        });
    });
  }

  /**
   * Get user token
   */
  public getToken(): Promise<string | Error> {
    return new Promise<string | Error>((resolve, reject): void => {
      const timeout = global.setTimeout(() => {
        reject(new Error('getToken Timeout exceeded'));
      }, 25000);

      this.messaging
        .getToken()
        .then((token: string) => {
          clearTimeout(timeout);
          resolve(token);
        })
        .catch((err: Error) => {
          clearTimeout(timeout);
          reject(err);
        });
    });
  }

  /**
   * delete user token
   */
  public deleteToken(token: string): Promise<string | Error> {
    return new Promise<string | Error>((resolve, reject): void => {
      if (token !== null) {
        this.messaging
          .deleteToken(token)
          .then(() => {
            logger.info(`Token deleted: ${token}`);
            resolve();
          })
          .catch(reject);
      }
    });
  }

  /**
   * ForegroundNotification
   */
  private foregroundNotification(payload: FirebasePayloadMessage): void {
    if (this.foregroundMessageCallback) {
      this.foregroundMessageCallback(payload);
      return;
    }

    if (Object.prototype.hasOwnProperty.call(payload, 'notification')) {
      const notificationSettings = payload.notification;
      notificationSettings.data = { ...notificationSettings.data };

      // Request managed by FCM
      notificationSettings.data.FCM_MSG = {};
      notificationSettings.data.FCM_MSG.notification = payload.notification;

      PushManager.showNotification(notificationSettings.title, notificationSettings).then(() => {
        logger.info('Notification received in foreground and transmitted to SW.');
      });
    }
  }
}
