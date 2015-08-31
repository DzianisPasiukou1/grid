(function () {
	'use strict'

	angular
		.module('ext.common.search')
		.directive('extSearch', extSearch);

	extSearch.$inject = ['extSearchTemplatesPath'];

	function extSearch(templatesPath) {
		var directive = {
			restrict: 'EA',
			scope: {
				searchValue: '=',
				edited: '='
			},
			controller: 'ExtSearchController',
			controllerAs: 'vm',
			bindToController: true,
			templateUrl: templatesPath + 'ext-search.html'
		};

		return directive;
	};
} ());