import FirebaseAppMessaging from './FirebaseAppMessaging';
import { FirebasePayloadMessage } from '../type';
export default class FirebaseProvider {
    private readonly firebaseApp;
    private readonly messaging;
    private tokenFetchedCallback;
    private foregroundMessageCallback;
    constructor(serviceWorker: ServiceWorkerRegistration, firebaseApp: FirebaseAppMessaging);
    /**
     * Check if firebase is initialized
     */
    isInitialized(): boolean;
    /**
     * @param callback Callback to execute if notification is received when user is currently on the site
     */
    onForegroundNotification(callback: (payload: FirebasePayloadMessage) => void): void;
    /**
     * When a token is fetched, function to execute (send it to server for example)
     * @param callback
     */
    onTokenFetched(callback: (token: string) => void): void;
    /**
     * Fetch token and notify server
     */
    fetchToken(): Promise<string | Error>;
    /**
     * Get user token
     */
    getToken(): Promise<string>;
    /**
     * delete user token
     */
    deleteToken(token: string): Promise<string | Error>;
    /**
     * ForegroundNotification
     */
    private foregroundNotification;
}