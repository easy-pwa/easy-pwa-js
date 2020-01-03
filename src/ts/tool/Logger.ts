import * as JsLogger from 'js-logger';
import { ILogger } from 'js-logger/src/types';

export default class Logger {
  private readonly logger: ILogger;

  constructor() {
    const consoleHandler = JsLogger.createDefaultHandler({
      formatter(messages) {
        messages.unshift('PwaManager: ');
      },
    });
    const logger = JsLogger.get('pwa');
    JsLogger.setHandler((messages, context) => {
      consoleHandler(messages, context);
    });

    logger.setLevel(JsLogger.ERROR);

    this.logger = logger;
  }

  getLogger(): ILogger {
    return this.logger;
  }

  enableDebug(): void {
    this.logger.setLevel(JsLogger.INFO);
  }
}
