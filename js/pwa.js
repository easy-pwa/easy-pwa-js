/*

Init

 */

EasyPWA.init({
  'swPath': './sw.js',
  'registrationOptions': {scope: './'},
  'debug': true,
  'desktop': true,
}).then(function() {
  console.log('EasyPWA initialized');
});

/*

Home Screen

 */

window.addEventListener('easy-pwa-helper-available', function (e) {
  document.getElementById('homescreen_invite_event_received').style.display = "block";
  document.getElementById('homescreen_invite_no_event').style.display = "none";
  document.getElementById('homescreen_invite_button').addEventListener('click', () => {
    e.showInvite();
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
    new Notification('A notification', {
      icon: 'images/icon512.png',
      body: 'A description for your notification.',
    });
  });
});

/*
Other tools
 */

window.addEventListener('easy-pwa-page-changing', function(e) {
  alert('Page is changing. In standalone mode, you would like to show a loader for example.');
});
