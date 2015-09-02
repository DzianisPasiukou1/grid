(function () {
	'use strict'

	angular
		.module('ext.grid.pageContent')
		.factory('initPageContent', initPageContent);

	initPageContent.$inject = ['initPageContentGrid', 'initPageContentOptions'];

	function initPageContent(initPageContentGrid, initPageContentOptions) {
		var utils = {};

		utils.init = init;
		utils.initContentOptions = initContentOptions;
		utils.refreshContentOptions = refreshContentOptions;
		utils.refreshCheckCallback = refreshCheckCallback;
		utils.refreshData = refreshData;

		return utils;

		function init(grid, contentOptions, element, scope, data) {
			grid = initPageContentGrid.initGrid(grid);
			contentOptions = initPageContentOptions.initContentOpt(contentOptions, element, scope, data);
		};

		function initContentOptions(contentOptions, element, scope, data) {
			return initPageContentOptions.initContentOpt(contentOptions, element, scope, data);
		};

		function refreshContentOptions(contentOptions, data) {
			return initPageContentOptions.refreshContentOpt(contentOptions, data);
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