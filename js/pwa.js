var firebaseConfig = {
  apiKey: "AIzaSyAUZfZCz4oiRDEdG4DfTgLFSV80mWfiJcU",
  authDomain: "easy-pwa-a0aa2.firebaseapp.com",
  projectId: "easy-pwa-a0aa2",
  messagingSenderId: "380272041893",
  appId: "1:380272041893:web:fa3bdc93937359eac9924c"
};

window.addEventListener("load", function(event) {
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
    'newTokenFetchedCallback': function(token) {
      console.log('Token sent to the server', token);
      return Promise.resolve();
    }
  }).then(function() {
    console.log('EasyPWA initialized');
  });
  
});

/*

Home Screen

 */

window.addEventListener('easy-pwa-helper-available', function (e) {
  document.getElementById('homescreen_invite_event_received').style.display = "block";
  document.getElementById('homescreen_invite_no_event').style.display = "none";
  document.getElementById('homescreen_invite_button').addEventListener('click', () => {
    e.detail.showInvite();
  });
});

/*

Notification

 */
if (EasyPWA.isNotificationSupported()) {
  document.getElementById('notifications_not_supported').style.display = "none";
  document.getElementById('notifications_supported').style.display = "";
}

function setPermission(permission) {
  document.getElementById('permission').innerHTML = permission;
  if (permission === 'granted') {
    EasyPWA.firebase().getToken().then(function (token) {
      document.getElementById('notifications_token').innerHTML = token;
    });
  }
}

window.addEventListener('load', function(e) {
  navigator.permissions.query({name: 'notifications'}).then(notificationPerm => {
    setPermission(notificationPerm.state);
    notificationPerm.onchange = () => {
      setPermission(notificationPerm.state);
    }
  });
});

window.addEventListener('easy-pwa-ready', function(e) {
  document.getElementById('bt_notification_permission').addEventListener('click', function () {
    EasyPWA.requestNotificationPermission();
  });

  document.getElementById('bt_notification_send').addEventListener('click', function () {
    EasyPWA.showNotification('Title of your notification', {
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
