importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');
importScripts('easy-pwa-js/sw.js');

var firebaseConfig = {
  apiKey: "AIzaSyAUZfZCz4oiRDEdG4DfTgLFSV80mWfiJcU",
  projectId: "easy-pwa-a0aa2",
  messagingSenderId: "380272041893",
  appId: "1:380272041893:web:fa3bdc93937359eac9924c"
};
// Initialize Firebase
var firebaseApp = firebase.initializeApp(firebaseConfig);

/*
---------------------
> CACHE
Site have to respond something when there is no connection
In this case, we just return a substitution page
---------------------
 */
self.EasyPwaSW.plugins.pageSubstitutionPlugin().run('easy-pwa-substitution', './offline.html');
