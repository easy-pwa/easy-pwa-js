# Easy Pwa

Tools for managing your Progressive Web App.

## Features
* Manage PWA features easily
* Manage Push Notifications easily.
* A specific helper is showed for each browser to help people to install your app.


## Install

#### ES6

``` bash
npm install easy-pwa-js
```

Use it in your modules:
``` javascript
import EasyPwaManager from 'easy-pwa-js/front';
```

In your service worker:
``` javascript
importScripts('easy-pwa-js/sw');
```

#### Standard method
Add this script on your page:
``` html
<script src="https://cdn.jsdelivr.net/gh/easy-pwa/easy-pwa-js/dist/front.js"></script>
```

Add this script in your service worker:
``` javascript
importScripts('https://cdn.jsdelivr.net/gh/easy-pwa/easy-pwa-js/dist/sw.js');
```

## Example

``` javascript
EasyPwaManager.init('/example/sw.js', {scope: '/'}).then(function(reg) {
    // All interaction with EasyPwaManager should be done when EasyPwaManager is successfully initialized.

    EasyPwaManager.enableDebug(); // Enable debug for showing more information
    
    var installManager = EasyPwaManager.getInstallManager();
    installManager.enableDesktopPwa(); // Enable desktop PWA

    if (EasyPwaManager.isAppMode()) {
        console.log('You are in app version');
    }
});
```

### Invite the user to install your app

If a helper is available for the current browser, an event is emitted.

#### Automatic method
``` javascript
window.addEventListener('easy-pwa-helper-available', function(e) {
    e.detail.showInvite();
});
```

#### For a custom invite
html invite:
```` html
<div id="my_custom_invite">
Install my app ?
<button id="invite_accept">yes</button>
<button id="invite_dismiss">no</button>
</div>
```` 

javascript invite:
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


### Enable push notifications (with Firebase)
Add firebase library and initialize en new app.

``` javascript
var firebaseConfig = {
    apiKey: "...",
    projectId: "...",
    messagingSenderId: "...",
    appId: "..."
};

var firebaseApp = firebase.initializeApp(firebaseConfig); // firebase initializing
window.addEventListener('easy-pwa-ready', function(e) {
    var pushManager = EasyPwaManager.getPushManager();
    var firebasePush = pushManager.firebase(firebaseApp);

    pushManager.requestPermission().then( function() {
        // Permissions granted

        // I don't have a token
        firebasePwa.getToken().then( function(token) {
           console.log('token', token);
        });
        
        // Get a token a manage it (send to server for example)
        firebasePwa.fetchToken().then( function(token) {
           console.log('token', token);
        });
    });
});
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
if (EasyPwaManager.isAppMode()) {
    console.log('Site is open as an app');
}
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

##### Initialize Firebase
```` javascript
var firebaseApp = firebase.initializeApp({...});
EasyPwaManager.getPushManager().firebase(firebaseApp);
````

##### Manage token (send to server) when you fetch a token
```` javascript
EasyPwaManager.getPushManager().firebase.onTokenFetched( function(token) {
    console.log('You fetch a new token, you can send it to server.');
});
````

##### Get a token and manage it (previous declared callback is called)
```` javascript
EasyPwaManager.getPushManager().firebase.fetchToken().then( function(token) {
    console.log("new token: "+token);
});
````

##### Get current token
```` javascript
PwaManager.getPushManager().firebase.getToken().then( function(token) {
    console.log('new token: '+token);
});
````

##### Delete a token
```` javascript
EasyPwaManager.getPushManager().firebase.deleteToken(token).then(function(){
    console.log('Token deleted');
});
````

##### Manage Foreground notification differently
```` javascript
EasyPwaManager.getPushManager().firebase.onForegroundNotification(function() {
    console.log('Your are currently on the the site and you received a notification.');
});
````

### Available Events

#### Wait EasyPwa is fully initialized 

```` javascript
window.addEventListener('easy-pwa-ready', function(e) {
    console.log('I'm ready!');
});
````

#### Listening if install prompt is available

```` javascript
window.addEventListener('easy-pwa-helper-available', function(e) {
    console.log('A helper is available for this browser!');
    var helperAvailableEvent = e.detail;


    helperAvailableEvent.showInvite();
    // OR
    helperAvailableEvent.acceptInvite();
    helperAvailableEvent.dismissInvite();
});
````

#### Detect page is changing
In standalone mode, there are not browser elements visible. So, maybe, you would like to show a loader when page is changing.

```` javascript
window.addEventListener('easy-pwa-page-changing', function(e) {
    console.log('Show a loader, page is changing!');
});
````

### Other tools

#### Managing online/offline view by css

When you are offline, the css class "offline" is added on the body tag.
```` html
<body class="... offline">
    <div class="text-offline">You are offline but you can still access to your favorite website.</div>
</body>
````

```` css
.text-offline {
    display: none;
}

.offline .text-offline {
    display: block;
}
````

## Service worker

### Plugins

#### Substitution Page

Show a substitution page when the user is offline
```` javascript
self.EasyPwaSW.pageSubstitutionPlugin().run('easy-pwa-substitution', '/offline.html');
````


## External library included

* [PWACompat](https://github.com/GoogleChromeLabs/pwacompat) is a library that brings the Web App Manifest to non-compliant browsers for better Progressive Web Apps.

## Example

You can find a full example here (soon).

## Help
Use chrome browser for testing you PWA, there are more available tools:
* Inspect element => Application
* Inspect your service worker: [chrome://inspect/#service-workers]()


