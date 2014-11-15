var diskdrive = require('./main');

// Ejecting with no paramaters
diskdrive.eject();

// Ejecting a specific tray, Mac
diskdrive.eject(2, function(err) {
	if (err) console.log('Error occurred: ' + err);
});

// Ejecting via Linux mounts
diskdrive.eject('/dev/dvd');
diskdrive.eject('dvd', function(err) {
	if (err) console.log('Linux does not like me: ' + err);
});