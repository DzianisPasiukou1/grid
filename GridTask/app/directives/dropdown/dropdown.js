angular.module('gridTaskApp')
	.directive('dropdown', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				actions: '=',
				selected: '='
			},
			controller: 'dropdownCtrl',
			templateUrl: templatesPath + 'dropdown.html'
		}
	}]);