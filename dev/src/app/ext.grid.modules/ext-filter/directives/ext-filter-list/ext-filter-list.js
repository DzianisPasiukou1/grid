(function () {
	'use strict'

	angular
		.module('ext.grid.filter')
		.directive('extFilterList', extFilterList);

	extFilterList.$inject = ['extFilterTemplatesPath'];

	function extFilterList(templatesPath) {
		var directive = {
			restrict: 'EA',
			scope: {},
			templateUrl: templatesPath + 'ext-filter-list.html',
			controller: 'ExtFilterListController',
			controllerAs: 'vm',
			bindToController: true,
			require: '^extFilter',
			link: link
		};

		return directive;

		function link(scope, element, attrs, extFilter){
			angular.extend(scope.vm, extFilter);
		};
	};
} ());