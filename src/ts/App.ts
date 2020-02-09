import Configuration from "./Configuration";
import { validateSync} from "class-validator";
import {ILogger} from "js-logger/src/types";
import Logger from "./tool/Logger";
import PwaManager from "./manager/PwaManager";
import InstallManager, {default as InstallManagerClass} from "./manager/InstallManager";
import PushManager, {default as PushManagerClass} from "./manager/PushManager";
import ReadyEvent from "./event/ReadyEvent";
import Translator from "./tool/Translator";
import Debug from "./tool/Debug";

export default new class App {
    public configuration: Configuration;

    public logger: ILogger;

    public loggerParameter: Logger;

    public translator: Translator;

    public manager?: PwaManager;

    public installManager?: InstallManager;

    public pushManager?: PushManager;

    constructor() {
        this.initLogger();
        this.translator = new Translator();
    }

    public init(userConfiguration: Configuration): void {
        const configuration = Object.assign({}, new Configuration(), userConfiguration);
        this.manager = new PwaManager();
        this.installManager = new InstallManager();
        this.pushManager = new PushManager();
        console.log(configuration);
        /*const errors = validateSync(configuration);
        if (errors.length > 0) {
            this.logger.error('EasyPwa (validation failed). Errors: ', errors);
            return;
        }*/

        this.configuration = configuration;

        Promise.all([this.manager.init(), this.installManager.init(), this.pushManager.init()]).then(() => {
            window.dispatchEvent(new Event(ReadyEvent.EVENT_NAME));
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