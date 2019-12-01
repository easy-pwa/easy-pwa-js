/* eslint-env serviceworker */

/*
---------------------
> NOTIFICATIONS
---------------------
 */
import * as firebase from 'firebase/app';
import 'firebase/messaging';

const messagingSenderId = location.href.match(/messagingSenderId=([\w]+)/);
if (messagingSenderId !== null) {
  /** Notification * */
  firebase.initializeApp({
    messagingSenderId: messagingSenderId[1],
  });
  firebase.messaging();
}

self.addEventListener('message', (messageEvent): void => {
  if (messageEvent.data === 'skipWaiting') {
    skipWaiting();
  }
});
