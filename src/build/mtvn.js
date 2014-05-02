(function(root, factory) {
	/* global MTVNPlayer*/
	if (typeof MTVNPlayer === "object") {
		MTVNPlayer.require(["_", "$", "backbone"], function(_, $, Backbone) {
			factory(_, $, Backbone);
		});
	}
}(this, function(_, $, Backbone) {
	/* jshint unused:false */
	// Reporting code has the deps in needs.
	//= ../reporting.js
}));