angular.module('gridTaskApp')
	.directive('contentOptions', ['templatesPath', 'checkboxSelectConstants', function (templatesPath, checkboxSelectConstants) {
		return {
			restrict: 'E',
			controller: 'contentOptionsCtrl',
			scope: {
				selectedOptions: '=',
				isFiltrate: '=',
				refresh: '='
			},
			templateUrl: templatesPath + 'content-options.html'
		}
	}]);