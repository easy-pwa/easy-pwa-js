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

\+ **new FirebaseProvider**(`serviceWorker`: ServiceWorkerRegistration, `firebaseApp`: FirebaseAppMessaging): *[FirebaseProvider](firebaseprovider.md)*

*Defined in [push/FirebaseProvider.ts:13](https://github.com/easy-pwa/easy-pwa-js/blob/666dd89/src/ts/push/FirebaseProvider.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`serviceWorker` | ServiceWorkerRegistration |
`firebaseApp` | FirebaseAppMessaging |

**Returns:** *[FirebaseProvider](firebaseprovider.md)*

## Methods

###  deleteToken

▸ **deleteToken**(`token`: string): *Promise‹string | Error›*

*Defined in [push/FirebaseProvider.ts:95](https://github.com/easy-pwa/easy-pwa-js/blob/666dd89/src/ts/push/FirebaseProvider.ts#L95)*

delete user token

**Parameters:**

Name | Type |
------ | ------ |
`token` | string |

**Returns:** *Promise‹string | Error›*

___

###  fetchToken

▸ **fetchToken**(): *Promise‹string | Error›*

*Defined in [push/FirebaseProvider.ts:53](https://github.com/easy-pwa/easy-pwa-js/blob/666dd89/src/ts/push/FirebaseProvider.ts#L53)*

Fetch token and notify server

**Returns:** *Promise‹string | Error›*

___

###  getToken

▸ **getToken**(): *Promise‹string | Error›*

*Defined in [push/FirebaseProvider.ts:73](https://github.com/easy-pwa/easy-pwa-js/blob/666dd89/src/ts/push/FirebaseProvider.ts#L73)*

Get user token

**Returns:** *Promise‹string | Error›*

___

###  isInitialized

▸ **isInitialized**(): *boolean*

*Defined in [push/FirebaseProvider.ts:31](https://github.com/easy-pwa/easy-pwa-js/blob/666dd89/src/ts/push/FirebaseProvider.ts#L31)*

Check if firebase is initialized

**Returns:** *boolean*

___

###  onForegroundNotification

▸ **onForegroundNotification**(`callback`: function): *void*

*Defined in [push/FirebaseProvider.ts:38](https://github.com/easy-pwa/easy-pwa-js/blob/666dd89/src/ts/push/FirebaseProvider.ts#L38)*

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

*Defined in [push/FirebaseProvider.ts:46](https://github.com/easy-pwa/easy-pwa-js/blob/666dd89/src/ts/push/FirebaseProvider.ts#L46)*

When a token is fetched, function to execute (send it to server for example)

**Parameters:**

▪ **callback**: *function*

▸ (`token`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`token` | string |

**Returns:** *void*
