/* exported Bento */
/* global _, BTG, Util*/
function Bento() {
	this.initialize.apply(this, arguments);
}
Bento.prototype = {
	logger: new Util.Logger("@@package-name"),
	// placeholder test data
	bentoConfig: {
		applicationContext: "http://pjs.com",
		applicationName: "FullEpisodePlayer",
		applicationType: "network",
		countryCode: "US",
		freewheelEnabled: false,
		group: "entertainment",
		omnitureAdTrackingEnabled: false,
		omnitureCharSet: "ISO-8859-1",
		omnitureDataCenter: "112",
		omnitureEnabled: true,
		omnitureEndslateTracking: true,
		omnitureFirstPartyServer: "sc.thedailyshow.com",
		omnitureHeartbeatsDisabled: true,
		omnitureLiveEventBeaconFreq: 180,
		omnitureLiveEventHeartbeatsDisabled: false,
		omnitureLiveEventTrackingEnabled: true,
		omnitureMediaTrackingEnabled: true,
		omniturePathContext: "video/net/",
		omnitureSuite: "viadev",
		omnitureVisitorNamespace: true,
		playerURL: "pjs",
		referrer: "http://thedailyshow.cc.com/full-episodes/jxvcqy/april-23--2014---robin-roberts"
	},
	// Saravanan looking at minimum metadata required
	bentoMetadata: {
		contentType: "Video Clip",
		franchise: "Hangout Festival",
		guid: "mgid:arc:video:thedailyshow.123456",
		videoId: "ab9200d5-ced8-4204-8054-3fce0054d03b",
		videoTitle: "The Daily Show|A Diverse Array of American Racism_ab9200d5-ced8-4204-8054-3fce0054d03b",
		isAd: false,
		isFullEpisode: false,
		hasPlaylist: false
	},
	bento: {},
	hasPlayed: false,
	isBuffering: false,
	hasSeekStart: false,
	hasPaused: false,
	hasContentEnd: false,
	initialize: function(options) {
		this.options = options;
		_.bindAll(this, "onReady", "onMetadata", "onMediaStart", "onMediaEnd", "onPlayheadUpdate", "onStateChange");
		this.bento = BTG.Bento;
		this.bentoConfig = _.extend(BTG.ConfigSettings(), this.bentoConfig, this.options.config);
		this.bento.onConfig(this.bentoConfig);
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
		var bentoMetadata = _.extend(BTG.Metadata(), this.bentoMetadata, this.options.metadata, event.data);
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
		this.logger.log("onStateChange", event.data);
		var playhead = this.playhead,
			bento = this.bento,
			state = event.data;
		switch (state) {
			case "playing":
				if (!this.hasPlayed) {
					this.hasPlayed = true;
					bento.onMediaStart();
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