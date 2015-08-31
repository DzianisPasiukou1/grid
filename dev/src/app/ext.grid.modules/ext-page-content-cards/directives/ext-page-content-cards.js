/* global Initializer */
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
			controllerAs: 'vm',
			bindToController: true,
			link: link
		};

		return directive;

		function link(scope, element) {
			var initializer = new Initializer(scope, element, CONTENT, templatesPath, $compile);
			initializer.initCards();

			scope.$watch('vm.contentOptions.datepickerOptions.dateRange', dateRangeChange);

			function dateRangeChange(date) {
				if (date) {
					for (var card in scope.cardsOptions.cards) {
						if (scope.cardsOptions.cards[card].counter) {
							scope.cardsOptions.cards[card].count = scope.cardsOptions.cards[card].counter.calculate(scope.contentOptions.datepickerOptions.startDate, scope.contentOptions.datepickerOptions.endDate);
						}
					}
				}
			};
		};
	};
} ());