(function () {
	'use strict';

	angular
		.module('ext.grid.contentOptions')
		.factory('initContentOptionsUtils', initContentOptionsUtils);

	initContentOptionsUtils.$inject = ['$log', 'EXT_CONTENT_OPTIONS', 'extInitDefaultService', 'extDefine'];

	/**
	 * Description
	 * @method initContentOptionsUtils
	 * @param {} $log
	 * @param {} EXT_CONTENT_OPTIONS
	 * @param {} extInitDefaultService
	 * @param {} extDefine
	 * @return utils
	 */
	function initContentOptionsUtils($log, EXT_CONTENT_OPTIONS, extInitDefaultService, extDefine) {
		var utils = {};

		initContent();
		utils.initOpt = initOpt;
		utils.getDefault = getDefault;

		return utils;

		/**
		 * Description
		 * @method initContent
		 * @return 
		 */
		function initContent() {
			extInitDefaultService.init(EXT_CONTENT_OPTIONS, utils, 'content');
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
		 * @method initOpt
		 * @param {} opt
		 * @return contentOptions
		 */
		function initOpt(opt) {
			var contentOptions = extDefine(opt, {});

			contentOptions.checks = extDefine(contentOptions, utils.content, 'checks');
			contentOptions.checks.callback = extDefine(contentOptions.checks.callback, checkCallback);
			contentOptions.mores = extDefine(contentOptions, utils.content, 'mores');
			contentOptions.filterOptions = extDefine(contentOptions.filterOptions, []);
			contentOptions.filtrate = extDefine(contentOptions.filtrate, filtrate);
			contentOptions.refresh = extDefine(contentOptions.refresh, refresh);
			contentOptions.upload = extDefine(contentOptions.upload, upload);
			contentOptions.searchValue = extDefine(contentOptions, utils.content, 'searchValue');

			return contentOptions;
		};

		/**
		 * Description
		 * @method checkCallback
		 * @return 
		 */
		function checkCallback() {
			$log.warn('Call default empty function on check.');
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
		 * @method refresh
		 * @return 
		 */
		function refresh() {
			$log.warn('Call default empty function on refresh.');
		};

		/**
		 * Description
		 * @method upload
		 * @param {} data
		 * @return 
		 */
		function upload(data) {
			$log.warn('Call default empty function on upload.');
		};
	};
} ());