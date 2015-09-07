(function () {
	'use strict'

	angular
		.module('ext.grid.contentOptions')
		.factory('initContentOptionsUtils', initContentOptionsUtils);

	initContentOptionsUtils.$inject = ['$log', 'EXT_CONTENT_OPTIONS', 'extInitDefaultService', 'extDefine'];

	function initContentOptionsUtils($log, EXT_CONTENT_OPTIONS, extInitDefaultService, extDefine) {
		var utils = {};

		initContent();
		utils.initOpt = initOpt;
		utils.getDefault = getDefault;

		return utils;

		function initContent() {
			extInitDefaultService.init(EXT_CONTENT_OPTIONS, utils, 'content');
		};

		function getDefault() {
			return utils.content;
		};

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

		function checkCallback() {
			$log.warn('Call default empty function on check.');
		};

		function filtrate() {
			$log.warn('Call default empty function on filtrate.');
		};

		function refresh() {
			$log.warn('Call default empty function on refresh.');
		};

		function upload(data) {
			$log.warn('Call default empty function on upload.');
		};
	};
} ());