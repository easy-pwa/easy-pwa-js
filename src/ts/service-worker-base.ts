/* eslint-env serviceworker */

/*
---------------------
> NOTIFICATIONS
---------------------
 */

import * as firebase from 'firebase/app';
import 'firebase/messaging';

self.addEventListener('message', (messageEvent): void => {
  if (messageEvent.data === 'skipWaiting') {
    skipWaiting();
  }

  const firebaseMessagingSenderId = messageEvent.data.match(/firebaseMessagingSenderId=([\w]+)/);
  if (firebaseMessagingSenderId) {
    firebase.initializeApp({
      messagingSenderId: firebaseMessagingSenderId[1],
    });
    firebase.messaging();
  }
});
