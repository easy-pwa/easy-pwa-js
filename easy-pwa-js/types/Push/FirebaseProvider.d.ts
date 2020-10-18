export default class FirebaseProvider {
    private static readonly KEY_STORAGE_TOKEN_SENT;
    private readonly firebaseApp;
    private readonly messaging;
    constructor(serviceWorker: ServiceWorkerRegistration, firebaseApp: FirebaseAppMessaging);
    /**
     * Check if firebase is initialized
     */
    isInitialized(): boolean;
    /**
     * Get user token (and notify)
     */
    getToken(notify?: boolean): Promise<string>;
    /**
     * Delete user token
     */
    deleteToken(token: string): Promise<string | Error>;
    /**
     * ForegroundNotification
     */
    private foregroundNotification;
    private isTokenSent;
    private setTokenSent;
}
