export default class Debug {
    private sw;
    analyse(): void;
    /**
     * Info about current browser
     */
    private browser;
    /**
     * Test if basic elements exist
     */
    private testManifest;
    /**
     * Test if protocol is accepted for pwa
     */
    private testProtocol;
    /**
     * Load et check if Service Worker is correctly registered
     */
    private loadServiceWorker;
    /**
     * Search, load and check manifest
     */
    private loadManifest;
    /**
     * Show an error in console
     * @param {string} txt
     */
    private showErr;
}
