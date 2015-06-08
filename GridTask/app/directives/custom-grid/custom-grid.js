angular.module('gridTaskApp')
	.directive('customGrid', [function () {
		return {
			restrict: 'E',
			controller: 'customGridCtrl',
			scope: {},
			link: function (scope, element, attrs, controller) {
				var a = 1;
			}
		};
	}]);