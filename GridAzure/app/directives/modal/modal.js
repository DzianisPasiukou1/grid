angular.module('gridTaskApp')
	.directive('modal', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'modal.html',
			scope: {
				entities: '=renderedRows',
				rowIndex: '=',
				isModal: '='
			},
			controller: 'modalCtrl',
			link: function (scope, element, attrs) {
			}
		}
	}]);