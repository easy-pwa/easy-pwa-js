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

*Defined in [manager/PushManager.ts:60](https://github.com/easy-pwa/easy-pwa-js/blob/e952716/src/ts/manager/PushManager.ts#L60)*

Get the Firebase provider. Call initFirebase before.

**Returns:** *[FirebaseProvider](firebaseprovider.md) | null*

Firebase provider or null if init function was not called.

___

###  initFirebase

▸ **initFirebase**(`projectId`: string, `messagingSenderId`: string): *[FirebaseProvider](firebaseprovider.md)*

*Defined in [manager/PushManager.ts:49](https://github.com/easy-pwa/easy-pwa-js/blob/e952716/src/ts/manager/PushManager.ts#L49)*

Init firebase Notifications

**Parameters:**

Name | Type |
------ | ------ |
`projectId` | string |
`messagingSenderId` | string |

**Returns:** *[FirebaseProvider](firebaseprovider.md)*

Return the firebase provider created.

___

###  isNotificationSupported

▸ **isNotificationSupported**(): *boolean*

*Defined in [manager/PushManager.ts:40](https://github.com/easy-pwa/easy-pwa-js/blob/e952716/src/ts/manager/PushManager.ts#L40)*

Check if notifications are supported in the current browser

**Returns:** *boolean*

true if notification is supported.

___

###  requestPermission

▸ **requestPermission**(): *Promise‹NotificationPermission›*

*Defined in [manager/PushManager.ts:14](https://github.com/easy-pwa/easy-pwa-js/blob/e952716/src/ts/manager/PushManager.ts#L14)*

Requests permission

**Returns:** *Promise‹NotificationPermission›*

Return a promise with the notification permission status.

___

###  showNotification

▸ **showNotification**(`title`: string, `options`: NotificationOptions): *Promise‹void›*

*Defined in [manager/PushManager.ts:32](https://github.com/easy-pwa/easy-pwa-js/blob/e952716/src/ts/manager/PushManager.ts#L32)*

Show a notification.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`title` | string | The notification's title |
`options` | NotificationOptions | The notification's options. |

**Returns:** *Promise‹void›*

Return a promise when notification is showed.
