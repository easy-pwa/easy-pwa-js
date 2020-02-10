import Configuration from "./configuration/Configuration";
import {ILogger} from "js-logger/src/types";
import Logger from "./tool/Logger";
import PwaManager from "./manager/PwaManager";
import InstallManager, {default as InstallManagerClass} from "./manager/InstallManager";
import PushManager, {default as PushManagerClass} from "./manager/PushManager";
import ReadyEvent from "./event/ReadyEvent";
import Translator from "./tool/Translator";
import Debug from "./tool/Debug";
import ConfigurationValidator from "./configuration/ConfigurationValidator";

export default new class App {
    public configuration: Configuration;

    public logger: ILogger;

    public loggerParameter: Logger;

    public translator: Translator;

    public manager?: PwaManager;

    public installManager?: InstallManager;

    public pushManager?: PushManager;

    public isReady = false;

    constructor() {
        this.initLogger();
        this.translator = new Translator();
    }

    public init(userConfiguration: Configuration): void {
        if (!('serviceWorker' in navigator)) {
            return;
        }

        const configuration = { ...new Configuration(), ...userConfiguration };
        this.manager = new PwaManager();
        this.installManager = new InstallManager();
        this.pushManager = new PushManager();

        const errors = (new ConfigurationValidator()).validates(configuration);
        if (errors.length > 0) {
            errors.forEach(error => {
                this.logger.error(error);
            });

            return;
        }

        this.configuration = configuration;

        Promise.all([this.manager.init(), this.installManager.init(), this.pushManager.init()]).then(() => {
            this.isReady = true;
            window.dispatchEvent(new Event(ReadyEvent.EVENT_NAME));
        });

        if (this.configuration.debug) {
            this.enableDebug();
        }
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