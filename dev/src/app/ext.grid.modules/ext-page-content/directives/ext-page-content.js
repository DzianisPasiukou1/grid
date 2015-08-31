(function () {
	'use strict'

	angular
		.module('ext.grid.pageContent')
		.directive('extPageContent', extPageContent);

	extPageContent.$inject = ['extPageContentTemplatesPath'];

	function extPageContent(templatesPath, initUtils) {
		var directive = {
			restrict: 'EA',
			scope: {
				data: '=gridData',
				contentOptions: '=',
				grid: '=',
				gridOptions: '=',
				uiGridOptions: '='
			},
			templateUrl: templatesPath + 'ext-page-content.html',
			controller: 'ExtPageContentController',
			controllerAs: 'vm',
			bindToController: true
		};

		return directive;
	};
} ());