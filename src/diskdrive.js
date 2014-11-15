var exec = require('child_process').exec;

var self = module.exports;

/**
 * Eject the specified disk drive.
 * @param  {int|string}   id       Locator for the disk drive.
 * @param  {Function}     callback Optional callback for disk drive ejection completion / error.
 */
self.eject = function(id, callback) {
	// are we running on mac?
	if (process.platform === 'darwin') {
		// setup optional argument, on mac, will default to 1
		id = (typeof id === 'undefined') ? 1 : id;

		exec('drutil tray eject ' + id, function(err, stdout, stderr) {
			if (err && callback) {
				// error occurred and callback exists
				callback(err);
			} else if (callback) {
				// no error, but callback for completion
				callback(null);
			}
		});
	// are we running on linux?
	} else if (process.platform === 'linux') {
		// setup optional argument, on linux, will default to '' (empty string)
		id = (typeof id === 'undefined') ? '' : id;

		exec('eject ' + id, function(err, stdout, stderr) {
			if (err && callback) {
				callback(err);
			} else if (callback) {
				// no error, callback for completion
				callback(null);
			}
		});
	} else {
		// unsupported platform; callback with error
		if (callback) {
			process.nextTick(callback.bind(null, new Error('unsupported platform: ' + process.platform)));
		}
	}
};