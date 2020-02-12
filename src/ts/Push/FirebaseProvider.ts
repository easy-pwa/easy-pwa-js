import { FirebaseMessaging } from '@firebase/messaging-types';
import FirebaseAppMessaging from './FirebaseAppMessaging';
import App from '../App';

export default class FirebaseProvider {

  private static readonly KEY_STORAGE_TOKEN_SENT = 'easy-pwa-token-sent';

  private readonly firebaseApp: FirebaseAppMessaging;

  private readonly messaging: FirebaseMessaging;

  constructor(serviceWorker: ServiceWorkerRegistration, firebaseApp: FirebaseAppMessaging) {
    this.firebaseApp = firebaseApp;
    this.messaging = firebaseApp.messaging();
    this.messaging.useServiceWorker(serviceWorker);
    this.messaging.onTokenRefresh(() => { this.setTokenSent(false); this.getToken(); });
    this.messaging.onMessage(this.foregroundNotification);
  }

  /**
   * Check if firebase is initialized
   */
  public isInitialized(): boolean {
    return this.firebaseApp !== null && this.messaging !== null;
  }

  /**
   * Get user token (and notify)
   */
  public getToken(notify = true): Promise<string> {
    return new Promise<string>((resolve, reject): void => {
      const timeout = global.setTimeout(() => {
        reject(new Error('getToken timeout exceeded'));
      }, 25000);

      this.messaging
        .getToken()
        .then((token?: string) => {
          clearTimeout(timeout);
          if (token) {
            if (notify && !this.isTokenSent()) {
              App.configuration.newTokenFetchedCallback(token).then(() => {
                this.setTokenSent(true);
                resolve(token);
              }).catch(() => {
                reject(new Error('An error is occurred when sending token to server.'));
              });
            } else {
              resolve(token);
            }
          } else {
            reject(new Error('Request permission before'));
          }
        })
        .catch((err: Error) => {
          clearTimeout(timeout);
          reject(err);
        });
    });
  }

  /**
   * Delete user token
   */
  public deleteToken(token: string): Promise<string | Error> {
    return new Promise<string | Error>((resolve, reject): void => {
      if (token !== null) {
        this.messaging
          .deleteToken(token)
          .then(() => {
            App.logger.info(`Token deleted: ${token}`);
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
    if (App.configuration.foregroundNotification) {
      App.configuration.foregroundNotification(payload);
      return;
    }

    if (Object.prototype.hasOwnProperty.call(payload, 'notification')) {
      const notificationSettings = payload.notification;
      notificationSettings.data = { ...notificationSettings.data };

      // Request managed by FCM
      notificationSettings.data.FCM_MSG = {};
      notificationSettings.data.FCM_MSG.notification = payload.notification;

      App.pushManager.showNotification(notificationSettings.title, notificationSettings).then(() => {
        App.logger.info('Notification received in foreground and transmitted to SW.');
      });
    }
  }

  private isTokenSent(): boolean {
    return localStorage.getItem(FirebaseProvider.KEY_STORAGE_TOKEN_SENT) !== null;
  }

  private setTokenSent(sent: boolean): void {
    if (sent) {
      return localStorage.setItem(FirebaseProvider.KEY_STORAGE_TOKEN_SENT, '1');
    }

    return localStorage.removeItem(FirebaseProvider.KEY_STORAGE_TOKEN_SENT);
  }
}
