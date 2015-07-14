angular.module('gridTaskApp')
	.directive('hotkeyFormatter', [function () {
		return {
			restrict: 'A',
			scope: {
				func: '=hotkeyFormatter'
			},
			link: function (scope, element, attrs) {
				element.keypress("q", function (event) {
					if (event.ctrlKey) {
						scope.func();
					}
				});
			}
		}
	}]);