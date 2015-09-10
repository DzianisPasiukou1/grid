(function () {
	'use strict';

	angular
		.module('ext.grid.pageContent')
		.factory('initPageContent', initPageContent);

	initPageContent.$inject = ['initPageContentGrid', 'initPageContentOptions', 'initGridOptionsUtils'];

	/**
	 * Description
	 * @method initPageContent
	 * @param {} initPageContentGrid
	 * @param {} initPageContentOptions
	 * @param {} initGridOptionsUtils
	 * @return utils
	 */
	function initPageContent(initPageContentGrid, initPageContentOptions, initGridOptionsUtils) {
		var utils = {};

		utils.init = init;
		utils.initContentOptions = initContentOptions;
		utils.refreshContentOptions = refreshContentOptions;
		utils.refreshCheckCallback = refreshCheckCallback;
		utils.refreshData = refreshData;

		return utils;

		/**
		 * Description
		 * @method init
		 * @param {} grid
		 * @param {} contentOptions
		 * @param {} gridOptions
		 * @param {} element
		 * @param {} scope
		 * @param {} data
		 * @param {} $compile
		 * @param {} gridTemplatesPath
		 * @return 
		 */
		function init(grid, contentOptions, gridOptions, element, scope, data, $compile, gridTemplatesPath) {
			grid = initPageContentGrid.initGrid(grid);
			contentOptions = initContentOptions(contentOptions, element, scope, data);
			gridOptions = initGridOptions(gridOptions, data, contentOptions, $compile, gridTemplatesPath);
		};

		/**
		 * Description
		 * @method initContentOptions
		 * @param {} contentOptions
		 * @param {} element
		 * @param {} scope
		 * @param {} data
		 * @return CallExpression
		 */
		function initContentOptions(contentOptions, element, scope, data) {
			return initPageContentOptions.initContentOpt(contentOptions, element, scope, data);
		};

		/**
		 * Description
		 * @method initGridOptions
		 * @param {} gridOptions
		 * @param {} data
		 * @param {} contentOptions
		 * @param {} $compile
		 * @param {} templatesPath
		 * @return CallExpression
		 */
		function initGridOptions(gridOptions, data, contentOptions, $compile, templatesPath) {
			if (contentOptions.withUpload) {
				gridOptions.reInit = true;
			}

			return initGridOptionsUtils.initOptions(gridOptions, data, contentOptions, $compile, templatesPath);
		};

		/**
		 * Description
		 * @method refreshContentOptions
		 * @param {} contentOptions
		 * @param {} data
		 * @param {} gridOptions
		 * @param {} views
		 * @return 
		 */
		function refreshContentOptions(contentOptions, data, gridOptions, views) {
			initPageContentOptions.refreshContentOpt(contentOptions, data, gridOptions, views);
		};

		/**
		 * Description
		 * @method refreshCheckCallback
		 * @param {} gridOptions
		 * @return 
		 */
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

		/**
		 * Description
		 * @method refreshData
		 * @param {} contentOptions
		 * @return 
		 */
		function refreshData(contentOptions) {
			if (contentOptions.loading) {
				contentOptions.isLoading = false;
			}
		};
	};
} ());