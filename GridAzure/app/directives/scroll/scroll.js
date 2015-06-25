angular.module('gridTaskApp')
	.directive('scroll', [function () {
		return {
			restrict: 'A',
			scope: {
				rows: '=renderedRows',
				selectedItems: '='
			},
			compile: function (element, attrs) {
				return {
					post: function (scope, element, attrs) {
						scope.$watch('rows', function (value) {

						});
					}
				}
			}
		}
	}]);