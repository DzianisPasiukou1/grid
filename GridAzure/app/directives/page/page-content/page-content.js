angular.module('gridTaskApp')
	.directive('pageContent', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {},
			controller: 'pageContentCtrl',
			templateUrl: templatesPath + 'page-content.html'
		}
	}]);