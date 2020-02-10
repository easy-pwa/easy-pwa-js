var firebaseConfig = {
  apiKey: "AIzaSyAUZfZCz4oiRDEdG4DfTgLFSV80mWfiJcU",
  authDomain: "easy-pwa-a0aa2.firebaseapp.com",
  projectId: "easy-pwa-a0aa2",
  messagingSenderId: "380272041893",
  appId: "1:380272041893:web:fa3bdc93937359eac9924c"
};
// Initialize Firebase
var firebaseApp = firebase.initializeApp(firebaseConfig);

/*

Init

 */

EasyPWA.init({
  'swPath': './sw.js',
  'registrationOptions': {scope: './'},
  'debug': true,
  'desktop': true,
  'firebaseApp': firebaseApp,
});

/*

Home Screen

 */

window.addEventListener('easy-pwa-ready', function(e) {

  window.addEventListener('easy-pwa-helper-available', function (e) {
    document.getElementById('homescreen_event_received').style.display = "block";
    e.detail.showInvite();
  });

  // The methods bellow shouldn't be called directly. It's just for the testing context.

  document.getElementById('homescreen_helper_ios').addEventListener('click', function () {
    installManager.showIOSHelper();
  });

  document.getElementById('homescreen_helper_firefox').addEventListener('click', function () {
    installManager.showFirefoxHelper();
  });

  document.getElementById('homescreen_helper_samsung').addEventListener('click', function () {
    installManager.showSamsungHelper();
  });
});
/*

Notification

 */

function setViewPermission(permission) {
  document.getElementById('permission').innerHTML = permission;
}

window.addEventListener('load', function(e) {
  navigator.permissions.query({name: 'notifications'}).then(notificationPerm => {
    setViewPermission(notificationPerm.state);
    notificationPerm.onchange = () => {
      setViewPermission(notificationPerm.state);
    }
  });
});

window.addEventListener('easy-pwa-ready', function(e) {
  document.getElementById('bt_notification_permission').addEventListener('click', function () {
    EasyPWA.requestNotificationPermission();
  });

  document.getElementById('bt_notification_send').addEventListener('click', function () {
    EasyPWA.showNotification('Title', {
      icon: 'images/icon512.png',
      body: 'A description for your notification.',
      vibrate: [20, 300, 20]
    });
  });
});

/*
Other tools
 */

window.addEventListener('easy-pwa-page-changing', function(e) {
  alert('Page is changing. In standalone mode, you would like to show a loader for example.');
});