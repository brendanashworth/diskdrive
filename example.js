var diskdrive = require('./main');

// Ejecting with no paramaters
diskdrive.eject();

// Ejecting a specific tray, Mac
diskdrive.eject(2);

// Ejecting via Linux mounts
diskdrive.eject('/dev/dvd');
diskdrive.eject('dvd');