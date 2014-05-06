(function(root, factory) {
	/* global MTVNPlayer*/
	if (typeof MTVNPlayer === "object") {
		MTVNPlayer.require(["_", "mtvn-util"], function() {
			MTVNPlayer.provide("pjs-reporting", factory.apply(null, arguments));
		});
	}
}(this, function(_, Util) {
	/* jshint unused:false */
	// Reporting code has the deps in needs.
	/* global Reporting */
	/* exported Reporting */
	/* global Bento*/
	var Reporting = {
		version: "0.1.0",
		build: "Tue May 06 2014 10:53:06"
	};
	// =========BTG BENTO START==========
	(function(window){
		window.BTG = typeof window.BTG === 'object' ? window.BTG : {};
	})(window);
	/**
	* AppMeasureVars is a collection of constants
	* @class	AppMeasureVars
	*/
	(function(BTG){
		BTG.AppMeasureVars = {
			/**
			* The value of default item index
			* @final
			* @member	BTG.AppMeasureVars
			*/
			DEFAULT_ITEM_INDEX : 0,
			/**
			* The value of visitor namespace
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			VISITOR_NAMESPACE : "mtvn",
			/**
			* The value of traffic variance limit
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			TRAFFIC_VAR_LIMIT : 75,
			/**
			* The value of minimum duration
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			MIN_DURATION      : 30,
			/**
			* The value of maximum duration
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			MAX_DURATION      : 120,
			/**
			* The value of network path
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			NETWORK_PATH      : "video/net/",
			/**
			* The value of syndicated path
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			SYNDICATED_PATH   : "video/syn/",
			/**
			* The value of viral path
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			VIRAL_PATH        : "video/syn/",
			/**
			* The value of video ad title
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			VIDEOAD_TITLE     : "VIDEO_AD|",
			/**
			* The value of video item event
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			VIDEOITEM_EVENT   : "event15",
			/**
			* The value of ad item event
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			ADITEM_EVENT      : "event29",
			/**
			* The value of play list start
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			PLAYLIST_START    : "event24",
			/**
			* The value of buffer event
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			BUFFER_EVENT      : "event25",
			/**
			* The value of play list duration
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			PLAYLIST_DURATION : "event26",
			/**
			* The value of play list length
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			PLAYLIST_LENGTH   : "event28",
			/**
			* The value of single clip event
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			SINGLECLIP_EVENT  : "event50",
			/**
			* The value of playlist event
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			PLAYLIST_EVENT    : "event49",
			/**
			* The value of franchise title
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			FRANCHISE_TITLE   : "prop35",
			/**
			* The value of events
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			EVENTS            : "events",
			/**
			* The value of products
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			PRODUCTS          : "products",
			/**
			* The value of semicolons
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			SEMICOLONS        : ";;;;",
			/**
			* The value of playlist item
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			PLAYLIST_ITEM     : "PLAYLIST",
			/**
			* The value of single clip item
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			SINGLECLIP_ITEM   : "SINGLECLIP",
			/**
			* The value of media name
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			MEDIA_NAME        : "eVar33,prop50",
			/**
			* The value of media time played
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			MEDIA_TIMEPLAYED  : "event78",
			/**
			* The value of media complete
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			MEDIA_COMPLETE    : "event76",
			/**
			* The value of media segment view
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			MEDIA_SEGMENTVIEW : "event77",
			/**
			* The value of segment evar
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			MEDIA_SEGMENTEVAR : "eVar56",
			/**
			* The value of demdex segment evar
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			MEDIA_SEGMENTEVAR_DEMDEX : "evar57eventsproductspagenamehier",
			/**
			* The value of media playlist complete
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			MEDIA_PLAYLIST_COMPLETE : "event89",
			/**
			 * Event to track the duration of clips
			 * @default event71
			 */
			DURATION_EVENT : "event46",
			/**
			 * Contains Omniture Ad media map for Ad start event
			 * @default event71
			 */
			AD_START_EVENT : "event71",
			/**
			 * Contains Omniture Ad media map for Ad end event
			 * @default event72
			 */
			AD_END_EVENT : "event72",
			/**
			 * Contains Omniture Ad media map event for Ad time spent
			 * @default event73
			 */
			AD_TIME_SPENT : "event73",
			/**
			 * Contains Omniture Ad media map for Pod ID
			 * @default eVar38,prop54
			 */
			AD_POD_ID : "eVar38,prop54",
			/**
			 * Contains Omniture Ad media map for Creative ID
			 * @default eVar37,prop53
			 */
			AD_CREATIVE_ID : "eVar37,prop53",
			/**
			 * Contains Omniture Ad media map for Pod item position
			 * @default eVar39,prop55
			 */
			AD_POD_ITEMS : "eVar39,prop55",
			/**
			 * Contains video title string for Ad reporting
			 * @default VIDEO_TITLE
			 */
			AD_VIDEO_TITLE : "Ad Play",
			/**
			* The value of live beacon frequency
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			LIVE_BEACON_FREQ  : 180,
			/**
			* The maximum value of live beacon frequency
			* @final
			* @member	BTG.AppMeasureVars
			*/
			LIVE_FREQ_MAX: 180,
			/**
			* The minimun value of live beacon frequency
			* @final
			* @member	BTG.AppMeasureVars
			*/
			LIVE_FREQ_MIN: 60,
			/**
			* The value of live duration
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			LIVE_DURATION     : 8640000, // 100 days
			/**
			* The value for live event initial play head update to handle heart beat calls.
			* @final
			* @member	BTG.AppMeasureVars
			*/
			LIVE_EVENT_START_PLAYHEAD : 4320000, // 50 days
			/**
			* The value of vmn uuid cookie
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			VMN_UUID_COOKIE   : "vmn_uuid",
			/**
			* The value of user segment category
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			USER_SEG_CATEGORY : "User Segment;",
			/**
			* Default to 60 seconds for setting trackSeconds in appMeasure
			* @final
			* @member	BTG.AppMeasureVars
			*/
			DEFAULT_TRACK_SECONDS : 60,		
			/**
			* The value of default vars
			* @final
			* @member	BTG.AppMeasureVars
			*/	
			DEFAULT_VARS : {
				pageName : "pageName",
				eVar26   : "franchise",
				eVar27   : "mtvnOwner",
				eVar28   : "mediaCategory",
				eVar29   : "artistName",
				eVar30   : "applicationOrigin",
				eVar31   : "applicationName",
				eVar32   : "applicationContext",
				eVar33   : "videoTitle",
				eVar34   : "playlistTitle",
				eVar56   : "segmentName",
				eVar66   : "playlistId",
				events   : "events",
				products : "products",
				prop35   : "mediaTitle",
				prop36   : "franchise",
				prop38   : "mtvnOwner",
				prop43   : "playlistTitle",
				prop45   : "mediaCategory",
				prop46   : "artistName",
				prop47   : "applicationOrigin",
				prop48   : "applicationName",
				prop49   : "applicationContext",
				prop50   : "videoTitle",
				prop1    : "agreement",
				prop3    : "agreementId",
				prop30   : "guid",
				eVar57   : "vmnUUID",
				prop31   : "userSegment",
				prop66   : "playlistId"
			},
			/**
			* The value of default Ad vars
			* @final
			* @member	BTG.AppMeasureVars
			*/
			DEFAULT_AD_VARS : {
					eVar37 :	"creativeId", 
					prop53 :	"creativeId", 
					eVar38 :	"podId", 
					prop54 :	"podId", 
					eVar39 :	"currentAdIndex", 
					prop55 :	"currentAdIndex"
			}		
		};
	})(BTG);(function(BTG){
		BTG.AriaVars = {
			BENTO_MODULES_URL : "//btg.mtvnservices.com/aria/bento.js"
		};
	})(BTG);
	/**
	* BeaconVars is a collection of constants
	* @class	BeaconVars
	*/
	(function(BTG){
		BTG.BeaconVars = {
			/**
			* The value representing Infinity
			* @final
			* @member	BTG.BeaconVars
			*/	
			MAX_VALUE : Infinity,
			/**
			* The value representing the default milliseconds
			* @final
			* @member	BTG.BeaconVars
			*/	
			DEFAULT_RANGE : 1000
		};
	})(BTG);
	/**
	* ComscoreVars is a collection of constants
	* @class	ComscoreVars
	*/
	(function(BTG){
		BTG.ComscoreVars = {
			/**
			* The value of beacon url
			* @final
			* @member	BTG.ComscoreVars
			*/	
			BEACON_URL      : "//beacon.securestudies.com/scripts/beacon.dll",
	
			/**
			* The value of beacon type id
			* @final
			* @member	BTG.ComscoreVars
			*/
			BEACON_TYPEID   : "1",
	
			/**
			* The value of video ad title
			* @final
			* @member	BTG.ComscoreVars
			*/
			VIDEOAD_TITLE   : "VIDEO_AD",
	
			/**
			* The value of video ad genre id
			* @final
			* @member	BTG.ComscoreVars
			*/
			VIDEOAD_GENREID : "01",
	
			/**
			* The value of content genre id
			* @final
			* @member	BTG.ComscoreVars
			*/
			CONTENT_GENREID : "03",
			/**
			 * Contains random key name for the query string
			 * @final
			 * @member	BTG.ComscoreVars
			 */
			RND_KEY : "rn",
			/**
			 * Contains maximum string length value of Comscore parameter
			 * @default 512
			 * @final
			 * @member	BTG.ComscoreVars
			 */		
			PARAM_LIMIT : 512,
			/**
			 * Contains maximum string length value of Comscore url
			 * @default 2080
			 * @final
			 * @member	BTG.ComscoreVars
			 */				
			URL_LIMIT : 2080
		};
	})(BTG);
	/**
	* Collection of constants used by DataJanitor
	* @class	DataJanitorVars
	*/
	(function(BTG){
		BTG.DataJanitorVars = {
			/**
			* Provides a default value and a string to match on for property names corresponding to BTG.ConfigSettings
			* @final
			* @member	BTG.DataJanitorVars
			*/
			DEFAULT_VALUES : {
				applicationContext : {value : 'NOT_AVAILABLE', matchOn : 'none'}
			},
			/**
			* Provides value for undefined, null, or empty property names corresponding to BTG.ConfigSettings
			* @final
			* @member	BTG.DataJanitorVars
			*/
			UNDEFINED_VALUES : {
				applicationContext : 'NO_REF'
			}
		};
	})(BTG);
	/**
	* FreewheelVars is a collection of constants
	* @class	FreewheelVars
	*/
	(function(BTG){
		BTG.FreewheelVars = {
			//FW_URL	:	"sdnyadvip1-d.fwmrm.net/ad/g/1?nw={0}&prof={1}&flag=+sltp+exvt+slcb+unka+unks;",
			/**
			* The value of Freewheel url
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_URL           : "//140cc.v.fwmrm.net/ad/g/1?nw={0}&prof={0}:{1}&flag=+sltp+exvt+slcb+unka+unks;",
			/**
			* The value of Freewheel url for international player
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_URL_INT       : "//2ab7f.v.fwmrm.net/ad/g/1?nw={0}&prof={0}:{1}&flag=+sltp+exvt+slcb+unka+unks;",
			/**
			* The value of Freewheel test URL for international player
			* @final
			* @member	BTG.FreewheelVars
			*/
			FW_URL_INT_TEST : "//293a7.v.fwmrm.net/ad/g/1?nw={0}&prof={0}:{1}&flag=+sltp+exvt+slcb+unka+unks;",
			/**
			* The value of video play time
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_VIDEO_PLAYED_TIME  : "mtvn_btg_videoPlayedTime",
			/**
			* The value of last play time code
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_LAST_PLAYTIME_CODE : "mtvn_btg_lastPlayTimeCode",
			/**
			* The value of lastGUID played
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_LAST_GUID_PLAYED : "mtvn_btg_lastGUIDPlayed",
			/**
			* The value of last playlist url played
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_LAST_PLAYLIST_URI_PLAYED : "mtvn_btg_lastPlaylistURIPlayed",
			/**
			* The value of minumum time between ads
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_MINTIME_BTW_ADS    : 10,
			/**
			* The value of qc demo 
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_QC_DEMO_VALUE      : "vmn_btg_qcdemotargetting",
			/**
			* The value of Freewheel ara key
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_ARA_KEY       : "_fw_ara",
			/**
			* The value of Freewheel Site section search key
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_FSS_KEY       : "_fw_fss",
			/**
			* The value of Freewheel Site section search key value
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_FSS_VALUE       : "_fw_search",
			/**
			* The value of Freewheel demdex segment
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_DEMDEX_FW_SEGMENT  : "mtvn_demdex_fw_segment",
			/**
			* The value of Freewheel vmn uuid
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_VMN_UUID          : "vmnUUID",
			/**
			* The value of Freewheel clip time
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_DEF_CLIP_TIME : 180,
			/**
			* The value of Freewheel network id
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_NETWORK_ID	 : 82125,
			/**
			* The value of Freewheel test network id
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_NETWORK_ID_TEST	 : 82124,
			/**
			* The value of Freewheel international test newtwork id
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_NETWORK_ID_INTL_TEST: 168871,
			/**
			* The value of Freewheel international network id
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_NETWORK_ID_INTL: 174975,
			/**
			* The value of Freewheel profile id
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_PROFILE_ID	 : "HTML5_5.12",				
			/**
			* The value of Freewheel minimum time for ads
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_DEF_MIN_TIME_FOR_ADS : 30000,
			/**
			* The value of Freewheel site section
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_DEF_SITE_SECTION : "MTVN_Viral_Syndication",
			/**
			* Default Asset Id to be sent in FW request for Intl player which will be used as fallback asset Id when no matching Asset Id found in BVI feeds.
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_INTL_DEFAULT_ASSET_ID: 41349526, //BTGREPGEN-2211
			/**
			* Site Section ID suffix for Mobile devices.
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_MOB_SID_SUFFIX: "_mob",
			/**
			* Site Section ID suffix for Tablet devices.
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_TAB_SID_SUFFIX: "_tab",
			/**
			* Default FW ad Index initial value
			* @final
			* @member	BTG.FreewheelVars
			*/	
			FW_INIT_AD_INDEX: 1,
			/**
			 * Contains Playlist Key.
			 * @default playlist
			 */
			FW_PLAYLIST_KEY: "playlist"
		};
	})(BTG);
	/**
	* MessageVars constants correspond to event names in CODA.
	* Used to post messages to parent.postMessage
	*/
	(function(BTG){
		BTG.MessageVars = {
			/**
			* UUID Constant
			* @final
			* @member	BTG.MessageVars
			*/
			VMN_UUID : 'uuid',
			/**
			* Demdex Segment Constant
			* @final
			* @member	BTG.MessageVars
			*/
			DEMDEX_SEGMENT : 'demdexfwsegment',
			/**
			* User Segment Constant
			* @final
			* @member	BTG.MessageVars
			*/
			USER_SEGMENT : 'usersegment',		
			/**
			* Demdex call Constant
			* @final
			* @member	BTG.MessageVars
			*/
			DEMDEX : 'demdexcall',
			/**
			* Omniture tracking server Constant
			* @final
			* @member	BTG.MessageVars
			*/
			OMT_TRACKING_SERVER : 'trackingserver',
			/**
			* Omniture visitor id Constant
			* @final
			* @member	BTG.MessageVars
			*/
			OMT_VISITOR_ID : 'visitorid'
		};
	})(BTG);
	/**
	* NielsenVars is a collection of constants
	* @class	NielsenVars
	*/
	(function(BTG){
		BTG.NielsenVars = {
			/**
			* The value of beacon url
			* @final
			* @member	BTG.NielsenVars
			*/	
			BEACON_URL     : "//secure-us.imrworldwide.com/cgi-bin/m",
			/**
			* The value of script url
			* @final
			* @member	BTG.NielsenVars
			*/	
			SCRIPT_URL     : "//secure-us.imrworldwide.com/novms/js/2/ggcmb354.js",
			/**
			* The value of client product
			* @final
			* @member	BTG.NielsenVars
			*/	
			CLIENT_PROD    : "sc",
			/**
			* The value of cookie check
			* @final
			* @member	BTG.NielsenVars
			*/	
			COOKIE_CHECK   : 1,
			/**
			* The value of load
			* @final
			* @member	BTG.NielsenVars
			*/	
			LOAD           : 3,
			/**
			* The value of play
			* @final
			* @member	BTG.NielsenVars
			*/	
			PLAY           : 5,
			/**
			* The value of pause
			* @final
			* @member	BTG.NielsenVars
			*/	
			PAUSE          : 6,
			/**
			* The value of stop
			* @final
			* @member	BTG.NielsenVars
			*/	
			STOP           : 7,
			/**
			* The value of seek
			* @final
			* @member	BTG.NielsenVars
			*/	
			SEEK           : 8,
			/**
			* The value of content viode
			* @final
			* @member	BTG.NielsenVars
			*/	
			CONTENT_VIDEO  : "content",
			/**
			* The value of preroll video
			* @final
			* @member	BTG.NielsenVars
			*/	
			PREROLL_VIDEO  : "preroll",
			/**
			* The value of midroll video
			* @final
			* @member	BTG.NielsenVars
			*/	
			MIDROLL_VIDEO  : "midroll",
			/**
			* The value of postroll video
			* @final
			* @member	BTG.NielsenVars
			*/	
			POSTROLL_VIDEO : "postroll",
			/**
			* The value of milestones
			* @final
			* @member	BTG.NielsenVars
			*/	
			MILESTONES     : "25%,50%,75%",
			/**
			* The value of video ad title
			* @final
			* @member	BTG.NielsenVars
			*/	
			VIDEOAD_TITLE  : "VIDEO_AD",
			/**
			* The value of clip title
			* @final
			* @member	BTG.NielsenVars
			*/	
			CLIP_TITLE     : "CLIP"
		};
	})(BTG);
	(function(BTG){
		BTG.StreamSenseVars = {
			BASE_URL : "//b.scorecardresearch.com/p",
			TYPEID   : "2",
	
			MAX_DURATION : 600, //10 minutes in seconds
	
			CLIP_SHORT   : "vc11",
			CLIP_LONG    : "vc12",
			CLIP_LIVE    : "vc13",
	
			AD_PREROLL   : "va11",
			AD_MIDROLL   : "va12",
			AD_POSTROLL  : "va13",
			AD_LIVE      : "va21",
			AD_OTHER     : "va00"
		};
	})(BTG);
	/*
	* Beacon creates an image request
	* @class	BTG.Beacon
	*/
	(function(BTG){
		BTG.Beacon = {
			/* 
			* Assembles query string and http request
			* @member	BTG.Beacon			
			*/
			send : function(options){
				var	QUERY = '?',
					AMP = '&';
				if(options.url){
					var	str = BTG.String,
						fn  = typeof options.onload === 'function' ? options.onload : function(e){},
						src = options.url,
						key = '',
						joinBy = '',
						params;
	
					if(str.containsString(src, QUERY) && !str.endsWith(src, QUERY)){
						joinBy = AMP;
					}else if(!str.endsWith(src, QUERY)){
						joinBy = QUERY;
					}
	
					if(typeof options.params === 'object'){
						params = BTG.Object.toString(options.params);
					}else if(typeof options.params === 'string'){
						params = options.params;
					}
	
					if(params){
						src += joinBy + params;
					}
	
					if(typeof options.rndKey === 'string'){
						key = AMP + options.rndKey + '=' + Math.round(Math.random()*100000000000000000);
					}
	
					if(!isNaN(options.maxLength)){
						options.maxLength -= key.length;
						src = str.lengthLimiter(src, options.maxLength, AMP);
					}
	
					src += key;
	
					try{
						var image = new Image(0,0);
						image.src = src;
						image.onload = image.onabort = image.onerror = function(e){
							fn({
								src   : src,
								data  : params,
								event : e
							});
						};
					}catch(e){
					}
				}
			}
		};
	})(BTG);
	/**
	* Environment class to provide details on device and OS.
	* @class	Environment
	*/
	(function(BTG){
		BTG.Environment = new function(){
			var _ua_str 	= window.navigator.userAgent.replace(/\;|\(|\)|\,/gi,""),
				_isMobile 	= /iphone/i.test(_ua_str) || (/ipod/i.test(_ua_str)),
				_isTablet	= /ipad/i.test(_ua_str); 
			
			return {
				/**
				* Method to check if the device is mobile
				* @member	BTG.Environment			
				*/
				isMobile : function(){
					return _isMobile;
				},
				/**
				* Method to check if the device is tablet
				* @member	BTG.Environment			
				*/
				isTablet : function(){
					return _isTablet;
				}
			};
		}
	})(BTG);
	(function(BTG){
		BTG.JSInjector = {
			loadScript : function(src){
				try{
					var	head   = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
						script = document.createElement("script");
	
					script.type = "text/javascript";
					script.src  = location.protocol + src;
	
					head.appendChild(script);
	
				}catch(e){
				}
			}
		};
	})(BTG);
	(function(window){
		/**
		* Window message handler. Responds to postMessage requests.
		* @param	{Object} event Required
		* @returns	{Void}
		*/
		var onMessage = function(e){
			if(typeof e !== 'object' || !JSON)return;
			if(e.data){
				try{
					var	msgs  = BTG.MessageVars,
						event = BTG.Events,
						data  = JSON.parse(e.data);
					if(data.type){
						switch(data.type){
						case msgs.VMN_UUID:
							event.VMN_UUID.dispatch(data.value);
							break;
						case msgs.DEMDEX_SEGMENT:
							event.DEMDEX_SEGMENT.dispatch(data.value);
							break;
						case msgs.OMT_TRACKING_SERVER:
							event.OMT_TRACKING_SERVER.dispatch(data.value);
							break;
						case msgs.USER_SEGMENT:
							event.USER_SEGMENT.dispatch(data.value);
							break;						
						case msgs.OMT_VISITOR_ID:
							event.OMT_VISITOR_ID.dispatch(data.value);
							break;
						default:
							break;
						}
					}
				}catch(e){
				}
			}
		};
		if(typeof window.addEventListener !== 'undefined'){ 
			window.addEventListener('message', onMessage, false); 
		}else if(typeof window.attachEvent !== 'undefined'){ 
			window.attachEvent('onmessage', onMessage); 
		}
	})(window);
	(function(BTG){
		BTG.MessageUtil = (function(){
			var hasPostMessage = typeof parent === 'object' 
				&& typeof parent.postMessage === 'function' 
				&& parent !== self;
			return {
				postMessage : function(id, valueObj){
					if(hasPostMessage && id){
						var data = {type:id};
						if(typeof valueObj != "undefined"){
							data.value = valueObj;
						}
						data = JSON.stringify(data);
						parent.postMessage(data, "*");
					}
				}
			};
		})();
	})(BTG);
	/**
	* Utilites for Object manipulation
	* @class	Object
	*/
	(function(BTG){
		BTG.Object = {
			/**
			* Performs conversion of an Object to a string representation of objects properties
			* @member	BTG.Object
			* @param	{Object} data
			* @param	{String} delimiter
			* @returns	{String}	
			*/
			toString : function(data, delimiter){
				if(typeof data === 'object'){
					if(!delimiter){
						delimiter = '&';
					}
					var arr = [];
					for(var i in data){
						if(data.hasOwnProperty(i) && data[i]){
							arr.push(i + '=' + data[i]);
						}
					}
					arr.sort();
					return arr.join(delimiter);
				}
			},
			/**
			* Performs replacement of object properties
			* @member	BTG.Object
			* @param	{Object} data
			* @param	{Object} values
			* @param	{Function} test
			* @returns	{Object}
			*/
			replaceWith : function(data, values, test){
				test = typeof test === 'function' ? test : function(s){return true;};
				for(var i in values){
					if(values.hasOwnProperty(i) && data.hasOwnProperty(i) && test(data[i])){
						data[i] = values[i];
					}
				}
				return data;
			},
			/**
			* Determines Array type by inspecting the prototype call of a given object.
			* @member	BTG.Object
			* @param {Object} obj
			* @returns {Boolean}
			*/
			isArray : function(obj){
				return typeof obj === 'object' && Object.prototype.toString.call(obj) === '[object Array]';
			}
		};
	})(BTG);
	/**
	* String converts string to object
	* @class	String
	*/
	(function(BTG){
		BTG.String = {
			/**
			* Converts string into Object format using provided optional delimeter. For ex. String "a=1,b=2,c=3" will be converted to {a:1, b:2, c:3}
			* @param {String} String to be replaced Required
			* @param {String} char to be used as delimeter and default is "," Optional
			* @member	BTG.String			
			*/
			toObject : function(string, char){
				var	array  = string.split(char ? char : ','),
					size   = array.length,
					object = {};
				for(var x = 0; x < size; x++){
					var pairs = array[x].split('=');
					if(pairs[0] && pairs[1]){
						object[pairs[0]] = pairs[1];
					}
				}
				return object;
			},
			/**
			 * Checks the value is defined.
			 * @member 	Btg.String
			 * @param	{String} value Required. The string that is to be checked.
			 * @return 	{Boolean} True when defined and has value, False when value type is undefined or value is null or empty or undefined	 
			 */	
			isDefined: function(value){
				if(typeof value !== 'string' || typeof value==='undefined' || value===null || value==''){
					return false;
				}else{
					return true;
				}
			},
			/**
			* Replaces token(s) from the provided string with matching data key/value
			* @param {String} String that needs to have tokens replaced with actual values Required
			* @param {Object} Data object that holds key/value pair(s) used to replace tokens Required 
			* @member	BTG.String			
			*/
			replaceTokens:function(str,data){
				var tokens = str.match(/{\w+}/g);
				var size   = (tokens ? tokens.length : 0);
				for(var x=0; x<size; x++){
					var token = tokens[x];
					var key   = token.replace(/{|}/g,"");
					//var val   = key==='ord' ? btg.util.Number.random(999999) : data[key];
					var val   = key==='ord' ? Math.floor(Math.random()*Math.pow(10,("" + 999999).length)) % 999999: data[key];
					if(val)str=str.replace(token,val);
				}
				return str;
			},
			/**
			* Strips token (strings enclosed withing "{" and "}") from the provided string. For ex. String "test{token}string" will be converted to "teststring"
			* @param {String} String from which tokens to be stripped Required 
			* @member	BTG.String			
			*/
			stripToken : function(string){
			/*	if(string.search(/^{[\s\S]+}$/) > -1){
					string = string.replace(/^\{|\}$/g,'');
				}
				return string;*/
				return string.replace(/^\{|\}$/g,'');
			},
			/**
			* Limits the length of the string based on the value provided in the argument
			* @param {String} String which will be validated and limited to the specified length Required 
			* @param {Number} Numeric limit value which is used to limit the string length Required
			* @param {String} delimiter value to use as a smart cutting point in the passed string
			* @member	BTG.String			
			*/
			lengthLimiter : function(str, limit, delimiter){ //BTGREPGEN-2360
				if(str && !isNaN(limit) && str.length > limit){
					str = str.substring(0, limit);
					if(delimiter){
						var delimiterPos=str.lastIndexOf(delimiter);
						if(delimiterPos>0){
							str=str.substr(0,delimiterPos);
						}
					}
				}
				return str;
			},
			/**
			* Compares if a given string matches the last character
			* @param {String} String to compare
			* @param {String} String to compare
			* @returns	{Boolean}
			* @member	BTG.String			
			*/
			endsWith : function(str, suffix) {
	    		return str.indexOf(suffix, str.length - suffix.length) !== -1;
			},
			/**
			* Trims the given string with leading and trailing slashes 
			* @param {String} String to trim
			* @returns	String
			* @member	BTG.String			
			*/
			trimSlashes : function(str) {
				str = str.replace(/^\s*|\s*$/gi,'').replace(/^[\/\\]|[\/\\]$/gi,'');
				return str;
			},
			/**
			* Test if a given sub string is contained in the string via indexOf
			* @param {String} String to compare
			* @param {String} String to compare
			* @returns	{Boolean}
			* @member	BTG.String			
			*/
			containsString : function(str, contains){
				return str.indexOf(contains) !== -1;
			},
			/**
			* Returns the valueOf or toString depending on the type. Converts boolean to string.
			* @param {String} String to compare
			* @returns	String
			* @member	BTG.String			
			*/
			toString : function(str){
				var type = typeof str;
	
				if(type === "object" || type === "function"){
					return str.toString();
				}else if(type === "boolean"){
					return str ? "true" : "false";
				}else{
					return str ? str.valueOf() : "";
				}
			}
		};
	})(BTG);
	/**
	* Timer manages a collection of timers and reduces overhead in 
	* creating the global interval id necessary for setInterval method to run.
	* @class	Timer
	*/
	(function(BTG){
		BTG.Timer = function(id, millisec){
			var	instanceId   = id,
				milliseconds = !isNaN(millisec) ? millisec : 100,
				isRunning    = false,
				intervalId   = null,
				elapsedCount = 0,
				listeners    = [];
			return {
				/**
				* Method to be invoked whenever timer starts
				* @member	BTG.Timer			
				*/
				start : function(){
					if(!isRunning){
						isRunning  = true;
						intervalId = setInterval(instanceId + ".count()", milliseconds);
					}
				},
				/**
				* Method to be invoked whenever timer count starts
				* @member	BTG.Timer			
				*/
				count : function(){
					elapsedCount = elapsedCount + milliseconds;
					this.notify();
				},
				/**
				* Method to be invoked whenever timer stops
				* @member	BTG.Timer			
				*/
				stop : function(){
					clearInterval(intervalId);
					isRunning = false;
				},
				/**
				* Method to be invoked whenever timer resets
				* @member	BTG.Timer			
				*/
				reset : function(){
					if(isRunning){
						this.stop();
					}
					elapsedCount = 0;
				},
				/**
				* Method to be invoked whenever timer resets
				* @member	BTG.Timer			
				*/
				currentCount : function(){
					return elapsedCount;
				},
				/**
				* Method to be invoked to get the timer running status
				* @member	BTG.Timer			
				*/
				running : function(){
					return isRunning;
				},
				/**
				* Method to be invoked whenever adding the listener
				* @member	BTG.Timer			
				*/
				addListener : function(fn){
					elapsedCount = 0;
					if(typeof fn === 'function'){
						listeners.push(fn);
					}
				},
				/**
				* Method to be invoked whenever removing the listener
				* @member	BTG.Timer			
				*/
				removeListener : function(fn){
					if(typeof fn === 'function'){
						var size = listeners.length;
						for(var x=0; x < size; x++){
							if(listeners[x] === fn){
								listeners[x] = null;
							}
						}
					}
				},
				/**
				* Method to be invoked whenever timer is notified
				* @member	BTG.Timer			
				*/
				notify : function(){
					var size = listeners.length;
					if(size > 0){
						for(var x=0; x < size; x++){
							var fn = listeners[x];
							if(typeof fn === 'function'){
								fn(this);
							}
						}
					}
				}
			};
		};
	})(BTG);
	
	/**
	* TimerUtil manages a collection of timers and reduces overhead in 
	* creating the global interval id necessary for setInterval method to run.
	* @class	TimerUtil
	*/
	(function(BTG){
		BTG.TimerUtil = (function(){
			/**
			* Collection of Timer Objects
			* @private
			* @member	BTG.TimerUtil
			*/
			var	timers = {};
			return {
				/**
				* Creates, stores, and retrieves an instance of a Timer Object specified by its id.
				* @param	{String} id Required
				* @param	{Number} millisec Optional
				* @member	BTG.TimerUtil
				* @returns	{Object}
				*/
				getTimer : function(id, millisec){
					id = 'BTG.TimerUtil.getTimer("' + id + '")';
					if(!timers[id]){
						timers[id] = new BTG.Timer(id, millisec);
					}
					return timers[id];
				}
			};
		})();
	})(BTG);
	/**
	* UserSegments utility
	* @class	UserSegments
	*/
	(function(BTG){
		BTG.UserSegments = {
			/**
			* Formats and returns User Segment value.
			* @member	BTG.UserSegments
			* @param {String} userSegment Required
			* @returns {String} Formatted User Segment values
			*/
			getFormattedUserSegment:function(userSegment){
				var userSegmentArray = userSegment.split(','),
				userSegments = [],
				size = userSegmentArray.length;
				for(var i = 0; i < size; i++){
					if(userSegmentArray[i] != ""){
						userSegments.push("User Segment;" + userSegmentArray[i]);
					}
				}
				return userSegments.join(',');
			}
		};
	})(BTG);/* SiteCatalyst code version: H.25.5.
	Copyright 1996-2013 Adobe, Inc. All Rights Reserved
	More info available at http://www.omniture.com */
	
	/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
	var s_code='',s_objectID;function s_gi(un,pg,ss){var c="s.version='H.25.5';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\"
	+"\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}retur"
	+"n y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;ret"
	+"urn 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent("
	+"x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.su"
	+"bstring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+"
	+"','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00"
	+"'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unesc"
	+"ape(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r"
	+";z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring("
	+"0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf'"
	+",f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visi"
	+"bilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){whil"
	+"e(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\")"
	+";s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.li"
	+"nkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostnam"
	+"e,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'"
	+".','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<"
	+"0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-6"
	+"0);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':''"
	+");return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i"
	+";l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tc"
	+"f=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s"
	+".wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0"
	+";return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return "
	+"s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)fo"
	+"r(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackin"
	+"gServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase()"
	+";else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.t"
	+"cn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[u"
	+"n]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;retur"
	+"n ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[imn];if("
	+"!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nr"
	+"s){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'"
	+"].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||ta=='_parent'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=ne"
	+"w Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.s"
	+"ubstring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.len"
	+"gth>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\","
	+"j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&')"
	+";if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c."
	+"length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)i"
	+"f((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk"
	+".substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'"
	+"')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextDa"
	+"ta.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp="
	+"='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this"
	+",qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn="
	+"s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events"
	+"2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!="
	+"'linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';if(v.length>255){s.pageURLRest=v.substring(25"
	+"5);v=v.substring(0,255);}}else if(k=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q="
	+"'vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUT"
	+"O')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q="
	+"'vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else "
	+"if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct"
	+"';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0)"
	+";v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieve"
	+"LightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n"
	+";else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t."
	+"toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase()"
	+":'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.loca"
	+"tion.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.indexOf('#')!=0&&h.indexOf('about:')!=0&&h.indexOf('javascript:')!=0&&(lef"
	+"||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;if(b)r"
	+"eturn this[b](e);return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.bct.hre"
	+"f}s.bct=s.bce=s.bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else if(!s."
	+"useForcedLinkTracking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e.target"
	+";nrs=s.nrs;s.t();s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!=\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a.parentNode;if(a){h=a.href;"
	+"if(h.indexOf(\"#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&(!t||t==\"_self\"||t==\"_top\"||t==\"_parent\"||(s.wd.name&&t==s.wd.name"
	+"))){e.stopPropagation();if (e.stopImmediatePropagation) {e.stopImmediatePropagation();}e.preventDefault();n=s.d.createEvent(\"MouseEvents\");n.initMouseEvent(\"click\",e.bubbles,e.cancelable,e.view"
	+",e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget);n.s_fe=1;s.bct=e.target;s.bce=n}}}');s.oh=function(o){var s=this,l=s.wd.location,"
	+"h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.path"
	+"name.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o."
	+"scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase("
	+");else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('"
	+"javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.inn"
	+"erText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.su"
	+"bstring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=th"
	+"is.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1"
	+"));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.sq"
	+"u=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in"
	+" s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],"
	+"r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.i"
	+"ndexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&"
	+"&s.b.addEventListener){if(s.n&&s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false"
	+")}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900"
	+"?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t"
	+".indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountLis"
	+"t,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.ind"
	+"exOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+"
	+"un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m'"
	+";m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n"
	+"]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new "
	+"Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)))"
	+";x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d"
	+"=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf"
	+"('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}"
	+"}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s"
	+"=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){"
	+"if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)cle"
	+"arTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'"
	+"}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l"
	+"=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m"
	+"_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){"
	+"if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo"
	+"[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0"
	+";s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._"
	+"t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.gfid=function(){var s=this,d='0123456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,"
	+"e=new Date,y;if(!fid||fid.indexOf('-')<0){for(i=0;i<16;i++){j=Math.floor(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random()*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear()"
	+";e.setYear(y+2+(y<1900?1900:0));if(!s.c_w(k,fid,e))fid=0;return fid};s.applyADMS=function(){var s=this,vb=new Object;if(s.wd.ADMS&&!s.visitorID&&!s.admsc){if(!s.adms)s.adms=ADMS.getDefault();if(!s."
	+"admsq){s.visitorID=s.adms.getVisitorID(new Function('v','var s=s_c_il['+s._in+'],l=s.admsq,i;if(v==-1)v=0;if(v)s.visitorID=v;s.admsq=0;if(l){s.admsc=1;for(i=0;i<l.length;i++)s.t(l[i]);s.admsc=0;}')"
	+");if(!s.visitorID)s.admsq=new Array}if(s.admsq){s.vob(vb);vb['!visitorID']=0;s.admsq.push(vb);return 1}else{if(s.visitorID==-1)s.visitorID=0}}return 0};s.track=s.t=function(vo){var s=this,trk=1,tm="
	+"new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y"
	+"+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;"
	+"s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';i"
	+"f(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i"
	+"=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1.7';if(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';if(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width"
	+"+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>"
	+"=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s"
	+".b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.conne"
	+"ctionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVer"
	+"sion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}s.fid=s.gfid();if(s.applyADMS())return"
	+" '';if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);if(!s.abort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.re"
	+"ferrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.par"
	+"entElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o="
	+"0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t"
	+"=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.da"
	+"taset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-object-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+"
	+"o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while"
	+"(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt(oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}o"
	+"ce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+"
	+"s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt"
	+"?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}}else s.dl(vo);if(vo)s.v"
	+"oa(vb,1);s.abort=0;s.pageURLRest=s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.t"
	+"rackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType=t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds="
	+"ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.l"
	+"mq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Obj"
	+"ect.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if"
	+"(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=docum"
	+"ent;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVer"
	+"sion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac="
	+"(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s"
	+".ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s."
	+"sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,fid,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods"
	+",cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl"
	+"_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,chan"
	+"nel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n"
	+"<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,"
	+"browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disab"
	+"leBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQuerySt"
	+"ring,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.conte"
	+"xtData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
	w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,j,x,s;if(un){un=un.toLowerCase();if(l)for(j=0;j<2;j++)for(i=0;i<l.length;i++){s=l[i];x=s._c;if((!x||x=='s_c'||(j>0&&x=='s_l'))&&(s.oun==un||(s.fs&&s.sa&&s.fs(s.oun,un)))){if(s.sa)s.sa(un);if(x=='s_c')return s}else s=0}}w.s_an='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	w.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
	+"ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
	w.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
	w.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)");
	w.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
	+"=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
	+"x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
	w.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
	w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
	+"a");
	w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
	+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
	+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
	c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a<5||v.indexOf('Opera')>=0||u.indexOf('Opera')>=0)c=s_ft(c);if(!s){s=new Object;if(!w.s_c_in){w.s_c_il=new Array;w.s_c_in=0}s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;}s._c='s_c';(new Function("s","un","pg","ss",c))(s,un,pg,ss);return s}
	function s_giqf(){var w=window,q=w.s_giq,i,t,s;if(q)for(i=0;i<q.length;i++){t=q[i];s=s_gi(t.oun);s.sa(t.un);s.setTagContainer(t.tagContainerName)}w.s_giq=0}s_giqf()
	
	;/*
	 * Create an instance of Hcode
	 */
	s_code=s_gi("");
	
	/****************************** MODULES *****************************/
	/* Module: Media */
	
	s_code.loadModule("Media")
	s_code.Media.onLoad = function(s,m) {
		//[INSERT-MEDIA-MODULE-CONFIG-HERE]
	};
	s_code.m_Media_c="var m=s.m_i('Media');if(m.completeByCloseOffset==undefined)m.completeByCloseOffset=1;if(m.completeCloseOffsetThreshold==undefined)m.completeCloseOffsetThreshold=1;m.cn=function(n){var m="
	+"this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',x;n=m.cn(n);if(!l)l=-1;if(n&&p){if(!m.l)m.l=new Object;"
	+"if(m.l[n])m.close(n);if(b&&b.id)a=b.id;if(a)for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.o=0;i.x=0;i.p=m.cn(m.playerName?m.playerName:p);i.a=a;i.t=0;i.ts=0;i.s=Math.floor(tm"
	+".getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;i.tc=0;i.fel=new Object;i.vt=0;i.sn=0;i.sx=\"\";i.sl=0;i.sg=0;i.sc=0;i.us=0;i.ad=0;i.adpn;i.adpp;i.adppp;i.clk;i.CPM;i.co=0;i.cot=0;i.lm=0;i.l"
	+"om=0;m.l[n]=i}};m.openAd=function(n,l,p,pn,pp,ppp,CPM,b){var m=this,i=new Object;n=m.cn(n);m.open(n,l,p,b);i=m.l[n];if(i){i.ad=1;i.adpn=m.cn(pn);i.adpp=pp;i.adppp=ppp;i.CPM=CPM}};m._delete=function"
	+"(n){var m=this,i;n=m.cn(n);i=m.l[n];m.l[n]=0;if(i&&i.m)clearTimeout(i.m.i)};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o,sn,sx,sl){var m=this,i;i=m.e(n,1,o,sn,sx,sl);if(i&&!i.m){i.m=new "
	+"Object;i.m.m=new Function('var m=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.m.i=setTimeout(i.m.m,1000)}}');i.m.m()}};m.click=function(n,o"
	+"){this.e(n,7,o)};m.complete=function(n,o){this.e(n,5,o)};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){this.e(n,4,-1)};m.bcd=function(vo,i){var m=this,ns='a.media.',v=vo.linkTrackVars,e=v"
	+"o.linkTrackEvents,pe='m_i',pev3,c=vo.contextData,x;if(i.ad){ns+='ad.';if(i.adpn){c['a.media.name']=i.adpn;c[ns+'pod']=i.adpp;c[ns+'podPosition']=i.adppp;}if(!i.vt)c[ns+'CPM']=i.CPM;}if (i.clk) {c[n"
	+"s+'clicked']=true;i.clk=0}c['a.contentType']='video'+(i.ad?'Ad':'');c['a.media.channel']=m.channel;c[ns+'name']=i.n;c[ns+'playerName']=i.p;if(i.l>0)c[ns+'length']=i.l;if(Math.floor(i.ts)>0)c[ns+'ti"
	+"mePlayed']=Math.floor(i.ts);if(!i.vt){c[ns+'view']=true;pe='m_s';i.vt=1}if(i.sx){c[ns+'segmentNum']=i.sn;c[ns+'segment']=i.sx;if(i.sl>0)c[ns+'segmentLength']=i.sl;if(i.sc&&i.ts>0)c[ns+'segmentView'"
	+"]=true}if(!i.cot&&i.co){c[ns+\"complete\"]=true;i.cot=1}if(i.lm>0)c[ns+'milestone']=i.lm;if(i.lom>0)c[ns+'offsetMilestone']=i.lom;if(v)for(x in c)v+=',contextData.'+x;pev3=c['a.contentType'];vo.pe="
	+"pe;vo.pev3=pev3;var d=m.contextDataMapping,y,a,l,n;if(d){vo.events2='';if(v)v+=',events';for(x in d){if(x.substring(0,ns.length)==ns)y=x.substring(ns.length);else y=\"\";a=d[x];if(typeof(a)=='strin"
	+"g'){l=m.s.sp(a,',');for(n=0;n<l.length;n++){a=l[n];if(x==\"a.contentType\"){if(v)v+=','+a;vo[a]=c[x]}else if(y=='view'||y=='segmentView'||y=='clicked'||y=='complete'||y=='timePlayed'||y=='CPM'){if("
	+"e)e+=','+a;if(y=='timePlayed'||y=='CPM'){if(c[x])vo.events2+=(vo.events2?',':'')+a+'='+c[x];}else if(c[x])vo.events2+=(vo.events2?',':'')+a}else if(y=='segment'&&c[x+'Num']){if(v)v+=','+a;vo[a]=c[x"
	+"+'Num']+':'+c[x]}else{if(v)v+=','+a;vo[a]=c[x]}}}else if(y=='milestones'||y=='offsetMilestones'){x=x.substring(0,x.length-1);if(c[x]&&d[x+'s'][c[x]]){if(e)e+=','+d[x+'s'][c[x]];vo.events2+=(vo.even"
	+"ts2?',':'')+d[x+'s'][c[x]]}}if(c[x])c[x]=undefined;if(y=='segment'&&c[x+'Num'])c[x+\"Num\"]=undefined}}vo.linkTrackVars=v;vo.linkTrackEvents=e};m.bpe=function(vo,i,x,o){var m=this,pe='m_o',pev3,d='"
	+"--**--';pe='m_o';if(!i.vt){pe='m_s';i.vt=1}else if(x==4)pe='m_i';pev3=m.s.ape(i.n)+d+Math.floor(i.l>0?i.l:1)+d+m.s.ape(i.p)+d+Math.floor(i.t)+d+i.s+d+(i.to>=0?'L'+Math.floor(i.to):'')+i.e+(x!=0&&x!"
	+"=2?'L'+Math.floor(o):'');vo.pe=pe;vo.pev3=pev3};m.e=function(n,x,o,sn,sx,sl,pd){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),c,l,v=m.trackVars,e=m.trackEvents,ti=m.trackSeconds,tp=m.tr"
	+"ackMilestones,to=m.trackOffsetMilestones,sm=m.segmentByMilestones,so=m.segmentByOffsetMilestones,z=new Array,j,t=1,w=new Object,x,ek,tc,vo=new Object;if(!m.channel)m.channel=m.s.wd.location.hostnam"
	+"e;n=m.cn(n);i=n&&m.l&&m.l[n]?m.l[n]:0;if(i){if(i.ad){ti=m.adTrackSeconds;tp=m.adTrackMilestones;to=m.adTrackOffsetMilestones;sm=m.adSegmentByMilestones;so=m.adSegmentByOffsetMilestones}if(o<0){if(i"
	+".lx==1&&i.lt>0)o=(ts-i.lt)+i.lo;else o=i.lo}if(i.l>0)o=o<i.l?o:i.l;if(o<0)o=0;i.o=o;if(i.l>0){i.x=(i.o/i.l)*100;i.x=i.x>100?100:i.x}if(i.lo<0)i.lo=o;tc=i.tc;w.name=n;w.ad=i.ad;w.length=i.l;w.openTi"
	+"me=new Date;w.openTime.setTime(i.s*1000);w.offset=i.o;w.percent=i.x;w.playerName=i.p;if(i.to<0)w.mediaEvent=w.event='OPEN';else w.mediaEvent=w.event=(x==1?'PLAY':(x==2?'STOP':(x==3?'MONITOR':(x==4?"
	+"'TRACK':(x==5?'COMPLETE':(x==7?'CLICK':('CLOSE')))))));if(!pd){if(i.pd)pd=i.pd}else i.pd=pd;w.player=pd;if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {if(!sx){sn=i.sn;sx=i.sx;sl=i.sl}if(x){if(x==1)i.lo=o;if("
	+"(x<=3||x>=5)&&i.to>=0){t=0;v=e=\"None\";if(i.to!=o){l=i.to;if(l>o){l=i.lo;if(l>o)l=o}z=tp?m.s.sp(tp,','):0;if(i.l>0&&z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&(l/i.l)*100<c"
	+"&&i.x>=c){t=1;j=z.length;w.mediaEvent=w.event='MILESTONE';i.lm=w.milestone=c}}z=to?m.s.sp(to,','):0;if(z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&l<c&&o>=c){t=1;j=z.length;w"
	+".mediaEvent=w.event='OFFSET_MILESTONE';i.lom=w.offsetMilestone=c}}}}if(i.sg||!sx){if(sm&&tp&&i.l>0){z=m.s.sp(tp,',');if(z){z[z.length]='100';l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0"
	+";if(c){if(i.x<c){sn=j+1;sx='M:'+l+'-'+c;j=z.length}l=c}}}}else if(so&&to){z=m.s.sp(to,',');if(z){z[z.length]=''+(i.l>0?i.l:'E');l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c||z[j]=="
	+"'E'){if(o<c||z[j]=='E'){sn=j+1;sx='O:'+l+'-'+c;j=z.length}l=c}}}}if(sx)i.sg=1}if((sx||i.sx)&&sx!=i.sx){i.us=1;if(!i.sx){i.sn=sn;i.sx=sx}if(i.to>=0)t=1}if((x>=2||i.x>=100)&&i.lo<o){i.t+=o-i.lo;i.ts+"
	+"=o-i.lo}if(x<=2||(x==3&&!i.lx)){i.e+=(x==1||x==3?'S':'E')+Math.floor(o);i.lx=(x==3?1:x)}if(!t&&i.to>=0&&x<=3){ti=ti?ti:0;if(ti&&i.ts>=ti){t=1;w.mediaEvent=w.event='SECONDS'}}i.lt=ts;i.lo=o}if(!x||("
	+"x<=3&&i.x>=100)){if(i.lx!=2)i.e+='E'+Math.floor(o);x=0;v=e=\"None\";w.mediaEvent=w.event=\"CLOSE\"}if(x==7){w.clicked=i.clk=1;t=1}if(x==5||(m.completeByCloseOffset&&(!x||i.x>=100)&&i.l>0&&o>=i.l-m."
	+"completeCloseOffsetThreshold)){w.complete=i.co=1;t=1}ek=w.mediaEvent;if(ek=='MILESTONE')ek+='_'+w.milestone;else if(ek=='OFFSET_MILESTONE')ek+='_'+w.offsetMilestone;if(!i.fel[ek]) {w.eventFirstTime"
	+"=true;i.fel[ek]=1}else w.eventFirstTime=false;w.timePlayed=i.t;w.segmentNum=i.sn;w.segment=i.sx;w.segmentLength=i.sl;if(m.monitor&&x!=4)m.monitor(m.s,w);if(x==0)m._delete(n);if(t&&i.tc==tc){vo=new "
	+"Object;vo.contextData=new Object;vo.linkTrackVars=v;vo.linkTrackEvents=e;if(!vo.linkTrackVars)vo.linkTrackVars='';if(!vo.linkTrackEvents)vo.linkTrackEvents='';if(m.trackUsingContextData)m.bcd(vo,i)"
	+";else m.bpe(vo,i,x,o);m.s.t(vo);if(i.us){i.sn=sn;i.sx=sx;i.sc=1;i.us=0}else if(i.ts>0)i.sc=0;i.e=\"\";i.lm=i.lom=0;i.ts-=Math.floor(i.ts);i.to=o;i.tc++}}}return i};m.ae=function(n,l,p,x,o,sn,sx,sl,"
	+"pd,b){var m=this,r=0;if(n&&(!m.autoTrackMediaLengthRequired||(length&&length>0)) &&p){if(!m.l||!m.l[n]){if(x==1||x==3){m.open(n,l,p,b);r=1}}else r=1;if(r)m.e(n,x,o,sn,sx,sl,pd)}};m.a=function(o,t){"
	+"var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,xc=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',f7"
	+"='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=new"
	+" Function('o','var e,p=0;try{if(o.versionInfo&&o.currentMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catch("
	+"e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){p="
	+"'Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n==8"
	+")x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x."
	+"type='text/javascript';x.htmlFor=i;x.event='PlayStateChange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p=="
	+"2){p='QuickTime Player '+(o.GetIsQuickTimeRegistered()?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTime"
	+"Scale();l=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,0,\"\",0,0,o);m.ae(mn,l,\"'+p+'\",x,x"
	+"!=2?p:-1,0,\"\",0,0,o)}if(n>0&&o.'+f7+'>=10){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c"
	+");o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='RealPlayer '+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetL"
	+"ength()/1000;p=o.GetPosition()/1000;if(n!=o.'+f4+'){if(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n==3&&(o.'+f7+'>=10|"
	+"|!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new"
	+" Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)\",o.'+f3+'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack"
	+"&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTagName(m.s.isie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd."
	+"addEventListener)s.wd.addEventListener('load',m.as,false);if(m.onLoad)m.onLoad(s,m)";
	
	s_code.m_i("Media");(function(BTG){
		BTG.AppMeasureMapper = function(data, settings){
			/**
			* Object to get the video data 
			* @private
			* @member	BTG.AppMeasureMapper
			*/
			var	videodata = data,
			/**
			* Object to get the config object 
			* @private
			* @member	BTG.AppMeasureMapper
			*/
				config = settings,
			/**
			* Array to hold the trackign vars 
			* @private
			* @member	BTG.AppMeasureMapper
			*/
				trackVars = [],
			/**
			* method to handle unique values to array to tracking vars
			* @private
			* @member	BTG.AppMeasureMapper
			*/
				addTrackVar = function(key){
					if(!trackVars[key]){
						trackVars.push(key);
					}
				},
			/**
			* Method to do token replacement from the custom fields with the data in the video data array, if no token is found (in the case of just a string) the string is returned as is 
			* @member	BTG.AppMeasureMapper
			* @param	{String} str the token to be replaced
			* @returns	{String} the string value
			*/
				getTokenValue = function(str){
					var key = str.replace(/\{|\}|^\s|\s$/g, "");
					if(videodata.hasOwnProperty(key) && videodata[key]){
						return videodata[key];
					}else{
						return str.search(/^{[\s\S]+}$/) ? str : "";
					}
				};
			return {
				/**
				* Method to return an object with all the values mapped, it includes the default fields, then custom and overrides 
				* @member	BTG.AppMeasureMapper
				* @returns	{Object} mapped - the mapped object 
				*/
				getMappedObject : function(doCustomFields){
					doCustomFields = doCustomFields === true;
					var	mapped = {},
						defaultFields = BTG.AppMeasureVars.DEFAULT_VARS;
	
					//Map Default fields: {eVar26:"franchise"}
					for(var key in defaultFields){
						if(defaultFields.hasOwnProperty(key)){
							var map = defaultFields[key];
							if(videodata.hasOwnProperty(map) && videodata[map]){
								mapped[key] = BTG.String.stripToken(videodata[map]);
								addTrackVar(key);
							}
						}
					}
					if(doCustomFields && typeof config.omnitureCustomFields === 'object' 
						&& typeof config.omnitureCustomFields.getItems === 'function'){
						var	customFields = config.omnitureCustomFields.getItems();
						for(var x = 0, size = customFields.length; x < size; x++){
							var item = customFields[x];
							var name = item.name;
							var value = item.value;
							var result = "";
							if(value.indexOf('+') > -1){
								var fields = value.split('+');
								for(var y = 0, len = fields.length; y < len; y++){
									result += getTokenValue(fields[y]);
								}
							}else{
								result = getTokenValue(value);
							}
							if(result){
								if(!mapped.hasOwnProperty(name)){
									mapped[name] = result;
									addTrackVar(name);
								}else if(item.override){
									mapped[name] = result;
									addTrackVar(name);
								}
							}
						}
					}
	
					mapped.trackVars = trackVars.join(',');
					trackVars = [];
	
					return mapped;
				}
			};
		}
	})(BTG);
	(function(){var O="SDK_"+"5.12.0-r10386-201401200634".replace(/[^\w]/g,"_"),t="undefined"!=typeof window?window:"undefined"!=typeof GLOBAL?GLOBAL:this;t.tv=t.tv||{};t.tv.freewheel=t.tv.freewheel||{};t.tv.freewheel[O]=function(t){var a={version:"js-5.12.0-r10386-201401200634"};if("undefined"!==typeof window)window._fw_admanager=window._fw_admanager||{},window._fw_admanager.version=a.version;a.LOG_LEVEL_QUIET=0;a.LOG_LEVEL_INFO=1;a.LOG_LEVEL_DEBUG=2;a.setLogLevel=function(b){"undefined"!==typeof console&&
	b>a.LOG_LEVEL_QUIET?(a.log=function(){console.log(">FW "+(new Date).toTimeString().substr(3,6)+Array.prototype.slice.call(arguments).join(" "))},a.warn=function(){console.warn(">FW "+(new Date).toTimeString().substr(3,6)+Array.prototype.slice.call(arguments).join(" "))},a.debug=b>a.LOG_LEVEL_INFO?function(){console.log(">FW "+(new Date).toTimeString().substr(3,6)+Array.prototype.slice.call(arguments).join(" "))}:function(){}):a.warn=a.log=a.debug=function(){}};a.setLogLevel(a.LOG_LEVEL_INFO);a.log("FreeWheel Integration Runtime",
	a.version);(function(){var b=navigator.userAgent.toLowerCase();a.PLATFORM_IS_WINDOWSPHONE=-1<b.search("windows phone os");a.PLATFORM_IS_IPAD=-1<b.search("ipad");a.PLATFORM_IS_IPHONE_IPOD=-1<b.search("iphone")||-1<b.search("ipod");a.PLATFORM_IE_MOBILE_VERSION=function(){var a=b.search(/iemobile\/\d\.\d/);if(-1<a){var d=b.substr(a+9,1),a=b.substr(a+11,1);return 1*d+0.1*a}return 0}();a.PLATFORM_IOS_VERSION=function(){var a=b.search(/os \d_\d/);if(-1<a){var d=b.substr(a+3,1),a=b.substr(a+5,1);return 1*
	d+0.1*a}return 0}();a.PLATFORM_ANDROID_VERSION=function(){var a=b.search(/android \d\.\d/);if(-1<a){var d=b.substr(a+8,1),a=b.substr(a+10,1);return 1*d+0.1*a}return-1<b.indexOf("transformer")?3.2:0}();a.PLATFORM_IS_SAFARI=0<a.PLATFORM_IOS_VERSION&&-1<b.search("applewebkit")||0===a.PLATFORM_ANDROID_VERSION&&0>b.search("chrome")&&-1<b.search("safari");a.PLATFORM_IS_MOBILE=0<a.PLATFORM_IOS_VERSION||0<a.PLATFORM_ANDROID_VERSION;a.PLATFORM_ID=a.PLATFORM_IS_MOBILE?0<a.PLATFORM_ANDROID_VERSION?"Android"+
	a.PLATFORM_ANDROID_VERSION:a.PLATFORM_IS_IPAD?"iPad"+a.PLATFORM_IOS_VERSION:a.PLATFORM_IS_IPHONE_IPOD?"iPhone"+a.PLATFORM_IOS_VERSION:"UnknownMobile":"Desktop";a.log("Device:",a.PLATFORM_ID,"PLATFORM_IS_SAFARI:",a.PLATFORM_IS_SAFARI)})();a.PLATFORM_EVENT_CLICK=a.PLATFORM_IS_MOBILE?"touchend":"click";a.MOBILE_EVENT_DRAG="touchmove";a.PLATFORM_SEND_REQUEST_BY_FORM=!1;a.PLATFORM_HIDE_AND_SHOW_CONTENT_VIDEO_BY_MOVE_POSITION=3.1<=a.PLATFORM_ANDROID_VERSION;a.PLATFORM_HIDE_AND_SHOW_CONTENT_VIDEO_BY_SET_DISPLAY=
	!0;a.PLATFORM_SUPPORT_PLAY_MIDROLL_BY_CURRENT_VIDEO_ELEMENT=a.PLATFORM_IS_IPAD||a.PLATFORM_IS_IPHONE_IPOD;a.PLATFORM_AUTO_SEEK_AFTER_MIDROLL=a.PLATFORM_IS_IPAD;a.PLATFORM_NOT_SUPPORT_OVERLAY_AD=a.PLATFORM_IS_IPHONE_IPOD||0<a.PLATFORM_ANDROID_VERSION&&3.1>a.PLATFORM_ANDROID_VERSION||a.PLATFORM_IS_WINDOWSPHONE;a.PLATFORM_FILL_VIDEO_POOL_FOR_MIDROLL=4.2<=a.PLATFORM_IOS_VERSION;a.PLATFORM_NOT_SUPPORT_MIDROLL_AD=2.2<=a.PLATFORM_ANDROID_VERSION&&3>=a.PLATFORM_ANDROID_VERSION||9<=a.PLATFORM_IE_MOBILE_VERSION;
	a.PLATFORM_NOT_SUPPORT_VIDEO_AD=0<a.PLATFORM_ANDROID_VERSION&&2.1>=a.PLATFORM_ANDROID_VERSION;a.PLATFORM_DETECT_FULL_SCREEN_FOR_MIDROLL=a.PLATFORM_IS_IPAD&&4.2<=a.PLATFORM_IOS_VERSION;a.PLATFORM_NOT_SUPPORT_CLICK_FOR_VIDEO=a.PLATFORM_IS_IPHONE_IPOD||a.PLATFORM_IS_WINDOWSPHONE;a.PLATFORM_NOT_FIRE_CLICK_WHEN_AD_VIDEO_PAUSED=3.1<=a.PLATFORM_ANDROID_VERSION;a.PLATFORM_WAIT_WHEN_AD_VIDEO_TIMEOUT=0<a.PLATFORM_ANDROID_VERSION&&3>=a.PLATFORM_ANDROID_VERSION;a.PLATFORM_VIDEO_DOESNOT_SUPPORT_TIMEUPDATE=9<=
	a.PLATFORM_IE_MOBILE_VERSION;a.PLATFORM_PLAY_DUMMY_VIDEO_FOR_PREROLL=0<a.PLATFORM_IOS_VERSION&&4.2>a.PLATFORM_IOS_VERSION&&4<=a.PLATFORM_IOS_VERSION;a.PLATFORM_NOT_WAIT_FOR_ERROR_WHEN_PLAY_DUMMY_VIDEO_FOR_PREROLL=!1;a.PLATFORM_SUPPORT_VIDEO_START_DETECT_TIMEOUT=0===a.PLATFORM_IOS_VERSION||4<=a.PLATFORM_IOS_VERSION&&4.2>a.PLATFORM_IOS_VERSION;a.PLATFORM_NOT_SUPPORT_OVERLAY_CLICK_WHEN_CONTROLS_IS_TRUE=a.PLATFORM_IS_IPAD;a.RENDERER_STATE_INIT=1;a.RENDERER_STATE_STARTING=2;a.RENDERER_STATE_STARTED=3;
	a.RENDERER_STATE_COMPLETING=4;a.RENDERER_STATE_COMPLETED=5;a.RENDERER_STATE_FAILED=6;a.TRANSLATOR_STATE_INIT=a.RENDERER_STATE_INIT;a.TRANSLATOR_STATE_STARTING=a.RENDERER_STATE_STARTING;a.TRANSLATOR_STATE_STARTED=a.RENDERER_STATE_STARTED;a.TRANSLATOR_STATE_COMPLETING=a.RENDERER_STATE_COMPLETING;a.TRANSLATOR_STATE_COMPLETED=a.RENDERER_STATE_COMPLETED;a.TRANSLATOR_STATE_FAILED=a.RENDERER_STATE_FAILED;a.EVENT_AD="adEvent";a.EVENT_SLOT_IMPRESSION="slotImpression";a.EVENT_SLOT_END="slotEnd";a.EVENT_AD_IMPRESSION=
	"defaultImpression";a.EVENT_AD_IMPRESSION_END="adEnd";a.EVENT_AD_QUARTILE="quartile";a.EVENT_AD_FIRST_QUARTILE="firstQuartile";a.EVENT_AD_MIDPOINT="midPoint";a.EVENT_AD_THIRD_QUARTILE="thirdQuartile";a.EVENT_AD_COMPLETE="complete";a.EVENT_AD_CLICK="defaultClick";a.EVENT_AD_MUTE="_mute";a.EVENT_AD_UNMUTE="_un-mute";a.EVENT_AD_COLLAPSE="_collapse";a.EVENT_AD_EXPAND="_expand";a.EVENT_AD_PAUSE="_pause";a.EVENT_AD_RESUME="_resume";a.EVENT_AD_REWIND="_rewind";a.EVENT_AD_ACCEPT_INVITATION="_accept-invitation";
	a.EVENT_AD_CLOSE="_close";a.EVENT_AD_MINIMIZE="_minimize";a.EVENT_ERROR="_e_unknown";a.EVENT_RESELLER_NO_AD="resellerNoAd";a.INFO_KEY_CUSTOM_ID="customId";a.INFO_KEY_MODULE_TYPE="moduleType";a.MODULE_TYPE_EXTENSION="extension";a.MODULE_TYPE_RENDERER="renderer";a.MODULE_TYPE_TRANSLATOR="translator";a.INFO_KEY_ERROR_CODE="errorCode";a.INFO_KEY_ERROR_INFO="errorInfo";a.INFO_KEY_ERROR_MODULE="errorModule";a.ERROR_IO="_e_io";a.ERROR_TIMEOUT="_e_timeout";a.ERROR_NULL_ASSET="_e_null-asset";a.ERROR_ADINSTANCE_UNAVAILABLE=
	"_e_adinst-unavail";a.ERROR_UNKNOWN="_e_unknown";a.ERROR_MISSING_PARAMETER="_e_missing-param";a.ERROR_NO_AD_AVAILABLE="_e_no-ad";a.ERROR_PARSE="_e_parse";a.ERROR_INVALID_VALUE="_e_invalid-value";a.ERROR_INVALID_SLOT="_e_invalid-slot";a.ERROR_NO_RENDERER="_e_no-renderer";a.ERROR_DEVICE_LIMIT="_e_device-limit";a.ERROR_3P_COMPONENT="_e_3p-comp";a.ERROR_UNSUPPORTED_3P_FEATURE="_e_unsupp-3p-feature";a.ERROR_SECURITY="_e_security";a.ERROR_UNMATCHED_SLOT_SIZE="_e_slot-size-unmatch";a.INFO_KEY_URL="url";
	a.INFO_KEY_SHOW_BROWSER="showBrowser";a.INFO_KEY_CUSTOM_EVENT_NAME="customEventName";a.INFO_KEY_NEED_EMPTY_CT="needEmptyCT";a.EVENT_TYPE_CLICK_TRACKING="CLICKTRACKING";a.EVENT_TYPE_IMPRESSION="IMPRESSION";a.EVENT_TYPE_CLICK="CLICK";a.EVENT_TYPE_STANDARD="STANDARD";a.EVENT_TYPE_GENERIC="GENERIC";a.EVENT_TYPE_ERROR="ERROR";a.EVENT_VIDEO_VIEW="videoView";a.SHORT_EVENT_TYPE_IMPRESSION="i";a.SHORT_EVENT_TYPE_CLICK="c";a.SHORT_EVENT_TYPE_STANDARD="s";a.SHORT_EVENT_TYPE_ERROR="e";a.INIT_VALUE_ZERO="0";a.INIT_VALUE_ONE=
	"1";a.INIT_VALUE_TWO="2";a.INFO_KEY_PARAMETERS="parameters";a.URL_PARAMETER_KEY_ET="et";a.URL_PARAMETER_KEY_CN="cn";a.URL_PARAMETER_KEY_INIT="init";a.URL_PARAMETER_KEY_CT="ct";a.URL_PARAMETER_KEY_METR="metr";a.URL_PARAMETER_KEY_CR="cr";a.URL_PARAMETER_KEY_KEY_VALUE="kv";a.URL_PARAMETER_KEY_ERROR_INFO="additional";a.URL_PARAMETER_KEY_ERROR_MODULE="renderer";a.URL_PARAMETER_KEY_CREATIVE_RENDITION_ID="reid";a.CAPABILITY_SLOT_TEMPLATE="sltp";a.CAPABILITY_MULTIPLE_CREATIVE_RENDITIONS="emcr";a.CAPABILITY_RECORD_VIDEO_VIEW=
	"exvt";a.CAPABILITY_CHECK_COMPANION="cmpn";a.CAPABILITY_CHECK_TARGETING="targ";a.CAPABILITY_FALLBACK_UNKNOWN_ASSET="unka";a.CAPABILITY_FALLBACK_UNKNOWN_SITE_SECTION="unks";a.CAPABILITY_FALLBACK_ADS="fbad";a.CAPABILITY_SLOT_CALLBACK="slcb";a.CAPABILITY_NULL_CREATIVE="nucr";a.CAPABILITY_AUTO_EVENT_TRACKING="aeti";a.CAPABILITY_RENDERER_MANIFEST="rema";a.CAPABILITY_REQUIRE_VIDEO_CALLBACK="vicb";a.CAPABILITY_SKIP_AD_SELECTION="skas";a.SLOT_TYPE_TEMPORAL="temporal";a.SLOT_TYPE_VIDEOPLAYER_NONTEMPORAL="videoPlayerNonTemporal";
	a.SLOT_TYPE_SITESECTION_NONTEMPORAL="siteSectionNonTemporal";a.TIME_POSITION_CLASS_PREROLL="PREROLL";a.TIME_POSITION_CLASS_MIDROLL="MIDROLL";a.TIME_POSITION_CLASS_POSTROLL="POSTROLL";a.TIME_POSITION_CLASS_OVERLAY="OVERLAY";a.TIME_POSITION_CLASS_DISPLAY="DISPLAY";a.TIME_POSITION_CLASS_PAUSE_MIDROLL="PAUSE_MIDROLL";a.EVENT_REQUEST_COMPLETE="onRequestComplete";a.EVENT_SLOT_STARTED="onSlotStarted";a.EVENT_SLOT_ENDED="onSlotEnded";a.EVENT_CONTENT_VIDEO_PAUSE_REQUEST="contentVideoPauseRequest";a.EVENT_CONTENT_VIDEO_RESUME_REQUEST=
	"contentVideoResumeRequest";a.CAPABILITY_STATUS_OFF=0;a.CAPABILITY_STATUS_ON=1;a.PARAMETER_LEVEL_PROFILE=0;a.PARAMETER_LEVEL_GLOBAL=1;a.PARAMETER_LEVEL_OVERRIDE=5;a.PARAMETER_ENABLE_FORM_TRANSPORT="sdk.enableFormTransport";a.PARAMETER_DESIRED_BITRATE="desiredBitrate";a.PARAMETER_VIDEO_POOL_SIZE="sdk.videoPoolSize";a.PARAMETER_PLAY_MIDROLL_BY_CURRENT_VIDEO_ELEMENT="PARAMETER_PLAY_MIDROLL_BY_CURRENT_VIDEO_ELEMENT";a.PARAMETER_EXTENSION_AD_CONTROL_CLICK_ELEMENT="extension.ad.control.clickElement";a.PARAMETER_EXTENSION_CONTENT_VIDEO_ENABLED=
	"extension.contentVideo.enabled";a.PARAMETER_EXTENSION_CONTENT_VIDEO_RESPOND_PAUSE_RESUME="extension.contentVideo.respondPauseResume";a.PARAMETER_EXTENSION_CONTENT_VIDEO_AUTO_SEEK_BACK="extension.contentVideo.autoSeekBack";a.PARAMETER_EXTENSION_CONTENT_VIDEO_AUTO_SOURCE_RESTORE="extension.contentVideo.autoSourceRestore";a.PARAMETER_EXTENSION_VIDEO_STATE_ENABLED="extension.videoState.enabled";a.PARAMETER_RENDERER_VIDEO_START_DETECT_TIMEOUT="renderer.video.startDetectTimeout";a.PARAMETER_RENDERER_VIDEO_PROGRESS_DETECT_TIMEOUT=
	"renderer.video.progressDetectTimeout";a.PARAMETER_RENDERER_VIDEO_ANDROID_DELAY="renderer.video.android.delay";a.PARAMETER_RENDERER_VIDEO_DISPLAY_CONTROLS_WHEN_PAUSE="renderer.video.displayControlsWhenPause";a.PARAMETER_RENDERER_VIDEO_CLICK_DETECTION="renderer.video.clickDetection";a.PARAMETER_RENDERER_VIDEO_PLAY_AFTER_STALLED="renderer.video.playAfterStalled";a.PARAMETER_EXTENSION_SURVEY_ENABLED="extension.survey.enabled";a.PARAMETER_RENDERER_HTML_COAD_SCRIPT_NAME="renderer.html.coadScriptName";
	a.PARAMETER_RENDERER_HTML_SHOULD_BACKGROUND_TRANSPARENT="renderer.html.isBackgroundTransparent";a.PARAMETER_RENDERER_HTML_SHOULD_END_AFTER_DURATION="renderer.html.shouldEndAfterDuration";a.PARAMETER_RENDERER_HTML_AD_LOAD_TIMEOUT="renderer.html.adLoadTimeout";a.PARAMETER_RENDERER_HTML_PLACEMENT_TYPE="renderer.html.placementType";a.PARAMETER_RENDERER_HTML_BOOTSTRAP="renderer.html.bootstrap";a.PARAMETER_RENDERER_HTML_PRIMARY_ANCHOR="renderer.html.primaryAnchor";a.PARAMETER_RENDERER_HTML_MARGIN_WIDTH=
	"renderer.html.marginWidth";a.PARAMETER_RENDERER_HTML_MARGIN_HEIGHT="renderer.html.marginHeight";a.PARAMETER_VPAID_CREATIVE_TIMEOUT_DELAY="renderer.vpaid.creativeTimeoutDelay";a.PARAMETER_RENDERER_HTML_PLACEMENT_TYPE_INLINE="inline";a.PARAMETER_RENDERER_HTML_PLACEMENT_TYPE_INTERSTITIAL="interstitial";a.PARAMETER_RENDERER_HTML_BASEUNIT_INTERSTITIAL="app-interstitial";a.ID_TYPE_FW=1;a.ID_TYPE_CUSTOM=2;a.ID_TYPE_GROUP=3;a.VIDEO_STATE_PLAYING=1;a.VIDEO_STATE_PAUSED=2;a.VIDEO_STATE_STOPPED=3;a.VIDEO_STATE_COMPLETED=
	4;a.VIDEO_ASSET_AUTO_PLAY_TYPE_ATTENDED=1;a.VIDEO_ASSET_AUTO_PLAY_TYPE_UNATTENDED=2;a.VIDEO_ASSET_AUTO_PLAY_TYPE_NONE=3;a.VIDEO_ASSET_AUTO_PLAY_TYPE_NON_AUTO_PLAY=3;a.ADUNIT_PREROLL="preroll";a.ADUNIT_MIDROLL="midroll";a.ADUNIT_POSTROLL="postroll";a.ADUNIT_OVERLAY="overlay";a.Util={canPlayVideoType:function(b){if(a.PLATFORM_IS_SAFARI&&("video/ogg"==b||"video/webm"==b))return!1;if(1<a.PLATFORM_ANDROID_VERSION&&"video/m4v"==b)return!0;var c=document.createElement("video");return!c.canPlayType?!1:!(!c.canPlayType(b)&&
	!c.canPlayType(b.replace("/","/x-")))},str2bool:function(b){if(!b)return!1;b=a.Util.trim(b).toLowerCase();return"true"==b||"yes"==b||"on"==b||"1"==b},trim:function(a){return"string"!=typeof a?a.toString():a.replace(/^\s+|\s+$/g,"")},isBlank:function(b){return!b||""===a.Util.trim(b)},encodeToHex:function(a){for(var c="",d=0;d<a.length;d++){for(var f=a.charCodeAt(d).toString(16).toUpperCase();4>f.length;)f="0"+f;c+="\\u"+f.toUpperCase()}return c},forEachOnArray:function(a,c,d){var f;if(null==a)throw new TypeError(" array is null or not defined");
	var a=Object(a),g=a.length>>>0;if("[object Function]"!={}.toString.call(c))throw new TypeError(c+" is not a function");d&&(f=d);for(d=0;d<g;){var h;d in a&&(h=a[d],c.call(f,h,d,a));d++}},mixin:function(a,c){var d={},f;for(f in c)if("undefined"==typeof d[f]||d[f]!=c[f])a[f]=c[f];return a},copy:function(b){return a.Util.mixin({},b)},bind:function(a,c){var d=Array.prototype.slice.call(arguments);d.shift();c=d.shift();return function(){return c.apply(a,d.concat(Array.prototype.slice.call(arguments)))}},
	getObject:function(a,c,d){if(!a)return null;for(var a=a.split("."),c=c||window,f=0,g;c&&(g=a[f]);f++)c=g in c?c[g]:d?c[g]={}:void 0;return c},buildNode:function(b,c,d,f,g){a.debug("Util.buildNode");d||(d=document);var h=null!=navigator.userAgent.match(/Firefox/);b.innerHTML=c||"";for(var b=b.getElementsByTagName("script"),j=d.getElementsByTagName("head")[0],c=0;c<b.length;++c)if(h||b[c].src){var k=d.createElement("script");if(b[c].charset)k.charset=b[c].charset;if(b[c].src)k.src=b[c].src;if(b[c].innerHTML)k.innerHTML=
	b[c].innerHTML;k.onload=k.onreadystatechange=function(){(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState)&&j.removeChild(k)};try{j.appendChild(k)}catch(l){a.warn("load script err: "+l)}}else k=b[c].innerHTML,f&&(k=k.replace(/var fw_scope = document;/,"var fw_scope="+f+";")),g&&(k=k.replace(/var fw_scope_window = window;/,"var fw_scope_window="+g+";")),eval(k)},replacePageSlot:function(b,c,d){a.debug("Util.replacePageSlot("+Array.prototype.slice.call(arguments).join(",")+")");
	var f,g,h;try{f=document.getElementById(b)?document:parent.document.getElementById(b)?parent.document:null,g=document.getElementById(b)?"window":parent.document.getElementById(b)?"parent":null}catch(j){g=f=null}if(!f)for(var k=0;k<window.frames.length;k++)try{if(window.frames[k].document.getElementById(b))f=window.frames[k].document,g="window.frames["+k+"]"}catch(l){a.warn(l)}g&&(h=g+".document");a.log("replacing slot "+b+" in frame "+h);if(!f)throw"Slot element not found: "+b;k=d?f.getElementById(d):
	f.getElementById("_fw_container_"+b);a.Util.buildNode(k,c,f,h,g)},pingURLWithImage:function(a){(new Image(1,1)).src=a},pingURLWithForm:function(a,c,d){d=d?"_fw_request":"_fw_cb";null==c&&(c=Math.random());var f=document.createElement("iframe");f.name=d+"_iframe_"+c;f.id=d+"_iframe_"+c;f.style.position="absolute";f.style.left="-10000px";f.style.width="1px";f.style.visibility="hidden";var g=document.createElement("form");g.action=a;g.id=d+"_form_"+c;g.target=f.id;g.method="post";g.style.position="absolute";
	g.style.left="-10000px";g.style.width="1px";g.style.visibility="hidden";document.body&&(document.body.appendChild(f),document.body.appendChild(g),g.submit(),document.body.removeChild(g))},pingURLWithScript:function(a){var c=document.getElementsByTagName("head")[0],d=document.createElement("script");d.src=a;d.onload=d.onreadystatechange=function(){(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState)&&c.removeChild(d)};c.appendChild(d)},pingURL:function(b){a.debug("send callback: "+
	b);b&&(a.PLATFORM_SEND_REQUEST_BY_FORM?a.Util.pingURLWithForm(b,null,!1):a.Util.pingURLWithImage(b))},pingURLs:function(b){for(var c=0;c<b.length;c++)a.Util.pingURL(b[c])},setParameterInURL:function(a,c,d){if(!a||!c||null==d)return null;var f=!1,g,a=a.split("?"),h,d=encodeURIComponent(d);if(a[1]){h=a[1].split("&");for(var j=0;j<h.length;++j)if(g=h[j].split("="),g[0]==c){h[j]=g[0]+"="+d;f=!0;break}g=h.join("&");f||(g=c+"="+d+"&"+g)}else g=c+"="+d;return g=a[0]+"?"+g},getParameterInURL:function(b,c){if(!b||
	!c)return null;var d=b.split("?");if(d[1])for(var d=d[1].split("&"),f=0;f<d.length;++f){var g=d[f].split("=");if(g[0]==c&&!a.Util.isBlank(g[1]))return decodeURIComponent(g[1])}return null},isParameterInURL:function(a,c){if(!a||!c)return!1;var d=a.split("?");if(d[1])for(var d=d[1].split("&"),f=0;f<d.length;++f)if(d[f].split("=")[0]==c)return!0;return!1},flashVersion:function(){var b="0,0,0,0";if(null!=navigator.plugins&&0<navigator.plugins.length){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"])try{var c=
	navigator.plugins["Shockwave Flash"+(navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"")].description.split(" "),d=c[2].split("."),f=d[0],g=d[1],h=c[3];""==h&&(h=c[4]);"d"==h[0]?h=h.substring(1):"r"==h[0]&&(h=h.substring(1),0<h.indexOf("d")&&(h=h.substring(0,h.indexOf("d"))));b=f+","+g+","+h+",0"}catch(j){a.warn("Flash detection failed on navigator method")}}else{var k;try{k=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");var l=k.GetVariable("$version").split(" ")[1].split(",");3==l.length?b=
	l.join(",")+",0":4==l.length&&(b=l.join(","))}catch(i){a.warn("Flash detection failed on ActiveX method")}}return b},xmlToJson:function(b){var c={};if(!b)return null;if(1===b.nodeType){if(0<b.attributes.length){c["@attributes"]={};for(var d=0;d<b.attributes.length;d++){var f=b.attributes.item(d);c["@attributes"][f.nodeName]=f.nodeValue}}}else if(3===b.nodeType)c=b.nodeValue;else if(4===b.nodeType)c=b.nodeValue;if(b.hasChildNodes()){for(d=0;d<b.childNodes.length;d++){var f=b.childNodes.item(d),g=f.nodeName;
	if("undefined"===typeof c[g])c[g]=a.Util.xmlToJson(f);else{if("undefined"===typeof c[g].length||"string"===typeof c[g]){var h=c[g];c[g]=[];c[g].push(h)}c[g].push(a.Util.xmlToJson(f))}}if("undefined"!==typeof c["#cdata-section"])c.value=c["#cdata-section"];else if(c["#text"])c.value=c["#text"]}return c},lazyJavaScriptLoad:function(a,c){var d=document.getElementsByTagName("head")[0]||document.documentElement,f=document.createElement("script");f.type="text/javascript";f.src=a;if(c)f.attachEvent&&!window.opera?
	f.onreadystatechange=function(){if("loaded"==f.readyState||"complete"==f.readyState)d.removeChild(f),f.onreadystatechange=null,c()}:f.addEventListener("load",function(){d.removeChild(f);c()},!1);d.insertBefore(f,d.firstChild)},getViewport:function(){var a=0,c=0;if("undefined"!==typeof window.innerWidth)a=window.innerWidth,c=window.innerHeight;else if("undefined"!==typeof document.documentElement&&"undefined"!==typeof document.documentElement.clientWidth&&0!==document.documentElement.clientWidth)a=
	document.documentElement.clientWidth,c=document.documentElement.clientHeight;else if(document.getElementsByTagName("body")&&document.getElementsByTagName("body")[0])a=document.getElementsByTagName("body")[0].clientWidth,c=document.getElementsByTagName("body")[0].clientHeight;return{width:a,height:c,offsetX:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,offsetY:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}},getAbsoluteUrl:function(b,
	c){b=a.Util.trim(b);c=a.Util.trim(c);if(-1!==c.indexOf("://"))return c;var d=b.substring(0,b.indexOf("://")-1);if(0===c.indexOf("//"))return d+":"+c;var d=b.indexOf("/",b.indexOf("://")+5),f=b;-1!==d&&(f=b.substring(0,d));if(0==c.indexOf("/"))return f+c;d=b.lastIndexOf("#");f=b;-1!==d&&(f=b.substring(0,d));if(0==c.indexOf("#"))return f+c;f=b.indexOf("?");d=b;-1!==f&&(d=b.substring(0,f));if(0==c.indexOf("?"))return d+c;f=-1===f?b.lastIndexOf("/"):d.lastIndexOf("/");d=-1!==f?b.substring(0,f+1):d+"/";
	return d+c}};a.MediaState=function(){};a.MediaState.prototype={};a.MediaState.prototype.constructor=a.MediaState;a.Util.mixin(a.MediaState.prototype,{play:function(b){a.debug(this._name+" play("+b+")")},pause:function(b){a.debug(this._name+" pause("+b+")")},complete:function(b){a.debug(this._name+" complete("+b+")")}});a.MediaInitState=function(){this._name="MediaInitState"};a.MediaInitState.prototype=new a.MediaState;a.MediaInitState.prototype.constructor=a.MediaInitState;a.Util.mixin(a.MediaInitState.prototype,
	{play:function(b){a.debug(this._name+" play("+b+")");b.setMediaState(a.MediaPlayingState.instance);if("function"===typeof b.onStartPlaying)b.onStartPlaying()}});a.MediaInitState.instance=new a.MediaInitState;a.MediaPlayingState=function(){this._name="MediaPlayingState"};a.MediaPlayingState.prototype=new a.MediaState;a.MediaPlayingState.prototype.constructor=a.MediaPlayingState;a.Util.mixin(a.MediaPlayingState.prototype,{pause:function(b){a.debug(this._name+" pause("+b+")");b.setMediaState(a.MediaPausedState.instance);
	if("function"===typeof b.onPausePlaying)b.onPausePlaying()},complete:function(b){a.debug(this._name+" complete("+b+")");b.setMediaState(a.MediaEndState.instance);if("function"===typeof b.onCompletePlaying)b.onCompletePlaying()}});a.MediaPlayingState.instance=new a.MediaPlayingState;a.MediaPausedState=function(){this._name="MediaPausedState"};a.MediaPausedState.prototype=new a.MediaState;a.MediaPausedState.prototype.constructor=a.MediaPausedState;a.Util.mixin(a.MediaPausedState.prototype,{play:function(b){a.debug(this._name+
	" play("+b+")");b.setMediaState(a.MediaPlayingState.instance);if("function"===typeof b.onResumePlaying)b.onResumePlaying()},complete:function(b){a.debug(this._name+" complete("+b+")");b.setMediaState(a.MediaEndState.instance);if("function"===typeof b.onCompletePlaying)b.onCompletePlaying()}});a.MediaPausedState.instance=new a.MediaPausedState;a.MediaReplayingState=function(){this._name="MediaReplayingState"};a.MediaReplayingState.prototype=new a.MediaState;a.MediaReplayingState.prototype.constructor=
	a.MediaReplayingState;a.Util.mixin(a.MediaReplayingState.prototype,{pause:function(b){a.debug(this._name+" pause("+b+")");b.setMediaState(a.MediaReplayPausedState.instance);if("function"===typeof b.onPausePlaying)b.onPausePlaying()},complete:function(b){a.debug(this._name+" complete("+b+")");b.setMediaState(a.MediaEndState.instance);if("function"===typeof b.onCompleteReplaying)b.onCompleteReplaying()}});a.MediaReplayingState.instance=new a.MediaReplayingState;a.MediaReplayPausedState=function(){this._name=
	"MediaReplayPausedState"};a.MediaReplayPausedState.prototype=new a.MediaState;a.MediaReplayPausedState.prototype.constructor=a.MediaReplayPausedState;a.Util.mixin(a.MediaReplayPausedState.prototype,{play:function(b){a.debug(this._name+" play("+b+")");b.setMediaState(a.MediaReplayingState.instance);if("function"===typeof b.onResumePlaying)b.onResumePlaying()},complete:function(b){a.debug(this._name+" complete("+b+")");b.setMediaState(a.MediaEndState.instance);if("function"===typeof b.onCompleteReplaying)b.onCompleteReplaying()}});
	a.MediaReplayPausedState.instance=new a.MediaReplayingState;a.MediaEndState=function(){this._name="MediaEndState"};a.MediaEndState.prototype=new a.MediaState;a.MediaEndState.prototype.constructor=a.MediaEndState;a.Util.mixin(a.MediaEndState.prototype,{play:function(b){a.debug(this._name+" play("+b+")");b.setMediaState(a.MediaReplayingState.instance);if("function"===typeof b.onStartReplaying)b.onStartReplaying()}});a.MediaEndState.instance=new a.MediaEndState;a.RendererState=function(){};a.RendererState.prototype=
	{};a.RendererState.prototype.constructor=a.RendererState;a.Util.mixin(a.RendererState.prototype,{start:function(){a.debug(this._name+" start()")},notifyStarted:function(){a.debug(this._name+" notifyStarted()")},stop:function(){a.debug(this._name+" stop()")},complete:function(){a.debug(this._name+" complete()")},notifyCompleted:function(){a.debug(this._name+" notifyCompleted()")},fail:function(b){a.debug(this._name+" fail()");b.setRendererState(a.RendererFailedState.instance);b.getAdInstance().complete()}});
	a.RendererInitState=function(){this._name="RendererInitState"};a.RendererInitState.prototype=new a.RendererState;a.RendererInitState.prototype.constructor=a.RendererInitState;a.RendererInitState.instance=new a.RendererInitState;a.Util.mixin(a.RendererInitState.prototype,{start:function(b){a.debug(this._name+" start()");b.setRendererState(a.RendererStartingState.instance);b.getRenderer().start(b)},stop:function(b){a.debug(this._name+" stop()");b.setRendererState(a.RendererCompletingState.instance);
	b.getRendererState().notifyCompleted()}});a.RendererStartingState=function(){this._name="RendererStartingState"};a.RendererStartingState.prototype=new a.RendererState;a.RendererStartingState.prototype.constructor=a.RendererStartingState;a.RendererStartingState.instance=new a.RendererStartingState;a.Util.mixin(a.RendererStartingState.prototype,{notifyStarted:function(b){a.debug(this._name+" notifyStarted()");b.setRendererState(a.RendererStartedState.instance);b.getAdInstance().play()},stop:function(b){a.debug(this._name+
	" stop()");"function"===typeof b.getRenderer().stop&&(b.setRendererState(a.RendererCompletingState.instance),b.getRenderer().stop())}});a.RendererStartedState=function(){this._name="RendererStartedState"};a.RendererStartedState.prototype=new a.RendererState;a.RendererStartedState.prototype.constructor=a.RendererStartedState;a.RendererStartedState.instance=new a.RendererStartedState;a.Util.mixin(a.RendererStartedState.prototype,{complete:function(b){a.debug(this._name+" complete()");b.setRendererState(a.RendererCompletingState.instance)},
	stop:function(b){a.debug(this._name+" stop()");"function"===typeof b.getRenderer().stop&&(b.setRendererState(a.RendererCompletingState.instance),!1===b.getRenderer().stop()&&b.getAdInstance().fakeComplete())}});a.RendererCompletingState=function(){this._name="RendererCompletingState"};a.RendererCompletingState.prototype=new a.RendererState;a.RendererCompletingState.prototype.constructor=a.RendererCompletingState;a.RendererCompletingState.instance=new a.RendererCompletingState;a.Util.mixin(a.RendererCompletingState.prototype,
	{notifyCompleted:function(b){a.debug(this._name+" notifyCompleted()");b.setRendererState(a.RendererCompletedState.instance);b.getAdInstance().complete()}});a.RendererCompletedState=function(){this._name="RendererCompletedState"};a.RendererCompletedState.prototype=new a.RendererState;a.RendererCompletedState.prototype.constructor=a.RendererCompletedState;a.RendererCompletedState.instance=new a.RendererCompletedState;a.RendererFailedState=function(){this._name="RendererFailedState"};a.RendererFailedState.prototype=
	new a.RendererState;a.RendererFailedState.prototype.constructor=a.RendererFailedState;a.RendererFailedState.instance=new a.RendererFailedState;a.HTMLRenderer=function(){};a.HTMLRenderer.prototype={start:function(b){this.rendererController=b;b.getAdInstance().getSlot().getBase()?this._setupParameters()&&(this._render(),b.handleStateTransition(a.RENDERER_STATE_STARTED)):b.handleStateTransition(a.RENDERER_STATE_FAILED,{errorModule:"HTMLRenderer",errorCode:a.ERROR_INVALID_SLOT,errorInfo:"slot base is empty"})},
	pause:function(){this.log("pause")},resume:function(){this.log("resume")},stop:function(){this.log("stop isMRAIDAd:"+this.isMRAIDAd+" tpc:"+this._tpc+" interstitial:"+this.shouldKeepInterstitial);if(this.isMRAIDAd||this._tpc!=a.TIME_POSITION_CLASS_DISPLAY||this.shouldKeepInterstitial){var b=this.rendererController;this._cleanup();b.handleStateTransition(a.RENDERER_STATE_COMPLETED)}else return!1},_cleanup:function(){this.log("_cleanup");if(this.timer)this.timer.stop(),this.timer=null;if(this.adLoadTimeoutTimer)this.adLoadTimeoutTimer.stop(),
	this.adLoadTimeoutTimer=null;window.removeEventListener?(document.removeEventListener("touchmove",this.touchMoveDisabler,!1),window.removeEventListener("message",this.messageHandlerFunc,!1),window.removeEventListener("resize",this.viewportChangeFunc,!1),window.removeEventListener("scroll",this.viewportChangeFunc,!1)):window.detachEvent&&(window.detachEvent("onmessage",this.messageHandlerFunc),window.detachEvent("onresize",this.viewportChangeFunc),window.detachEvent("onscroll",this.viewportChangeFunc));
	if(this.isMRAIDAd&&(this.mraid.inExpandedState()&&(this.log("stopping with expanded state, invoke close()"),this._mraidClose()),this.mraid.inDefaultState())){this.log("stopping with default state, invoke close()");this._mraidClose();return}var a;if(this.expandedAdElement){a=this.expandedAdElement.parentNode;this.expandedAdElement._fw_closeButton&&a.removeChild(this.expandedAdElement._fw_closeButton);a.removeChild(this.expandedAdElement);if(this.expandedAdElement===this.defaultAdElement){if(this.defaultAdElementContainer===
	this.defaultAdElement)this.defaultAdElementContainer=null;this.defaultAdElement=null}this.expandedAdElement=null}if(this.expandedLightbox)a=this.expandedLightbox.parentNode,a.removeChild(this.expandedLightbox),this.expandedLightbox=null;this.rendererController.getAdInstance().getSlot().getTimePositionClass();if(this.defaultAdElement){a=this.defaultAdElement.parentNode;var c=this.defaultAdElement;c.style.display="hidden";window.setTimeout(function(){for(var d=a&&a.childNodes||[],f=0;f<d.length;f++){var g=
	d[f];g===c&&a.removeChild(g)}},200);if(this.defaultAdElementContainer===this.defaultAdElement)this.defaultAdElementContainer=null;this.defaultAdElement=null}if(this.defaultAdElementContainer)a=this.defaultAdElementContainer.parentNode,a.removeChild(this.defaultAdElementContainer),this.defaultAdElementContainer=null;this.shouldPauseContentWhenStart&&this.rendererController.requestContentStateChange(!1)},_setupParameters:function(){var b=this.rendererController,c=b.getAdInstance(),d=c.getSlot().getTimePositionClass();
	this._tpc=d;var f=c.getActiveCreativeRendition(),c=f.getBaseUnit(),f=f.getCreativeApi(),g;if(a.PLATFORM_NOT_SUPPORT_OVERLAY_AD&&d===a.TIME_POSITION_CLASS_OVERLAY)return b.handleStateTransition(a.RENDERER_STATE_FAILED,{errorModule:"HTMLRenderer",errorCode:a.ERROR_DEVICE_LIMIT,errorInfo:"Overlay not supported on this device."}),!1;if(a.PLATFORM_NOT_SUPPORT_MIDROLL_AD&&(d===a.TIME_POSITION_CLASS_MIDROLL||d===a.TIME_POSITION_CLASS_PAUSE_MIDROLL))return b.handleStateTransition(a.RENDERER_STATE_FAILED,
	{errorModule:"HTMLRenderer",errorCode:a.ERROR_DEVICE_LIMIT,errorInfo:"Midroll, pause_midroll not supported on this device."}),!1;if(a.PLATFORM_IS_IPHONE_IPOD)switch(d){case a.TIME_POSITION_CLASS_MIDROLL:case a.TIME_POSITION_CLASS_PAUSE_MIDROLL:case a.TIME_POSITION_CLASS_OVERLAY:return b.handleStateTransition(a.RENDERER_STATE_FAILED,{errorModule:"HTMLRenderer",errorCode:a.ERROR_DEVICE_LIMIT,errorInfo:"Midroll, pause_midroll and overlay ads are not supported on iPod, iPhone."}),!1;case a.TIME_POSITION_CLASS_PREROLL:case a.TIME_POSITION_CLASS_POSTROLL:b.setCapability(a.EVENT_AD_CLICK,
	a.CAPABILITY_STATUS_OFF)}this.adLoadTimeout=5;if(g=b.getParameter(a.PARAMETER_RENDERER_HTML_AD_LOAD_TIMEOUT))this.adLoadTimeout=0<Number(g)?Number(g):this.adLoadTimeout;this.shouldKeepInterstitial=!1;if(g=b.getParameter(a.PARAMETER_RENDERER_HTML_PLACEMENT_TYPE))this.shouldKeepInterstitial=g===a.PARAMETER_RENDERER_HTML_PLACEMENT_TYPE_INTERSTITIAL;else if("string"===typeof c)this.shouldKeepInterstitial=c.toLowerCase()===a.PARAMETER_RENDERER_HTML_BASEUNIT_INTERSTITIAL;this.isInterstitialNow=this.shouldKeepInterstitial;
	this.shouldPauseContentWhenStart=!1;this.shouldPauseContentWhenExpandOrClick=!this.shouldKeepInterstitial&&(d===a.TIME_POSITION_CLASS_DISPLAY||d===a.TIME_POSITION_CLASS_OVERLAY);this.shouldBackgroundTransparent=!1;g=b.getParameter(a.PARAMETER_RENDERER_HTML_SHOULD_BACKGROUND_TRANSPARENT);if("undefined"!==typeof g&&null!==g)this.shouldBackgroundTransparent=a.Util.str2bool(g);this.shouldEndAfterDuration=d!==a.TIME_POSITION_CLASS_DISPLAY;g=b.getParameter(a.PARAMETER_RENDERER_HTML_SHOULD_END_AFTER_DURATION);
	if("undefined"!==typeof g&&null!==g)this.shouldEndAfterDuration=a.Util.str2bool(g);this.coadScriptName=b.getParameter(a.PARAMETER_RENDERER_HTML_COAD_SCRIPT_NAME);if(!this.coadScriptName)this.coadScriptName=b.getParameter("coad_script_name");this.primaryAnchor=b.getParameter(a.PARAMETER_RENDERER_HTML_PRIMARY_ANCHOR)||"bc";this.marginWidth=b.getParameter(a.PARAMETER_RENDERER_HTML_MARGIN_WIDTH)||0;this.marginHeight=b.getParameter(a.PARAMETER_RENDERER_HTML_MARGIN_HEIGHT)||0;this.bootstrap=b.getParameter(a.PARAMETER_RENDERER_HTML_BOOTSTRAP);
	c=a.Util.getViewport();this.defaultExpandWidth=c.width;this.defaultExpandHeight=c.height;this.isMRAIDAd="MRAID-1.0"===f;this.mraid=new function(b){this.STATELOADING="loading";this.STATEDEFAULT="default";this.STATEEXPANDED="expanded";this.STATEHIDDEN="hidden";this._renderer=b;this._state=this.STATELOADING;this._useCustomClose=!1;this.viewable=this.expandIsModal=!0;this._baseUrlExpanded=this._baseUrlDefault="";b=Object.defineProperty||function(a,b,c){c.get&&a.__defineGetter__(b,c.get);c.set&&a.__defineSetter__(b,
	c.set)};b(this,"baseUrl",{get:function(){return this.inExpandedState()?this._baseUrlExpanded||this._baseUrlDefault:this._baseUrlDefault},set:function(a){this.inExpandedState()?this._baseUrlExpanded=a:(this._baseUrlDefault=a,this._baseUrlExpanded="")}});b(this,"useCustomClose",{get:function(){return this._useCustomClose},set:function(a){if(this._useCustomClose===!a)this._useCustomClose=!!a,this.pushData()}});b(this,"placementType",{get:function(){return this._renderer.shouldKeepInterstitial?"interstitial":
	"inline"}});b(this,"expandWidth",{get:function(){return this._renderer.requestedExpandWidth&&this._renderer.requestedExpandWidth<this._renderer.defaultExpandWidth?this._renderer.requestedExpandWidth:this._renderer.defaultExpandWidth}});b(this,"expandHeight",{get:function(){return this._renderer.requestedExpandHeight&&this._renderer.requestedExpandHeight<this._renderer.defaultExpandHeight?this._renderer.requestedExpandHeight:this._renderer.defaultExpandHeight}});b(this,"state",{get:function(){return this._state},
	set:function(b){this.log("mraid.state change "+this.state+" => "+b);if(this.state!==b){this._renderer.shouldPauseContentWhenExpandOrClick&&(b===this.STATEEXPANDED?this._renderer.rendererController.requestContentStateChange(!0):this.inExpandedState()&&this._renderer.rendererController.requestContentStateChange(!1));if(b===this.STATEEXPANDED)this._renderer.expandedAdElement?this._renderer.rendererController.processEvent({name:a.EVENT_AD_ACCEPT_INVITATION}):(this._renderer.expandedAdElement=this._renderer.defaultAdElement,
	this._renderer.rendererController.processEvent({name:a.EVENT_AD_EXPAND})),this._renderer.presentInterstitial(),this._renderer.shouldEndAfterDuration&&this._renderer.timer.pause();else if(b===this.STATEDEFAULT)this._renderer.shouldKeepInterstitial?(this._renderer.expandedAdElement=this._renderer.defaultAdElement,this._renderer.presentInterstitial()):(this.inExpandedState()&&(this._renderer.expandedAdElement!==this._renderer.defaultAdElement?this._renderer.rendererController.processEvent({name:a.EVENT_AD_CLOSE}):
	this._renderer.rendererController.processEvent({name:a.EVENT_AD_COLLAPSE})),this._renderer.expandedAdElement=null,this._renderer.presentInline()),this._renderer.shouldEndAfterDuration&&this._renderer.timer.start();this._state=b;this.pushData();b===this.STATEHIDDEN&&this._renderer.stop()}}});this.inLoadingState=function(){return this.state===this.STATELOADING};this.inDefaultState=function(){return this.state===this.STATEDEFAULT};this.inExpandedState=function(){return this.state===this.STATEEXPANDED};
	this.inHiddenState=function(){return this.state===this.STATEHIDDEN};this.pushData=function(){var a='mraid._Update("'+this.state+'", '+this.viewable+', "'+this.placementType+'", '+this.expandWidth+", "+this.expandHeight+", "+this.useCustomClose+", "+this.expandIsModal+")";this.log("mraid.pushData: going to invoke on iframe with "+a);this._renderer.defaultAdElement?(this._renderer.defaultAdElement.contentWindow.postMessage("fwsdk-bounce:"+a,"*"),this._renderer.expandedAdElement&&this._renderer.expandedAdElement!==
	this._renderer.defaultAdElement&&this._renderer.expandedAdElement.contentWindow.postMessage("fwsdk-bounce:"+a,"*")):this.warn("_mraidPushData: no iframe suitable to send "+a)};this.log=function(a){this._renderer.log(a)};this.warn=function(a){this._renderer.warn(a)}}(this);this.onLoadFunc=a.Util.bind(this,function(){if(this.adLoadTimeoutTimer)this.adLoadTimeoutTimer.stop(),this.adLoadTimeoutTimer=null;this.timer&&this.shouldEndAfterDuration&&this.timer.start()});this.touchMoveDisabler=function(a){a.preventDefault()};
	this.log("setting parameters, adLoadTimeout: "+this.adLoadTimeout+", isMRAIDAd: "+this.isMRAIDAd+", shouldKeepInterstitial: "+this.shouldKeepInterstitial+", shouldEndAfterDuration: "+this.shouldEndAfterDuration+", shouldPauseContentWhenStart: "+this.shouldPauseContentWhenStart+", shouldPauseContentWhenExpandOrClick: "+this.shouldPauseContentWhenExpandOrClick+", shouldBackgroundTransparent: "+this.shouldBackgroundTransparent+", defaultExpandWidth: "+this.defaultExpandWidth+", defaultExpandHeight: "+
	this.defaultExpandHeight+", coadScriptName: "+this.coadScriptName+", primaryAnchor: "+this.primaryAnchor+", marginWidth: "+this.marginWidth+", marginHeight: "+this.marginHeight+", bootstrap: "+this.bootstrap);if(this.shouldKeepInterstitial){if(d===a.TIME_POSITION_CLASS_OVERLAY)return b.handleStateTransition(a.RENDERER_STATE_FAILED,{errorModule:"HTMLRenderer",errorCode:a.ERROR_INVALID_SLOT,errorInfo:"Interstitial ad is not supported on overlay slot."}),!1}else if(this.isMRAIDAd&&(!a.PLATFORM_IS_IPHONE_IPOD||
	d===a.TIME_POSITION_CLASS_DISPLAY))b.setCapability(a.EVENT_AD_ACCEPT_INVITATION,a.CAPABILITY_STATUS_ON),b.setCapability(a.EVENT_AD_CLOSE,a.CAPABILITY_STATUS_ON),b.setCapability(a.EVENT_AD_COLLAPSE,a.CAPABILITY_STATUS_ON),b.setCapability(a.EVENT_AD_EXPAND,a.CAPABILITY_STATUS_ON);return!0},_render:function(){this.log("_render");var b=this.rendererController,c=b.getAdInstance(),d=c.getSlot(),f=d.getTimePositionClass(),g=d.getBase(),h=c.getActiveCreativeRendition(),j=h.getDuration(),k=h.getPrimaryCreativeRenditionAsset(),
	c=k.getUrl(),l=k.getContent();if(f===a.TIME_POSITION_CLASS_DISPLAY)g.innerHTML="";this.timer=new a.Timer(j,a.Util.bind(this,this.stop));if(this.coadScriptName&&"function"===typeof window[this.coadScriptName])this.defaultAdElement=window[this.coadScriptName](l,c,h.getHeight(),h.getWidth(),k.getMimeType(),d.getCustomId()),this.timer&&this.shouldEndAfterDuration&&this.timer.start();else{h=document.createElement("span");h.id="_fw_ad_container_html_"+d.getCustomId()+"_";h.style.position="relative"===g.style.position?
	"absolute":"relative";h.style.display="inline-block";h.style.margin="0px";h.style.padding="0px";h.style.width=g.style.width;h.style.height=g.style.height;h.style.top=h.style.left="0px";g.appendChild(h);this.defaultAdElementContainer=h;if(!c&&!l){b.handleStateTransition(a.RENDERER_STATE_FAILED,{errorModule:"HTMLRenderer",errorCode:a.ERROR_NULL_ASSET});this.stop();return}h=document.createElement("iframe");h.id="_fw_ad_container_iframe_"+d.getCustomId()+"_"+Math.random();h.attachEvent?h.attachEvent("onload",
	this.onLoadFunc):h.onload=this.onLoadFunc;this.defaultAdElement=h;this.defaultAdElementContainer.appendChild(h);this._fillAdNode(h,c,l);if(this.isMRAIDAd)this.adLoadTimeoutTimer=new a.Timer(this.adLoadTimeout,a.Util.bind(this,function(){b.handleStateTransition(a.RENDERER_STATE_FAILED,{errorCode:a.ERROR_TIMEOUT,errorModule:"HTMLRenderer",errorInfo:"Loading element timeout"});f!==a.TIME_POSITION_CLASS_DISPLAY?this.isMRAIDAd&&!this.mraid.inLoadingState()?this._mraidClose():this.stop():this.stop()})),
	this.adLoadTimeoutTimer.start()}if(!this.defaultAdElement&&(d=g.getElementsByTagName("iframe"))&&0<d.length)this.defaultAdElement=d[d.length-1];if(this.defaultAdElement){this.defaultAdElement.frameBorder="0";if(this.shouldBackgroundTransparent)this.defaultAdElement.allowTransparency="true",this.defaultAdElement.style["background-color"]="rgba(255,255,255,0)";this.isInterstitialNow?(this.expandedAdElement=this.defaultAdElement,this.presentInterstitial()):this.presentInline();this.messageHandlerFunc=
	a.Util.bind(this,this._onWindowMessageReceived);this.viewportChangeFunc=a.Util.bind(this,function(){this.viewportChangeFuncTimer&&window.clearTimeout(this.viewportChangeFuncTimer);this.viewportChangeFuncTimer=window.setTimeout(a.Util.bind(this,this._onViewportResizeScroll),200)});window.addEventListener?(window.addEventListener("message",this.messageHandlerFunc,!1),window.addEventListener("resize",this.viewportChangeFunc,!1),window.addEventListener("scroll",this.viewportChangeFunc,!1)):window.attachEvent&&
	(window.attachEvent("onmessage",this.messageHandlerFunc),window.attachEvent("onresize",this.viewportChangeFunc),window.attachEvent("onscroll",this.viewportChangeFunc))}else this.isMRAIDAd&&(b.handleStateTransition(a.RENDERER_STATE_FAILED,{errorCode:a.ERROR_UNKNOWN,errorModule:"HTMLRenderer",errorInfo:"Failed to find iframe in slotBase for MRAID ad"}),this.stop())},_layoutOverlayAd:function(a){this.log("_layoutOverlayAd");var c=this.rendererController.getAdInstance(),d=c.getSlot(),f=d.getVideoDisplaySize().width,
	d=d.getVideoDisplaySize().height,g=c.getActiveCreativeRendition(),c=g.getWidth()||240,g=g.getHeight()||50;a.style.width=Math.min(c,f)+"px";a.style.height=Math.min(g,d)+"px";a.style.left=a.style.top=a.style.right=a.style.bottom="";switch(this.primaryAnchor){case "tl":case "lt":a.style.top=this.marginHeight+"px";a.style.left=this.marginWidth+"px";break;case "tr":case "rt":a.style.top=this.marginHeight+"px";a.style.right=this.marginWidth+"px";break;case "bl":case "lb":a.style.bottom=this.marginHeight+
	"px";a.style.left=this.marginWidth+"px";break;case "br":case "rb":a.style.bottom=this.marginHeight+"px";a.style.right=this.marginWidth+"px";break;case "tc":case "ct":a.style.top=this.marginHeight+"px";a.style.left=0.5*Math.max(0,f-c)+"px";break;case "lm":case "ml":a.style.left=this.marginWidth+"px";a.style.top=0.5*Math.max(0,d-g)+"px";break;case "rm":case "mr":a.style.right=this.marginWidth+"px";a.style.top=0.5*Math.max(0,d-g)+"px";break;case "mc":case "cm":case "c":case "m":a.style.left=0.5*Math.max(0,
	f-c)+"px";a.style.top=0.5*Math.max(0,d-g)+"px";break;default:case "bc":case "cb":a.style.bottom=this.marginHeight+"px",a.style.left=0.5*Math.max(0,f-c)+"px"}},_fillAdNode:function(b,c,d){this.log("_fillAdNode, url:"+c+", content:"+(d?"<omited>":"<empty>"));var f=this.rendererController;if(c)b.src=c;else if(d)b=b.contentWindow?b.contentWindow.document:b.contentDocument.document?b.contentDocument.document:b.contentDocument,b.open(),b.write(d),b.close();else return f.handleStateTransition(a.RENDERER_STATE_FAILED,
	{errorModule:"HTMLRenderer",errorCode:a.ERROR_NULL_ASSET}),!1;return!0},presentInline:function(){this.log("presentInline");this.isInterstitialNow=!1;var b=this.defaultAdElement;if(b){var c=this.rendererController.getAdInstance(),d=c.getSlot(),f=d.getTimePositionClass(),g=d.getWidth(),h=d.getHeight(),j=d.getVideoDisplaySize().width,d=d.getVideoDisplaySize().height,k=c.getActiveCreativeRendition(),c=k.getWidth(),k=k.getHeight();b.scrolling="no";b.style.overflow="hidden";switch(f){case a.TIME_POSITION_CLASS_DISPLAY:b.style.position=
	"";b.style.background=this.shouldBackgroundTransparent?"transparent":"";b.style.left="0px";b.style.top="0px";b.style.width=(g?g:c)+"px";b.style.height=(h?h:k)+"px";break;case a.TIME_POSITION_CLASS_OVERLAY:b.style.position="absolute";b.style.background=this.shouldBackgroundTransparent?"transparent":"white";this._layoutOverlayAd(b);break;default:b.style.position="absolute",b.style.background=this.shouldBackgroundTransparent?"transparent":"white",b.style.left="0px",b.style.top="0px",b.style.width=j+
	"px",b.style.height=d+"px"}}},presentInterstitial:function(){this.log("presentInterstitial, defaultExpandWidth: "+this.defaultExpandWidth+", defaultExpandHeight: "+this.defaultExpandHeight+", this.mraid.expandWidth: "+this.mraid.expandWidth+", this.mraid.expandHeight: "+this.mraid.expandHeight+", (Math.max(0, this.defaultExpandWidth - this.mraid.expandWidth) / 2) = "+Math.max(0,this.defaultExpandWidth-this.mraid.expandWidth)/2+", (Math.max(0, this.defaultExpandHeight - this.mraid.expandHeight) / 2) = "+
	Math.max(0,this.defaultExpandHeight-this.mraid.expandHeight)/2);if(this.expandedAdElement){this.isInterstitialNow=!0;document.addEventListener&&(document.removeEventListener("touchmove",this.touchMoveDisabler,!1),document.addEventListener("touchmove",this.touchMoveDisabler,!1));var b=this.expandedAdElement.parentNode;if(!this.expandedLightbox)this.expandedLightbox=document.createElement("div"),this.expandedLightbox.style.background="black",this.expandedLightbox.style.opacity=0.8,this.expandedLightbox.style.position=
	"fixed",this.expandedLightbox.style.top="0px",this.expandedLightbox.style.left="0px",this.expandedLightbox.style.zIndex=this.expandedLightbox.style["z-index"]=9999,b.appendChild(this.expandedLightbox);this.expandedLightbox.style.width=this.defaultExpandWidth+"px";this.expandedLightbox.style.height=this.defaultExpandHeight+"px";this.expandedAdElement.frameBorder="0";this.expandedAdElement.scrolling="no";this.expandedAdElement.style.position="fixed";this.expandedAdElement.style.overflow="hidden";this.expandedAdElement.style.top=
	this.expandedAdElement.top=Math.max(0,this.defaultExpandHeight-this.mraid.expandHeight)/2+"px";this.expandedAdElement.style.left=this.expandedAdElement.left=Math.max(0,this.defaultExpandWidth-this.mraid.expandWidth)/2+"px";this.expandedAdElement.style.width=this.expandedAdElement.width=this.mraid.expandWidth+"px";this.expandedAdElement.style.height=this.expandedAdElement.height=this.mraid.expandHeight+"px";this.expandedAdElement.style.zIndex=this.expandedAdElement.style["z-index"]=1E4;this.log("presentInterstitial, expanded ad element size: (top, left, width, height) = ("+
	this.expandedAdElement.top+", "+this.expandedAdElement.left+", "+this.expandedAdElement.width+", "+this.expandedAdElement.height+")");if(this.isMRAIDAd){var c=this.expandedAdElement._fw_closeButton;if(!c)c=document.createElement("div"),c.addEventListener?c.addEventListener("click",a.Util.bind(this,function(){this._mraidClose()})):c.attachEvent&&c.attachEvent("onclick",a.Util.bind(this,function(){this._mraidClose()})),c.style.position="fixed",c.style.margin="0px",c.style.padding="0px",c.style.width=
	"25px",c.style.height="25px",c.style.zIndex=c.style["z-index"]=10001,b.appendChild(c),this.expandedAdElement._fw_closeButton=c;c.style.top=this.expandedAdElement.style.top;c.style.left=Math.max(0,this.defaultExpandWidth-this.mraid.expandWidth)/2+this.mraid.expandWidth-25+"px";c.innerHTML=this.mraid.useCustomClose?0<a.PLATFORM_ANDROID_VERSION?"   ":"":0<a.PLATFORM_ANDROID_VERSION&&3>=a.PLATFORM_ANDROID_VERSION?'<img style="width:25px; height:25px; border:0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4xJREFUeNrMmjFv2kAUxw/IUAZUw4AqJjIxMAQJ9sIHgDYLUqfSBTowJBudAmOnNCNeAitLyVgxxNlBgk+QTKgb6UQHhr7nniNj8PmM3zk86XQZOPt+ee/e+9+dI4zQms1mGTpsb6EVXH42h/YHmqHrukH17kjAiWvQfYT2gfeH2BjaHfYA9hwqCABkobvik9eI/qkIMYB2A0BPSkG4By44hErrQfvhx0MRn/F/Cy3LwjH0yhfZdRSThOhyCI2FZ/iuRrFYjMxmMyMwCEDc8nB6LSsDTBZg7g4GAYj7ANmI0gpeMDEPTxwDhBRMzAXiGrqv7PgMYTSA+eWZtQACvfCTHbedQzYbu4LwOvHolp3q9TorlUpsuVyyfr/P1us16ezi8TirVqtmP5lMzPcIiuepvc5EHT+4doPIZDImhPV3q9UyX0hl+MxOp2O+I5/Ps1qt5pWat4py1CE7Gm4jnf99Sph9z5Lw9gWf845HhLJjtVqx0WhEDuMGgaElYVdbWYuTDbxGYcwiELreskQiwXK5HFssFmyz2ZBA4PoTrA9nFhtCFnu2PCJdL6bTKYlnCCCYfe4WyGc/I4PCEEK8zD3Cw+rxkPjGDIMp2Rl+otRMDGHZaZRvTQ8yv55RBGEKSwQ5C/IEWRiFEGhnMVj1naCbJa9slk6nVUKg/T2h2iyhZywZ4/RCMplUCWFW+hPBsQ0ZjFMhEEOY9SRKLUv3rRnFEHtFI4nhRPelX1xH2FQYOYjf9EsJ8qQSQqVqth8dkYGI6oQK1awExKvYUQlNL5CFSghq1exiCwQxVEOEAGPEYFPyG2QKniS+CWNTRL05w7DSdf2blX7HYe7siD0ztteRm7B3doQww5c9Ow+vspcKRvHXbrfJBCBBmOH13XdnZe95jcKzJmoVK/KMhPV2JAq/UDG8TgJVCEA3GAlvGG5a61JGpmM4UKtYJ4zEs7fmuu8Qu8vU3xEK12EqlXJV0FZIgTe6QhAOcx/kUEKxYUhVZGX8Oft/sX9sNudz2zHXW13wCm6B71m4F6AiwyuECnhj7mtjxQdUKPcrQdStCELoEZtnNO6ZwiuGU8Xr4wE/HwzgJVDY19T49cOlzA9jsk/EC0iQMQ/cM+9C8MIngOjLDjj0o5oGrzVZBWsBa8TA78Cgnznh3QQe6we9j0cpPnTe1IYG4kgIZR5273mvCdIohg6G6TzI5O32T4ABAPsBS28k7apdAAAAAElFTkSuQmCC">':
	'<img style="width:25px; height:25px; border:0" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAwcHgiIGhlaWdodD0iNDAwcHgiIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Y2lyY2xlIGZpbGw9IiM2NjY2NjYiIGN4PSIyMDAuMTM5IiBjeT0iMTk5Ljg2IiByPSIxOTcuODYiLz48cGF0aCBmaWxsPSIjRjBGMEYwIiBzdHJva2U9IiNGMEYwRjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTExNC44NjUsMzAzLjY0NGMtNi4yMjYsNi4yMjctMTUuMzYzLDcuMTg2LTIwLjQwNywyLjE0NGwtMC41MjItMC41MjJjLTUuMDQzLTUuMDQzLTQuMDgzLTE0LjE4LDIuMTQ0LTIwLjQwN0wyODQuODYsOTYuMDc4YzYuMjI2LTYuMjI3LDE1LjM2Mi03LjE4NiwyMC40MDUtMi4xNDRsMC41MjIsMC41MjFjNS4wNDMsNS4wNDIsNC4wODMsMTQuMTc5LTIuMTQ0LDIwLjQwOEwxMTQuODY1LDMwMy42NDR6Ii8+PHBhdGggZmlsbD0iI0YwRjBGMCIgc3Ryb2tlPSIjRjBGMEYwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0zMDcuODE5LDI4OC42NjZjNS4xNTMsNS4xNTgsNS4wNDgsMTMuNjI0LTAuMjQxLDE4LjkxMWwwLDBjLTUuMjg4LDUuMjg5LTEzLjc1Miw1LjM5My0xOC45MDksMC4yNEw5MS45MDYsMTExLjA1NWMtNS4xNTYtNS4xNTYtNS4wNDgtMTMuNjIzLDAuMjQtMTguOTFsMCwwYzUuMjktNS4yODksMTMuNzU1LTUuMzk2LDE4LjkxMS0wLjI0MUwzMDcuODE5LDI4OC42NjZ6Ii8+PC9zdmc+">'}}},
	_onWindowMessageReceived:function(b){if(this.defaultAdElement&&!(b.source!==this.defaultAdElement.contentWindow&&(this.expandedAdElement?b.source!==this.expandedAdElement.contentWindow:1))){this.log("_onWindowMessageReceived, event.data:"+b.data+", event.origin:"+b.origin);var c=b.data.toString().split(":");if(c&&2<=c.length&&"fwsdk-invoke"===c[0]){var d=c[1];if((c=c.slice(2))&&0<c.length){for(var f=0;f<c.length;f++)c[f]=decodeURIComponent(c[f]);1===c.length&&(c=c[0])}else c=null;if("iframe_ready"===
	d){if(this.onLoadFunc&&b.source===this.defaultAdElement.contentWindow&&this.defaultAdElement!==this.expandedAdElement)this.onLoadFunc();if(c&&(c=a.Util.trim(c))&&this.isMRAIDAd)this.mraid.baseUrl=c;this.bootstrap&&b.source.postMessage("fwsdk-bounce:"+this.bootstrap,b.origin);b.source.postMessage('fwsdk-bounce:mraid._messagingModel = "postMessage"',b.origin);if(this.isMRAIDAd)b.source===this.defaultAdElement.contentWindow&&this.shouldPauseContentWhenStart&&this.rendererController.requestContentStateChange(!0),
	this.mraid.inLoadingState()?this.mraid.state=this.mraid.STATEDEFAULT:this.expandedAdElement&&b.source===this.expandedAdElement.contentWindow&&this.mraid.pushData()}else this.isMRAIDAd?this._mraidMethods(d,c):"close"===d&&this.stop()}}},_mraidMethods:function(b,c){if(b&&this.isMRAIDAd)switch(this.log("_mraidMethods("+b+", "+c+")"),b){case "open":"string"===typeof c?this._mraidOpen(c):2<=c.length&&this._mraidOpen(c[0],a.Util.str2bool(c[1]));break;case "close":this._mraidClose();break;case "expand":this._mraidExpand(c);
	break;case "useCustomClose":c&&0<c.length?this.mraid.useCustomClose=a.Util.str2bool(c):this.warn("Invalid parameter to useCustomClose");break;case "setExpandProperties":if(!c)break;this.requestedExpandWidth=Number(c[0]);this.requestedExpandHeight=Number(c[1]);if(!this.requestedExpandWidth||!this.requestedExpandHeight||this.requestedExpandWidth===this.defaultExpandWidth&&this.requestedExpandHeight===this.defaultExpandHeight)this.requestedExpandHeight=this.requestedExpandWidth=0;this.mraid.useCustomClose=
	a.Util.str2bool(c[2]);(this.requestedExpandWidth!==this.mraid.expandWidth||this.requestedExpandHeight!==this.mraid.expandHeight)&&this.mraid.pushData();break;case "log":this.log("MRAID log:"+c);break;default:this.warn("Unknown MRAID function call: "+b+" with param:"+c)}},_mraidOpen:function(b,c){this.log("_mraidOpen("+b+"), baseUrl:"+this.mraid.baseUrl+", absolute Url"+(b=a.Util.getAbsoluteUrl(this.mraid.baseUrl,b)));var d=this.rendererController;d.getAdInstance();b&&"string"===typeof b&&0<b.length?
	((c||"undefined"===typeof c)&&window.open(b),d.processEvent({name:a.EVENT_AD_CLICK,info:{showBrowser:!1,url:b}})):this.warn("_mraidOpen: url required for open")},_mraidClose:function(){this.log("_mraidClose, current state: "+this.mraid.state);if(this.mraid.inExpandedState()){window.removeEventListener&&document.removeEventListener("touchmove",this.touchMoveDisabler,!1);var a=this.expandedAdElement,c=this.expandedAdElement._fw_closeButton;this.expandedAdElement._fw_closeButton=null;var d=this.expandedAdElement.parentNode;
	this.mraid.state=this.mraid.STATEDEFAULT;if(this.expandedLightbox)d.removeChild(this.expandedLightbox),this.expandedLightbox=null;if(a!==this.defaultAdElement)a.style.display="hidden",window.setTimeout(function(){d.removeChild(a)},50);d.removeChild(c)}else this.mraid.inDefaultState()?this.mraid.state=this.mraid.STATEHIDDEN:this.warn("_mraidClose: close() is only valid when in expanded/default state")},_mraidExpand:function(b){this.log("_mraidExpand, current state: "+this.mraid.state);if(this.mraid.inDefaultState())if(this.shouldKeepInterstitial)this.warn("_mraidExpand: expand() is only valid for inline ad");
	else{if(b){var c=document.createElement("iframe");if(this.shouldBackgroundTransparent)c.allowTransparency="true",c.style["background-color"]="rgba(255,255,255,0)";(this.defaultAdElementContainer||this.defaultAdElement.parentNode).appendChild(c);this.expandedAdElement=c;this.log("_mraidExpand("+b+"), baseUrl:"+this.mraid.baseUrl+", absolute Url"+(b=a.Util.getAbsoluteUrl(this.mraid.baseUrl,b)));this._fillAdNode(c,b,null)}this.mraid.state=this.mraid.STATEEXPANDED;this.isInterstitialNow=!0;this._onViewportResizeScroll()}else this.warn("_mraidExpand: expand() is only valid when in default state")},
	_onViewportResizeScroll:function(){var b=a.Util.getViewport();this.defaultExpandWidth=b.width;this.defaultExpandHeight=b.height;this.isInterstitialNow&&this.presentInterstitial()},log:function(b){var c=this.rendererController.getAdInstance().getSlot();a.log("HTMLRenderer["+c+"]\t"+b)},warn:function(b){var c=this.rendererController.getAdInstance().getSlot();a.warn("HTMLRenderer["+c+"]\t"+b)},info:function(){return{moduleType:a.MODULE_TYPE_RENDERER}},getPlayheadTime:function(){return this.timer?this.timer.getPlayheadTime():
	-1},getDuration:function(){return this.timer?this.timer.getDuration():-1}};a.HTMLRenderer.prototype.constructor=a.HTMLRenderer;a.Ad=function(){var b=null,c=[],d=!1,f=null,g=!1;return{isRequiredToShow:function(){return g},parse:function(h){if(h){b=h.adId||null;d=h.noLoad;f=h.adUnit;if(h.hasOwnProperty("required"))g=h.required;for(var j=0,h=h.creatives||[];j<h.length;j++){var k=h[j],l=new a.Creative;l.parse(k);c.push(l)}}},getSoAdUnit:function(){return f},getId:function(){return b},getNoLoad:function(){return d},
	getCreative:function(a){for(var b=0;b<c.length;b++)if(c[b].getId()===a)return c[b];return null},addCreativeRendition:function(){var b=new a.Creative;c.push(b);return b}}};a.Creative=function(){var b=null,c=null,d=null,f={},g=[];return{getId:function(){return b},getBaseUnit:function(){return c},getDuration:function(){return d},getParameter:function(a){return f[a]},setParameter:function(a,b){null==b?delete f[a]:f[a]=b},parse:function(h){if(h){b=h.creativeId||null;c=h.baseUnit||null;d=1*h.duration;var j;
	if(h.parameters)if(h.parameters.constructor===Array)for(var k=0,l=h.parameters||[];k<l.length;k++)j=l[k],f[j.name]=j.value;else"object"===typeof h.parameters&&(f=a.Util.copy(h.parameters));for(k=0,l=h.creativeRenditions||[];k<l.length;k++)j=l[k],h=new a.CreativeRendition,h.parse(j),h.setDuration(d),h.setBaseUnit(c),g.push(h)}},getAllCreativeRenditions:function(){return g},cloneForTranslation:function(){var g=new a.Creative;g.parse({creativeId:b,baseUnit:c,duration:d,parameters:a.Util.copy(f)});return g}}};
	a.CreativeRendition=function(){var b=null,c="None",d=null,f=null,g=null,h=null,j=null,k=null,l=null,i=null,q={},p=null,n=[],u=null;return{getId:function(){return b},getCreativeApi:function(){return c},setCreativeApi:function(a){c=a||"None"},getReplicaId:function(){return f},getContentType:function(){return g?g:p&&p.getContentType()?p.getContentType():null},setContentType:function(a){g=a},getWrapperType:function(){return h},setWrapperType:function(a){h=a},getWrapperUrl:function(){return j},setWrapperUrl:function(a){j=
	a},getBaseUnit:function(){return d},setBaseUnit:function(a){d=a},getPreference:function(){return k},setPreference:function(a){k=a},getWidth:function(){return l},setWidth:function(a){l=a},getHeight:function(){return i},setHeight:function(a){i=a},getDuration:function(){return u},setDuration:function(a){u=a},getParameter:function(a){return q[a]},setParameter:function(a,b){null==b?delete q[a]:q[a]=b},getPrimaryCreativeRenditionAsset:function(){return p},getOtherCreativeRenditionAssets:function(){return n.slice()},
	addCreativeRenditionAsset:function(b,c){var d=new a.CreativeRenditionAsset;d.setName(b);c?p=d:n.push(d);return d},parse:function(d){if(d){b=d.creativeRenditionId||null;c=d.creativeApi||"None";f=d.hasOwnProperty("adReplicaId")?1*d.adReplicaId:-1;g=d.contentType||null;h=d.wrapperType||null;j=d.wrapperUrl||null;k=1*d.preference;l=1*d.width;i=1*d.height;for(var u,r=0,o=d.parameters||[];r<o.length;r++)u=o[r],q[u.name]=u.value;p=new a.CreativeRenditionAsset;p.parse(d.asset);for(r=0,o=d.otherAssets||[];r<
	o.length;r++)u=o[r],d=new a.CreativeRenditionAsset,d.parse(u),n.push(d)}}}};a.CreativeRenditionAsset=function(){var a=null,c=null,d=null,f=null,g=null,h=null;return{getName:function(){return a},setName:function(c){a=c},getUrl:function(){return c},setUrl:function(a){c=a},getContent:function(){return d},setContent:function(a){d=a},getContentType:function(){return f},setContentType:function(a){f=a},getMimeType:function(){return g},setMimeType:function(a){g=a},getBytes:function(){return h},setBytes:function(a){h=
	a},parse:function(j){j&&(a=j.name||null,c=j.url||null,d=j.content||null,f=j.contentType||null,g=j.mimeType||null,h=1*j.bytes)}}};a.AdControlExtension=function(a){this._context=a;this._currentSlot=this._dragEvent=this._clickEvent=this._targetElement=null;this._dragging=!1};a.AdControlExtension.prototype={start:function(){if(!this._clickEvent)this._clickEvent=a.PLATFORM_EVENT_CLICK,this._dragEvent=a.MOBILE_EVENT_DRAG;this._onAdClicked=a.Util.bind(this,function(){a.log("AdControlExtension","clicked on target element: "+
	this._targetElement.id);this._dragging?this._dragging=!1:this._currentSlot&&this._currentSlot.getCurrentAdInstance()&&this._currentSlot.getCurrentAdInstance().getRendererController().processEvent({name:a.EVENT_AD_CLICK})});this._onAdDragged=a.Util.bind(this,function(){a.log("AdControlExtension","dragging target element: "+this._targetElement.id);this._dragging=!0});this._onSlotStarted=a.Util.bind(this,function(a){a.slot&&this._isTargetSlot(a.slot)&&(this._clearListener(),this._attachListener(a.slot))});
	this._onSlotEnded=a.Util.bind(this,function(a){if(a.slot&&this._isTargetSlot(a.slot)){if(this._targetElement)this._targetElement.style.visibility="hidden";this._clearListener()}});this._onAdStarted=a.Util.bind(this,function(b){if((b=b.adInstance)&&this._isTargetSlot(b.getSlot())&&this._targetElement)this._targetElement.style.visibility=0<b.getEventCallbackUrls(a.EVENT_AD_CLICK,a.EVENT_TYPE_CLICK).length?"":"hidden"});this._context.addEventListener(a.EVENT_SLOT_ENDED,this._onSlotEnded);this._context.addEventListener(a.EVENT_SLOT_STARTED,
	this._onSlotStarted);this._context.addEventListener(a.EVENT_AD_IMPRESSION,this._onAdStarted);if(this._targetElement)this._targetElement.style.visibility="hidden"},_onAdClicked:function(){},_onSlotStarted:function(){},_onSlotEnded:function(){},_attachListener:function(b){a.debug("AdControlExtension._attachListener");var c=this._context.getParameter(a.PARAMETER_EXTENSION_AD_CONTROL_CLICK_ELEMENT);if(c)(this._targetElement=document.getElementById(c))?(this._currentSlot=b,this._targetElement.addEventListener(this._clickEvent,
	this._onAdClicked,!1),this._targetElement.addEventListener(this._dragEvent,this._onAdDragged,!1)):a.warn("Attempted to process click/tap via PARAMETER_EXTENSION_AD_CONTROL_CLICK_ELEMENT specified html element: '"+c+"'. The specified element is not available on the current HTML page.")},_clearListener:function(){if(this._targetElement)this._targetElement.removeEventListener(this._clickEvent,this._onAdClicked,!1),this._targetElement.removeEventListener(this._dragEvent,this._onAdDragged,!1),this._targetElement=
	null;this._currentSlot=null},_isTargetSlot:function(b){return b.getType()===a.SLOT_TYPE_TEMPORAL&&b.getTimePositionClass()!==a.TIME_POSITION_CLASS_OVERLAY?!0:!1},dispose:function(){a.log("AdControlExtension.dispose()");this._clearListener();this._onAdClicked=null;this._context.removeEventListener(a.EVENT_SLOT_ENDED,this._onSlotEnded);this._context.removeEventListener(a.EVENT_SLOT_STARTED,this._onSlotStarted);this._context.removeEventListener(a.EVENT_AD_IMPRESSION,this._onAdStarted);this._onAdStarted=
	this._onSlotEnded=this._onSlotStarted=null}};a.AdControlExtension.prototype.constructor=a.AdControlExtension;a.AdInstance=function(b){this._context=b;this._primaryCreativeRendition=this._creative=this._replicaId=this._creativeRenditionId=this._creativeId=this._soAdUnit=this._adId=this._slot=null;this._creativeRenditions=[];this._noLoad=!1;this._companionAdInstances=[];this._eventCallbacks=[];this._externalEventCallbackUrlsDictionary={};this._rendererController=new a.RendererController(b,this);this._timer=
	new a.Timer;this._metr=0;this._state=a.MediaInitState.instance;this._isStartSuccessfully=this._translated=this._isImpressionSent=!1;this._lastDurationFromRenderer=-1;this._slotCustomId=this._parentAdInstancesGroup=null};a.AdInstance.prototype={};a.AdInstance.prototype.constructor=a.AdInstance;a.METR_MASK_QUARTILE=0;a.METR_MASK_MIDPOINT=1;a.METR_MASK_COMPLETE=2;a.METR_MASK_VOLUME=3;a.METR_MASK_SIZE=4;a.METR_MASK_CONTROL=5;a.METR_MASK_REWIND=6;a.METR_MASK_ACCEPT_INVITATION=7;a.METR_MASK_CLOSE=8;a.METR_MASK_MINIMIZE=
	9;a.METR_MASK_CLICK=10;a.AdInstance._metrDictionary={};a.AdInstance._metrDictionary[a.EVENT_AD_FIRST_QUARTILE]=a.AdInstance._metrDictionary[a.EVENT_AD_THIRD_QUARTILE]=a.AdInstance._metrDictionary[a.EVENT_AD_QUARTILE]=1<<a.METR_MASK_QUARTILE|1<<a.METR_MASK_MIDPOINT|1<<a.METR_MASK_COMPLETE;a.AdInstance._metrDictionary[a.EVENT_AD_MIDPOINT]=1<<a.METR_MASK_MIDPOINT|1<<a.METR_MASK_COMPLETE;a.AdInstance._metrDictionary[a.EVENT_AD_COMPLETE]=1<<a.METR_MASK_COMPLETE;a.AdInstance._metrDictionary[a.EVENT_AD_MUTE]=
	1<<a.METR_MASK_VOLUME;a.AdInstance._metrDictionary[a.EVENT_AD_UNMUTE]=1<<a.METR_MASK_VOLUME;a.AdInstance._metrDictionary[a.EVENT_AD_COLLAPSE]=1<<a.METR_MASK_SIZE;a.AdInstance._metrDictionary[a.EVENT_AD_EXPAND]=1<<a.METR_MASK_SIZE;a.AdInstance._metrDictionary[a.EVENT_AD_PAUSE]=1<<a.METR_MASK_CONTROL;a.AdInstance._metrDictionary[a.EVENT_AD_RESUME]=1<<a.METR_MASK_CONTROL;a.AdInstance._metrDictionary[a.EVENT_AD_REWIND]=1<<a.METR_MASK_REWIND;a.AdInstance._metrDictionary[a.EVENT_AD_ACCEPT_INVITATION]=1<<
	a.METR_MASK_ACCEPT_INVITATION;a.AdInstance._metrDictionary[a.EVENT_AD_CLOSE]=1<<a.METR_MASK_CLOSE;a.AdInstance._metrDictionary[a.EVENT_AD_MINIMIZE]=1<<a.METR_MASK_MINIMIZE;a.AdInstance._metrDictionary[a.EVENT_AD_CLICK]=1<<a.METR_MASK_CLICK;a.Util.mixin(a.AdInstance.prototype,{getAdId:function(){return this._adId},getSoAdUnit:function(){return this._soAdUnit},getEventCallbackUrls:function(b,c){var d=[],f=c===a.EVENT_TYPE_CLICK,g=c===a.EVENT_TYPE_CLICK_TRACKING,h=a.EventCallback.getEventCallback(this._eventCallbacks,
	b,g?a.EVENT_TYPE_CLICK:c);if(!h)return d;var j={};j[a.INFO_KEY_NEED_EMPTY_CT]=!0;f?h._showBrowser&&d.push(h.getUrl(j)):g?h._showBrowser||d.push(h.getUrl(j)):d.push(h.getUrl(j));f||(d=d.concat(h.getTrackingUrls()));return d},addEventCallbackUrls:function(a,c,d){d&&this._isValidEventNameAndType(a,c)&&(this._externalEventCallbackUrlsDictionary[c+"-"+a]=this.getExternalEventCallbackUrls(a,c).concat(d||[]))},setClickThroughUrl:function(b,c){if(c&&this._isValidEventNameAndType(b,a.EVENT_TYPE_CLICK)){var d=
	this.getEventCallback(b,a.EVENT_TYPE_CLICK);if(d){if(!a.Util.isParameterInURL(d._url,a.URL_PARAMETER_KEY_CR))d._url=d._url+"&"+a.URL_PARAMETER_KEY_CR+"=";d._url=a.Util.setParameterInURL(d._url,a.URL_PARAMETER_KEY_CR,c);d._showBrowser=!0}}},addCreativeRendition:function(){var b=new a.CreativeRendition;b.parse({creativeRenditionId:this._creativeRenditionId,preference:0});b.setBaseUnit(this._creative.getBaseUnit());b.setDuration(this._creative.getDuration());this._creativeRenditions.push(b);if(this.isPlaceholder())this._noLoad=
	!1;return b},getRendererController:function(){return this._rendererController},getSlot:function(){if(!this._slot)this._slot=this._context._adResponse.getSlotByCustomId(this._slotCustomId);return this._slot},getCompanionSlots:function(){for(var a=[],c=0;c<this._companionAdInstances.length;c++)a.push(this._companionAdInstances[c]._slot);return a},getCreativeRendition:function(a,c){for(var d=null,f=0,g=this._creativeRenditions||[];f<g.length;f++)if(g[f].getId()===a){if(g[f].getReplicaId()===c)return g[f];
	if(!d||g[f].getReplicaId()<d.getReplicaId())d=g[f]}return d},getActiveCreativeRendition:function(){return this._primaryCreativeRendition},setActiveCreativeRendition:function(b){b?(-1==this._creativeRenditions.indexOf(b)&&this._creativeRenditions.push(cr),this._primaryCreativeRendition=b,this._creativeRenditionId=b.getId()):a.warn("AdInstance.setActiveCreativeRendition","rendition is null")},getAllCreativeRenditions:function(){var a=this._creativeRenditions.slice();a.sort(function(a,b){return b.getPreference()-
	a.getPreference()});var c=a.indexOf(this._primaryCreativeRendition);-1<c&&(a.splice(c,1),a.unshift(this._primaryCreativeRendition));return a},getRenderableCreativeRenditions:function(){var a=this._creativeRenditions.slice().sort(function(a,b){return b.getPreference()-a.getPreference()}).filter(function(a){return this._rendererController.rendererMatch(a)},this),c=a.indexOf(this._primaryCreativeRendition);-1<c&&(a.splice(c,1),a.unshift(this._primaryCreativeRendition));return a},getPlayheadTime:function(){var b=
	-1;if(this._rendererController.getRenderer()&&"function"===typeof this._rendererController.getRenderer().getPlayheadTime)try{b=this._rendererController.getRenderer().getPlayheadTime()}catch(c){a.warn("AdInstance.getPlayheadTime",c.description)}return b},getDuration:function(){var a=-1;if(this._rendererController.getRenderer()&&"function"===typeof this._rendererController.getRenderer().getDuration)this._lastDurationFromRenderer=a=this._rendererController.getRenderer().getDuration();-1===a&&(a=-1<this._lastDurationFromRenderer?
	this._lastDurationFromRenderer:this.getActiveCreativeRendition().getDuration());return a},parse:function(b){if(b){this._adId=b.adId;this._creativeId=b.creativeId;this._creativeRenditionId=b.creativeRenditionId;this._replicaId=b.hasOwnProperty("replicaId")?1*b.replicaId:-1;this._noLoad=this._context._adResponse.getAd(this._adId).getNoLoad();this._soAdUnit=this._context._adResponse.getAd(this._adId).getSoAdUnit();this._creative=this._context._adResponse.getCreative(this._adId,this._creativeId);this._creativeRenditions=
	this._creative.getAllCreativeRenditions();for(var c,d=0,f=b.eventCallbacks||[];d<f.length;d++){c=f[d];var g=a.EventCallback.newEventCallback(this._context,c.name,c.type);if(g)g._adInstance=this,g.parse(c),this._eventCallbacks.push(g)}for(d=0,f=b.companionAds||[];d<f.length;++d)if((c=f[d])&&c.adSlotCustomId)g=new a.AdInstance(this._context),g._slotCustomId=c.adSlotCustomId,g.parse(c),this._companionAdInstances.push(g);for(d=0,f=b.fallbackAds||[];d<f.length;++d)c=f[d],g=new a.AdInstance(this._context),
	this._parentAdInstancesGroup.push(g),g._slot=this._slot,g._parentAdInstancesGroup=this._parentAdInstancesGroup,g.parse(c);this._primaryCreativeRendition=this.getCreativeRendition(this._creativeRenditionId,this._replicaId)}},play:function(){a.log("AdInstance.play "+this._slotCustomId);this._timer.tick();this.processEvent(a.EVENT_AD_IMPRESSION,a.EVENT_TYPE_IMPRESSION);if(!this._isStartSuccessfully)a.MODULE_TYPE_RENDERER===this._rendererController.getRenderer().info()[a.INFO_KEY_MODULE_TYPE]&&this._context.dispatchEvent(a.EVENT_AD_IMPRESSION,
	{adInstance:this,slotCustomId:this._slotCustomId}),this._isStartSuccessfully=!0;this._state.play(this);if(this._rendererController.getRenderer().info()[a.INFO_KEY_MODULE_TYPE]===a.MODULE_TYPE_RENDERER)for(var b=0;b<this._companionAdInstances.length;b++)this._companionAdInstances[b].isPlaceholder()||this._companionAdInstances[b].getSlot().playCompanionAds(this._companionAdInstances[b])},stop:function(){a.log("AdInstance.stop");this._rendererController.stop()},fakeComplete:function(){if(this._slot.getTimePositionClass()===
	a.TIME_POSITION_CLASS_DISPLAY)this._isStartSuccessfully=!1,this._slot.playNextAdInstance()},complete:function(){this._isStartSuccessfully&&(this.processEvent(a.EVENT_AD_IMPRESSION_END,a.EVENT_TYPE_IMPRESSION),a.MODULE_TYPE_RENDERER===this._rendererController.getRenderer().info()[a.INFO_KEY_MODULE_TYPE]&&this._context.dispatchEvent(a.EVENT_AD_IMPRESSION_END,{adInstance:this}));this._state.complete(this);this._rendererController._restorePlaceholdersForHybrid();this._rendererController.setRenderer(null);
	this._isStartSuccessfully=!1;this._slot.playNextAdInstance()},isStarted:function(){return this._isStartSuccessfully},onStartPlaying:function(){a.MODULE_TYPE_RENDERER===this._rendererController.getRenderer().info()[a.INFO_KEY_MODULE_TYPE]?this._isImpressionSent=!0:this._translated=!0},onCompletePlaying:function(){},onStartReplaying:function(){},onCompleteReplaying:function(){},getEventCallback:function(b,c){return a.EventCallback.getEventCallback(this._eventCallbacks,b,c)},processEvent:function(b,
	c,d){var f=!0,c=this.getEventCallback(b,c);b===a.EVENT_AD_IMPRESSION&&this._isStartSuccessfully&&(c=this.getEventCallback(a.EVENT_ERROR,a.EVENT_TYPE_ERROR),d={errorInfo:"Trying to send defaultImpression multiple times"},f=!1);c?c.process(d):f=!1;b===a.EVENT_AD_CLICK&&this._context.dispatchEvent(a.EVENT_AD_CLICK,{adInstance:this});this._context.dispatchEvent(a.EVENT_AD,{subType:b,adInstance:this,slot:this._slot});return f},setMetr:function(b,c){var d=a.AdInstance._metrDictionary[b];if(d)b===a.EVENT_AD_CLICK&&
	(c=!c),this._metr=c===a.CAPABILITY_STATUS_ON||!0===c?this._metr|d:this._metr&~d},getExternalEventCallbackUrls:function(a,c){return(this._externalEventCallbackUrlsDictionary[c+"-"+a]||[]).slice()},reset:function(){this._rendererController.reset();for(var b=0;b<this._companionAdInstances.length;b++){var c=this._companionAdInstances[b];(c._state===a.MediaPlayingState.instance||c._state===a.MediaReplayingState.instance)&&c.stop();c._rendererController.reset()}},cloneForTranslation:function(){var b=new a.AdInstance(this._context);
	b._parent=this;b._adId=this._adId;b._creativeId=this._creativeId;b._creative=this._creative.cloneForTranslation();b._creativeRenditionId=this._creativeRenditionId;b._noLoad=this._noLoad;b._slot=this.getSlot();for(var c=0;c<this._eventCallbacks.length;c++){var d=this._eventCallbacks[c].copy();d._adInstance=b;b._eventCallbacks.push(d)}b._externalEventCallbackUrlsDictionary=a.Util.copy(this._externalEventCallbackUrlsDictionary);for(c=0;c<this._companionAdInstances.length;c++)this._companionAdInstances[c].isPlaceholder()?
	b._companionAdInstances.push(this._companionAdInstances[c].cloneForTranslation()):b._companionAdInstances.push(this._companionAdInstances[c]);return b},isPlaceholder:function(){return this._noLoad},setMediaState:function(a){this._state=a},_isValidEventNameAndType:function(b,c){return a.Util.isBlank(b)||a.Util.isBlank(c)?!1:c===a.EVENT_TYPE_CLICK||c===a.EVENT_TYPE_CLICK_TRACKING||c===a.EVENT_TYPE_IMPRESSION&&(b===a.EVENT_AD_IMPRESSION||b===a.EVENT_AD_FIRST_QUARTILE||b===a.EVENT_AD_MIDPOINT||b===a.EVENT_AD_THIRD_QUARTILE||
	b===a.EVENT_AD_COMPLETE)||c===a.EVENT_TYPE_STANDARD&&(b===a.EVENT_AD_PAUSE||b===a.EVENT_AD_RESUME||b===a.EVENT_AD_REWIND||b===a.EVENT_AD_MUTE||b===a.EVENT_AD_UNMUTE||b===a.EVENT_AD_COLLAPSE||b===a.EVENT_AD_EXPAND||b===a.EVENT_AD_MINIMIZE||b===a.EVENT_AD_CLOSE||b===a.EVENT_AD_ACCEPT_INVITATION)||c===a.EVENT_TYPE_ERROR&&b===a.EVENT_ERROR},isPlayable:function(){var b;b=!(this._rendererController.getRendererState()==a.RendererFailedState.instance&&!this._isImpressionSent);if(!b)return a.debug("AdInstance.isPlayable returning false isImpressionSent:",
	this._isImpressionSent),b;(b=b&&!this._translated)||a.debug("AdInstance.isPlayable returning false translated:",this._translated);return b},toString:function(){return"[AdInstance "+this._adId+"]"},getCompanionAdInstances:function(){for(var a=[],c=0;c<this._companionAdInstances.length;++c)this._companionAdInstances[c].isPlaceholder()||a.push(this._companionAdInstances[c]);return a},isRequiredToShow:function(){return this._context._adResponse.getAd(this._adId).isRequiredToShow()}});a.AdManager=function(){var b=
	this;this._context=this.newContext();this._context.addEventListener(a.EVENT_REQUEST_COMPLETE,function(a){b.onRequestComplete(a)});this._networkId=this._serverURL="";this._onRequestComplete=this._location=null};a.AdManager.prototype={getVersion:function(){if(a.version){var b=a.version.match(/^js-(\d)\.(\d)\.(\d).(\d)/)||a.version.match(/^js-(\d)\.(\d)\.(\d)/)||a.version.match(/^js-(\d)\.(\d)/);if(0<b.length)return(b[1]<<24)+(b[2]<<16)+(b[3]<<8)+b[4];if(0===a.versions.indexOf("js-trunk"))return 4294967295}return 0},
	setNetwork:function(b){a.debug("AdManager.setNetwork("+Array.prototype.slice.call(arguments).join(",")+")");if(0<1*b){this._networkId=1*b;for(var c in a._instanceQueue)if(a._instanceQueue.hasOwnProperty(c)){var d=a._instanceQueue[c];d&&d._videoAsset._videoPlayPending&&d._videoAsset.play()}}else a.warn("AdManager.setNetwork","valid networkId required")},setServerURL:function(b){a.debug("AdManager.setServerURL("+Array.prototype.slice.call(arguments).join(",")+")");a.warn("AdManager.setServerURL method is DEPRECATED, use AdManager.setServer instead.");
	this.setServer(b)},setServer:function(b){a.debug("AdManager.setServer("+Array.prototype.slice.call(arguments).join(",")+")");if(!b||"string"!==typeof b)a.warn("AdManager.setServer","server url required");else{this._serverURL=b;for(var c in a._instanceQueue)if(a._instanceQueue.hasOwnProperty(c)){var d=a._instanceQueue[c];d&&d._videoAsset._videoPlayPending&&d._videoAsset.play()}}},setLocation:function(b){a.debug("AdManager.setLocation("+Array.prototype.slice.call(arguments).join(",")+")");this._location=
	b},newContext:function(){a.debug("AdManager.newContext("+Array.prototype.slice.call(arguments).join(",")+")");return new a.Context(this)},setParameter:function(b,c,d){a.debug("AdManager.setParameter("+Array.prototype.slice.call(arguments).join(",")+")");this._context.setParameter(b,c,d)},getParameter:function(a){return this._context.getParameter(a)},submitRequest:function(b,c){a.debug("AdManager.submitRequest()");b&&"function"===typeof b?this._onRequestComplete=b:a.warn("AdManager.submitRequest(): callback function required");
	this._context.submitRequest(c/1E3)},onRequestComplete:function(b){a.debug("AdManager.onRequestComplete("+Array.prototype.slice.call(arguments).join(",")+")");if(this._onRequestComplete)this._onRequestComplete({success:b.success,response:b.response}),this._onRequestComplete=null},registerVideoDisplayBase:function(b){a.debug("AdManager.registerVideoDisplayBase("+Array.prototype.slice.call(arguments).join(",")+")");this._context.registerVideoDisplayBase(b)},setVideoAsset:function(b,c){a.debug("AdManager.setVideoAsset("+
	Array.prototype.slice.call(arguments).join(",")+")");this._context.setVideoAsset(b,c)},setSiteSection:function(b){a.debug("AdManager.setSiteSection("+Array.prototype.slice.call(arguments).join(",")+")");this._context.setSiteSection(b)},addKeyValue:function(b,c){a.debug("AdManager.addKeyValue("+Array.prototype.slice.call(arguments).join(",")+")");this._context.addKeyValue(b,c)},setVideoDisplayCompatibleSizes:function(b){a.debug("AdManager.setVideoDisplayCompatibleSizes("+Array.prototype.slice.call(arguments).join(",")+
	")");this._context.setVideoDisplayCompatibleSizes(b)},playSlots:function(b,c){a.warn("AdManager.playSlots() has DEPRECATED, use tv.freewheel.SDK.Slot.Play() instead");a.debug("AdManager.playSlots("+b+")");"string"===typeof b&&(b=b.toUpperCase());this._playSlots(b,c)},_playSlots:function(b,c){"function"!==typeof c&&(c=function(){});if(this._context._adResponse){for(var d=[],f=this._context.getTemporalSlots(),g=0;g<f.length;++g){var h=f[g];(0.1>Math.abs(h.getTimePosition()-b)||b===h.getTimePositionClass())&&
	d.push(h)}if(0===d.length)a.warn("AdManager.playSlots","no slot matches",b),c();else if(b===a.TIME_POSITION_CLASS_OVERLAY)for(g=0;g<d.length;g++)(function(a){if(!a._onContentVideoTimeUpdate){var b=a.getBase()._fw_contentVideo,c=a._onContentVideoTimeUpdate=function(){!b.paused&&!0!==b._fw_videoAdPlaying&&0<=b.currentTime-a.getTimePosition()&&1>b.currentTime-a.getTimePosition()&&(b.removeEventListener("timeupdate",c,!1),a._play(function(){var d=setInterval(function(){!b.paused&&2<Math.abs(b.currentTime-
	a.getTimePosition())&&(b.addEventListener("timeupdate",c,!1),clearInterval(d))},1E3)}))};b.addEventListener("timeupdate",c,!1)}})(d[g]);else(function(){var a=d.shift();a?a._play(arguments.callee):c()})()}else a.warn("AdManager._playSlots","request is not completed"),c()},dispose:function(){a.debug("AdManager.dispose()");this._context.dispose();this._onRequestComplete=null}};a.AdManager.prototype.constructor=a.AdManager;a.AdRequest=function(b){this._context=b;this._capabilities=new a.Capabilities;
	this._keyValues=[];this._playerProfile="";this._compatibleDimensions=null;this._temporalSlots=[];this._siteSectionId=this._siteSectionCustomId="";this._siteSectionViewRandom=this._siteSectionFallbackId=this._siteSectionNetworkId=0;this._visitorCustomId="";this._slotScanner=new a.PageSlotScanner;this._urlParams={};this._urlKeyValues=[];this._customInfo=""};a.AdRequest.prototype={setCapability:function(a,c){this._capabilities.setCapability(a,c)},addKeyValue:function(b,c){if("string"!==typeof b||"string"!==
	typeof c||0===b.length)a.warn("AdRequest.addKeyValue:","key and value required");else{var d=encodeURIComponent(b)+"="+encodeURIComponent(c);0>this._keyValues.indexOf(d)&&this._keyValues.push(d)}},setProfile:function(b){"string"!==typeof b?a.warn("AdRequest.setProfile:","player profile required"):this._playerProfile=b},setVideoDisplayCompatibleSizes:function(b){if(!b||!b.length)a.warn("AdRequest.setVideoDisplayCompatibleSizes:","compatible dimensions required");else{for(var c=[],d={},f=0;f<b.length;++f)if(a.debug("dimension is:",
	b[f].width,"X",b[f].height),0<b[f].width&&0<b[f].height){var g=b[f].width+","+b[f].height;null==d[g]&&(d[g]="",c.push(g))}if(0<c.length)this._compatibleDimensions=c.join("|")}},setSiteSection:function(b,c,d,f,g){if(b){switch(f){case a.ID_TYPE_FW:this._siteSectionId=b;break;case a.ID_TYPE_GROUP:this._siteSectionId="g"+b;break;default:this._siteSectionCustomId=b}if(0<1*c)this._siteSectionNetworkId=1*c;if(0<1*d)this._siteSectionViewRandom=1*d;if(0<1*g)this._siteSectionFallbackId=1*g}else a.warn("AdRequest.setSiteSection: id required")},
	setVisitor:function(b){"string"!==typeof b?a.warn("AdRequest.setVisitor:","customId required"):this._visitorCustomId=b},addTemporalSlot:function(b,c,d,f,g){if(a.Util.isBlank(b)||a.Util.isBlank(c)||0>d)a.warn("AdRequest.addTemporalSlot:","invalid parameters");else{for(var h=0;h<this._temporalSlots.length;h++)if(this._temporalSlots[h].getCustomId()===b){a.warn("AdRequest.addTemporalSlot:","slot is already existed, ignored");return}h=new a.Slot(this._context);h.setCustomId(b);h.setAdUnit(c);h.setTimePosition(d);
	h.setSlotProfile(f);h.setCuepointSequence(1*g);this._temporalSlots.push(h)}},scanPageSlots:function(){this._slotScanner.scanPageSlots()},generateTypeBRequestUrl:function(){var b=this._context._adManager._serverURL.split("?"),c=b[0],d=[/fwmrm\.net$/,/fwmrm\.net\/$/,/fwmrm\.net\/ad$/,/fwmrm\.net\/ad\/$/,/fwmrm\.net\/ad\/g$/,/fwmrm\.net\/ad\/g\/$/,/fwmrm\.net\/ad\/g\/1$/];if(0===c.indexOf("http://")||0===c.indexOf("https://"))for(var f=0;f<d.length;++f)if(c.match(d[f])){c=c.slice(0,c.indexOf("fwmrm.net")+
	9)+"/ad/g/1";break}this.parseQueryStr(b.slice(1).join("?"));b=this.generateGlobalParametersQueryStr()+";"+this.generateKeyValuesStr()+";";if(!this._capabilities.getCapability(a.CAPABILITY_SKIP_AD_SELECTION)||1!=this._capabilities.getCapability(a.CAPABILITY_SKIP_AD_SELECTION))b+=this.generateSlotsTypeBStr();a.Util.isBlank(this._customInfo)||(b+=";"+this._customInfo);return c+"?"+b},generateVideoViewRequestUrlWithDummyContextInstanceId:function(b){this._context.setCapability(a.CAPABILITY_REQUIRE_VIDEO_CALLBACK,
	a.CAPABILITY_STATUS_ON);this._context.setCapability(a.CAPABILITY_SKIP_AD_SELECTION,a.CAPABILITY_STATUS_ON);var c=this.generateTypeBRequestUrl(),c=a.Util.setParameterInURL(c,"cbfn","tv.freewheel.SDK._instanceQueue['Context_"+b+"']._videoAsset.requestComplete");a.debug("generateVideoViewRequestUrlWithDummyContextInstanceId():"+c);this._context.setCapability(a.CAPABILITY_REQUIRE_VIDEO_CALLBACK,a.CAPABILITY_STATUS_UNSET);this._context.setCapability(a.CAPABILITY_SKIP_AD_SELECTION,a.CAPABILITY_STATUS_UNSET);
	return c},parseQueryStr:function(b){a.debug("AdRequest.parseQueryStr("+Array.prototype.slice.call(arguments).join(",")+")");this._urlParams={};this._urlKeyValues=[];this._customInfo="";if(b){";"===b.charAt(b.length-1)&&(b=b.substring(0,b.length-1));var c=b.split(";"),d,f;if(c[0]){d=c[0].split("&");for(f=0;f<d.length;++f){var g=d[f].split("=");2===g.length&&(this._urlParams[g[0]]=g[1])}}if(c[1]){d=c[1].split("&");for(f=0;f<d.length;++f)this._urlKeyValues.push(d[f])}if(c[2])this._customInfo=c.slice(2).join(";")}},
	generateGlobalParametersQueryStr:function(){a.debug("AdRequest.generateGlobalParametersQueryStr");for(var b=this._context.getParameter("wrapperVersion"),b=[["prof",this._playerProfile,"string"],["nw",this._context._adManager._networkId,"number"],["caid",this._context._videoAsset._customId,"string"],["asid",this._context._videoAsset._id,"string"],["vdur",this._context._videoAsset._duration,"number"],["asnw",this._context._videoAsset._networkId,"number"],["asml",this._context._videoAsset._location,
	"string"],["vprn",this._context._videoAsset._viewRandom,"number"],["afid",this._context._videoAsset._fallbackId,"number"],["csid",this._siteSectionCustomId,"string"],["ssid",this._siteSectionId,"string"],["ssnw",this._siteSectionNetworkId,"number"],["pvrn",this._siteSectionViewRandom,"number"],["sfid",this._siteSectionFallbackId,"number"],["vcid",this._visitorCustomId,"string"],["cd",this._compatibleDimensions||this.detectScreenDimension(),"string"],["vclr",a.version+(b?","+b:""),"string"],["resp",
	a.PLATFORM_SEND_REQUEST_BY_FORM?"json2":"json","string"],["orig",window.location.protocol+"//"+window.location.host,"string"],["cbfn","tv.freewheel.SDK._instanceQueue['Context_"+this._context._instanceId+"'].requestComplete","string"]],c=0;c<b.length;c++){var d=b[c];switch(d[2]){case "string":a.Util.isBlank(d[1])||(this._urlParams[d[0]]=encodeURIComponent(d[1]));break;case "number":0<d[1]&&(this._urlParams[d[0]]=d[1])}}var b="",f;for(f in this._urlParams)this._urlParams.hasOwnProperty(f)&&(b+=f+"="+
	this._urlParams[f]+"&");b=b.substring(0,b.length-1);0<this._slotScanner._candidateAds.length&&(null==this._capabilities._capabilities[a.CAPABILITY_CHECK_COMPANION]&&this._capabilities.setCapability(a.CAPABILITY_CHECK_COMPANION,a.CAPABILITY_STATUS_ON),null==this._capabilities._capabilities[a.CAPABILITY_CHECK_TARGETING]&&this._capabilities.setCapability(a.CAPABILITY_CHECK_TARGETING,a.CAPABILITY_STATUS_OFF));!this._context._videoAsset._eventCallback&&!this._context._videoAsset._requestedVideoViewUrl&&
	(this._context._videoAsset._id||this._context._videoAsset._customId)&&this._context.setCapability(a.CAPABILITY_REQUIRE_VIDEO_CALLBACK,a.CAPABILITY_STATUS_ON);b=this._capabilities.parseCapabilities(b);this._context.setCapability(a.CAPABILITY_REQUIRE_VIDEO_CALLBACK,a.CAPABILITY_STATUS_UNSET);f="";switch(this._context._videoAsset._autoPlayType){case a.VIDEO_ASSET_AUTO_PLAY_TYPE_UNATTENDED:f="+play+uapl";break;case a.VIDEO_ASSET_AUTO_PLAY_TYPE_NONE:f="-play";break;default:f="+play-uapl"}return b=b.replace(/flag=/,
	"flag="+encodeURIComponent(f))},generateKeyValuesStr:function(){a.debug("AdRequest.generateKeyValuesStr");for(var b=a.Util.flashVersion(),b=this._keyValues.concat(["_fw_h_x_flash_version="+encodeURIComponent(b),"_fw_dpr="+(void 0===window.devicePixelRatio?"1":window.devicePixelRatio.toFixed(2).toString())]),c=0;c<this._urlKeyValues.length;c++){var d=this._urlKeyValues[c];0>b.indexOf(d)&&b.push(d)}(c=this._context._adManager._location)&&b.push("ltlg="+encodeURIComponent(Math.round(1E4*c.coords.latitude)/
	1E4+","+Math.round(1E4*c.coords.longitude)/1E4));return b.join("&")},generateSlotsTypeBStr:function(){a.debug("AdRequest.generateSlotsTypeBStr");for(var b="",c=[],d=0;d<this._temporalSlots.length;d++){for(var f=this._temporalSlots[d],g=[["slid",f.getCustomId(),"string"],["slau",f.getAdUnit(),"string"],["ptgt","a","string"],["tpos",f.getTimePosition(),"number"],["cpsq",f.getCuepointSequence(),"number"],["envp",f.getSlotProfile(),"string"]],h=[],j=0;j<g.length;j++){var k=g[j];switch(k[2]){case "string":a.Util.isBlank(k[1])||
	h.push(k[0]+"="+encodeURIComponent(k[1]));break;case "number":"cpsq"===k[0]?0<k[1]&&f.getTimePosition()===a.TIME_POSITION_CLASS_MIDROLL&&h.push(k[0]+"="+k[1]):0<=k[1]&&h.push(k[0]+"="+k[1])}}c.push(h.join("&"))}0<c.length&&(b=c.join(";")+";");return b+=this._slotScanner.slotsToTypeBStr()},detectScreenDimension:function(){a.debug("AdRequest.detectScreenDimension:",screen.width+","+screen.height);return screen.width+","+screen.height}};a.AdResponse=function(a){this._context=a};a.AdResponse.prototype=
	{};a.AdResponse.prototype.constructor=a.AdResponse;a.Util.mixin(a.AdResponse.prototype,{parse:function(b,c){this._data=b;this._temporalSlots=[];this._videoPlayerNonTemporalSlots=[];this._siteSectionNonTemporalSlots=[];this._profileParameters={};this._ads=[];this._siteSectionCustomId=a.Util.getObject("siteSection.customId",b)||"";this._adRenderers=[];var d,f,g;f=a.Util.getObject("parameters",b)||[];for(d=0;d<f.length;++d)g=f[d],this._profileParameters[g.name]=g.value;this._adRenderers=a.Util.getObject("rendererManifest.adRenderers.adRenderer",
	b)||[];for(d=0;d<this._adRenderers.length;d++)if("undefined"!==typeof this._adRenderers[d].adUnit)this._adRenderers[d].baseUnit=this._adRenderers[d].adUnit,delete this._adRenderers[d].adUnit;f=a.Util.getObject("ads.ads",b)||[];for(d=0;d<f.length;++d)g=new a.Ad(this._context),g.parse(f[d]),this._ads.push(g);f=a.Util.getObject("siteSection.videoPlayer.videoAsset.adSlots",b)||[];for(d=0;d<f.length;++d)g=new a.Slot(this._context),g.setType(a.SLOT_TYPE_TEMPORAL),g.setBase(c),g.parse(f[d]),this._temporalSlots.push(g);
	f=a.Util.getObject("siteSection.videoPlayer.adSlots",b)||[];for(d=0;d<f.length;++d)g=new a.Slot(this._context),g.setType(a.SLOT_TYPE_VIDEOPLAYER_NONTEMPORAL),g.setTimePositionClass(a.TIME_POSITION_CLASS_DISPLAY),g.parse(f[d]),this._initSlotData(g),this._videoPlayerNonTemporalSlots.push(g);f=a.Util.getObject("siteSection.adSlots",b)||[];for(d=0;d<f.length;++d)g=new a.Slot(this._context),g.setType(a.SLOT_TYPE_SITESECTION_NONTEMPORAL),g.setTimePositionClass(a.TIME_POSITION_CLASS_DISPLAY),g.parse(f[d]),
	this._initSlotData(g),this._siteSectionNonTemporalSlots.push(g);this._context._videoAsset.parse(a.Util.getObject("siteSection.videoPlayer.videoAsset",b)||{})},getCreativeRendition:function(a,c,d,f){return(a=this.getCreative(a,c))?a.getCreativeRendition(d,f):null},getCreative:function(a,c){var d=this.getAd(a);return d?d.getCreative(c):null},getAd:function(a){for(var c=0;c<this._ads.length;c++){var d=this._ads[c];if(d.getId()===a)return d}return null},getTemporalSlots:function(){return this._temporalSlots},
	getSiteSectionNonTemporalSlots:function(){return this._siteSectionNonTemporalSlots},getVideoPlayerNonTemporalSlots:function(){return this._videoPlayerNonTemporalSlots},getSiteSectionCustomId:function(){return this._siteSectionCustomId},getSlotByCustomId:function(b){for(var c=0;c<this._temporalSlots.length;++c)if(this._temporalSlots[c].getCustomId()===b)return this._temporalSlots[c];for(c=0;c<this._videoPlayerNonTemporalSlots.length;++c)if(this._videoPlayerNonTemporalSlots[c].getCustomId()===b)return this._videoPlayerNonTemporalSlots[c];
	for(c=0;c<this._siteSectionNonTemporalSlots.length;++c)if(this._siteSectionNonTemporalSlots[c].getCustomId()===b)return this._siteSectionNonTemporalSlots[c];a.warn("getSlotByCustomId(): not found",b);return null},_initSlotData:function(b){for(var c=!1,d=0;d<this._context._adRequest._slotScanner._knownSlots.length;d++){var f=this._context._adRequest._slotScanner._knownSlots[d];if(b.getCustomId()===f.id&&f.element){b.setWidth(f.width);b.setHeight(f.height);b.setBase(f.element);c=!0;break}}c||a.warn("Failed to init slot "+
	b.getCustomId());return c}});a.Capabilities=function(){this._capabilities={};this.init()};a.Capabilities.prototype={init:function(){for(var b=[a.CAPABILITY_SLOT_TEMPLATE,a.CAPABILITY_MULTIPLE_CREATIVE_RENDITIONS,a.CAPABILITY_FALLBACK_UNKNOWN_ASSET,a.CAPABILITY_FALLBACK_UNKNOWN_SITE_SECTION,a.CAPABILITY_FALLBACK_ADS,a.CAPABILITY_SLOT_CALLBACK,a.CAPABILITY_NULL_CREATIVE,a.CAPABILITY_AUTO_EVENT_TRACKING,a.CAPABILITY_RENDERER_MANIFEST],c=0;c<b.length;c++)this._capabilities[b[c]]=a.CAPABILITY_STATUS_ON},
	setCapability:function(a,c){this._capabilities[a]=c},getCapability:function(a){return this._capabilities[a]},parseCapabilities:function(b){var c="",d;for(d in this._capabilities)if(this._capabilities.hasOwnProperty(d)){switch(this._capabilities[d]){case a.CAPABILITY_STATUS_ON:c+="+"+d;break;case a.CAPABILITY_STATUS_OFF:c+="-"+d}b=b.replace(RegExp("(%2B|-|\\+)"+d,"g"),"")}c=encodeURIComponent(c);return b=-1<b.indexOf("flag=")?b.replace(/flag=/,"flag="+c):b+("&flag="+c)}};a.ContentVideoExtension=function(b){function c(){a.debug("ContentVideoExtension: EVENT_CONTENT_VIDEO_PAUSE_REQUEST pausing content video",
	i.src);q=i.currentTime;i.pause()}function d(){a.debug("ContentVideoExtension: EVENT_CONTENT_VIDEO_RESUME_REQUEST resume content video",i.src);if(l._videoAsset&&(null==l._videoAsset._state||l._videoAsset._state===a.VIDEO_STATE_COMPLETED))a.warn("ContentVideoExtension: video state is uninitialized or completed, skip resume.");else if(a.log("ContentVideoExtension: resume content video"),i.play(),a.PLATFORM_AUTO_SEEK_AFTER_MIDROLL){var b=l.getParameter(a.PARAMETER_EXTENSION_CONTENT_VIDEO_AUTO_SEEK_BACK);
	null==b&&(b="true");!1!==a.Util.str2bool(b)&&(p&&(i.removeEventListener("timeupdate",p,!1),p=null),p=function(){if(!(0>=i.currentTime||0>=i.seekable.length))if(i.removeEventListener("timeupdate",p,!1),p=null,0<i.currentTime&&1>i.currentTime&&1<q){a.log("ContentVideoExtension: seeking to original time",q);try{i.currentTime=q}catch(b){a.warn("ContentVideoExtension: seek error")}}},i.addEventListener("timeupdate",p,!1))}}function f(b){switch(b.slot.getTimePositionClass()){case a.TIME_POSITION_CLASS_PREROLL:case a.TIME_POSITION_CLASS_POSTROLL:a.debug("ContentVideoExtension: store current content video src",
	i.src),n=i.src,u=i.controls,i.paused||i.pause()}}function g(b){b=b.slot.getTimePositionClass();switch(b){case a.TIME_POSITION_CLASS_PREROLL:case a.TIME_POSITION_CLASS_POSTROLL:a.debug("ContentVideoExtension: restore content video src to",n);if(i.src!==n)i.src=n;i.controls=u;b===a.TIME_POSITION_CLASS_PREROLL&&i.load()}}function h(b,c){var d=l.getParameter(b);null==d&&(d=c);return a.Util.str2bool(d)}var j=!0,k=!0,l=b,i=b.getContentVideoElement(),q=0,p=null,n=null,u=null;return{start:function(){a.debug("ContentVideoExtension.start()");
	j=h(a.PARAMETER_EXTENSION_CONTENT_VIDEO_RESPOND_PAUSE_RESUME,!0);k=h(a.PARAMETER_EXTENSION_CONTENT_VIDEO_AUTO_SOURCE_RESTORE,!0);j&&(a.debug("ContentVideoExtension: enabling content video pause resume request handling."),l.addEventListener(a.EVENT_CONTENT_VIDEO_PAUSE_REQUEST,c),l.addEventListener(a.EVENT_CONTENT_VIDEO_RESUME_REQUEST,d));k&&(a.debug("ContentVideoExtension: enabling content video source management."),l.addEventListener(a.EVENT_SLOT_STARTED,f),l.addEventListener(a.EVENT_SLOT_ENDED,g))},
	dispose:function(){a.debug("ContentVideoExtension.dispose()");l&&(l.removeEventListener(a.EVENT_CONTENT_VIDEO_PAUSE_REQUEST,c),l.removeEventListener(a.EVENT_CONTENT_VIDEO_RESUME_REQUEST,d),l.removeEventListener(a.EVENT_SLOT_STARTED,f),l.removeEventListener(a.EVENT_SLOT_ENDED,g),i&&p&&(i.removeEventListener("timeupdate",p,!1),p=null),l=null);i=null}}};a._instanceCounter=0;a._instanceQueue={};a.Context=function(b){this._adManager=b;this._adRequest=new a.AdRequest(this);this._adResponse=null;this._videoAsset=
	new a.VideoAsset(this);this._temporalSlotBase=null;this._videoDisplaySize={};this._globalLevelParameterDictionary={};this._overrideLevelParameterDictionary={};this._rendererManifest={};this._overriddenAdRenderers=[];this._eventDispatcher=new a.EventDispatcher;this._requestState=0;this._adControlExtension=new a.AdControlExtension(this);this._surveyExtension=new a.SurveyExtension(this);this._videoStateExtension=new a.VideoStateExtension(this);this._totalSetDisplaySizeCount=this._autoSetDisplaySizeCount=
	0;this._instanceId=a._instanceCounter;a._instanceQueue["Context_"+a._instanceCounter]=this;a._instanceCounter++;this._contentVideoAttached=!1;this._currentContentPlayheadTime=0};a.Context.prototype={addRenderer:function(a,c,d,f,g,h,j){this._overriddenAdRenderers.push({url:a,baseUnit:c,contentType:d,creativeApi:h,slotType:f,soAdUnit:g,parameter:j})},setCapability:function(b,c){a.debug("Context.setCapability",b,c);this._adRequest.setCapability(b,c)},addKeyValue:function(b,c){a.debug("Context.addKeyValue",
	b,c);this._adRequest.addKeyValue(b,c)},setParameter:function(b,c,d){a.debug("Context.setParameter",b,c,d);var f=null;if(d===a.PARAMETER_LEVEL_GLOBAL)f=this._globalLevelParameterDictionary;else if(d===a.PARAMETER_LEVEL_OVERRIDE)f=this._overrideLevelParameterDictionary;else return;null==c?delete f[b]:f[b]=c},getParameter:function(a){return!a?null:this._overrideLevelParameterDictionary.hasOwnProperty(a)?this._overrideLevelParameterDictionary[a]:this._adResponse&&this._adResponse._profileParameters.hasOwnProperty(a)?
	this._adResponse._profileParameters[a]:this._globalLevelParameterDictionary.hasOwnProperty(a)?this._globalLevelParameterDictionary[a]:null},setVideoState:function(b){a.debug("Context.setVideoState",b);this._videoAsset.setVideoState(b)},registerVideoDisplayBase:function(b){a.debug("Context.registerVideoDisplayBase",b);if(!b||"string"!==typeof b)a.warn("Context.registerVideoDisplayBase","id required");else if(this._temporalSlotBase=document.getElementById(b)){var c=this._temporalSlotBase.getElementsByTagName("video");
	0===c.length?(a.warn("Context.registerVideoDisplayBase","could not get video element from",b),this._temporalSlotBase=null):(this._temporalSlotBase._fw_contentVideo=c[0],this._setVideoDisplaySizeByContentVideo(c[0]),this._startContentVideoExtension())}else a.warn("Context.registerVideoDisplayBase","could not get element",b)},setContentVideoElement:function(b){a.debug("Context.setContentVideoElement()");!b||!b.parentNode?a.warn("Context.setContentVideoElement","contentVideo and contentVideo.parentNode is required"):
	(this._temporalSlotBase=b.parentNode,this._temporalSlotBase._fw_contentVideo=b,this._setVideoDisplaySizeByContentVideo(b),this._startContentVideoExtension())},getContentVideoElement:function(){return!this._temporalSlotBase?(a.warn("SlotBase is null"),null):this._temporalSlotBase._fw_contentVideo},setVideoDisplaySize:function(b,c,d,f,g){a.debug("Context.setVideoDisplaySize("+Array.prototype.slice.call(arguments).join(",")+")");this._totalSetDisplaySizeCount++;this._videoDisplaySize={left:b,top:c,width:d,
	height:f,position:g}},getVideoDisplaySize:function(){function a(b){b=parseInt(b,10);isNaN(b)&&(b=0);return b}this._videoDisplaySize.left=a(this._videoDisplaySize.left);this._videoDisplaySize.right=a(this._videoDisplaySize.right);this._videoDisplaySize.width=a(this._videoDisplaySize.width);this._videoDisplaySize.height=a(this._videoDisplaySize.height);return this._videoDisplaySize},setVideoDisplayCompatibleSizes:function(b){a.debug("Context.setVideoDisplayCompatibleSizes",b);this._adRequest.setVideoDisplayCompatibleSizes(b)},
	setProfile:function(b){a.debug("Context.setProfile",b);this._adRequest.setProfile(b)},setVideoAsset:function(b,c,d,f,g,h,j,k){a.debug("Context.setVideoAsset("+Array.prototype.slice.call(arguments).join(",")+")");this._videoAsset.setVideoAsset(b,c,d,f,g,h,j,k)},setSiteSection:function(b,c,d,f,g){a.debug("Context.setSiteSection("+Array.prototype.slice.call(arguments).join(",")+")");this._adRequest.setSiteSection(b,c,d,f,g)},setVisitor:function(b){a.debug("Context.setVisitor("+Array.prototype.slice.call(arguments).join(",")+
	")");this._adRequest.setVisitor(b)},addTemporalSlot:function(b,c,d,f,g){a.debug("Context.addTemporalSlot("+Array.prototype.slice.call(arguments).join(",")+")");this._adRequest.addTemporalSlot(b,c,d,f,g)},getTemporalSlots:function(){return this._adResponse?this._adResponse._temporalSlots.slice():[]},getSlotByCustomId:function(a){return this._adResponse?this._adResponse.getSlotByCustomId(a):null},getSlotsByTimePositionClass:function(a){var c=[];if(this._adResponse)for(var d=0;d<this._adResponse._temporalSlots.length;d++)this._adResponse._temporalSlots[d].getTimePositionClass()===
	a&&c.push(this._adResponse._temporalSlots[d]);return c},submitRequest:function(b){a.debug("Context.submitRequest",b);if(this._requestState)a.warn("Context.submitRequest: request already submitted");else if(a.Util.isBlank(this._adManager._serverURL))a.warn("Context.submitRequest: serverURL is not set");else{this._requestState=1;this._adRequest.scanPageSlots();if(this.getParameter(a.PARAMETER_ENABLE_FORM_TRANSPORT))a.debug("Context.submitRequest: enabling Safari transport mechanism globally"),a.PLATFORM_SEND_REQUEST_BY_FORM=
	!0;var c=this._adManager._serverURL;".js"!==c.substring(c.length-3,c.length)&&(c=this._adRequest.generateTypeBRequestUrl());var d=this;if("number"!==typeof b||0>=b||!b)b=5;setTimeout(function(){1===d._requestState&&(a.warn("Context.submitRequest: request timeout"),d.requestComplete(null))},1E3*b);a.log("Context.submitRequest: sending request to",c,"timeout",b);a.PLATFORM_SEND_REQUEST_BY_FORM?(a.debug("Context.submitRequest:","use json2"),a.Util.pingURLWithForm(c,this._instanceId,!0),d._onMessagePosted=
	function(a){"object"===typeof a.data&&a.data.hasOwnProperty("cbfn")&&-1<a.data.cbfn.indexOf("['Context_"+d._instanceId+"']")&&d.requestComplete(a.data.response)},window.addEventListener("message",d._onMessagePosted,!1)):a.Util.pingURLWithScript(c)}},requestComplete:function(b){if(1!==this._requestState)a.warn("ad request complete after timeout"),this.dispatchEvent(a.EVENT_REQUEST_COMPLETE,{success:!1});else{this._requestState=2;a.debug("Context.requestComplete");if(a.PLATFORM_SEND_REQUEST_BY_FORM){window.removeEventListener("message",
	this._onMessagePosted,!1);var c=document.getElementById("_fw_request_iframe_"+this._instanceId);document.body.removeChild(c)}if(null!==b){this._adControlExtension.start();this._surveyExtension.start();a._instanceQueue["Context_"+this._instanceId]=null;this._adResponse=new a.AdResponse(this);this._adResponse.parse(b,this._temporalSlotBase);a.log("Ad request succeeded");this._videoStateExtension.start();this.dispatchEvent(a.EVENT_REQUEST_COMPLETE,{success:!0,response:b});c=this._adResponse.getSiteSectionNonTemporalSlots();
	for(b=0;b<c.length;++b)a.log("Auto play site section nonTemporal slots"),c[b].play();c=this._adResponse.getVideoPlayerNonTemporalSlots();for(b=0;b<c.length;++b)a.log("Auto play video player nonTemporal slots"),c[b].play()}else a.warn("Ad request failed"),this.dispatchEvent(a.EVENT_REQUEST_COMPLETE,{success:!1})}},addEventListener:function(b,c){a.debug("Context.addEventListener",b);this._eventDispatcher.addEventListener(b,c)},removeEventListener:function(b,c){a.debug("Context.removeEventListener",
	b);this._eventDispatcher.removeEventListener(b,c)},dispatchEvent:function(b,c){a.log("Context.dispatchEvent",b);if(b===a.EVENT_SLOT_STARTED){var d=c.slot.getTimePositionClass();if(d===a.TIME_POSITION_CLASS_PREROLL||d===a.TIME_POSITION_CLASS_MIDROLL||d===a.TIME_POSITION_CLASS_POSTROLL)this._contentVideoAttached=!0,this._markCurrentContentPlayheadTime()}else if(b===a.EVENT_SLOT_ENDED&&(d=c.slot.getTimePositionClass(),d===a.TIME_POSITION_CLASS_PREROLL||d===a.TIME_POSITION_CLASS_MIDROLL||d===a.TIME_POSITION_CLASS_POSTROLL))this._contentVideoAttached=
	!1;c=c||{};c.type=b;c.target=this;this._eventDispatcher.dispatchEvent(c)},dispose:function(){a.debug("Context.dispose");this.setVideoState(a.VIDEO_STATE_STOPPED);if(this._adResponse){if(this._contentVideoExtension)this._contentVideoExtension.dispose(),this._contentVideoExtension=null;this._adControlExtension.dispose();this._surveyExtension.dispose();this._videoStateExtension.dispose();for(var b=0,c=this._adResponse._temporalSlots||[];b<c.length;++b){var d=c[b];if(d._onContentVideoTimeUpdate)d.getBase()._fw_contentVideo.removeEventListener("timeupdate",
	d._onContentVideoTimeUpdate,!1),d._onContentVideoTimeUpdate=null}}},_markCurrentContentPlayheadTime:function(){var a=this._temporalSlotBase._fw_contentVideo.currentTime;if(0<a)this._currentContentPlayheadTime=a},_getContentPlayheadTime:function(){var a=-1;if(!this._contentVideoAttached)a=this._temporalSlotBase._fw_contentVideo.currentTime;return 0<a?a:this._currentContentPlayheadTime},_setVideoDisplaySizeByContentVideo:function(a){if(this._autoSetDisplaySizeCount===this._totalSetDisplaySizeCount){var c=
	a.style.left,d=a.style.top,f=a.offsetWidth?a.offsetWidth:a.style.pixelWidth,g=a.offsetHeight?a.offsetHeight:a.style.pixelHeight,a=a.style.position;this._autoSetDisplaySizeCount++;this.setVideoDisplaySize(c,d,f,g,a)}},_startContentVideoExtension:function(){var b=this.getParameter(a.PARAMETER_EXTENSION_CONTENT_VIDEO_ENABLED);null==b&&(b="true");!1===a.Util.str2bool(b)?a.log("Content Video Extension disabled"):this._temporalSlotBase?(this._contentVideoExtension&&this._contentVideoExtension.dispose(),
	this._contentVideoExtension=new a.ContentVideoExtension(this),this._contentVideoExtension.start()):a.warn("SlotBase is null")}};a.Context.prototype.constructor=a.Context;a.EventCallback=function(a){this._url=this._name=this._type=null;this._showBrowser=!1;this._trackingUrls=[];this._adInstance=this._slot=null;this._context=a};a.EventCallback.prototype={};a.EventCallback.prototype.constructor=a.EventCallback;a.EventCallback.getEventCallback=function(b,c,d){for(var f,g=0;g<b.length;g++)if(f=b[g],f._name===
	c&&f._type===d)return f;for(g=0;g<b.length;g++)if(f=b[g],f._type===a.EVENT_TYPE_GENERIC){if(c=a.EventCallback.newEventCallback(f._context,c,d))c._url=f._url,c._slot=f._slot,c._adInstance=f._adInstance,b.push(c);return c}return null};a.EventCallback.newEventCallback=function(b,c,d){var f=null;if(d===a.EVENT_TYPE_GENERIC)f=new a.EventCallback(b);else if(d===a.EVENT_TYPE_ERROR)f=new a.ErrorEventCallback(b);else if(d===a.EVENT_TYPE_CLICK)f=new a.AdClickEventCallback(b);else if(d===a.EVENT_TYPE_STANDARD)f=
	new a.AdStandardEventCallback(b);else if(c===a.EVENT_SLOT_IMPRESSION||c===a.EVENT_SLOT_END)f=new a.SlotImpressionEventCallback(b);else if(c===a.EVENT_AD_IMPRESSION||c===a.EVENT_AD_IMPRESSION_END)f=new a.AdImpressionEventCallback(b);else if(c===a.EVENT_VIDEO_VIEW)f=new a.VideoViewEventCallback(b);else if(c===a.EVENT_RESELLER_NO_AD)f=new a.ResellerNoAdEventCallback(b);else if(c===a.EVENT_AD_FIRST_QUARTILE||c===a.EVENT_AD_MIDPOINT||c===a.EVENT_AD_THIRD_QUARTILE||c===a.EVENT_AD_COMPLETE)f=new a.AdQuartileEventCallback(b);
	else return null;f._name=c;f._type=d;return f};a.EventCallback.getShortType=function(b){var c="";switch(b){case a.EVENT_TYPE_IMPRESSION:c=a.SHORT_EVENT_TYPE_IMPRESSION;break;case a.EVENT_TYPE_CLICK:c=a.SHORT_EVENT_TYPE_CLICK;break;case a.EVENT_TYPE_STANDARD:c=a.SHORT_EVENT_TYPE_STANDARD;break;case a.EVENT_TYPE_ERROR:c=a.SHORT_EVENT_TYPE_ERROR}return c};a.Util.mixin(a.EventCallback.prototype,{parse:function(a){if(a){this._usage=a.use;this._type=a.type;this._name=a.name;this._url=a.url;this._showBrowser=
	a.showBrowser;this._trackingUrls=[];for(var c=0,a=a.trackingUrls||[];c<a.length;c++)this._trackingUrls.push(a[c].value)}},copy:function(){var a=new this.constructor(this._context);a._type=this._type;a._name=this._name;a._url=this._url;a._showBrowser=this._showBrowser;a._trackingUrls=this._trackingUrls.slice();a._slot=this._slot;a._adInstance=this._adInstance;return a},getUrl:function(){var b=this._replaceMacrosInUrl(this._url),b=a.Util.setParameterInURL(b,a.URL_PARAMETER_KEY_ET,a.EventCallback.getShortType(this._type)),
	b=a.Util.setParameterInURL(b,a.URL_PARAMETER_KEY_CN,this._name);this._adInstance&&0<this._adInstance._creativeRenditionId&&(b=a.Util.setParameterInURL(b,a.URL_PARAMETER_KEY_CREATIVE_RENDITION_ID,this._adInstance._creativeRenditionId));return b},getTrackingUrls:function(){var b=this._trackingUrls;if(this._adInstance){var c=this._type;if(c===a.EVENT_TYPE_CLICK)c=a.EVENT_TYPE_CLICK_TRACKING;b=b.concat(this._adInstance.getExternalEventCallbackUrls(this._name,c))}for(var c=[],d=0;d<b.length;d++){var f=
	a.Util.trim(this._replaceMacrosInUrl(b[d]));a.Util.isBlank(f)||c.push(f)}return c},process:function(b){b=b||{};this._processTrackingUrls();a.Util.pingURL(this.getUrl(b))},_processTrackingUrls:function(){this._shouldSkipSendingTrackingAndExternalUrls()||a.Util.pingURLs(this.getTrackingUrls())},_shouldSkipSendingTrackingAndExternalUrls:function(){return!1},_needEmptyCT:function(b){var c=!1;b&&!0===b[a.INFO_KEY_NEED_EMPTY_CT]&&(c=!0);return c},_getAdPlayheadTime:function(){var a=-1;this._adInstance&&
	(a=this._adInstance.getPlayheadTime());return a},_getCreativeAssetLocation:function(){var a=null;this._adInstance&&this._adInstance.getActiveCreativeRendition()&&this._adInstance.getActiveCreativeRendition().getPrimaryCreativeRenditionAsset()&&(a=this._adInstance.getActiveCreativeRendition().getPrimaryCreativeRenditionAsset().getUrl());return a},_getParameter:function(a){var c=null;return c=this._adInstance?this._adInstance._rendererController.getParameter(a):this._slot?this._slot.getParameter(a):
	this._context.getParameter(a)},_replaceMacrosInUrl:function(b){if(a.Util.isBlank(b))return b;var b=b.replace(/#(ce?)\{([^\}]+)\}/g,a.Util.bind(this,function(b,c,g){b="ce"===c;c=null;switch(g){case "ad.playheadTime":g=this._getAdPlayheadTime();c=0<=g?Math.round(g)+"":"";break;case "content.playheadTime":g=this._context._getContentPlayheadTime();c=0<=g?Math.round(g)+"":"";break;case "creative.assetLocation":c=this._getCreativeAssetLocation();break;default:0===g.indexOf("parameter.")&&(c=this._getParameter(g.substr(10)))}a.Util.isBlank(c)&&
	(c="");return b?encodeURIComponent(c):c})),c=a.Util.getParameterInURL(b,a.URL_PARAMETER_KEY_CR);a.Util.isBlank(c)||(b=a.Util.setParameterInURL(b,a.URL_PARAMETER_KEY_CR,this._replaceMacrosInUrl(c)));return b}});a.AdClickEventCallback=function(b){a.EventCallback.call(this,b)};a.AdClickEventCallback.prototype=new a.EventCallback;a.AdClickEventCallback.prototype.constructor=a.AdClickEventCallback;a.Util.mixin(a.AdClickEventCallback.prototype,{getUrl:function(b){var c=a.EventCallback.prototype.getUrl.call(this,
	b);b[a.INFO_KEY_URL]&&(a.Util.isParameterInURL(c,a.URL_PARAMETER_KEY_CR)||(c=c+"&"+a.URL_PARAMETER_KEY_CR+"="),c=a.Util.setParameterInURL(c,a.URL_PARAMETER_KEY_CR,b[a.INFO_KEY_URL]));return c},process:function(b){var b=b||{},c=this.getUrl(b),d=!0===this._showBrowser,d=b.hasOwnProperty(a.INFO_KEY_SHOW_BROWSER)?!0===b[a.INFO_KEY_SHOW_BROWSER]:d;b[a.INFO_KEY_URL]&&(d=!0);d&&!a.Util.isBlank(c)?(window.open(c),this._processTrackingUrls()):a.EventCallback.prototype.process.call(this,b)}});a.AdImpressionEventCallback=
	function(b){a.EventCallback.call(this,b)};a.AdImpressionEventCallback.prototype=new a.EventCallback;a.AdImpressionEventCallback.prototype.constructor=a.AdImpressionEventCallback;a.Util.mixin(a.AdImpressionEventCallback.prototype,{_shouldSkipSendingTrackingAndExternalUrls:function(){return this._getInitValue()!==a.INIT_VALUE_ONE},_getInitValue:function(){return this._adInstance.getSlot().isPauseSlot()||!this._processed?a.INIT_VALUE_ONE:a.INIT_VALUE_TWO},getUrl:function(b){var c=a.EventCallback.prototype.getUrl.call(this,
	b),c=a.Util.setParameterInURL(c,a.URL_PARAMETER_KEY_METR,this._adInstance._metr);this._name!==a.EVENT_AD_IMPRESSION&&(c=a.Util.setParameterInURL(c,a.URL_PARAMETER_KEY_CT,this._needEmptyCT(b)?"":this._adInstance._timer.tick()));return c=a.Util.setParameterInURL(c,a.URL_PARAMETER_KEY_INIT,this._getInitValue())},process:function(b){if(a.MODULE_TYPE_TRANSLATOR!==this._adInstance.getRendererController().getRenderer().info()[a.INFO_KEY_MODULE_TYPE])a.EventCallback.prototype.process.call(this,b),this._processed=
	!0}});a.AdQuartileEventCallback=function(b){a.EventCallback.call(this,b)};a.AdQuartileEventCallback.prototype=new a.EventCallback;a.AdQuartileEventCallback.prototype.constructor=a.AdQuartileEventCallback;a.Util.mixin(a.AdQuartileEventCallback.prototype,{getUrl:function(b){var c=a.EventCallback.prototype.getUrl.call(this,b),c=a.Util.setParameterInURL(c,a.URL_PARAMETER_KEY_METR,this._adInstance._metr);return c=a.Util.setParameterInURL(c,a.URL_PARAMETER_KEY_CT,this._needEmptyCT(b)?"":this._adInstance._timer.tick())},
	process:function(b){if(!this._processed)a.EventCallback.prototype.process.call(this,b),this._processed=!0}});a.AdStandardEventCallback=function(b){a.EventCallback.call(this,b)};a.AdStandardEventCallback.prototype=new a.EventCallback;a.AdStandardEventCallback.prototype.constructor=a.AdStandardEventCallback;a.ErrorEventCallback=function(b){a.EventCallback.call(this,b)};a.ErrorEventCallback.prototype=new a.EventCallback;a.ErrorEventCallback.prototype.constructor=a.ErrorEventCallback;a.Util.mixin(a.ErrorEventCallback.prototype,
	{getUrl:function(b){var c=a.EventCallback.prototype.getUrl.call(this,b),d=b[a.INFO_KEY_ERROR_CODE];if(!d)d=a.ERROR_UNKNOWN;var f=b[a.INFO_KEY_ERROR_INFO];f||(f="");(b=b[a.INFO_KEY_ERROR_MODULE])||(b="");c=a.Util.setParameterInURL(c,a.URL_PARAMETER_KEY_CN,d);return c=a.Util.setParameterInURL(c,a.URL_PARAMETER_KEY_KEY_VALUE,encodeURIComponent(a.URL_PARAMETER_KEY_ERROR_MODULE)+"="+encodeURIComponent(b)+"&"+encodeURIComponent(a.URL_PARAMETER_KEY_ERROR_INFO)+"="+a.PLATFORM_ID+"/"+encodeURIComponent(f))}});
	a.ResellerNoAdEventCallback=function(b){a.EventCallback.call(this,b)};a.ResellerNoAdEventCallback.prototype=new a.EventCallback;a.ResellerNoAdEventCallback.prototype.constructor=a.ResellerNoAdEventCallback;a.Util.mixin(a.ResellerNoAdEventCallback.prototype,{});a.SlotImpressionEventCallback=function(b){a.EventCallback.call(this,b)};a.SlotImpressionEventCallback.prototype=new a.EventCallback;a.SlotImpressionEventCallback.prototype.constructor=a.SlotImpressionEventCallback;a.Util.mixin(a.SlotImpressionEventCallback.prototype,
	{_shouldSkipSendingTrackingAndExternalUrls:function(){return this._getInitValue()!==a.INIT_VALUE_ONE},_getInitValue:function(){return this._slot.isPauseSlot()||!this._processed?a.INIT_VALUE_ONE:a.INIT_VALUE_TWO},getUrl:function(b){b=a.EventCallback.prototype.getUrl.call(this,b);return b=a.Util.setParameterInURL(b,a.URL_PARAMETER_KEY_INIT,this._getInitValue())},process:function(b){a.EventCallback.prototype.process.call(this,b);this._processed=!0}});a.VideoViewEventCallback=function(b){a.EventCallback.call(this,
	b)};a.VideoViewEventCallback.prototype=new a.EventCallback;a.VideoViewEventCallback.prototype.constructor=a.VideoViewEventCallback;a.Util.mixin(a.VideoViewEventCallback.prototype,{_shouldSkipSendingTrackingAndExternalUrls:function(){return this._getInitValue()!==a.INIT_VALUE_ONE},_getInitValue:function(){return!this._processed?a.INIT_VALUE_ONE:a.INIT_VALUE_ZERO},_getCTValue:function(){return this._context._videoAsset.getPlayheadTime()},getUrl:function(b){b=a.EventCallback.prototype.getUrl.call(this,
	b);b=a.Util.setParameterInURL(b,a.URL_PARAMETER_KEY_INIT,this._getInitValue());return b=a.Util.setParameterInURL(b,a.URL_PARAMETER_KEY_CT,this._getCTValue())},_shouldSkipSendingTrackingAndExternalUrls:function(){return this._processed},process:function(b){a.EventCallback.prototype.process.call(this,b);this._processed=!0}});a.EventDispatcher=function(){this._listeners={}};a.EventDispatcher.prototype={addEventListener:function(a,c){"undefined"===typeof this._listeners[a]&&(this._listeners[a]=[]);this._listeners[a].push(c)},
	dispatchEvent:function(b){"string"===typeof b&&(b={type:b});if(!b.target)b.target=this;if(b.type&&this._listeners[b.type]instanceof Array)for(var c=this._listeners[b.type],d=0,f=c.length;d<f;d++)try{c[d]&&c[d].call(this,b)}catch(g){a.warn("EventDispatcher.dispatchEvent",b.type,g)}},removeEventListener:function(a,c){if(this._listeners[a]instanceof Array){var d=this._listeners[a];if(null==c)this._listeners[a]=[];else for(var f=0,g=d.length;f<g;f++)if(d[f]===c){d.splice(f,1);break}}}};a.EventDispatcher.prototype.constructor=
	a.EventDispatcher;a.Hash=function(){this._keys=[];this._dictionary={}};a.Hash.prototype={};a.Hash.prototype.constructor=a.Hash;a.Util.mixin(a.Hash.prototype,{setKeyValue:function(a,c,d){a&&(this._dictionary.hasOwnProperty(a)||(0===d?this._keys.unshift(a):this._keys.push(a)),this._dictionary[a]=c)},move:function(a){for(var c=0;c<this._keys.length;c++){var d=this._keys[c];if(d===a){this._keys.splice(c,1);this._keys.push(d);break}}},getValue:function(a){return this._dictionary[a]}});a.HTMLAdGenerator=
	{log:function(b){a.log("HTMLAdGenerator\t"+b)},getExtension:function(a){return!a?"":(a=a.match(/^[^?]+\/[^?.]*(\.\w+)+/))?a[a.length-1].slice(1):""},generateAd:function(b,c,d,f,g,h,j){a.HTMLAdGenerator.log("generatorAd("+[].slice.call(arguments,0).join(",")+")");var k=h,l=!1;null==k&&(l=!0,k=a.HTMLAdGenerator.getExtension(b).toLowerCase());switch(k){case "jpeg":case "jpg":case "gif":case "png":case "image/jpeg":case "image/jpg":case "image/gif":case "image/png":case "image/bmp":k=a.HTMLAdGenerator.generateImageHTML(b,
	c);break;case "swf":case "application/x-shockwave-flash":k=a.HTMLAdGenerator.generateFlashHTML(b,c,d,f,g);break;case "script":case "js":case "text/javascript":case "text/js_ref":case "application/x-javascript":k=a.HTMLAdGenerator.generateScriptHTML(b,d,f,g);break;case "iframe":case "html":case "htm":case "text/html":case "text/html_doc_ref":case "text/html_lit_nowrapper":case "text/html_doc_lit_mobile":k=a.HTMLAdGenerator.generateIFrameHTML(b,c,d,f,g);break;default:k=l?a.HTMLAdGenerator.generateIFrameHTML(b,
	c,d,f,g):a.HTMLAdGenerator.generateAd(b,c,d,f,g,null,j)}return"text/html_doc_lit_mobile"===j?a.HTMLAdGenerator.htmlLitToHTMLDocLitMobile(k):k},generateImageHTML:function(b,c){a.HTMLAdGenerator.log("generateImageHTML");var d=null;return c?'<a href="'+c+'" target="_blank"><img src="'+b+'" border="0" /></a>':'<img src="'+b+'" border="0" />'},generateFlashHTML:function(b,c,d,f,g){a.HTMLAdGenerator.log("generateFlashHTML");var h=b;c&&0<c.length&&(h+=-1===b.indexOf("?")?"?":"&",h+="clickTag="+encodeURIComponent(c));
	return'<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"WIDTH="'+f+'" HEIGHT="'+g+'" id="'+d+'_external_ad">'+('<PARAM NAME=movie VALUE="'+h+'"/>')+'<PARAM NAME=quality VALUE=high/><PARAM NAME=bgcolor VALUE=#FFFFFF/><PARAM NAME="allowScriptAccess" VALUE="always"/><PARAM NAME="loop" VALUE="true"/>'+('<EMBED src="'+h+'" ')+('quality=high bgcolor=#FFFFFF WIDTH="'+f+'" HEIGHT="'+g+'"NAME="'+d+'_external_video" ALIGN="" TYPE="application/x-shockwave-flash"PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer"></EMBED></OBJECT>')},
	generateIFrameHTML:function(b,c,d,f,g){a.HTMLAdGenerator.log("generateIFrameHTML");return'<iframe height="'+g+'" width="'+f+'" frameborder="0" scrolling="no" allowtransparency="true" leftmargin="0" rightmargin="0" marginwidth="0" marginheight="0" src="'+b+'"></iframe>'},docLitToHTMLLit:function(b,c,d,f){a.HTMLAdGenerator.log("docLitToHTMLLit");return'<iframe id="_fw_frame_'+c+'" width="'+d+'" height="'+f+'" marginwidth="0" marginheight="0" frameborder="0" scrolling="no"></iframe><script language="javascript" type="text/javascript" id="_fw_container_js_'+
	c+"\">if(!fw_targets) {var fw_targets = [];}var _fw_wr;var fw_scope = document;var fw_content = '"+a.Util.encodeToHex(b)+"';var trgtFrm = fw_scope.getElementById(\"_fw_frame_"+c+'");trgtFrm = (trgtFrm.contentWindow) ? trgtFrm.contentWindow : (trgtFrm.contentDocument.document) ? trgtFrm.contentDocument.document : trgtFrm.contentDocument;fw_targets["'+c+'"] = trgtFrm;if(navigator.userAgent.match(/\\bMSIE\\b/) || navigator.userAgent.match(/\\bOpera\\b/)){trgtFrm.document.open();trgtFrm.document.write(fw_content);setTimeout(function(){fw_close(fw_targets["'+
	c+'"])}, 7500);} else if (navigator.userAgent.match(/\\bFirefox\\b/)) {if(true && fw_content.length < 2000){var ec = escape(fw_content);var fw_iframe_url = "http://m2.feiwei.tv/g/lib/template/echo.html?s="+ec;fw_scope.getElementById("_fw_frame_'+c+'").src = fw_iframe_url;} else {trgtFrm.document.open();trgtFrm.document.write(fw_content);trgtFrm.document.close();}} else {trgtFrm.document.open();trgtFrm.document.write(fw_content);trgtFrm.document.close();}function fw_close(theFrame){theFrame.document.close();}<\/script>'},
	htmlLitToDocLit:function(b){a.HTMLAdGenerator.log("htmlLitToDocLit");return'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><title>Advertisement</title></head><body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">'+b+"</body></html>"},wrapUnsafeHTML:function(b,c,d,f){return a.HTMLAdGenerator.htmlLitToHTMLDocLitMobile(a.HTMLAdGenerator.docLitToHTMLLit(a.HTMLAdGenerator.htmlLitToDocLit(b),c,d,f))},wrapJSCode:function(b,
	c,d,f){return a.HTMLAdGenerator.wrapUnsafeHTML('<script language="javascript" type="text/javascript">'+b+"<\/script>",c,d,f)},generateScriptHTML:function(b,c,d,f){a.HTMLAdGenerator.log("generateScriptHTML");return a.HTMLAdGenerator.wrapUnsafeHTML('<script language="javascript" type="text/javascript" src="'+b+'"><\/script>',c,d,f)},htmlLitToHTMLDocLitMobile:function(b){a.HTMLAdGenerator.log("htmlLitToHTMLDocLitMobile");return'<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><meta name = "viewport" content = "initial-scale = 1.0, target-densitydpi = device-dpi" /><title>Advertisement</title><script type="text/javascript">window._fw_page_url = "";<\/script></head><body style="margin:0px;background-color:transparent;">'+
	b+"</body></html>"}};a.NullRenderer=function(){};a.NullRenderer.prototype={start:function(b){b.setCapability(a.EVENT_AD_CLICK,a.CAPABILITY_STATUS_OFF);b.handleStateTransition(a.RENDERER_STATE_STARTED);b.handleStateTransition(a.RENDERER_STATE_COMPLETED)},info:function(){return{moduleType:a.MODULE_TYPE_RENDERER}},getPlayheadTime:function(){return-1},getDuration:function(){return-1}};a.NullRenderer.prototype.constructor=a.NullRenderer;a.PageSlotScanner=function(){this._knownSlots=[];this._slots={};this._candidateAds=
	[]};a.PageSlotScanner.prototype={isSlotDuplicate:function(a){for(var c=0;c<this._knownSlots.length;++c)if(this._knownSlots[c].id===a)return!0;return!1},findPageSlotByScope:function(b){var c=b.document;if(c){var d,f=/(^|\s)_fwph(\s|$)/,g=c.getElementsByTagName("span");if(!b._fw_admanager)b._fw_admanager={};b._fw_admanager.pageScanState=!0;for(b=0;b<g.length;++b){var h;d=g[b];if(f.test(d.className)&&(d=d.getAttribute("id"),(h=c.getElementById("_fw_input_"+d))&&!this.isSlotDuplicate(d)))if(h=h.getAttribute("value")){";"!==
	h.charAt(h.length-1)&&(h+=";");h=h.split(";");var j=h[h.length-2],k=!1;-1!==j.search("lo=i")&&(k=!0);var l=!1;-1!==j.search("prct=")&&(l=!0);0>j.search("flag=")&&(j+="&flag=");0>j.search("ptgt=")&&(j="ptgt=s&"+j);h=[];for(var j=j.split("&"),i,q,p,n=0;n<j.length;++n)if(i=j[n].split("="),2===i.length){i[1]=decodeURIComponent(i[1]);if("ssct"===i[0])if(l)continue;else l=!0,i[0]="prct";"flag"===i[0]?(-1===i[1].search(/[-\+]cmpn/)&&(i[1]+="+cmpn"),"+"!==i[1].charAt(0)&&"-"!==i[1].charAt(0)&&(i[1]="+"+i[1]),
	k&&-1===i[1].search("-init")&&(i[1]+="-init"),-1!==i[1].search("-nrpl")&&(i[1]=i[1].replace("-nrpl","+cmpn"))):"w"===i[0]?q=Number(i[1]):"h"===i[0]?p=Number(i[1]):"cana"===i[0]&&this._addCandidateAds(i[1]);i=encodeURIComponent(i[0])+"="+encodeURIComponent(i[1]);h.push(i)}l||h.push("prct="+encodeURIComponent("text/html_doc_lit_mobile,text/html_doc_ref"));(k=c.getElementById("_fw_container_"+d))?(this._slots[d]=h.join("&")+";",this._knownSlots.push({id:d,width:q,height:p,element:k})):a.warn("Failed to find container for slot "+
	d)}}}},scanPageSlots:function(){for(var b=0;b<window.frames.length;++b)try{a.debug("scanPageSlots in frame",b),this.findPageSlotByScope(window.frames[b])}catch(c){}try{window.parent&&window.parent!==window&&(a.debug("scanPageSlots in parent frame"),this.findPageSlotByScope(window.parent))}catch(d){}try{a.debug("scanPageSlots in current window"),this.findPageSlotByScope(window)}catch(f){}},slotsToTypeBStr:function(){var a="",c;for(c in this._slots)if(this._slots.hasOwnProperty(c)){var d=this._slots[c];
	-1===d.search("slid=")&&(d="slid="+encodeURIComponent(c)+"&"+d);a+=d;";"!==a.charAt(a.length-1)&&(a+=";")}a&&(a=a.substring(0,a.length-1));return a},_addCandidateAds:function(a){for(var a=a.split(","),c=0;c<a.length;c++){var d=parseInt(a[c],10);0<d&&this._candidateAds.push(d)}}};a.PageSlotScanner.prototype.constructor=a.PageSlotScanner;a.RendererController=function(b,c){var d=null,f=null,g={},h=a.RendererInitState.instance,j={},k=[],l=0;return{getAdInstance:function(){return c},getContext:function(){return b},
	getRendererState:function(){return h},processEvent:function(b){var d=b.name;if(d===a.RENDERER_STATE_STARTED||d===a.RENDERER_STATE_COMPLETING||d===a.RENDERER_STATE_COMPLETED||d===a.RENDERER_STATE_FAILED)this.handleStateTransition(d,b.info);else{var f=this._inferEventType(d);f&&(f===a.EVENT_TYPE_CLICK&&b.info&&b.info[a.INFO_KEY_CUSTOM_EVENT_NAME]&&(d=b.info[a.INFO_KEY_CUSTOM_EVENT_NAME]),c.processEvent(d,f,b.info))}},handleStateTransition:function(b,d){switch(b){case a.RENDERER_STATE_STARTED:h.notifyStarted(this);
	break;case a.RENDERER_STATE_COMPLETING:h.complete(this);break;case a.RENDERER_STATE_COMPLETED:h.complete(this);h.notifyCompleted(this);break;case a.RENDERER_STATE_FAILED:c.getSlot()._clearScheduledAdInstance();d||(d={});a.warn("FAIL",d.errorModule,d.errorCode,d.errorInfo);var f=c.processEvent(a.EVENT_ERROR,a.EVENT_TYPE_ERROR,d);f||a.debug("No EVENT_ERROR callback found");if(d)switch(d[a.INFO_KEY_ERROR_CODE]){case a.ERROR_NO_AD_AVAILABLE:case a.ERROR_3P_COMPONENT:case a.ERROR_PARSE:(f=c.processEvent(a.EVENT_RESELLER_NO_AD,
	a.EVENT_TYPE_IMPRESSION))||a.debug("No EVENT_RESELLER_NO_AD callback found.")}h.fail(this);break;default:a.debug("Unknown event received",b)}},setCapability:function(a,b){c.setMetr(a,b)},getVersion:function(){return b._adManager.getVersion()},getParameter:function(a){if(!a)return null;if(b._overrideLevelParameterDictionary.hasOwnProperty(a))return b._overrideLevelParameterDictionary[a];if(c.getActiveCreativeRendition()&&"undefined"!==typeof c.getActiveCreativeRendition().getParameter(a))return c.getActiveCreativeRendition().getParameter(a);
	var d=c._creative;return d&&"undefined"!==typeof d.getParameter(a)?d.getParameter(a):"undefined"!==typeof c.getSlot().getParameter(a)?c.getSlot().getParameter(a):b._adResponse._profileParameters.hasOwnProperty(a)?b._adResponse._profileParameters[a]:b._globalLevelParameterDictionary.hasOwnProperty(a)?b._globalLevelParameterDictionary[a]:g&&g.hasOwnProperty(a)?g[a]:null},getCompanionSlots:function(){for(var a=[],b=c._companionAdInstances,d=0;d<b.length;d++)b[d].isPlaceholder()&&a.push(b[d].getSlot());
	return a},createNullDrivingAdInstance:function(){var a=c.getSlot().scheduleAdInstance();a.addCreativeRendition().setContentType("null/null");return a},scheduleAdInstances:function(a){var b,d=[],f=null,a=a||[];if(0===a.length)return d;for(b=0;b<a.length;b++)a[b].getCustomId()===c.getSlot().getCustomId()&&(f=c.getSlot().scheduleAdInstance());if(!f)if(this.isTranslator())f=this.createNullDrivingAdInstance();else if(this.isRenderer())f=c;else return d;for(var g=0;g<a.length;g++){if(a[g].getCustomId()===
	c.getSlot().getCustomId())f!==c&&d.push(f);else for(var h=0,l=f._companionAdInstances;h<l.length;h++)if(b=l[h],a[g]===b.getSlot()){if(this.isTranslator())d.push(b);else if(this.isRenderer()&&b.isPlaceholder()){var r=b.cloneForTranslation();f===c&&(j[r]=b);l[h]=r;d.push(r);k.push(r)}break}d.length<=g&&d.push(null)}return d},commitAdInstance:function(){if(this.isRenderer()&&c.isStarted()){for(var b=0;b<k.length;b++){var d=k[b];d&&d.getSlot().playCompanionAds(d)}k=[]}else a.warn("Skipping RendererController.commitAdInstance when called with driving ad not started or completed.")},
	isRenderer:function(){return d&&a.MODULE_TYPE_RENDERER===d.info()[a.INFO_KEY_MODULE_TYPE]},isTranslator:function(){return d&&a.MODULE_TYPE_TRANSLATOR===d.info()[a.INFO_KEY_MODULE_TYPE]},playable:function(){return h===a.RendererInitState.instance},reset:function(){h=a.RendererInitState.instance},play:function(){for(var a=c.getAllCreativeRenditions()||[],b=null,d=0;d<a.length;d++)if(iter=a[d],b=this._matchRendererClassName(iter)){c.setActiveCreativeRendition(iter);break}0===l&&this._actualPlay(b)},
	_actualPlay:function(b){(f=a.Util.getObject(b)||a.Util.getObject(t+"."+b))&&(d=new f);d?h.start(this):this.handleStateTransition(a.RENDERER_STATE_FAILED,{errorCode:a.ERROR_NO_RENDERER,errorInfo:"Renderer class <"+b+"> not found"})},dispatchEvent:function(a,c){b.dispatchEvent(a,c)},requestContentStateChange:function(b){b?this.dispatchEvent(a.EVENT_CONTENT_VIDEO_PAUSE_REQUEST):this.dispatchEvent(a.EVENT_CONTENT_VIDEO_RESUME_REQUEST)},getRenderer:function(){return d},setRenderer:function(a){d=a},setRendererState:function(a){h=
	a},getContentVideoElement:function(){return b.getContentVideoElement()},_restorePlaceholdersForHybrid:function(){if(j&&this.isRenderer()){for(var a=[],b=0;b<c._companionAdInstances.length;b++){var d=c._companionAdInstances[b],f=j[d];f?a.push(f):a.push(d)}c._companionAdInstances=a}0<k.length&&this.isRenderer()&&(k=[])},rendererMatch:function(b){return f?f===a.Util.getObject(this._matchRendererClassName(b)):!0},_matchRendererClassName:function(d){function f(a,b,c){if(!b)return!0;b=b.split(",");b[b.length-
	1]||b.pop();if(c){a=a.toLowerCase();for(c=0;c<b.length;c++)if(a==b[c].toLowerCase())return!0;return!1}return 0<=b.indexOf(a)}var h=d.getPrimaryCreativeRenditionAsset().getContentType(),j=d.getContentType(),k=d.getWrapperType(),m=d.getCreativeApi(),d=d.getBaseUnit(),L=c.getSoAdUnit(),r=c.getSlot();r.getType();r=r.getTimePositionClass();if(a.Util.isBlank(j)&&a.Util.isBlank(k))return null;var o=b._rendererManifest["*"];o||(o=b._rendererManifest[k]);o||(o=b._rendererManifest[j]);if(!o)for(var K=b._overriddenAdRenderers.concat(b._adResponse._adRenderers),
	E=0;E<K.length;E++){var s=K[E],y=!s.contentType;y||(k?y=f(k,s.contentType,!0):(h&&(y=f(h,s.contentType,!0)),y||(y=f(j,s.contentType,!0))));var w=!s.creativeApi;w||(w=f(m,s.creativeApi));if(!(s.baseUnit&&!f(d,s.baseUnit)||s.soAdUnit&&!f(L,s.soAdUnit)||s.slotType&&!f(r.toUpperCase(),s.slotType.toUpperCase())||!y||!w)&&s.url){o=s.url;h=o.indexOf("?");-1!==h&&(o=o.substring(0,h));h=o.lastIndexOf("/");-1!==h&&(o=o.substring(h+1));h=o.lastIndexOf(".js");-1!==h&&(o=o.substring(0,h));var F={};if(s.parameter){h=
	[].concat(s.parameter);for(m=0;m<h.length;m++)if(h[m].hasOwnProperty("name"))F[h[m].name]=h[m].value;else for(var A in h[m])h[m].hasOwnProperty(A)&&(F[A]=h[m][A])}a.Util.getObject(t+"."+o)&&(o=t+"."+o);if(a.Util.getObject(o))g=F,l=0;else{if(0<l)break;var C=this;A=1*this.getContext().getParameter("moduleLoadTimeout")||6E4;l=window.setTimeout(function(){l=-1;C.handleStateTransition(a.RENDERER_STATE_FAILED,{errorCode:a.ERROR_NO_RENDERER,errorInfo:"Load renderer timeout, URL:"+s.url})},A);a.Util.lazyJavaScriptLoad(s.url,
	function(){a.log("async load renderer successful, URL:"+s.url);-1===l?a.debug("renderer loaded after timeout. WILL NOT PLAY."):(window.clearTimeout(l),l=0,g=F,C._actualPlay(o))})}break}}return o?o:!a.Util.isBlank(k)?null:"null/null"===j?t+".NullRenderer":null},_inferEventType:function(b){return b===a.EVENT_ERROR?a.EVENT_TYPE_ERROR:b===a.EVENT_AD_CLICK?a.EVENT_TYPE_CLICK:b===a.EVENT_AD_IMPRESSION||b===a.EVENT_AD_FIRST_QUARTILE||b===a.EVENT_AD_MIDPOINT||b===a.EVENT_AD_THIRD_QUARTILE||b===a.EVENT_AD_COMPLETE||
	b===a.EVENT_RESELLER_NO_AD?a.EVENT_TYPE_IMPRESSION:b===a.EVENT_AD_PAUSE||b===a.EVENT_AD_RESUME||b===a.EVENT_AD_REWIND||b===a.EVENT_AD_MUTE||b===a.EVENT_AD_UNMUTE||b===a.EVENT_AD_COLLAPSE||b===a.EVENT_AD_EXPAND||b===a.EVENT_AD_MINIMIZE||b===a.EVENT_AD_CLOSE||b===a.EVENT_AD_ACCEPT_INVITATION?a.EVENT_TYPE_STANDARD:null},stop:function(){a.log("RendererController.stop");0<l&&(l=-1);h.stop(this)}}};a.RenditionSelector=function(a,c,d,f){this._targetByterate=a;this._arWeight=c;this._pxWeight=d;this._conversionFactor=
	f};a.RenditionSelector.prototype={getBestFitRendition:function(b,c,d){var f=this;b.reverse();b=b.filter(function(b){return b&&b.getPrimaryCreativeRenditionAsset()&&(b.getPrimaryCreativeRenditionAsset().getUrl()||b.getPrimaryCreativeRenditionAsset().getContent())&&a.Util.canPlayVideoType(b.getPrimaryCreativeRenditionAsset().getMimeType())}).sort(function(a,b){return f.getBitrate(a)-f.getBitrate(b)});if(!b.length)return null;var g=Number.MAX_VALUE,h=b.filter(function(a){a=f.getBitrate(a);g=a<g?a:g;
	return a<=f._targetByterate});h.length||(h=b.filter(function(a){return f.getBitrate(a)<=g}));return h.sort(function(a,b){return f.compareVisualMetrics(a,b,c,d)}).pop()},compareVisualMetrics:function(a,c,d,f){var g=this.calculateVisualRatios(a.getWidth(),a.getHeight(),d,f),f=this.calculateVisualRatios(c.getWidth(),c.getHeight(),d,f);if(!g&&f)return-1;if(g&&!f)return 1;if(g&&f){var d=this._conversionFactor*this._arWeight*Math.log(g.arRatio),h=this._pxWeight*Math.log(g.pixelation),g=this._conversionFactor*
	this._arWeight*Math.log(f.arRatio),f=this._pxWeight*Math.log(f.pixelation),d=this.findDistance(d,h,0,0),g=this.findDistance(g,f,0,0);if(g!=d)return g-d}return a.getPreference()-c.getPreference()},calculateVisualRatios:function(a,c,d,f){if(0<a&&0<c&&0<d&&0<f){var g=a/c,h=d/f;g>h?f=d/g:d=f*g;return{arRatio:g/h,pixelation:a*c/(d*f)}}return null},findDistance:function(a,c,d,f){return isNaN(a)||isNaN(d)||isNaN(c)||isNaN(f)?NaN:Math.sqrt(Math.pow(d-a,2)+Math.pow(f-c,2))},getBitrate:function(a){var c=a.getDuration();
	return(a=a.getPrimaryCreativeRenditionAsset().getBytes())&&c&&!isNaN(a)&&!isNaN(c)&&0<a&&0<c?8*a/1E3/c:-1}};a.RenditionSelector.prototype.constructor=a.RenditionSelector;a.Slot=function(b){var c="",d=null,f=null,g=null,h=null,j=[],k=[],l={},i=null,q=a.MediaInitState.instance,p=0,n=null,u,m,L,r,o,t,E=!1,s=!1,y=!0,w=[];return{getSlotProfile:function(){return f},setSlotProfile:function(a){f=a},setMediaState:function(a){q=a},setParameter:function(a,b){null===b?delete l[a]:l[a]=b},getParameter:function(a){if(a&&
	l.hasOwnProperty(a))return l[a]},getAdCount:function(){return j.length},setCustomId:function(a){c=a},getCustomId:function(){return c},setAdUnit:function(a){o=a},getAdUnit:function(){return o},setType:function(a){d=a},getType:function(){return d},setTimePosition:function(a){m=a},getTimePosition:function(){return m},setTimePositionClass:function(a){n=a&&a.toUpperCase()},getTimePositionClass:function(){return n},setWidth:function(a){L=a},getWidth:function(){return n!==a.TIME_POSITION_CLASS_DISPLAY?L?
	L:b.getVideoDisplaySize().width:L},setHeight:function(a){r=1*a},getHeight:function(){return n!==a.TIME_POSITION_CLASS_DISPLAY?r?r:b.getVideoDisplaySize().height:r},setBase:function(a){u=a},getBase:function(){return u},setCuepointSequence:function(a){t=1*a?1*a:0},getCuepointSequence:function(){return t},getVideoDisplaySize:function(){return b.getVideoDisplaySize()},parse:function(d){if(d){c=d.customId;m=1*d.timePosition;n=d.timePositionClass&&d.timePositionClass.toUpperCase()||n;o=d.adUnit;for(var f,
	g=0,h=d.eventCallbacks||[];g<h.length;g++){f=h[g];var i=a.EventCallback.newEventCallback(b,f.name,f.type);if(i)i._slot=this,i.parse(f),k.push(i)}for(g=0,h=d.selectedAds||[];g<h.length;g++)f=h[g],d=[],i=new a.AdInstance(b),d.push(i),i._slot=this,i._slotCustomId=c,i._parentAdInstancesGroup=d,i.parse(f),j.push(d)}},getCurrentAdInstance:function(){return g},isPauseSlot:function(){return n===a.TIME_POSITION_CLASS_PAUSE_MIDROLL},play:function(b){n===a.TIME_POSITION_CLASS_DISPLAY&&!y?(a.log("Slot is invisible. Push the play operation to the queue."),
	w.push({operation:this.play,argument:b})):(a.log("Slot.play",n),E=!1,n===a.TIME_POSITION_CLASS_DISPLAY&&1<j.length&&j.splice(0,j.length-1),this._play(b))},stop:function(){a.log("Slot.stop",n);n===a.TIME_POSITION_CLASS_DISPLAY&&(w=[]);q===a.MediaInitState.instance||q===a.MediaEndState.instance?a.log("Slot.stop, not start or already end, ignore"):(E=!0,g?g.stop():a.warn("Slot.stop, no _currentAdInstance, ignore"))},setVisible:function(b){if(!n===a.TIME_POSITION_CLASS_DISPLAY)a.log("Slot.setVisible is only for display ads.");
	else if(a.log("Slot.setVisible",b),y!=b&&(y=b))for(;0<w.length;)op=w.pop(),op.operation&&op.operation.call(this,op.argument)},_play:function(a){i=i||a;q.play(this)},onStartPlaying:function(){this._onStartPlaying()},onStartReplaying:function(){this._onStartPlaying()},onCompletePlaying:function(){this._onCompletePlaying()},onCompleteReplaying:function(){this._onCompletePlaying()},playNextAdInstance:function(){a.log("Slot.playNextAdInstance ",n);this._playNextAdInstance()||q.complete(this)},scheduleAdInstance:function(){return h=
	g.cloneForTranslation()},_clearScheduledAdInstance:function(){h=null},_onStartPlaying:function(){var b=a.EventCallback.getEventCallback(k,a.EVENT_SLOT_IMPRESSION,a.EVENT_TYPE_IMPRESSION);b&&b.process();this.dispatchSlotEvent(a.EVENT_SLOT_STARTED);this.playNextAdInstance()},dispatchSlotEvent:function(a){s||b.dispatchEvent(a,{slot:this})},_onCompletePlaying:function(){i&&i();i=null;w=[];var b=a.EventCallback.getEventCallback(k,a.EVENT_SLOT_END,a.EVENT_TYPE_IMPRESSION);b&&b.process();g=null;this.dispatchSlotEvent(a.EVENT_SLOT_ENDED)},
	_playNextAdInstance:function(){if(E||q!==a.MediaPlayingState.instance&&q!==a.MediaReplayingState.instance)return!1;this._commitScheduledAdInstance();g=this._nextPlayableAdInstance();if(!g)return!1;g.reset();g.getRendererController().play();return!0},_commitScheduledAdInstance:function(){if(h){var a=g._parentAdInstancesGroup.indexOf(g);if(0<=a)h._parentAdInstancesGroup=g._parentAdInstancesGroup,g._parentAdInstancesGroup.splice(a,1,h),h=null}},_nextPlayableAdInstance:function(){var b=-1;if(g){var c=
	g._parentAdInstancesGroup,d=c.indexOf(g),b=j.indexOf(c);0<=b&&0<=d&&(g._isImpressionSent||d==c.length-1)&&b++}else b=0;if(0>b||b>=j.length)return null;if(q===a.MediaPlayingState.instance){c=j[b];for(d=0;d<c.length;d++){var f=c[d];if(f.getRendererController().playable())return f}}else if(q===a.MediaReplayingState.instance)for(;b<j.length;b++){c=j[b];for(d=0;d<c.length;d++)if(f=c[d],f._isImpressionSent)return f;for(d=0;d<c.length;d++)if(f=c[d],f.getRendererController().getRendererState()!==a.RendererFailedState.instance&&
	!f._translated)return f}return null},toString:function(){return"[Slot "+c+"]"},getAdInstances:function(){for(var a=[],b=0;b<j.length;++b)for(var c=j[b],d=0;d<c.length;++d){var f=c[d];if(f.isPlayable()){a.push(f);break}}return a},getPlayheadTime:function(){for(var a=0,b=this.getAdInstances(),c=0;c<b.length;++c)if(b[c]===g){b=g.getPlayheadTime();-1<b&&(a+=b);break}else{var d=b[c].getDuration();-1<d&&(a+=d)}p&&a>p&&(a=p);return a},getTotalDuration:function(){for(var a=0,b=this.getAdInstances(),c=0;c<
	b.length;++c){var d=b[c].getDuration();-1<d&&(a+=d)}return p=a},playCompanionAds:function(b){a.log("Slot.playCompanionAds");var c=[];b._parentAdInstancesGroup=c;c.push(b);j.push(c);s=!0;g&&this.stop();this.play()}}};a.SurveyExtension=function(a){this._context=a;this._surveyPingedIds=[]};a.SurveyExtension.prototype={start:function(){a.log("SurveyExtension.start("+Array.prototype.slice.call(arguments).join(",")+")");this._onAdStarted=a.Util.bind(this,function(b){this._parameters=this._getParameters();
	if(this._parameters.enabled){a.log("SurveyExtension.onAdStarted()");var c=b.adInstance;if(-1<this._surveyPingedIds.indexOf(c.getAdId()))a.log("won't pingback survey since it has been pinged back");else{var d=c._creative.getParameter("_fw_survey_url");if(d)try{a.log("append"+d+" to head");var f=document.getElementsByTagName("head")[0],g=document.createElement("script");g.setAttribute("type","text/javascript");g.setAttribute("src",d);f.appendChild(g);this._surveyPingedIds.push(c.getAdId())}catch(h){a.warn("Append survey to head",
	b.type,e)}}}});this._context.addEventListener(a.EVENT_AD_IMPRESSION,this._onAdStarted)},dispose:function(){a.log("SurveyExtension.dispose()");this._context.removeEventListener(a.EVENT_AD_IMPRESSION,this._onAdStarted);this._parameters=this._onAdStarted=null},_getParameters:function(){var b={};b.enabled="false"!=this._context.getParameter(a.PARAMETER_EXTENSION_SURVEY_ENABLED);a.log(b);return b}};a.SurveyExtension.prototype.constructor=a.SurveyExtension;a.Timer=function(a,c){this._lastTickDate=new Date;
	this._duration=a||-1;this._playheadTime=-1;this._callback=c;this._state=-1};a.Timer.prototype={};a.Timer.prototype.constructor=a.Timer;a.Util.mixin(a.Timer.prototype,{tick:function(){var a=new Date,c=Math.round((a.getTime()-this._lastTickDate.getTime())/1E3);this._lastTickDate=a;return c},start:function(){if(2===this._state||-1===this._playheadTime)this._playheadTime=0;this._state=0;this._timeStamp=new Date;if(this._timeouter)window.clearTimeout(this._timeouter),this._timeouter=null;var a=this,c=
	1E3*(this._duration-this._playheadTime);if(!(0>c))this._timeouter=window.setTimeout(function(){a.stop();a._playheadTime=a._duration;a._callback&&a._callback()},c)},pause:function(){if(0===this._state){this._state=1;if(this._timeouter)window.clearTimeout(this._timeouter),this._timeouter=null;this._playheadTime=(new Date-this._timeStamp)/1E3+this._playheadTime}},stop:function(){this._state=2;if(this._timeouter)window.clearTimeout(this._timeouter),this._timeouter=null;this._playheadTime=(new Date-this._timeStamp)/
	1E3+this._playheadTime},getPlayheadTime:function(){return 0===this._state?(new Date-this._timeStamp)/1E3+this._playheadTime:this._playheadTime},getDuration:function(){return this._duration}});a.Url=function(b){this._session=this._base="";this._parameters=new a.Hash;this.setString(b)};a.Url.prototype={};a.Url.prototype.constructor=a.Url;a.Util.mixin(a.Url.prototype,{setString:function(b){if(this._string!==b&&b&&(this._string=b,b=b.split("?"),this._base=b[0],this._parameters=new a.Hash,b[1])){var c=
	b[1].indexOf(";"),d="";0<c&&0===b[1].indexOf("session=")?(this._session=b[1].substring(0,c+1),d=b[1].substring(c+1)):d=b[1];b=d.split("&");for(d=0;d<b.length;d++){var f=b[d],c=f.indexOf("=");if(!(0>c)){var g=decodeURIComponent(f.substring(0,c)),c=decodeURIComponent(f.substring(c+1));this._parameters.setKeyValue(g,c)}}}},setParameter:function(a,c){this._parameters.setKeyValue(a,c,0);this._string=null},getParameter:function(a){return this._parameters.getValue(a)},toString:function(){if(this._string)return this._string;
	this._parameters.move("cr",-1);for(var a=this._parameters._keys,c=[],d=0;d<a.length;d++){var f=a[d],g=this._parameters.getValue(f);c.push(encodeURIComponent(f)+"="+encodeURIComponent(g))}return this._string=this._base+"?"+this._session+c.join("&")}});a.VastTranslator=function(){};a.VastTranslator.prototype={start:function(b){function c(b){a.log("VastTranslator\t"+b)}function d(b){a.warn("VastTranslator\t"+b)}function f(a,b){if(a)if(a.length&&"string"!==typeof a)for(var c=0;c<a.length;c++)b(a[c].value);
	else a.value&&b(a.value)}function g(a,b){f(b,function(b){a.push(b)})}function h(b){if(!b)return!1;for(var c=0;c<w.length;c++)if(a.Util.trim(w[c]).toLowerCase()===a.Util.trim(b).toLowerCase())return!0;return!1}function j(b){if(!b)return null;"string"!==typeof b&&(b=b.toString());b=a.Util.trim(b);return-1<b.indexOf("://")?b:null}function k(a){this.code=this.url=null;this.height=this.width=NaN;this.resourceType=this.creativeType=null;this.bitrate=NaN;this.creativeApi=null;this.ad=a;this.clickThrough=
	null;this.clickTrackings=[];this.customClicks=[];this.creativeData=null}function l(){this.creativeView=[];this.start=[];this.firstQuartile=[];this.midpoint=[];this.thirdQuartile=[];this.complete=[];this.mute=[];this.unmute=[];this.pause=[];this.rewind=[];this.resume=[];this.replay=[];this.fullscreen=[];this.expand=[];this.collapse=[];this.acceptInvitation=[];this.stop=[]}function i(a){this._impressions=[];this.clickThrough=null;this.clickTrackings=[];this.customClicks=[];this.creativeData=null;this.sequence=
	-1;this.vastRenditions=[];this.duration=NaN;this.adp=a;this.isDrivingAd=!1}function q(a){i.call(this,a)}function p(a){i.call(this,a)}function n(a){i.call(this,a)}function u(){}function m(a,b,d,f){if(a&&f&&0<f.length){c("augmentCallbacks("+b+", "+d+", "+f+")");for(var g=a.getEventCallbackUrls(b,d),h=0;h<g.length;h++)-1<f.indexOf(g[h])&&(c("augmentCallbacks() url = "+g[h]),f.unshift(g[h]));a.addEventCallbackUrls(b,d,f)}else c("augmentCallbacks("+b+", "+d+", "+f+"), empty callbacks")}function t(b,d){c("initErrorTrackings()");
	if(b&&d){for(var f=d.errorTrackings,g=0;g<f.length;g++)-1<f[g].search("[ERRORCODE]")&&(f[g]=f[g].replace("[ERRORCODE]","900"));m(b,a.EVENT_ERROR,a.EVENT_TYPE_ERROR,d.errorTrackings)}}function r(b,d){c("initTrackingEvents()");d&&b&&(m(b,a.EVENT_AD_IMPRESSION,a.EVENT_TYPE_IMPRESSION,d.creativeView),m(b,a.EVENT_AD_IMPRESSION,a.EVENT_TYPE_IMPRESSION,d.start),m(b,a.EVENT_AD_FIRST_QUARTILE,a.EVENT_TYPE_IMPRESSION,d.firstQuartile),m(b,a.EVENT_AD_MIDPOINT,a.EVENT_TYPE_IMPRESSION,d.midpoint),m(b,a.EVENT_AD_THIRD_QUARTILE,
	a.EVENT_TYPE_IMPRESSION,d.thirdQuartile),m(b,a.EVENT_AD_COMPLETE,a.EVENT_TYPE_IMPRESSION,d.complete),m(b,a.EVENT_AD_MUTE,a.EVENT_TYPE_STANDARD,d.mute),m(b,a.EVENT_AD_UNMUTE,a.EVENT_TYPE_STANDARD,d.unmute),m(b,a.EVENT_AD_PAUSE,a.EVENT_TYPE_STANDARD,d.pause),m(b,a.EVENT_AD_RESUME,a.EVENT_TYPE_STANDARD,d.resume),m(b,a.EVENT_AD_REWIND,a.EVENT_TYPE_STANDARD,d.rewind),m(b,a.EVENT_AD_EXPAND,a.EVENT_TYPE_STANDARD,d.fullscreen),m(b,a.EVENT_AD_COLLAPSE,a.EVENT_TYPE_STANDARD,d.collapse),m(b,a.EVENT_AD_EXPAND,
	a.EVENT_TYPE_STANDARD,d.expand),m(b,a.EVENT_AD_CLOSE,a.EVENT_TYPE_STANDARD,d.stop),m(b,a.EVENT_AD_ACCEPT_INVITATION,a.EVENT_TYPE_STANDARD,d.acceptInvitation))}function o(b,d,f,g,h){c("initClickAndImpressionEvents");if(b){d&&b.setClickThroughUrl(a.EVENT_AD_CLICK,d);f&&0<f.length&&m(b,a.EVENT_AD_CLICK,a.EVENT_TYPE_CLICK_TRACKING,f);if(g&&0<g.length)for(d=0;d<g.length;d++)g[d].url&&m(b,g[d].id,a.EVENT_TYPE_CLICK_TRACKING,[g[d].url]);h&&m(b,a.EVENT_AD_IMPRESSION,a.EVENT_TYPE_IMPRESSION,h)}}function K(a,
	b){c("initTemporalAdInstance");a||d("initTemporalAdInstance: Invalid adInstance");if(b.selectedDrivingAd){b.surveyUrl&&a._creative.setParameter("_fw_survey_url",b.surveyUrl);var f=b.selectedDrivingAd,g=b.selectedDrivingRenditions;c("vastRenditions:"+g);for(var j=I===F,k=0;k<g.length;k++){var i=g[k],l=a.addCreativeRendition(),B=l.addCreativeRenditionAsset("VAST_CRA",!0),v;a:switch(v=i.creativeType,v){case "video/mp4":v="video/mp4-h264";break a;case "video/3gp":v="video/3gpp";break a}c("initTemporalAdInstance() set rendition/asset [vastRd.creativeApi,vastAd.duration,vastRd.width,vastRd.height,vastRd.url,assetContentType,vastRd.creativeType] =  "+
	[i.creativeApi,f.duration,i.width,i.height,i.url,v,i.creativeType]);l.setCreativeApi(i.creativeApi);isNaN(f.duration)||l.setDuration(f.duration);i.width&&!isNaN(i.width)&&l.setWidth(i.width);i.height&&!isNaN(i.height)&&l.setHeight(i.height);i.url&&B.setUrl(i.url);i.code&&B.setContent(i.code);B.setMimeType(i.creativeType);"static"===i.resourceType&&"text/html"===i.creativeType?B.setContentType("text/html_doc_ref"):"application/x-javascript"===i.creativeType||"application/javascript"===i.creativeType?
	(B.setContentType("text/js_ref"),"VPAID"===i.creativeApi.toUpperCase()&&l.setCreativeApi("VPAID")):"iframe"===i.resourceType?B.setContentType("text/html_doc_ref"):"text/html"===i.creativeType||"text/html_doc_ref"===i.creativeType?B.setContentType("text/html_doc_ref"):"text/html_doc_lit_mobile"===i.creativeType?B.setContentType("text/html_doc_lit_mobile"):j||h(v)?(B.setContentType("text/html_doc_lit_mobile"),B.setUrl(null),B.setContent(E(a,C.getCustomId(),f,i,"text/html_doc_lit_mobile"))):B.setContentType(v);
	f.creativeData&&0!==f.creativeData.length&&(c("initTemporalAdInstance(), set asset parameter VPAID_creativeData:"+f.creativeData),l.setParameter("VPAID_creativeData",f.creativeData));if(!j&&!h(v))i=i.bitrate,!isNaN(i)&&0<i&&B.setBytes(1E3*i*f.duration/8)}r(a,f.trackingEvents);t(a,b);o(a,j?g[0].clickThrough:f.clickThrough,f.clickTrackings,f.customClicks,f.impressions)}else{var l=a.addCreativeRendition();l.setContentType("null/null");var B=l.addCreativeRenditionAsset("VAST_CRA",!0);B.setContentType("null/null")}}
	function E(b,d,f,g,h){c("getCoadHTML, ad id = "+b.getAdId());return g.url&&0<g.url.length?((f=g.clickThrough)&&0<f.length&&b.setClickThroughUrl(a.EVENT_AD_CLICK,f),b=b.getEventCallbackUrls(a.EVENT_AD_CLICK,a.EVENT_TYPE_CLICK)[0],a.HTMLAdGenerator.generateAd(g.url,b,d,g.width,g.height,g.creativeType,h)):g.code&&0<g.code.length?"script"===g.resourceType||"text/javascript"===g.resourceType||"text/js_ref"===g.resourceType||"application/x-javascript"===g.resourceType?a.HTMLAdGenerator.wrapJSCode(g.code,
	d,g.width,g.height):a.HTMLAdGenerator.wrapUnsafeHTML(g.code,d,g.width,g.height):null}function s(b,d,f,g){c("initPageAdInstance ad:"+d.getAdId());var h=f.vastRenditions[0];if(h.url||h.code){var j=d.addCreativeRendition(),i=j.addCreativeRenditionAsset("VAST_CRA",!0);j.setCreativeApi(h.creativeApi);j.setWidth(h.width);j.setHeight(h.height);"static"===h.resourceType&&"text/html"===h.creativeType?(i.setContentType("text/html_doc_ref"),i.setUrl(h.url)):"iframe"===h.resourceType?(i.setContentType("text/html_doc_ref"),
	i.setUrl(h.url)):"HTML"===h.resourceType?(i.setContentType("text/html_doc_lit_mobile"),i.setContent(a.HTMLAdGenerator.wrapUnsafeHTML(h.code,b.getCustomId(),h.width,h.height))):(i.setContentType("text/html_doc_lit_mobile"),i.setContent(E(d,b.getCustomId(),f,h,"text/html_doc_lit_mobile")));i.setMimeType("text/html")}else c("initPageAdInstance will add a tracking only companion ad");r(d,f.trackingEvents);t(d,g);o(d,h.clickThrough,h.clickTrackings,h.customClicks,f.impressions)}function y(d){if(200==d.status)if(d.responseXML){var f=
	(new u).parseAdData(d.responseXML);if(f){c("scheduleVastAds");if(!f||0===f.length)c("no ads for scheduleVastAds");else if(d=f[0].selectedPackage,f=f[0].redirectPackage,!d&&!f)c("scheduleVastAds(), no ads from vast response!!!"),b.handleStateTransition(a.TRANSLATOR_STATE_FAILED,{errorModule:"VastTranslator",errorCode:a.ERROR_NO_AD_AVAILABLE});else if(!d&&f){c("scheduleVastAds(), no ads scheduled, redirect to downstream Secondary Ad Server");c("scheduleRedirect");var d=[],g=[];d.push(C);g.push({});
	for(var h=J,j=f.selectedCompanionAds,i=0;i<h.length;i++){var k=h[i];j&&j[k.getCustomId()]&&(d.push(k),g.push(j[k.getCustomId()]))}if((h=b.scheduleAdInstances(d))&&0<h.length)j=h[0],i=j.addCreativeRendition(),i.setWrapperUrl(f.tagUrl),i.setWrapperType(N),r(j,f.getTrackingEventsOfWrapper()),t(j,f),o(j,f.getClickThroughOfWrapper(),f.getClickTrackingsOfWrapper(),f.getCustomClicksOfWrapper(),f.getImpressionOfWrapper());c("scheduleRedirect, schedule companion for redirect ad ",f);for(i=1;i<h.length;i++)if(j=
	h[i])k=g[i],k instanceof n&&s(d[i],j,k,f)}else if(d){c("scheduleVastAds(), ads returned from vast response, going to schedule them");d.selectedDrivingAd?(c("scheduleVastAds(), ads returned from vast response, going to schedule them with driving ad"),d.selectedDrivingAd.isDrivingAd=!0):c("scheduleVastAds(), ads returned from vast response, going to schedule them without driving ad");c("scheduleAdPackage()");f=[];g=[];f.push(C);d.selectedDrivingAd&&g.push(d.selectedDrivingAd);h=J;j=d.selectedCompanionAds;
	for(i=0;i<h.length;i++)k=h[i],j&&j[k.getCustomId()]&&(f.push(k),g.push(j[k.getCustomId()]));j=b.scheduleAdInstances(f);if(0<j.length){c("scheduleAdPackage, scheduled "+j.length+" ads"+d.selectedDrivingAd?"":", 1 of it is nullAd for pure companion ad schedule");d.selectedDrivingAd||c("Driving ad is not selected, will create a dummy null ad.");d.selectedDrivingAd||(f.shift(),K(j.shift(),d));for(i=0;i<j.length;i++)if(k=j[i]){var l=g[i];l instanceof n?s(f[i],k,l,d):K(k,d)}!d.selectedDrivingAd&&0<h.length&&
	0<d.companionAds.length&&0===g.length&&(c("found empty companion slots and companion ads in package, but none of them matches slot size"),b.handleStateTransition(a.TRANSLATOR_STATE_FAILED,{errorModule:"VastTranslator",errorCode:a.ERROR_UNMATCHED_SLOT_SIZE}))}else c("scheduleAdPackage, no ad scheduled.")}b.handleStateTransition(a.TRANSLATOR_STATE_STARTED);b.handleStateTransition(a.TRANSLATOR_STATE_COMPLETED)}}else b.handleStateTransition(a.TRANSLATOR_STATE_FAILED,{errorModule:"VastTranslator",errorCode:a.ERROR_PARSE,
	errorInfo:H});else 400<=d.status&&b.handleStateTransition(a.TRANSLATOR_STATE_FAILED,{errorModule:"VastTranslator",errorCode:a.ERROR_IO,errorInfo:H})}var w="image/gif,image/jpeg,image/png,text/html,text/javascript,text/html_doc_ref,text/html_doc_lit_mobile,application/x-javascript,application/javascript".split(","),F=4,A=b.getAdInstance(),C=A.getSlot(),I=function(){if(!C)return 1;switch(C.getTimePositionClass()){case a.TIME_POSITION_CLASS_PREROLL:case a.TIME_POSITION_CLASS_MIDROLL:case a.TIME_POSITION_CLASS_POSTROLL:return 2;
	case a.TIME_POSITION_CLASS_OVERLAY:return F;case a.TIME_POSITION_CLASS_DISPLAY:return C&&!C.getBase()?8:1;default:return 1}}(),J=b.getCompanionSlots().filter(function(b){if(!b)return!1;switch(b.getTimePositionClass()){case a.TIME_POSITION_CLASS_PREROLL:case a.TIME_POSITION_CLASS_MIDROLL:case a.TIME_POSITION_CLASS_PAUSE_MIDROLL:case a.TIME_POSITION_CLASS_POSTROLL:return!1;default:return!0}});c("Checking CompanionSlots, length = "+J.length+", rendererController.getCompanionSlots().length = "+b.getCompanionSlots().length+
	", AdInstance.getCompanionSlots.length = "+A.getCompanionSlots().length);var N=A.getActiveCreativeRendition().getWrapperType();k.prototype={init:function(a,b,c,d,f,g,h,j){this.log("init("+[].slice.call(arguments,0).join(",")+")");this.url=a;this.width=1*b;this.height=1*c;this.creativeType=d;this.resourceType=f;this.bitrate=g;var i;i=h;if(!i||0===i.length)i="None";else{var k="";switch(i.toLowerCase()){case "flashvar":case "flashvars":k="clickTag";break;case "vpaid":k="VPAID";break;default:k=i}i=k}this.creativeApi=
	i;this.code=j||null},log:function(b){a.log("VastTranslator.VastRendition\t"+b)},toString:function(){var a=[],b;for(b in this)this.hasOwnProperty(b)&&"function"!==typeof this[b]&&"ad"!==b&&a.push(b+":"+this[b]);return a.join(",")}};k.prototype.constructor=k;i.prototype={parse:function(b){this.log("parse()");if(b.Duration)if(b.Duration.value){var c=/(\d+):(\d+):(\d+)/.exec(b.Duration.value);c?this.duration=3600*c[1]+60*c[2]+1*c[3]:this.warn("Failed to parse duration value for creative "+b)}else this.warn("No duration value set for creative "+
	b);if(b.VideoClicks)b.VideoClicks=[].concat(b.VideoClicks),a.Util.forEachOnArray(b.VideoClicks,function(a){if(a.ClickThrough&&a.ClickThrough.value)this.clickThrough=j(a.ClickThrough.value);if(a.ClickTracking){a.ClickTracking=[].concat(a.ClickTracking);for(var b=0;b<a.ClickTracking.length;b++){var c=j(a.ClickTracking[b].value);c&&this.clickTrackings.push(c)}}if(a.CustomClick){a.CustomClick=[].concat(a.CustomClick);for(b=0;b<a.CustomClick.length;b++){var d=null;a.CustomClick[b]["@attributes"]&&(d=a.CustomClick[b]["@attributes"].id);
	(c=j(a.CustomClick[b].value))&&this.customClicks.push({id:d,url:c})}}},this);if(b.MediaFiles&&b.MediaFiles.MediaFile)b.MediaFiles.MediaFile=[].concat(b.MediaFiles.MediaFile),a.Util.forEachOnArray(b.MediaFiles.MediaFile,function(a){var b=j(a.value),c=NaN,d=NaN,f=null,g="None",h=NaN;if(a["@attributes"])c=a["@attributes"].width||NaN,d=a["@attributes"].height||NaN,f=a["@attributes"].type,g=a["@attributes"].apiFramework||"None",h=a["@attributes"].bitrate||NaN;b&&-1!==b.indexOf(":")?(a=new k(this),a.init(b,
	c,d,f,"",h,g,null),a.clickThrough=this.clickThrough,this.vastRenditions.push(a),(isNaN(c)||isNaN(d))&&this.log("continue with missing [width,height]"+[c,d])):this.warn("will ignore this mediaFile because some required field is missing [url,width,height]:"+[b,c,d])},this);b.TrackingEvents&&this.parseTrackingEvents(b.TrackingEvents,this.setTrackingEvents());if(b.AdParameters)this.log("parse() get a AdParameters:"+b.AdParameters.value),this.creativeData=b.AdParameters.value;if(b.Companion)b.Companion=
	[].concat(b.Companion),a.Util.forEachOnArray(b.Companion,function(b){var c=null,d=null,f="",g="",i=null,D=null,l=!1;b.CompanionClickThrough&&(g=j(b.CompanionClickThrough.value));if(b.StaticResource)c=j(b.StaticResource.value),b.StaticResource["@attributes"]&&(d=b.StaticResource["@attributes"].creativeType),f="static";if(b.IFrameResource&&(c=j(b.IFrameResource.value)))d="text/html_doc_ref",f="iframe";if(b.HTMLResource&&(i=b.HTMLResource["#cdata-section"]||"",i=a.Util.trim(i)))d="text/html_doc_lit_mobile",
	f="HTML";if(b.TrackingEvents)D=b.TrackingEvents;var z=new n(this.adp);z.sequence=this.sequence;z.clickThrough=g;D&&z.parseTrackingEvents(D,z.setTrackingEvents());if(b["@attributes"]){var D=b["@attributes"].width||NaN,v=b["@attributes"].height||NaN,b=b["@attributes"].apiFramework||"None";if((c&&-1!==c.indexOf(":")||i)&&!isNaN(D)&&!isNaN(v)&&h(d)||this.adp.isWrapper){var m=new k(z);m.init(c,D,v,d,f,NaN,b,i);m.clickThrough=g;z.vastRenditions.push(m)}else l=!0,this.warn("will ignore this rendition because some required fields is missing or incompatible [creativeType,url,code,width,height]:"+
	[d,c,i,D,v])}else this.adp.isWrapper||(l=!0,this.warn("for InLine ad package, No attributes found for the Companion ads:"+b));l?this.adp.isWrapper&&this.adp.companionAds.push(z):this.adp.companionAds.push(z)},this);if(b.NonLinear)b.NonLinear=[].concat(b.NonLinear),a.Util.forEachOnArray(b.NonLinear,function(b){var c=null,d=null,f="",g="",i="",D=null,l=!1;if(b.AdParameters)i=b.AdParameters.value;b.NonLinearClickThrough&&(g=j(b.NonLinearClickThrough.value));if(b.StaticResource)c=j(b.StaticResource.value),
	b.StaticResource["@attributes"]&&(d=b.StaticResource["@attributes"].creativeType),f="static";b.IFrameResource&&(c=j(b.IFrameResource.value),d="text/html_doc_ref",f="iframe");b.HTMLResource&&(D=b.HTMLResource["#cdata-section"]||"",D=a.Util.trim(D),d="text/html_doc_lit_mobile",f="HTML");var z=new p(this.adp);z.sequence=this.sequence;z.clickThrough=g;z._trackingEvents=this._trackingEvents;if(i)z.creativeData=i;if(b["@attributes"]){var i=b["@attributes"].width||NaN,v=b["@attributes"].height||NaN,b=b["@attributes"].apiFramework||
	"None";if((c||D)&&!isNaN(i)&&!isNaN(v)&&h(d)){var m=new k(z);m.init(c,i,v,d,f,NaN,b,D);m.clickThrough=g;z.vastRenditions.push(m)}else l=!0,this.warn("will ignore this rendition because some required fields is missing or incompatible:[creativeType,url,code,width,height]:"+[d,c,D,i,v])}else this.adp.isWrapper||(l=!0,this.warn("for InLine ad package, No attributes found for the NonLinear ads:"+b));this.adp.nonLinearAds.push(z);l?this.adp.isWrapper&&this.adp.nonLinearAds.push(z):this.adp.nonLinearAds.push(z)},
	this)},parseLinears:function(a){2!=I?this.log("TargetAdType != TARGET_LINEAR, skipping parse"):this.parse(a)},parseNonLinears:function(a){I!==F?this.log("TargetAdType != TARGET_NONLINEAR, skipping parse"):this.parse(a)},parseCompanionAds:function(a){this.parse(a)},setTrackingEvents:function(){if(!this._trackingEvents)this._trackingEvents=new l;return this._trackingEvents},parseTrackingEvents:function(b,c){this.log("parseTrackingEvents");if(b.Tracking)b.Tracking=[].concat(b.Tracking),a.Util.forEachOnArray(b.Tracking,
	function(a){var b=a["@attributes"].event;if(a=j(a.value))switch(b){case "creativeView":case "start":case "firstQuartile":case "midpoint":case "thirdQuartile":case "complete":case "mute":case "unmute":case "pause":case "resume":case "rewind":case "replay":case "fullscreen":case "expand":case "collapse":case "acceptInvitation":case "stop":c[b].push(a);break;case "close":c.stop.push(a)}},this)},toString:function(){return this.constructor.name+", renditions:"+this.vastRenditions},log:function(b){a.log("VastTranslator."+
	this.constructor.name+"\t"+b)},warn:function(b){a.warn("VastTranslator."+this.constructor.name+"\t"+b)}};var x=Object.defineProperty||function(a,b,c){c.get&&a.__defineGetter__(b,c.get);c.set&&a.__defineSetter__(b,c.set)};x(i.prototype,"trackingEvents",{get:function(){this.log("get trackingEvents()");return this._trackingEvents?this._trackingEvents:this.isDrivingAd?this.adp.trackingEvents:null}});x(i.prototype,"impressions",{set:function(a){this._impressions=a},get:function(){return this.isDrivingAd?
	this._impressions.concat(this.adp.impressions):this._impressions}});i.prototype.constructor=i;q.prototype=new i;q.prototype.constructor=q;p.prototype=new i;p.prototype.constructor=p;n.prototype=new i;n.prototype.getPrimaryRendition=function(){return this.vastRenditions[0]||null};x(n.prototype,"impressions",{get:function(){return 8===I?this._impressions.concat(this.adp.impressions):this._impressions}});n.prototype.constructor=n;var v=function(){this.impressions=[];this.errorTrackings=[];this.linearAds=
	[];this.nonLinearAds=[];this.companionAds=[];this.extensions=[];this.tagUrl="";this.isWrapper=!1;this.surveyUrl=null;this.selectedDrivingRenditions=[];this.selectedDrivingAd=null;this.selectedCompanionAds={}};v.prototype={parse:function(a){this.log("parse("+a+")");if(a)if(!a.Creatives||!this.isWrapper&&!a.Creatives.Creative)this.warn("parse(): no creative found");else{g(this.impressions,a.Impression);g(this.extensions,a.Extensions);g(this.errorTrackings,a.Error);if(this.isWrapper&&a.VASTAdTagURI)this.tagUrl=
	a.VASTAdTagURI.value||"";if(a.Survey&&a.Survey.value&&0<a.Survey.value.length)this.surveyUrl=a.Survey.value;a.Creatives.Creative=a.Creatives.Creative?[].concat(a.Creatives.Creative):[];for(var b=0;b<a.Creatives.Creative.length;b++){var c=a.Creatives.Creative[b],d=-1,f;c["@attributes"]&&(d=c["@attributes"].sequence||-1,d*=1);if(c.Linear)f=new q(this),f.sequence=d,f.parseLinears(c.Linear),this.linearAds.push(f);else if(c.NonLinearAds)f=new p(this),f.sequence=d,f.parseNonLinears(c.NonLinearAds);else if(c.CompanionAds)f=
	new n(this),f.sequence=d,f.parseCompanionAds(c.CompanionAds)}}else this.warn("parse(): empty adpackage")},testAndUpdatePackageForTemporalSlot:function(a){this.log("testAndUpdatePackageForTemporalSlot("+a+")");a=a?this.linearAds:this.nonLinearAds;if(1>a.length)return!1;this.log("testAndUpdatePackageForTemporalSlot(), ads.length = "+a.length+"");var b=!1;if(!b)for(var c=0;c<a.length;c++){var d=this.findRenditionGroupByContentType(a[c]);if(0<d.length){this.log("testAndUpdatePackageForTemporalSlot() : found driving ad and renditions group: "+
	d);this.selectedDrivingRenditions=d;this.selectedDrivingAd=a[c];b=!0;break}}return b},testAndUpdatePackageForPageSlots:function(a){var b=!1,c=this.companionAds,d=J.slice(0),f=null;this.log("testAndUpdatePackageForPageSlots("+a+"), ads are "+c.join(",")+", slots are "+d.join(","));if(a){if(f=this.matchAdsToSlots(c,d),0<f.length){b=!0;for(a=0;a<f.length;a++)c=f[a],d=c.ad,this.selectedCompanionAds[c.slot.getCustomId()]=d}}else f=this.matchAdsToSlots(c,[C]),1===f.length?(b=!0,this.selectedDrivingAd=f[0].ad):
	this.selectedDrivingAd=null;return b},renditionFitsInSlot:function(a,b){return!a?!1:a.width<=b.getWidth()&&a.height<=b.getHeight()},calcDeadSpaceRatio:function(a,b){var c=a.getPrimaryRendition();if(!c)return!1;this.log("ad w,h  slot w,h"+[c.width,c.height,b.getWidth(),b.getHeight()]);return!this.renditionFitsInSlot(c,b)?1:1-c.width*c.height/b.getWidth()*b.getHeight()},matchAdsToSlots:function(a,b){this.log("matchAdsToSlots(ads="+a.join(",")+", slots="+b.join(",")+")");for(var c=[],d=null,f=null,g=
	1,h=0;h<a.length;h++)for(var i=a[h],j=0;j<b.length;j++){var k=b[j],l=this.calcDeadSpaceRatio(i,k);l<g&&(d=i,f=k,g=l)}null!==d&&(c.push({ad:d,slot:f}),a.splice(a.indexOf(d),1),b.splice(b.indexOf(f),1),c=c.concat(this.matchAdsToSlots(a,b)));this.log("matchAdsToSlots: winningAd:"+d+" winningSlot:"+f+" ratio:"+g);return c},getAllRenditions:function(a){return a.vastRenditions},findRenditionGroupByContentType:function(b){this.log("findRenditionGroupByContentType:"+b);var c=[];if(b instanceof q&&isNaN(b.duration))return this.warn("findRenditionGroupByContentType(), duration of linear ad is NaN, will not used for scheduling"),
	c;for(var d=this.getAllRenditions(b),f=0;f<d.length;f++){var g=d[f];if(b instanceof q){if(null==g.creativeType||""==a.Util.trim(g.creativeType)){this.warn("findRenditionGroupByContentType, the contentType "+g.creativeType+" not supported for linearAd");continue}}else if(!h(g.creativeType)){this.warn("findRenditionGroupByContentType, the contentType "+g.creativeType+" not supported for non-linearAd");continue}c.push(g)}return c},formalizeString:function(b){return!b?"":a.Util.trim(b).toLowerCase()},
	getAdsByTargetType:function(){this.log("getAdsByTargetType");var a=[];switch(I){case 8:a=this.companionAds;break;case 2:a=this.linearAds;break;case F:a=this.nonLinearAds}for(var b=0;b<a.length;b++)a[b].isDrivingAd=!0;return a},getImpressionOfWrapper:function(){this.log("getImpressionOfWrapper");for(var a=this.getAdsByTargetType(),b=null,c=0;c<a.length;c++){var d=a[c];if(d&&d._impressions&&0<d._impressions.length){b=d._impressions;break}}if(!b)b=this.impressions;return b},getTrackingEventsOfWrapper:function(){this.log("getTrackingEventsOfWrapper");
	for(var a=this.getAdsByTargetType(),b=null,c=0;c<a.length;c++){var d=a[c];if(d&&d._trackingEvents){b=d._trackingEvents;break}}return b},getClickThroughOfWrapper:function(){this.log("getClickThroughOfWrapper");for(var a=this.getAdsByTargetType(),b=null,c=0;c<a.length;c++){var d=a[c];if(d){if(d.clickThrough)b=d.clickThrough;for(var d=d.vastRenditions,f=0;f<d.length;f++){var g=d[f];if(g.clickThrough){b=g.clickThrough;break}}if(b)break}}return b},getClickTrackingsOfWrapper:function(){this.log("getClickTrackingsOfWrapper");
	for(var a=this.getAdsByTargetType(),b=null,c=0;c<a.length;c++){var d=a[c];if(d){if(d.clickTrackings&&0<d.clickTrackings.length)b=d.clickTrackings;for(var d=d.vastRenditions,f=0;f<d.length;f++){var g=d[f];if(g.clickTrackings&&0<g.clickTrackings.length){b=g.clickTrackings;break}}if(b)break}}return b},getCustomClicksOfWrapper:function(){this.log("getCustomClicksOfWrapper");for(var a=this.getAdsByTargetType(),b=null,c=0;c<a.length;c++){var d=a[c];if(d){if(d.customClicks&&0<d.customClicks.length)b=d.customClicks;
	for(var d=d.vastRenditions,f=0;f<d.length;f++){var g=d[f];if(g.customClicks&&0<g.customClicks.length){b=g.customClicks;break}}if(b)break}}return b},testWrapperForRedirect:function(){this.log("testAndUpdateWrapperForRedirect()");return this.tagUrl&&0<this.tagUrl.length},log:function(b){a.log("VastTranslator.VastAdPackage\t"+b)},warn:function(b){a.warn("VastTranslator.VastAdPackage\t"+b)}};v.prototype.constructor=v;u.prototype={getVastVersion:function(a){this.log("getVastVersion("+a+")");return a?0===
	a.indexOf("3.")?3:0===a.indexOf("2.")?2:0===a.indexOf("1.")?1:-1:-1},parseAdData:function(c){this.log("parseAdData()");var d={},f;d.selectedPackage=null;d.redirectPackage=null;var g=a.Util.xmlToJson(c);if(!g||!g.VAST||!g.VAST.Ad||!g.VAST["@attributes"]||2!==this.getVastVersion(g.VAST["@attributes"].version))b.handleStateTransition(a.TRANSLATOR_STATE_FAILED,{errorModule:"VastTranslator",errorCode:a.ERROR_PARSE});else{g.VAST.Ad=[].concat(g.VAST.Ad);var h=[],c=[],i;for(f=0;f<g.VAST.Ad.length;f++)i=new v,
	i.isWrapper=!!g.VAST.Ad[f].Wrapper,i.isWrapper?(i.parse(g.VAST.Ad[f].Wrapper),c.push(i)):(i.parse(g.VAST.Ad[f].InLine),h.push(i));g=!1;if(0===h.length&&0===c.length)return this.log("parseAdData(): no ads from vast response!!!"),[d];this.log("parseAdData(): "+h.length+"inline ads, "+c.length+" wrapper ads.");i=null;for(f=0;f<h.length;f++)if(this.selectUsableAdsForDrivingSlot(h[f])){this.log("parseAdData(): package for driving slot is found!!!");i=h[f];break}f=0<J.length&&A.getSlot().getTimePositionClass()!==
	a.TIME_POSITION_CLASS_DISPLAY;if(i)f&&this.selectUsableAdsCompanionSlots(i)&&this.log("parseAdData(): companion ads are found for companion slots, with driving slot"),d.selectedPackage=i;else if(f){f=!1;for(var j=0;j<h.length;j++)if(i=h[j],this.selectUsableAdsCompanionSlots(i))this.log("parseAdData(): companion ads are found for companion slots,without driving slot"),d.selectedPackage=i,f=!0;f||(this.log("parseAdData(): companion ads are not found for companion slots,without driving slot"),g=!0)}else this.log("parseAdData(): no usable ads found in vast response!!!"),
	g=!0;if(g&&0<c.length)for(h=0;h<c.length;h++)if(this.testWrapperForRedirect(c[h])){d.redirectPackage=c[h];this.selectUsableAdsCompanionSlots(c[h])&&this.log("parseAdData(): companion ads are found for wrapper ad");break}return[d]}},selectUsableAdsForDrivingSlot:function(a){this.log("selectUsableAdsForDrivingSlot()");var b=!0;switch(I){case 2:b=this.testAndUpdatePackageForTemporalSlot(a,!0);break;case F:b=this.testAndUpdatePackageForTemporalSlot(a,!1);break;case 8:b=this.testAndUpdatePackageForPageSlots(a,
	!1);break;default:b=!1}return b},selectUsableAdsCompanionSlots:function(a){this.log("selectUsableAdsCompanionSlots(pk)");return this.testAndUpdatePackageForPageSlots(a,!0)},testAndUpdatePackageForTemporalSlot:function(a,b){this.log("testAndUpdatePackageForTemporalSlot(pk,isLinear), isLinear = "+b);return a.testAndUpdatePackageForTemporalSlot(b)},testAndUpdatePackageForPageSlots:function(a,b){this.log("testAndUpdatePackageForPageSlots(pk,isCompanion) isCompanion = "+b);return a.testAndUpdatePackageForPageSlots(b)},
	testWrapperForRedirect:function(a){this.log("testWrapperForRedirect(pk)");return a.testWrapperForRedirect()},log:function(b){a.log("VastTranslator.VastParser\t"+b)},warn:function(b){a.warn("VastTranslator.VastParser\t"+b)}};var H=A.getActiveCreativeRendition().getWrapperUrl(),x=A.getActiveCreativeRendition().getWrapperType();c("AdInstance.getActiveCreativeRendition().getWrapperUrl()="+H+", getWrapperType()="+x);if("external/vast-2"!==x)b.handleStateTransition(a.TRANSLATOR_STATE_FAILED,{errorModule:"VastTranslator",
	errorCode:a.ERROR_NO_RENDERER,errorInfo:"wrapperType="+x});else if(!H||0===H.length)b.handleStateTransition(a.TRANSLATOR_STATE_FAILED,{errorModule:"VastTranslator",errorCode:a.ERROR_NULL_ASSET,errorInfo:"wrapperUrl="+H});else{x=b.getParameter("translator.vast.asyncLoad");x=!0===a.Util.str2bool(x);c("will load vast xml, asyncAjax:"+x);try{var G=new XMLHttpRequest;x?(G.open("GET",H),G.onreadystatechange=function(){4==G.readyState&&y(G)},G.onerror=function(){0==G.status?(d("CORS error"),b.handleStateTransition(a.TRANSLATOR_STATE_FAILED,
	{errorModule:"VastTranslator",errorCode:a.ERROR_SECURITY,errorInfo:H})):(d("exception:"+G.statusText),b.handleStateTransition(a.TRANSLATOR_STATE_FAILED,{errorModule:"VastTranslator",errorInfo:G.statusText}))},G.send()):(G.open("GET",H,!1),G.send(),y(G))}catch(M){x=!1;if(window.XMLHttpRequestException){if(M instanceof XMLHttpRequestException)switch(M.code){case XMLHttpRequestException.NETWORK_ERR:x=!0}}else M.code===DOMException.NETWORK_ERR&&(d("CORS in IE10"),x=!0);x?(d("CORS error:"+M),b.handleStateTransition(a.TRANSLATOR_STATE_FAILED,
	{errorModule:"VastTranslator",errorCode:a.ERROR_SECURITY,errorInfo:H})):(d("exception:"+M),b.handleStateTransition(a.TRANSLATOR_STATE_FAILED,{errorModule:"VastTranslator",errorInfo:M}))}}},info:function(){return{moduleType:a.MODULE_TYPE_TRANSLATOR}},log:function(b){a.log("VastTranslator\t"+b)},warn:function(b){a.warn("VastTranslator\t"+b)},getPlayheadTime:function(){return-1},getDuration:function(){return-1}};a.VastTranslator.prototype.constructor=a.VastTranslator;a.VideoAsset=function(b){this._defaultTimeouts=
	[5,10,15,30,60,120,180,300];this._context=b;this._internalState=a.MediaInitState.instance;this._eventCallback=this._state="";this._callbackTimer=null;this._requestedVideoViewUrl=this._videoPlayPending=!1;this._dummyInstanceId="";this._delay=0;this._location=this._networkId=this._duration=this._customId=this._id="";this._autoPlayType=a.VIDEO_ASSET_AUTO_PLAY_TYPE_ATTENDED;this._viewRandom=this._fallbackId=0};a.VideoAsset.prototype={setVideoAsset:function(b,c,d,f,g,h,j,k){if(b){var l=!1;switch(j){case a.ID_TYPE_FW:l=
	this._id!=b;this._id=b;break;case a.ID_TYPE_GROUP:l=this._id!="g"+b;this._id="g"+b;break;default:l=this._customId!=b,this._customId=b}if(l)this._eventCallback="";if("number"===typeof c)this._duration=Math.round(10*c)/10;if(0<1*d)this._networkId=1*d;if("string"===typeof f)this._location=f;if("number"===typeof g)this._autoPlayType=g;if(0<1*h)this._viewRandom=1*h;if(0<1*k)this._fallbackId=1*k;this._videoPlayPending&&this.play()}else a.warn("AdRequest.setVideoAsset","id is required.")},setVideoState:function(b){b===
	a.VIDEO_STATE_PLAYING?this.play():b===a.VIDEO_STATE_PAUSED||b===a.VIDEO_STATE_STOPPED?this.pause():b===a.VIDEO_STATE_COMPLETED&&this.complete();this._state=b},callback:function(b){this._eventCallback?this._eventCallback.process():b=!0;if(!b)(b=this._defaultTimeouts.shift())||(b=300),this._callbackTimer=new a.Timer(b,a.Util.bind(this,this.callback)),this._callbackTimer.start()},getPlayheadTime:function(){var a=this._delay;this._delay=0;a+=this._callbackTimer?this._callbackTimer.getPlayheadTime():0;
	return Math.floor(a)},play:function(){if(!this._context._adManager._serverURL||!this._context._adManager._networkId||!this._id&&!this._customId){if(a.warn("Server URL or Network ID or Video Asset id/customId is not set, pend video asset play request."),this._videoPlayPending=!0,!this._callbackTimer)this._callbackTimer=new a.Timer,this._callbackTimer.tick()}else if(this._eventCallback)this._videoPlayPending=!1,this._internalState.play(this);else if(!this._requestedVideoViewUrl&&(this._requestedVideoViewUrl=
	!0,this.requestForVideoViewCallback(),!this._callbackTimer))this._callbackTimer=new a.Timer,this._callbackTimer.tick()},pause:function(){this._internalState.pause(this)},complete:function(){this._internalState.complete(this)},onStartPlaying:function(){this.callback()},onStartReplaying:function(){this.callback()},onPausePlaying:function(){this.callback(!0);this._callbackTimer.pause()},onResumePlaying:function(){this._callbackTimer.start()},onCompletePlaying:function(){this.callback(!0);this._callbackTimer.stop();
	this._callbackTimer=null;this._eventCallback="";this._requestedVideoViewUrl=!1},onCompleteReplaying:function(){this.onCompletePlaying()},setMediaState:function(a){this._internalState=a},requestForVideoViewCallback:function(){var b=new a.Context(this._context._adManager);b._videoAsset=this;this._dummyInstanceId=b._instanceId;var b=this._context._adRequest.generateVideoViewRequestUrlWithDummyContextInstanceId(b._instanceId),c=this;a.PLATFORM_SEND_REQUEST_BY_FORM?(a.debug("Context.submitRequest:","use json2"),
	a.Util.pingURLWithForm(b,this._dummyInstanceId,!0),c._onMessagePosted=function(a){"object"===typeof a.data&&a.data.hasOwnProperty("cbfn")&&-1<a.data.cbfn.indexOf("['Context_"+this._dummyInstanceId+"']")&&c.requestComplete(a.data.response)},window.addEventListener("message",c._onMessagePosted,!1)):a.Util.pingURLWithScript(b)},requestComplete:function(b){this._delay=this._callbackTimer.tick();this._callbackTimer=null;if(a.PLATFORM_SEND_REQUEST_BY_FORM){window.removeEventListener("message",this._onMessagePosted,
	!1);var c=document.getElementById("_fw_request_iframe_"+this._dummyInstanceId);document.body.removeChild(c)}null!==b?(a._instanceQueue["Context_"+this._dummyInstanceId]=null,this.parse(a.Util.getObject("siteSection.videoPlayer.videoAsset",b)||{}),this.play()):a.warn("Failed to get video view callback url.")},parse:function(b){if(b){this._customId=b.customId;this._networkId=parseInt(b.networkId);for(var c=0,d=b.eventCallbacks||[];c<d.length;c++){var b=d[c],f=a.EventCallback.newEventCallback(this._context,
	b.name,b.type);if(f&&b.name===a.EVENT_VIDEO_VIEW){f.parse(b);this._eventCallback=f;a.debug("Parsed video view url: "+this._eventCallback._url);break}}}}};a.VideoRenderer=function(){this._adVideo=null;this._duration=this._playheadTime=-1;this._dragging=this._stopInvoked=this._isEnded=!1};a.VideoRenderer.prototype={start:function(b){var c=b.getAdInstance(),d=c.getSlot(),f=this,g=!1;if(a.PLATFORM_NOT_SUPPORT_VIDEO_AD)b.handleStateTransition(a.RENDERER_STATE_FAILED,{errorModule:"VideoRenderer",errorCode:a.ERROR_DEVICE_LIMIT,
	errorInfo:d.getTimePositionClass()});else if(a.PLATFORM_NOT_SUPPORT_MIDROLL_AD&&d.getTimePositionClass()===a.TIME_POSITION_CLASS_MIDROLL)b.handleStateTransition(a.RENDERER_STATE_FAILED,{errorModule:"VideoRenderer",errorCode:a.ERROR_DEVICE_LIMIT,errorInfo:"midroll"});else{a.log("VideoRenderer.start",d.getTimePositionClass());var h=d.getBase()._fw_contentVideo,j=d.getVideoDisplaySize().width,k=d.getVideoDisplaySize().height,l=c.getRenderableCreativeRenditions(),i=(j=(new a.RenditionSelector(b.getParameter(a.PARAMETER_DESIRED_BITRATE)||
	1E3,b.getParameter("arWeight")||1,b.getParameter("pxWeight")||1,0.2)).getBestFitRendition(l,j,k))?j.getPrimaryCreativeRenditionAsset():null;if(!i&&l.length)b.handleStateTransition(a.RENDERER_STATE_FAILED,{errorModule:"VideoRenderer",errorCode:a.ERROR_DEVICE_LIMIT,errorInfo:"no compatible asset"});else if(!i||!i.getUrl())b.handleStateTransition(a.RENDERER_STATE_FAILED,{errorModule:"VideoRenderer",errorCode:a.ERROR_NULL_ASSET});else{c.setActiveCreativeRendition(j);a.log("VideoRenderer.start selected rendition is:",
	i.getUrl());b.setCapability(a.EVENT_AD_QUARTILE,a.CAPABILITY_STATUS_ON);var q=!a.PLATFORM_NOT_SUPPORT_CLICK_FOR_VIDEO;q||b.setCapability(a.EVENT_AD_CLICK,a.CAPABILITY_STATUS_OFF);var p=a.PLATFORM_EVENT_CLICK,n=a.MOBILE_EVENT_DRAG;a.debug("VideoRenderer","use content video element");h.controls=!1;this._adVideo=h;var u=null,m=null,t=null,r=function(b){a.debug("VideoRenderer.checkTimeUpdate timeout");J(b)},o=function(){m&&(clearTimeout(m),m=null)},K=a.Util.bind(this,function(c){a.debug("onAdVideoBufferEmpty(): Ad video event "+
	c.type);c=b.getParameter(a.PARAMETER_RENDERER_VIDEO_PLAY_AFTER_STALLED);null==c||"undefined"===typeof c||!1===a.Util.str2bool(c)||(a.debug("play the ad immediately after the stalled event"),h&&h._fw_videoAdPlaying&&h.play())}),E=a.Util.bind(this,function(c){if(h.paused&&a.PLATFORM_NOT_FIRE_CLICK_WHEN_AD_VIDEO_PAUSED)h.play();else if(!b.getParameter(a.PARAMETER_EXTENSION_AD_CONTROL_CLICK_ELEMENT)){var d=b.getParameter(a.PARAMETER_RENDERER_VIDEO_CLICK_DETECTION);null==d&&(d="true");if(!1!==a.Util.str2bool(d))a.debug("Ad video event "+
	c.type),this._dragging?this._dragging=!1:b.processEvent({name:a.EVENT_AD_CLICK})}}),s=a.Util.bind(this,function(b){a.debug("Ad video event "+b.type);this._dragging=!0}),y,w,F=function(c){a.debug("Ad video event "+c.type+" ended: "+h.ended+" playing:"+h._fw_videoAdPlaying);if(h.ended&&0.2>Math.abs(h.duration-h.currentTime)||!h._fw_videoAdPlaying)y=setTimeout(function(){a.warn("Force ad video end bc ad paused with ended = true");c.type="ended";w(c)},200);else{var d=b.getParameter(a.PARAMETER_RENDERER_VIDEO_DISPLAY_CONTROLS_WHEN_PAUSE);
	null==d&&(d="true");!1===a.Util.str2bool(d)?a.debug("Pause controls disabled"):h.controls=!0;o()}},A=function(b){a.debug("Ad video event "+b.type);h.controls=!1},C=!1,I=function(){o();if(!h.paused){var c=b.getParameter(a.PARAMETER_RENDERER_VIDEO_PROGRESS_DETECT_TIMEOUT)||8E3;m=setTimeout(r,c,c+"ms timeout when playing")}if(!C){C=!0;f._playheadTime=h.currentTime;if(0>f._playheadTime)f._playheadTime=0;u&&(clearTimeout(u),u=null);f._quartileTimerId=setInterval(function(){var c=h.currentTime,d=h.duration;
	if(0<c)f._playheadTime=c;if(0<d)f._duration=d;if(!("number"!==typeof c||"number"!==typeof d||t))if(c>=0.25*d&&b.processEvent({name:a.EVENT_AD_FIRST_QUARTILE}),c>=0.5*d&&b.processEvent({name:a.EVENT_AD_MIDPOINT}),c>=0.75*d)clearInterval(f._quartileTimerId),f._quartileTimerId=null,b.processEvent({name:a.EVENT_AD_THIRD_QUARTILE})},1E3);b.handleStateTransition(a.RENDERER_STATE_STARTED)}};w=function(c){var d=t;c&&c.type&&(a.debug("Ad video event "+c.type),"error"===c.type&&(a.warn(c.target.src),a.warn(c.target.currentSrc)));
	o();u&&(clearTimeout(u),u=null);q&&(h.removeEventListener(p,E,!1),h.removeEventListener(n,s,!1));y&&(clearTimeout(y),y=null);h.removeEventListener("ended",w,!1);h.removeEventListener("error",w,!0);h.removeEventListener("pause",F,!1);h.removeEventListener("playing",A,!1);h.removeEventListener("timeupdate",I,!1);h.removeEventListener("stalled",K,!1);h.paused||(a.debug("try pausing video before complete"),h.pause());c&&"error"===c.type&&(d="video error",(c=h.error||c.target.error)&&(d="error:"+c+",code:"+
	c.code));if(!d)f._isEnded=!0;a.log("VideoRenderer.complete");if(!g){g=!0;delete h._fw_videoAdPlaying;f._adVideo=null;if(f._quartileTimerId)clearInterval(f._quartileTimerId),f._quartileTimerId=null;d?b.handleStateTransition(a.RENDERER_STATE_FAILED,{errorModule:"VideoRenderer",errorInfo:d}):(f._stopInvoked||(b.processEvent({name:a.EVENT_AD_FIRST_QUARTILE}),b.processEvent({name:a.EVENT_AD_MIDPOINT}),b.processEvent({name:a.EVENT_AD_THIRD_QUARTILE}),b.processEvent({name:a.EVENT_AD_COMPLETE})),f._stopInvoked=
	!1,b.handleStateTransition(a.RENDERER_STATE_COMPLETED))}};var J=function(b){t=b;a.warn(t);a.PLATFORM_WAIT_WHEN_AD_VIDEO_TIMEOUT||w()};h._fw_videoAdPlaying=!0;var N=!1,x=function(){if(!N){N=!0;q&&(h.addEventListener(p,E,!1),h.addEventListener(n,s,!1));h.addEventListener("ended",w,!1);h.addEventListener("error",w,!0);h.addEventListener("pause",F,!1);h.addEventListener("playing",A,!1);h.addEventListener("timeupdate",I,!1);h.addEventListener("stalled",K,!1);h.src=i.getUrl();a.log("VideoRenderer play video ad "+
	h.src);h.load();if(h._fw_fromVideoPool||a.PLATFORM_SUPPORT_VIDEO_START_DETECT_TIMEOUT){var c=b.getParameter(a.PARAMETER_RENDERER_VIDEO_START_DETECT_TIMEOUT)||5E3;u=setTimeout(J,c,c+"ms timeout before playing")}a.PLATFORM_VIDEO_DOESNOT_SUPPORT_TIMEUPDATE&&b.handleStateTransition(a.RENDERER_STATE_STARTED);0<a.PLATFORM_ANDROID_VERSION?(c=b.getParameter(a.PARAMETER_RENDERER_VIDEO_ANDROID_DELAY)||100,setTimeout(function(){h.play()},c)):setTimeout(function(){h.play()},100)}};!a.VideoRenderer._fw_playedDummyVideo&&
	d.getTimePositionClass()===a.TIME_POSITION_CLASS_PREROLL&&a.PLATFORM_PLAY_DUMMY_VIDEO_FOR_PREROLL&&!/\.webm$/.test(i.getUrl())?(a.VideoRenderer._fw_playedDummyVideo=!0,a.debug("play dummy video for iOS 3.2-4.1"),h.src="http://127.0.0.1:1/404.mp4",h.load(),h.play(),h._fw_videoAdPlaying=!0,h.addEventListener("error",function(){event.target.removeEventListener("error",arguments.callee,!0);x()},!0),setTimeout(x,a.PLATFORM_NOT_WAIT_FOR_ERROR_WHEN_PLAY_DUMMY_VIDEO_FOR_PREROLL?500:5E3)):x()}}},stop:function(){a.debug("VideoRenderer stop");
	this._stopInvoked=!0;if(this._adVideo)this._adVideo._fw_videoAdPlaying=!1,this._adVideo.pause()},info:function(){return{moduleType:a.MODULE_TYPE_RENDERER}},getPlayheadTime:function(){if(this._isEnded&&0<this._duration)return this._duration;if(this._adVideo){var a=this._adVideo.currentTime;if(0<a)return a}return this._playheadTime},getDuration:function(){return this._duration}};a.VideoRenderer.prototype.constructor=a.VideoRenderer;a.VideoStateExtension=function(a){this._context=a};a.VideoStateExtension.prototype=
	{_enabled:function(){var b=this._context.getParameter(a.PARAMETER_EXTENSION_VIDEO_STATE_ENABLED);null==b&&(b="false");return!0===a.Util.str2bool(b)},start:function(){this._enabled()?this._context.setVideoState(a.VIDEO_STATE_PLAYING):a.log("VideoStateExtension is disabled.")},dispose:function(){this._context=null}};a.VideoStateExtension.prototype.constructor=a.VideoStateExtension;a.VPAIDWrapper=function(){this._creative=null;this._timeoutInMs=0;this._eventHandlers={};this._loadIntervalTimer=this._timeoutTimer=
	null;this._timeoutOperation="";this.timeoutReached=!1};a.VPAIDWrapper.prototype={_isCreativeFunctionInvokable:function(a){return!this._creative?!1:(a=this._creative[a])&&"function"==typeof a?!0:!1},checkVPAIDInterface:function(a){for(var c={passed:!0,missingInterfaces:""},d=a.length-1;0<=d;d--)if(!this._isCreativeFunctionInvokable(a[d]))c.passed=!1,c.missingInterfaces+=a[d]+" ";return c},loadCreativeAsset:function(b){a.log("loadCreativeAsset("+b+")");var c=document.getElementById("vpaidFrame"),d=
	document.createElement("iframe");d.id="vpaidFrame";null==c?document.body.appendChild(d):document.body.replaceChild(d,c);d.width=0;d.height=0;d.style.display="none";d.contentWindow.document.write('<script type="text/javascript" src="'+b+'"> <\/script>');this._timeoutOperation="loadCreativeAsset";this._waitForTimeout();var f=this;this._loadIntervalTimer=setInterval(function(){var b=document.getElementById("vpaidFrame").contentWindow.getVPAIDAd;if(b&&"function"===typeof b)clearInterval(f._loadIntervalTimer),
	b=b(),"undefined"===typeof b?a.debug("getVPAIDAd() returns undefined value"):null===b?a.debug("getVPAIDAd() returns null"):(f._creative=b,f._eventHandlers.CreativeAssetLoaded())},200)},setCallbacksForCreative:function(a,c){for(var d in a)a.hasOwnProperty(d)&&this._creative.subscribe(a[d],d,c)},removeCallbacksForCreative:function(a){for(var c in a)a.hasOwnProperty(c)&&this._creative.unsubscribe(a[c],c)},handshakeVersion:function(b){a.log("VPAID Creative: handshakeVersion("+b+")");return this._creative.handshakeVersion(b)},
	initAd:function(b,c,d,f,g,h){a.log("VPAID Creative: initAd()");this._timeoutOperation="initAd";this._waitForTimeout();this._creative.initAd(b,c,d,f,g,h)},startAd:function(){a.log("VPAID Creative: startAd()");this._timeoutOperation="startAd";this._waitForTimeout();this._creative.startAd()},stopAd:function(){a.log("VPAID Creative: stopAd()");"startAd"===this._timeoutOperation?(clearTimeout(this._timeoutTimer),this._timeoutOperation="startAd and stopAd"):this._timeoutOperation+="stopAd";this._waitForTimeout();
	this._creative.stopAd()},canPauseAd:function(){return this._isCreativeFunctionInvokable("pauseAd")},canResumeAd:function(){return this._isCreativeFunctionInvokable("resumeAd")},pauseAd:function(){this.canPauseAd()&&(a.log("VPAID Creative: pauseAd()"),this._creative.pauseAd())},resumeAd:function(){this.canResumeAd()&&(a.log("VPAID Creative: resumeAd()"),this._creative.resumeAd())},getAdVolume:function(){return this._isCreativeFunctionInvokable("getAdVolume")?this._creative.getAdVolume():-1},getAdExpanded:function(){return this._isCreativeFunctionInvokable("getAdExpanded")?
	this._creative.getAdExpanded():!1},getAdRemainingTime:function(){return this._isCreativeFunctionInvokable("getAdRemainingTime")?this._creative.getAdRemainingTime():-1},getAdDuration:function(){return this._isCreativeFunctionInvokable("getAdDuration")?this._creative.getAdDuration():-1},getAdLinear:function(){return this._creative.getAdLinear()},getAdCompanions:function(){return this._isCreativeFunctionInvokable("getAdCompanions")?this._creative.getAdCompanions():""},setTimeoutValueInMs:function(a){this._timeoutInMs=
	a},cancelTimeoutEvent:function(){var a="startAd and stopAd"!==this._timeoutOperation;clearTimeout(this._timeoutTimer);if(!a){this._timeoutOperation="startAd";var c=this;setTimeout(function(){c._eventHandlers.timeout.call()},500)}},addEventListener:function(a,c){this._eventHandlers[a]=c},removeEventListener:function(a){this._eventHandlers[a]=null},_waitForTimeout:function(){a.log("Wait for "+this._timeoutOperation+" for "+this._timeoutInMs+"ms");if(this._eventHandlers.timeout){var b=this;this._timeoutTimer=
	setTimeout(function(){if(!b.timeoutReached)b.timeoutReached=!0;"startAd"===b._timeoutOperation?b.stopAd():("loadCreativeAsset"===b._timeoutOperation&&clearInterval(b._loadIntervalTimer),b._eventHandlers.timeout.call())},this._timeoutInMs)}},getTimeoutOperation:function(){return this._timeoutOperation}};a.VPAIDWrapper.prototype.constructor=a.VPAIDWrapper;a.VPAIDRenderer=function(){this.vpaidCreative=this.rendererController=null;this.vpaidVolume=this.vpaidDuration=-1;this.creativeEventCallbacks={};
	this.isMuted=!1;this.adPlaybackState="";this.creativeTimeoutDelayInMs=1E4;this.vpaidDesiredBitrate=268;this.vpaidViewmode="normal";this.playheadTime=0;this.SUPPORTED_CREATIVE_VPAID_VERSION_MIN=this.PLAYER_VPAID_VERSION=2};a.VPAIDRenderer.prototype={};a.VPAIDRenderer.prototype.constructor=a.VPAIDRenderer;a.VPAIDRenderer.VastCompanion=function(a,c,d,f){this._width=a;this._height=c;this._apiFramework=d;this._xmlNode=f};a.VPAIDRenderer.VastCompanion.prototype={getWidth:function(){return this._width},
	getHeight:function(){return this._height},_isValidResource:function(a,c){return"StaticResource"===a&&c["@attributes"].creativeType||"IFrameResource"===a&&c.value||"HTMLResource"===a&&c.value},hasValidRendtions:function(){for(var a in this._xmlNode)if(this._xmlNode.hasOwnProperty(a)&&("StaticResource"===a||"IFrameResource"===a||"HTMLResource"===a))for(var c=[].concat(this._xmlNode[a]),d=c.length-1;0<=d;d--)if(this._isValidResource(a,c[d]))return!0;return!1},translateToAdInstance:function(b){this._xmlNode.CompanionClickThrough&&
	b.setClickThroughUrl(a.EVENT_AD_CLICK,this._xmlNode.CompanionClickThrough.value);if(this._xmlNode.TrackingEvents){var c=this._xmlNode.TrackingEvents;if(c.Tracking){for(var c=[].concat(c.Tracking),d=[],f=c.length-1;0<=f;f--)"creativeView"===c[f]["@attributes"].event&&d.push(c[f].value);0<d.length&&b.addEventCallbackUrls(a.EVENT_AD_IMPRESSION,a.EVENT_TYPE_IMPRESSION,d)}}for(var g in this._xmlNode)if(this._xmlNode.hasOwnProperty(g)&&("StaticResource"===g||"IFrameResource"===g||"HTMLResource"===g)){c=
	[].concat(this._xmlNode[g]);for(f=c.length-1;0<=f;f--)if(this._isValidResource(g,c[f])){var d=c[f],h=b.addCreativeRendition();h.setWidth(this._width);h.setHeight(this._height);h.setCreativeApi("None");var j=h.addCreativeRenditionAsset("VPAIDAsset"+f,!0);j.setContentType("text/html_doc_lit_mobile");j.setMimeType("text/html");var k=b.getEventCallbackUrls(a.EVENT_AD_CLICK,a.EVENT_TYPE_CLICK)[0],l=g;"HTMLResource"===l?j.setContent(a.HTMLAdGenerator.wrapUnsafeHTML(d.value,b.getSlot().getCustomId(),this._width,
	this._height)):("IFrameResource"===l?creativeType="iframe":"StaticResource"===l&&(creativeType=this._xmlNode.creativeType),j.setContent(a.HTMLAdGenerator.generateAd(d.value,k,b.getSlot().getCustomId(),this._width,this._height,creativeType,j.getContentType())));a.debug("rendtion width: "+h.getWidth()+" height:"+h.getHeight()+" asset content:"+j.getContent())}}}};a.VPAIDRenderer.VastCompanion.prototype.constructor=a.VPAIDRenderer.VastCompanion;a.VPAIDRenderer.VastAdSelect=function(){};a.VPAIDRenderer.VastAdSelect.prototype=
	{_getDeadSpaceRatio:function(b,c){var d=b.getWidth(),f=b.getHeight(),g=c.getWidth(),h=c.getHeight(),j=1;d<=g&&f<=h&&(j=1-d*f/(g*h));a.debug("computing dead space ratio ("+j+") for slot "+g+"x"+h+" and ad "+d+"x"+f);return j},matchAdsWithSlots:function(b,c){a.log("VPAIDRenderer: Matching ads with slots");for(var d=0;d<c.length;++d)c[d].matched=!1;for(var f=[],g=[],d=0;d<b.length;d++)for(var h=0;h<c.length;h++)g.push({ratio:this._getDeadSpaceRatio(b[d],c[h]),adIndex:d,slotIndex:h});g.sort(function(a,
	b){return a.ratio-b.ratio});for(d=0;d<g.length&&!(1==g[d].ratio);d++){var h=g[d],j=b[h.adIndex],k=c[h.slotIndex];if(!j.matched&&!k.matched)a.log("Winning ratio:"+h.ratio+" Winning ad:"+j.getWidth()+"x"+j.getHeight()+" for slot:"+k.getWidth()+"x"+k.getHeight()),f.push({ad:j,slot:k}),j.matched=!0,k.matched=!0}return f}};a.VPAIDRenderer.VastAdSelect.prototype.constructor=a.VPAIDRenderer.VastAdSelect;a.Util.mixin(a.VPAIDRenderer.prototype,{_failWithError:function(b,c){this.rendererController.handleStateTransition(a.RENDERER_STATE_FAILED,
	{errorModule:"VPAIDRenderer",errorCode:b,errorInfo:c});this.dispose()},onCreativeTimeout:function(){a.log("VPAIDRenderer: onCreativeTimeout()");var b=this.vpaidCreative.getTimeoutOperation();this._failWithError(a.ERROR_TIMEOUT,"loadCreativeAsset"!==b?"Creative function "+b+" timeout":"load creative asset timeout")},onAdVolumeChange:function(){a.log("VPAIDRenderer: onAdVolumeChange()");var b=this.vpaidCreative.getAdVolume();if(0>b||1<b)a.log("Invalid ad volume value");else if(this.isMuted&&2<100*b)this.isMuted=
	!1,this.rendererController.processEvent({name:a.EVENT_AD_UNMUTE});else if(!this.isMuted&&2>100*b)this.isMuted=!0,this.rendererController.processEvent({name:a.EVENT_AD_MUTE})},onAdExpandedChange:function(){a.log("VPAIDRenderer: onAdExpandedChange()");this.vpaidCreative.getAdExpanded()?this.rendererController.processEvent({name:a.EVENT_AD_EXPAND}):this.rendererController.processEvent({name:a.EVENT_AD_COLLAPSE})},onAdDurationChange:function(){a.log("VPAIDRenderer: onAdDurationChange(): duration changed to "+
	this.vpaidCreative.getAdDuration())},onAdClickThru:function(b,c,d){a.log("VPAIDRenderer: onAdClickThru() with url:"+b+" id:"+c+" playerHandles:"+d);var f={name:tv.freewheel.SDK.EVENT_AD_CLICK,info:{}};f.info[a.INFO_KEY_CUSTOM_EVENT_NAME]=c||"";f.info[a.INFO_KEY_SHOW_BROWSER]=!0===d;!0===d?b?(a.log("onAdClickThru(): open window with overrided url"),f.info[a.INFO_KEY_URL]=b):a.log("onAdClickThru(): open window with url booked in MRM UI or VAST clickthru url"):a.log("onAdClickThru(): send click tracking");
	this.rendererController.processEvent(f)},onCreativeAssetLoaded:function(){a.log("VPAIDRenderer: onCreativeAssetLoaded()");this.vpaidCreative.cancelTimeoutEvent();var b=this,c=function(){var c=b.vpaidCreative.handshakeVersion(b.PLAYER_VPAID_VERSION.toFixed(1));if(c){if(parseFloat(c)<b.SUPPORTED_CREATIVE_VPAID_VERSION_MIN)return b._failWithError(a.ERROR_INVALID_VALUE,"Only support creatives with VPAID version >= "+b.SUPPORTED_CREATIVE_VPAID_VERSION_MIN.toFixed(1)),!1}else return b._failWithError(a.ERROR_3P_COMPONENT,
	"Cannot get VPAID version from the creative"),!1;return!0};if(function(){var c=b.vpaidCreative.checkVPAIDInterface("handshakeVersion,initAd,startAd,stopAd,subscribe,unsubscribe,getAdLinear".split(","));c.passed||b._failWithError(a.ERROR_3P_COMPONENT,"Missing interfaces in the VPAID creative: "+c.missingInterfaces);return c.passed}()&&c()){(function(){if((param=b.rendererController.getParameter(a.PARAMETER_VPAID_CREATIVE_TIMEOUT_DELAY))&&0<Number(param))b.creativeTimeoutDelayInMs=Number(param);a.log("initParams(), creative timeout delay in miliseconds:"+
	b.creativeTimeoutDelayInMs);var c=parseFloat(b.rendererController.getParameter(a.PARAMETER_DESIRED_BITRATE));b.vpaidDesiredBitrate=0<c?c:b.vpaidDesiredBitrate;a.log("initParams(), desired bitrate: "+b.vpaidDesiredBitrate)})();b.creativeEventCallbacks={AdStarted:b.onAdStarted,AdStopped:b.onAdStopped,AdSkipped:b.onAdSkipped,AdLoaded:b.onAdLoaded,AdLinearChange:b.onAdLinearChange,AdExpandedChange:b.onAdExpandedChange,AdDurationChange:b.onAdDurationChange,AdVolumeChange:b.onAdVolumeChange,AdImpression:b.onAdImpression,
	AdClickThru:b.onAdClickThru,AdVideoFirstQuartile:b.onAdVideoFirstQuartile,AdVideoMidpoint:b.onAdVideoMidpoint,AdVideoThirdQuartile:b.onAdVideoThirdQuartile,AdVideoComplete:b.onAdVideoComplete,AdUserAcceptInvitation:b.onAdUserAcceptInvitation,AdUserMinimize:b.onAdUserMinimize,AdUserClose:b.onAdUserClose,AdPaused:b.onAdPaused,AdPlaying:b.onAdResumed,AdError:b.onAdError,AdLog:b.onAdLog};b.vpaidCreative.setCallbacksForCreative(b.creativeEventCallbacks,b);this.rendererController.setCapability(a.EVENT_AD_QUARTILE,
	a.CAPABILITY_STATUS_ON);this.rendererController.setCapability(a.EVENT_AD_MUTE,a.CAPABILITY_STATUS_ON);this.rendererController.setCapability(a.EVENT_AD_EXPAND,a.CAPABILITY_STATUS_ON);this.rendererController.setCapability(a.EVENT_AD_PAUSE,a.CAPABILITY_STATUS_ON);this.rendererController.setCapability(a.EVENT_AD_CLOSE,a.CAPABILITY_STATUS_ON);this.rendererController.setCapability(a.EVENT_AD_MINIMIZE,a.CAPABILITY_STATUS_ON);this.rendererController.setCapability(a.EVENT_AD_ACCEPT_INVITATION,a.CAPABILITY_STATUS_ON);
	(c=this.rendition?this.rendition.getParameter("VPAID_creativeData"):null)&&(c=a.Util.trim(c));var c={AdParameters:c},d=this.rendererController.getAdInstance().getSlot(),f={slot:d.getBase(),videoSlot:this.rendererController.getContentVideoElement(),videoSlotCanAutoPlay:!0},g=d.getWidth(),d=d.getHeight();if((!g||!d)&&this.rendition)g=this.rendition.getWidth,d=this.rendition.getHeight;this.vpaidCreative.initAd(g,d,this.vpaidViewmode,this.vpaidDesiredBitrate,c,f)}},onAdLoaded:function(){a.log("VPAIDRenderer: onAdLoaded()");
	this.vpaidCreative.cancelTimeoutEvent();a.log("Ad duration:"+this.getDuration());var b=this,c=function(c,d){a.debug(d.length+" companion slots to fill.");if(!(0===d.length||0===c.length)){var h=(new a.VPAIDRenderer.VastAdSelect).matchAdsWithSlots(c,d);if(0!==h.length){for(var c=[],d=[],j=h.length-1;0<=j;j--)c.push(h[j].ad),d.push(h[j].slot);h=b.rendererController.scheduleAdInstances(d);for(j=h.length-1;0<=j;j--)c[j].translateToAdInstance(h[j])}}},d=function(b){if(!b)return a.log("The adCompanions property is empty."),
	null;a.log("parsing adCompanions: "+b);xmlDoc=null;window.DOMParser?xmlDoc=(new DOMParser).parseFromString(b,"text/xml"):(xmlDoc=new ActiveXObject("Microsoft.XMLDOM"),xmlDoc.async=!1,xmlDoc.loadXML(b));b=a.Util.xmlToJson(xmlDoc);if(!b||!b.CompanionAds||!b.CompanionAds.Companion)return a.log("No companion ads found in parsed xml"),[];for(var b=[].concat(b.CompanionAds.Companion),c=[],d=b.length-1;0<=d;d--){var j=b[d];if(j["@attributes"]){var k=j["@attributes"].width,l=j["@attributes"].height;if(!k||
	!l||0>k||0>l)a.log("Missing width/height for companion.");else{var i=j["@attributes"].apiFramework||"";a.debug("Companion "+k+"x"+l+" api:"+i);j=new a.VPAIDRenderer.VastCompanion(k,l,i,j);j.hasValidRendtions()&&c.push(j)}}}return c}(b.vpaidCreative.getAdCompanions());d&&0<d.length?c(d,this.rendererController.getCompanionSlots()):a.log("VPAIDAdRenderer: No companions from VPAID creative.");this.vpaidCreative.startAd()},onAdStarted:function(){a.log("VPAIDRenderer: onAdStarted()");this.vpaidCreative.timeoutReached?
	a.log("VPAID ad has already failed due to timeout. The AdStarted event will not be handled."):this.vpaidCreative.cancelTimeoutEvent()},onAdStopped:function(){a.log("VPAIDRenderer: onAdStopped()");this.vpaidCreative.cancelTimeoutEvent();this.timePositionClass===a.TIME_POSITION_CLASS_OVERLAY&&this.vpaidCreative.getAdLinear()&&this.rendererController.requestContentStateChange(!1);this.vpaidCreative&&!this.vpaidCreative.timeoutReached&&(this.rendererController.handleStateTransition(a.RENDERER_STATE_COMPLETED),
	this.dispose())},onAdImpression:function(){a.log("VPAIDRenderer: onAdImpression()");if(this.vpaidCreative.timeoutReached)a.log("VPAID ad has already failed due to timeout. The AdImpression event will not be handled.");else{var b=this.vpaidCreative.getAdVolume();this.isMuted=0<b&&2>=100*b;this.adPlaybackState="playing";this.rendererController.handleStateTransition(a.RENDERER_STATE_STARTED)}},onAdLinearChange:function(){a.log("VPAIDRenderer: onAdLinearChange()");var b=this.vpaidCreative.getAdLinear();
	b?a.log("onAdLinearChange(): non-linear click to linear -> request content video to pause"):a.log("onAdLinearChange(): linear back to non-linear -> request content video to resume");this.rendererController.requestContentStateChange(b)},onAdPaused:function(){a.log("VPAIDRenderer: onAdPaused()");"playing"===this.adPlaybackState&&this.rendererController.processEvent({name:a.EVENT_AD_PAUSE});this.adPlaybackState="paused"},onAdResumed:function(){a.log("VPAIDRenderer: onAdResumed()");"paused"===this.adPlaybackState&&
	this.rendererController.processEvent({name:a.EVENT_AD_RESUME});this.adPlaybackState="playing"},onAdSkipped:function(){a.log("VPAIDRenderer: onAdSkipped()");this.dispose();this.rendererController.handleStateTransition(a.RENDERER_STATE_COMPLETED)},onAdVideoFirstQuartile:function(){a.log("VPAIDRenderer: onAdVideoFirstQuartile()");this.rendererController.processEvent({name:a.EVENT_AD_FIRST_QUARTILE})},onAdVideoMidpoint:function(){a.log("VPAIDRenderer: onAdVideoMidpoint()");this.rendererController.processEvent({name:a.EVENT_AD_MIDPOINT})},
	onAdVideoThirdQuartile:function(){a.log("VPAIDRenderer: onAdVideoThirdQuartile()");this.rendererController.processEvent({name:a.EVENT_AD_THIRD_QUARTILE})},onAdVideoComplete:function(){a.log("VPAIDRenderer: onAdVideoComplete");this.rendererController.processEvent({name:a.EVENT_AD_COMPLETE})},onAdUserAcceptInvitation:function(){a.log("VPAIDRenderer: onAdUserAcceptInvitation()");this.rendererController.processEvent({name:a.EVENT_AD_ACCEPT_INVITATION})},onAdUserClose:function(){a.log("VPAIDRenderer: onAdUserClose()");
	this.rendererController.processEvent({name:a.EVENT_AD_CLOSE})},onAdUserMinimize:function(){a.log("VPAIDRenderer: onAdUserMinimize()");this.rendererController.processEvent({name:a.EVENT_AD_MINIMIZE})},onAdLog:function(b){a.log("VPAIDRenderer: onAdLog: "+b)},onAdError:function(b){a.log("VPAIDRenderer: onAdError(): "+b);this._failWithError(a.ERROR_3P_COMPONENT,"AdError event:"+b)},start:function(b){var c;a.log("VPAIDRenderer start()");this.rendererController=b;this.timePositionClass=b.getAdInstance().getSlot().getTimePositionClass();
	(b=(c=(this.rendition=b.getAdInstance().getActiveCreativeRendition())?this.rendition.getPrimaryCreativeRenditionAsset():null,b=c)?b.getUrl():null)?(this.vpaidCreative=new a.VPAIDWrapper,this.vpaidCreative.setTimeoutValueInMs(this.creativeTimeoutDelayInMs),this.vpaidCreative.addEventListener("timeout",this.onCreativeTimeout.bind(this)),this.vpaidCreative.addEventListener("CreativeAssetLoaded",this.onCreativeAssetLoaded.bind(this)),this.vpaidCreative.loadCreativeAsset(b)):this._failWithError(a.ERROR_NULL_ASSET,
	"Creative asset url cannot be null")},stop:function(){a.log("VPAIDRenderer stop()");this.vpaidCreative.stopAd()},info:function(){return{moduleType:a.MODULE_TYPE_RENDERER}},getPlayheadTime:function(){var a=this.vpaidCreative.getAdDuration(),c=this.vpaidCreative.getAdRemainingTime();if(0<=a&&0<=c)this.playheadTime=a-c;if(0>this.playheadTime)this.playheadTime=-1;return this.playheadTime},getDuration:function(){var a=this.vpaidCreative.getAdDuration();return 0<=a?a:-1},pause:function(){a.log("VPAIDRenderer pause()");
	this.rendererController.processEvent({name:a.EVENT_AD_PAUSE});if(this.vpaidCreative.canPauseAd()){if("playing"==this.vpaidCreative.adPlaybackState)this.adPlaybackState="pausing",this.vpaidCreative.pauseAd()}else a.log("The creative is not able to pause")},resume:function(){a.log("VPAIDRenderer resume()");this.rendererController.processEvent({name:a.EVENT_AD_RESUME});if(this.vpaidCreative.canResumeAd()){if("paused"==this.vpaidCreative.adPlaybackState)this.adPlaybackState="resuming",this.vpaidCreative.resumeAd()}else a.log("The creative is not able to resume")},
	dispose:function(){a.log("VPAIDRenderer dispose()");if(this.vpaidCreative)this.vpaidCreative.removeCallbacksForCreative(this.creativeEventCallbacks),this.vpaidCreative.removeEventListener("timeout"),this.vpaidCreative=null}});return a};if(!t.tv.freewheel.SDK)t.tv.freewheel.SDK=t.tv.freewheel[O]("tv.freewheel.SDK");return t})();
	/**
	 * Copyright (c) 2009-2010 Glanceguide, Inc. All rights reserved.
	 * http://www.glanceguide.com Decompiling, reverse engineering, copying or
	 * unauthorized redistribution is prohibited.
	 * 
	 * Load and use gg.js or gg.swf
	 * 
	 */
	(function(){
		var cE = '3.5';
		var dm = {};
		var df = true;
		var cL = '';
		var cP = "";
		var cR = "//www.glanceguide.com/conerror.php";
		var cQ = 60000;
		var ggPageLoaded = false;
		var jsuserid;
		var _ggeom = 1;
		var au = 2;
		var O = false;
		var bStr = navigator.userAgent;
		var bLoc = bStr.indexOf("Firefox");
		if (bStr != null && bLoc >= 0) {
			bJ = true;
			bVer = bStr.substring(bLoc + 8, bLoc + 9);
			if (Number(bVer) >= 3)
				O = true;
		}
		bLoc = bStr.indexOf("MSIE");
		if (bStr != null && bLoc >= 0) {
			bVer = bStr.substring(bLoc + 5, bLoc + 6);
			if (Number(bVer) >= 6)
				O = true;
		}
		if (window.addEventListener)
			window.addEventListener('load', pageLoaded, false);
		else if (window.attachEvent)
			window.attachEvent('onload', pageLoaded);
		function pageLoaded() {
		//	btg.Logger.getLogger("GlanceGuide").finest("loaded.");
			ggPageLoaded = true;
			for ( var i = 0; i < ggjs.length; i++)
				ggjs[i].ggJsLoaded();
		};
		function ggSWFLoaded(ggSwfId) {
			ggjs[ggSwfId].ggSwfLoaded();
		};
		var ggjs = [];
		BTG.gg = function(){
			var ggJsMet = null;
			var ggFlashMet = null;
			var ggLoaded = false;
			var ggSwfId = null;
			var cN = [];
			var I;
			this.ggInitialize = function(cB, uid, di) {
				var name;
				var fpar = "";
				dm = cB;
				df = di;
				for (name in dm)
					fpar += "<" + name + ">" + dm[name] + "</" + name + ">";
				if (df && FlashDetect.versionAtLeast(8)) {
					I = "gen3flvplayer";
					ggSwfId = new Date().getTime()
					+ (((Math.random() * Math.random() * 10000) | 0) * 1000);
					var divName = '_flash_proxy_' + ggSwfId;
					var aH = document.createElement("div");
					aH.id = divName;
					document.body.appendChild(aH);
					if (cB.sfcode == undefined || cB.sfcode.length != 2)
						cP = '//secure-us.imrworldwide.com/novms/gn/3/ggce302.swf';
					else
						cP = "//secure-" + cB.sfcode
						+ '.imrworldwide.com/novms/gn/3/ggce302.swf';
					;
					var P = new SWFObject(cP, "ggSwfId" + ggSwfId, 1, 1, "8");
					P.addParam('allowscriptaccess', 'always');
					P.addVariable("width", 1);
					P.addVariable("height", 1);
					P.addVariable("ggSwfId", ggSwfId);
					ggjs[ggSwfId] = this;
					cN.push(I);
					cN.push(uid);
					cN.push(fpar);
					P.write(divName);
					setTimeout(ggSwfLoadFailed, cQ);
				} else
					try {
						I = "genjsplayer";
						ggJsMet = new Metrics();
						ggJsMet.init(I, uid, cL, fpar);
					} catch (av) {
					}
			};
			this.ggPM = function(eventType, d, f, j, k) {
				eventType = String(eventType);
				d = String(d);
				f = String(f);
				j = String(j);
				k = String(k);
				try {
					if (ggJsMet != null && ggPageLoaded)
						ggJsMet.C(eventType, new Date().getTime(), d, f, j, k);
					else {
						if (ggLoaded)
							ggFlashMet.ggProcessMetric(eventType, new Date().getTime(),
									d, f, j, k);
						else {
							cN.push(eventType);
							cN.push(new Date().getTime());
							cN.push(d);
							cN.push(f);
							cN.push(j);
							cN.push(k);
						}
					}
				} catch (av) {
				}
			};
			this.ggJsLoaded = function() {
				if (ggJsMet == null)
					return;
				for ( var i = 0; i < cN.length; i += 6)
					ggJsMet.C(cN[i], cN[i + 1], cN[i + 2], cN[i + 3], cN[i + 4],
							cN[i + 5]);
				cN = [];
			};
			this.ggSwfLoaded = function() {
				ggFlashMet = (navigator.appName.indexOf("Microsoft") != -1) ? window["ggSwfId"
				                                                                     + ggSwfId]
				: document["ggSwfId" + ggSwfId];
				                                                                     ggFlashMet.ggInitialize(cN[0], cN[1], cN[2]);
				                                                                     if (cN.length > 3) {
				                                                                    	 for ( var i = 3; i < cN.length; i += 6)
				                                                                    		 ggFlashMet.ggProcessMetric(cN[i], cN[i + 1], cN[i + 2],
				                                                                    				 cN[i + 3], cN[i + 4], cN[i + 5]);
				                                                                     }
				                                                                     cN = [];
				                                                                     ggLoaded = true;
			};
			function ggSwfLoadFailed() {
				if (ggJsMet != null || ggLoaded)
					return;
				var p = new Image(1, 1);
				p.src = cR + '?CONERROR=GGLOADFAIL,'
				+ (new Date().getTimezoneOffset() / -60) + ','
				+ new Date().getTime()
				+ ',gg.js timed out waiting to load gg.swf';
			}
		};
		function Metrics() {
			var _address;
			var _version = "3.53";
			var cd;
			var ca;
			var _currentMsgSize = 0;
			var aE;
			var aZ = false;
			var az = false;
			var at = 0;
			var bb = 0;
			var aA = 5;
			var cK = 0;
			var cr = "";
			var cl = 1300;
			var cJ, cu, cI;
			var ci = 0, aP, aU, aT, aS;
			var _ggtrackid;
			var _ggplayername;
			var dr = 0;
			var iaguc = "";
			var iagua = "";
			var scxpc = "";
			var scxpa = "";
			var cZ = "";
			var _pageUrl = "";
			var intCount = 0;
			var aY = false;
			var bG = 10;
			var bi = "0";
			var bV = 0;
			var o = 0;
			var aX;
			var aW;
			var cV = new Array();
			var playState = 0;
			var videoType;
			var ai = -1;
			var ae = 0;
			var am = 0;
			var ab = 0;
			var aC = 0;
			var B = 0;
			var L = 0;
			var cU = new Object;
			var aQ = 2;
			cU.CS = new Array(2);
			cU.PA = new Array(2);
			cU.PL = new Array(2);
			cU.SA = new Array(2);
			cU.FA = new Array(2);
			cU.SI = new Array(2);
			cU.SR = new Array(2);
			cU.SK = new Array(2);
			cU.CI = new Array(2);
			cU.DI = new Array(2);
			cU.ER = new Array(2);
			cU.SV = new Array(2);
			cU.SH = new Array(2);
			cU.PB = new Array(2);
			cU.II = new Array(2);
			cU.VL = new Array(2);
			cU.PM = new Array(2);
			cU.FP = new Array(2);
			cU.MI = new Array(2);
			cU.Title = new Array(2);
			var _jmet = this;
			this.bT = function() {
				return cU;
			};
			this.getgp = function() {
				return cV;
			};
			this.bL = function() {
				return _pageUrl;
			};
			this.dk = function() {
				return o;
			};
			function bf(i) {
				cU["CS"][i] = 0;
				cU["PA"][i] = 0;
				cU["PL"][i] = 0;
				cU["SA"][i] = 0;
				cU["FA"][i] = 0;
				cU["FP"][i] = 0;
				cU["SI"][i] = 0;
				cU["MI"][i] = 0;
				cU["SR"][i] = 0;
				cU["SK"][i] = 0;
				cU["CI"][i] = 0;
				cU["DI"][i] = 0;
				cU["ER"][i] = 0;
				cU["SV"][i] = 0;
				cU["SH"][i] = 0;
				cU["PB"][i] = 0;
				cU["II"][i] = 0;
				cU["VL"][i] = 0;
				cU["PM"][i] = 0;
			}
			;
			function numorder(a, b) {
				var a1 = Number(a);
				var b1 = Number(b);
				if (a1 < b1)
					return -1;
				else if (a1 == b1)
					return 0;
				return 1;
			}
			;
			function ba() {
				bX = cr.split(",");
				var i = 0;
				for (i = 0; i < bX.length; i++)
					if (isNaN(bX[i])) {
						var x = bX[i].split("%");
						if (isNaN(x[0]))
							bX[i] = 0;
						else
							bX[i] = Number(x[0]) * cU["VL"][bV] / 100;
					}
				bX.sort(numorder);
				i = bX.length;
				while (--i > 0) {
					while (bX[i] == bX[i - 1]) {
						bX.splice(i - 1, 1);
					}
				}
				if (bX[0] == 0)
					bX.splice(0, 1);
			}
			;
			function M(name, cora) {
				var st;
				if (cora == 1)
					st = aW;
				else
					st = aX;
				var r = -1;
				var K = -1;
				r = st.indexOf("<" + name + ">");
				if (r >= 0) {
					r += name.length + 2;
					K = st.indexOf("</" + name + ">", r);
				}
				if (r >= 0 && K > r)
					return st.substring(r, K);
				return null;
			}
			;
			function getut(A) {
				var cX;
				if (au == 1)
					cX == "";
				else {
					cX = "";
					if (cV.prod.indexOf("iag") >= 0) {
						if (o)
							cX = iagua;
						else
							cX = iaguc;
						if (A == 2)
							cX += "&pr=iag.cp,cep";
						else if (A == 1)
							cX = "";
						else
							cX += "&pr=iag.cp,soc";
					}
					if (cV.prod.indexOf("vc") >= 0) {
						if (A == 1)
							cX = "&ig=1";
						else {
							var x2 = M("censuscategory", o);
							if (x2 != null && x2 != "")
								cX += "&cg=" + escape(x2);
							if (o)
								cX += "&c3=st,a";
							cX += "&tl="
								+ escape("dav" + A + "-"
										+ cU["Title"][o].substr(0, 128));
						}
					} else if (cV.prod.indexOf("sc") >= 0) {
						var x2 = M("censuscategory", o);
						if (x2 != null && x2 != "")
							cX += "&cg=" + escape(x2);
						if (o)
							cX += "&c3=st,a";
						cX += "&ou=" + escape(_pageUrl.substr(0, 128));
						if (A == 0) {
							if (cU["VL"][o] > 0)
								cX += "&sd=" + Math.round(cU["VL"][o]);
						} else {
							var du = Math.round(cU["PM"][o]);
							cX += "&du=" + du;
						}
						if (A != 1)
							if (o)
								cX += scxpa;
							else
								cX += scxpc;
						cX += "&tl="
							+ escape("dav" + A + "-"
									+ cU["Title"][o].substr(0, 128));
					}
					cX += "&tp=gg";
				}
				return cX;
			}
			;
			function dp(bD, curval, ac) {
				var x2 = M("iag_" + bD, ac);
				if (x2 != null && x2 != "")
					return "&pr=iag." + bD + "," + escape(x2);
				if (curval == null)
					return "";
				return curval;
			}
			;
			function dn(ac, p1, p2, p3, p4) {
				var s;
				if (cV.prod.indexOf("iag") >= 0)
					s = "";
				else
					return;
				var sid, tfid, bcr, pgm, epi, seg, pd, oad, brn, cte, ap;
				if (ac) {
					iagua = "";
					if (cV.iagads == 2)
						return;
				} else {
					iaguc = "";
					if (cV.iagcontent == 2)
						return;
				}
				if (cV.sid != undefined)
					sid = "&pr=iag.sid," + cV.sid;
				if (cV.tfid != undefined)
					tfid = "&pr=iag.tfid," + cV.tfid;
				bcr = "&pr=iag.bcr," + cV.clientid;
				if (ac == 0 || p2 != "preroll") {
					var x2 = M("iagcategory", 0);
					if (x2 == null || x2 == "")
						x2 = M("category", 0);
					if (x2 != null && x2 != "")
						pgm = "&pr=iag.pgm," + escape(x2);
					else
						pgm = "&pr=iag.pgm,general";
					x2 = M("title", 0);
					if (x2 != null && x2 != "")
						epi = "&pr=iag.epi," + escape(x2);
					else
						epi = "&pr=iag.epi," + escape(cU["Title"][0].substr(0, 255));
					seg = "&pr=iag.seg,";
					if (p4 > 1)
						seg += escape(p4);
					else
						seg += "1";
					x2 = M("pd", 0);
					if (x2 == null)
						x2 = cV.pd;
					if (x2 != null && x2 != "")
						pd = "&pr=iag.pd," + escape(x2);
					else
						pd = "";
					x2 = M("oad", 0);
					if (x2 != null && x2 != "")
						oad = "&pr=iag.oad," + escape(x2);
					else
						oad = "";
					pgm = dp("pgm", pgm, 0);
					epi = dp("epi", epi, 0);
				}
				if (ac) {
					brn = "&pr=iag.brn," + cV.clientid;
					cte = "&pr=iag.cte," + escape(p1);
					if (p2 == "midroll")
						ap = "&pr=iag.ap,mid";
					else if (p2 == "postroll")
						ap = "&pr=iag.ap,post";
					else
						ap = "&pr=iag.ap,pre";
					bcr = dp("bcr", bcr, ac);
					brn = dp("brn", brn, ac);
					pgm = dp("pgm", pgm, ac);
					epi = dp("epi", epi, ac);
					seg = dp("seg", seg, ac);
					pd = dp("pd", pd, ac);
					oad = dp("oad", oad, ac);
					iagua = sid + tfid + bcr + pgm + epi + seg + pd + brn + ap + cte;
				} else
					iaguc = sid + tfid + bcr + pgm + epi + seg + pd + oad;
			}
			;
			function ds(ac, p1, p2, p3, p4) {
				var s;
				if (cV.prod.indexOf("sc") >= 0)
					s = "";
				else
					return;
				if (ac)
					scxpa = "";
				else
					scxpc = "";
				var st;
				if (ac == 1)
					st = aW;
				else
					st = aX;
				var r = 0;
				var done = false;
				var K;
				var dq;
				var name, val;
				while (done == false) {
					r = st.indexOf("<ggxp_", r);
					if (r < 0) {
						done = true;
						break;
					}
					K = st.indexOf(">", r);
					if (K < 0) {
						done = true;
						break;
					}
					name = st.substring(r + 6, K);
					dq = st.indexOf("</", K + 1);
					if (dq < 0) {
						done = true;
						break;
					}
					val = st.substring(K + 1, dq);
					r = dq + 7;
					var name2 = escape(name);
					if (name2.indexOf("%") < 0) {
						if (name.length > 32)
							name = name.substring(0, 31);
						if (val.length > 128)
							val = val.substring(0, 127);
						s += "&" + name + "=" + escape(val);
					}
				}
				if (ac)
					scxpa = s;
				else
					scxpc = s;
			}
			;
			function report(A) {
				var cX = getut(A);
				ca.report(aL(), A, cX);
				_currentMsgSize = 0;
				aQ = A;
			}
			;
			function cO() {
				if (aQ != 2) {
					var cX = getut(2);
					ca.bp(cX);
				}
			}
			;
			this.bC = function() {
				var T;
				try {
					T = window.top.document.hasFocus();
				} catch (av) {
					T = aE;
				}
				if (T == true)
					az = true;
				if (playState == 1) {
					if (T == true)
						cU["FA"][bV] += 1;
					cU["FP"][bV] += 1;
				}
			};
			function bu() {
				var ao = false;
				try {
					var bU = window.top.document.hasFocus();
				} catch (av) {
					ao = true;
				}
				if (ao) {
					if (window.top.addEventListener)
						window.top.addEventListener('focus', aO, false);
					else if (window.top.attachEvent)
						window.top.attachEvent('onfocus', aO);
					if (window.top.addEventListener)
						window.top.addEventListener('blur', aG, false);
					else if (window.top.attachEvent)
						window.top.attachEvent('onblur', aG);
				}
				return ao;
			}
			;
			function aO() {
				aE = true;
			}
			;
			function aG() {
				aE = false;
			}
			;
			function bs() {
				az = false;
				cU["FA"][0] = cU["FA"][1] = 0;
				cU["FP"][0] = cU["FP"][1] = 0;
			}
			;
			function U(Q) {
				var vs = "";
				var D;
				var i = bV;
				if (cU["FP"][i] > 0 && az == true)
					D = Math.round(cU["FA"][i] * 100 / cU["FP"][i]);
				else
					D = 100;
				if (Q != null && Q != "")
					vs = Q;
				else
					vs = cU["PL"][i];
				vs += "," + D;
				if (Number(cU["PM"][i]) < Q)
					cU["PM"][i] = Q;
				return vs;
			}
			;
			function aL() {
				var t = 'NA';
				if (at > 0 || bb > 0) {
					t = (Math.round((at * 100) / (at + bb))) + '%';
					if (aZ)
						t = 'u' + t;
				}
				return t;
			}
			;
			function loadXMLString(txt) {
				try {
					xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
					xmlDoc.async = "false";
					xmlDoc.loadXML(txt);
					return (xmlDoc);
				} catch (e) {
					try {
						bv = new DOMParser();
						xmlDoc = bv.parseFromString(txt, "text/xml");
						return (xmlDoc);
					} catch (e) {
						alert(e.message)
					}
				}
				return (null);
			}
			;
			this.init = function(I, userId, ggAddress, fpar) {
				bi = userId;
				var fxml = loadXMLString("<vi>" + fpar + "</vi>");
				var xn = fxml.firstChild.firstChild;
				var lim = 0;
				while (xn != undefined && lim < 20) {
					if (xn.firstChild != null)
						cV[xn.nodeName] = xn.firstChild.nodeValue;
					xn = xn.nextSibling;
					lim++;
				}
				if (au != 1) {
					if (cV.sfcode == undefined || cV.sfcode.length != 2)
						ggAddress = "//secure-us.imrworldwide.com/cgi-bin/m?";
					else
						ggAddress = "//secure-" + cV.sfcode
						+ ".imrworldwide.com/cgi-bin/m?";
					ggAddress += "ci=" + cV.clientid;
					if (cV.cisuffix != undefined && cV.cisuffix != "")
						ggAddress += cV.cisuffix;
					if (cV.vcid != undefined && cV.vcid != "")
						ggAddress += "&c6=vc," + cV.vcid;
					if (cV.aJ != undefined && cV.aJ != "")
						ggAddress += "&c4=mn," + escape(cV.aJ);
					ggAddress += "&cc=1";
				}
				_address = ggAddress;
				if (cV.prod == undefined)
					cV.prod = "vc";
				this._ggtrackid = cV.clientid;
				if (cV.vcid != null)
					this._ggtrackid += "." + cV.vcid;
				if (I == 'genjsplayer')
					cd = new GenJsPlayerEventProcessor();
				else
					cd = new EventProcessor();
				this._ggplayername = "gj3";
				if (cV["msgmax"] != null && cV["msgmax"] > 0)
					cl = cV["msgmax"];
				if (cV["msgint"] != null && cV["msgint"] != "")
					cr = cV["msgint"];
				if (cV["focusint"] != null && cV["focusint"] >= 0)
					aA = cV["focusint"];
				if (O) {
					if (window.addEventListener)
						window.addEventListener('unload', cO, false);
					else if (window.attachEvent)
						window.attachEvent('onbeforeunload', cO);
				}
				ca = new cz(_version, userId, _address, true, true, _jmet);
				if (aA != 0) {
					aZ = bu();
					cu = setInterval(this.bC, aA * 1000);
				}
				this.C('1', new Date().getTime(), window.location.href,
						document.referrer);
			};
			this.aD = function(i, ts) {
				var V = "";
				var m = 0;
				var D = 1;
				var i = bV;
				if (cU["CS"][i] != 0 && cU["PA"][i] > 0 && cU["VL"][i] > 0) {
					if (cU["PA"][i] >= cU["VL"][i])
						m = 99;
					else if (cU["VL"][i] > 0)
						m = Math.round(cU["PA"][i] * 100 / cU["VL"][i]);
					else
						m = 66;
					if (cU["FP"][i] > 0 && az == true) {
						D = cU["FA"][i] / cU["FP"][i];
						m = Math.round(m * .8 + m * D * 0.2);
					}
					if (cU["MI"][i] > 0 && cU["SI"][i] <= 0)
						m -= 10;
					else if (cU["SI"][i] > 0)
						m += 5;
					if (cU["SR"][i] > 0)
						;
					m += 10;
					if (cU["SH"][i] > 0 || cU["SV"][i] > 0 || cU["PB"][i] > 0
							|| cU["CI"][i] > 0)
						m = 99;
					if (cU["II"][i] > 0)
						m += 10;
					if (cU["ER"][i] > 0 && cU["ER"][i] <= 5)
						m = cU["ER"][i] * 20;
					if (m > 99)
						m = 99;
					V = ts + "," + 50 + "," + m + "," + Math.round(D * 100) + "|||";
					cU["CS"][i] = 0;
				}
				if (ae > 0) {
					V = ts + "," + "25" + "," + ae + "," + am + "," + ab + "|||" + V;
					ae = 0;
					am = 0;
					ab = 0;
				}
				return V;
			};
			this.C = function(eventType, date, d, f, j, k) {
				var l = null;
				var bd = 0;
				var v;
				var i, g, R;
				var aF, aB;
				var functionType = eventType;
				if (ci == functionType && aP == d && aU == f && aT == j && aS == k)
					return;
				ci = functionType;
				aP = d;
				aU = f;
				aT = j;
				aS = k;
				aY = false;
				if (eventType.indexOf("cust:") == 0)
					l = cd.genericEvent(eventType, date, d, f, j, k);
				else
					l = cd.cs(eventType, date, d, f, j, k);
				if (l == null || l == "")
					return;
				var al = l.split(",");
				functionType = Number(al[1]);
				d = al[2];
				f = al[3];
				o = bV;
				switch (functionType) {
				case 1:
					cZ = l;
					if (aP != null)
						_pageUrl = aP;
					return;
				case 51:
					if (cZ != null) {
						cZ = date + ",1," + aP;
						if (aU != null && aU != "")
							cZ += "," + aU;
						if (aP != null)
							_pageUrl = aP;
						return;
					} else
						l = date + ",51," + aP;
					if (aU != null)
						l += "," + aU;
					_pageUrl = aP;
					break;
				case 2:
					break;
				case 3:
				case 15:
					intCount = 0;
					dr = 0;
					if (f == "preroll" || f == "postroll" || f == "midroll"
						|| f == "ad") {
						i = 1;
						aW = l;
					} else {
						i = 0;
						aX = l;
					}
					videoType = f;
					bV = i;
					o = i;
					bf(i);
					if (functionType == 15) {
						cU["CS"][i] = 1;
						playState = 1;
					}
					var H = unescape(M("length", bV));
					if (H != null && !isNaN(H))
						H = Number(H);
					else
						H = 30;
					cU["VL"][bV] = H;
					var tit = M("title", bV);
					if (tit != null && tit != "")
						cU["Title"][bV] = tit;
					else
						cU["Title"][bV] = d;
					if (bV == 0)
						ba();
					L = 0;
					dn(i, d, f, j, k);
					ds(i, d, f, j, k);
					break;
				case 4:
					intCount = 0;
					g = d;
					if (isNaN(g) || g == 0)
						g = cU["PL"][bV];
					else
						g = Number(d);
					i = g - cU["PL"][bV];
					cU["PA"][bV] += i;
					cU["PL"][bV] = g;
					if (Number(cU["PM"][bV]) < g)
						cU["PM"][bV] = g;
					v = this.aD(bV, date);
					bV = 0;
					playState = 0;
					L = 0;
					break;
				case 5:
					intCount++;
					g = d;
					L = 0;
					if (isNaN(g)) {
						v = genError("InvPlayParam", d);
						break;
					} else
						g = Number(d);
					if (g != 0 || cU["PA"][bV] == 0)
						cU["PL"][bV] = g;
					cU["CS"][bV] = 1;
					playState = 1;
					ca.af(U(g));
					break;
				case 6:
					intCount++;
					g = d;
					if (isNaN(g)) {
						v = genError("InvPauseParam", d);
						break;
					} else
						g = Number(d);
					i = g - cU["PL"][bV];
					if (i > 0)
						cU["PA"][bV] += i;
					cU["PL"][bV] = g;
					cU["CS"][bV] = 1;
					playState = 0;
					ca.af(U(g));
					break;
				case 7:
					cU["CS"][bV] = 1;
					dr++;
					if (L == 1 && dr > 5)
						return;
					g = d;
					if (isNaN(g)) {
						v = genError("InvStopParam", d);
						break;
					} else
						g = Number(d);
					i = Number(g) - cU["PL"][bV];
					if (i > 0) {
						cU["PA"][bV] += i;
					}
					cU["PL"][bV] = g;
					if (Number(cU["PM"][bV]) < g)
						cU["PM"][bV] = g;
					if (cU["PA"][bV] > 0)
						v = this.aD(bV, date);
					playState = 0;
					L = 1;
					cU["PA"][bV] = 0;
					cU["FA"][bV] = 0;
					cU["FP"][bV] = 0;
					if (bV == 0)
						ba();
					break;
				case 8:
					intCount++;
					g = d;
					if (isNaN(g)) {
						v = genError("InvSeekParam1", d);
						break;
					} else
						g = Number(d);
					R = f;
					if (isNaN(R)) {
						v = genError("InvSeekParam", f);
						break;
					} else
						R = Number(f);
					i = g - cU["PL"][bV];
					if (i > 0) {
						cU["PA"][bV] += i;
					}
					cU["PL"][bV] = R;
					cU["CS"][bV] = 1;
					ca.af(U(R));
					break;
				case 9:
					if (d || d.toLowerCase().indexOf("on") || d == 1)
						cU["MI"][bV] += 1;
					else
						cU["MI"][bV] -= 1;
					break;
				case 10:
					if (d || d.toLowerCase().indexOf("on") || d == 1)
						cU["SR"][bV] += 1;
					bs();
					break;
				case 11:
					if (!isNaN(d)) {
						if (ai < 0)
							ai = d;
						else {
							if (d > ai)
								cU["SI"][bV] += 1;
							ai = d;
						}
					}
					break;
				case 12:
					cU["DI"][bV] += 1;
					break;
				case 13:
				case 14:
					break;
				case 16:
				case 22:
					cU["CI"][bV] += 1;
					break;
				case 17:
					cU["SH"][bV] += 1;
					break;
				case 18:
					cU["SV"][bV] += 1;
					break;
				case 19:
				case 20:
					cU["PB"][bV] += 1;
					break;
				case 21:
					cU["II"][bV] += 1;
					break;
				case 23:
					cU["ER"][bV] += 1;
					break;
				case 24:
					break;
				case 25:
					ae += 1;
					am += Number(d);
					if (ab < Number(d))
						ab = d;
					return;
				case 49:
					if (isNaN(d))
						return;
					g = Number(d);
					if (g <= 1 || playState != 1)
						return;
					ca.af(U(g));
					if (bV != 0 || bX.length == 0)
						return;
					var act = cU["PA"][bV] + (g - cU["PL"][bV]);
					if (act < bX[0])
						return;
					cU["PA"][bV] += (g - cU["PL"][bV]);
					cU["PL"][bV] = d;
					v = this.aD(bV, date);
					bX.splice(0, 1);
					break;
				default:
					break;
				}
				var G = 10;
				if (isNaN(cU["VL"][bV]))
					G = 10;
				else
					G = cU["VL"][bV] / 60 * bG;
				if (G > 100)
					G = 100;
				if (G < 20)
					G = 20;
				if (aY == true)
					return;
				if (intCount > G)
					if (!(functionType == 3 || functionType == 15 || functionType == 4 || functionType == 7))
						return;
				if (intCount > 5000)
					return;
				if (v != null)
					l = v + l;
				if (cZ != "") {
					l = cZ + "|||" + l;
					cZ = "";
				}
				if (o != 1)
					aF = Number(cV.trackcontent);
				else
					aF = Number(cV.trackads);
				switch (aF) {
				case 0:
					return;
				case 2:
				case 3:
					aB = M("ggignr", o);
					if (aB != null && aB == "1")
						return;
					break;
				default:
					break;
				}
				bd = ca.ct(l, aL());
				_currentMsgSize += bd;
				var tpld = aC;
				if (functionType == 7) {
					if (bV == 0)
						B = 1;
					report(2);
					tpld = 0;
				} else if (functionType == 49) {
					report(1);
					tpld = 0;
				} else if (functionType == 15) {
					report(0);
					tpld = 0;
					B = 0;
				} else if (functionType == 3) {
					if (aC == 5) {
						report(0);
						tpld = 0;
						B = 0;
					} else
						tpld = 3;
				} else if (functionType == 4) {
					if (B == 0) {
						report(1);
					}
					B = 0;
					tpld = 0;
				} else if (functionType == 5) {
					if (aC == 3) {
						report(0);
						tpld = 0;
					} else if (d == 0) {
						if (B == 1 && bV == 0) {
							cU["PM"][bV] = 0;
							report(0);
							tpld = 0;
							B = 0;
						} else
							tpld = 5;
					} else
						tpld = 0;
				} else if (functionType == 6 && d != 0)
					tpld = 0;
				else if (functionType == 8 && f != 0)
					tpld = 0;
				aC = tpld;
				if (Number(_currentMsgSize) >= Number(cl))
					report(1);
			};
			this.bS = function(eventType, date, d, f, j, k) {
				this.C('cust:' + eventType, date, d, f, j, k);
			}
		};
		function CookieManager() {
			var CSEPARATOR = '|||';
			var cS = '_ggCvar';
			var bP = '_ggMCvar';
			var TIMEOUT = 45000;
			var _userId = null;
			var cf = 0;
			var cG = 365 * 24 * 60 * 60 * 1000;
			this.bw = function(userId) {
				_userId = be(32);
				return _userId;
			};
			this.bz = function() {
			};
			this.clearMessageCookie = function() {
			};
			this.bE = function() {
				cf++;
				return cf;
			};
			this.aR = function() {
				return _userId;
			};
			function createCookie(name, value) {
			}
			;
			function deleteCookie(name) {
			}
			;
			function readCookie(name) {
			}
			;
			function be(ak) {
				var out = "";
				var c = "";
				for ( var i = 0; i < ak; i++) {
					c = Math.floor(Math.random() * 36).toString(36);
					out += Math.floor(Math.random() * 2) ? c.toUpperCase() : c
							.toLowerCase();
				}
				return out;
			}
		};
		function cy(version, userId, bM, ggtrackid, ggplayername) {
			var ax = 'END"/></GGC>';
			var aa = '|||';
			var bO = '^|^^';
			var bY = '';
			var bj = Math.floor(Math.random() * 100000) + 1;
			var _xmlHeader = '<GGC><H value="' + version + ','
			+ (new Date().getTimezoneOffset() / -60) + ',' + userId + '.' + bj
			+ "," + ggtrackid + "," + ggplayername + '"/><L value="';
			this.bA = function(currentMessage) {
				if (bY == '')
					bY = _xmlHeader + currentMessage + aa;
				else
					bY += currentMessage + aa;
				return bY;
			};
			this.bg = function(t) {
				if (bY == '')
					return bY;
				var bl = bY + ax;
				bY = '';
				return bl;
			};
			this.bx = function(aN) {
				if (bY == '')
					bY = _xmlHeader;
				if (aN != "")
					bY += new Date().getTime() + ",49," + aN + aa;
				return bY + new Date().getTime() + ",2" + aa + ax;
			}
		};
		function cz(version, userId, address, aI, an, metricsObj) {
			var cT = 'logthisjs.php';
			var _address = address;
			var bF = 'logthisjs.php';
			var bh = 'postjs.php';
			var cg;
			var cc = new CookieManager();
			var ce = null;
			var bc = 'NA';
			var cp = false;
			var cf = cc.bE();
			var cH;
			var cb = "GET";
			var _metricsObj = metricsObj;
			cg = new cw(address, address + bF, address + bh, cb);
			if (aI != null)
				cp = aI;
			cp = false;
			cc.bw(userId);
			cc.bz();
			if (userId == null)
				userId = "0";
			ce = new cy(version, userId, cf, _metricsObj._ggtrackid,
					_metricsObj._ggplayername);
			var ay = new bo();
			var ag;
			var ah;
			var ax = '|||END"/></GGC>';
			var bq = 'END"/></GGC>';
			var bK = "^|^^";
			var dj = "|||";
			var bm;
			var cv = 0;
			if (_ggeom == 0)
				ah = 0;
			else
				ah = 2;
			var viewst = "";
			var ag = String.fromCharCode(56) + String.fromCharCode(103)
			+ String.fromCharCode(36) + String.fromCharCode(15)
			+ String.fromCharCode(126) + String.fromCharCode(3)
			+ String.fromCharCode(71) + String.fromCharCode(91)
			+ String.fromCharCode(100) + String.fromCharCode(7)
			+ String.fromCharCode(17) + String.fromCharCode(31)
			+ String.fromCharCode(95) + String.fromCharCode(28)
			+ String.fromCharCode(64) + String.fromCharCode(14);
			bm = ay.aw(ag, bq);
			this.report = function(t, A, cX) {
				bc = t;
				var F = ce.bg(t);
				F = "<m v=" + ah + " c=" + cc.aR() + ">" + ay.aw(ag, F) + "<%2Fm>";
				cg.report(F, cX);
				if (A == 0)
					cv = 1;
			};
			this.bp = function(cX) {
				var F = ce.bx(viewst);
				F = "<m v=" + ah + " c=" + cc.aR() + ">" + ay.aw(ag, F) + "<%2Fm>";
				cg.report(F, cX);
			};
			this.ct = function(l, t) {
				bc = t;
				var message = ce.bA(l);
				var ak = message.length;
				return ak;
			};
			this.af = function(bD) {
				if (O)
					viewst = bD;
			}
		};
		function cw(cD, bI, bk, an) {
			var bR = 2;
			var bN = 10;
			var aV = cD;
			var cF = bI;
			var bQ = bk;
			var _sending = false;
			var cA;
			var _retry = 0;
			var cb = 'GET-CONFIRM';
			var _i = new Image(1, 1);
			var _iframe = null;
			if (an != null)
				cb = an;
			if (cb == 'GET-CONFIRM') {
				if (window.addEventListener) {
					_i.addEventListener('load', loadSuccess, false);
					_i.addEventListener('error', bn, false);
				} else if (window.attachEvent) {
					_i.attachEvent('onload', loadSuccess);
					_i.attachEvent('onerror', bn);
				}
			}
			this.report = function(cY, cX) {
				if (cY == null || cY == '')
					return;
				if (cb != 'POST')
					bB(cY, cX);
			};
			function bB(cY, cX) {
				cA = cY;
				_sending = true;
				if (cb == 'GET')
					_i = new Image(1, 1);
				if (au == 1)
					_i.src = aV + cX + '?HEX40=' + cY;
				else
					_i.src = aV + cX + "HEX40%3D" + cY;
			}
		};
		function bo() {
			function by(ad, as) {
				var result = '';
				if (ad == null || as == null)
					return as;
				var aK = ad.split('');
				var bH = aK.length;
				var ar = as.split('');
				var aM = ar.length;
				for ( var i = 0; i < aM; i++) {
					var hash = ar[i].charCodeAt(0)
					^ ((aM % 10) | aK[i % bH].charCodeAt(0));
					if (hash == 0)
						result += ar[i];
					else
						result += String.fromCharCode(hash);
				}
				return result;
			}
			;
			function bt(aj) {
				var $a, $n, $A;
				var $utf;
				$utf = '';
				$A = aj.length;
				for ($a = 0; $a < $A; $a++) {
					$n = aj.charCodeAt($a);
					if ($n < 128) {
						$utf += String.fromCharCode($n);
					} else if (($n > 127) && ($n < 2048)) {
						$utf += String.fromCharCode(($n >> 6) | 192);
						$utf += String.fromCharCode(($n & 63) | 128);
					} else if ($n < 65536) {
						$utf += String.fromCharCode(($n >> 12) | 224);
						$utf += String.fromCharCode((($n >> 6) & 63) | 128);
						$utf += String.fromCharCode(($n & 63) | 128);
					} else {
						$utf += String.fromCharCode(($n >> 18) | 240);
						$utf += String.fromCharCode((($n >> 12) & 63) | 128);
						$utf += String.fromCharCode((($n >> 6) & 63) | 128);
						$utf += String.fromCharCode(($n & 63) | 128);
					}
				}
				return $utf;
			}
			;
			this.urlencode = function(str) {
				var bZ = {}, tmp_arr = [];
				var J = str.toString();
				var replacer = function(search, replace, str) {
					var tmp_arr = [];
					tmp_arr = str.split(search);
					return tmp_arr.join(replace);
				};
				bZ["'"] = '%27';
				bZ['('] = '%28';
				bZ[')'] = '%29';
				bZ['*'] = '%2A';
				bZ['~'] = '%7E';
				bZ['!'] = '%21';
				bZ['%20'] = '+';
				J = encodeURIComponent(J);
				for (search in bZ) {
					replace = bZ[search];
					J = replacer(search, replace, J)
				}
				return J.replace(/(\%([a-z0-9]{2}))/g, function(full, m1, m2) {
					return "%" + m2.toUpperCase();
				});
				return J;
			};
			this.aw = function(ad, aj) {
				return this.urlencode(by(ad, bt(aj)));
			}
		};
		function EventProcessor() {
			this.bW = -1;
			this.cx = 'NA';
			var cC = -1;
			var ck = null;
			var _videoInfo = null;
			var genEventType = null;
			var dc = null;
			var dh = null;
			var dg = null;
			var de = null;
			var ggEventType = null;
			var cq = null;
			var cn = null;
			var co = null;
			var cj = null;
			this.getCurrentEvent = function() {
				return this.bW;
			};
			this.genericEvent = function(eventType, date, d, f, j, k) {
				if (genEventType == eventType && dc == d && dh == f && dg == j
						&& de == k)
					return null;
				var cW = processGenericEvent(eventType, date, d, f, j, k);
				if (cW != null) {
					genEventType = eventType;
					dc = d;
					dh = f;
					dg = j;
					de = k;
				}
				return cW;
			};
			this.cs = function(eventType, date, d, f, j, k) {
				if (ggEventType == eventType && cq == d && cn == f && co == j
						&& cj == k)
					return null;
				var cW = null;
				if (eventType == 1) {
					this.bW = eventType;
					ck = d;
					cW = date + "," + this.bW + ',' + ck;
					if (f != null)
						cW += "," + f;
				} else if (eventType == 10 || eventType == 9) {
					this.bW = eventType;
					if (d == false)
						cW = date + "," + this.bW + ',' + '0';
					else if (d == true)
						cW = date + "," + this.bW + ',' + '1';
					else
						cW = date + "," + this.bW + ',' + d;
				} else if (eventType == 12) {
					this.bW = eventType;
					cW = date + "," + this.bW;
				} else if (eventType == 49) {
					{
						this.bW = eventType;
						cC = d;
						cW = date + "," + this.bW + ',' + d;
					}
				} else if (eventType == 11) {
					this.bW = eventType;
					cW = date + "," + this.bW + ',' + d;
				} else if (eventType == "videoInfo")
					setVideoInfoString(d);
				else
					cW = this.C(eventType, date, d, f, j, k);
				if (cW != null) {
					ggEventType = eventType;
					cq = d;
					cn = f;
					co = j;
					cj = k;
				}
				return cW;
			};
			this.C = function(eventType, date, d, f, j, k) {
			};
			this.getVideoInfo = function(duration, uurl) {
				var vidInfo = '';
				var custInfo;
				if (duration != null)
					vidInfo = '<length>' + duration + '</length>';
				if (uurl != null)
					vidInfo += '<uurl>' + uurl + '</uurl>';
				if (_videoInfo != null) {
					vidInfo += _videoInfo;
					_videoInfo = null;
				}
				return vidInfo;
			};
			function processGenericEvent(eventType, date, d, f, j, k) {
				if (eventType == null || eventType.length <= 5)
					return null;
				var l = date + "," + eventType;
				if (d != null)
					l += ',' + d;
				if (f != null)
					l += ',' + f;
				if (j != null)
					l += ',' + j;
				if (k != null)
					l += ',' + k;
				return l;
			}
			;
			function setVideoInfoString(videoInfo) {
				_videoInfo = videoInfo;
			}
		};
		function aq(vi, name) {
			var r = vi.indexOf("<" + name + ">") + name.length + 2;
			var K = vi.indexOf("</" + name + ">", r);
			if (r >= 0 && K > r)
				return vi.substring(r, K);
			return null;
		};
		function GenJsPlayerEventProcessor() {
			this.inheritFrom = EventProcessor;
			this.inheritFrom();
			var da = null;
			var db = null;
			this.C = function(eventType, date, d, f, j, k) {
				var cW = '';
				if ((eventType == 3 && this.bW != 3)
						|| (eventType == 15 && this.bW != 15)) {
					var vx1 = aq(j, "censuscategory");
					var vx2 = aq(j, "category");
					if (vx2 == null && vx1 != null && vx1 != "")
						j += "<category>" + vx1 + "</category>";
					this.cx = aq(j, "length");
					cW += ',' + d + "," + f + "," + j;
					if (!k && k != "" && !isNaN(k))
						cW += "," + k;
				} else if (eventType == 1 || eventType == 51 || eventType == 8) {
					cW += "," + d;
					if (f != null)
						cW += "," + f;
				} else if (eventType == 6 && da != true && d != '00:00') {
					da = true;
					db = d;
					cW += ',' + db;
				} else if (eventType == 5 && da != false) {
					da = false;
					cW += ',' + d;
				} else if (eventType == 7) {
					da = true;
					db = '0';
					cW += ',' + d;
				} else if (eventType == 9) {
					if (d == false)
						cW += ',Off';
					else
						cW += ',On';
				} else {
					cW += "," + d;
					if (f != null)
						cW += "," + f;
				}
				if (cW == '')
					return null;
				else {
					this.bW = eventType;
					return date + ',' + this.bW + cW;
				}
			}
		}
		pageLoaded();
	}());/**
	* Log is the public facing Object that exposes Logging functionality
	* @class	Log
	*/
	(function(BTG){
		/**
		* Log Singleton 
		* @constructor
		* @member	BTG.Log
		*/
		BTG.Log = (function(){
			var	enabled = false,
				hasLog  = typeof console === 'object' && typeof console.log === 'function',
				logger  = function(name){
					var name = '[' + name + '] ';
					return {
						debug: function(){
							if(hasLog && enabled){
								var msg = [];
								for(var x = 0, len = arguments.length; x < len; x++){
									var item = arguments[x];
									if(typeof item === 'string'){
										msg.push(name + item);
									}else if(typeof item === 'object'){
										var obj = [];
										for(var key in item){
											if(item.hasOwnProperty(key)){
												obj.push(key + ':' + item[key]);
											}
										}
										msg.push('{' + obj.join(',') + '}');
									}else{
										msg.push(item);
									}
								}
								console.log(msg.join(' '));
							}
						}
					};
				};
			return {
				/**
				* Method to be invoked to get the logging object
				* @member	BTG.Log			
				*/
				getLogger: function(name){
					return new logger(name);
				},
				/**
				* Method to be invoked to get the logging enabled status
				* @member	BTG.Log			
				*/
				isDebug: function(){
					return enabled;
				},
				/**
				* Method to be invoked to enable the logging
				* @member	BTG.Log			
				*/
				enableLogging: function(){
					enabled = true;
				},
				/**
				* Method to be invoked to disable the logging
				* @member	BTG.Log			
				*/
				disableLogging: function(){
					enabled = false;
				}
			};
		}());
	})(BTG);
	/**
	* Event is a collection of listener events
	* @class	Event
	*/
	(function(BTG){
		BTG.Event = function(obj){
			var listeners = [];
			return {
				/**
				* Method to be invoked to add the listener
				* @member	BTG.Event			
				*/
				add : function(fn, ob){
					if(typeof fn === 'function'){
						listeners.push(new BTG.Listener(fn, ob));
					}
				},
				/**
				* Method to be invoked to remove from listener
				* @member	BTG.Event			
				*/
				remove : function(fn){
					var size = listeners.length;
					for(var x=0; x < size; x++){
						var listener = listeners[x];
						if(listener.getCallback() === fn){
							listener.remove();
						}
					}
				},
				/**
				* Method to be invoked to dispatch the listener
				* @member	BTG.Event			
				*/
				dispatch : function(){
					var size = listeners.length;
					for(var x=0; x < size; x++){
						var item = listeners[x];
						item.dispatch(arguments);
					}
				}
			};
		};
	})(BTG);
	/**
	* Listener is a collection of listener functionality
	* @class	Event
	*/
	(function(BTG){
		BTG.Listener = function(fn, ob){
			var	callback = fn,
				parent   = ob;
			return {
				/**
				* Method to be invoked to dispatch the listener
				* @member	BTG.Event			
				*/
				dispatch : function(){
					if(arguments[0] !== undefined){
						callback.apply(parent, arguments[0]);
					}else{
						callback.apply(parent);
					}
				},
				/**
				* Method to be invoked to remove the listener
				* @member	BTG.Event			
				*/
				remove : function(){
					callback = function(){};
				},
				/**
				* Method to be invoked to get the call back
				* @member	BTG.Event			
				*/
				getCallback : function(){
					return callback;
				}
			};
		};
	})(BTG);
	(function(BTG){
		/**
		* BeaconsVO Singleton 
		* @constructor
		* @member	BTG.BeaconsVO
		*/
		BTG.BeaconsVO = (function(){
			/**
			* beaconVO private class
			* @private
			* @member	BTG.BeaconsVO
			*/
			var beaconVO = function(){
				return {
					elapsedAfterAd : false,
					elapsedAlways  : false,
					elapsed   : null,
					startTime : null,
					url       : null,
					method    : 'GET',
					type      : null,
					fromEnd   : false,
					atEnd     : false,
					postVars  : [],
					toMilliSeconds : false
				};
			};
			return {
				/**
				* Method to convert json array into properly formatted beacons
				* @member	BTG.BeaconsVO			
				* @returns {Array} containing beaconVO objects 
				*/
				fromJSON : function(json){
					if(BTG.Object.isArray(json)){
						var	items  = [],
							size   = json.length;
						for(var x = 0; x < size; x++){
							if(typeof json[x] === 'object'){
								var	item = json[x],
									vo = new beaconVO();
								if(item.hasOwnProperty('startTime')){
									var startTime = item.startTime.toLowerCase().replace(/\s/g,'');
									vo.fromEnd = startTime.indexOf('end-') != -1;
									vo.atEnd = startTime === 'end';
									if(vo.fromEnd){
										vo.startTime = parseInt(startTime.split('end-')[1]);
									}else{
										vo.startTime = !isNaN(item.startTime) ? parseInt(item.startTime) : null;
									}
								}
								if(item.hasOwnProperty('elapsed')){
									vo.elapsed = parseInt(item.elapsed);
								}
								if(item.hasOwnProperty('elapsedAfterAd')){
									vo.elapsedAfterAd = item.elapsedAfterAd === true || item.elapsedAfterAd === 'true';
									vo.elapsedAlways = item.elapsedAfterAd === undefined || item.elapsedAfterAd.length === 0;
								}
								if(item.hasOwnProperty('method')){
									vo.method = item.method.toLowerCase() === 'post' ? 'POST' : 'GET';
								}
								if(item.hasOwnProperty('type')){
									vo.type = item.type;
								}
								if(item.hasOwnProperty('prop') && BTG.Object.isArray(item.prop)){
									vo.postVars = item.prop;
								}
								if(item.hasOwnProperty('url')){
									vo.url = item.url;
								}
								items.push(vo);
							}
						}
						return items;
					}
				}
			};
		})();
	})(BTG);
	/**
	* ConfigSettings provides Configuration setting for BENTO JS
	* @class	AppMeasure
	*/
	(function(BTG){
		/**
		* Initializes an instance of BENTO JS Config settings
		* @constructor
		* @member	BTG.ConfigSettings
		*/
		BTG.ConfigSettings = function(){
			return {
				/**
				* The value of application origin
				* @member	BTG.ConfigSettings
				*/	
				applicationOrigin  : 'ORIGIN_UNSET',
				/**
				* The value of application context
				* @member	BTG.ConfigSettings
				*/	
				applicationContext : 'CONTEXT_UNSET',
				/**
				* The value of country code
				* @member	BTG.ConfigSettings
				*/	
				countryCode        : 'COUNTRY_XX',
				/**
				* The value of Omniture char set
				* @member	BTG.ConfigSettings
				*/	
				omnitureCharSet    : 'ISO-8859-1',
	
				/**
				* Boolean value of Omniture enable status
				* @member	BTG.ConfigSettings
				*/	
				omnitureEnabled    : false,
				/**
				* Boolean value of Omniture media tracking status
				* @member	BTG.ConfigSettings
				*/	
				omnitureMediaTrackingEnabled : false,
				/**
				* Boolean value of Omniture end slate tracking status
				* @member	BTG.ConfigSettings
				*/	
				omnitureEndslateTracking     : false,
				/**
				* Boolean value of Omniture heart beat disabled status
				* @member	BTG.ConfigSettings
				*/	
				omnitureHeartbeatsDisabled   : false,
				/**
				* Boolean value of Omniture visitor namespace
				* @member	BTG.ConfigSettings
				*/	
				omnitureVisitorNamespace     : false,
				/**
				* Boolean value of Omniture visitor migration key
				* @member	BTG.ConfigSettings
				*/	
				omnitureVisitorMigrationKey	 : null,
				/**
				* Boolean value of Omniture visitor migration server
				* @member	BTG.ConfigSettings
				*/	
				omnitureVisitorMigrationServer		 : null,
				/**
				* Boolean value of Omniture live event heart beat disabled status
				* @member	BTG.ConfigSettings
				*/	
				omnitureLiveEventHeartbeatsDisabled : false,
				/**
				* Boolean value of Omniture live event tracking enabled status
				* @member	BTG.ConfigSettings
				*/	
				omnitureLiveEventTrackingEnabled : false,
	
				/**
				* The value of Omniture custom fields
				* @member	BTG.ConfigSettings
				*/	
				omnitureCustomFields : {},
	
				/**
				* The value of Omniture suite
				* @member	BTG.ConfigSettings
				*/	
				omnitureSuite : null,
				/**
				* The value of Omniture path context
				* @member	BTG.ConfigSettings
				*/	
				omniturePathContext : null,
				/**
				* The value of Omniture data center
				* @member	BTG.ConfigSettings
				*/	
				omnitureDataCenter  : null,
	
				/**
				* The value of Omniture live event data
				* @member	BTG.ConfigSettings
				*/	
				omnitureLiveEventData : [],
				/**
				* The value of Omniture live event beacon frequency
				* @member	BTG.ConfigSettings
				*/	
				omnitureLiveEventBeaconFreq : 180,
				/**
				* The value of Omniture first party server
				* @member	BTG.ConfigSettings
				*/	
				omnitureFirstPartyServer    : null,
				
				/**
				* Boolean value of Demdex enabled status
				* @member	BTG.ConfigSettings
				*/	
				demdexEnabled:false,
				/**
				* Boolean value of Demdex end call enabled status
				* @member	BTG.ConfigSettings
				*/	
				demdexEndCallEnabled:false,
				
				/**
				* The value of Nielsen client id
				* @member	BTG.ConfigSettings
				*/	
				nielsenClientID : null, 
				/**
				* Boolean value of Nielsen reporter enabled status 
				* @member	BTG.ConfigSettings
				*/	
				nielsenEnabled : false, 
				/**
				* The value of Nielsen video census id
				* @member	BTG.ConfigSettings
				*/	
	        	nielsenVideoCensusID : null,
	
				/**
				* Boolean value of Comscore enabled status 
				* @member	BTG.ConfigSettings
				*/	
				comScoreEnabled    : false,
				/**
				* The value of Comscore primary id
				* @member	BTG.ConfigSettings
				*/	
				comScorePrimaryID  : null,
				/**
				* The value of Comscore producer id
				* @member	BTG.ConfigSettings
				*/	
				comScoreProducerID : null,
				/**
				* The value of Comscore localtion id
				* @member	BTG.ConfigSettings
				*/	
				comScoreLocationID : null,
				/**
				* The value of Comscore genre id
				* @member	BTG.ConfigSettings
				*/	
				comScoreGenreID    : 20000, 
				/**
				* Boolean value of Comscore ad tracking status
				* @member	BTG.ConfigSettings
				*/	
				comScoreAdTracking : true,
	
				/**
				* The value of referrer
				* @member	BTG.ConfigSettings
				*/	
				referrer  : null,
				/**
				* The value of player url
				* @member	BTG.ConfigSettings
				*/	
				playerURL : null,
				/**
				* The value of geo
				* @member	BTG.ConfigSettings
				*/	
				geo       : null,
				/**
				* The value of group
				* @member	BTG.ConfigSettings
				*/	
				group     : null,
				/**
				* The value of device
				* @member	BTG.ConfigSettings
				*/	
				device    : null,
				/**
				* The value of application name
				* @member	BTG.ConfigSettings
				*/	
				applicationName : null,
				/**
				* The value of application type
				* @member	BTG.ConfigSettings
				*/	
				applicationType : null,
				/**
				* The value of application context
				* @member	BTG.ConfigSettings
				*/	
				applicationContext : null,
				/**
				* The value of application origin
				* @member	BTG.ConfigSettings
				*/	
				applicationOrigin  : null,
	
				/**
				* Boolean value of Freewheel enabled status
				* @member	BTG.ConfigSettings
				*/	
				freewheelEnabled     : false,
				/**
				* Boolean value of Freewheel test status
				* @member	BTG.ConfigSettings
				*/	
				freewheelIsTest      : false,
				/**
				* Boolean value of Freewheel domestic status
				* @member	BTG.ConfigSettings
				*/	
				freewheelIsDomestic  : true,
				/**
				* The value of Freewheel site section
				* @member	BTG.ConfigSettings
				*/	
				freewheelSiteSection : null,
				/**
				* The value of Freewheel network id
				* @member	BTG.ConfigSettings
				*/	
				freewheelNetworkId	 : null,
				/**
				* The value of Freewheel profile id
				* @member	BTG.ConfigSettings
				*/	
				freewheelProfileId	 : null,
				/**
				* The value of Freewheel display base
				* @member	BTG.ConfigSettings
				*/	
				freewheelDisplayBase : null,
				/**
				* The value of Freewheel asset id
				* @member	BTG.ConfigSettings
				*/	
				freewheelAssetId	 : null,
				/**
				* The value of Freewheel duration
				* @member	BTG.ConfigSettings
				*/	
				freewheelDuration	 : null,
				/**
				* The value of Freewheel minimum time between ads
				* @member	BTG.ConfigSettings
				*/	
				freewheelTimeSinceLastAd : null, //Default set to 30 Secs as per ticket BTGREPGEN-1954
				/**
				* Flag to switch between actual video duration to FW
				* @member	BTG.ConfigSettings
				*/	
				freewheelUseActualDuration : false,
				/**
				* Flag to switch FW SSID path parsing
				* @member	BTG.ConfigSettings
				*/	
				freewheelSiteSectionPathParsing : false
				
			};
		};
	})(BTG);
	/**
	* CustomFieldVO is a VO class to handle custom fields and overrides
	* @class	BTG.CustomFieldVO
	*/
	(function(BTG){
		/**
		* Method to return an VO object for custom fields, the third property is set to false unless this is an override item 
		* @member	BTG.CustomFieldVo
		* @returns	{Object} CustomFieldVO object 
		*/
		BTG.CustomFieldVO = function(name, value, override){
			return {
				name  : name,
				value : value,
				override : override === true || override === 'true'
			};
		};	
	})(BTG);
	/**
	* class to facilitate adding items to CustomFieldVO 
	* @class	BTG.CustomFields
	*/
	(function(BTG){
		/**
		* Method to add values to Custom Fields 
		* @member	BTG.CustomFields
		* @returns	{array} items 
		*/
		BTG.CustomFields = function(){
			var items = [];
			return{
				add : function(key, value, override){
					items.push(new BTG.CustomFieldVO(key, value, override));
				},
				getItems : function(){
					return items;
				}
			};
		};
	})(BTG);
	/**
	* Freewheel VO class provides information for FW ad placement 
	* @class	FreewheelVO
	*/
	(function(BTG){
		/**
		* Initializes an instance of BENTO JS FreewheelVO
		* @constructor
		* @member	BTG.FreewheelVO
		*/
		BTG.FreewheelVO = function(){
			return {
				/**
				* Index of current item for which Ad placement is being requested 
				* @member	BTG.FreewheelVO
				*/	
				currentItem		: 0,
				/**
				* Flag to indicate whether the FW ad placement is requested at the end of the content of not. 
				* @member	BTG.FreewheelVO
				*/	
				hasContentEnd	: false,
				/**
				 * X position of player
				 */
				x : 0,
				/**
				 * Y position of player
				 */
				y : 0,
				/**
				 * Width of player
				 */
				width : 0,
				/**
				 * Height of player
				 */
				height : 0,
				/**
				 * Current playing Ad Index in a Ad slot
				 */
				currentAdIndex : 0,
				/**
				 * Total Ad count per slot
				 */
				totalAdCount : 0
			};
		};
	})(BTG);/**
	* Metadata provides metadata BENTO JS
	* @class	Metadata
	*/
	(function(BTG){
		/**
		* Initializes an instance of BENTO JS Metadata
		* @constructor
		* @member	BTG.Metadata
		*/
		BTG.Metadata = function(){
			/**
			* The value of MTVN namespace
			* @member	BTG.Metadata
			*/	
			var MTVN_NAMESPACE = 3;
			return {
				/**
				* The value of video id
				* @member	BTG.Metadata
				*/
				videoId       : 'NO_VID',
				/**
				* The value of video url
				* @member	BTG.Metadata
				*/
				videoUrl      : 'NO_VID_URL',
				/**
				* The value of video title
				* @member	BTG.Metadata
				*/
				videoTitle    : 'NO_VID_TITLE',
				/**
				* The value of artist id
				* @member	BTG.Metadata
				*/
				artistId      : 'NO_ARTIST_ID',
				/**
				* The value of lable
				* @member	BTG.Metadata
				*/
				label         : 'NO_LABEL',
				/**
				* The value of media category
				* @member	BTG.Metadata
				*/
				mediaCategory : 'NO_MEDIA_CATEGORY',
				/**
				* The value of MTVN owner
				* @member	BTG.Metadata
				*/
				mtvnOwner     : 'OWNER_UNSET',
				/**
				* The value of play list title
				* @member	BTG.Metadata
				*/
				playlistTitle : 'PLAYLIST_TITLE_UNSET',
				/**
				* The value of play list reporting title from feed category
				* @member	BTG.Metadata
				*/
				playlistRepTitle : null,
				/**
				* The value of page name
				* @member	BTG.Metadata
				*/
				pageName      : 'NO_PAGE_NAME',
				/**
				* The value of guid
				* @member	BTG.Metadata
				*/
				guid          : 'NO_GUID',
				/**
				* The value of player mode
				* @member	BTG.Metadata
				*/
				playerMode    : 'normal',
				/**
				* BooleanThe value for ad status
				* @member	BTG.Metadata
				*/
				isAd          : false,
				/**
				* BooleanThe value for reportable status
				* @member	BTG.Metadata
				*/
				reportable    : false,
				/**
				* BooleanThe value for live event status
				* @member	BTG.Metadata
				*/
				isLiveEvent   : false,
				/**
				* BooleanThe value for full episode status
				* @member	BTG.Metadata
				*/
				isFullEpisode : false,
				/**
				* BooleanThe value for playlist status
				* @member	BTG.Metadata
				*/
				hasPlayList   : false,
				/**
				* The value of artist name
				* @member	BTG.Metadata
				*/
				artistName    : null,
				/**
				* The value of franchise
				* @member	BTG.Metadata
				*/
				franchise     : null,
				/**
				* The value of uri namespace
				* @member	BTG.Metadata
				*/
				uriNamespace  : null,
				/**
				* The value of thumbnail url
				* @member	BTG.Metadata
				*/
				thumbnailUrl  : null,
				/**
				* The value of content type
				* @member	BTG.Metadata
				*/
				contentType   : null,
				/**
				* The value of business unit
				* @member	BTG.Metadata
				*/
				businessUnit  : null,
				/**
				* The value of description
				* @member	BTG.Metadata
				*/
				description   : null,
				/**
				* The value of lineup id
				* @member	BTG.Metadata
				*/
				lineupId      : null,
				/**
				* The value of playlist type
				* @member	BTG.Metadata
				*/
				playlistType  : null,
				/**
				* The value of show title
				* @member	BTG.Metadata
				*/
				showTitle     : null,
				/**
				* The value of player size
				* @member	BTG.Metadata
				*/
				playerSize    : null,
				/**
				* The value of AD url
				* @member	BTG.Metadata
				*/
				adUrl         : null,
				/**
				* The value of Ad url redirect
				* @member	BTG.Metadata
				*/
				adUrlRedirect : null,
				/**
				* The value of player url
				* @member	BTG.Metadata
				*/
				playerUrl     : null,
				/**
				* The value of clip type
				* @member	BTG.Metadata
				*/
				clipType      : null,
				/**
				* The value of segment name
				* @member	BTG.Metadata
				*/
				segmentName   : null,
				/**
				* The value of media title
				* @member	BTG.Metadata
				*/
				mediaTitle    : null,
				/**
				* The value of events
				* @member	BTG.Metadata
				*/
				events        : null,
				/**
				* The value of products
				* @member	BTG.Metadata
				*/
				products      : null,
				/**
				* The value of duration
				* @member	BTG.Metadata
				*/
				duration      : null,
				/**
				* The value of item duration
				* @member	BTG.Metadata
				*/
				itemDuration  : null,
				/**
				* The value of item index
				* @member	BTG.Metadata
				*/
				itemIndex     : null,
				/**
				* The value of media description
				* @member	BTG.Metadata
				*/
				mediaDescription   : null,
				/**
				* The value of play list length
				* @member	BTG.Metadata
				*/
				playlistLength     : null,
				/**
				* The value of play list duration
				* @member	BTG.Metadata
				*/
				playlistDuration   : null,
				/**
				* The value of play list meta data items
				* @member	BTG.Metadata
				*/
				playlistMetadataItems : [],
				/**
				* The value of beacons
				* @member	BTG.Metadata
				*/
				beacons : [],
				/**
				* The value of play list url
				* @member	BTG.Metadata
				*/
				playlistURI	  : null,
				/**
				* The value of play list id for playlist
				* @member	BTG.Metadata
				*/
				playlistId	  : "NO_PLAYLIST_ID",
				/**
				* The value of Event type category field.
				* @member	BTG.Metadata
				*/
				eventType	: null,
				/**
				* Player bandwidth information. Right now this property doesn't have any change in Request as current JAM doesn't have feature to accept Bandwidth information. 
				*/
				bandwidth	: null,
				/**
				* The value of the geo information
				* @member BTG.Metadata
				*/
				location    : null,
				/**
				* The value of the sub-brand sites
				* @member BTG.Metadata
				*/
				subBrand   : null,
				/**
				 * User segement value
				 * @member BTG.Metadata
				 */
				userSegment:null
			};
		};
	})(BTG);
	(function(BTG){
		BTG.StreamSenseVO = {
			fromMetadata: function(data){
				var	NULL_VALUE = "*null",
					toString   = BTG.String.toString,
					isDefined  = BTG.String.isDefined,
					clipTitle  = data.hasPlayList ? data.playlistTitle : data.videoTitle,
					duration   = (data.isAd ? data.adDuration : data.duration) * 1000,
					videoId    = data.isAd ? data.adId : data.videoId;
	
				//Increment by 1 to correct starting position at 0
				//data.itemIndex++;
	
				//Fix duration value
				if(duration < 0){
					duration = 0;
				}			
	
				var vo = {
					ns_st_cn : data.partIndex,
					ns_st_ci : videoId,
					ns_st_pn : !isNaN(data.itemIndex) ? data.itemIndex+1 : NULL_VALUE,
					ns_st_tp : data.playlistLength > 0 ? data.playlistLength : 0,
					ns_st_cu : data.playerUrl ? data.playerUrl : NULL_VALUE,
					ns_st_cl : duration,
					ns_st_pu : data.mtvnOwner ? data.mtvnOwner : NULL_VALUE,
					ns_st_pr : data.franchise ? data.franchise : NULL_VALUE,
					ns_st_ep : clipTitle ? clipTitle : NULL_VALUE,
					ns_st_ad : data.isAd ? "1" : "0",
					ns_st_ct : data.clipTypeId
				};
	
				//Dictionary values for Video Metrix
				vo.C3 = vo.ns_st_ep;
				vo.C4 = vo.ns_st_pu;
				vo.C6 = vo.ns_st_pr;
	
				return vo;
			}
		};
	})(BTG);
	/**
	* AppMeasure subscriber provides Omniture media tracking of video content.
	* @class	AppMeasure
	*/
	(function(BTG){
		/**
		* Initializes an instance of AppMeasure
		* @constructor
		* @member	BTG.AppMeasure
		*/
		BTG.AppMeasure = function(){
			/**
			* Constant containing the name of this subscriber
			* @final
			* @private
			* @member	BTG.AppMeasure
			*/
			var	NAME  = 'AppMeasure',
	
			/**
			* Constant containing a ':' character
			* @final
			* @private
			* @member	BTG.AppMeasure
			*/
				COLON = ':',
	
			/**
			* Constant containing an '=' character
			* @final
			* @private
			* @member	BTG.AppMeasure
			*/
				EQUAL = '=',
	
			/**
			* Constant containing a ',' character
			* @final
			* @private
			* @member	BTG.AppMeasure
			*/
				COMMA = ',',
	
			/**
			* Constant containing a '|' character
			* @final
			* @private
			* @member       BTG.AppMeasure
			*/
				PIPE = '|',		
	
			/**
			* A log Object
			* @private
			* @member	BTG.AppMeasure
			*/
				log = BTG.Log.getLogger(NAME),
	
			/**
			* A shortcut to BTG.Log.isDebug method
			* @private
			* @member	BTG.AppMeasure
			* @returns	{Boolean}
			*/
				isDebug = BTG.Log.isDebug,
	
			/**
			* A shortcut to AppMeasureVars collection
			* @private
			* @member	BTG.AppMeasure
			*/
				vars = BTG.AppMeasureVars,
	
			/**
			* A shortcut to Events collection
			* @private
			* @member	BTG.AppMeasure
			*/
				event = BTG.Events,
	
			/**
			* An instance of s_code
			* @private
			* @member	BTG.AppMeasure
			*/
				appMeasure = s_code,
	
			/**
			* A config Object
			* @private
			* @member	BTG.AppMeasure
			*/
				config = {},
	
			/**
			* A metadata Object
			* @private
			* @member	BTG.AppMeasure
			*/
				metadata = {},
	
			/**
			* A videodata Object
			* @private
			* @member	BTG.AppMeasure
			*/
				videodata = {},
	
			/**
			* A heartbeatData Object
			* @private
			* @member	BTG.AppMeasure
			*/
				heartbeatData = {},
	
			/**
			* Collection of milestones
			* @private
			* @member	BTG.AppMeasure
			*/
				milestones = [],
	
			/**
			* Collection of items viewed by item index
			* @private
			* @member	BTG.AppMeasure
			*/
				viewedHistory = [],
	
			/**
			* A Boolean for determining media play
			* @private
			* @member	BTG.AppMeasure
			*/
				hasMediaPlay = false,
	
			/**
			* A Boolean for determining play list
			* @private
			* @member	BTG.AppMeasure
			*/
				hasPlayList = false,
	
			/**
			* A Boolean for determining if the play list started
			* @private
			* @member	BTG.AppMeasure
			*/
				hasPlaylistStart = false,
	
			/**
			* A Boolean for determining ad play
			* @private
			* @member	BTG.AppMeasure
			*/
				isAdPlaying = false,
			/**
			* String to hold Ad media name for Ad reporting.
			* @private
			* @member	BTG.AppMeasure
			*/
				adMediaName = "",
	
			/**
			* A Boolean for determining playing state
			* @private
			* @member	BTG.AppMeasure
			*/
				playing = false,
	
			/**
			* A Boolean for determining if the content item was scrubbed
			* @private
			* @member	BTG.AppMeasure
			*/
				wasScrubbed = false,
	
			/**
			* A Number for tracking time played
			* @private
			* @member	BTG.AppMeasure
			*/
				mediaTimePlayhead = 0,
	
			/**
			* A Number for tracking playhead
			* @private
			* @member	BTG.AppMeasure
			*/
				playheadTime = 0,
			/**
			* A Number for tracking the item index
			* @private
			* @member	BTG.AppMeasure
			*/
				currentItemIndex = 0,
			/**
			* A Number for tracking buffering time
			* @private
			* @member	BTG.AppMeasure
			*/
				timedBuffer = 0,
	
			/**
			* A String for tracking the video title
			* @private
			* @member	BTG.AppMeasure
			*/
				videoTitle = '',
				
			/**
			* A String that contains CODA tracking server config value
			* @private
			* @member	BTG.AppMeasure
			*/
				codaTrackingServer = null,
			/**
			* Contains beacon frequency for live event
			* @private
			* @member	BTG.AppMeasure
			*/
				liveEventBeaconFreq = null,
			/**
			* Contains numeric value used to calculate when next becaon call me made
			* @private
			* @member	BTG.AppMeasure
			*/	
				liveEventCallCount = 0,
				
			/**
			* A String for storing UUID value
			* @private
			* @member	BTG.AppMeasure
			*/
				vmnUUID = '',
				
			/**
			* A String for storing user segment value
			* @private
			* @member	BTG.AppMeasure
			*/
				userSegment = '',			
			/**
			* A String that contains visitor id value
			* @private
			* @member	BTG.AppMeasure
			*/
				visitorId = null,
			/**
			* An ad metadata Object
			* @private
			* @member	BTG.AppMeasure
			*/
				adMetadata = {},
			/**
			* Wrapper method for event.dispatch
			* @private
			* @member	BTG.AppMeasure
			* @param	{Object} event Required
			* @param	{Object} data
			* @returns	{Void}
			*/
				notify = function(event, data){
					event.dispatch(data ? data : {});
				},
	
			/**
			* Determines if the previous item is no longer playing
			* @private
			* @member	BTG.AppMeasure
			* @returns	{Boolean}
			*/
				isPreviousItemPlayEnd = function(){
					return currentItemIndex != metadata.itemIndex && videoTitle;
				},
	
			/**
			* Determines if the first item is playing
			* @private
			* @member	BTG.AppMeasure
			* @returns	{Boolean}
			*/
				isFirstItem = function(){
					return metadata.itemIndex == 0;
				},
	
			/**
			* Determines if the last item is playing
			* @private
			* @member	BTG.AppMeasure
			* @returns	{Boolean}
			*/
				isLastItem = function(){
					return currentItemIndex == metadata.playlistLength - 1;
				},
	
			/**
			* Concatenates a key=value pair
			* @private
			* @member	BTG.AppMeasure
			* @param	{String} key Required
			* @param	{String} value Required
			* @returns	{String}
			*/
				makeKey = function(key, value){
					return key + EQUAL + value;
				},
	
			/**
			* Concatenates two values with a comma
			* @private
			* @member	BTG.AppMeasure
			* @param	{String} str Required
			* @param	{String} value Required
			* @returns	{Void}
			*/
				appendWithComma = function(str, value){
					return str.length > 0 ? str + COMMA + value : value;
				},
	
			/**
			* Method wrapper for Media.open
			* @private
			* @member	BTG.AppMeasure
			* @param	{String} title Required
			* @param	{Number} duration Required
			* @param	{String} appName Required
			* @returns	{Void}
			*/
				trackMediaOpen = function(title, duration, appName){
					if(!metadata.reportable)return;
					appMeasure.Media.open(title, duration, appName);
				},
	
			/**
			* Method wrapper for Media.play
			* @private
			* @member	BTG.AppMeasure
			* @param	{String} title Required
			* @param	{Number} playhead Required
			* @returns	{Void}
			*/
				trackMediaPlay = function(title, playhead){
					if(!videodata.reportable)return;
					if(!playing){
						if(isDebug())log.debug('trackMediaPlay playhead: ' + playhead);
						playing = true;
						appMeasure.Media.play(title, playhead);
					}
				},
	
			/**
			* Method wrapper for Media.stop
			* @private
			* @member	BTG.AppMeasure
			* @param	{String} title Required
			* @param	{Number} playhead Required
			* @returns	{Void}
			*/
				trackMediaStop = function(title, playhead){
					if(!videodata.reportable)return;
					if(playing){
						if(isDebug())log.debug('trackMediaStop playhead: ' + playhead);
						playing = false;
						appMeasure.Media.stop(title, playhead);
					}
				},
	
			/**
			* Method wrapper for Media.close
			* @private
			* @member	BTG.AppMeasure
			* @param	{String} title Required
			* @returns	{Void}
			*/
				trackMediaClose = function(title){
					if(!metadata.reportable)return;
					if(isDebug())log.debug('trackMediaClose title: ' + title);
					appMeasure.Media.close(title);
				},
	
			/**
			* Method to initialize and reset appMeasure properties
			* @private
			* @member	BTG.AppMeasure
			* @returns	{Void}
			*/
				clearVars = function(){
					var limit = vars.TRAFFIC_VAR_LIMIT;
					for(var x = 0; x <= limit; x++){
						appMeasure["prop" + x] = "";
						appMeasure["eVar" + x] = "";
					}
					appMeasure.Media.trackVars   = "None";
					appMeasure.Media.trackEvents = "None";
					appMeasure.linkTrackVars     = "";
					appMeasure.linkTrackEvents   = "";
					appMeasure.products = "";
					appMeasure.events   = "";
				},
	
			/**
			* Method that provides mapping functionality
			* @private
			* @member	BTG.AppMeasure
			* @param	{Object} data Required
			* @returns	{Void}
			*/
				setValues = function(data, doCustomFields){
					var	mapper = new BTG.AppMeasureMapper(data, config),
						values = mapper.getMappedObject(doCustomFields);
	
					appMeasure.Media.trackVars   = values.trackVars;
					appMeasure.Media.trackEvents = appendWithComma(data.events, appMeasure.events);
	
					for(var key in values){
						if(values.hasOwnProperty(key)){
							appMeasure[key] = values[key];
						}
					}
				},
	
			/**
			* Method for initializing the appMeasure instance
			* @private
			* @member	BTG.AppMeasure
			* @returns	{Void}
			*/
				initAppMeasure = function(isAd){
					clearVars();
					appMeasure.debugTracking = isDebug();
					appMeasure.trackLocal = true;
					appMeasure.un = config.omnitureSuite;
			
					if(codaTrackingServer){
						appMeasure.trackingServer = codaTrackingServer;
					}
					if(appMeasure.trackingServer && config.omnitureVisitorMigrationKey && config.omnitureVisitorMigrationServer){
						appMeasure.visitorMigrationKey = config.omnitureVisitorMigrationKey;
						appMeasure.visitorMigrationServer = config.omnitureVisitorMigrationServer;
					}
					if(config.omnitureCharSet){
						appMeasure.charSet = config.omnitureCharSet;
					}
					if(config.omnitureDataCenter){
						appMeasure.dc = config.omnitureDataCenter;
					}
					if(config.omnitureVisitorNamespace){
						appMeasure.visitorNamespace = vars.VISITOR_NAMESPACE;
					}
					if(visitorId){
						appMeasure.visitorID = visitorId;
					}
					if(config.omnitureMediaTrackingEnabled){
						//Explicitly turn off autoTrack
						appMeasure.Media.autoTrack = false;
						appMeasure.Media.trackWhilePlaying = true;
						appMeasure.Media.trackUsingContextData = true;
						if(isAd){
							appMeasure.Media.contextDataMapping={
								"a.media.ad.name"		: vars.AD_CREATIVE_ID,
								"a.media.ad.timePlayed"	: vars.AD_TIME_SPENT,
								"a.media.ad.view"		: vars.AD_START_EVENT,
								"a.media.ad.complete"	: vars.AD_END_EVENT,
								"a.media.ad.pod"		: vars.AD_POD_ID,
								"a.media.ad.podPosition": vars.AD_POD_ITEMS
							};
						}else{
							appMeasure.Media.contextDataMapping={
								"a.media.name"        : vars.MEDIA_NAME,
								"a.media.timePlayed"  : vars.MEDIA_TIMEPLAYED,
								"a.media.segmentView" : vars.MEDIA_SEGMENTVIEW,
								"a.media.segment"     : vars.MEDIA_SEGMENTEVAR,			
								"a.media.view"        : videodata.isAd ? vars.ADITEM_EVENT : vars.VIDEOITEM_EVENT
							};
						}
					}
				},
	
			/**
			* Method setting default video data
			* @private
			* @member	BTG.AppMeasure
			* @returns	{Void}
			*/
				setDefaultData = function(){
					if(isDebug())log.debug('setDefaultData hasPlaylist: ' + hasPlayList + ' videodata.isLive=' + videodata.isLive);
					var formattedUserSegment = addComma(BTG.UserSegments.getFormattedUserSegment(userSegment));
	
					videodata.itemIndex    = isNaN(videodata.itemIndex) ? vars.DEFAULT_ITEM_INDEX : videodata.itemIndex;
					videodata.itemDuration = videodata.isLive ? vars.LIVE_DURATION : videodata.duration;
					videodata.pageName     = config.omniturePathContext + videodata.videoTitle;
					videodata.clipType     = hasPlayList ? vars.PLAYLIST_EVENT : vars.SINGLECLIP_EVENT;
					videodata.segmentName  = [videodata.itemIndex + 1, videodata.videoTitle].join(COLON);
					videodata.applicationName    = config.applicationName;
					videodata.applicationContext = config.applicationContext;
					videodata.applicationOrigin  = config.applicationOrigin;
					videodata.vmnUUID = vmnUUID;
					videodata.userSegment  =  userSegment;
					videodata.playlistDuration = videodata.isLive ? vars.LIVE_DURATION : videodata.playlistDuration; //BTGREPGEN-1830
					videodata.playlistTitle = (videodata.playlistRepTitle ? videodata.playlistRepTitle : videodata.playlistTitle);
	
					videodata.mediaTitle = [
						videodata.videoId, 
						videodata.franchise,
						hasPlayList ? vars.PLAYLIST_ITEM : vars.SINGLECLIP_ITEM
					].join(COLON);
	
					if(hasPlayList && !hasPlaylistStart && isFirstItem()){
						hasPlaylistStart = true;
						videodata.events = [
							vars.PLAYLIST_START,
							vars.BUFFER_EVENT,
							vars.PLAYLIST_DURATION,
							vars.PLAYLIST_LENGTH,
							vars.PLAYLIST_EVENT
						].join(COMMA);
						
						videodata.products = formattedUserSegment+vars.SEMICOLONS + [
							makeKey(vars.BUFFER_EVENT, timedBuffer),
							makeKey(vars.PLAYLIST_DURATION, videodata.playlistDuration),
							makeKey(vars.PLAYLIST_LENGTH, videodata.playlistLength)
						].join(PIPE);
					}else{
						videodata.events = [
							vars.BUFFER_EVENT,
							videodata.clipType
						].join(COMMA);
						videodata.products = formattedUserSegment+vars.SEMICOLONS + makeKey(vars.BUFFER_EVENT, timedBuffer);
	
						if(!hasPlayList){
							//BTGREPGEN-3197: Report duration for single clips only
							videodata.events = appendWithComma(videodata.events, vars.DURATION_EVENT);
							videodata.products += PIPE + makeKey(vars.DURATION_EVENT, Math.floor(videodata.itemDuration));
						}
					}
					setValues(videodata, true);
					if(videodata.isLive){
						setLiveEventBeaconFreq();
					}
					//Propagate video data into the heartbeats
					heartbeatData.vmnUUID = videodata.vmnUUID;
					heartbeatData.segmentName = videodata.segmentName;
				},
	
			/**
			* Keeps track of items watched in a playlist context
			* @private
			* @member	BTG.AppMeasure
			* @returns	{Void}
			*/
				setViewedHistory = function(){
					if(!videodata.isAd && hasPlayList){
						viewedHistory[currentItemIndex] = true;
					}
				},
	
			/**
			* Determined whether all items in a playlist have been watched
			* @private
			* @member	BTG.AppMeasure
			* @returns	{Boolean}
			*/
				hasPlaylistComplete = function(){
					var itemCount = 0;
					if(hasPlayList){
						for(var x = 0, len = viewedHistory.length; x < len; x++){
							if(viewedHistory[x]){
								itemCount++;
							}
						}
					}
					//return itemCount === viewedHistory.length;
					return itemCount === metadata.playlistLength;
				},
	
			/**
			* Wrapper method for storing a milestone Object
			* @private
			* @member	BTG.AppMeasure
			* @param	{String} type Required
			* @param	{Number} min Required
			* @param	{Number} max Required
			* @returns	{Void}
			*/
				addMilestone = function(type, min, max){
					milestones.push({type: type, min: min, max: max});
				},
	
			/**
			* Appends comma to the string if the string is not empty
			* @private
			* @member	BTG.AppMeasure
			* @param	{String} strVal Required
			* @returns	{String} modified strVal
			*/
				addComma = function(strVal){
					return (strVal!='')? strVal+COMMA:strVal;
				},
			/**
			* Method for calculating the media tracking milestones based on duration
			* @private
			* @member	BTG.AppMeasure
			* @param	{Number} duration Required
			* @returns	{Void}
			*/
				setMilestones = function(duration){
					milestones = [];
					if(videodata.itemDuration >= vars.MIN_DURATION && videodata.itemDuration <= vars.MAX_DURATION){
						//Short clip.
						addMilestone('tracked50', 50, 75);
					}else if(videodata.itemDuration >= vars.MAX_DURATION){
						var percent = 25;
	
						if(duration >= 900 && duration <= 1800){
							percent = 10;
						}else if(duration > 1800 && duration <= 3600){
							percent = 5;
						}else if(duration > 3600 && duration <= 7200){
							percent = 3;
						}else if(duration > 7200 && duration <= 10800){
							percent = 2;
						}else if(duration > 10800){
							percent = 1;
						}
	
						var rate = 100 / percent;
	
						for(var x = 1; x < rate; x++){
							var min = x * percent;
							var max = min + percent;
							var key = "tracked" + min;
							//Force 75% to 98% milestone.
							if(max == 100)max = 98;
							addMilestone(key, min, max);
							if(isDebug())log.debug('setMilestones added: ' + key + '=>' + min + '-' + max);
						}
					}
					addMilestone('tracked98', 98, 100);
				},
	
			/**
			* Method for setting and tracking Media events
			* @private
			* @member	BTG.AppMeasure
			* @param	{String} title Required
			* @param	{Number} time Required
			* @param	{Boolean} mediaComplete
			* @returns	{Void}
			*/
				trackHeartBeat = function(title, time, mediaComplete){
					time = Math.floor(time);
					if(!videodata.reportable || time == 0 || isAdPlaying)return;
	
					heartbeatData.events   = "";
					heartbeatData.products = "";
	
					if(mediaComplete){
						heartbeatData.events = appendWithComma(heartbeatData.events, vars.MEDIA_COMPLETE);
						//Check if this clip is the last item on the playlist
						if(hasPlayList && isLastItem() && hasPlaylistComplete()){
							heartbeatData.events = appendWithComma(heartbeatData.events, vars.MEDIA_PLAYLIST_COMPLETE);
						}
					}
	
					clearVars();
					setValues(heartbeatData, false);
					appMeasure.Media.track(title);
				},
	
				/**
				* Sets the live event beacon frequency based on config flag config.omnitureLiveEventBeaconFreq and/or config.omnitureLiveEventData
				* @private
				* @member	BTG.AppMeasure
				* @returns	{Void}
				*/
				setLiveEventBeaconFreq = function(){		
					var	liveEventData = config.hasOwnProperty('omnitureLiveEventData') && BTG.Object.isArray(config.omnitureLiveEventData) ? config.omnitureLiveEventData : [],
						len = liveEventData.length,
						beaconFreq = !isNaN(config.omnitureLiveEventBeaconFreq) ? config.omnitureLiveEventBeaconFreq : vars.LIVE_BEACON_FREQ;
	
					if(isDebug())log.debug("setLiveEventBeaconFreq beaconFreq: " + beaconFreq);
					for(var i = 0; i < len; i++){
						var data = typeof liveEventData[i] === 'object' ? liveEventData[i] : {};					
						if(data.hasOwnProperty('guid') && data.guid === videodata.guid && !isNaN(data.beaconFreq)){
							liveEventBeaconFreq = data.beaconFreq;
							if(isDebug())log.debug("setLiveEventBeaconFreq guid match: "  + data.guid + " beaconFreq:" + data.beaconFreq);
							break;
						}
					}
	
					if(liveEventBeaconFreq >= vars.LIVE_FREQ_MAX){
						liveEventBeaconFreq = vars.LIVE_FREQ_MAX;
					}else if(liveEventBeaconFreq != null && liveEventBeaconFreq <= vars.LIVE_FREQ_MIN){
						liveEventBeaconFreq = vars.LIVE_FREQ_MIN;
					}else{
						liveEventBeaconFreq = beaconFreq;
					}
	
					if(isDebug())log.debug("setLiveEventBeaconFreq liveEventBeaconFreq: " + liveEventBeaconFreq);
				},
			/**
			* Determines when a milestone should be fired for live event
			* @private
			* @member	BTG.AppMeasure
			* @param	{String} title Required
			* @param	{Number} time Required
			* @returns	{Void}
			*/
				sendLiveHeartBeat = function(title, time){
					if(!config.omnitureLiveEventHeartbeatsDisabled && Math.floor(time / liveEventBeaconFreq) > liveEventCallCount){
						liveEventCallCount++;
						trackHeartBeat(title, time);
					}
				},
	
			/**
			* Method for determining when a milestone should be fired
			* @private
			* @member	BTG.AppMeasure
			* @param	{String} title Required
			* @param	{Number} time Required
			* @param	{Number} percent Required
			* @returns	{Void}
			*/
				sendHeartBeat = function(title, time, percent){
					var	self = BTG.Bento.retrieveSubscriber(NAME),
						length = milestones.length;
					for(var x = 0; x < length; x++){
						var heartBeat = milestones[x];
						if(!heartBeat.fired && percent >= heartBeat.min && percent <= heartBeat.max){
							if(heartBeat.type === "tracked98"){
								if(isDebug())log.debug('sendHeartBeat milestone tracked98 reached. Invoke onPlayEnd.');
								self.onPlayEnd(playheadTime);
							}else{
								if(!config.omnitureHeartbeatsDisabled && playing){
									if(isDebug())log.debug('sendHeartBeat trackEvents time: ' + time);
									trackHeartBeat(title, time);
								}
							}
							if(isDebug())log.debug('sendHeartBeat fired milestone: ' + heartBeat.type);
							milestones = milestones.slice(x + 1);
							break;
						}
					}
				},
	
			/**
			* Method setter for Media.monitor inner function.
			* @private
			* @member	BTG.AppMeasure
			* @param	{Object} m Required
			* @returns	{Void}
			*/
				startMediaMonitor = function(m){
					if(isDebug())log.debug('startMediaMonitor duration: ' + m.duration);				
					appMeasure.Media.monitor = function(s, media){
						mediaTimePlayhead = media.timePlayed;
						switch(media.event){
							case "CLOSE":
								if(isDebug())log.debug('Media Monitor CLOSE videoTitle:' + m.videoTitle);
								trackHeartBeat(m.videoTitle, media.timePlayed, true);
								break;
							case "MONITOR":
									mediaTimePlayhead = media.timePlayed;
									if(m.isLive){
										sendLiveHeartBeat(m.videoTitle, media.timePlayed)
									}else{
										sendHeartBeat(m.videoTitle, media.timePlayed, media.percent);
									}
								break;
							default:
								break;
						}
					};
				},
				/**
				* Method to check if Ad tracking is enabled.
				* @private
				* @member	BTG.AppMeasure
				* @returns	{Boolean}
				*/
				hasAdTracking = function(){
					return config.omnitureAdTracking === "true" || config.omnitureAdTracking === true;
				};
			return {
			/**
			* Constant containing the name of this subscriber
			* @final
			* @member	BTG.AppMeasure
			*/
				NAME : NAME,
	
			/**
			* Method that maps event names to event listeners
			* @member	BTG.AppMeasure
			* @returns	{Object} containing event listeners
			*/
				eventList : function(){
					return {
						CONFIG     : this.onConfig,
						METADATA   : this.onMetadata,
						PLAY       : this.onPlay,
						RESUMEPLAY : this.onResumePlay,
						PAUSE      : this.onPause,
						SEEKING    : this.onSeeking,
						BUFFERING  : this.onBuffering,
						PLAYEND    : this.onPlayEnd,
						PLAYLIST_ENDED : this.onPlaylistEnded,
						PLAYHEADUPDATE : this.onPlayheadUpdate,
						VMN_UUID   : this.onVmnUuid,
						USER_SEGMENT: this.onUserSegment,
						OMT_TRACKING_SERVER : this.onTrackingServer,
						OMT_VISITOR_ID  : this.onVisitorId,
						FW_AD_METADATA : this.onFWAdMetadata,
						FW_AD_CREATIVE_PLAY: this.onAdPlay,
						FW_AD_CREATIVE_PLAYEND : this.onAdPlayEnd
					};
				},
			/**
			* Method setter for config property
			* @member	BTG.AppMeasure
			* @param	{Object} settings Required
			* @returns	{Void}
			*/
				onConfig : function(settings){
					config = settings;
				},
			/**
			* Method setter for metadata property
			* @member	BTG.AppMeasure
			* @param	{Object} data Required
			* @returns	{Void}
			*/
				onMetadata : function(data){
					metadata = data;
				},
	
			/**
			* Method for handling onPlay event
			* @member	BTG.AppMeasure
			* @param	{Number} playhead Required
			* @returns	{Void}
			*/
				onPlay : function(playhead){
					if(isDebug())log.debug('onPlay playhead:', playhead, mediaTimePlayhead);
					if(!metadata.reportable)return;
	
					var newPlayHead = 0;
					if(isPreviousItemPlayEnd()){
						if(isDebug())log.debug('onPlay firing trackMediaClose for previous item: ' + videoTitle);
						trackMediaStop(videoTitle, mediaTimePlayhead);
						trackMediaClose(videoTitle);
						hasMediaPlay = false;
						newPlayHead  = playhead;
						wasScrubbed  = true;
					}else{
						wasScrubbed = false;
					}
					if(!metadata.isAd){				
						videodata    = metadata;
						hasMediaPlay = true;
						hasPlayList  = videodata.hasPlayList;
						videoTitle   = videodata.videoTitle;
						if(!hasPlayList){
							videodata.playlistId = null;
						}
						initAppMeasure();
						setDefaultData();
						//Milestones not needed for live events
						if(!videodata.isLive){
							setMilestones(videodata.itemDuration);
						}
						startMediaMonitor(videodata);
						if(videodata.isLive){//Added to support live event when not started from begining
							trackMediaStop(videoTitle, 0);
							trackMediaOpen(videoTitle, videodata.itemDuration, videodata.applicationName);
							trackMediaPlay(videoTitle, vars.LIVE_EVENT_START_PLAYHEAD); //This is to handle live stream which has play head not as 0. This fix needs to stop the mulitple heart beats for live event.
						}else{
							trackMediaOpen(videoTitle, videodata.itemDuration, videodata.applicationName);
							trackMediaPlay(videoTitle, newPlayHead);
						}
						currentItemIndex = videodata.itemIndex;
						setViewedHistory();
						notify(event.OMT_START, appMeasure);
					}
				},
	
			/**
			* Method for handling onResumePlay event
			* @member	BTG.AppMeasure
			* @param	{Object} data Required
			* @returns	{Void}
			*/
				onResumePlay : function(data){
					if(isDebug())log.debug('onResumePlay');
					if(hasAdTracking() && isAdPlaying){
						if(isDebug())log.debug('onResumePlay and it is an Ad');
						appMeasure.Media.play(adMediaName, 0);
					}else{
						if(!hasMediaPlay)return;
						if(data.elapsed > 0){
							timedBuffer = data.elapsed;
						}
						trackMediaPlay(videoTitle, data.playhead);
					}
				},
	
			/**
			* Method for handling onPause event
			* @member	BTG.AppMeasure
			* @param	{Number} playhead Required
			* @returns	{Void}
			*/
				onPause : function(playhead){
					if(isDebug())log.debug('onPause', playhead);
					if(hasAdTracking() && isAdPlaying){
						if(isDebug())log.debug('onPause and it is an Ad');
						appMeasure.Media.stop(adMediaName, -1);
					}else{
						if(!hasMediaPlay)return;
						trackMediaStop(videoTitle, playhead);
					}
				},
	
			/**
			* Method for handling onSeeking event
			* @member	BTG.AppMeasure
			* @param	{Number} playhead Required
			* @returns	{Void}
			*/
				onSeeking : function(playhead){
					if(isDebug())log.debug('onSeeking', playhead);
					if(!hasMediaPlay)return;
					trackMediaStop(videoTitle, playhead);
				},
	
			/**
			* Method for handling onBuffering event
			* @member	BTG.AppMeasure
			* @param	{Number} playhead Required
			* @returns	{Void}
			*/
				onBuffering : function(playhead){
					if(isDebug())log.debug('onBuffering', playhead);
					if(!hasMediaPlay)return;
					trackMediaStop(videoTitle, playhead);
				},
	
			/**
			* Method for handling onPlayEnd event
			* @member	BTG.AppMeasure
			* @param	{Number} playhead Required
			* @returns	{Void}
			*/
				onPlayEnd : function(playhead){
					if(!hasMediaPlay)return;
					if(isDebug()){
						log.debug('onPlayEnd playhead: ' + playhead, 'mediaTimePlayhead: ' + mediaTimePlayhead);
						log.debug('currentItemIndex: ' + currentItemIndex, 'videodata.itemIndex: ' + videodata.itemIndex);
					}
					//If scrubbing use mediaTimePlayhead, otherwise use playhead position
					playhead = wasScrubbed ? mediaTimePlayhead : playhead;
					trackMediaStop(videoTitle, playhead);
					trackMediaClose(videoTitle);
					hasMediaPlay = false;
					videoTitle   = null;
					playing      = false;
					wasScrubbed  = false;
					notify(event.OMT_END, appMeasure);
				},
	
			/**
			* Method for handling onPlaylistEnded event
			* @member	BTG.AppMeasure
			* @returns	{Void}
			*/
				onPlaylistEnded : function(){
					hasPlaylistStart = false;
					viewedHistory = [];
				},
	
			/**
			* Method for handling onPlayheadUpdate event
			* @member	BTG.AppMeasure
			* @param	{Number} playhead Required
			* @returns	{Void}
			*/
				onPlayheadUpdate : function(playhead){
					playheadTime = playhead;
				},
			
			/**
			* Method for Handling for onFWAdMetadata event
			* @member	BTG.AppMeasure
			* @param	{Object} data Required
			* @returns	{Void}
			*/
				onFWAdMetadata : function(data){
					adMetadata = data;
				},
			
			/**
			* Method for handling onAdCreativePlay event
			* @member	BTG.AppMeasure
			* @returns	{Void}
			*/			
				onAdPlay : function(){
					if(hasAdTracking()){
						if(isDebug())log.debug('onAdPlay : ');
						initAppMeasure(true);
						isAdPlaying = true;
						adMediaName = vars.AD_VIDEO_TITLE+"_"+adMetadata.creativeId+"_"+adMetadata.currentAdIndex+"_"+Math.floor(Math.random() * 10000);
						appMeasure.Media.completeByCloseOffset = false;
						appMeasure.Media.openAd(adMediaName, -1, config.applicationName, metadata.videoTitle, adMetadata.podId, adMetadata.currentAdIndex);
						appMeasure.Media.play(adMediaName, 0);
					}				
				},
					
			/**
			* Method for handling onAdCreativePlayEnd event
			* @member	BTG.AppMeasure
			* @returns	{Void}
			*/	
				onAdPlayEnd : function(){
					if(hasAdTracking()){
						if(isDebug())log.debug('onAdPlayEnd : ');
						isAdPlaying = false;
						appMeasure.Media.complete(adMediaName, playheadTime);
						adMediaName = "";
					}
				},
			
			/**
			* Method to set UUID value
			* @member	BTG.AppMeasure
			* @param	{String} UUID Required
			* @returns	{Void}
			*/
				onVmnUuid : function(uuid){
					if(isDebug())log.debug('onVmnUuid : ' + uuid);
					vmnUUID = uuid;
				},
			/**
			* Method to set User Segment value
			* @member	BTG.AppMeasure
			* @param	{String} usersegment Required
			* @returns	{Void}
			*/			
				onUserSegment:function(usersegment){
					userSegment=usersegment;
				},
			/**
			* Method to set CODA tracking server value from CODA config
			* @member	BTG.AppMeasure
			* @returns	{Void}
			*/
				onTrackingServer : function(domain){
					if(isDebug())log.debug('onTrackingServer : ' + domain);
					codaTrackingServer = domain;
				},
			/**
			* Method to set Visitor id value
			* @member	BTG.AppMeasure
			* @returns	{Void}
			*/
				onVisitorId : function(vId){
					if(isDebug())log.debug('onVisitorId : ' + vId);
					visitorId = vId;
				}
			};
		};
	})(BTG);
	/**
	* Beacons reporting
	* Sorts out, manages and fires beacons according to the mediagen settings
	* @class	Beacons
	*/
	(function(BTG){
		BTG.Beacons = function(){
			/**
			* Constant containing the name of this subscriber
			* @final
			* @private
			* @member	BTG.Beacons
			*/
			var	NAME = 'Beacons',
			/**
			* A config Object.
			* @private
			* @member	BTG.Beacons
			*/
				config = {},
			/**
			* A metadata Object
			* @private
			* @member	BTG.Beacons
			*/
				metadata = {},
			/**
			* Keeps track of current playhead position
			* @private
			* @member	BTG.Beacons
			*/
				currentPlayhead = 0,
			/**
			* Flag to keep track of current playing item type
			* @private
			* @member	BTG.Beacons
			*/
				isAd = false,
			/**
			* * A shortcut to BeaconVars collection
			* @final
			* @private
			* @member	BTG.Beacons
			*/
				vars = BTG.BeaconVars,
			/**
			* Flag to keep track of the player status
			* @private
			* @member	BTG.Beacons
			*/
				stopped = true,
			/**
			* Flag to keep track of the video pause status
			* @private
			* @member	BTG.Beacons
			*/			
				isPaused = false,
			/**
			* An instance of BTG.Log
			* @private
			* @member	BTG.Beacons
			*/
				log = BTG.Log.getLogger(NAME),
	
			/**
			* Returns whether Logging is enabled or disabled
			* @private
			* @member	BTG.Beacons
			* @returns	{Boolean} containing the value of enabled
			*/
				isDebug = BTG.Log.isDebug,
			/**
			* Returns beacon attribute value
			* @private
			* @member	BTG.Beacons
			* @returns	{number} containing the value of beacon attribute
			*/
				getBeaconAttributeValue = function(beaconObj, name){
					var value = -1;
					if(beaconObj.hasOwnProperty(name)){
						value = (beaconObj[name] || beaconObj[name] === 0 ? beaconObj[name] : value);
					}
					return value;
				};
	
			return {
			/**
			* NAME constant containing the name of this subscriber
			* @final
			* @member	BTG.Beacons
			*/
				NAME : NAME,
			/**
			* Array of sorted out on play firing beacons
			* @member	BTG.Beacons
			*/
				onPlayBeacons : [],
			/**
			* Array of sorted out on play end firing beacons
			* @member	BTG.Beacons
			*/
				onPlayEndBeacons : [],
			/**
			* Flag to keep track of previously played item type
			* @member	BTG.Beacons
			*/
				prevIsAd : false,
			/**
			* Flag to keep track of resume play status
			* @private
			* @member	BTG.Beacons
			*/			
				hasResumePlay : false,
			/**
			* Timer to fire beacons at predefined times
			* @member	BTG.Beacons
			*/
				beaconTimer : BTG.TimerUtil.getTimer(NAME),
			/**
			* Maps event names to event listeners
			* @member	BTG.Beacons
			* @returns	{Object} containing event listeners
			*/
				eventList : function(){
					return {
						CONFIG     : this.onConfig,
						METADATA   : this.onMetadata,
						PLAY       : this.onPlay,
						PAUSE      : this.onPause,
						RESUMEPLAY : this.onResumePlay,
						SEEKING    : this.onSeeking,
						BUFFERING  : this.onBuffering,
						PLAYEND    : this.onPlayEnd,
						PLAYHEADUPDATE : this.onPlayHeadUpdate,
						FW_AD_PLAY : this.onAdPlay
					};
				},
	
			/**
			* Stores a config Object
			* @member	BTG.Beacons
			* @param	{Object} settings Required
			* @returns	{Void}
			*/
				onConfig : function(settings){
					config = settings;
				},
	
			/**
			* Handles onMetadata event
			* @member	BTG.Beacons
			* @param	{Object} data Required
			* @returns	{Void}
			*/
				onMetadata : function(data){
					metadata = data;
				},
			/**
			* Handles playhead update event
			* starts beacon timer if needed
			* populates private var to keep track of the position
			* @member	BTG.Beacons
			* @param	{Number} playhead position
			* @returns	{Void}
			*/
				onPlayHeadUpdate : function(playhead){
					if(!isAd && !this.beaconTimer.running() && !isPaused){
						this.beaconTimer.start();
						stopped = false;
					}				
					currentPlayhead = playhead;
				},
			/**
			* Sorts out beacons into on play and play end collections
			* @member	BTG.Beacons
			* @returns	{Boolean} Flag indicating if beacons are present
			*/
				onBeaconStart:function(){				
					var	beacons = metadata.beacons ? metadata.beacons : [],
						startUp = false,
						fixTime = function(num){
							return num < 0 ? metadata.duration * 1000 - Math.abs(num) : num * 1000;
						};
					if(beacons.length > 0){
						startUp = true;
						var size = beacons.length;
						for(var x=0; x < size; x++){
							var beacon = beacons[x];
							if(typeof beacon === 'object'){
								if((beacon.hasOwnProperty('startTime') && beacon.startTime === vars.MAX_VALUE)
									|| (beacon.hasOwnProperty('atEnd') && beacon.atEnd)){
									this.onPlayEndBeacons.push(beacon);
								}else{
									if(!beacon.toMilliSeconds){
										beacon.startTime = fixTime(beacon.startTime);
										beacon.elapsed = fixTime(beacon.elapsed);
										beacon.toMilliSeconds = true;
									}								
									this.onPlayBeacons.push(beacon);
								}
							}
						}
					}
					return startUp;
				},
			/**
			* Retrieves additional beacon properties
			* needed to be part of the beacon call
			* @member	BTG.Beacons
			* @param	{Array} Additional beacon properties
			* @returns	{Object} Populated key/value object
			*/
				getPropsData : function(props){
					var size=props.length;
					var data={};
					for(var x=0; x<size; x++){
						var item=props[x];
						for(var i in item){
							if(item.hasOwnProperty(i)){
								data[item.name]=item.value;
							}
						}
					}
					return data;
				},
			/**
			* Performs call to replace tokens with values
			* gets additional props if available and sends the beacon call
			* @member	BTG.Beacons
			* @param	{Object} Beacon
			* @returns	{Void}
			*/
				sendBeacon : function(beacon){
					beacon.url = BTG.String.replaceTokens(beacon.url, {ref:config.referrer});
					var url = BTG.String.replaceTokens(beacon.url, metadata);
					var data = {};
					if(beacon.postVars && beacon.postVars.length > 0){
						data = this.getPropsData(beacon.postVars);
					}
					if(isDebug())log.debug('sendBeacon url: ', url);
					BTG.Beacon.send({url:url,params:data});
				},
			/**
			* Iterates through on play beacons periodically
			* as invoked from the timer
			* @member	BTG.Beacons
			* @returns	{Void}
			*/
				checkBeacons : function(){
					var 	self = BTG.Bento.retrieveSubscriber(NAME),
						numFix = function(n){
							return isNaN(n) ? 0 : n;
						},
						getTime = function(a,b){
							a = numFix(a);
							b = numFix(b);
							return a > b ? a : b;
						};
					for(var x = 0; x < self.onPlayBeacons.length; x++){
						if(typeof self.onPlayBeacons[x] === 'object'){
							var	beacon  = self.onPlayBeacons[x],
								isStart = false,
								minTime = null,
								maxTime = null,
								beaconTime = null,
								timeCount  = null,
								timeCheck  = false,
								hasBeaconTimer = false,
								startTime = getBeaconAttributeValue(beacon, 'startTime'),
								elapsedTime = getBeaconAttributeValue(beacon, 'elapsed'),
								elapsedAfterAd = (beacon.hasOwnProperty('elapsedAfterAd') ? beacon.elapsedAfterAd : false),
								elapsedAlways = (beacon.hasOwnProperty('elapsedAfterAd') === false);						
							//if(isDebug())log.debug('checkBeacons startTime: '+startTime+' elapsedTime: '+elapsedTime+' elapsedAfterAd: '+elapsedAfterAd+' self.prevIsAd: '+self.prevIsAd+' beacon.elapsedAlways: '+elapsedAlways+
								//	'    beaconTimer.currentCount '+self.beaconTimer.currentCount());
							if(!self.hasResumePlay){
								if(elapsedAfterAd && self.prevIsAd){
									beaconTime = getTime(beacon.elapsed, beacon.startTime);
									timeCount  = Math.round(self.beaconTimer.currentCount());
									hasBeaconTimer = true;
								}else if((startTime >= 0 || elapsedTime >=0)
										&& (!elapsedAfterAd && !self.prevIsAd) //Make sure beacon fires for elapsedAfterAd is set and no prev Ad
										|| elapsedAlways){ //Make sure beacon fires if no elapsedAdfterAd is set	
									beaconTime = getTime(beacon.startTime, beacon.elapsed);
									timeCount  = Math.round(currentPlayhead * 1000);
									isStart = true;
									hasBeaconTimer = true;
								}
								
								maxTime = timeCount + vars.DEFAULT_RANGE;
								minTime = timeCount - vars.DEFAULT_RANGE;
								if(hasBeaconTimer){
									//Check if beacon time is within the firing range
									timeCheck = beaconTime >= minTime && beaconTime <= maxTime || beaconTime === 0;
								}
							}else{
								//Check if beacon should have fired in the past.
								var playhead = Math.round(currentPlayhead * 1000);
								timeCheck = isStart && beaconTime < playhead;
							}
	
							if(timeCheck){
								self.sendBeacon(beacon);
								self.onPlayBeacons.splice(x,1);
							}
						}
					}
					//Reset hasResumePlay.
					self.hasResumePlay = false;
	
					if(self.onPlayBeacons.length === 0){
						self.beaconTimer.removeListener(self.checkBeacons);
						self.beaconTimer.stop();
						self.stopped = true;
					}
				},
			/**
			* Handles play event
			* starts beacon timer when not playing an ad and beacons exist
			* @member	BTG.Beacons
			* @param	{Number} playhead position
			* @returns	{Void}
			*/
				onPlay : function(playhead){
					isAd = metadata.isAd;
					if(!isAd){
						if(this.onBeaconStart()){
							stopped = false;
							this.beaconTimer.addListener(this.checkBeacons);
							this.beaconTimer.start();
						}
					}
				},
			/**
			* Handles buffering event
			* stops beacon timer if needed
			* @member	BTG.Beacons
			* @param	{Number} playhead position
			* @returns	{Void}
			*/			
				onBuffering : function(playhead){
					if(!isAd && !stopped){
						this.beaconTimer.stop();
						stopped = true;
					}
				},			
			/**
			* Handles seeking event
			* stops beacon timer if needed
			* @member	BTG.Beacons
			* @param	{Number} playhead position
			* @returns	{Void}
			*/			
				onSeeking : function(playhead){
					if(!isAd && !stopped){
						this.beaconTimer.stop();
						stopped = true;
					}
				},
			/**
			* Handles play resume event
			* resumes beacon timer if needed
			* @member	BTG.Beacons
			* @param	{Number} playhead position
			* @returns	{Void}
			*/	
				onResumePlay : function(playhead){
					var self = BTG.Bento.retrieveSubscriber(NAME);
	
					isPaused = false;
					playhead = Math.round(playhead * 1000);
	
					if(!isAd && !stopped){
						stopped = false;
						this.hasResumePlay = true;
						this.beaconTimer.start();
					}
				},
			/**
			* Handles pause event
			* stops beacon timer if needed
			* @member	BTG.Beacons
			* @param	{Number} playhead position
			* @returns	{Void}
			*/	
				onPause : function(playhead){
					isPaused=true;
					if(!isAd && !stopped){
						this.beaconTimer.stop();
						stopped=true;
					}
				},			
			/**
			* Handles play end event
			* sends play end beacon when not playing an ad
			* @member	BTG.Beacons
			* @returns	{Void}
			*/
				onPlayEnd : function(playhead){
					if(!isAd){
						var size=this.onPlayEndBeacons.length;
						for(var x=0; x<size; x++){
							this.sendBeacon(this.onPlayEndBeacons[x]);
						}
						this.prevIsAd = false;
						
						this.beaconTimer.reset();
						if(isDebug())log.debug('calling reset  '+this.beaconTimer.currentCount());
						this.onPlayEndBeacons=[]; 
						this.onPlayBeacons=[];
						this.hasResumePlay=false; 
						isPaused=false;
					}
					stopped = true;
				},
				onAdPlay : function(){
					this.prevIsAd=true;
				}
			};
		};
	})(BTG);/**
	* Comscore subscriber provides tracking of video content via BTG.Beacon utility
	* @class	BTG.Comscore
	*/
	(function(BTG){
		/**
		* Initializes an instance of Comscore
		* @constructor
		* @member	BTG.Comscore
		*/
		BTG.Comscore = function(){
			/**
			* Constant containing the name of this subscriber
			* @final
			* @private
			* @member	BTG.Comscore
			*/
			var	NAME = 'Comscore',
	
			/**
			* A config Object.
			* @private
			* @member	BTG.Comscore
			*/
				config = {},
			/**
			* A Comscore data Object
			* @private
			* @member	BTG.Comscore
			*/
				comscoreData = {},
	
			/**
			* A metadata Object
			* @private
			* @member	BTG.Comscore
			*/
				metadata = {},
	
			/**
			* ComscoreVars constant
			* @private
			* @member	BTG.Comscore
			*/
				vars = BTG.ComscoreVars,
	
			/**
			* An instance of BTG.Log
			* @private
			* @member	BTG.Comscore
			*/
				log = BTG.Log.getLogger(NAME),
	
			/**
			* Returns whether Logging is enabled or disabled
			* @private
			* @member	BTG.Comscore
			* @returns	{Boolean} containing the value of enabled
			*/
				isDebug = BTG.Log.isDebug;
	
			return {
			/**
			* NAME constant containing the name of this subscriber
			* @final
			* @member	BTG.Comscore
			*/
				NAME : NAME,
	
			/**
			* Method that maps event names to event listeners
			* @member	BTG.Comscore
			* @returns	{Object} containing event listeners
			*/
				eventList : function(){
					return {
						CONFIG   : this.onConfig,
						METADATA : this.onMetadata,
						PLAY     : this.onPlay,
						FW_AD_PLAY  : this.onAdPlay
					};
				},
	
			/**
			* Stores a config Object
			* @member	BTG.Comscore
			* @param	{Object} settings Required
			* @returns	{Void}
			*/
				onConfig : function(settings){
					config = settings;
					comscoreData = {
						url       : vars.BEACON_URL,
						maxLength : vars.URL_LIMIT,
						rndKey    : vars.RND_KEY,
						params : {
							C1: vars.BEACON_TYPEID,
							C2: config.comScorePrimaryID,
							C3: config.comScoreProducerID,
							C4: config.comScoreLocationID,
							C6: '',
							C7: escape(BTG.String.lengthLimiter(config.playerURL, vars.PARAM_LIMIT)), 
							C9: escape(config.referrer ? BTG.String.lengthLimiter(config.referrer, vars.PARAM_LIMIT) : "NO_REF")
						}
					};
				},
	
			/**
			* Method for handling onMetadata event
			* @member	BTG.Comscore
			* @param	{Object} data Required
			* @returns	{Void}
			*/
				onMetadata : function(data){
					metadata = data;
				},
	
			/**
			* Assembles a data object and invokes BTG.Beacon.send()
			* @member	BTG.Comscore
			* @returns	{Void}
			*/
				onPlay : function(){
					if(!metadata.reportable || metadata.isAd){
						if(isDebug)log.debug("Do not report this item.");
						return;
					}
						
					comscoreData.params.C5 = vars.CONTENT_GENREID;
					comscoreData.params.C8 = escape(metadata.videoTitle);
					BTG.Beacon.send(comscoreData);
				},
			/**
			* Assembles a data object and invokes BTG.Beacon.send() for Ads
			* @member	BTG.Comscore
			* @returns	{Void}
			*/
				onAdPlay : function(){
					if(!config.comscoreAdTracking){
						if(isDebug)log.debug("Do not report this item.");
						return;
					}
					comscoreData.params.C5 = vars.VIDEOAD_GENREID;
					comscoreData.params.C8 = vars.VIDEOAD_TITLE;
					BTG.Beacon.send(comscoreData);
				}
			};
		};
	})(BTG);
	/**
	* DataJanitor subscriber cleans up data and sets default values.
	* @class	DataJanitor
	*/
	(function(BTG){
		BTG.DataJanitor = function(){
				/**
				* Shortcut for BTG.DataJanitorVars
				* @private
				* @member	DataJanitor
				*/
			var	VARS = BTG.DataJanitorVars,
	
				/**
				* Shortcut for BTG.Events.CONFIG
				* @private
				* @member	DataJanitor
				*/
				CONFIG = BTG.Events.CONFIG,
	
				/**
				* Regular expression constant for value of spaces
				* @private
				* @member	DataJanitor
				*/
				SPACE = new RegExp(/^\s+$/),
	
				/**
				* Regular expression constant for value of 'undefined'
				* @private
				* @member	DataJanitor
				*/
				UNDEF = new RegExp(/^undefined/i),
	
				/**
				* Regular expression constant for value of 'null'
				* @private
				* @member	DataJanitor
				*/
				NULL = new RegExp(/^null/i),
	
				/**
				* Stores a config object
				* @private
				* @member	DataJanitor
				*/
				config = null,
	
				/**
				* Shortcut to BTG.Object.replaceWith
				* @private
				* @member	DataJanitor
				* @param	{Object} data
				* @param	{Object} values
				* @param	{Function} test
				* @returns	{Object}
				*/
				replaceWith = BTG.Object.replaceWith,
	
				/**
				* Performs RegExp.test() on a given string.
				* @private
				* @member	DataJanitor
				* @param	{String} str
				* @returns	{Boolean}
				*/
				isUndefined = function(str){
					return str === '' || SPACE.test(str) || UNDEF.test(str) || NULL.test(str);
				};
			return {
				/**
				* Constant containing the name of this subscriber
				* @final
				* @member	DataJanitor
				*/
				NAME : 'DataJanitor',
	
				/**
				* onRegister is invoked when this Subscriber is registered
				* @member	DataJanitor
				* @returns	{Object}
				*/
				onRegister : function(){
					CONFIG.add(this.onConfig, this);
				},
	
				/**
				* onRemove is invoked when this Subscriber is removed
				* @member	DataJanitor
				* @returns	{Void}
				*/
				onRemove : function(){
					CONFIG.remove(this.onConfig);
					CONFIG.dispatch(config);
				},
	
				/**
				* Handler for CONFIG event. Replaces default and undefined values.
				* @member	DataJanitor
				* @param	{Object} config Required
				* @returns	{Void}
				*/
				onConfig : function(data){
					var values = VARS.DEFAULT_VALUES;
					for(var i in values){
						if(values.hasOwnProperty(i) && data.hasOwnProperty(i)){
							var item = values[i];
							var regex = new RegExp('^' + item.matchOn, 'i');
							if(regex.test(data[i])){
								data[i] = item.value;
							}
						}
					}
					config = replaceWith(data, VARS.UNDEFINED_VALUES, isUndefined);
					BTG.Bento.removeSubscriber(this);
				}
			};
		};
	})(BTG);
	/**
	* Demdex subscriber provides demdex values to CODA
	* @class	BTG.Comscore
	*/
	(function(BTG){
		/**
		* Initializes an instance of Demdex
		* @constructor
		* @member	BTG.Demdex
		*/
		BTG.Demdex = function(){
			/**
			* Constant containing the name of this subscriber
			* @final
			* @private
			* @member	BTG.Demdex
			*/		
			var NAME = 'Demdex',
			/**
			* An instance of BTG.Log
			* @private
			* @member	BTG.Demdex
			*/
			log = BTG.Log.getLogger(NAME),
			/**
			* Returns whether Logging is enabled or disabled
			* @private
			* @member	BTG.Demdex
			* @returns	{Boolean} containing the value of enabled
			*/
			isDebug = BTG.Log.isDebug,
			/**
			* Reqular expression to get only prop, eVar, products, events, pagename and hier
			* @private
			* @member	BTG.Demdex
			*/
			regExp = /^((prop\d{1,2}|evar\d{1,2}|products|events|pagename|hier\d{1,2}))$/ig,
			/**
			* AppMeasureVars constant
			* @private
			* @member	BTG.Demdex
			*/
			vars = BTG.AppMeasureVars,
			/**
			* A config Object.
			* @private
			* @member	BTG.Demdex
			*/
			config = {},
			/**
			* A method reference pointing to BTG.MessageUtil.postMessage.
			* @private
			* @member	BTG.Demdex
			*/
			post = BTG.MessageUtil.postMessage,
			/**
			* String represents the type of post message.
			* @private
			* @member	BTG.Demdex
			*/
			postType = BTG.MessageVars.DEMDEX;
			
			return {
				/**
				* Constant containing the name of this subscriber
				* @final
				* @member	BTG.Demdex
				*/
				NAME : NAME,
				/**
				* Method that maps event names to event listeners
				* @member	BTG.Demdex
				* @returns	{Object} containing event listeners
				*/
				eventList : function(){
					return {
						CONFIG   : this.onConfig,
						OMT_START : this.onOmtStart,
						OMT_END	:	this.onOmtEnd
					};
				},
							
				/**
				* Stores a config Object
				* @member	BTG.Demdex
				* @param	{Object} settings Required
				* @returns	{Void}
				*/
				onConfig : function(settings) {
					config = settings;				
				},
				/**
				* collects all relevant data points from the appMeasure object and sends it to coda to make it into a JSON object when clip starts
				* @member	BTG.Demdex
				* @param	{Object} a copy of appMeasurement 
				* @returns	{Void}
				*/
				onOmtStart : function(data){
					if (config.demdexEnabled) {
						if(isDebug())log.debug('onOmtStart', data);
						var cData=[];
						for(var key in data){
							if(key && data.hasOwnProperty(key) && key.toString().search(regExp)!==-1 && data[key]) {
								cData.push(key+"="+data[key]);
							}
						}
						//parent.postMessage(JSON.stringify({type:"demdexcall",value:cData}),"*");
						post(postType, cData);
					}
				},
				/**
				* collects all relevant data points from the appMeasure object and sends it to coda to make it into a JSON object when clip ends
				* @member	BTG.Demdex
				* @param	{Object} a copy of appMeasurement 
				* @returns	{Void}
				*/
				onOmtEnd : function(data) {
					if(config.demdexEnabled && config.demdexEndCallEnabled){
						if(isDebug())log.debug('onOmtEnd', data);
						var cData = [];
						var mapVars = vars.MEDIA_NAME+vars.MEDIA_SEGMENTEVAR+vars.MEDIA_SEGMENTEVAR_DEMDEX;
						for(var key in data){
							if(key && data.hasOwnProperty(key) && key.toString().search(regExp)!==-1 && data[key] && mapVars.toLowerCase().indexOf(key.toLowerCase())!==-1) {
								cData.push(key+"="+data[key]);
							}
						}
						//parent.postMessage(JSON.stringify({type:"demdexcall",value:cData}),"*");
						post(postType, cData);
					}				
				}
				
			}
		};
	})(BTG);/**
	* Freewheel subscriber provides functionality to display video Ads from Freewheel.
	* @class	Freewheel
	*/
	(function(BTG){
		/**
		* Initializes an instance of Freewheel
		* @constructor
		* @member	BTG.Freewheel
		*/
		BTG.Freewheel = function(){
				/**
				* Constant containing the name of this subscriber
				* @final
				* @private
				* @member	BTG.Freewheel
				*/	
				var	NAME = "Freewheel",
				/**
				* An instance of BTG.Log
				* @private
				* @member	BTG.Freewheel
				*/
				log = BTG.Log.getLogger('Freewheel'),
				/**
				* Returns whether Logging is enabled or disabled
				* @private
				* @member	BTG.Freewheel
				* @returns	{Boolean} containing the value of enabled
				*/
				isDebug = BTG.Log.isDebug,
				/**
				* Collection of predefined event objects
				* @private
				* @member	BTG.Freewheel
				*/
				events = BTG.Events,
				/**
				* Shortcut for BTG.MessageVars,
				* @private
				* @member	BTG.Freewheel
				*/
				messageVar = BTG.MessageVars,
				/**
				* Flag to indicate Freewheel readiness
				* @private
				* @member	BTG.Freewheel
				*/
				isFWReady = false,
				/**
				* Holds value of ad slot to play
				* @private
				* @member	BTG.Freewheel
				*/
				slotToBePlayed,
				/**
				* A Boolean for determining freewheel request
				* @private
				* @member	BTG.Freewheel
				*/
				hasFWReq = false,
				/**
				* A Boolean for determining play Ad wait
				* @private
				* @member	BTG.Freewheel
				*/
				playAdWait = false,
				/**
				* A Boolean for determining international type
				* @private
				* @member	BTG.Freewheel
				*/
				isIntl = false,
				/**
				* Constants for freewheel variables
				* @private
				* @member	BTG.Freewheel
				*/
				constants = BTG.FreewheelVars,			
				/**
				* A config Object
				* @private
				* @member	BTG.Freewheel
				*/
				config = {},
				/**
				* A metadata Object
				* @private
				* @member	BTG.Freewheel
				*/
				metadata = {},
				/**
				* A videodata Object
				* @private
				* @member	BTG.Freewheel
				*/
				videodata = {},
				/**
				* A sdk object from tv.freewheel.SDK
				* @private
				* @member	BTG.Freewheel
				*/
				SDK = tv.freewheel.SDK,
				/**
				* A string contains the time position class for preroll from freewheel SDK
				* @private
				* @member	BTG.Freewheel
				*/
				PREROLL    = SDK.TIME_POSITION_CLASS_PREROLL,
				/**
				* A string contains the time position class for midroll from freewheel SDK
				* @private
				* @member	BTG.Freewheel
				*/
				MIDROLL    = SDK.TIME_POSITION_CLASS_MIDROLL,
				/**
				* A string contains the time position class for postroll from freewheel SDK
				* @private
				* @member	BTG.Freewheel
				*/
				POSTROLL   = SDK.TIME_POSITION_CLASS_POSTROLL,
				/**
				* A string contains the time position class for display ad from freewheel SDK
				* @private
				* @member	BTG.Freewheel
				*/
				DISPLAY    = SDK.TIME_POSITION_CLASS_DISPLAY,
				/**
				* A string contains the time position class for overlay from freewheel SDK
				* @private
				* @member	BTG.Freewheel
				*/
				OVERLAY    = SDK.TIME_POSITION_CLASS_OVERLAY,
				/**
				* A preroll Array
				* @private
				* @member	BTG.Freewheel
				*/
				preRolls   = [],
				/**
				* A midroll Array
				* @private
				* @member	BTG.Freewheel
				*/
				midRolls   = [],
				/**
				* A postroll Array
				* @private
				* @member	BTG.Freewheel
				*/
				postRolls  = [],
				/**
				* A overlay Array
				* @private
				* @member	BTG.Freewheel
				*/
				overlays   = [],
				/**
				* A Boolean for determining whether the video is initialized with the default value to false
				* @private
				* @member	BTG.Freewheel
				*/
				isInitialized = false,
				/**
				* A Boolean for determining full episode with the default value to false
				* @private
				* @member	BTG.Freewheel
				*/
				isFullEpisode = false,
				/**
				* A Number for tracking total item with the default value to 0
				* @private
				* @member	BTG.AppMeasure
				*/
				totalItem  = 0,
				/**
				* A Number for tracking current index with the default value to 0
				* @private
				* @member	BTG.AppMeasure
				*/
				currentIndex = 0,
				/**
				* A Number for tracking played time with the default value to 0
				* @private
				* @member	BTG.AppMeasure
				*/
				playedTime = 0,
				/**
				* A Boolean for determining ad play with the default value to false
				* @private
				* @member	BTG.Freewheel
				*/
				isAdPlaying = false,
				/**
				* A Boolean for determining whether Ad started to play with the default value to false
				* @private
				* @member	BTG.Freewheel
				*/
				hasAdStarted = false,
				/**
				* A Boolean for determining is overlay ad playing	
				* @private
				* @member	BTG.Freewheel
				*/
				isOverlayPlaying = false,
				/**
				* A String to hold environment value 'group'. Few sample values it may contain are 'intl', 'kids'.	
				* @private
				* @member	BTG.Freewheel
				*/
				group = "",
				/**
				* Contains FW Ad URL for domestic player.	
				* @private
				* @member	BTG.Freewheel
				*/
				fwURL = constants.FW_URL,
				/**
				* Contains FW default AssetId provided for Intl player.	
				* @private
				* @member	BTG.Freewheel
				*/
				defaultAssetId = constants.FW_INTL_DEFAULT_ASSET_ID,
				/**
				* Overlay event data object that needs to be passed during overlay ad starts and end.	
				* @private
				* @member	BTG.Freewheel
				*/
				overlayEventData = {overlayWidth:0,overlayHeight:0},
				/**
				* Currently playing Ad index per slot	
				* @private
				* @member	BTG.Freewheel
				*/
				currentAdIndex = 0,
				/**
				* Flag to identify current playing Ad is a VPAID Ad or not
				* @private
				* @member	BTG.Freewheel
				*/
				isVpaid = false,
				/**
				* To sort Ad slot array based on their timeposition
				* @private
				* @member	BTG.Freewheel
				* @param {Object} slotA Required
				* @param {Object} slotB Required
				* @returns {Boolean}
				*/
				slotSort = function(slotA,slotB){	//Method is to sort Ad Slot array based on their timePosition
					if(slotA.getTimePosition() > slotB.getTimePosition())
						return 1;
					else if (slotA.getTimePosition() > slotB.getTimePosition())
						return 0;
					else
						return -1;
				},
				/**
				* Saves passed key/value pair to DOM storage
				* @private
				* @member	BTG.Freewheel
				* @param	{String} name Required
				* @param	{String} value Required
				* @returns	{Void}
				*/
				store = function(name,value){
					try{
						window.localStorage.setItem(name,value);
					}catch(e){
						if(isDebug())log.debug("Storage error: "+e);
					}
				},
				/**
				* Retrieves value for passed name from DOM storage
				* @private
				* @member	BTG.Freewheel
				* @param	{String} name Required
				* @returns	{String} value from DOM storage
				*/
				retrieve = function(name){
					try{
						return window.localStorage.getItem(name);
					}catch(e){
						if(isDebug())log.debug("Retrieve error: "+e);
					}
				},
				/**
				* Retrieves Demdex Freewheel Segment values from DOM storage
				* @private
				* @member	BTG.Freewheel
				* @returns	{Array} Demdex Freewheel Segment values
				*/
				getFWSegment = function(){
					var fwSegments = retrieve(constants.FW_DEMDEX_FW_SEGMENT);
					if(fwSegments){
						return fwSegments.split(',');
					}else{
						return null;
					}
				},
				/**
				* Saves current UUID value
				* @private
				* @member	BTG.Freewheel
				* @param	{String} value Required
				* @returns	{Void}
				*/		
				saveUuid = function(value){
					store(constants.FW_VMN_UUID, value);
				},
				/**
				* Saves current Demdex Frewheel Segment value
				* @private
				* @member	BTG.Freewheel
				* @param	{String} value Required
				* @returns	{Void}
				*/		
				saveFwSegment = function(value){
					store(constants.FW_DEMDEX_FW_SEGMENT, value);
				},
				/**
				* Determines the availability of Freewheel Ad
				* @private
				* @member	BTG.Freewheel
				* @param	{Number} currentItem Required
				* @param	{Boolean} isContentEnd Required
				* @returns	{Boolean}
				*/
				isAdAvailable = function(currentItem, isContentEnd){
					var hasAd = false,				
					currentItem = currentItem || 0,
					isContentEnd = (isContentEnd == "true" ||  isContentEnd == true);
					currentIndex = currentItem;
					if(isDebug())log.debug("isAdAvailable() currentItem: "+currentItem+"  isContentEnd:"+isContentEnd +" midRolls.length: "+midRolls.length+ "   midRolls.length > 0 && !isContentEnd:"+(midRolls.length > 0 && !isContentEnd));
					if(isTimeSinceLastAdElapsed()){
						if(currentItem == 0 && !isContentEnd){ //Pre-Roll Ad check. Added isPlayIndex to fire pre-roll call when play index is used
							if(isDebug())log.debug("isAdAvailable() preRolls.length: "+preRolls.length);
							if(preRolls.length > 0){
								if(isDebug())log.debug("isAdAvailable() preRoll is available ");
								slotToBePlayed = preRolls[0];
								preRolls.shift();
								hasAd = true;
							}
						}else if(((currentItem + 1) == totalItem) && isContentEnd){//Post-Roll Ad check
							if(postRolls.length > 0){
								if(isDebug())log.debug("isAdAvailable() isPostRollAvailable");
								slotToBePlayed = postRolls[0];
								postRolls.shift();
								hasAd = true;
							}						
						}else if(isFullEpisode && midRolls.length > 0 && !isContentEnd){
							if(isDebug())log.debug("isAdAvailable() isMidroll available?");
							var mRoll = getMidroll();
							if(isDebug())log.debug("isAdAvailable() mRoll:"+mRoll);
							if(mRoll){ //BTGREPGEN-1891		
								if(isDebug())log.debug("isAdAvailable() MidRoll is available ");
								slotToBePlayed = mRoll;
								hasAd = true;
							}
						}			
					}
					if(isDebug())log.debug("isAdAvailable() hasAd:"+hasAd);
					if(hasAd){
						events.FW_SLOTS_READY.dispatch();
					}
					return hasAd;
				},
				/**
				* To determine the time since last Ad elapsed
				* @private
				* @member	BTG.Freewheel
				* @returns {Boolean}
				*/
				isTimeSinceLastAdElapsed = function(){	
					var contentPlayedTime = retrieve(constants.FW_VIDEO_PLAYED_TIME);
					contentPlayedTime = (contentPlayedTime!==null?parseInt(contentPlayedTime,10):contentPlayedTime)*1000;//Converting played time from secs to millisecs
					if(isDebug())log.debug("isItTimeForAnAd() playHeadTime:"+contentPlayedTime+"  constants.FW_MINTIME_BTW_ADS: "+config.freewheelTimeSinceLastAd+"   isFWReady: "+isFWReady);
					if(config.freewheelTimeSinceLastAd <= 0 || contentPlayedTime === null || contentPlayedTime === 0 || isNaN(contentPlayedTime) || contentPlayedTime > config.freewheelTimeSinceLastAd){
						return true;
					}
					return false;		
				},
				/**
				* To load freewheel config data
				* @private
				* @member	BTG.Freewheel
				* @param {Object} mData Required
				* @returns {Void}
				*/
				loadConfig = function(mData){
					totalItem = mData.playlistMetadataItems.length; //BTGREPGEN-1891
					isFullEpisode = mData.isFullEpisode;
					group = config.group;
					isIntl = (group === "intl");
					setFWDefaultValues();
					if(!config.freewheelDisplayBase){
						config.freewheelDisplayBase = "playerView";
					}
					if(!config.freewheelTimeSinceLastAd && config.freewheelTimeSinceLastAd != 0){
						config.freewheelTimeSinceLastAd = constants.FW_DEF_MIN_TIME_FOR_ADS;
					}				
					if(isDebug())log.debug("loadConfig:  totalItem="+totalItem+"  isFullEpisode="+isFullEpisode+"   mData.playlistURI="+mData.playlistURI);
					if(!config.freewheelAssetId){
						config.freewheelAssetId = (isFullEpisode ? mData.playlistURI : mData.guid);
					}
					if(!config.freewheelSiteSection){
						config.freewheelSiteSection = constants.FW_DEF_SITE_SECTION;
					}
					if(typeof config.freewheelAppendSIDSuffix != 'undefined' && config.freewheelAppendSIDSuffix){
						if(BTG.Environment.isMobile()){
							config.freewheelSiteSection += constants.FW_MOB_SID_SUFFIX;
						}else if(BTG.Environment.isTablet()){
							config.freewheelSiteSection += constants.FW_TAB_SID_SUFFIX;
						}
					}
					
				},
				/**
				* To update the param of Freewheel
				* @private
				* @member	BTG.Freewheel
				* @param {Number} index Required
				* @returns {Void}
				*/
				updateFWParam = function(index){
					hasFWReq = false;
					isFWReady = false;
					config.freewheelAssetId = metadata.playlistMetadataItems[index]["rss"].guid;
				},
				/**
				* To play the Ad slot
				* @private
				* @member	BTG.Freewheel
				* @returns {Void}
				*/
				playAd = function(){
					if(isDebug())log.debug('playAd: slotToBePlayed: '+slotToBePlayed);
					if(slotToBePlayed){
						slotToBePlayed.play();
					}
				},
				/**
				* To play overlay Ad
				* @private
				* @member	BTG.Freewheel
				* @returns {Void}
				*/
				playOverlay = function(){
					if(overlays.length>0){
						overlays[0].play();
						isOverlayPlaying = true; //Setting isOverlayPlaying to true so this method will not be called again for same overlay.
					}	
				},
				/**
				* To get the midroll ad to be played
				* @private
				* @member	BTG.Freewheel
				* @returns {Object}
				*/
				getMidroll = function(){ //BTGREPGEN-1891
					var midRoll = null,
					    len = midRolls.length;
					if(isDebug())log.debug("getMidroll: "+midRolls.length);
					if(len > 0){
						for(var m = 0; m < len; m++){											
							if(currentIndex > m && midRolls[m]){
								midRoll = midRolls[m];
								midRolls[m] = false;
								break;
							}	
						}
					}
					return midRoll;
				},
				/**
				* To determine the first Ad item
				* @private
				* @member	BTG.Freewheel
				* @returns {Number}
				*/
				isFirstItem = function(){
					return metadata.itemIndex == 0;
				},
				/**
				* To determine the last Ad item
				* @private
				* @member	BTG.Freewheel
				* @returns {Number}
				*/
				isLastItem = function(){
					return metadata.itemIndex == metadata.playlistLength - 1;
				},
				/**
				* Temporary solution to handle Telemetry VPAID2 creative
				* @private
				* @member	BTG.Freewheel
				*/
				fixVpaidCreative = function(isAdPaused){
					if(!isVpaid) return;
					var div = document.getElementById('sauron_stage');
					if(div){
						div =  (typeof div.length != "undefined" ? div[0] : div);
						div.style.display = (isAdPaused ? 'none' : 'block');
					}
				},
				/**
				* To create Ad Metadata object and fire FW metadata event and FW play event.
				* @private
				* @member	BTG.Freewheel
				* @returns {Void}
				*/
				setAdMetadata = function(adInstance, isAdClickable){ 
					
					var btgFW = BTG.Bento.retrieveSubscriber(NAME),
					btgEvent = BTG.Events,
					adSlot = null,
					adMData = {
						adId 	 : 0,
						duration : -1,
						adType   : null,
						isClickable : false,
						creativeDuration : -1,
						creativeId : 0,
						podId : "",
						isVpaid : false
					};
					if(typeof adInstance === "object"){
						if(isDebug())log.debug("setAdMetadata: AdInstance available: "+adInstance);
						adSlot = adInstance.getSlot();					
						adMData.adId = adInstance.getAdId();
						adMData.podId = adSlot.getCustomId();
						adMData.creativeId = adInstance._creativeId;								
						adMData.duration = (btgFW.adInstanceCount > 1 ? -1 : adInstance.getActiveCreativeRendition().getDuration());
						adMData.adType = adSlot.getTimePositionClass();
						adMData.isClickable = isAdClickable;
						adMData.adCount = btgFW.adInstanceCount;
						adMData.currentAdIndex = currentAdIndex++;
						adMData.creativeDuration = adMData.duration; // - playHeadTime;
						adMData.isVpaid = isVpaid = adInstance.getActiveCreativeRendition().getCreativeApi() === constants.FW_VPAID_AD;
						if(adMData.adType === DISPLAY || adMData.adType === OVERLAY) return;
						isAdPlaying = true;
						fixVpaidCreative();
						btgFW.currentAdInstance = adInstance;
						if(isDebug())log.debug("setAdMetadata: adMData details. adId: "+adMData.adId+";  adType: "+adMData.adType+"; isClickable:"+adMData.isClickable+";  duration:"+adMData.duration+"; adCount:"+adMData.adCount+"; currentAdIndex:"+adMData.currentAdIndex+"; adMData.isVpaid:"+adMData.isVpaid);
						btgEvent.FW_AD_METADATA.dispatch(adMData);
						if(!hasAdStarted){
							hasAdStarted = true;
							btgEvent.FW_AD_PLAY.dispatch();
						}
					}else{
						if(isDebug())log.debug("setAdMetadata: AdInstance not available");
						adMData.duration = (btgFW.adInstanceCount > 1 || !btgFW.currentAdInstance ? -1 : btgFW.currentAdInstance.getActiveCreativeRendition().getDuration());
						btgEvent.FW_AD_METADATA.dispatch(adMData);
					}
				},
				/**
				* To check Ad impression for overlay and display.
				* @private
				* @member	BTG.Freewheel
				* @returns {Boolean}
				*/
				skipAdImpression = function(event){
					 var adType = event.adInstance.getSlot().getTimePositionClass();
				     return adType === DISPLAY || adType === OVERLAY;
				},
				/**
				* To set default values for FW request in both domestic and Intl players.
				* @private
				* @member	BTG.Freewheel
				* @returns {Void}
				*/
				setFWDefaultValues = function(){
					if(isIntl){
						if(config.freewheelNetworkId == constants.FW_NETWORK_ID_INTL_TEST){
							fwURL = constants.FW_URL_INT_TEST;
						}else{
							fwURL = constants.FW_URL_INT;
						}
						config.freewheelNetworkId = (config.freewheelNetworkId ? config.freewheelNetworkId : constants.FW_NETWORK_ID_INTL);
						config.freewheelProfileId = (config.freewheelProfileId ? config.freewheelProfileId : (config.freewheelNetworkId + ":" + constants.FW_PROFILE_ID));
						config.freewheelDuration  = 0;
					}else{
						config.freewheelNetworkId = (config.freewheelNetworkId ? config.freewheelNetworkId : constants.FW_NETWORK_ID);
						config.freewheelProfileId = (config.freewheelProfileId ? config.freewheelProfileId : (config.freewheelNetworkId + ":" + constants.FW_PROFILE_ID));
						config.freewheelDuration  = (isFullEpisode ? (constants.FW_DEF_CLIP_TIME * totalItem) : constants.FW_DEF_CLIP_TIME);
						defaultAssetId = 0;
					}
					if(config.freewheelUseActualDuration){
							if(isFullEpisode){
								config.freewheelDuration = (isValidDuration(metadata.playlistDuration) ? metadata.playlistDuration : (constants.FW_DEF_CLIP_TIME * totalItem));
							}else{
								config.freewheelDuration = (isValidDuration(metadata.duration) ? metadata.duration : constants.FW_DEF_CLIP_TIME);
							}
					}
				},
				/**
				* Checks if the duration provided is a positive number
				* @private
				* @member	BTG.Freewheel
				* @returns {Boolean}
				*/
				isValidDuration = function(duration){
					return (!isNaN(duration) && duration > 0);
				},
				/**
				* Contains duration for all content videos
				* @private
				* @member	BTG.Freewheel
				*/
				durations = [],
				/**
				* Set durations array field with actual content durations
				* @private
				* @member	BTG.Freewheel
				* @returns {Void}
				*/
				setActualDurations = function(){
					var items = metadata.playlistMetadataItems;
					for(var i = 0, len = items.length; i < len; i++){
						var d = items[i].duration;
						durations[i] = (isValidDuration(d) ? d : constants.FW_DEF_CLIP_TIME);
					}
				},
				/**
				* Contains container object for overlay Ad when it is playing
				* @private
				* @member	BTG.Freewheel
				*/
				overlayContainer = null,
				/**
				* Contains overlay iFrame object for overlay Ad when it is playing
				* @private
				* @member	BTG.Freewheel
				*/
				overlayNode = null,
				/**
				* Contains image object for play pause icon of player
				* @private
				* @member	BTG.Freewheel
				*/
				bigPlayPause = null,
				/**
				* Contains available height for overlay Ads.
				* @private
				* @member	BTG.Freewheel
				*/
				overlayAvailableHeight = 0,
				/**
				* Contains available width for overlay Ads.
				* @private
				* @member	BTG.Freewheel
				*/
				overlayAvailableWidth = 0,
				/**
				* Contains Ad custom slot id.
				* @private
				* @member	BTG.Freewheel
				*/
				slotCustomId = 0,
				/**
				* Sets the overlay position when overlay Ad starts to play 
				* @private
				* @member	BTG.Freewheel
				* @returns {Void}
				*/
				setOverlayPosition = function(){
					//Hack function to position overlay. This will be changed once we get officially supported FW API methods.
					overlayContainer = document.getElementById('_fw_ad_container_html_' + slotCustomId + '_');
					overlayNode = (overlayContainer ? overlayContainer.getElementsByTagName('iframe')[0] : null);
					bigPlayPause = document.getElementById('bigPlayPause');
					if(overlayContainer && overlayAvailableHeight){
						overlayContainer.style.height = overlayNode.style.height;
						overlayContainer.style.width = overlayNode.style.width;
						overlayNode.style.top = '0px';
						overlayNode.style.left = '0px';
						overlayContainer.style.left = (overlayAvailableWidth - overlayNode.offsetWidth)/2+"px";
						overlayContainer.style.top = overlayAvailableHeight - overlayNode.offsetHeight+"px";
						setTimeout(function(){
							if(bigPlayPause){
								bigPlayPause.style.visibility = 'hidden';
								bigPlayPause.style.display = '';
							}
						}, 50);
						setTimeout(function(){
							if(bigPlayPause){
								bigPlayPause.style.visibility = 'visible';
								bigPlayPause.style.display = 'none';
							}
						}, 55);
					}
				};
				
				
			return {
				/**
				* Constant containing the name of this subscriber
				* @final
				* @member	BTG.Freewheel
				*/
				NAME	  : NAME,
				/**
				* Contains currently playing Ad instance object from corresponding Ad slot
				* @member	BTG.Freewheel
				*/
				currentAdInstance : null,
				/**
				* Contains total Ad instance count of currently playing Ad slot. Default value is 1 
				* @member	BTG.Freewheel
				*/
				adInstanceCount : 1,
				/**
				* Maps event names to event listeners to perform ad operations
				* @member	BTG.Freewheel
				* @returns	{Object} containing event listeners
				*/
				eventList : function(){
					return {
						CONFIG     		: this.onConfig,
						METADATA   		: this.onMetadata,
						MEDIASTART		: this.onMediaStart,
						PLAY       		: this.onPlay,
						RESUMEPLAY 		: this.onResumePlay,
						PAUSE      		: this.onPause,					
						PLAYHEADUPDATE  : this.onPlayheadUpdate,
						FW_TIME_FOR_AD  : this.isItTimeForAnAd,
						PLAY_INDEX_CHANGED : this.onPlayIndexChanged,
						VMN_UUID        : this.onVmnUUID,
						DEMDEX_SEGMENT  : this.onDemdexSegment,
						FW_AD_CLICK		: this.onAdClick,
						FW_AD_RESIZE	: this.resizeAd,
						PLAYLIST_ENDED  : this.onPlaylistEnded,
						OVERLAY_RESIZE : this.onOverlayResize
					};
				},
				/**
				* Stores a config Object and sends messages to CODA to retrieve Demdex Frewheel Segment values and UUID
				* @member	BTG.Freewheel
				* @param	{Object} settings Required
				* @returns	{Void}
				*/			
				onConfig : function(settings){
					config = settings;
				},
				/**
				* Stores a metadata Object and sets freewheel configuration
				* @member	BTG.Freewheel
				* @param	{Object} data Required
				* @returns	{Void}
				*/
				onMetadata : function(data){
					metadata = data;
					isFullEpisode = metadata.isFullEpisode;
					loadConfig(metadata);
					if(!isInitialized && config.freewheelEnabled && data.isAd != true){
						this.initFreewheel();
					}
				},
				/**
				* Handler for media start event.
				* @member	BTG.Freewheel
				* @returns	{Void}
				*/
				onMediaStart : function(){
					if(metadata.guid){
						store(constants.FW_LAST_GUID_PLAYED, metadata.guid);
					}
					if(metadata.playlistURI)
						store(constants.FW_LAST_PLAYLIST_URI_PLAYED, metadata.playlistURI);
					
				},
				/**
				* Handler for onPlay event
				* @member	BTG.Freewheel
				* @param	{Number} playhead Required
				* @returns	{Void}
				*/
				onPlay : function(playhead){
					if(isDebug())log.debug('onPlay', playhead);
					if(isAdPlaying){
						fixVpaidCreative();
					}
				},
				/**
				* Handler for onResumePlay event
				* @member	BTG.Freewheel
				* @param	{Number} playhead Required
				* @returns	{Void}
				*/
				onResumePlay : function(playhead){
					if(isDebug())log.debug('onResumePlay', playhead);	
					if(isAdPlaying){
						fixVpaidCreative();
					}
				},
				/**
				* Handler for onPause event
				* @member	BTG.Freewheel
				* @param	{Number} playhead Required
				* @returns	{Void}
				*/
				onPause : function(playhead){
					if(isDebug())log.debug('onPause', playhead);
					if(isAdPlaying){
						fixVpaidCreative(true);
					}
				},
				/**
				* Handler for onPlayIndexChanged event
				* @member	BTG.Freewheel
				* @param	{Number} index Required
				* @returns	{Void}
				*/
				onPlayIndexChanged : function(index){
					if(isDebug())log.debug('onPlayIndexChanged index: ' + index+"   isFullEpisode:"+isFullEpisode);
					currentIndex = index;
					if(!isFullEpisode){
						isPlayIndexAdTime = true;
						updateFWParam(index);
						this.initFreewheel();			
					}
				},
				/**
				* Handler for onPlayheadUpdate event
				* @member	BTG.Freewheel
				* @param	{Number} playhead Required
				* @returns	{Void}
				*/
				onPlayheadUpdate : function(playhead){				
					if(!isAdPlaying){			
						var d= new Date(),
							current,
							actualPlayHeadTime = 0,
							diff = Math.round(d.getTime()/1000) - retrieve(constants.FW_LAST_PLAYTIME_CODE);
						if (diff === 1) {
							//Added to support Overlay. playedTime keeps track of actual content played time				 
							playedTime++;				
							current = parseInt(retrieve(constants.FW_VIDEO_PLAYED_TIME)) + 1;
							store(constants.FW_VIDEO_PLAYED_TIME, current );
						}
						store(constants.FW_LAST_PLAYTIME_CODE, Math.round(d.getTime()/1000) );			
						//Check for Overlays array existence and for overlay ad is not playing
						if(overlays.length>0 && !isOverlayPlaying){
							//log.finest("onPlayheadUpdate playedTime="+playedTime+"  overlays[0].getTimePosition()="+overlays[0].getTimePosition());
							//Check for the content played time with time position in the manifest for overlay play time
							if(config.freewheelUseActualDuration){
								for(var i = 0, len = durations.length; i < currentIndex; i++){
									actualPlayHeadTime += durations[i];
								}
							}else{
								actualPlayHeadTime = (currentIndex * constants.FW_DEF_CLIP_TIME);
							}
							actualPlayHeadTime += Math.floor(playedTime);
							if(actualPlayHeadTime >= overlays[0].getTimePosition()){
								if(isDebug())log.debug("onPlayheadUpdate playedTime="+playedTime+"  overlays[0].getTimePosition()="+overlays[0].getTimePosition() + "  actualPlayHeadTime:"+actualPlayHeadTime);
								playOverlay();
							}							
						}					
					}					
				},
				/**
				* Callback Demdex Freewheel Segment event method
				* @member	BTG.Freewheel
				* @param	{String} UUID Required
				* @returns	{Void}
				*/
				onDemdexSegment:function(demdexSegments){
					saveFwSegment(demdexSegments);
				},
				/**
				* Callback UUID event method
				* @member	BTG.Freewheel
				* @param	{String} UUID Required
				* @returns	{Void}
				*/
				onVmnUUID : function(uuid){
					saveUuid(uuid);
				},
				/**
				* Callback for playlist end event method
				* @member	BTG.Freewheel
				* @returns	{Void}
				*/
				onPlaylistEnded : function(){
					isInitialized = false;
				},
				/**
				* Initializes Freewheel with values and sends ad request
				* @member	BTG.Freewheel
				* @returns	{Void}
				*/
				initFreewheel : function(){
					if(isDebug())log.debug('initFreewheel');
					isInitialized = true;
					var qcDemoVals = "",
					fwSegments = getFWSegment(),
					ref = this,
					timePosition = 0,
					fwAdURL = fwURL.replace(/\{0\}/g,config.freewheelNetworkId).replace(/\{1\}/g,config.freewheelProfileId),
					div = document.createElement('div');
					div.setAttribute("width",1);
					div.setAttribute("height",1);
					div.setAttribute("id","fwAdClickDiv");
					document.body.appendChild(div);
					playedTime = 0;//Resetting the content played time to 0 whenever FW is initialized
					var videoPlayedTime = retrieve(constants.FW_VIDEO_PLAYED_TIME);		
					if(videoPlayedTime === null){
						store(constants.FW_VIDEO_PLAYED_TIME, 0);
					}	
					try{
						var theAdManager = new SDK.AdManager();
						theAdManager.setNetwork(config.freewheelNetworkId);
						theAdManager.setServer(fwAdURL);
				
						theContext   = theAdManager.newContext();
						theContext.registerVideoDisplayBase(config.freewheelDisplayBase);
						theContext.setProfile(config.freewheelProfileId);
						if(config.freewheelSiteSectionPathParsing){
							config.freewheelSiteSection = BTG.String.trimSlashes(config.freewheelSiteSection);
							theContext.addKeyValue(constants.FW_FSS_KEY, constants.FW_FSS_VALUE);
						}	
						theContext.setSiteSection(config.freewheelSiteSection,config.freewheelNetworkId);
						if(defaultAssetId){
							theContext.setVideoAsset(config.freewheelAssetId, parseInt(config.freewheelDuration,10) ,config.freewheelNetworkId,null,null,null,null,constants.FW_INTL_DEFAULT_ASSET_ID);
						}else{
							theContext.setVideoAsset(config.freewheelAssetId, parseInt(config.freewheelDuration,10) ,config.freewheelNetworkId);
						}					
						theContext.setParameter(SDK.PARAMETER_EXTENSION_CONTENT_VIDEO_ENABLED, false, SDK.PARAMETER_LEVEL_GLOBAL);
						theContext.setParameter(SDK.PARAMETER_EXTENSION_AD_CONTROL_CLICK_ELEMENT, "fwAdClickDiv", SDK.PARAMETER_LEVEL_GLOBAL);
						theContext.setParameter(SDK.PARAMETER_PLAY_MIDROLL_BY_CURRENT_VIDEO_ELEMENT, true, SDK.PARAMETER_LEVEL_GLOBAL);
						theContext.setParameter(SDK.PARAMETER_DISABLE_SAFARI_TRANSPORT, true, SDK.PARAMETER_LEVEL_GLOBAL);
						theContext.setParameter(SDK.PARAMETER_RENDERER_VIDEO_CLICK_DETECTION, false, SDK.PARAMETER_LEVEL_GLOBAL);
						theContext.addEventListener(SDK.EVENT_REQUEST_COMPLETE,function(event){
							ref.onRequestComplete(event);
						});					
						theContext.addEventListener(SDK.EVENT_SLOT_ENDED,function(event){
							ref.onSlotEnded(event);
						});
						theContext.addEventListener(SDK.EVENT_SLOT_STARTED,function(event){
							ref.onSlotStarted(event);				
						});
						theContext.addEventListener(SDK.EVENT_AD_IMPRESSION, function(event){
							ref.onAdInstancePlayEvent(event);
						});
						theContext.addEventListener(SDK.EVENT_AD_IMPRESSION_END, function(event){
							ref.onAdInstancePlayEvent(event);
						});
						
						if(fwSegments && fwSegments.length){
							for(var i=0, j=fwSegments.length; i<j; i++){
								var item = fwSegments[i].split('=');
								if(item[0] && item[1]){
									theContext.addKeyValue(item[0], item[1]);
								}
							}
							var vmnUUID = retrieve(constants.FW_VMN_UUID);
							if(vmnUUID){
								theContext.addKeyValue("customVisitorId", vmnUUID);
							}
						}
						
						if(metadata.hasPlayList){
							theContext.addKeyValue(constants.FW_PLAYLIST_KEY, metadata.playlistId);
						}
	
						if(isFullEpisode){ //BTGREPGEN-1891 //BTGREPGEN-2291
							setActualDurations();
							for(var i = 1; i < totalItem; i++){
								if(config.freewheelUseActualDuration){
									timePosition += durations[i];
								}else{
									timePosition = (i * constants.FW_DEF_CLIP_TIME);
								}
								theContext.addTemporalSlot("Midroll_" + i, SDK.ADUNIT_MIDROLL, timePosition);
							}
						}
						
						if(group === "kids"){
							if(isFullEpisode){
								var prevPlayListId = retrieve(constants.FW_LAST_PLAYLIST_URI_PLAYED);
								if(prevPlayListId && prevPlayListId!="undefined")
									theContext.addKeyValue(constants.FW_ARA_KEY, prevPlayListId);
							}else{
								var prevGUID = retrieve(constants.FW_LAST_GUID_PLAYED);
								if(prevGUID && prevGUID!="undefined")
									theContext.addKeyValue(constants.FW_ARA_KEY, prevGUID);
							}
						}
						if(metadata.bandwidth){
							if(isDebug())log.debug('metadata.bandwidth: '+metadata.bandwidth);
						}
						theContext.setParameter(SDK.PARAMETER_RENDERER_VIDEO_DISPLAY_CONTROLS_WHEN_PAUSE, false, SDK.PARAMETER_LEVEL_GLOBAL);
						SDK.setLogLevel(SDK.LOG_LEVEL_DEBUG);
						theContext.submitRequest(6);
						hasFWReq=true;		
					}catch(e){
						if(isDebug())log.debug("init() e:"+e);
					}
				},
				/**
				* Triggers when freewheel request complete and have the temporals ready to play
				* @member	BTG.Freewheel
				* @param	{Object} e Required
				* @returns	{Void}
				*/
				onRequestComplete:function( e ) {
					if(isDebug())log.debug("onRequestComplete: ");
					var fwTemporalSlots,
					slot,
					i,
					len;
					if (e.success){
						try{
							fwTemporalSlots = theContext.getTemporalSlots();
						}catch(err){
							if(isDebug())log.debug("Error happened in getting TemporalSlots theContext.getTemporalSlots(). Details: "+err);
							hasFWReq=false;
							//this.adFailed();
							return;
						}	
						events.FW_READY.dispatch();
						for (i=0, len = fwTemporalSlots.length; i<len; i++)
						{
							slot = fwTemporalSlots[i];
							switch (slot.getTimePositionClass())
							{
								case PREROLL:
									preRolls.push(slot);
									break;
								case MIDROLL:								
									midRolls.push(slot);
									break;
								case OVERLAY:
									overlays.push(slot);
									break;
								case POSTROLL:
									postRolls.push(slot);
									break;
							}
						}
						//This is to Sort Midrolls and Overlays based on the timePosition in manifest.
						if(isDebug())log.debug('Midroll count: '+midRolls.length);
						if(midRolls.length)
							midRolls.sort(slotSort);
						if(overlays.length)
							overlays.sort(slotSort);
						if(isDebug())log.debug("onRequestComplete fwTemporalSlots.length="+fwTemporalSlots.length+ "; preRolls.length=" + preRolls.length + "; midRolls.length="+midRolls.length+"; postRolls.length="+postRolls.length +"; overLays.length="+overlays.length);
						isFWReady=true;
						hasFWReq=false;
						if(playAdWait){
							if(isDebug())log.debug("onRequestComplete this.playAd()");
							if(isAdAvailable()){
								if(isDebug())log.debug('Playing Ad now...');
								playAd();
							}else{
								if(isDebug())log.debug('No Ad available...Moving to content');
								events.FW_AD_PLAYEND.dispatch();
							}
						}
					}else{
						if(isDebug())log.debug("event failure.");
						hasFWReq=false;
						events.FW_AD_PLAYEND.dispatch();
					}		
				},
				/**
				* Event handler for slot started event of an Ad Slot. This will be fired whenever an Ad slot has started to play.
				* @param	{Object} FW Ad manager event object
				* @member	BTG.Freewheel			
				*/
				onSlotStarted:function(e){
					var position = e.slot.getTimePositionClass(),
					adInstances  = e.slot.getAdInstances(),
					adInstance	 = null,
					bigPlayPause = null;
					currentAdIndex = constants.FW_INIT_AD_INDEX;
					slotCustomId = e.slot.getCustomId();
					if(position === OVERLAY){
						setTimeout(setOverlayPosition,300);
						for(var i = 0, len = adInstances.length; i < len; i++){
							var a = adInstances[i];
							if(a.getSlot().getCustomId() === slotCustomId){
								overlayEventData.overlayWidth = a.getActiveCreativeRendition().getWidth();
								overlayEventData.overlayHeight = a.getActiveCreativeRendition().getHeight();
								events.FW_AD_OVERLAY_START.dispatch(overlayEventData);
							}
						}
					}
					else if(position !== DISPLAY){
						if(isDebug())log.debug('onSlotStarted: adInstances.length= '+adInstances.length);
						this.adInstanceCount = adInstances.length;
						this.currentAdInstance = (adInstances.length > 0 ? adInstances[0] : null);
						setAdMetadata(); //Initial call for VMN player to initiate GUI bar for Ads
					}
				},
				/**
				* Triggers when Ad slot ends
				* @member	BTG.Freewheel
				* @param	{Object} e Required
				* @returns	{Void}
				*/
				onSlotEnded:function(e){
					var position = e.slot.getTimePositionClass();
					if(position === DISPLAY || position === OVERLAY){//Adding OVERLAY to this as we dont want to fire any event when Overlay Ad started.
						if(position === OVERLAY){
							events.FW_AD_OVERLAY_END.dispatch(overlayEventData);
							overlays.shift();
							overlayNode = null;
							overlayContainer = null;
							bigPlayPause = null;
							overlayAvailableHeight = 0;
							slotCustomId = 0;
							isOverlayPlaying = false;
						}
						return;		
					}				
					if(isDebug())log.debug('onSlotEnded');
					store(constants.FW_VIDEO_PLAYED_TIME,"1");
					slotToBePlayed = null;
					isAdPlaying = false;
					hasAdStarted = false;
					events.FW_AD_PLAYEND.dispatch();
				},	
				/**
				* To determine is time for an Ad to paly
				* @member	BTG.Freewheel
				* @param	{Object} freewheelVO Required
				* @returns	{Boolean}
				*/
				isItTimeForAnAd:function(freewheelVO){
					if(isDebug())log.debug('isItTimeForAnAd: freewheelVO.currentItem='+freewheelVO.currentItem+"  freewheelVO.hasContentEnd="+freewheelVO.hasContentEnd);
					if(!config.freewheelEnabled){
						events.FW_AD_PLAYEND.dispatch();
						return false;
					}					
					if(isFWReady){
						if(isDebug())log.debug('Checking for Ad now...');
						if(isAdAvailable(freewheelVO.currentItem, freewheelVO.hasContentEnd)){
							if(isDebug())log.debug('Playing Ad now...');
							playAd();
						}else{
							events.FW_AD_PLAYEND.dispatch();
						}					
					}else{
						playAdWait = true;
					}
				},
				/**
				* To resize Ads when player resizes
				* @member	BTG.Freewheel
				* @returns	{Void}
				*/
				resizeAd : function(freewheelVO){
					if(isDebug())log.debug('freewheelVO.x= '+freewheelVO.x+' freewheelVO.y='+freewheelVO+' freewheelVO.width='+freewheelVO.width+' freewheelVO.height='+freewheelVO.height);
					//ToDo once FW JAM provides any methods to resize overlay Ads for VAST/VPAID or Panache Ad.
				},
				/**
				* Ad click event handler. This will be fired whenever an Ad is clicked.
				* @member	BTG.Freewheel	
				* @returns {Void}
				*/
				onAdClick : function(){		
					if(isDebug())log.debug('onAdClick: currentAdInstance='+this.currentAdInstance);
					if(this.currentAdInstance){
						this.currentAdInstance.getRendererController().processEvent({
							name : SDK.EVENT_AD_CLICK
						});
					}
				},
				/**
				* Event handler to track Ad impressions.
				* @member	BTG.Freewheel	
				* @param	{event} event Required
				* @returns {Void}
				*/
				onAdInstancePlayEvent : function(event){
					 switch (event.type) {
					    case SDK.EVENT_AD_IMPRESSION:
					    	if(isDebug())log.debug("onAdInstancePlayEvent: EVENT_AD_IMPRESSION");				      
						  if(skipAdImpression(event)){
							  return;
						  }
					      if (event.adInstance.getEventCallbackUrls(SDK.EVENT_AD_CLICK, SDK.EVENT_TYPE_CLICK).length > 0){
					    	  if(isDebug())log.debug("onAdInstancePlayEvent: EVENT_AD_IMPRESSION. Clickable Ad.");
					    	  setAdMetadata(event.adInstance, true);
					    	  events.FW_AD_CREATIVE_PLAY.dispatch();
					      }else{
					    	  if(isDebug())log.debug("onAdInstancePlayEvent: EVENT_AD_IMPRESSION. Non Clickable Ad.");
					    	  setAdMetadata(event.adInstance, false);
					    	  events.FW_AD_CREATIVE_PLAY.dispatch();
					      }
					      break;
					    case SDK.EVENT_AD_IMPRESSION_END:
					    	if(skipAdImpression(event)){
					    		return;
					    	}
					    	if(isDebug())log.debug("onAdInstancePlayEvent: EVENT_AD_IMPRESSION_END.");
							isVpaid = false; //Make sure this flag is turned off when Ad gets over.
					    	events.FW_AD_CREATIVE_PLAYEND.dispatch();
					    	this.currentAdInstance = null;
					    	//ToDo -- To show and hide Learn more button when button ID is available
					      break;
					  }
				},
				/**
				* Handles any time overlay Ad to be resized.
				* @member	BTG.Freewheel	
				* @param	{Object} sizeObj Required
				* @returns {Void}
				*/
				onOverlayResize : function(sizeObj){
					overlayAvailableHeight = sizeObj.height;
					overlayAvailableWidth = sizeObj.width;
					if(overlayAvailableHeight && isNaN(overlayAvailableHeight)){
						overlayAvailableHeight = overlayAvailableHeight.replace(/px$/ig,'');
						overlayAvailableHeight = (isNaN(overlayAvailableHeight) ? null : overlayAvailableHeight);
					}
					if(overlayAvailableWidth && isNaN(overlayAvailableWidth)){
						overlayAvailableWidth = overlayAvailableWidth.replace(/px$/ig,'');
						overlayAvailableWidth = (isNaN(overlayAvailableWidth) ? null : overlayAvailableWidth);
					}
					if(overlayAvailableHeight && overlayAvailableWidth){
						setTimeout(setOverlayPosition,300);
					}
				}
			};
		};
	})(BTG);
	/**
	* Nielsen subscriber provides tracking of video content via GlanceGuide JS library.
	* @class	Nielsen
	*/
	(function(BTG){
		/**
		* Initializes an instance of Nielsen
		* @constructor
		* @member	BTG.Nielsen
		*/
		BTG.Nielsen = function(){
			/**
			* Constant containing the name of this subscriber
			* @final
			* @private
			* @member	BTG.Nielsen
			*/
			var	NAME = 'Nielsen',
			/**
			* A shortcut to NielsenVars collection
			* @private
			* @member	BTG.Nielsen
			*/
				vars = BTG.NielsenVars,
			/**
			* A log Object
			* @private
			* @member	BTG.Nielsen
			*/
				log = BTG.Log.getLogger(NAME),
			/**
			* A shortcut to BTG.Log.isDebug method
			* @private
			* @member	BTG.Nielsen
			* @returns	{Boolean}
			*/
				isDebug = BTG.Log.isDebug,
			/**
			* A config Object
			* @private
			* @member	BTG.Nielsen
			*/
				config   = null,
			/**
			* A metadata Object
			* @private
			* @member	BTG.Nielsen
			*/
				metadata = null,
			/**
			* Number to track playhead with the default value to 0
			* @private
			* @member	BTG.Nielsen
			*/
				playhead = 0,
			/**
			* Number to track seek value with the default value to 0
			* @private
			* @member	BTG.Nielsen
			*/
				seekPH   = 0,
			/**
			* Number to track play index with the default value to 0
			* @private
			* @member	BTG.Nielsen
			*/
				pIndex   = 0,
			/**
			* A boolean for dertemining the playing content is Ad 
			* @private
			* @member	BTG.Nielsen
			*/
				isAd     = false,
			/**
			* A boolean for determining the content is playing
			* @private
			* @member	BTG.Nielsen
			*/
				playing  = false,
			/**
			* A boolean for determining the content is seeking
			* @private
			* @member	BTG.Nielsen
			*/
				seeking  = false,
			/**
			* A boolean for determining to play the content
			* @private
			* @member	BTG.Nielsen
			*/
				hasPlay  = false,
			/**
			* An Object for storing media metadata
			* @private
			* @member	BTG.Nielsen
			*/
				mediaVO  = {},
			/**
			* A Object for storing previous items metadata
			* @private
			* @member	BTG.Nielsen
			*/
				prevVO   = {},
			/**
			* An Object for storing viewed items metadata
			* @private
			* @member	BTG.Nielsen
			*/
				viewed   = {},
			/**
			* An ad metadata Object
			* @private
			* @member	BTG.Nielsen
			*/
				adMetadata = {},
			/**
			* Stores and instance of the GlanceGuide object
			* @private
			* @member	BTG.Nielsen
			*/
				gg = {},
			/**
			* Saves an item vo in viewed object using its id.
			* @private
			* @member	BTG.Nielsen
			* @returns	{Void}
			*/
				saveToHistory = function(vo){
					if(isAd)vo.id = vo.title;
					vo.isAd = isAd;
					viewed[vo.id] = vo;
					prevVO = vo;
				},
			/**
			* Clears viewed object by setting it as empty
			* @private
			* @member	BTG.Nielsen
			* @returns	{Void}
			*/
				resetHistory = function(d){
					viewed = {};
				},
			/**
			* Determines is the current item should be marked as reportable
			* @private
			* @member	BTG.Nielsen
			* @returns	{Boolean}
			*/
				isReportable = function(){
					return !viewed[mediaVO.id] || prevVO.isAd ? true : false;
				},
			/**
			* Issues a GlanceGuide STOP event
			* @private
			* @member	BTG.Nielsen
			* @returns	{Void}
			*/
				trackPlayStop = function(playhead){
					if(hasPlay){
						if(seeking)playhead=seekPH;
						playing = false;
						seeking = false;
						gg.ggPM(vars.STOP,Math.floor(playhead));
					}
				},
			/**
			* Issues a GlanceGuide LOAD and PLAY events
			* @private
			* @member	BTG.Nielsen
			* @returns	{Void}
			*/
				trackOnPlay = function(){
					if(isDebug())log.debug("trackOnPlay playhead:"+playhead+" isAd:"+isAd);
					if(playing)trackPlayStop(playhead);
					if(isReportable()){
						if(isDebug())log.debug("trackOnPlay", mediaVO);
						gg.ggPM(
							vars.LOAD,
							mediaVO.id,
							mediaVO.vidtype,
							mediaVO.xml,
							pIndex
						);
						gg.ggPM(
							vars.PLAY,
							playhead
						);
						playing = true;
						hasPlay = true;
						saveToHistory(mediaVO);
					}
				},
			/**
			* Assembles a value object from the metadata
			* @private
			* @member	BTG.Nielsen
			* @returns	{Object}
			*/
			getMediaVO = function(){
				var m = metadata;
				var d = {};
				if(isAd){
					if(isDebug())log.debug("getMediaVO says this item is an ad.");
					var adData  = adMetadata;
					var adTitle = adData.adId ? adData.adId : vars.VIDEOAD_TITLE;
					d={
						id       : adTitle,
						uurl     : adTitle,
						category : adTitle,
						length   : Math.floor(adData.duration),
						vidtype  : pIndex > 0 ? vars.MIDROLL_VIDEO : vars.PREROLL_VIDEO
					};
				}else{
					d={
						id        : m.videoId,
						vidtype   : vars.CONTENT_VIDEO,
						itemIndex : pIndex,
						censuscategory : m.franchise
					};
					if(m.hasPlayList){
						d.uurl = m.playlistTitle;
						d.category = m.franchise;
						//d.censuscategory = m.franchise;
					}else{
						d.uurl = m.title;
						d.category = vars.CLIP_TITLE;
						//d.censuscategory = m.franchise;
					}
					d.length = Math.floor(m.duration);
				}
				if(d.uurl) d.uurl = d.uurl.replace(/\s/g,"");
				d.title = d.uurl;
				d.xml = "";
				for(var i in d){
					if(d.hasOwnProperty(i) && d[i] && !(i=="itemIndex"||i=="videoId")){
						d.xml+="<"+i+">"+d[i]+"</"+i+">";
					}
				}
				if(isDebug())log.debug("Nielsen.getMediaVO", d);
				return d;
			};
			return {
			/**
			* Constant containing the name of this subscriber
			* @final
			* @member	BTG.Nielsen
			*/
				NAME : NAME,
			/**
			* Method that maps event names to event listeners
			* @member	BTG.Nielsen
			* @returns	{Object} containing event listeners
			*/
				eventList : function(){
					return {
						CONFIG     : this.onConfig,
						METADATA   : this.onMetadata,
						MEDIASTART : this.onMediaStart,
						PLAY       : this.onPlay,
						FW_AD_PLAY : this.onAdPlay,
						RESUMEPLAY : this.onResumePlay,
						PAUSE      : this.onPause,
						SEEKING    : this.onSeeking,
						PLAYEND    : this.onPlayEnd,
						PLAYLIST_ENDED : this.onPlaylistEnded,
						PLAYHEADUPDATE : this.onPlayheadUpdate,
						FW_AD_METADATA : this.onFWAdMetadata
					};
				},
			/**
			* Setter for config property
			* @member	BTG.Nielsen
			* @param	{Object} settings Required
			* @returns	{Void}
			*/
				onConfig : function(settings){
					config = settings;
					gg = new BTG.gg();
					var ggParams={
						clientid : config.nielsenClientID,
						vcid     : config.nielsenVideoCensusID,
						prod     : vars.CLIENT_PROD,
						sfcode   : "us"
					};
					gg.ggInitialize(ggParams,0,false);
				},
			/**
			* Setter for metadata property
			* @member	BTG.Nielsen
			* @param	{Object} data Required
			* @returns	{Void}
			*/
				onMetadata : function(data){
					metadata = data;
				},
			/**
			* Handler onMediaStart. Sets hasPlay property
			* @member	BTG.Nielsen
			* @returns	{Void}
			*/
				onMediaStart : function(){
					if(isDebug())log.debug("onMediaStart");
					hasPlay = false;
				},
			/**
			* Handler for onPlay event
			* @member	BTG.Nielsen
			* @param	{Number} playhead Required
			* @returns	{Void}
			*/
				onPlay : function(playhead){
					if(isDebug())log.debug("onPlay");
					if(!metadata.reportable || metadata.isAd)return;
					isAd = metadata.isAd  = false;
					pIndex   = metadata.itemIndex;
					mediaVO  = getMediaVO();
					trackOnPlay();
				},
			/**
			* Handler for onAdPlay event for Ads
			* @member	BTG.Nielsen
			* @returns	{Void}
			*/
				onAdPlay : function(){
					isAd = metadata.isAd  = true;
					pIndex   = metadata.itemIndex;
					mediaVO  = getMediaVO();
					trackOnPlay();
				},
			/**
			* Handler for onPause event
			* @member	BTG.Nielsen
			* @param	{Number} playhead Required
			* @returns	{Void}
			*/
				onPause : function(playhead){
					if(hasPlay){
						gg.ggPM(vars.PAUSE, playhead);
					}
				},
			/**
			* Handler for onSeeking event
			* @member	BTG.Nielsen
			* @param	{Number} playhead Required
			* @returns	{Void}
			*/
				onSeeking : function(playhead){
					if(hasPlay){
						seeking = true;
						seekPH = playhead;
					}
				},
			/**
			* Handler for onResumePlay event
			* @member	BTG.Nielsen
			* @param	{Object} data Required
			* @returns	{Void}
			*/
				onResumePlay : function(data){
					if(hasPlay){
						if(seeking){
							seeking = false;
							gg.ggPM(vars.SEEK, seekPH, data.playhead);
						}else{
							gg.ggPM(vars.PLAY, data.playhead);
						}
					}
				},
			/**
			* Handler for onPlaylistEnded event
			* @member	BTG.Nielsen
			* @param	{Number} playhead Required
			* @returns	{Void}
			*/
				onPlaylistEnded : function(){
					resetHistory();
				},
			/**
			* Handler for onPlayEnd event
			* @member	BTG.Nielsen
			* @param	{Number} playhead Required
			* @returns	{Void}
			*/
				onPlayEnd : function(playhead){
					if(hasPlay){
						trackPlayStop(playhead);
						hasPlay = false;
					}
				},
			/**
			* Handler for onPlayheadUpdate event
			* @member	BTG.Nielsen
			* @param	{Number} playhead Required
			* @returns	{Void}
			*/
				onPlayheadUpdate : function(playhead){
					playhead = playhead;
				},
			/**
			* Handler for onFWAdMetadata event
			* @member	BTG.Nielsen
			* @param	{Object} data Required
			* @returns	{Void}
			*/
				onFWAdMetadata : function(data){
					if(isDebug())log.debug("onFWAdMetadata adId: " + data.adId);
					adMetadata = data;
				}
			}
		};
	})(BTG);
	/**
	* PostMessage subscriber invokes messages to postMessage via MessageUtil
	* @class	PostMessage
	*/
	(function(BTG){
		BTG.PostMessage = function(){
			/**
			* Shortcut to MessageUtil.postMessage
			* @private
			* @member	BTG.PostMessage
			*/
			var	post = BTG.MessageUtil.postMessage,
	
			/**
			* Shortcut to BTG.MessageVars
			* @private
			* @member	BTG.PostMessage
			*/
				vars = BTG.MessageVars;
	
			return {
			/**
			* Constant containing the name of this subscriber
			* @final
			* @member	BTG.PostMessage
			*/
				NAME : 'PostMessage',
	
			/**
			* Posts messages via MessageUtil. onRegister is invoked when a subscriber is registered.
			* @member	BTG.PostMessage
			* @returns	{Void}
			*/
				onRegister : function(){
					post(vars.VMN_UUID);
					post(vars.DEMDEX_SEGMENT);
					post(vars.OMT_TRACKING_SERVER);
					post(vars.USER_SEGMENT);
				}
			};
		};
	})(BTG);
	/**
	* Register subscribers for all the reporting vendors enabled in configuration settings
	* @class	BTG.Registrar
	*/
	(function(BTG){
		BTG.Registrar = function(){
			try{
				BTG.JSInjector.loadScript(BTG.AriaVars.BENTO_MODULES_URL);
	
			}catch(e){
			}
	
			return {
				/**
				* Constant containing the name of this subscriber
				* @final
				* @private
				* @member	BTG.Registrar
				*/
				NAME : 'Registrar',
				/**
				* Method that maps event names to event listeners
				* @member	BTG.Registrar
				* @returns	{Object} containing event listeners
				*/
				eventList : function(){
					return {
						CONFIG : this.onConfig
					};
				},
				/**
				* Registers subscribers based on config settings
				* @member	BTG.Registrar
				* @param	{Object} settings Required
				* @returns	{Void}
				*/
				onConfig : function(config){
					var registerSubscriber = BTG.Bento.registerSubscriber;
	
					registerSubscriber(new BTG.Freewheel);
					registerSubscriber(new BTG.Beacons);
	
					if(config.omnitureEnabled && config.omnitureSuite){
						registerSubscriber(new BTG.AppMeasure);
					}
					if(config.nielsenEnabled){
						registerSubscriber(new BTG.Nielsen);
					}
					if(config.comScoreEnabled){
						registerSubscriber(new BTG.Comscore);
						registerSubscriber(new BTG.StreamSense);
					}
					if (config.demdexEnabled) {
						registerSubscriber(new BTG.Demdex);
					}
	
					registerSubscriber(new BTG.PostMessage);
					registerSubscriber(new BTG.DataJanitor);
	
					var	event = BTG.Events.CONFIG;
					event.remove(this.onConfig);
					event.dispatch(config);
	
					this.onConfig = function(){};
				}
			};
		};
	})(BTG);
	(function(BTG){
		BTG.StreamSense = function(){
			
			var	NAME     = 'StreamSense',
				logger   = BTG.Log.getLogger(NAME),
				isDebug  = BTG.Log.isDebug,
				vars     = BTG.StreamSenseVars,
				config   = {}, 
				metadata = {},
				adData   = {},
				playhead = 0,
				currentItemIndex = 0,
				videoTitle = '',
				isFirstItem = true,
				itemsViewed = {},
				lastPlayheadSent = 0,
	
				streamSense = {},
				streamEvent = {},
				streamTrack = function(e, p){},
				streamVO    = BTG.StreamSenseVO.fromMetadata,
	
				adTracking  = false,
				isPlaying   = false,
				isAdPlaying = false,
				itemsPlayed = 1,
	
				getPlayhead = function(){
					return Math.floor(playhead * 1000);
				},
				
				hasStreamSense  = false,
				
				isStreamSenseAvailable = false,
	
				initStreamSense = function(){
					isStreamSenseAvailable = (typeof ns_ === 'object' && typeof ns_.StreamSense === 'function');
					if(!hasStreamSense && isStreamSenseAvailable){
						//Initialize StreamSense with base url and parameters
						streamSense = new ns_.StreamSense({}, vars.BASE_URL + '?' + BTG.Object.toString(
							{
								C1: vars.TYPEID,
								C2: config.comScorePrimaryID
							}
						));
	
						//StreamSense player events
						streamEvent = ns_.StreamSense.PlayerEvents;
	
						//Function shortcut to track player events
						streamTrack = function(e, p){
							streamSense.notify(e, {}, lastPlayheadSent = (p ? p : getPlayhead()));
						};
	
						hasStreamSense = true;
					}
				};
				 
			return { //!(typeof ns_ === 'object' && typeof ns_.StreamSense === 'function') ? {} :
				NAME : NAME,
	
				eventList : function(){
					return {
						CONFIG     : this.onConfig,
						METADATA   : this.onMetadata,
						PLAY       : this.onPlay,
						RESUMEPLAY : this.onResumePlay,
						PAUSE      : this.onPause,
						SEEKING    : this.onSeeking,
						BUFFERING  : this.onBuffering,
						PLAYEND    : this.onPlayEnd,
						PLAYHEADUPDATE : this.onPlayheadUpdate,
						PLAYLIST_ENDED : this.onPlaylistEnded,
						FW_AD_METADATA : this.onFWAdMetadata,
						FW_AD_CREATIVE_PLAY    : this.onAdPlayStart,
						FW_AD_CREATIVE_PLAYEND : this.onAdPlayEnd,
						FW_AD_PLAYEND : this.onAdSlotPlayEnd
					};
				},
	
				onConfig : function(settings){
					config = settings;
	
					//Compensate for camel case inconsistencies in the config
					adTracking = config.comScoreAdTracking || config.comscoreAdTracking;
				},
	
				onMetadata : function(data){
					metadata = data;
				},
	
				onPlay : function(playhead){
					if(!metadata.reportable || metadata.isAd){
						if(isDebug())logger.debug("onPlay reportable is false or isAd is true");
						return;
					}
					if(!isPlaying){
						if(isDebug())logger.debug("onPlay");
						currentItemIndex = metadata.itemIndex;
						initStreamSense();
	
						//Determine clip type id
						if(metadata.isLive){
							metadata.clipTypeId = vars.CLIP_LIVE;
	
						}else if(metadata.itemDuration >= vars.MAX_DURATION){
							metadata.clipTypeId = vars.CLIP_LONG;
	
						}else{
							metadata.clipTypeId = vars.CLIP_SHORT;
						}
	
						if(metadata.hasPlayList && isFirstItem){						
							streamSense.setPlaylist();
						}
	
						//Set index to identify this segment as part of the content
						if(itemsViewed.hasOwnProperty(metadata.videoId)){
							metadata.partIndex = itemsViewed[metadata.videoId];
						}else{
							metadata.partIndex = itemsPlayed++;
							itemsViewed[metadata.videoId] = metadata.partIndex;
						}
						streamSense.setClip(streamVO(metadata));
						setTimeout(function(){
							streamTrack(streamEvent.PLAY);
							}, 250);
						
						isPlaying = true;
						isFirstItem = false;
						videoTitle   = metadata.videoTitle;					
					}
				},
	
				onResumePlay : function(data){
					if(isDebug())logger.debug("onResumePlay");
					streamTrack(streamEvent.PLAY);
				},
	
				onPause : function(playhead){
					if((isPlaying || isAdPlaying) && playhead !== 0){
						streamTrack(streamEvent.PAUSE);
						//isPlaying = false;
					}
				},
				onSeeking : function(playhead){
					if(isPlaying){
						streamTrack(streamEvent.PAUSE);
					}
				},
	
				onBuffering : function(playhead){
					if(isPlaying || isAdPlaying){
						streamTrack(streamEvent.BUFFER);
					}
				},
	
				onPlayEnd : function(playhead){
					if(isDebug())logger.debug("onPlayEnd");
					streamTrack(streamEvent.END);
					isPlaying = false;
				},
	
				onPlayheadUpdate : function(position){								
					playhead = position;
				},
				
				onPlaylistEnded : function(){
					isFirstItem = true;//Seeting this to true so replay can use this flag
				},
				
				onFWAdPlayhead : function(position){
					adPlayhead = position;
				},
	
				onFWAdMetadata : function(data){
					adData = data;
				},
	
				onAdPlayStart : function(){
					if(isDebug())logger.debug("onAdPlayStart ad starts to play");
					if(adTracking){
						initStreamSense();
	
						//Fix playhead to 0 for Ad Play
						playhead = 0;
	
						metadata.adDuration = adData.duration;
						metadata.adId = adData.adId;
						metadata.isAd = true;
	
						//Determine clip type id
						if(metadata.isLiveEvent){
							metadata.clipTypeId = vars.AD_LIVE;
						}else{
							//Create key: AD_PREROLL, AD_MIDROLL, AD_POSTROLL
							var key = "AD_" + adData.adType.toUpperCase();
	
							metadata.clipTypeId = vars[key] ? vars[key] : vars.AD_OTHER;
						}
	
						//Set index to identify this segment as part of the content
						metadata.partIndex = itemsPlayed;
						streamTrack(streamEvent.END, lastPlayheadSent);//Added to handle Comscore SS player mode issue.
						streamSense.setClip(streamVO(metadata));
						streamTrack(streamEvent.PLAY);
	
						isAdPlaying = true;
						itemsPlayed++;
					}
				},
	
				onAdPlayEnd : function(playhead){
					if(isDebug())logger.debug("onAdPlayEnd ad play ends");
					if(adTracking){
						streamTrack(streamEvent.END);
					}
				},
				onAdSlotPlayEnd : function(){
					if(isAdPlaying){
						isPlaying = false;
					}
					isAdPlaying = false;
				}
			};
		};
	})(BTG);
	/**
	* Events is a collection of Event objects
	* @class	BTG.Events
	*/
	(function(BTG){
		BTG.Events = {
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			CONFIG         : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			MEDIASTART     : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			METADATA       : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			PLAY           : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			PLAYHEADUPDATE : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			PAUSE          : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			SEEKING        : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			BUFFERING      : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			RESUMEPLAY     : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			PLAYEND        : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			PLAY_INDEX_CHANGED : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			FULLSCREEN     : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			PLAYLIST_ENDED : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			FW_TIME_FOR_AD : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			FW_READY       : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			FW_SLOTS_READY : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			FW_AD_PLAY     : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			FW_AD_PLAYEND  : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			FW_AD_CREATIVE_PLAY     : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			FW_AD_CREATIVE_PLAYEND  : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			FW_AD_METADATA : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			FW_AD_VOLUME   : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			FW_AD_UNPAUSE  : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			FW_AD_PAUSE    : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			FW_AD_CLICK    : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			FW_AD_PLAYHEAD : new BTG.Event(),		
			/**
			 * Fires on an Overlay Ad starts.
			 * @final
			 * @member	Events
			 */
			FW_AD_OVERLAY_START : new BTG.Event(),
			/**
			 * Fires on an Overlay Ad ends.
			 * @final
			 * @member	Events
			 */
			FW_AD_OVERLAY_END : new BTG.Event(),
			/**
			 * Fires on an Ad resizes.
			 * @final
			 * @member	Events
			 */
			FW_AD_RESIZE	:	new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			OMT_START      : new BTG.Event(),
			/**
			* Instance of BTG.Event
			* @final
			* @member	Events
			*/
			OMT_END        : new BTG.Event(),
			/**
			* Event fired when VMN UUID is retrieved
			* @final
			* @member	Events
			*/
			VMN_UUID       : new BTG.Event(),
			/**
			* Event fired when Demdex Freeweheel Segment is retrieved
			* @final
			* @member	Events
			*/
			DEMDEX_SEGMENT :new BTG.Event(),
			/**
			* Event fired when User Segment is retrieved
			* @final
			* @member	Events
			*/
			USER_SEGMENT :new BTG.Event(),
			/**
			* Event fired when Overlay resize should happen
			* @final
			* @member	Events
			*/
			OVERLAY_RESIZE : new BTG.Event(),
			/**
			* Event fired when Omniture tracking server from CODA config is retrieved
			* @final
			* @member	Events
			*/
			OMT_TRACKING_SERVER :new BTG.Event(),
			/**
			* Event fired when visitor id from app is retrieved
			* @final
			* @member	Events
			*/
			OMT_VISITOR_ID :new BTG.Event()
		};
	})(BTG);
	/**
	* Bento is the public facing Object that exposes API functionality
	* @class	Bento
	*/
	(function(BTG){
		BTG.Bento = (function(){
			/**
			* Constant containing the name of this Object
			* @final
			* @private
			* @member	BTG.Bento
			*/
			var	NAME = 'Bento',
				/**
				 * The value of BENTO Events
				 * @member	BTG.Bento
				 */
				event = BTG.Events,
				/**
				* The value of BENTO Logger
				* @member	BTG.Bento
				*/	
				log = BTG.Log.getLogger(NAME),
				/**
				* Boolean value for BENTO Debug
				* @member	BTG.Bento
				*/	
				isDebug = BTG.Log.isDebug,
				/**
				* The value of BENTO subscribers
				* @member	BTG.Bento
				*/	
				subscribers = {},
				/**
				* Boolean value for BENTO playing
				* @member	BTG.Bento
				*/	
				playing = false,
				/**
				* Boolean value for BENTO buffering
				* @member	BTG.Bento
				*/	
				buffering = false;
			return {
				/**
				* Alias for private register() method
				* @member	BTG.Bento			
				*/
				registerSubscriber : function(subscriber){
					if(typeof subscriber.NAME === 'string' && !subscribers[subscriber.NAME]){
						if(isDebug())log.debug('registerSubscriber ' + subscriber.NAME);
						if(typeof subscriber.eventList === 'function'){
							var listeners = subscriber.eventList();
							if(typeof listeners === 'object'){
								for(var i in listeners){
									if(listeners.hasOwnProperty(i) && typeof event[i] === 'object'){
										event[i].add(listeners[i], subscriber);
									}
								}
							}
						}
						if(typeof subscriber.onRegister === 'function'){
							subscriber.onRegister();
						}
						subscribers[subscriber.NAME] = subscriber;
					}
				},
				removeSubscriber : function(subscriber){
					if(typeof subscriber.NAME === 'string' && subscribers[subscriber.NAME]){
						if(isDebug())log.debug('removeSubscriber ' + subscriber.NAME);
						delete subscribers[subscriber.NAME];
						if(typeof subscriber.onRemove === 'function'){
							subscriber.onRemove();
						}
					}
				},
				/**
				* Retrieves a subscriber from the subscribers array collection
				* @member	BTG.Bento	
				* @returns	{Object}		
				*/
				retrieveSubscriber : function(name){
					return subscribers[name];
				},
				/**
				* An instance of Timer object
				* @member	BTG.Bento			
				*/
				bufferingTimer : BTG.TimerUtil.getTimer(NAME),
				/**
				* Public method to be invoked whenever on config
				* @member	BTG.Bento			
				*/
				onConfig : function(config){
					if(typeof config === 'object'){
						if(isDebug())log.debug('onConfig', config);
						event.CONFIG.dispatch(config);
					}
				},
				/**
				* Public method to be invoked whenever on Metadata
				* @member	BTG.Bento			
				*/
				onMetadata : function(metadata){
					if(typeof metadata === 'object'){
						if(isDebug())log.debug('onMetadata', metadata);
						event.METADATA.dispatch(metadata);
					}
				},
				/**
				* Public method to be invoked whenever on media start
				* @member	BTG.Bento			
				*/
				onMediaStart : function(){
					if(isDebug())log.debug('onMediaStart');
					event.MEDIASTART.dispatch();
				},
				/**
				* Public method to be invoked whenever on play
				* @member	BTG.Bento			
				*/
				onPlay : function(playhead){
					if(typeof playhead !== undefined){
						if(isDebug())log.debug('onPlay');
						playing = true;
						event.PLAY.dispatch(playhead);
					}
				},
				/**
				* Public method to be invoked whenever on play head update
				* @member	BTG.Bento			
				*/
				onPlayheadUpdate : function(playhead){
					if(typeof playhead !== undefined && playing){
					//	if(isDebug())log.debug('onPlayheadUpdate playhead: ' + playhead);
						event.PLAYHEADUPDATE.dispatch(playhead);
					}
				},
				/**
				* Public method to be invoked whenever on pause
				* @member	BTG.Bento			
				*/
				onPause : function(playhead){
					if(typeof playhead !== undefined){
						if(isDebug())log.debug('onPause playhead: ' + playhead);
						event.PAUSE.dispatch(playhead);
					}
				},
				/**
				* Public method to be invoked whenever on seeking
				* @member	BTG.Bento			
				*/
				onSeeking : function(playhead){
					if(typeof playhead !== undefined){
						if(isDebug())log.debug('onSeeking playhead: ' + playhead);
						event.SEEKING.dispatch(playhead);
					}
				},
				/**
				* Public method to be invoked whenever on buffering
				* @member	BTG.Bento			
				*/
				onBuffering : function(playhead){
					if(typeof playhead !== undefined){
						if(this.bufferingTimer.running()){
							this.bufferingTimer.stop();
							this.bufferingTimer.reset();
						}
						this.bufferingTimer.start();
						buffering = true;
						event.BUFFERING.dispatch(playhead);
					}
				},
				/**
				* Public method to be invoked whenever on media is resumed
				* @member	BTG.Bento			
				*/
				onResumePlay: function(playhead){
					if(typeof playhead !== undefined && playing){
						if(isDebug())log.debug('onResumePlay playhead: ' + playhead);
						var elapsed = 0;
						if(buffering){
							buffering = false;
							elapsed   = this.getBufferingTime();
						}
						event.RESUMEPLAY.dispatch({
							playhead : playhead,
							elapsed  : elapsed
						});
					}
				},
				/**
				* Public method to be invoked whenever on end of the media play
				* @member	BTG.Bento			
				*/
				onPlayEnd : function(playhead){
					if(typeof playhead !== undefined){
						if(isDebug())log.debug('onPlayEnd playhead: ' + playhead);
						event.PLAYEND.dispatch(playhead);
					}
				},
				/**
				* Public method to be invoked whenever video is fullscreened
				* @member	BTG.Bento			
				*/
				onFullScreen : function(){
					event.FULLSCREEN.dispatch();
				},
				/**
				* Public method to be invoked whenever video is resized to adjust Ad size
				* @member	BTG.Bento			
				*/
				resizeAd : function(freewheelVO){
					if(typeof freewheelVO === 'object'){
						event.FW_AD_RESIZE.dispatch(freewheelVO);
					}
				},
				/**
				* Public method to be invoked whenever on getting buffering time
				* @member	BTG.Bento			
				*/
				getBufferingTime : function(){
					if(this.bufferingTimer.running()){
						this.bufferingTimer.stop();
					}
					var elapsed = this.bufferingTimer.currentCount() / 1000;
					this.bufferingTimer.reset();
					return elapsed;
				},
				/**
				* Public method to be invoked whenever the play list gets ended
				* @member	BTG.Bento			
				*/
				onPlayListEnded : function(){
					event.PLAYLIST_ENDED.dispatch();
				},
				/**
				* Public method to be invoked whenever there is a tiem for AD
				* @member	BTG.Bento			
				*/
				isItTimeForAnAd : function(freewheelVO){
					if(typeof freewheelVO === 'object'){
						event.FW_TIME_FOR_AD.dispatch(freewheelVO);
					}
				},
				/**
				* Public method to be invoked whenever on volume changed
				* @member	BTG.Bento			
				*/
				onVolumeChange : function(level){
					if(typeof level !== undefined){
						event.FW_AD_VOLUME.dispatch(level);
					}
				},
				/**
				* Public method to be invoked whenever on play index is changed
				* @member	BTG.Bento			
				*/
				onPlayIndexChanged : function(index){
					if(isDebug())log.debug('onPlayIndexChanged index: ' + index);
					event.PLAY_INDEX_CHANGED.dispatch(index);
				},
				/**
				* Public method to be invoked whenever an Ad is clicked
				* @member	BTG.Bento			
				*/
				onAdClick : function(){
					event.FW_AD_CLICK.dispatch();
				},
				/**
				* Public method to be invoked whenever an Overlay Ad needs to be resized
				* @member	BTG.Bento			
				*/
				onOverlayResize : function(sizeObj){
					event.OVERLAY_RESIZE.dispatch(sizeObj);
				},
				/**
				* Initializer for Bento singleton
				* @member	BTG.Bento
				* @returns	{Void}
				*/
				initialize : function(){
					if(isDebug())log.debug('Bento Starts Up');
					this.registerSubscriber(new BTG.Registrar);
					return this;
				}
			};
		})().initialize();
	})(BTG);
	(function(BTG){BTG.version='1.10.1';})(BTG);
	(function(BTG){BTG.version='1.10.1';})(BTG);
	// =========BTG BENTO END============
	// =========PJS BENTO START============
	/* exported Bento */
	/* global _, BTG, Util*/
	function Bento() {
		this.initialize.apply(this, arguments);
	}
	Bento.prototype = {
		logger: new Util.Logger("pjs-reporting"),
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
	// =========PJS BENTO END============
	Reporting.Bento = Bento;
	return Reporting;
}));