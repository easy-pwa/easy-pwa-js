
# Class: PwaManager

All methods for managing PWA.

## Hierarchy

* **PwaManager**

## Index

### Methods

* [enableDebug](pwamanager.md#enabledebug)
* [getInstallManager](pwamanager.md#getinstallmanager)
* [getManifest](pwamanager.md#getmanifest)
* [getPushManager](pwamanager.md#getpushmanager)
* [getServiceWorkerRegistration](pwamanager.md#getserviceworkerregistration)
* [init](pwamanager.md#init)
* [isAppMode](pwamanager.md#isappmode)

## Methods

###  enableDebug

▸ **enableDebug**(): *void*

*Defined in [ts/manager/PwaManager.ts:154](https://github.com/easy-pwa/easy-pwa-js/blob/1839738/src/ts/manager/PwaManager.ts#L154)*

Enable Debug mode. More information is showed in the console for helping to Debug your PWA.

**Returns:** *void*

___

###  getInstallManager

▸ **getInstallManager**(): *InstallManagerClass*

*Defined in [ts/manager/PwaManager.ts:50](https://github.com/easy-pwa/easy-pwa-js/blob/1839738/src/ts/manager/PwaManager.ts#L50)*

Get the Install Manager for managing Home Screen.

**Returns:** *InstallManagerClass*

___

###  getManifest

▸ **getManifest**(): *WebManifest | null*

*Defined in [ts/manager/PwaManager.ts:147](https://github.com/easy-pwa/easy-pwa-js/blob/1839738/src/ts/manager/PwaManager.ts#L147)*

Get the manifest content.

**Returns:** *WebManifest | null*

Get the manifest's content if it was read successfully, null otherwise.

___

###  getPushManager

▸ **getPushManager**(): *PushManagerClass*

*Defined in [ts/manager/PwaManager.ts:39](https://github.com/easy-pwa/easy-pwa-js/blob/1839738/src/ts/manager/PwaManager.ts#L39)*

Get the Push Manager for managing push notification.

**Returns:** *PushManagerClass*

___

###  getServiceWorkerRegistration

▸ **getServiceWorkerRegistration**(): *ServiceWorkerRegistration | null*

*Defined in [ts/manager/PwaManager.ts:139](https://github.com/easy-pwa/easy-pwa-js/blob/1839738/src/ts/manager/PwaManager.ts#L139)*

Get the service worker registration

**Returns:** *ServiceWorkerRegistration | null*

Get the service worker registration or null if it's bad registered.

___

###  init

▸ **init**(`swPath`: string, `options?`: RegistrationOptions): *Promise‹ServiceWorkerRegistration›*

*Defined in [ts/manager/PwaManager.ts:25](https://github.com/easy-pwa/easy-pwa-js/blob/1839738/src/ts/manager/PwaManager.ts#L25)*

Call this function, first.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`swPath` | string | The path to the service worker |
`options?` | RegistrationOptions | options to pass to service worker registration. |

**Returns:** *Promise‹ServiceWorkerRegistration›*

Return a promise when treatment is finished.

___

###  isAppMode

▸ **isAppMode**(): *boolean*

*Defined in [ts/manager/PwaManager.ts:62](https://github.com/easy-pwa/easy-pwa-js/blob/1839738/src/ts/manager/PwaManager.ts#L62)*

Check if site is launched in fullscreen (app)

**Returns:** *boolean*

true if you are in PWA mode.
