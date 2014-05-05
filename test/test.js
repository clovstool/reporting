/*global Reporting, test, ok*/
/* jshint devel:true */
test("bento", function() {

	ok(Reporting.Bento, "Bento exists");
	var bento = new Reporting.Bento({});
	bento.onMediaStart();
	bento.onMetadata({data:{}});
	bento.onReady();
	bento.onStateChange({data: "playing"});
	//bento.onPlayheadUpdate({
	//	data: 10
	//});
});