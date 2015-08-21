angular.module('gridTaskApp')
	.directive('graphs', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			scope: {
				graphs: '='
			},
			templateUrl: templatesPath + 'directive-templates/graphs.html',
			link: function (scope, element, attrs) {
			}
		}
	}]);