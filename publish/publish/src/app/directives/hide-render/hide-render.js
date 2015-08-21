angular.module('gridTaskApp')
	.directive('hideRender', ['$timeout', function ($timeout) {
		return {
			restrict: 'AC',
			priority: 1000,
			compile: function (element, attrs) {
				return {
					pre: function (scope, element, attrs) {
						element.hide();
					},
					post: function (scope, element, attrs) {
						element.show();
					}
				}

			}
		}
	}]);