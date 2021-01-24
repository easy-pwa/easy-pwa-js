export default class Configuration {
  // Path to your service worker
  public swPath: string = '/sw.js';

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

  // Load PWACompat on your site.
  public PWACompat: boolean = true;
}
