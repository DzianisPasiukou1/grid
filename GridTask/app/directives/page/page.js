angular.module('gridTaskApp')
	.directive('page', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'A',
			scope: {},
			templateUrl: templatesPath + 'page.html'
		}
	}]);