/**
 * Methods for managing about Installing
 */
export default class InstallManager {
    static readonly DEFAULT_INTERVAL_BETWEEN_INVITATION = 50;
    static readonly KEY_STORAGE_INVITATION = "easy-pwa-last-invitation-answered";
    private homeScreenPrompt?;
    private desktopPwaEnabled;
    private inviteCriteria;
    private intervalBetweenInvitation;
    constructor();
    /**
     * Set interval in day before to invite again
     */
    setIntervalBetweenInvitation(dayInterval: number): void;
    /**
     * Add additional criteria before propose invite to install
     */
    addInviteCriteria(callback: () => boolean): void;
    private showInvite;
    /**
     * When event has been sent by browser, it's possible to call prompt method to add to home screen
     */
    private showInstallPrompt;
    /**
     * Get invite. Method differs between browsers
     */
    private getHelperByBrowser;
    /**
     * Check if a helper is available
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
