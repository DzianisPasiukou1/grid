angular.module('gridTaskApp')
	.directive('history', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'history.html',
			controller: 'historyCtrl',
			scope: {
				entities: '=renderedRows',
				rowIndex: '='
			},
			link: function (scope, element, attrs) {
			}
		}
	}]);