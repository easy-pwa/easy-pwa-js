import * as firebase from 'firebase/app';
import 'firebase/messaging';
import { FirebaseMessaging } from '@firebase/messaging-types';
import Logger from './Logger';
import { FirebasePayloadMessage } from '../type';

/**
 * PWA - Push Manager
 */
export default class PushManager {
  public static readonly STORAGE_CURRENT_TOKEN: string = 'PWA-PUSH-TOKEN';

  public static readonly STORAGE_DATE_TOKEN_CHECK: string = 'PWA-PUSH-TOKEN-CHECK';

  public static readonly TOKEN_CHECK_INTERVAL: number = 24 * 60 * 60;

  private messaging: FirebaseMessaging = null;

  private sw: ServiceWorkerRegistration;

  private tokenFetchedCallback: (token: string) => void;

  constructor() {
    this.tokenFetchedCallback = (token: string): void => {
      Logger.info(`Token to send to server: ${token}`);
    };
  }

  /**
   * Check if firebase is initialized
   */
  public isInitialized(): boolean {
    return firebase.apps.length > 0 && this.messaging != null;
  }

  /**
   * Requests permission
   */
  public requestPermission(): Promise<void | Error> {
    return new Promise((resolve, reject): void => {
      if (this.isInitialized()) {
        this.messaging
          .requestPermission()
          .then(resolve)
          .catch(reject);
      } else {
        reject(new Error('Firebase should be initialized before'));
      }
    });
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
            PushManager.setCurrentToken(token);
            PushManager.setDateLastTokenCheck();
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
      if (!this.isInitialized()) {
        reject(new Error('Firebase should be initialized before'));
      }

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
      if (!this.isInitialized()) {
        reject(new Error('Firebase should be initialized before'));
      }
      if (token !== null) {
        this.messaging
          .deleteToken(token)
          .then(() => {
            PushManager.setCurrentToken(null);
            Logger.info(`Token deleted: ${token}`);
            resolve();
          })
          .catch(reject);
      }
    });
  }

  /**
   * Initialize Firebase Push Notification
   * @param sw The Service Worker reference
   * @param messagingSenderId The firebase messaging id
   * @param onForegroundMessage Callback to execute if notification is received when user is currently on the site
   */
  public initialize(
    sw: ServiceWorkerRegistration,
    messagingSenderId: string,
    onForegroundMessage?: (payload: FirebasePayloadMessage) => void
  ): Promise<Error | this> {
    return new Promise((resolve, reject): void => {
      if (!('Notification' in window)) {
        reject(new Error('Notification not supported'));
      }

      firebase.initializeApp({
        messagingSenderId,
      });

      this.sw = sw;
      this.messaging = firebase.messaging();
      this.messaging.useServiceWorker(this.sw);
      this.messaging.onTokenRefresh(this.fetchToken);
      this.messaging.onMessage(onForegroundMessage ? onForegroundMessage : this.foregroundNotification);
      this.tokenChecker();
      resolve(this);
    });
  }

  /**
   * When a token is fetched, function to execute (send it to server for example)
   * @param callback
   */
  public onTokenFetched(callback: (token: string) => void): void {
    this.tokenFetchedCallback = callback;
  }

  /**
   * Show a notification.
   */
  public showNotification(title: string, options: NotificationOptions): Promise<void> {
    return this.sw.showNotification(title, options);
  }

  /**
   * ForegroundNotification
   */
  private foregroundNotification(payload: FirebasePayloadMessage): void {
    if (Object.prototype.hasOwnProperty.call(payload, 'notification')) {
      const notificationSettings = payload.notification;
      notificationSettings.data = { ...notificationSettings.data };

      // Request managed by FCM
      notificationSettings.data.FCM_MSG = {};
      notificationSettings.data.FCM_MSG.notification = payload.notification;

      this.showNotification(notificationSettings.title, notificationSettings).then(() => {
        Logger.info('Notification received in foreground and transmitted to SW.');
      });
    }
  }

  /**
   * Check if a token is still valid
   */
  private tokenChecker(): void {
    const tokenMemory = PushManager.getCurrentToken();
    if (tokenMemory == null) {
      return;
    }

    const dateLastTokenCheck = PushManager.getDateLastTokenCheck();
    if (dateLastTokenCheck !== null) {
      if (dateLastTokenCheck.getTime() > Date.now() - PushManager.TOKEN_CHECK_INTERVAL * 1000) {
        return;
      }
    }

    PushManager.setDateLastTokenCheck();

    if (tokenMemory) {
      this.messaging.getToken().then((token: string) => {
        if (tokenMemory !== null && token !== tokenMemory) {
          this.fetchToken().then(() => {
            Logger.info('Token updated');
          });
        }
      });
    }
  }

  private static getDateLastTokenCheck(): Date | null {
    const dateLastToken: string | null = localStorage.getItem(PushManager.STORAGE_DATE_TOKEN_CHECK);
    if (dateLastToken !== null) {
      return new Date(parseInt(dateLastToken, 10));
    }

    return null;
  }

  private static setDateLastTokenCheck(): void {
    localStorage.setItem(PushManager.STORAGE_DATE_TOKEN_CHECK, Date.now().toString());
  }

  private static getCurrentToken(): string | null {
    return localStorage.getItem(PushManager.STORAGE_CURRENT_TOKEN);
  }

  private static setCurrentToken(token?: string): void {
    if (token != null) {
      localStorage.setItem(PushManager.STORAGE_CURRENT_TOKEN, token);
    } else {
      localStorage.removeItem(PushManager.STORAGE_CURRENT_TOKEN);
    }
  }
}
