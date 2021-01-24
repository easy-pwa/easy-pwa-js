import '../scss/base.scss';
import App from './App';

const lib = {
  init: App.init.bind(App),
  isAppMode: App.pwaManager.isAppMode.bind(App.pwaManager),
  getManifest: App.pwaManager.getManifest.bind(App.pwaManager),
  isNotificationSupported: App.pushManager.isNotificationSupported.bind(App.pushManager),
  hasNotificationPermission: App.pushManager.hasPermission.bind(App.pushManager),
  requestNotificationPermission: App.pushManager.requestPermission.bind(App.pushManager),
};

module.exports = lib;
export default lib;
