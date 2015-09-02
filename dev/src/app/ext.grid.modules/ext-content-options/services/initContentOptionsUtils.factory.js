(function () {
	'use strict'

	angular
		.module('ext.grid.contentOptions')
		.factory('initContentOptionsUtils', initContentOptionsUtils);

	initContentOptionsUtils.$inject = ['$log', 'EXT_CONTENT_OPTIONS', 'extInitDefaultService'];

	function initContentOptionsUtils($log, EXT_CONTENT_OPTIONS, extInitDefaultService) {
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
			var contentOptions = opt || {};

			contentOptions.checks = contentOptions.checks || utils.content.checks;
			contentOptions.checks.callback = contentOptions.checks.callback || checkCallback;
			contentOptions.mores = contentOptions.mores || utils.content.mores;
			contentOptions.filterOptions = contentOptions.filterOptions || [];
			contentOptions.filtrate = contentOptions.filtrate || filtrate;
			contentOptions.refresh = contentOptions.refresh || refresh;
			contentOptions.upload = contentOptions.upload || upload;
			contentOptions.searchValue = contentOptions.searchValue || utils.content.searchValue;

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