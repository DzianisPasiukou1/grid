angular.module('gridTaskApp')
	.directive('splitButton', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				actions: '=',
				selected: '='
			},
			templateUrl: templatesPath + 'split-button.html',
			controller: 'splitButtonCtrl'
		}
	}]);