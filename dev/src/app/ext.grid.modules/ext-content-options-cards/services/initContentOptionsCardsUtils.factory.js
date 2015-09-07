(function () {
	'use strict'

	angular
		.module('ext.grid.contentOptionsCards')
		.factory('initContentOptionsCardsUtils', initContentOptionsCardsUtils);

	initContentOptionsCardsUtils.$inject = ['EXT_CONTENT_OPTIONS_CARDS', 'extInitDefaultService', '$log', 'extDefine'];

	function initContentOptionsCardsUtils(EXT_CONTENT_OPTIONS_CARDS, extInitDefaultService, $log, extDefine) {
		var utils = {};
		initContent();
		utils.initOpt = initOpt;
		utils.getDefault = getDefault;
		utils.getDefaultByName = getDefaultByName;

		return utils;

		function initContent() {
			extInitDefaultService.init(EXT_CONTENT_OPTIONS_CARDS, utils, 'content');
		};

		function initOpt(contentOptions) {
			var opt = contentOptions || {};

			opt.filtrate = extDefine(opt.filtrate, filtrate);
			opt.search = extDefine(opt.search, search);
			opt.searchOptions = extDefine(opt, utils.content, 'searchOptions');
			opt.searchValue = extDefine(opt, utils.content, 'searchValue');
			opt.datepickerOptions = extDefine(opt, utils.content, 'datepickerOptions');
			opt.datepickerOptions.startDate = extDefine(opt.datepickerOptions, utils.content.datepickerOptions, 'startDate');
			opt.datepickerOptions.endDate = extDefine(opt.datepickerOptions, utils.content.datepickerOptions, 'endDate');
			opt.datepickerOptions.dateRange = extDefine(opt.datepickerOptions, utils.content.datepickerOptions, 'dateRange');
			opt.datepickerOptions.config = extDefine(opt.datepickerOptions.config, utils.content.datepickerOptions.datepickerConfig);
			opt.exports = extDefine(opt, utils.content, 'exports');
			opt.searchOptions.selected = opt.searchOptions[0];
			opt.filterOptions = extDefine(opt, utils.content, 'filterOptions');

			return opt;
		};

		function getDefault() {
			return utils.content;
		};

		function getDefaultByName(name) {
			return utils.content[name];
		};

		function filtrate() {
			$log.warn('Call default empty function on filtrate.');
		};

		function search() {
			$log.warn('Call default empty function on search.');
		};
	};
} ());