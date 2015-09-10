(function () {
	'use strict';

	angular
		.module('ext.grid.contentOptionsCards')
		.factory('initContentOptionsCardsUtils', initContentOptionsCardsUtils);

	initContentOptionsCardsUtils.$inject = ['EXT_CONTENT_OPTIONS_CARDS', 'extInitDefaultService', '$log', 'extDefine'];

	/**
	 * Description
	 * @method initContentOptionsCardsUtils
	 * @param {} EXT_CONTENT_OPTIONS_CARDS
	 * @param {} extInitDefaultService
	 * @param {} $log
	 * @param {} extDefine
	 * @return utils
	 */
	function initContentOptionsCardsUtils(EXT_CONTENT_OPTIONS_CARDS, extInitDefaultService, $log, extDefine) {
		var utils = {};
		initContent();
		utils.initOpt = initOpt;
		utils.getDefault = getDefault;
		utils.getDefaultByName = getDefaultByName;

		return utils;

		/**
		 * Description
		 * @method initContent
		 * @return 
		 */
		function initContent() {
			extInitDefaultService.init(EXT_CONTENT_OPTIONS_CARDS, utils, 'content');
		};

		/**
		 * Description
		 * @method initOpt
		 * @param {} contentOptions
		 * @return opt
		 */
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

		/**
		 * Description
		 * @method getDefault
		 * @return MemberExpression
		 */
		function getDefault() {
			return utils.content;
		};

		/**
		 * Description
		 * @method getDefaultByName
		 * @param {} name
		 * @return MemberExpression
		 */
		function getDefaultByName(name) {
			return utils.content[name];
		};

		/**
		 * Description
		 * @method filtrate
		 * @return 
		 */
		function filtrate() {
			$log.warn('Call default empty function on filtrate.');
		};

		/**
		 * Description
		 * @method search
		 * @return 
		 */
		function search() {
			$log.warn('Call default empty function on search.');
		};
	};
} ());