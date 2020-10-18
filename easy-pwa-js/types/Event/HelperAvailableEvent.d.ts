import InstallManager from '../Manager/InstallManager';
export default class HelperAvailableEvent extends CustomEvent<HelperAvailableEvent> {
    readonly beforeinstallprompt: null | BeforeInstallPromptEvent;
    readonly inviteProcessed: Function;
    private readonly showInviteFunction;
    private readonly showHelperFunction;
    private readonly homeScreenManager;
    constructor(homeScreenManager: InstallManager, event: null | BeforeInstallPromptEvent, inviteProcessed: Function, showInvite: Function, showHelper: Function);
    showInvite(): void;
    acceptInvite(): void;
    dismissInvite(): void;
}
