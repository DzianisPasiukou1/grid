(function () {
	'use strict'

	angular
		.module('ext.grid.main')
		.directive('extGrid', extGrid);

	extGrid.$inject = ['extGridTemplatesPath'];

	function extGrid(templatesPath) {
		var directive = {
			restrict: 'EA',
			controller: 'ExtGridController',
			controllerAs: 'vm',
			bindToController: true,
			scope: {
				data: '=gridData',
				exportTo: '=',
				options: '=extGridOptions',
				contentOptions: '=extContextOptions'
			},
			templateUrl: templatesPath + 'ext-grid.html'
		};

		return directive;
	};
} ());