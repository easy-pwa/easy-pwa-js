import '../scss/base.scss';
import App from './App';

module.exports = {
  init: App.init.bind(App),
  isAppMode: App.pwaManager.isAppMode.bind(App.pwaManager),
  getManifest: App.pwaManager.getManifest.bind(App.pwaManager),

  isNotificationSupported: App.pushManager.isNotificationSupported.bind(App.pushManager),
  showNotification: App.pushManager.showNotification.bind(App.pushManager),
  requestNotificationPermission: App.pushManager.requestPermission.bind(App.pushManager),
  firebase: App.pushManager.firebase.bind(App.pushManager),
};
