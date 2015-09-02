(function () {
	'use strict'

	angular
		.module('ext.grid.contentOptions')
		.factory('initContentOptionsUtils', initOptionsUtils);

	initOptionsUtils.$inject = ['$log', 'EXT_CONTENT_OPTIONS'];

	function initOptionsUtils($log, EXT_CONTENT_OPTIONS) {
		var utils = {};

		utils.checks = EXT_CONTENT_OPTIONS.checks;
		utils.mores = EXT_CONTENT_OPTIONS.mores;
		utils.initOpt = initOpt;

		return utils;

		function initOpt(opt) {
			var contentOptions = opt || {};

			contentOptions.checks = contentOptions.checks || this.checks;
			contentOptions.mores = contentOptions.mores || this.mores;
			contentOptions.filterOptions = contentOptions.filterOptions || [];
			contentOptions.filtrate = contentOptions.filtrate || filtrate;
			contentOptions.refreshCallback = contentOptions.refreshCallback || refresh;
			contentOptions.upload = contentOptions.upload || upload;

			return contentOptions;
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