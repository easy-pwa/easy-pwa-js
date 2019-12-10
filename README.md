# Easy PWA JS

Tools for managing your Progressive Web App.

## Features
* Manage PWA features easly
* Manage Push Notifications easly.
* A specific helper is showed for each browser to help people to install your app.
* When you are offline, the css class "offline" is added on the body tag. `<body class="... offline">`


## Install

#### With npm

```
npm install easy-pwa-js
```

#### Without npm
Add this script on your page.

`<script src="https://cdn.jsdelivr.net/gh/easy-pwa/easy-pwa-js/dist/easy-pwa.js"></script>` 


## Use it

### PwaManager

#### Register a Service Worker
Set the third argument if you want to use Push Notifications.
````
PwaManager.registerServiceWorker('./sw.js', {scope: './'}, FIREBASE_MESSAGING_JS);
````

#### Debug mode
More information in your console for debugging your PWA.
````
PwaManager.enableDebug();
````


### Manage Homescreen Install
Access to the HomeScreenManager: `PwaManager.getHomeScreenManager()`

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

Other browsers: we propose a helper to indicate how install app. TRUE If a helper is available for the used current browser version.
````
PwaManager.getHomeScrenManager().helperAvailable();
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

#### Initialize Push Manager
You have to initialize the manager with:
- registered Service Worker
- Firebase messaging sender id
- An optional callback function if you want to manage foreground notifications differently.
````
PwaManager.getPushManager().initialize(serviceWorkerRegistration, messagingSenderId, foregroundCallback).then(function () {
    console.log('Push Manager initialized');
});
````

##### Request permission to send notification
First, you need to ask permission.
````
PwaManager.getPushManager().requestPermission().then(function() {
    console.log('Accepted. You can get a token.');
}).catch(function() {
    console.log('denied. User must authorize notifications in their bowser settings.');
});
````

#### Get a token and send it to the server
````
PwaManager.getPushManager().fetchToken().then( function(token) {
    console.log("new token: "+token);
});
````

#### Get current token
````
PwaManager.getPushManager().getToken().then( function(token) {
    console.log('new token: '+token);
});
````

#### Delete current token
````
PwaManager.getPushManager().deleteToken(token).then(function(){
    console.log('Token deleted');
});
````

## JS Documentation
More information with the doc.

[Documentation](doc/JS_DOC.md)


## External library included

[PWACompat](https://github.com/GoogleChromeLabs/pwacompat) is a library that brings the Web App Manifest to non-compliant browsers for better Progressive Web Apps.
[Firebase](https://github.com/firebase/) Firebase features

## Example

You can find a full example here (soon).



