angular.module('gridTaskApp')
	.directive('filterList', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
			},
			templateUrl: templatesPath + 'filter-list.html',
			link: function (scope, element, attrs) {
			}
		}
	}]);