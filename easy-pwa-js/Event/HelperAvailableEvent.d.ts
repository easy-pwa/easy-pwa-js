import InstallManager from '../Manager/InstallManager';
import AbstractEvent from './AbstractEvent';
export default class HelperAvailableEvent extends AbstractEvent {
    static readonly EVENT_NAME = "easy-pwa-helper-available";
    readonly beforeinstallprompt?: BeforeInstallPromptEvent;
    readonly inviteProcessed: Function;
    private readonly showInviteFunction;
    private readonly showHelperFunction;
    private readonly homeScreenManager;
    constructor(homeScreenManager: InstallManager, event: BeforeInstallPromptEvent, inviteProcessed: Function, showInvite: Function, showHelper: Function);
    showInvite(): void;
    acceptInvite(): void;
    dismissInvite(): void;
}
