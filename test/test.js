/*global Reporting, test, ok*/
/* jshint devel:true */
test("bento", function() {

	ok(Reporting.Bento, "Bento exists");
	var bento = new Reporting.Bento({});
	bento.onMediaStart();
	bento.onMetadata({data:{}});
	bento.onReady();
	bento.onStateChange({data: "playing"});
	var interval = setInterval(function(){
		bento.onPlayheadUpdate({data:bento.playhead + 1});
		if (bento.playhead == 5){
			bento.onStateChange({data: "buffering"});
			bento.onStateChange({data: "playing"});
			clearInterval(interval);
		}
	},1000);
});