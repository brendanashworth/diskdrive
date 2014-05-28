DiskDrive
=====

![DiskDrive NPM](https://nodei.co/npm/diskdrive.png)

> DiskDrive is a (soon to be) cross compatible binding for DVD and CD drives. It is still a work in progress, but at the moment it supports OSX 10.9.2+.

### Install
```bash
$ npm install diskdrive
```

### Usage
```javascript
var diskdrive = require('diskdrive');

// Eject primary disk. (If you don't know what you're doing, this is what you want.)
diskdrive.eject();

// Eject disk of [id].
diskdrive.eject(2);
```