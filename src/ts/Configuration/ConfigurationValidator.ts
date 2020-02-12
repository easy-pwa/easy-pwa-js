import Configuration from "./Configuration";

export default class ConfigurationValidator {
    public validates(config: Configuration): Error[] {
      const errors: Error[] = [];

      if (!config.swPath || typeof config.swPath !== 'string') {
        errors.push(new Error('A Service worker path should be defined'));
      }

      if (config.swRegistrationOptions && typeof config.swRegistrationOptions !== 'object') {
        errors.push(new Error('registrationOptions should be an object.'));
      }

      if (typeof config.debug !== 'undefined' && typeof config.debug !== 'boolean') {
        errors.push(new Error('debug should be a boolean.'));
      }

      if (typeof config.desktop !== 'undefined' && typeof config.desktop !== 'boolean') {
        errors.push(new Error('debug should be a boolean.'));
      }

      if (typeof config.intervalBetweenInvitation !== 'number') {
        errors.push(new Error('intervalBetweenInvitation should be a number.'));
      }

      if (typeof config.intervalBetweenInvitation !== 'number' || config.intervalBetweenInvitation < 0) {
        errors.push(new Error('intervalBetweenInvitation should be a positive number.'));
      }

      if (typeof config.additionalInviteCriteria !== 'function') {
        errors.push(new Error('additionalInviteCriteria should be a function and respond a boolean.'));
      }

      if (typeof config.firebaseApp !== 'undefined' && typeof config.firebaseApp !== 'object') {
        errors.push(new Error('firebaseApp should be an initialized instance.'));
      }

      if (typeof config.PWACompat !== 'boolean') {
        errors.push(new Error('PWACompat should be a boolean.'));
      }

      return errors;
    }
}
