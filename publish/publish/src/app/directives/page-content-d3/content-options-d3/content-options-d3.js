angular.module('gridTaskApp')
	.directive('contentOptionsD3', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			controller: 'contentOptionsD3Ctrl',
			scope: {
				options: '=',
				filters: '=',
				loading: '=',
				onDataRangeChanged: '=',
				past: '='
			},
			templateUrl: templatesPath + 'directive-templates/content-options-d3.html'
		}
	}]);