(function () {
	'use strict';
	
	angular
		.module('ext.sankey.pageSankey')
		.factory('initUtils', initUtils);

	initUtils.$inject = ['CONTENT', 'counterFactory', '$log', 'extDefine'];

	/**
	 * Description
	 * @method initUtils
	 * @param {} CONTENT
	 * @param {} counterFactory
	 * @param {} $log
	 * @param {} extDefine
	 * @return utils
	 */
	function initUtils(CONTENT, counterFactory, $log, extDefine) {
		var utils = {};
		initContent();

		utils.initOptions = initOptions;
		utils.initContentOptions = initContentOptions;
		utils.initFilters = initFilters;
		utils.initSankeyData = initSankeyData;
		utils.initHistogramData = initHistogramData;
		utils.initCardsOptions = initCardsOptions;
		utils.updateByDefault = updateByDefault;

		return utils;

		/**
		 * Description
		 * @method initContent
		 * @return 
		 */
		function initContent() {
			utils.content = {};

			for (var key in CONTENT) {
				if (CONTENT.hasOwnProperty(key)) {
					utils.content[key] = CONTENT[key];
				}
			}
		};

		/**
		 * Description
		 * @method initOptions
		 * @param {} contentOptions
		 * @param {} cardsOptions
		 * @param {} filters
		 * @param {} sankeyData
		 * @param {} histogramData
		 * @return 
		 */
		function initOptions(contentOptions, cardsOptions, filters, sankeyData, histogramData) {
			contentOptions = initContentOptions(contentOptions);
			cardsOptions = initCardsOptions(cardsOptions);
			filters = initFilters(filters);
			sankeyData = initSankeyData(sankeyData);
			histogramData = initHistogramData(histogramData);
		};

		/**
		 * Description
		 * @method initContentOptions
		 * @param {} contentOptions
		 * @return opt
		 */
		function initContentOptions(contentOptions) {
			var opt = contentOptions || {};

			opt.eventType = extDefine(opt, utils.content, 'eventType');
			opt.segments = extDefine(opt, utils.content, 'segments');
			opt.campaign = extDefine(opt, utils.content, 'campaign');
			opt.enableDebugging = extDefine(opt, utils.content, 'enableDebugging');
			opt.datepickerOptions = opt.datepickerOptions || {};
			opt.datepickerOptions.startDate = extDefine(opt.datepickerOptions, utils.content, 'startDate');
			opt.datepickerOptions.endDate = extDefine(opt.datepickerOptions, utils.content, 'endDate');
			opt.datepickerOptions.dateRange = extDefine(opt.datepickerOptions, utils.content, 'dateRange');
			opt.datepickerOptions.config = extDefine(opt.datepickerOptions.config, utils.content.datePickerConfig);
			opt.uploadCards = extDefine(opt.uploadCards, uploadCards);
			opt.uploadSankey = extDefine(opt.uploadSankey, uploadSankey);
			opt.uploadHistogram = extDefine(opt.uploadHistogram, uploadHistogram)

			if (opt.enableDebugging) {
				opt.debugCard = extDefine(opt, utils.content, 'debugCard');
				opt.debugCard.text = extDefine(opt.debugCard, utils.content.debugCard, 'text');
				opt.debugCard.id = extDefine(opt.debugCard, utils.content.debugCard, 'id');
				opt.debugCard.template = extDefine(opt.debugCard, utils.content.debugCard, 'template');
				opt.debugCard.templateUrl = extDefine(opt.debugCard, utils.content.debugCard, 'templateUrl');
			}

			return opt;
		};

		/**
		 * Description
		 * @method initCardsOptions
		 * @param {} cardsOptions
		 * @return opt
		 */
		function initCardsOptions(cardsOptions) {
			var opt = cardsOptions || {};

			opt.cards = extDefine(opt, utils.content, 'cards');
			opt.margin = extDefine(opt, utils.content, 'margin');
			opt.enableCounter = extDefine(opt, utils.content, 'enableCounter');

			if (opt.enableCounter) {
				initCounter(opt.cards);
			}

			return opt;
		};

		/**
		 * Description
		 * @method updateByDefault
		 * @param {} cardsOptions
		 * @param {} sankey
		 * @param {} histogram
		 * @return 
		 */
		function updateByDefault(cardsOptions, sankey, histogram) {
			cardsOptions.cards = utils.content.cards;
			sankey.links = utils.content.sankeyData.links;
			sankey.nodes = utils.content.sankeyData.nodes;
			histogram = utils.content.histogramData;
		};

		/**
		 * Description
		 * @method initFilters
		 * @param {} filters
		 * @return filt
		 */
		function initFilters(filters) {
			var filt = extDefine(filters, utils.content.sankeyFilters);

			return filt;
		};

		/**
		 * Description
		 * @method initSankeyData
		 * @param {} sankey
		 * @return data
		 */
		function initSankeyData(sankey) {
			var data = extDefine(sankey, {});

			data.links = utils.content.sankeyData.links;
			data.nodes = utils.content.sankeyData.nodes;

			return data;
		};

		/**
		 * Description
		 * @method initHistogramData
		 * @param {} histogram
		 * @return data
		 */
		function initHistogramData(histogram) {
			var data = angular.isArray(histogram) && histogram.length > 0 ? histogram : utils.content.histogramData;

			return data;
		};

		/**
		 * Description
		 * @method initCounter
		 * @param {} cards
		 * @return 
		 */
		function initCounter(cards) {
			for (var p in cards) {
				if (p == 'click') {
					continue;
				}

				cards[p].counter = counterFactory.getCounter(cards[p]);
			}
		};

		/**
		 * Description
		 * @method uploadCards
		 * @param {} data
		 * @return 
		 */
		function uploadCards(data) {
			logWarn('Call default function on upload cards.');
		};

		/**
		 * Description
		 * @method uploadSankey
		 * @param {} data
		 * @return 
		 */
		function uploadSankey(data) {
			logWarn('Call default function on upload sankey.');
		};

		/**
		 * Description
		 * @method uploadHistogram
		 * @param {} data
		 * @return 
		 */
		function uploadHistogram(data) {
			logWarn('Call default function on upload histogram.');
		};

		/**
		 * Description
		 * @method logWarn
		 * @param {} text
		 * @return 
		 */
		function logWarn(text) {
			$log.warn(text);
		};
	};
} ());