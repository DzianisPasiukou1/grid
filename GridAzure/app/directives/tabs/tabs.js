angular.module('gridTaskApp')
	.directive('tabs', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			controller: 'tabsCtrl',
			templateUrl: templatesPath + 'tabs.html'
		}
	}])