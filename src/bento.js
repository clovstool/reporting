var Bento = function() {

	function Bento() {
		this.bentoConfig;
		this.bentoMetadata;
		this.bento;
		this.hasPlayed;
		this.isBuffering;
		this.hasSeekStart;
		this.hasPaused;
		this.hasContentEnd;	
	};

	Bento.prototype = {
		initialize: function() {
			_.bindAll(this, 
				"onPlayerReady",
				"onMediaStart", 
				"onMediaEnd", 
				"onPlayhead", 
				"onPlayStateChange");
			this.bento = new BTG.Bento();
			this.bentoConfig = BTG.ConfigSettings();

			// placeholder test data
			this.bentoConfig.applicationContext = "http://pjs.com";
			this.bentoConfig.applicationName	"FullEpisodePlayer";
			this.bentoConfig.applicationType	"network";
			this.bentoConfig.countryCode	"US";
			this.bentoConfig.freewheelEnabled = false;
			this.bentoConfig.group = "entertainment";
			this.bentoConfig.omnitureAdTrackingEnabled =  false;
			this.bentoConfig.omnitureCharSet	= "ISO-8859-1";
			this.bentoConfig.omnitureDataCenter = "112";
			this.bentoConfig.omnitureEnabled	= true;
			this.bentoConfig.omnitureEndslateTracking = true;
			this.bentoConfig.omnitureFirstPartyServer = "sc.thedailyshow.com";
			this.bentoConfig.omnitureHeartbeatsDisabled = true;
			this.bentoConfig.omnitureLiveEventBeaconFreq = 180;
			this.bentoConfig.omnitureLiveEventHeartbeatsDisabled	false;
			this.bentoConfig.omnitureLiveEventTrackingEnabled = true;
			this.bentoConfig.omnitureMediaTrackingEnabled = true;
			this.bentoConfig.omniturePathContext = "video/net/";
			this.bentoConfig.omnitureSuite = "viadev";
			this.bentoConfig.omnitureVisitorNamespace = true;
			this.bentoConfig.playerURL = "pjs";
			this.bentoConfig.referrer = "http://thedailyshow.cc.com/full-episodes/jxvcqy/april-23--2014---robin-roberts";
			
			this.bento.onConfig(bentoConfig);
			
			this.player.once(Events.METADATA, this.onPlayerReady);
		},
		onMediaStart: function() {
			this.hasPlayed = false;
		},
		onPlayerReady: function(event) {
			this.logger.log("onPlayerReady, initialize Bento");
			this.bentoMetadata = BTG.Metadata();
			// Saravanan looking at minimum metadata required
			this.bentoMetadata.contentType = "Video Clip";
			this.bentoMetadata.franchise = "Hangout Festival";
			this.bentoMetadata.guid = "mgid:arc:video:thedailyshow.123456";
			this.bentoMetadata.videoId = "ab9200d5-ced8-4204-8054-3fce0054d03b";
			this.bentoMetadata.videoTitle = "The Daily Show|A Diverse Array of American Racism_ab9200d5-ced8-4204-8054-3fce0054d03b";
			this.bentoMetadata.isAd = false;
			this.bentoMetadata.isFullEpisode = false;
			this.bentoMetadata.hasPlaylist = false;
			this.bento.onMetadata(bentoMetadata);
		},
		onPlayhead: function(event) {
			var playhead = event.data;
			this.bento.onPlayheadUpdate(playhead);
			if ((this.isBuffering || this.hasSeekStart) && this.hasPlayed) {
				this.isBuffering = false;
				this.hasSeekStart = false;
				this.bento.onResumePlay(playhead);
			}
		},
		onPlayStateChange: function(event) {
			var playhead = this.player.playhead;
			var state = event.data;
			switch (state) {
				case "playing":
					if (!this.hasPlayed) {
						this.hasPlayed = true;
						bento.onMetadata(BentoModel.metadata(this.player));
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
			this.hasContentEnd = true;
		}
	}
	return new Bento();
}();
