export default class Configuration {
    swPath: string;
    swRegistrationOptions: RegistrationOptions;
    debug: boolean;
    desktop: boolean;
    intervalBetweenInvitation: number;
    additionalInviteCriteria: () => boolean;
    PWACompat: boolean;
}
