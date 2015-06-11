angular.module('gridTaskApp')
	.directive('search', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {},
			templateUrl: templatesPath + 'search.html',
		}
	}]);