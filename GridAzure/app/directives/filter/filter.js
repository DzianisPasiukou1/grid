angular.module('gridTaskApp')
	.directive('filter', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				listState: '='
			},
			controller: 'filterCtrl',
			templateUrl: templatesPath + 'filter.html',
			link: function (scope, element, attrs) {
				scope.$watch('listState', function (value) {
					if (value) {
						element.addClass('filter-selected');
					}
					else {
						element.removeClass('filter-selected');
					}
				});
			}
		}
	}]);