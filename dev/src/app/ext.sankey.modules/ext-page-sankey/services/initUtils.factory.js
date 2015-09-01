(function () {
	'use strict'

	angular
		.module('ext.sankey.pageSankey')
		.factory('initUtils', initUtils);

	initUtils.$inject = ['CONTENT', 'counterFactory'];

	function initUtils(CONTENT, counterFactory) {
		var utils = {};
		initContent();

		utils.initOptions = initOptions;
		utils.initContentOptions = initContentOptions;
		utils.initFilters = initFilters;
		utils.initSankeyData = initSankeyData;
		utils.initHistogramData = initHistogramData;
		utils.initCardsOptions = initCardsOptions;

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

			opt.eventType = opt.eventType || utils.content.eventType;
			opt.segments = opt.segments || utils.content.segments;
			opt.campaign = opt.campaign || utils.content.campaign;
			opt.enableDebugging = opt.enableDebugging || utils.content.enableDebugging;
			opt.datepickerOptions = opt.datepickerOptions || {};
			opt.datepickerOptions.startDate = opt.datepickerOptions.startDate || utils.content.startDate;
			opt.datepickerOptions.endDate = opt.datepickerOptions.endDate || utils.content.endDate;
			opt.datepickerOptions.dateRange = opt.datepickerOptions.dateRange || utils.content.dateRange;
			opt.datepickerOptions.config = opt.datepickerOptions.config || utils.content.config;
			
			if (opt.enableDebugging) {
				opt.debugCard = opt.debugCard || utils.content.debugCard;
			}

			return opt;
		};

		function initCardsOptions(cardsOptions) {
			var opt = cardsOptions || {};

			opt.cards = opt.cards || utils.content.cards;
			opt.margin = opt.margin || utils.content.margin;
			opt.enableCounter = opt.enableCounter || utils.content.enableCounter;

			if (opt.enableCounter) {
				initCounter(opt.cards);
			}

			return opt;
		};

		function initFilters(filters) {
			return filters || utils.content.sankeyFilters;
		};

		function initSankeyData(sankey) {
			var data = sankey || {};

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
	};
} ());