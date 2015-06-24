angular.module('gridTaskApp')
	.directive('filter', ['templatesPath', '$compile', function (templatesPath, $compile) {
		return {
			restrict: 'E',
			scope: {
				listState: '=',
				filterOptions: '=options',
				isFiltrate: '='
			},
			controller: 'filterCtrl',
			templateUrl: templatesPath + 'filter.html',
			link: function (scope, element, attrs) {
				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						scope.listState = false;
						$compile(element.find('filter-list'))(scope);
					}
				})

				element.find('span.expand').addClass('glyphicon-menu-down');

				scope.$watch('listState', function (value) {
					if (value) {
						element.addClass('filter-selected');
						element.find('span.expand').removeClass('glyphicon-menu-down');
						element.find('span.expand').addClass('glyphicon-menu-up');
					}
					else {
						element.removeClass('filter-selected');
						element.find('span.expand').addClass('glyphicon-menu-down');
						element.find('span.expand').removeClass('glyphicon-menu-up');
					}
				});
			}
		}
	}]);