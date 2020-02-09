import { default as TranslatorClass } from '../tool/Translator';
import { default as LoggerClass } from '../tool/Logger';

export const Translator = new TranslatorClass();

const pwaLogger = new LoggerClass();
export const LoggerParameter = pwaLogger;
export const Logger = pwaLogger.getLogger();
