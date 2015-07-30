angular.module('gridTaskApp')
	.directive('pageContentD3', ['templatesPath', 'content', '$compile', function (templatesPath, content, $compile) {
		return {
			restrict: 'E',
			scope: {
				data: '=gridData',
				contentOptions: '=',
				uiGridOptions: '=',
				cardsOptions: '=',
				sankeyData: '=',
				histogramData: '='
			},
			templateUrl: templatesPath + 'directive-templates/page-content-d3.html',
			link: function (scope, element) {
				var initializer = new Initializer(scope, element, content, templatesPath, $compile);
				initializer.initCards();

				scope.contentOptions.eventType = { options: { actions: [{ label: 'Simple event' }, { label: 'Medium event' }] }, selectOpt: {} };
				scope.contentOptions.segments = { options: { actions: [{ label: 'All segments' }, { label: 'First segment' }, { label: 'Second segment' }] }, selectOpt: {} };
				scope.contentOptions.campaign = { options: { actions: [{ label: 'All campaigns' }, { label: 'First campaign' }, { label: 'Second campaign' }] }, selectOpt: {} };

				scope.filters = {
					dateRange: {
						start: moment(new Date(new Date().setDate(new Date().getDate() - 7))),
						end: moment(new Date())
					}
				};

				scope.$watch('cardsOptions.dateRange', function (date) {
					if (date) {
						for (var card in scope.cardsOptions.cards) {
							if (scope.cardsOptions.cards[card].counter) {
								scope.cardsOptions.cards[card].count = scope.cardsOptions.cards[card].counter.calculate(scope.cardsOptions.startDate, scope.cardsOptions.endDate);
							}
						}
					}
				});
			}
		};
	}])