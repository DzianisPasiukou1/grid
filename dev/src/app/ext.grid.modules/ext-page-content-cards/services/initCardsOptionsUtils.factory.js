(function () {
	'use strict'

	angular
		.module('ext.grid.pageContentCards')
		.factory('initCardsOptionsUtils', initCardsOptionsUtils);

	initCardsOptionsUtils.$inject = ['EXT_CARDS_OPTIONS', 'counterFactory', 'initContentOptionsCardsUtils'];

	function initCardsOptionsUtils(EXT_CARDS_OPTIONS, counterFactory, initContentOptionsCardsUtils) {
		var utils = {};

		utils.content = {};
		utils.content.cards = EXT_CARDS_OPTIONS.cards;
		utils.content.margin = EXT_CARDS_OPTIONS.margin;
		utils.content.enableCounter = EXT_CARDS_OPTIONS.enableCounter;

		utils.initCards = initCards;
		utils.initContentOptions = initContentOptions;
		utils.init = init;
		utils.dateRangeChanged = dateRangeChanged;

		return utils;

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
			opt.searchOptions.selected = opt.searchOptions[0];
			opt.filterOptions = opt.filterOptions || getFilterOptions(data);

			opt = initContentOptionsCardsUtils.initOpt(opt);

			return opt;
		};

		function dateRangeChanged(date, cardsOptions, contentOptions) {
			for (var card in cardsOptions.cards) {
				if (cardsOptions.cards[card].counter) {
					cardsOptions.cards[card].count = cardsOptions.cards[card].counter.calculate(contentOptions.datepickerOptions.startDate, contentOptions.datepickerOptions.endDate);
				}
			}
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
	};
} ());