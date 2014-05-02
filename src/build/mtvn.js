(function(root, factory) {
	/* global MTVNPlayer*/
	if (typeof MTVNPlayer === "object") {
		MTVNPlayer.require(["_", "mtvn-util"], function() {
			MTVNPlayer.provide("@@package-name", factory.apply(null, arguments));
		});
	}
}(this, function(_, Util) {
	/* jshint unused:false */
	// Reporting code has the deps in needs.
	/* global Reporting */
	//= ../reporting.js
	return Reporting;
}));