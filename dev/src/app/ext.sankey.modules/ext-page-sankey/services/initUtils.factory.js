(function () {
	'use strict'

	angular
		.module('ext.sankey.pageSankey')
		.factory('initUtils', initUtils);

	initUtils.$inject = ['CONTENT', 'counterFactory', '$log', 'extDefine'];

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

		function initContent() {
			utils.content = {};

			for (var key in CONTENT) {
				if (CONTENT.hasOwnProperty(key)) {
					utils.content[key] = CONTENT[key];
				}
			}
		};

		function initOptions(contentOptions, cardsOptions, filters, sankeyData, histogramData) {
			contentOptions = initContentOptions(contentOptions);
			cardsOptions = initCardsOptions(cardsOptions);
			filters = initFilters(filters);
			sankeyData = initSankeyData(sankeyData);
			histogramData = initHistogramData(histogramData);
		};

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
			opt.datepickerOptions.config = extDefine(opt.datepickerOptions, utils.content, 'config');
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

		function updateByDefault(cardsOptions, sankey, histogram) {
			cardsOptions.cards = utils.content.cards;
			sankey.links = utils.content.sankeyData.links;
			sankey.nodes = utils.content.sankeyData.nodes;
			histogram = utils.content.histogramData;
		};

		function initFilters(filters) {
			var filt = extDefine(filters, utils.content.sankeyFilters);

			return filt;
		};

		function initSankeyData(sankey) {
			var data = extDefine(sankey, {});

			data.links = utils.content.sankeyData.links;
			data.nodes = utils.content.sankeyData.nodes;

			return data;
		};

		function initHistogramData(histogram) {
			var data = angular.isArray(histogram) && histogram.length > 0 ? histogram : utils.content.histogramData;

			return data;
		};

		function initCounter(cards) {
			for (var p in cards) {
				if (p == 'click') {
					continue;
				}

				cards[p].counter = counterFactory.getCounter(cards[p]);
			}
		};

		function uploadCards(data) {
			logWarn('Call default function on upload cards.');
		};

		function uploadSankey(data) {
			logWarn('Call default function on upload sankey.');
		};

		function uploadHistogram(data) {
			logWarn('Call default function on upload histogram.');
		};

		function logWarn(text) {
			$log.warn(text);
		};
	};
} ());