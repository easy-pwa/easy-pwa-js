import InstallManager from '../Manager/InstallManager';

export default class HelperAvailableEvent extends CustomEvent<HelperAvailableEvent> {

  public readonly beforeinstallprompt: null|BeforeInstallPromptEvent;

  public readonly inviteProcessed: Function;

  private readonly showInviteFunction: Function;

  private readonly showHelperFunction: Function;

  private readonly homeScreenManager: InstallManager;

  constructor(
    homeScreenManager: InstallManager,
    event: null|BeforeInstallPromptEvent,
    inviteProcessed: Function,
    showInvite: Function,
    showHelper: Function
  ) {
    super('easy-pwa-helper-available');

    this.beforeinstallprompt = event;
    this.inviteProcessed = inviteProcessed;
    this.showInviteFunction = showInvite;
    this.showHelperFunction = showHelper;
    this.homeScreenManager = homeScreenManager;
  }

  public showInvite(): void {
    this.showInviteFunction.call(this.homeScreenManager);
  }

  public acceptInvite(): void {
    this.showHelperFunction.call(this.homeScreenManager);
    this.inviteProcessed();
  }

  public dismissInvite(): void {
    this.inviteProcessed();
  }
}
