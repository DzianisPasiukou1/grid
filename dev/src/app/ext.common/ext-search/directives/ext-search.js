(function () {
	'use strict';

	angular
		.module('ext.common.search')
		.directive('extSearch', extSearch);

	extSearch.$inject = ['extSearchTemplatesPath'];

	/**
	 * Description
	 * @method extSearch
	 * @param {} templatesPath
	 * @return directive
	 */
	function extSearch(templatesPath) {
		var directive = {
			restrict: 'EA',
			scope: {
				searchValue: '=',
				onChange: '='
			},
			controller: 'ExtSearchController',
			controllerAs: 'vm',
			bindToController: true,
			templateUrl: templatesPath + 'ext-search.html'
		};

		return directive;
	};
} ());