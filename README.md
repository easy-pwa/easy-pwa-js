# EasyPWA

Tools for managing your Progressive Web App.

## Features
* Manage PWA features easily
* Each browser shows a specific helper to help people to install your app.
* Manage Push Notifications easily.

## Example

An example is available here:  [https://easy-pwa.github.io/easy-pwa-js/](https://easy-pwa.github.io/easy-pwa-js/)

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
importScripts('easy-pwa-js/sw.js');
```

#### Standard method
Add this script on your page:
``` html
<script type="module" src="https://cdn.jsdelivr.net/npm/easy-pwa-js@1.0/dist/front.js"></script>
```

Add this script in your service worker:
``` javascript
importScripts('https://cdn.jsdelivr.net/npm/easy-pwa-js@1.0/dist/sw.js');
```

## How to use it

#### Initialize EasyPWA
For beginning, initialize EasyPWA with your configuration.
``` javascript
EasyPWA.init({
    swPath: '/example/sw.js',
    swRegistrationOptions: {scope: '/'},
    debug: true,
    desktop: true,
});
```

### Invite the user to install your app

If a helper is available for the current browser, an event is automatically emitted by EasyPWA.
You have to listen and interact with it.

#### Automatic method
With this method, a standard invite is showed:
``` javascript
window.addEventListener('easy-pwa-helper-available', function(e) {
    e.detail.showInvite();
});
```

#### For a custom invite
If you want to create your own invite for a customized style.

Example of your html invite:
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

var myFirebaseApp = firebase.initializeApp(firebaseConfig); // firebase initializing
```

Add in your config, the firebase app instance:
``` javascript
EasyPWA.init({
    ...,
    firebaseApp: myFirebaseApp,
    newTokenFetchedCallback: (token) => {
        // returns a promise
        return fetch('http://.../send-token-to-server.php?token='+token);
    },
}
```

Always wait EasyPWA is fully initialized before.
``` javascript
window.addEventListener('easy-pwa-ready', function(e) {
    EasyPWA.requestPermission().then( function() {
        // Permissions is now granted

        // I don't have a token
        EasyPWA.firebase().getToken().then( function(token) {
           console.log('token', token);
        });
    });
});
```

## Available configuration
A list of configuration elements if available [here](https://github.com/easy-pwa/easy-pwa-js/blob/master/src/ts/Configuration/Configuration.ts)

## Available functions

### Initialize EasyPWA

```` javascript
EasyPWA.init({...});
````

### Get manifest data
```` javascript
var manifest = EasyPWA.getManifest();
console.log('The name is: '+manifest.name);
````


### Check if PWA is in standalone mode
```` javascript
if (EasyPWA.isAppMode()) {
    console.log('Site is open as an app');
}
````

### Check if notification is supported on this current browser
```` javascript
if (EasyPWA.isNotificationSupported()) {
    console.log('Notification is supported on this browser.');
}
````

### Request permission to send notification
First, you need to ask permission.
```` javascript
EasyPWA.requestNotificationPermission().then(function() {
    console.log('Accepted. You can get a token with Firebase.');
}).catch(function() {
    console.log('denied. User must authorize notifications in their bowser settings.');
});
````

### Show a local notification
```` javascript
EasyPWA.showNotification('title', {
    icon: ...,
    vibrate: [50, 300, 50]
});
````

### Firebase

##### Initialize Firebase
```` javascript
var myFirebaseApp = firebase.initializeApp({...});
EasyPWA.init({
    ...
    firebaseApp: myFirebaseApp,
});
````

##### Get the token (and send it to the server if new)
```` javascript
EasyPWA.firebase().getToken().then( function(token) {
    console.log('new token: '+token);
});
````

##### Delete a token
```` javascript
EasyPWA.firebase().deleteToken(token).then(function(){
    console.log('Token deleted');
});
````


### Available Events

#### Wait Easy PWA is fully initialized

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
self.EasyPwaSW.pageSubstitutionPlugin('easy-pwa-substitution', '/offline.html').run();
````


## External library included

* [PWACompat](https://github.com/GoogleChromeLabs/pwacompat) is a library that brings the Web App Manifest to non-compliant browsers for better Progressive Web Apps.

## Help
Use chrome browser for testing you PWA, there are more available tools:
* Inspect element => Application
* Inspect your service worker: [chrome://inspect/#service-workers]()


