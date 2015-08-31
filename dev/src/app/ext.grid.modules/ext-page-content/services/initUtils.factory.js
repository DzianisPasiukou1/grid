(function () {
	'use strict'

	angular
		.module('ext.grid.pageContent')
		.factory('initUtils', initUtils);

	initUtils.$inject = ['initGridUtils', 'initOptionsUtils'];

	function initUtils(initGridUtils, initOptionsUtils) {
		var utils = {};

		utils.init = init;
		utils.initContentOptions = initContentOptions;
		utils.refreshContentOptions = refreshContentOptions;
		utils.refreshCheckCallback = refreshCheckCallback;
		utils.refreshData = refreshData;

		return utils;

		function init(grid, contentOptions, element, scope, data) {
			grid = initGridUtils.initGrid(grid);
			contentOptions = initOptionsUtils.initContentOpt(contentOptions, element, scope, data);
		};

		function initContentOptions(contentOptions, element, scope, data) {
			return initOptionsUtils.initContentOpt(contentOptions, element, scope, data);
		};

		function refreshContentOptions(contentOptions, data) {
			return initOptionsUtils.refreshContentOpt(contentOptions, data);
		};
		
		function refreshCheckCallback(gridOptions) {
			var isFindAct, indexAct;

			for (var i = 0; i < gridOptions.plugins.length; i++) {
				if (gridOptions.plugins[i].constructor.name == 'ngGridActionsPlugin') {
					isFindAct = true;
					indexAct = i;
					break;
				}
			}

			gridOptions.plugins[indexAct].refreshCallback();
		};

		function refreshData(data) {
		};
	};
} ());