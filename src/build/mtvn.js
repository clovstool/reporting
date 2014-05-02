(function(root, factory) {
	/* global MTVNPlayer*/
	if (typeof MTVNPlayer === "object") {
		MTVNPlayer.require("_", function(_) {
			factory(_);
		});
	}
}(this, function(_) {
	/* jshint unused:false */
	// Reporting code has the deps in needs.
	/* global Reporting */
	//= ../reporting.js
	return Reporting;
}));