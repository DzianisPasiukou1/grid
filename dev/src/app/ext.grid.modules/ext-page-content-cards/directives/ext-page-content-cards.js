(function () {
	'use strict'

	angular
		.module('ext.grid.pageContentCards')
		.directive('extPageContentCards', extPageContentCards);

	extPageContentCards.$inject = ['extPageContentCardsTemplatesPath', 'CONTENT', '$compile'];

	function extPageContentCards(templatesPath, CONTENT, $compile) {
		var directive = {
			restrict: 'EA',
			scope: {
				data: '=gridData',
				contentOptions: '=',
				uiGridOptions: '=',
				cardsOptions: '='
			},
			templateUrl: templatesPath + 'ext-page-content-cards.html',
			controller: 'ExtPageContentCardsController',
			controllerAs: 'vm',
			bindToController: true,
			link: link
		};

		return directive;

		function link(scope, element, attrs, vm) {
		};
	};
} ());