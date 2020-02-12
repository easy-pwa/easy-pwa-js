import FirebaseAppMessaging from '../Push/FirebaseAppMessaging';

export default class Configuration {
  // Path to your service worker
  public swPath: string;

  // Options registration for the service worker
  public swRegistrationOptions: RegistrationOptions = {};

  // Enable Debug mode. More information is showed in the console for helping to Debug your PWA.
  public debug: boolean = false;

  // Enable desktop pwa (invite, etc)
  public desktop: boolean = false;

  // Interval in day between invitation. Set 0 if you want to disable our system.
  public intervalBetweenInvitation: number = 50;

  // Add additional criteria before propose invite to install
  // A function which has to respond a boolean: true if you are ready to show invite, false otherwise
  public additionalInviteCriteria: () => boolean = () => true;

  // An initialized firebase app if you want to use firebase
  public firebaseApp?: FirebaseAppMessaging;

  // Load PWACompat on your site.
  public PWACompat: boolean = true;

  // Called function when a new token is fetched to manage it (for instance, send to server).
  public newTokenFetchedCallback: (token: string) => Promise<any> = () => {
    return Promise.resolve();
  };

  // Notifications can be managed differently when user is currently on the website.
  public foregroundNotification?: (payload: FirebasePayloadMessage) => void;
}
