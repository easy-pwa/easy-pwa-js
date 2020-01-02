[Easy PWA](../README.md) › [InstallManager](installmanager.md)

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

*Defined in [manager/InstallManager.ts:23](https://github.com/easy-pwa/easy-pwa-js/blob/666dd89/src/ts/manager/InstallManager.ts#L23)*

**Returns:** *[InstallManager](installmanager.md)*

## Methods

###  addInviteCriteria

▸ **addInviteCriteria**(`callback`: function): *void*

*Defined in [manager/InstallManager.ts:41](https://github.com/easy-pwa/easy-pwa-js/blob/666dd89/src/ts/manager/InstallManager.ts#L41)*

Add additional criteria before propose invite to install

**Parameters:**

▪ **callback**: *function*

A function which has to respond a boolean. True if you are ready to show invite, false overwise

▸ (): *boolean*

**Returns:** *void*

___

###  enableDesktopPwa

▸ **enableDesktopPwa**(): *void*

*Defined in [manager/InstallManager.ts:113](https://github.com/easy-pwa/easy-pwa-js/blob/666dd89/src/ts/manager/InstallManager.ts#L113)*

Enable desktop Pwa

**Returns:** *void*

___

###  setIntervalBetweenInvitation

▸ **setIntervalBetweenInvitation**(`dayInterval`: number): *void*

*Defined in [manager/InstallManager.ts:33](https://github.com/easy-pwa/easy-pwa-js/blob/666dd89/src/ts/manager/InstallManager.ts#L33)*

Set interval in day before to invite again

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dayInterval` | number | Interval in day between invitation  |

**Returns:** *void*
