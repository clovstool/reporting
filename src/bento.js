/* exported Bento */
/* global _, BTG, Util */
function Bento() {
	this.initialize.apply(this, arguments);
}
Bento.prototype = {
	logger: new Util.Logger("@@package-name"),
	bento: {},
	bentoConfig: {},
	bentoMetadata: {},
	hasPlayed: false,
	isBuffering: false,
	hasSeekStart: false,
	hasPaused: false,
	hasContentEnd: false,
	playhead: 0,
	initialize: function(options) {
		this.logger.log("initialize Bento");
		this.options = options;
		_.bindAll(this, "onReady", "onMetadata", "onMediaStart", "onMediaEnd", "onPlayheadUpdate", "onStateChange");
		this.bento = BTG.Bento;
		BTG.Log.enableLogging();
		this.bentoConfig = _.extend(BTG.ConfigSettings(), this.DefaultConfig, this.options.config);
		this.bento.onConfig(this.bentoConfig);
		if (this.options.currentMetadata){
			this.logger.log("using currentMetadata");
			var bentoMetadata = _.extend(BTG.Metadata(), this.DefaultMetadata, this.options.currentMetadata);
			this.bento.onMetadata(bentoMetadata);
		}
		if (this.options.playhead){
			this.playhead = this.options.playhead;
		}
		if (this.options.state){
			this.onStateChange({data: this.options.state});
		}
	},
	onReady: function() {
		// fires on ready? if needed?
		this.logger.log("onReady");
	},
	onMediaStart: function() {
		this.logger.log("onMediaStart");
		this.hasPlayed = false;
	},
	onMetadata: function(event) {
		this.logger.log("onMetadata");
		var bentoMetadata = _.extend(BTG.Metadata(), this.DefaultMetadata, this.options.currentMetadata, event.data);
		this.bento.onMetadata(bentoMetadata);
	},
	onPlayheadUpdate: function(event) {
		var playhead = this.playhead = event.data;
		this.bento.onPlayheadUpdate(playhead);
		if ((this.isBuffering || this.hasSeekStart) && this.hasPlayed) {
			this.isBuffering = false;
			this.hasSeekStart = false;
			this.bento.onResumePlay(playhead);
		}
	},
	onStateChange: function(event) {
		this.logger.log("onStateChange: ", event.data);
		var playhead = this.playhead,
			bento = this.bento,
			state = event.data;
		switch (state) {
			case "playing":
				if (!this.hasPlayed) {
					this.hasPlayed = true;
					bento.onMediaStart();
					this.logger.log("about to call onPlay(" + playhead + ")");
					bento.onPlay(playhead);
				} else if (this.hasPaused) {
					this.hasPaused = false;
					bento.onResumePlay(playhead);
				}
				break;
			default:
				break;
		}
		if (this.hasPlayed) {
			switch (state) {
				case "paused":
					this.hasPaused = true;
					bento.onPause(playhead);
					break;
				case "seeking":
					this.hasSeekStart = true;
					bento.onSeeking(playhead);
					break;
				case "buffering":
					this.isBuffering = true;
					bento.onBuffering(playhead);
					break;
				case "stopped":
					this.hasPlayed = false;
					bento.onPlayEnd(playhead);
					break;
				default:
					break;

			}
		}
	},
	onMediaEnd: function() {
		this.logger.log("onMediaEnd");
		this.hasContentEnd = true;
	}
};
//= model/default-config.js
//= model/default-metadata.js
//= model/default-metadata-items.js