(function () {
	'use strict';

	angular
		.module('ext.grid.filter')
		.directive('extFilter', extFilter);

	extFilter.$inject = ['extFilterTemplatesPath'];

	/**
	 * Description
	 * @method extFilter
	 * @param {} templatesPath
	 * @return directive
	 */
	function extFilter(templatesPath) {
		var directive = {
			restrict: 'EA',
			scope: {
				filterOptions: '=extFilter',
				filtrate: '=onFiltrate'
			},
			controller: 'ExtFilterController',
			controllerAs: 'vm',
			bindToController: false,
			templateUrl: templatesPath + 'ext-filter.html'
		};

		return directive;
	};
} ());
