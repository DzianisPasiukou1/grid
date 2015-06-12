angular.module('gridTaskApp')
	.directive('search', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				searchValue: '='
			},
			templateUrl: templatesPath + 'search.html',
		}
	}]);