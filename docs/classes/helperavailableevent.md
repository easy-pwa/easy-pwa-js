
# Class: HelperAvailableEvent

## Hierarchy

* [AbstractEvent](abstractevent.md)

  ↳ **HelperAvailableEvent**

## Index

### Constructors

* [constructor](helperavailableevent.md#constructor)

### Properties

* [beforeinstallprompt](helperavailableevent.md#optional-beforeinstallprompt)
* [inviteProcessed](helperavailableevent.md#inviteprocessed)
* [EVENT_NAME](helperavailableevent.md#static-event_name)

### Methods

* [acceptInvite](helperavailableevent.md#acceptinvite)
* [dismissInvite](helperavailableevent.md#dismissinvite)
* [showInvite](helperavailableevent.md#showinvite)

## Constructors

###  constructor

\+ **new HelperAvailableEvent**(`homeScreenManager`: [InstallManager](installmanager.md), `event`: BeforeInstallPromptEvent, `inviteProcessed`: Function, `showInvite`: Function, `showHelper`: Function): *[HelperAvailableEvent](helperavailableevent.md)*

*Defined in [ts/event/HelperAvailableEvent.ts:16](https://github.com/easy-pwa/easy-pwa-js/blob/1fe1473/src/ts/event/HelperAvailableEvent.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`homeScreenManager` | [InstallManager](installmanager.md) |
`event` | BeforeInstallPromptEvent |
`inviteProcessed` | Function |
`showInvite` | Function |
`showHelper` | Function |

**Returns:** *[HelperAvailableEvent](helperavailableevent.md)*

## Properties

### `Optional` beforeinstallprompt

• **beforeinstallprompt**? : *BeforeInstallPromptEvent*

*Defined in [ts/event/HelperAvailableEvent.ts:8](https://github.com/easy-pwa/easy-pwa-js/blob/1fe1473/src/ts/event/HelperAvailableEvent.ts#L8)*

___

###  inviteProcessed

• **inviteProcessed**: *Function*

*Defined in [ts/event/HelperAvailableEvent.ts:10](https://github.com/easy-pwa/easy-pwa-js/blob/1fe1473/src/ts/event/HelperAvailableEvent.ts#L10)*

___

### `Static` EVENT_NAME

▪ **EVENT_NAME**: *"easy-pwa-helper-available"* = "easy-pwa-helper-available"

*Overrides [AbstractEvent](abstractevent.md).[EVENT_NAME](abstractevent.md#static-event_name)*

*Defined in [ts/event/HelperAvailableEvent.ts:6](https://github.com/easy-pwa/easy-pwa-js/blob/1fe1473/src/ts/event/HelperAvailableEvent.ts#L6)*

## Methods

###  acceptInvite

▸ **acceptInvite**(): *void*

*Defined in [ts/event/HelperAvailableEvent.ts:37](https://github.com/easy-pwa/easy-pwa-js/blob/1fe1473/src/ts/event/HelperAvailableEvent.ts#L37)*

**Returns:** *void*

___

###  dismissInvite

▸ **dismissInvite**(): *void*

*Defined in [ts/event/HelperAvailableEvent.ts:42](https://github.com/easy-pwa/easy-pwa-js/blob/1fe1473/src/ts/event/HelperAvailableEvent.ts#L42)*

**Returns:** *void*

___

###  showInvite

▸ **showInvite**(): *void*

*Defined in [ts/event/HelperAvailableEvent.ts:33](https://github.com/easy-pwa/easy-pwa-js/blob/1fe1473/src/ts/event/HelperAvailableEvent.ts#L33)*

**Returns:** *void*
