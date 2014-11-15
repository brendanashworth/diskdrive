// eject
var assert = require('chai').assert;

var diskdrive = require('../main');

describe('diskdrive.eject', function() {
	// it should exist (we need more unit-testable stuff)
	it('should exist', function() {
		assert.isFunction(diskdrive.eject);
	});

	// it should error out with fake platform
	it('should give error with unsupported platform', function() {
		process.platform = 'fake_platform';

		diskdrive.eject(undefined, function(error) {
			assert.isNotNull(error);
		});
	});

	// api should be strictly asynchronous
	it('should be strictly asynchronous', function() {
		var asynchronous = false;
		process.platform = 'fake_platform'; // set to fake platform to ensure closest-to-synchronous behavior

		diskdrive.eject(undefined, function(error) {
			// regardless of error, set asynchronous to true
			asynchronous = true;
		});
		asynchronous = false;

		// in 10ms, ensure that asynchronous = true
		setTimeout(function() {
			assert.ok(asynchronous);
		}, 10);
	});
});