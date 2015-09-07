(function () {
	'use strict'

	angular
		.module('ext.grid.contentOptionsCards')
		.factory('initContentOptionsCardsUtils', initContentOptionsCardsUtils);

	initContentOptionsCardsUtils.$inject = ['EXT_CONTENT_OPTIONS_CARDS', 'extInitDefaultService', '$log'];

	function initContentOptionsCardsUtils(EXT_CONTENT_OPTIONS_CARDS, extInitDefaultService, $log) {
		var utils = {};
		initContent();
		utils.initOpt = initOpt;
		utils.getDefault = getDefault;

		return utils;

		function initContent() {
			extInitDefaultService.init(EXT_CONTENT_OPTIONS_CARDS, utils, 'content');
		};

		function initOpt(contentOptions) {
			var opt = contentOptions || {};

			opt.filtrate = opt.filtrate || filtrate;
			opt.search = opt.search || search;
			opt.searchOptions = opt.searchOptions || utils.content.searchOptions;
			opt.searchValue = opt.searchValue || utils.content.searchValue;
			opt.datepickerOptions = opt.datepickerOptions || utils.content.datepickerOptions;
			opt.datepickerOptions.startDate = opt.datepickerOptions.startDate || utils.content.datepickerOptions.startDate;
			opt.datepickerOptions.endDate = opt.datepickerOptions.endDate || utils.content.datepickerOptions.endDate;
			opt.datepickerOptions.dateRange = opt.datepickerOptions.dateRange || utils.content.datepickerOptions.dateRange;
			opt.datepickerOptions.config = opt.datepickerOptions.config || utils.content.datepickerOptions.datepickerConfig;
			opt.exports = opt.exports || utils.content.exports;
			opt.searchOptions.selected = opt.searchOptions[0];
			opt.filterOptions = opt.filterOptions || utils.content.filterOptions;

			return opt;
		};

		function getDefault() {
			return utils.content;
		};

		function filtrate() {
			$log.warn('Call default empty function on filtrate.');
		};

		function search() {
			$log.warn('Call default empty function on search.');
		};
	};
} ());