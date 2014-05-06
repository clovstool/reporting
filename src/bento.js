/* exported Bento */
/* global _, BTG, Util*/
function Bento() {
	this.initialize.apply(this, arguments);
}
Bento.prototype = {
	logger: new Util.Logger("@@package-name"),
	// placeholder test data taken from hangouts feed
	bentoConfig: {

		applicationContext:	"media.mtvnservices.com",
		applicationName:	"Network Player",
		applicationOrigin:	null,
		applicationType:	null,
		comscoreAdTracking:	true,
		comscoreEnabled:	false,
		countryCode:	"COUNTRY_XX",
		customFields:	{
			prop27: "unknown",
			prop28: "owner"
		},
		demdexEnabled:	false,
		demdexEndCallEnabled:	false,
		freewheelEnabled:	false,
		group:	null,
		nielsenEnabled:	false,
		omnitureAdTrackingEnabled:	false,
		omnitureCharSet:	"ISO-8859-1",
		omnitureDataCenter:	"112",
		omnitureEnabled:	true,
		omnitureEndslateTracking:	false,
		omnitureFirstPartyServer:	"sc.mtv.com",
		omnitureHeartbeatsDisabled:	true,
		omnitureLiveEventBeaconFreq:	180,
		omnitureLiveEventHeartbeatsDisabled:	false,
		omnitureLiveEventTrackingEnabled:	false,
		omnitureMediaTrackingEnabled:	true,
		omniturePathContext:	"video/net/",
		omnitureSuite:	"viamtv",
		omnitureVisitorNamespace:	false,
		playerURL:	null,
		referrer:	"media.mtvnservices.com"
	},
	// Saravanan looking at minimum metadata required
	bentoMetadata: {
		adDuration:	NaN,
		adId:	0,
		adUrl:	"",
		adUrlRedirect:	null,
		aggrementId:	0,
		applicationContext:	null,
		applicationName:	null,
		applicationOrigin:	null,
		artistId:	null,
		artistName:	"NO-ARTIST",
		bandwidth:	2089,
		businessUnit:	"mtv.com",
		clipType:	null,
		clipTypeId:	null,
		contentType:	"Live Stream",
		description:	"",
		duration:	0,
		events:	null,
		eventType:	"NO-EVENT",
		franchise:	"Hey Gurl",
		guid:	"mgid:uma:video:mtv.com:1014920",
		hasPlayList:	false,
		isAd:	false,
		isFullEpisode:	false,
		isLiveEvent:	true,
		itemDuration:	NaN,
		itemIndex:	0,
		label:	null,
		lineupId:	null,
		location:	null,
		mediaCategory:	"Live Stream",
		mediaDescription:	"",
		mediaTitle:	null,
		mtvnOwner:	"mtv.com",
		pageName:	"http://www.mtv.com/videos/?id=1727079",
		partIndex:	0,
		playerHeight:	319,
		playerMode:	"normal",
		playerSize:	null,
		playerUrl:	"http://media.mtvnservices.com/embed/mgid:uma:video:mtv.com:1014920/cp~id%3D1727079%26vid%3D1014920%26uri%3Dmgid%3Auma%3Avideolist%3Amtv.com%3A1727079",
		playerWidth:	512,
		playlistDuration:	0,
		playlistId:	"mgid:uma:videolist:mtv.com:1727079",
		playlistLength:	1,
		playlistMetadataItems:	{
			adUrl:	"",
			adUrlRedirect:	null,
			affectCounters:	true,
			age:	0,
			agreement:	null,
			agreementId:	0,
			albumLabel:	null,
			albumName:	null,
			align:	null,
			allowAds:	true,
			artistId:	null,
			artistName:	"NO-ARTIST",
			artists:	null,
			beacons:	null,
			businessUnit:	null,
			category:	null,
			clickUrl:	null,
			contentType:	"Live Stream",
			description:	"",
			duration:	0,
			endTracker:	null,
			eventType:	"NO-EVENT",
			frameRate:	NaN,
			franchise:	"Hey Gurl",
			guid:	"mgid:uma:video:mtv.com:1014920",
			header:	null,
			height:	NaN,
			id:	null,
			image:	null,
			isAd:	false,
			isBumper:	false,
			isDefault:	true,
			keyWords:	"",
			link:	"http://www.mtv.com/videos/misc/1014920/best-of-hangout.jhtml#id=1727079",
			location:	null,
			medium:	"video",
			mtvnOwner:	null,
			playerUrl:	"http://media.mtvnservices.com/embed/mgid:uma:video:mtv.com:1014920/cp~id%3D1727079%26vid%3D1014920%26uri%3Dmgid%3Auma%3Avideolist%3Amtv.com%3A1727079",
			playlistDuration:	NaN,
			playlistLength:	NaN,
			playlistLink:	"http://www.mtv.com/videos/?id=1727079",
			playlistRepTitle:	null,
			playlistTitle:	"2014 Hangout Livestream",
			playlistType:	"NO-CONTENTTYPE",
			playlistUri:	"mgid:uma:videolist:mtv.com:1727079",
			pubDate:	"Fri, 02 May 2014 00:00:00 EDT",
			rating:	"nonadult",
			renditions:	null,
			reportable:	true,
			scale:	null,
			showTitle:	null,
			startTracker:	null,
			subBrand:	null,
			thumbnailFeedVO:	null,
			thumbnailUrl:	"http://mtv.mtvnimages.com/uri/mgid:uma:video:mtv.com:1014920?height=288&width=512",
			title:	"Best Of Hangout",
			type:	"text/xml",
			url:	"http://www.mtv.com/player/includes/mediaGen.jhtml?uri=mgid:uma:video:mtv.com:1014920&id=1727079&vid=1014920&ref=http://www.mtv-d.mtvi.com/music/hangout-festival/2014/index.jhtml&device={device}&viewUri=mgid:uma:video:mtv.com:1014920",
			videoId:	null,
			videoTitle:	"Best Of Hangout",
			width:	NaN,
			xPercent:	null,
			yPercent:	null
		},
		playlistTitle:	"2014 Hangout Livestream",
		playlistType:	"NO-CONTENTTYPE",
		precisionTestSegment:	"defaultPrecisionTestSegment",
		previousItemGUID:	"mgid:cms:video:thedailyshow.com:412604",
		previousItemPlaylistURI:	null,
		products:	null,
		reportable:	true,
		segmentName:	null,
		showTitle:	null,
		subBrand:	null,
		thumbnailUrl:	"http://mtv.mtvnimages.com/uri/mgid:uma:video:mtv.com:1014920?height=288&width=512",
		uriNamespace:	"mgid:uma:video:mtv.com:1014920",
		userSegment:	null,
		videoId:	"1014920",
		videoTitle:	"Best Of Hangout_1014920",
		videoUrl:	"http://www.mtv.com/player/includes/mediaGen.jhtml?uri=mgid:uma:video:mtv.com:1014920&id=1727079&vid=1014920&ref=http://www.mtv-d.mtvi.com/music/hangout-festival/2014/index.jhtml&device={device}&viewUri=mgid:uma:video:mtv.com:1014920",
		vmnUUID:	""
	},
	bento: {},
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