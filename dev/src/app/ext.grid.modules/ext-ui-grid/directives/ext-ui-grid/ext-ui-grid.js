(function () {
	'use strict'

	angular
		.module('ext.grid.uiGrid')
		.directive('extUiGrid', extUiGrid);

	extUiGrid.$inject = ['extUiGridTemplatesPath'];

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