(function () {
	'use strict';

	angular
		.module('ext.grid.pageContentCards')
		.factory('initCardsOptionsUtils', initCardsOptionsUtils);

	initCardsOptionsUtils.$inject = ['EXT_CARDS_OPTIONS', 'counterFactory', 'initContentOptionsCardsUtils', 'extDefine'];

	/**
	 * Description
	 * @method initCardsOptionsUtils
	 * @param {} EXT_CARDS_OPTIONS
	 * @param {} counterFactory
	 * @param {} initContentOptionsCardsUtils
	 * @param {} extDefine
	 * @return utils
	 */
	function initCardsOptionsUtils(EXT_CARDS_OPTIONS, counterFactory, initContentOptionsCardsUtils, extDefine) {
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

		/**
		 * Description
		 * @method init
		 * @param {} cardsOptions
		 * @param {} contentOptions
		 * @param {} data
		 * @param {} vm
		 * @return 
		 */
		function init(cardsOptions, contentOptions, data, vm) {
			cardsOptions = initCards(cardsOptions);
			contentOptions = initContentOptions(contentOptions, data, vm);
		};

		/**
		 * Description
		 * @method initCards
		 * @param {} cardsOptions
		 * @return opt
		 */
		function initCards(cardsOptions) {
			var opt = extDefine(cardsOptions, {});

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
		 * @method initContentOptions
		 * @param {} contentOptions
		 * @param {} data
		 * @param {} vm
		 * @return opt
		 */
		function initContentOptions(contentOptions, data, vm) {
			var opt = extDefine(contentOptions, {});

			opt.filtrate = extDefine(opt.filtrate, angular.bind(vm, filtrate));
			opt.search = extDefine(opt.search, angular.bind(vm, search));
			opt.searchOptions = extDefine(opt.searchOptions, getSearchOptions(data));
			opt.searchOptions.selected = opt.searchOptions[0];
			opt.filterOptions = extDefine(opt.filterOptions, getFilterOptions(data));

			opt = initContentOptionsCardsUtils.initOpt(opt);

			return opt;
		};

		/**
		 * Description
		 * @method dateRangeChanged
		 * @param {} date
		 * @param {} cardsOptions
		 * @param {} contentOptions
		 * @return 
		 */
		function dateRangeChanged(date, cardsOptions, contentOptions) {
			for (var card in cardsOptions.cards) {
				if (cardsOptions.cards[card].counter) {
					cardsOptions.cards[card].count = cardsOptions.cards[card].counter.calculate(contentOptions.datepickerOptions.startDate, contentOptions.datepickerOptions.endDate);
				}
			}
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
		 * @method filtrate
		 * @param {} value
		 * @return 
		 */
		function filtrate(value) {
			var filterText = convertFilterOptions(value).filterText;

			if (angular.isDefined(this.uiGridOptions.filterOptions)) {
				this.uiGridOptions.filterOptions.filterText = filterText;
			}
		};

		/**
		 * Description
		 * @method search
		 * @param {} value
		 * @return 
		 */
		function search(value) {
			if (angular.isDefined(this.uiGridOptions.filterOptions)) {
				this.uiGridOptions.filterOptions.filterText = value;
			}
		};

		/**
		 * Description
		 * @method getSearchOptions
		 * @param {} data
		 * @return options
		 */
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

		/**
		 * Description
		 * @method getFilterOptions
		 * @param {} data
		 * @return options
		 */
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

		/**
		 * Description
		 * @method convertFilterOptions
		 * @param {} options
		 * @return convertOpt
		 */
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