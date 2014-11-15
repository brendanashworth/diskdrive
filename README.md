DiskDrive
=====
[![Build Status](https://travis-ci.org/brendanashworth/diskdrive.svg?branch=master)](https://travis-ci.org/brendanashworth/diskdrive)

[![DiskDrive NPM](https://nodei.co/npm/diskdrive.png)](http://npmjs.org/package/diskdrive)

> DiskDrive is a cross compatible binding for DVD and CD drives. It currently supports OSX and Linux.

## Install
```bash
$ npm install diskdrive
```

## Documentation
#### Eject: `function([id/mount], [callback(err)]);`
First argument can be of type `string` or `int`. It specifies the mount / ID of the disk drive to eject.

Second argument is of type `Function`, which takes an `err`. If an error occurs ejecting the disk, it will be called with a respective `Error`. It is always called upon completion (the error will be `null`).

Example usage:
```javascript
var diskdrive = require('diskdrive');

// Eject the primary disk drive.
// Note lack of callback (optional)
diskdrive.eject();

// [Mac] Eject disk of [id].
diskdrive.eject(2, function(error) {
	if (error) console.log(error);
});

// [Linux] Eject disk drive, with specified mount.
diskdrive.eject('/dev/dvd', function(error) {
	if (error) console.log(error);
});
diskdrive.eject('dvd'); // appended to /dev/, would result in same system file. (/dev/dvd)
```

### Cross Compatibility
Currently, OSX and Linux have been tested and are confirmed to work. The following have been tested with good results:
* OSX 10.9.2
* OSX 10.9.5
* Ubuntu 12.04

### License
[MIT](./LICENSE)