export default class Configuration {
    swPath: string;
    swRegistrationOptions: RegistrationOptions;
    debug: boolean;
    desktop: boolean;
    intervalBetweenInvitation: number;
    additionalInviteCriteria: () => boolean;
    firebaseApp?: FirebaseAppMessaging;
    PWACompat: boolean;
    newTokenFetchedCallback: (token: string) => Promise<any>;
    foregroundNotification?: (payload: FirebasePayloadMessage) => void;
}
