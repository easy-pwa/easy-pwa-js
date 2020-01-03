import { default as PushManagerClass } from '../manager/PushManager';
import { default as InstallManagerClass } from '../manager/InstallManager';
import { default as TranslatorClass } from '../tool/Translator';
import { default as PwaManagerClass } from '../manager/PwaManager';
import { default as DebugClass } from '../tool/Debug';
import Logger from '../tool/Logger';

export const PwaManager = new PwaManagerClass();
export const InstallManager = new InstallManagerClass();
export const PushManager = new PushManagerClass();
export const Translator = new TranslatorClass();
export const Debug = new DebugClass();

const pwaLogger = new Logger();
export const loggerParameter = pwaLogger;
export const logger = pwaLogger.getLogger();
