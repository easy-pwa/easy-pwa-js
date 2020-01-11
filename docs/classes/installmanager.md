
# Class: InstallManager

Methods for managing about Installing

## Hierarchy

* **InstallManager**

## Index

### Constructors

* [constructor](installmanager.md#constructor)

### Methods

* [addInviteCriteria](installmanager.md#addinvitecriteria)
* [enableDesktopPwa](installmanager.md#enabledesktoppwa)
* [setIntervalBetweenInvitation](installmanager.md#setintervalbetweeninvitation)

## Constructors

###  constructor

\+ **new InstallManager**(): *[InstallManager](installmanager.md)*

*Defined in [ts/manager/InstallManager.ts:22](https://github.com/easy-pwa/easy-pwa-js/blob/1faf83b/src/ts/manager/InstallManager.ts#L22)*

**Returns:** *[InstallManager](installmanager.md)*

## Methods

###  addInviteCriteria

▸ **addInviteCriteria**(`callback`: function): *void*

*Defined in [ts/manager/InstallManager.ts:40](https://github.com/easy-pwa/easy-pwa-js/blob/1faf83b/src/ts/manager/InstallManager.ts#L40)*

Add additional criteria before propose invite to install

**Parameters:**

▪ **callback**: *function*

A function which has to respond a boolean. True if you are ready to show invite, false overwise

▸ (): *boolean*

**Returns:** *void*

___

###  enableDesktopPwa

▸ **enableDesktopPwa**(): *void*

*Defined in [ts/manager/InstallManager.ts:112](https://github.com/easy-pwa/easy-pwa-js/blob/1faf83b/src/ts/manager/InstallManager.ts#L112)*

Enable desktop Pwa

**Returns:** *void*

___

###  setIntervalBetweenInvitation

▸ **setIntervalBetweenInvitation**(`dayInterval`: number): *void*

*Defined in [ts/manager/InstallManager.ts:32](https://github.com/easy-pwa/easy-pwa-js/blob/1faf83b/src/ts/manager/InstallManager.ts#L32)*

Set interval in day before to invite again

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dayInterval` | number | Interval in day between invitation. Set 0 if you want to disable our system.  |

**Returns:** *void*
