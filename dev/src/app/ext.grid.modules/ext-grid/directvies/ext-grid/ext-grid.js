(function () {
	'use strict';

	angular
		.module('ext.grid.main')
		.directive('extGrid', extGrid);

	extGrid.$inject = ['extGridTemplatesPath'];

	/**
	 * Description
	 * @method extGrid
	 * @param {} templatesPath
	 * @return directive
	 */
	function extGrid(templatesPath) {
		var directive = {
			restrict: 'EA',
			controller: 'ExtGridController',
			controllerAs: 'vm',
			bindToController: false,
			scope: {
				data: '=gridData',
				exportTo: '=',
				options: '=gridOptions',
				contentOptions: '=contentOptions'
			},
			templateUrl: templatesPath + 'ext-grid.html'
		};
		
		return directive;
	};
} ());