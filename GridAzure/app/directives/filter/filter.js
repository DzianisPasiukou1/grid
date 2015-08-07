angular.module('gridTaskApp')
	.directive('filter', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				listState: '=',
				filterOptions: '=options',
				filtrate: '='
			},
			controller: 'filterCtrl',
			templateUrl: templatesPath + 'directive-templates/filter.html',
			link: function (scope, element, attrs) {
				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						scope.listState = false;
						scope.$apply();
					}
				})

				scope.$watch('listState', function (value) {
					if (value) {
						element.find('filter-list').resize();
						element.addClass('filter-selected');
					}
					else {
						element.removeClass('filter-selected');
					}
				});
			}
		}
	}]);
