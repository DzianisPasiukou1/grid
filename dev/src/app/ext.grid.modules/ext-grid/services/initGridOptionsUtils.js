(function () {
	'use strict'

	angular
		.module('ext.grid.main')
		.factory('initGridOptionsUtils', initGridOptionsUtils);

	initGridOptionsUtils.$inject = ['extGridOptions', 'extInitDefaultService'];

	function initGridOptionsUtils(extGridOptions, extInitDefaultService) {
		var utils = {};

		utils.getDefault = getDefault;

		initContent();

		function initContent() {
			extInitDefaultService.init(extGridOptions, utils, 'content');
		};

		function getDefault() {
			return utils.content;
		};

		function initOptions(gridOptions) {
			var opt = {};
		};

		return utils;
	};
} ());