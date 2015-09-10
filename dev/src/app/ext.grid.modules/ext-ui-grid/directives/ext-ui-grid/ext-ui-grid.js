(function () {
	'use strict';
	
	angular
		.module('ext.grid.uiGrid')
		.directive('extUiGrid', extUiGrid);

	extUiGrid.$inject = ['extUiGridTemplatesPath'];

	/**
	 * Description
	 * @method extUiGrid
	 * @param {} templatesPath
	 * @return directive
	 */
	function extUiGrid(templatesPath) {
		var directive = {
			restrict: 'EA',
			scope: {
				data: '=gridData',
				options: '=gridOptions',
				contentOptions: '='
			},
			controller: 'ExtUiGridController',
			controllerAs: 'vm',
			bindToController: true,
			templateUrl: templatesPath + 'ext-ui-grid.html'
		};

		return directive;
	};
} ());