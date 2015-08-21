angular.module('gridTaskApp')
	.directive('slider', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				sliderValue: '='
			},
			templateUrl: templatesPath + 'slider.html'
		}
	}]);