angular.module('gridTaskApp')
	.directive('page', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {},
			controller: 'pageCtrl',
			templateUrl: templatesPath + 'page.html'
		}
	}]);