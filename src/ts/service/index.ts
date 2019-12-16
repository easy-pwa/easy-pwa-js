import PushManager from '../manager/PushManager';
import InstallManager from '../manager/InstallManager';
import Translator from '../tool/Translator';
import PwaManager from '../manager/PwaManager';
import Debug from '../tool/Debug';
import Logger from "../tool/Logger";

export const pwaManager = new PwaManager();
export const homeScreenManager = new InstallManager();
export const pushManager = new PushManager();
export const translator = new Translator();
export const debug = new Debug();

const pwaLogger = new Logger();
export const loggerParameter = pwaLogger;
export const logger = pwaLogger.getLogger();
