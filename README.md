# easy-pwa-js

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

#### Register a Service Worker
Set the third argument if you want to use Firebase Push Notifications.
````
PwaManager.registerServiceWorker('./sw.js', {scope: './'}, FIREBASE_MESSAGING_JS).then(function(registration) {
    console.log('SW correctly registered');
});
````

#### Debug mode
More information in your console for debugging your PWA.
````
PwaManager.enableDebug();
````


### Manage Home Screen Install
Access to the home screen manager: `PwaManager.getHomeScreenManager()`


#### Check if PWA is in standalone mode
````
if (PwaManager.isAppMode()) {
    console.log('');
}
````

#### Enable Desktop PWA (only Chrome)
````
PwaManager.getHomeScreenManager().enableDesktopPwa();
````

#### Waiting install prompt event sent by browser (currently only Chrome & Edge)
````
PwaManager.getHomeScreenManager().onEventInstallPromptEmitted(function() {
    console.log('Event install prompt received.');
});
````

#### Check if a helper for installing is available
Chrome/Edge: TRUE if event has been received.

Other browsers: we propose a helper to indicate how install the app. TRUE If a helper is available for the used current browser version.
````
PwaManager.getHomeScrenManager().helperIsAvailable();
````

#### Show the helper if helper is available.
````
PwaManager.getHomeScrenManager().showHelper();
````

#### Know if app is successfully installed
````
PwaManager.getHomeScrenManager().onAppInstalled(function() {
    console.log('App is just installed successfully.');
});
````

#### Show a loader when page is loading
In standalone mode, there are not browser elements visible. So, maybe, you would like to show a loader.
````
PwaManager.onPageLoading(function() {
    console.log('Page is loading...')
});
````

### Manage Push notification (with Firebase)
Access to the Push Manager: `PwaManager.getPushManager()`.

#### Check if notification is supported on this current browser
````
if (PwaManager.getPushManager().isNotificationSupported()) {
    console.log('Notification is supported on this browser.');
}
````

#### Request permission to send notification
First, you need to ask permission.
````
PwaManager.getPushManager().requestPermission().then(function() {
    console.log('Accepted. You can get a token with Firebase.');
}).catch(function() {
    console.log('denied. User must authorize notifications in their bowser settings.');
});
````

#### Show a notification
````
PwaManager.getPushManager().showNotification('title', {
    icon: ...,
    vibrate: [50, 300, 50]
});
````

#### Firebase

##### Get a token and send it to the server
````
PwaManager.getPushManager().getFirebase().fetchToken().then( function(token) {
    console.log("new token: "+token);
});
````

##### Get a token and send it to the server
````
PwaManager.getPushManager().getFirebase().fetchToken().then( function(token) {
    console.log("new token: "+token);
});
````

##### Get current token
````
PwaManager.getPushManager().getFirebase().getToken().then( function(token) {
    console.log('new token: '+token);
});
````

##### Delete current token
````
PwaManager.getPushManager().getFirebase().deleteToken(token).then(function(){
    console.log('Token deleted');
});
````

##### Manage Foreground notification differently
````
PwaManager.getPushManager().getFirebase().onForegroundNotification(function() {
    console.log('Your are currently on the the site and you received a notification.');
});
````

##### Manage token (send to server) when you fetch a token
````
PwaManager.getPushManager().getFirebase().onTokenFetched(function(token) {
    console.log('You fetch a new token, you can send it to server.');
});
````


## External library included

* [PWACompat](https://github.com/GoogleChromeLabs/pwacompat) is a library that brings the Web App Manifest to non-compliant browsers for better Progressive Web Apps.
* [Firebase](https://github.com/firebase/) Firebase Messaging features

## Example

You can find a full example here (soon).



