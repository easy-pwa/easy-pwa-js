/**
 * Methods for managing about Installing
 */
export default class InstallManager {
    private static readonly DEFAULT_INTERVAL_BETWEEN_INVITATION;
    private static readonly KEY_STORAGE_INVITATION;
    private homeScreenPrompt?;
    private desktopPwaEnabled;
    private inviteCriteria;
    private intervalBetweenInvitation;
    constructor();
    /**
     * Set interval in day before to invite again
     * @param dayInterval Interval in day between invitation. Set 0 if you want to disable our system.
     */
    setIntervalBetweenInvitation(dayInterval: number): void;
    /**
     * Add additional criteria before propose invite to install
     * @param callback A function which has to respond a boolean. True if you are ready to show invite, false overwise
     */
    addInviteCriteria(callback: () => boolean): void;
    /**
     * Show an automatic invite to add to Home Screen.
     */
    private showInvite;
    /**
     * When event has been sent by browser, it's possible to call prompt method to add to home screen
     */
    private showInstallPrompt;
    /**
     * Get the corresponding helper to the current browser. Helper differs between browsers
     */
    private getHelperByBrowser;
    /**
     * Check if a helper is available for the current browser
     */
    private helperIsAvailable;
    /**
     * Show the available helper
     */
    private showHelper;
    /**
     * Enable desktop Pwa
     */
    enableDesktopPwa(): void;
    /**
     * IOS Helper: this function should be only called to test
     */
    private showIOSHelper;
    /**
     * Firefox Helper: this function should be only called to test
     */
    private showFirefoxHelper;
    /**
     * Samsung Helper: this function should be only called to test
     */
    private showSamsungHelper;
    /**
     * Propose invite again later
     */
    private inviteProcessed;
    /**
     * Init all events about add home screen
     */
    private initEvents;
    /**
     * Emit an event to indicate a helper is available for installing on the current browser
     */
    private emitHelperAvailableEvent;
    /**
     * Check if event to add home screen has been sent by browser (chrome/edge)
     */
    private installPromptReady;
    /**
     * Create a helper popup
     */
    private createHelperPopup;
    /**
     * Create a invite popup
     */
    private createInvitePopup;
    /**
     * Check criteria for proposing install.
     */
    private isTimeToInvite;
    /**
     * Get Browser Info
     */
    private getBrowserInfo;
}
