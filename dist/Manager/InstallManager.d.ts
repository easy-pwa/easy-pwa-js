import AbstractManager from './AbstractManager';
/**
 * Methods for managing about Installing
 */
export default class InstallManager extends AbstractManager {
    private static readonly KEY_STORAGE_INVITATION;
    private homeScreenPrompt?;
    constructor();
    init(): Promise<void>;
    /**
     * Show an automatic invite to add to Home Screen.
     */
    private showInvite;
    /**
     * When Event has been sent by browser, it's possible to call prompt method to add to home screen
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
     * Emit an Event to indicate a helper is available for installing on the current browser
     */
    private emitHelperAvailableEvent;
    /**
     * Check if Event to add home screen has been sent by browser (chrome/edge)
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
