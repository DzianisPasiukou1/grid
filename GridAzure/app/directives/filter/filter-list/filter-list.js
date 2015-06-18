angular.module('gridTaskApp')
	.directive('filterList', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'filter-list.html',
			controller: 'filterListCtrl',
			link: function (scope, element, attrs) {
			}
		}
	}]);