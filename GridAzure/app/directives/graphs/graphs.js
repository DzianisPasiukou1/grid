angular.module('gridTaskApp')
	.directive('graphs', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'A',
			scope: {
				graphs: '='
			},
			templateUrl: templatesPath + 'graphs.html',
			link: function (scope, element, attrs) {

			}
		}
	}]);