angular.module('gridTaskApp')
	.directive('pageContentCards', ['templatesPath', 'CONTENT', '$compile', function (templatesPath, CONTENT, $compile) {
		return {
			restrict: 'E',
			scope: {
				data: '=gridData',
				contentOptions: '=',
				uiGridOptions: '=',
				cardsOptions: '='
			},
			templateUrl: templatesPath + 'directive-templates/page-content-cards.html',
			link: function (scope, element) {
				var initializer = new Initializer(scope, element, CONTENT, templatesPath, $compile);
				initializer.initCards();

				scope.$watch('contentOptions.datepickerOptions.dateRange', function (date) {
					if (date) {
						for (var card in scope.cardsOptions.cards) {
							if (scope.cardsOptions.cards[card].counter) {
								scope.cardsOptions.cards[card].count = scope.cardsOptions.cards[card].counter.calculate(scope.contentOptions.datepickerOptions.startDate, scope.contentOptions.datepickerOptions.endDate);
							}
						}
					}
				});
			}
		};
	}])