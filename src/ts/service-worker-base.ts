/* eslint-env serviceworker */

/*
---------------------
> NOTIFICATIONS
---------------------
 */



self.addEventListener('message', (messageEvent): void => {
  if (messageEvent.data === 'skipWaiting') {
    skipWaiting();
  }
});
