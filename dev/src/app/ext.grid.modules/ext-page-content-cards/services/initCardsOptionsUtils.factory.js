(function () {
	'use strict'

	angular
		.module('ext.grid.pageContentCards')
		.factory('initCardsOptionsutils', initCardsOptionsutils);

	initCardsOptionsutils.$inject = ['EXT_CARDS_OPTIONS', 'counterFactory'];

	function initCardsOptionsutils(EXT_CARDS_OPTIONS, counterFactory) {
		var utils = {};

		utils.content = {};
		utils.content.cards = EXT_CARDS_OPTIONS.cards;
		utils.content.margin = EXT_CARDS_OPTIONS.margin;
		utils.content.enalbeCounter = EXT_CARDS_OPTIONS.enableCounter;
		utils.content.searchValue = EXT_CARDS_OPTIONS.searchValue;
		utils.content.startDate = EXT_CARDS_OPTIONS.startDate;
		utils.content.endDate = EXT_CARDS_OPTIONS.endDate;
		utils.content.dateRange = EXT_CARDS_OPTIONS.dateRange;
		utils.content.datepickerConfig = EXT_CARDS_OPTIONS.datepickerConfig;
		utils.content.exports = EXT_CARDS_OPTIONS.exports;
		utils.content.enableCounter = EXT_CARDS_OPTIONS.enableCounter;

		utils.initCards = initCards;
		utils.initContentOptions = initContentOptions;
		utils.init = init;

		function init(cardsOptions, contentOptions, data, vm) {
			cardsOptions = initCards(cardsOptions);
			contentOptions = initContentOptions(contentOptions, data, vm);
		};

		function initCards(cardsOptions) {
			var opt = cardsOptions || {};

			opt.cards = opt.cards || utils.content.cards;
			opt.margin = opt.margin || utils.content.margin;
			opt.enableCounter = opt.enableCounter || utils.content.enableCounter;

			if (opt.enableCounter) {
				initCounter(opt.cards);
			}

			return opt;
		};

		function initContentOptions(contentOptions, data, vm) {
			var opt = contentOptions || {};

			opt.filtrate = opt.filtrate || angular.bind(vm, filtrate);
			opt.search = opt.search || angular.bind(vm, search);
			opt.searchOptions = getSearchOptions(data);
			opt.searchValue = opt.searchValue || utils.content.searchValue;
			opt.datepickerOptions = opt.datepickerOptions || {};
			opt.datepickerOptions.startDate = opt.datepickerOptions.startDate || utils.content.startDate;
			opt.datepickerOptions.endDate = opt.datepickerOptions.endDate || utils.content.endDate;
			opt.datepickerOptions.dateRange = opt.datepickerOptions.dateRange || utils.content.dateRange;
			opt.datepickerOptions.config = opt.datepickerOptions.config || utils.content.datepickerConfig;
			opt.exports = opt.exports || utils.content.exports;
			opt.searchOptions.selected = opt.searchOptions[0];
			opt.filterOptions = opt.filterOptions || getFilterOptions(data);

			return opt;
		};

		function initCounter(cards) {
			for (var p in cards) {
				if (p == 'click') {
					continue;
				}

				cards[p].counter = counterFactory.getCounter(cards[p]);
			}
		};

		function filtrate(value) {
			var filterText = convertFilterOptions(value).filterText;

			if (angular.isDefined(this.uiGridOptions.filterOptions)) {
				this.uiGridOptions.filterOptions.filterText = filterText;
			}
		};

		function search(value) {
			if (angular.isDefined(this.uiGridOptions.filterOptions)) {
				this.uiGridOptions.filterOptions.filterText = value;
			}
		};

		function getSearchOptions(data) {
			var options = [];
			options.push({ label: 'everywhere', isEverywhere: true });

			if (Array.isArray(data) && data[0]) {
				for (var prop in data[0]) {
					if (prop != '$$hashKey') {
						options.push({ label: prop, isColumn: true });
					}
				}
			}

			return options;
		};

		function getFilterOptions(data) {
			var options = [];

			if (Array.isArray(data) && data[0])
				for (var prop in data[0]) {
					if (prop != '$$hashKey') {
						options.push({ label: prop, isColumn: true });
					}
				}
			return options;
		};

		function convertFilterOptions(options) {
			var convertOpt = { filterText: '' };

			for (var i = 0; i < options.length; i++) {

				if (options[i].filter) {
					convertOpt.filterText += options[i].label + ':' + options[i].filter + ';';
				}
			}
			return convertOpt;
		};

		return utils;
	};
} ());