DiskDrive
=====

![DiskDrive NPM](https://nodei.co/npm/diskdrive.png)

> DiskDrive is a cross compatible binding for DVD and CD drives. It currently supports OSX and Linux.

### Install
```bash
$ npm install diskdrive
```

### Usage
```javascript
var diskdrive = require('diskdrive');

// Eject the primary disk drive.
diskdrive.eject();

// [Mac] Eject disk of [id].
diskdrive.eject(2);

// [Linux] Eject disk drive, with specified mount.
diskdrive.eject('/dev/dvd');
diskdrive.eject('dvd'); // appended to /dev/, would result in same system file. (/dev/dvd)
```

### Cross Compatibility
Currently, OSX and Linux have been tested and are confirmed to work. The following have been tested with good results:
* OSX 10.9.2
* Ubuntu 12.04

### License
[MIT](./LICENSE)