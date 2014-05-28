var exec = require('child_process').exec;

module.exports = {
	// id is an OPTIONAL argument.
	eject: function(id) {
		// are we running on mac?
		if (process.platform === 'darwin') {
			// setup optional argument, on mac, will default to 1
			id = (typeof id === 'undefined') ? 1 : id;

			exec('drutil tray eject ' + id, function(err, stdout, stderr) {
				if (err) {
					console.log('ERROR: DiskDrive, when executing bash cmd: ' + err);
					return;
				}

				// if it came here, it went all perfectly and it ejected.
			});
		// are we running on linux?
		} else if (process.platform === 'linux') {
			// setup optional argument, on linux, will default to '' (empty string)
			id = (typeof id === 'undefined') ? '' : id;

			exec('eject ' + id, function(err, stdout, stderr) {
				if (err) {
					console.log('ERROR: DiskDrive, when executing bash cmd: ' + err);
					return;
				}

				// if it came here, it went all perfectly and it ejected.
			});
		} else {
			console.log('ERROR: Unsupported DiskDrive platform (' + process.platform + ').');
		}
	}
};