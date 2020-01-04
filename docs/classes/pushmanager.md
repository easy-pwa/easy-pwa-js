
# Class: PushManager

Methods for managing about Push

## Hierarchy

* **PushManager**

## Index

### Methods

* [firebase](pushmanager.md#firebase)
* [isNotificationSupported](pushmanager.md#isnotificationsupported)
* [requestPermission](pushmanager.md#requestpermission)
* [showNotification](pushmanager.md#shownotification)

## Methods

###  firebase

▸ **firebase**(`firebaseApp?`: FirebaseAppMessaging): *[FirebaseProvider](firebaseprovider.md) | null*

*Defined in [ts/manager/PushManager.ts:50](https://github.com/easy-pwa/easy-pwa-js/blob/1839738/src/ts/manager/PushManager.ts#L50)*

Get the Firebase provider. First time, you have to pass a firebase app initialized

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`firebaseApp?` | FirebaseAppMessaging | initialized firebase app |

**Returns:** *[FirebaseProvider](firebaseprovider.md) | null*

Firebase provider or null if init function was not called.

___

###  isNotificationSupported

▸ **isNotificationSupported**(): *boolean*

*Defined in [ts/manager/PushManager.ts:41](https://github.com/easy-pwa/easy-pwa-js/blob/1839738/src/ts/manager/PushManager.ts#L41)*

Check if notifications are supported in the current browser

**Returns:** *boolean*

true if notification is supported.

___

###  requestPermission

▸ **requestPermission**(): *Promise‹NotificationPermission›*

*Defined in [ts/manager/PushManager.ts:15](https://github.com/easy-pwa/easy-pwa-js/blob/1839738/src/ts/manager/PushManager.ts#L15)*

Requests permission

**Returns:** *Promise‹NotificationPermission›*

Return a promise with the notification permission status.

___

###  showNotification

▸ **showNotification**(`title`: string, `options`: NotificationOptions): *Promise‹void›*

*Defined in [ts/manager/PushManager.ts:33](https://github.com/easy-pwa/easy-pwa-js/blob/1839738/src/ts/manager/PushManager.ts#L33)*

Show a notification.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`title` | string | The notification's title |
`options` | NotificationOptions | The notification's options. |

**Returns:** *Promise‹void›*

Return a promise when notification is showed.
