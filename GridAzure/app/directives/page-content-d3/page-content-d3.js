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

				scope.contentOptions.eventType = {
					options: {
						actions: [
							{ label: 'Simple event' },
							{ label: 'Medium event' }],
						selected: { label: 'Simple event' }
					},
					selectOpt: {}
				};
				scope.contentOptions.segments = {
					options: {
						actions: [{ label: 'All segments', isAll: true }, { label: 'First segment' }, { label: 'Second segment' }],
						onChange: function () {
							//if (Array.isArray(this.selected)) {
							//	if (this.selected.length > 1) {
							//		for (var select in this.selected) {
							//			if (JSON.parse(this.selected[select]).isAll) {
							//				if (select == this.selected.length - 1) {
							//					this.selected = this.selected.filter(function (value) {
							//						if (JSON.parse(value).isAll) {
							//							return value;
							//						}
							//					})
							//				}
							//				else {
							//					this.selected = this.selected.filter(function (value) {
							//						if (!JSON.parse(value).isAll) {
							//							return value;
							//						}
							//					})
							//				}
							//				break;
							//			}
							//		}
							//	}
							//}
						},
						onSelect: function (action) {
							this.lastSelect = action;
						}
					},
					selectOpt: {}
				};
				scope.contentOptions.campaign = {
					options: {
						actions: [{ label: 'All campaigns', isAll: true }, { label: 'First campaign' }, { label: 'Second campaign' }],
						onChange: function () {
							if (Array.isArray(this.selected)) {

							}
						}
					},
					selectOpt: {}
				};

				scope.filters = {
					dateRange: {
						start: moment(new Date(new Date().setDate(new Date().getDate() - 7))),
						end: moment(new Date())
					},
					onDateRangeChange: function () {
						for (var card in scope.cardsOptions.cards) {
							if (scope.cardsOptions.cards[card].counter) {
								scope.cardsOptions.cards[card].count = scope.cardsOptions.cards[card].counter.calculate(this.dateRange.start.toDate(), this.dateRange.end.toDate());
							}
						}
					}
				};
			}
		};
	}])