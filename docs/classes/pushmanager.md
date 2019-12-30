[Easy PWA](../README.md) › [PushManager](pushmanager.md)

# Class: PushManager

Methods for managing about Push

## Hierarchy

* **PushManager**

## Index

### Methods

* [getFirebase](pushmanager.md#getfirebase)
* [initFirebase](pushmanager.md#initfirebase)
* [isNotificationSupported](pushmanager.md#isnotificationsupported)
* [requestPermission](pushmanager.md#requestpermission)
* [showNotification](pushmanager.md#shownotification)

## Methods

###  getFirebase

▸ **getFirebase**(): *[FirebaseProvider](firebaseprovider.md) | null*

*Defined in [manager/PushManager.ts:72](https://github.com/easy-pwa/easy-pwa-js/blob/0d7653b/src/ts/manager/PushManager.ts#L72)*

Get the Firebase provider. Call initFirebase before.

**Returns:** *[FirebaseProvider](firebaseprovider.md) | null*

Firebase provider or null if init function was not called.

___

###  initFirebase

▸ **initFirebase**(`projectId`: string, `messagingSenderId`: string, `firebaseMessaging`: FirebaseMessaging | null): *[FirebaseProvider](firebaseprovider.md)*

*Defined in [manager/PushManager.ts:52](https://github.com/easy-pwa/easy-pwa-js/blob/0d7653b/src/ts/manager/PushManager.ts#L52)*

Init firebase Notifications

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`projectId` | string | - | Firebase project id |
`messagingSenderId` | string | - | - |
`firebaseMessaging` | FirebaseMessaging &#124; null |  null | If you want to initialize firebase yourself: an instance of firebase messaging. |

**Returns:** *[FirebaseProvider](firebaseprovider.md)*

Return the firebase provider created.

___

###  isNotificationSupported

▸ **isNotificationSupported**(): *boolean*

*Defined in [manager/PushManager.ts:41](https://github.com/easy-pwa/easy-pwa-js/blob/0d7653b/src/ts/manager/PushManager.ts#L41)*

Check if notifications are supported in the current browser

**Returns:** *boolean*

true if notification is supported.

___

###  requestPermission

▸ **requestPermission**(): *Promise‹NotificationPermission›*

*Defined in [manager/PushManager.ts:15](https://github.com/easy-pwa/easy-pwa-js/blob/0d7653b/src/ts/manager/PushManager.ts#L15)*

Requests permission

**Returns:** *Promise‹NotificationPermission›*

Return a promise with the notification permission status.

___

###  showNotification

▸ **showNotification**(`title`: string, `options`: NotificationOptions): *Promise‹void›*

*Defined in [manager/PushManager.ts:33](https://github.com/easy-pwa/easy-pwa-js/blob/0d7653b/src/ts/manager/PushManager.ts#L33)*

Show a notification.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`title` | string | The notification's title |
`options` | NotificationOptions | The notification's options. |

**Returns:** *Promise‹void›*

Return a promise when notification is showed.
