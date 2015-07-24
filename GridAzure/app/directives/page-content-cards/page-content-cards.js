angular.module('gridTaskApp')
	.directive('pageContentCards', ['templatesPath', 'content', '$compile', function (templatesPath, content, $compile) {
		return {
			restrict: 'E',
			scope: {
				data: '=gridData',
				contentOptions: '=',
				gridOptions: '='
			},
			templateUrl: templatesPath + 'page-content-cards.html',
			link: function (scope, element) {
				var initializer = new Initializer(scope, element, content, templatesPath, $compile);
				initializer.init();

				scope.startDate = new Date();
				scope.startDate.setDate(scope.startDate.getDate() - 1);
				scope.endDate = new Date();

				scope.$watch('startDate', function (date) {
					for (var card in scope.cards) {
						if (scope.cards[card].counter) {
							scope.cards[card].count = scope.cards[card].counter.calculate(scope.startDate, scope.endDate);
						}
					}
				});

				scope.cards = {
					clicks: {
						count: 0,
						counter: undefined,
						graphs: [{ style: { 'background-color': 'rgb(233, 124, 130)', height: '55px' } },
							{ style: { 'background-color': 'rgb(165, 189, 215)', height: '35px' } },
							{ style: { 'background-color': 'rgb(165, 215, 208)', height: '55px' } },
							{ style: { 'background-color': 'rgb(251, 201, 135)', height: '10px' } },
							{ style: { 'background-color': 'rgb(57, 124, 130)', height: '30px' } }]
					},
					views: {
						count: 1910000,
						graphs: [{ style: { 'background-color': 'rgb(10, 124, 130)', height: '30px' } },
							{ style: { 'background-color': 'rgb(165, 25, 215)', height: '50px' } },
							{ style: { 'background-color': 'rgb(165, 200, 208)', height: '60px' } },
							{ style: { 'background-color': 'rgb(30, 201, 135)', height: '25px' } },
							{ style: { 'background-color': 'rgb(57, 124, 100)', height: '30px' } }]
					},
					conversion: {
						count: 2010,
						graphs: [{ style: { 'background-color': 'rgb(233, 44, 130)', height: '20px' } },
						{ style: { 'background-color': 'rgb(165, 189, 300)', height: '30px' } },
						{ style: { 'background-color': 'rgb(1, 215, 208)', height: '45px' } },
						{ style: { 'background-color': 'rgb(251, 201, 54)', height: '34px' } },
						{ style: { 'background-color': 'rgb(57, 33, 130)', height: '60px' } }]
					},
					spend: {
						count: 2150,
						graphs: [{ style: { 'background-color': 'rgb(10, 124, 130)', height: '10px' } },
						{ style: { 'background-color': 'rgb(165, 189, 55)', height: '5px' } },
						{ style: { 'background-color': 'rgb(165, 231, 208)', height: '50px' } },
						{ style: { 'background-color': 'rgb(251, 201, 29)', height: '30px' } },
						{ style: { 'background-color': 'rgb(57, 124, 1)', height: '34px' } }]
					},
					actions: {
						count: 1910000,
						graphs: [{ style: { 'background-color': 'rgb(10, 124, 130)', height: '30px' } },
							{ style: { 'background-color': 'rgb(165, 25, 215)', height: '50px' } },
							{ style: { 'background-color': 'rgb(165, 200, 208)', height: '60px' } },
							{ style: { 'background-color': 'rgb(30, 201, 135)', height: '25px' } },
							{ style: { 'background-color': 'rgb(57, 124, 100)', height: '30px' } }]
					},
					time: {
						count: new Date(),
						graphs: [{ style: { 'background-color': 'rgb(233, 44, 130)', height: '20px' } },
						{ style: { 'background-color': 'rgb(165, 189, 300)', height: '30px' } },
						{ style: { 'background-color': 'rgb(1, 215, 208)', height: '45px' } },
						{ style: { 'background-color': 'rgb(251, 201, 54)', height: '34px' } },
						{ style: { 'background-color': 'rgb(57, 33, 130)', height: '60px' } }]
					},
					date: {
						count: 2015,
						graphs: [{ style: { 'background-color': 'rgb(10, 124, 130)', height: '10px' } },
						{ style: { 'background-color': 'rgb(165, 189, 55)', height: '5px' } },
						{ style: { 'background-color': 'rgb(165, 231, 208)', height: '50px' } },
						{ style: { 'background-color': 'rgb(251, 201, 29)', height: '30px' } },
						{ style: { 'background-color': 'rgb(57, 124, 1)', height: '34px' } }]
					}
				}

				scope.cards.views.counter = new Counter(scope.cards.views);
				scope.cards.conversion.counter = new Counter(scope.cards.conversion);
				scope.cards.spend.counter = new Counter(scope.cards.spend);
				scope.cards.actions.counter = new Counter(scope.cards.actions);
				scope.cards.time.counter = new Counter(scope.cards.time);
				scope.cards.date.counter = new Counter(scope.cards.date);

				$(document).click(function (event) {
					scope.cards.clicks.count += 1;
				});

				scope.$watch('contentOptions', function (opt) {
					initializer.init();
					initializer.refreshOpt();
				});

				scope.$watch('data', function (data) {
					if (data) {
						initializer.refreshData(data);
					}
				});

				scope.$watch('data.length', function () {
					if (Array.isArray(scope.data)) {
						scope.grid.count = scope.data.length;
					}
				});

				scope.$watch('views.options.selected', function () {
					initializer.refreshOpt();
				})
			}
		};
	}])