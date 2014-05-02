/*global Reporting, test, ok*/
/* jshint devel:true */
test("bento", function() {

	ok(Reporting.Bento, "Bento exists");
	var bento = new Reporting.Bento({

	});
	bento.onPlayheadUpdate({
		data: 10
	});
});