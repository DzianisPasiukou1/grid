angular.module('gridTaskApp')
	.directive('dropdown', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				actions: '=dropdown'
			},
			templateUrl: templatesPath + 'dropdown.html'
		}
	}]);