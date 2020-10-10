import { ILogger } from 'js-logger/src/types';

import Configuration from './Configuration/Configuration';
import Logger from './Service/Logger';
import PwaManager from './Manager/PwaManager';
import InstallManager from './Manager/InstallManager';
import PushManager from './Manager/PushManager';
import ReadyEvent from './Event/ReadyEvent';
import Translator from './Service/Translator';
import Debug from './Service/Debug';
import ConfigurationValidator from './Configuration/ConfigurationValidator';

export default new (class App {
  public configuration: Configuration = new Configuration();

  public logger: ILogger;

  public loggerParameter: Logger;

  public translator: Translator;

  public pwaManager: PwaManager;

  public installManager: InstallManager;

  public pushManager: PushManager;

  public isReady = false;

  constructor() {
    this.loggerParameter = new Logger();
    this.logger = this.loggerParameter.getLogger();

    this.translator = new Translator();
    this.pwaManager = new PwaManager();
    this.installManager = new InstallManager();
    this.pushManager = new PushManager();
  }

  public init(userConfiguration: Configuration): Promise<void> {
    return new Promise((resolve, reject) => {
      this.configuration = { ...this.configuration, ...userConfiguration, };

      const errors = ConfigurationValidator.validates(this.configuration);
      if (errors.length > 0) {
        errors.forEach(error => {
          this.logger.error(error);
        });

        return reject();
      }

      if (this.configuration.debug) {
        this.enableDebug();
      }

      if (!('serviceWorker' in navigator)) {
        return reject();
      }

      return Promise.all([
        this.pwaManager.init(),
        this.installManager.init(),
        this.pushManager.init(),
      ]).then(() => {
        this.isReady = true;
        window.dispatchEvent(new ReadyEvent());
        return resolve();
      });
    });
  }

  protected enableDebug(): void {
    this.loggerParameter.enableDebug();
    this.logger.warn('DEBUG ENABLED');

    new Debug().analyse();
  }
})();
