[Easy PWA](../README.md) › [PwaManager](pwamanager.md)

# Class: PwaManager

All methods for managing PWA.

## Hierarchy

* **PwaManager**

## Index

### Properties

* [EVENT_READY](pwamanager.md#static-event_ready)

### Methods

* [enableDebug](pwamanager.md#enabledebug)
* [getInstallManager](pwamanager.md#getinstallmanager)
* [getManifest](pwamanager.md#getmanifest)
* [getPushManager](pwamanager.md#getpushmanager)
* [getServiceWorkerRegistration](pwamanager.md#getserviceworkerregistration)
* [init](pwamanager.md#init)
* [isAppMode](pwamanager.md#isappmode)
* [onPageChanging](pwamanager.md#onpagechanging)

## Properties

### `Static` EVENT_READY

▪ **EVENT_READY**: *"easy-pwa-ready"* = "easy-pwa-ready"

*Defined in [manager/PwaManager.ts:11](https://github.com/easy-pwa/easy-pwa-js/blob/0d7653b/src/ts/manager/PwaManager.ts#L11)*

## Methods

###  enableDebug

▸ **enableDebug**(): *void*

*Defined in [manager/PwaManager.ts:187](https://github.com/easy-pwa/easy-pwa-js/blob/0d7653b/src/ts/manager/PwaManager.ts#L187)*

Enable Debug mode. More information is showed in the console for helping to Debug your PWA.

**Returns:** *void*

___

###  getInstallManager

▸ **getInstallManager**(): *InstallManagerClass*

*Defined in [manager/PwaManager.ts:50](https://github.com/easy-pwa/easy-pwa-js/blob/0d7653b/src/ts/manager/PwaManager.ts#L50)*

Get the Install Manager for managing Home Screen.

**Returns:** *InstallManagerClass*

___

###  getManifest

▸ **getManifest**(): *WebManifest | null*

*Defined in [manager/PwaManager.ts:180](https://github.com/easy-pwa/easy-pwa-js/blob/0d7653b/src/ts/manager/PwaManager.ts#L180)*

Get the manifest content.

**Returns:** *WebManifest | null*

Get the manifest's content if it was read successfly, null otherwise.

___

###  getPushManager

▸ **getPushManager**(): *PushManagerClass*

*Defined in [manager/PwaManager.ts:39](https://github.com/easy-pwa/easy-pwa-js/blob/0d7653b/src/ts/manager/PwaManager.ts#L39)*

Get the Push Manager for managing push notification.

**Returns:** *PushManagerClass*

___

###  getServiceWorkerRegistration

▸ **getServiceWorkerRegistration**(): *ServiceWorkerRegistration | null*

*Defined in [manager/PwaManager.ts:172](https://github.com/easy-pwa/easy-pwa-js/blob/0d7653b/src/ts/manager/PwaManager.ts#L172)*

Get the service worker registration

**Returns:** *ServiceWorkerRegistration | null*

Get the service worker registration or null if it's bad registered.

___

###  init

▸ **init**(`swPath`: string, `options?`: RegistrationOptions): *Promise‹ServiceWorkerRegistration›*

*Defined in [manager/PwaManager.ts:25](https://github.com/easy-pwa/easy-pwa-js/blob/0d7653b/src/ts/manager/PwaManager.ts#L25)*

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

*Defined in [manager/PwaManager.ts:62](https://github.com/easy-pwa/easy-pwa-js/blob/0d7653b/src/ts/manager/PwaManager.ts#L62)*

Check if site is launched in fullscreen (app)

**Returns:** *boolean*

true if you are in PWA mode.

___

###  onPageChanging

▸ **onPageChanging**(`callback`: function): *void*

*Defined in [manager/PwaManager.ts:84](https://github.com/easy-pwa/easy-pwa-js/blob/0d7653b/src/ts/manager/PwaManager.ts#L84)*

Function to execute when browser starts to changes page.
because browser loader is not visible in standalone mode

**Parameters:**

▪ **callback**: *function*

A function to execute when page is changing.

▸ (): *void*

**Returns:** *void*
