angular.module('gridTaskApp')
	.directive('filter', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			scope: {
				filterOptions: '=filter',
				filtrate: '=onFiltrate'
			},
			controller: 'filterCtrl',
			templateUrl: templatesPath + 'directive-templates/filter.html',
			link: function (scope, element, attrs) {
			}
		}
	}]);
