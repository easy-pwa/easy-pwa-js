import Configuration from "./Configuration/Configuration";
import {ILogger} from "js-logger/src/types";
import Logger from "./Service/Logger";
import PwaManager from "./Manager/PwaManager";
import InstallManager, {default as InstallManagerClass} from "./Manager/InstallManager";
import PushManager, {default as PushManagerClass} from "./Manager/PushManager";
import ReadyEvent from "./Event/ReadyEvent";
import Translator from "./Service/Translator";
import Debug from "./Service/Debug";
import ConfigurationValidator from "./Configuration/ConfigurationValidator";

export default new class App {
    public configuration: Configuration;

    public logger: ILogger;

    public loggerParameter: Logger;

    public translator: Translator;

    public pwaManager: PwaManager;

    public installManager: InstallManager;

    public pushManager: PushManager;

    public isReady = false;

    constructor() {
        this.initLogger();
        this.translator = new Translator();
        this.pwaManager = new PwaManager();
        this.installManager = new InstallManager();
        this.pushManager = new PushManager();
    }

    public init(userConfiguration: Configuration): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!('serviceWorker' in navigator)) {
                return reject();
            }

            const configuration = {...new Configuration(), ...userConfiguration};


            const errors = (new ConfigurationValidator()).validates(configuration);
            if (errors.length > 0) {
                errors.forEach(error => {
                    this.logger.error(error);
                });

                return reject();
            }

            this.configuration = configuration;

            return Promise.all([this.pwaManager.init(), this.installManager.init(), this.pushManager.init()]).then(() => {
                this.isReady = true;
                window.dispatchEvent(new Event(ReadyEvent.EVENT_NAME));
                if (this.configuration.debug) {
                    this.enableDebug();
                }
                return resolve();
            });
        });
    }

    protected initLogger(): void {
        const logger = new Logger();
        this.loggerParameter = logger;
        this.logger = logger.getLogger();
    }

    protected enableDebug(): void {
        this.loggerParameter.enableDebug();
        this.logger.warn('DEBUG ENABLED');

        (new Debug()).analyse();
    }
}