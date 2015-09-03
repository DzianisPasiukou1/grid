(function () {
	'use strict'

	angular
		.module('ext.grid.pageContent')
		.factory('initPageContent', initPageContent);

	initPageContent.$inject = ['initPageContentGrid', 'initPageContentOptions', 'initGridOptionsUtils'];

	function initPageContent(initPageContentGrid, initPageContentOptions, initGridOptionsUtils) {
		var utils = {};

		utils.init = init;
		utils.initContentOptions = initContentOptions;
		utils.refreshContentOptions = refreshContentOptions;
		utils.refreshCheckCallback = refreshCheckCallback;
		utils.refreshData = refreshData;

		return utils;

		function init(grid, contentOptions, gridOptions, element, scope, data, $compile, gridTemplatesPath) {
			grid = initPageContentGrid.initGrid(grid);
			contentOptions = initContentOptions(contentOptions, element, scope, data);
			gridOptions = initGridOptions(gridOptions, data, contentOptions, $compile, gridTemplatesPath);
		};

		function initContentOptions(contentOptions, element, scope, data) {
			return initPageContentOptions.initContentOpt(contentOptions, element, scope, data);
		};

		function initGridOptions(gridOptions, data, contentOptions, $compile, templatesPath) {
			return initGridOptionsUtils.initOptions(gridOptions, data, contentOptions, $compile, templatesPath);
		};

		function refreshContentOptions(contentOptions, data, gridOptions, views) {
			initPageContentOptions.refreshContentOpt(contentOptions, data, gridOptions, views);
		};

		function refreshCheckCallback(gridOptions) {
			var isFindAct, indexAct;

			for (var i = 0; i < gridOptions.plugins.length; i++) {
				if (gridOptions.plugins[i].constructor.name == 'ExtGridActionsPlugin') {
					isFindAct = true;
					indexAct = i;
					break;
				}
			}

			gridOptions.plugins[indexAct].refreshCallback();
		};

		function refreshData(data, $compile, $scope) {
			// var grid = angular.element('div[ext-grid]') || angular.element('ext-grid');
			// $compile(grid)($scope);
		};
	};
} ());