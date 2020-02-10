import FirebaseAppMessaging from "../push/FirebaseAppMessaging";

export default class Configuration {

    public swPath: string;

    public registrationOptions: RegistrationOptions = {};

    // Enable Debug mode. More information is showed in the console for helping to Debug your PWA.
    public debug = false;

    public desktop = false;

    // Interval in day between invitation. Set 0 if you want to disable our system.
    public intervalBetweenInvitation = 50;

    // Add additional criteria before propose invite to install
    // A function which has to respond a boolean. True if you are ready to show invite, false otherwise
    public additionalInviteCriteria: () => boolean = () => true;

    // Initialized firebase app
    public firebaseApp?: FirebaseAppMessaging;

    // Load PWACompat on your site
    public PWACompat = true;
}
