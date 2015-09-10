(function () {
	'use strict';

	angular
		.module('ext.grid.pageContentCards')
		.directive('extPageContentCards', extPageContentCards);

	extPageContentCards.$inject = ['extPageContentCardsTemplatesPath'];

	/**
	 * Description
	 * @method extPageContentCards
	 * @param {} templatesPath
	 * @return directive
	 */
	function extPageContentCards(templatesPath) {
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

		/**
		 * Description
		 * @method link
		 * @param {} scope
		 * @param {} element
		 * @param {} attrs
		 * @param {} vm
		 * @return 
		 */
		function link(scope, element, attrs, vm) {
		};
	};
} ());