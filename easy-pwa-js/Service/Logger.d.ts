import { ILogger } from 'js-logger/src/types';
export default class Logger {
    private readonly logger;
    constructor();
    getLogger(): ILogger;
    enableDebug(): void;
}
