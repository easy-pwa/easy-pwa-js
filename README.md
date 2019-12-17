# Easy Pwa

Tools for managing your Progressive Web App.

## Features
* Manage PWA features easly
* Manage Push Notifications easly.
* A specific helper is showed for each browser to help people to install your app.
* When you are offline, the css class "offline" is added on the body tag. `<body class="... offline">`


## Get started

#### With npm

```
npm install easy-pwa-js
```

#### Without npm
Add this script on your page.

`<script src="https://cdn.jsdelivr.net/gh/easy-pwa/easy-pwa-js/dist/easy-pwa.js"></script>` 

#### Install Service Worker

Create a JavaScript file at the root of your project. This is your Service Worker. Import easy-pwa Service Worker.
```
importScripts('https://cdn.jsdelivr.net/gh/easy-pwa/easy-pwa-js/dist/easy-pwa-sw.js');
``` 


## Use it

### PwaManager

#### Initialize PwaManager

```` javascript
EasyPwaManager.init('./sw.js', {scope: './'}).then(function() {
    console.log('Manager initialized. Get manifest and registered service worker.');
});
````

#### Get your service worker reference
```` javascript
var mySw = EasyPwaManager.getServiceWorkerRegistration();
````

#### Get manifest data
```` javascript
var manifest = EasyPwaManager.getManifest();
console.log('The name is: '+manifest.name);
````


#### Check if PWA is in standalone mode
```` javascript
if (EasyPwaManager.getInstallManager().isAppMode()) {
    console.log('Site is open as an app');
}
````

#### Show a loader when page is loading
In standalone mode, there are not browser elements visible. So, maybe, you would like to show a loader.
```` javascript
EasyPwaManager.onPageLoading(function() {
    console.log('Page is loading...')
});
````

#### Debug mode
More information in your console for debugging your PWA.
```` javascript
EasyPwaManager.enableDebug();
````


### Manage Home Screen Install
Access to the home screen manager: `EasyPwaManager.getInstallManager()`


#### Enable Desktop PWA (only Chrome)
Propose install on desktop browsers.
```` javascript
EasyPwaManager.getInstallManager().enableDesktopPwa();
````

#### Set interval before invitation to install again
When an event is proposed, set the number of days before invite again. (default: 50)
```` javascript
EasyPwaManager.getInstallManager().setIntervalBetweenInvitation(30);
````

#### Additional criteria before propose invite
You can add criteria before propose invite. The callback function has to respond a boolean.
```` javascript
EasyPwaManager.getInstallManager().addInviteCriteria(function() {
    if (user.id === 1) {
        return false;
    }

    return true;
});
````

#### Show an invite/ Show a helper
You have to listen an event.

```` javascript
window.addEventListener('easy-pwa-helper-available', function(e) {
    console.log('A helper is available for this browser!');
    var helperAvailableEvent = e.detail;
});
````

##### For an automatic invite system
```` javascript
window.addEventListener('easy-pwa-helper-available', function(e) {
    var helperAvailableEvent = e.detail;
    helperAvailableEvent.showInvite();
});
````

##### For a custom invite system
My html invite:
```` html
<div id="my_custom_invite">
Install my app ?
<button id="invite_accept">yes</button>
<button id="invite_dismiss">no</button>
</div>
```` 
My Javascript invite:
```` javascript
window.addEventListener('easy-pwa-helper-available', function(e) {
    var helperAvailableEvent = e.detail;

    document.getElementById('invite_accept').addEventListener('click', function() {
        document.getElementById('my_custom_invite').display = 'none';
        helperAvailableEvent.acceptInvite();
    });

document.getElementById('invite_dismiss').addEventListener('click', function() {
        document.getElementById('my_custom_invite').display = 'none';
        helperAvailableEvent.dismissInvite();
    });
});
````


### Manage Push notification
Access to the Push Manager: `EasyPwaManager.getPushManager()`.

#### Check if notification is supported on this current browser
```` javascript
if (EasyPwaManager.getPushManager().isNotificationSupported()) {
    console.log('Notification is supported on this browser.');
}
````

#### Request permission to send notification
First, you need to ask permission.
```` javascript
EasyPwaManager.getPushManager().requestPermission().then(function() {
    console.log('Accepted. You can get a token with Firebase.');
}).catch(function() {
    console.log('denied. User must authorize notifications in their bowser settings.');
});
````

#### Show a local notification
```` javascript
EasyPwaManager.getPushManager().showNotification('title', {
    icon: ...,
    vibrate: [50, 300, 50]
});
````

#### Firebase

##### Get a token and forward it to the server
```` javascript
EasyPwaManager.getPushManager().getFirebase().fetchToken().then( function(token) {
    console.log("new token: "+token);
});
````

##### Get current token
```` javascript
PwaManager.getPushManager().getFirebase().getToken().then( function(token) {
    console.log('new token: '+token);
});
````

##### Delete current token
```` javascript
EasyPwaManager.getPushManager().getFirebase().deleteToken(token).then(function(){
    console.log('Token deleted');
});
````

##### Manage Foreground notification differently
```` javascript
EasyPwaManager.getPushManager().getFirebase().onForegroundNotification(function() {
    console.log('Your are currently on the the site and you received a notification.');
});
````

##### Manage token (send to server) when you fetch a token
```` javascript
EasyPwaManager.getPushManager().getFirebase().onTokenFetched(function(token) {
    console.log('You fetch a new token, you can send it to server.');
});
````


## External library included

* [PWACompat](https://github.com/GoogleChromeLabs/pwacompat) is a library that brings the Web App Manifest to non-compliant browsers for better Progressive Web Apps.
* [Firebase](https://github.com/firebase/) Firebase Messaging features

## Example

You can find a full example here (soon).

## Help
Use chrome browser for testing you PWA, there are more available tools:
* Inspect element => Application
* Inpect your service worker: [chrome://inspect/#service-workers]()


