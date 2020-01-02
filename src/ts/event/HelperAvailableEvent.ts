import InstallManager from '../manager/InstallManager';
import { BeforeInstallPromptEvent } from '../type';
import AbstractEvent from "./AbstractEvent";

export default class HelperAvailableEvent extends AbstractEvent {
  public static readonly EVENT_NAME = 'easy-pwa-helper-available';

  public readonly beforeinstallprompt?: BeforeInstallPromptEvent;

  public readonly inviteProcessed: Function;

  private readonly showInviteFunction: Function;

  private readonly showHelperFunction: Function;

  private readonly homeScreenManager: InstallManager;

  constructor(
    homeScreenManager: InstallManager,
    event: BeforeInstallPromptEvent,
    inviteProcessed: Function,
    showInvite: Function,
    showHelper: Function,
  ) {
    super();
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
