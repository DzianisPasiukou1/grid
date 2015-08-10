angular.module('gridTaskApp')
	.directive('contentOptionsD3', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			controller: 'contentOptionsD3Ctrl',
			scope: {
				options: '=',
				filters: '=',
				loading: '=',
				onDataRangeChanged: '=',
				past: '='
			},
			templateUrl: templatesPath + 'directive-templates/CONTENT-options-d3.html'
		}
	}]);