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

\+ **new FirebaseProvider**(`serviceWorker`: ServiceWorkerRegistration, `projectId`: string, `messagingSenderId`: string): *[FirebaseProvider](firebaseprovider.md)*

*Defined in [push/FirebaseProvider.ts:14](https://github.com/easy-pwa/easy-pwa-js/blob/e952716/src/ts/push/FirebaseProvider.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`serviceWorker` | ServiceWorkerRegistration |
`projectId` | string |
`messagingSenderId` | string |

**Returns:** *[FirebaseProvider](firebaseprovider.md)*

## Methods

###  deleteToken

▸ **deleteToken**(`token`: string): *Promise‹string | Error›*

*Defined in [push/FirebaseProvider.ts:101](https://github.com/easy-pwa/easy-pwa-js/blob/e952716/src/ts/push/FirebaseProvider.ts#L101)*

delete user token

**Parameters:**

Name | Type |
------ | ------ |
`token` | string |

**Returns:** *Promise‹string | Error›*

___

###  fetchToken

▸ **fetchToken**(): *Promise‹string | Error›*

*Defined in [push/FirebaseProvider.ts:59](https://github.com/easy-pwa/easy-pwa-js/blob/e952716/src/ts/push/FirebaseProvider.ts#L59)*

Fetch token and notify server

**Returns:** *Promise‹string | Error›*

___

###  getToken

▸ **getToken**(): *Promise‹string | Error›*

*Defined in [push/FirebaseProvider.ts:79](https://github.com/easy-pwa/easy-pwa-js/blob/e952716/src/ts/push/FirebaseProvider.ts#L79)*

Get user token

**Returns:** *Promise‹string | Error›*

___

###  isInitialized

▸ **isInitialized**(): *boolean*

*Defined in [push/FirebaseProvider.ts:37](https://github.com/easy-pwa/easy-pwa-js/blob/e952716/src/ts/push/FirebaseProvider.ts#L37)*

Check if firebase is initialized

**Returns:** *boolean*

___

###  onForegroundNotification

▸ **onForegroundNotification**(`callback`: function): *void*

*Defined in [push/FirebaseProvider.ts:44](https://github.com/easy-pwa/easy-pwa-js/blob/e952716/src/ts/push/FirebaseProvider.ts#L44)*

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

*Defined in [push/FirebaseProvider.ts:52](https://github.com/easy-pwa/easy-pwa-js/blob/e952716/src/ts/push/FirebaseProvider.ts#L52)*

When a token is fetched, function to execute (send it to server for example)

**Parameters:**

▪ **callback**: *function*

▸ (`token`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`token` | string |

**Returns:** *void*
