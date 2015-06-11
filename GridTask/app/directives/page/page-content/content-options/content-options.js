angular.module('gridTaskApp')
	.directive('contentOptions', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {},
			templateUrl: templatesPath + 'content-options.html',
			controller: 'contentOptionsCtrl'
		}
	}]);