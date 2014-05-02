/*global Reporting, test, ok, _, Backbone */
/* jshint devel:true */
test("bento", function() {
	var Player = function() {};
	Player.prototype = {
		logger: {
			log: function() {
				console.log.apply(console, _.toArray(arguments));
			}
		}
	};
	_.extend(Player.prototype, Backbone.Events);
	var player = new Player();
	console.log("test.js:12 player", player);
	ok(Reporting.Bento, "Bento exists");
	var bento = new Reporting.Bento({
		player: player
	});
	player.trigger("mediaStart", {
		type: "mediaStart",
		target: player
	});
	player.trigger("metadata", {
		data: {},
		type: "metadata",
		target: player
	});

	bento.onPlayhead({
		data: 10
	});
});