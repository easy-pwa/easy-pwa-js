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

*Defined in [manager/PushManager.ts:65](https://github.com/easy-pwa/easy-pwa-js/blob/666dd89/src/ts/manager/PushManager.ts#L65)*

Get the Firebase provider. Call initFirebase before.

**Returns:** *[FirebaseProvider](firebaseprovider.md) | null*

Firebase provider or null if init function was not called.

___

###  initFirebase

▸ **initFirebase**(`firebaseApp`: FirebaseAppMessaging): *[FirebaseProvider](firebaseprovider.md)*

*Defined in [manager/PushManager.ts:52](https://github.com/easy-pwa/easy-pwa-js/blob/666dd89/src/ts/manager/PushManager.ts#L52)*

Init firebase Notifications

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`firebaseApp` | FirebaseAppMessaging | initialized firebase app |

**Returns:** *[FirebaseProvider](firebaseprovider.md)*

Return the firebase provider created.

___

###  isNotificationSupported

▸ **isNotificationSupported**(): *boolean*

*Defined in [manager/PushManager.ts:43](https://github.com/easy-pwa/easy-pwa-js/blob/666dd89/src/ts/manager/PushManager.ts#L43)*

Check if notifications are supported in the current browser

**Returns:** *boolean*

true if notification is supported.

___

###  requestPermission

▸ **requestPermission**(): *Promise‹NotificationPermission›*

*Defined in [manager/PushManager.ts:17](https://github.com/easy-pwa/easy-pwa-js/blob/666dd89/src/ts/manager/PushManager.ts#L17)*

Requests permission

**Returns:** *Promise‹NotificationPermission›*

Return a promise with the notification permission status.

___

###  showNotification

▸ **showNotification**(`title`: string, `options`: NotificationOptions): *Promise‹void›*

*Defined in [manager/PushManager.ts:35](https://github.com/easy-pwa/easy-pwa-js/blob/666dd89/src/ts/manager/PushManager.ts#L35)*

Show a notification.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`title` | string | The notification's title |
`options` | NotificationOptions | The notification's options. |

**Returns:** *Promise‹void›*

Return a promise when notification is showed.
