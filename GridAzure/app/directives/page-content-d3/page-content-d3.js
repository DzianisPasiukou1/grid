angular.module('gridTaskApp')
	.directive('pageContentD3', ['templatesPath', 'CONTENT', '$compile', 'jsonService', function (templatesPath, CONTENT, $compile, jsonService) {
		return {
			restrict: 'EA',
			scope: {
				contentOptions: '=',
				cardsOptions: '=',
				sankeyData: '=',
				histogramData: '=',
				filters: '='
			},
			templateUrl: templatesPath + 'directive-templates/page-content-d3.html',
			link: function (scope, element) {
				var initializer = new Initializer(scope, element, CONTENT, templatesPath, $compile, jsonService);
				initializer.initSankey();

				scope.contentOptions.refresh = function () {
					initializer.refreshSankey();
				}

				scope.filters.onDateRangeChange = function () {
					for (var card in scope.cardsOptions.cards) {
						if (scope.cardsOptions.cards[card].counter) {
							scope.cardsOptions.cards[card].count = scope.cardsOptions.cards[card].counter.calculate(this.dateRange.start.toDate(), this.dateRange.end.toDate());
						}
					}
				}
			}
		};
	}])