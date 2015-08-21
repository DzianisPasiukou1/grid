angular.module('gridTaskApp')
	.directive('contentOptions', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			controller: 'contentOptionsCtrl',
			scope: {
				options: '='
			},
			templateUrl: templatesPath + 'directive-templates/content-options.html'
		}
	}]);