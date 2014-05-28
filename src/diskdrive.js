var exec = require('child_process').exec;

module.exports = {
	// id is an OPTIONAL argument.
	eject: function(id) {
		// setup optional argument, will default to 1
		id = (typeof id === 'undefined') ? 1 : id;

		// are we running on mac?
		if (process.platform === 'darwin') {
			exec('drutil tray eject ' + id, function(err, stdout, stderr) {
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