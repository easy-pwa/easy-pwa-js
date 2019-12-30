[Easy PWA](../README.md) › [FirebaseProvider](firebaseprovider.md)

# Class: FirebaseProvider

## Hierarchy

* **FirebaseProvider**

## Index

### Constructors

* [constructor](firebaseprovider.md#constructor)

### Methods

* [deleteToken](firebaseprovider.md#deletetoken)
* [fetchToken](firebaseprovider.md#fetchtoken)
* [getToken](firebaseprovider.md#gettoken)
* [isInitialized](firebaseprovider.md#isinitialized)
* [onForegroundNotification](firebaseprovider.md#onforegroundnotification)
* [onTokenFetched](firebaseprovider.md#ontokenfetched)

## Constructors

###  constructor

\+ **new FirebaseProvider**(`serviceWorker`: ServiceWorkerRegistration, `projectId`: string, `messagingSenderId`: string, `firebaseMessaging`: FirebaseMessaging | null): *[FirebaseProvider](firebaseprovider.md)*

*Defined in [push/FirebaseProvider.ts:14](https://github.com/easy-pwa/easy-pwa-js/blob/0d7653b/src/ts/push/FirebaseProvider.ts#L14)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`serviceWorker` | ServiceWorkerRegistration | - |
`projectId` | string | - |
`messagingSenderId` | string | - |
`firebaseMessaging` | FirebaseMessaging &#124; null |  null |

**Returns:** *[FirebaseProvider](firebaseprovider.md)*

## Methods

###  deleteToken

▸ **deleteToken**(`token`: string): *Promise‹string | Error›*

*Defined in [push/FirebaseProvider.ts:106](https://github.com/easy-pwa/easy-pwa-js/blob/0d7653b/src/ts/push/FirebaseProvider.ts#L106)*

delete user token

**Parameters:**

Name | Type |
------ | ------ |
`token` | string |

**Returns:** *Promise‹string | Error›*

___

###  fetchToken

▸ **fetchToken**(): *Promise‹string | Error›*

*Defined in [push/FirebaseProvider.ts:64](https://github.com/easy-pwa/easy-pwa-js/blob/0d7653b/src/ts/push/FirebaseProvider.ts#L64)*

Fetch token and notify server

**Returns:** *Promise‹string | Error›*

___

###  getToken

▸ **getToken**(): *Promise‹string | Error›*

*Defined in [push/FirebaseProvider.ts:84](https://github.com/easy-pwa/easy-pwa-js/blob/0d7653b/src/ts/push/FirebaseProvider.ts#L84)*

Get user token

**Returns:** *Promise‹string | Error›*

___

###  isInitialized

▸ **isInitialized**(): *boolean*

*Defined in [push/FirebaseProvider.ts:42](https://github.com/easy-pwa/easy-pwa-js/blob/0d7653b/src/ts/push/FirebaseProvider.ts#L42)*

Check if firebase is initialized

**Returns:** *boolean*

___

###  onForegroundNotification

▸ **onForegroundNotification**(`callback`: function): *void*

*Defined in [push/FirebaseProvider.ts:49](https://github.com/easy-pwa/easy-pwa-js/blob/0d7653b/src/ts/push/FirebaseProvider.ts#L49)*

**Parameters:**

▪ **callback**: *function*

Callback to execute if notification is received when user is currently on the site

▸ (`payload`: FirebasePayloadMessage): *void*

**Parameters:**

Name | Type |
------ | ------ |
`payload` | FirebasePayloadMessage |

**Returns:** *void*

___

###  onTokenFetched

▸ **onTokenFetched**(`callback`: function): *void*

*Defined in [push/FirebaseProvider.ts:57](https://github.com/easy-pwa/easy-pwa-js/blob/0d7653b/src/ts/push/FirebaseProvider.ts#L57)*

When a token is fetched, function to execute (send it to server for example)

**Parameters:**

▪ **callback**: *function*

▸ (`token`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`token` | string |

**Returns:** *void*
