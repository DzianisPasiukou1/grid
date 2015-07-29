angular.module('gridTaskApp')
	.directive('contentOptionsD3', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			controller: 'contentOptionsD3Ctrl',
			scope: {
				options: '=',
				startDate: '=',
				endDate: '=',
				dateRange: '='
			},
			templateUrl: templatesPath + 'directive-templates/content-options-d3.html'
		}
	}]);