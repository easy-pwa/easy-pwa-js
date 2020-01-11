
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

*Defined in [ts/push/FirebaseProvider.ts:13](https://github.com/easy-pwa/easy-pwa-js/blob/1faf83b/src/ts/push/FirebaseProvider.ts#L13)*

**Parameters:**

Name | Type |
------ | ------ |
`serviceWorker` | ServiceWorkerRegistration |
`firebaseApp` | FirebaseAppMessaging |

**Returns:** *[FirebaseProvider](firebaseprovider.md)*

## Methods

###  deleteToken

▸ **deleteToken**(`token`: string): *Promise‹string | Error›*

*Defined in [ts/push/FirebaseProvider.ts:94](https://github.com/easy-pwa/easy-pwa-js/blob/1faf83b/src/ts/push/FirebaseProvider.ts#L94)*

delete user token

**Parameters:**

Name | Type |
------ | ------ |
`token` | string |

**Returns:** *Promise‹string | Error›*

___

###  fetchToken

▸ **fetchToken**(): *Promise‹string | Error›*

*Defined in [ts/push/FirebaseProvider.ts:52](https://github.com/easy-pwa/easy-pwa-js/blob/1faf83b/src/ts/push/FirebaseProvider.ts#L52)*

Fetch token and notify server

**Returns:** *Promise‹string | Error›*

___

###  getToken

▸ **getToken**(): *Promise‹string›*

*Defined in [ts/push/FirebaseProvider.ts:68](https://github.com/easy-pwa/easy-pwa-js/blob/1faf83b/src/ts/push/FirebaseProvider.ts#L68)*

Get user token

**Returns:** *Promise‹string›*

___

###  isInitialized

▸ **isInitialized**(): *boolean*

*Defined in [ts/push/FirebaseProvider.ts:30](https://github.com/easy-pwa/easy-pwa-js/blob/1faf83b/src/ts/push/FirebaseProvider.ts#L30)*

Check if firebase is initialized

**Returns:** *boolean*

___

###  onForegroundNotification

▸ **onForegroundNotification**(`callback`: function): *void*

*Defined in [ts/push/FirebaseProvider.ts:37](https://github.com/easy-pwa/easy-pwa-js/blob/1faf83b/src/ts/push/FirebaseProvider.ts#L37)*

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

*Defined in [ts/push/FirebaseProvider.ts:45](https://github.com/easy-pwa/easy-pwa-js/blob/1faf83b/src/ts/push/FirebaseProvider.ts#L45)*

When a token is fetched, function to execute (send it to server for example)

**Parameters:**

▪ **callback**: *function*

▸ (`token`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`token` | string |

**Returns:** *void*
