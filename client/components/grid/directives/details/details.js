angular.module('gridExpressApp')
	.directive('details', ['$compile', '$timeout', function ($compile, $timeout) {
		return {
			restict: 'A',
			scope: {
				row: '=',
				detailsClass: '='
			},
			link: function (scope, element, attrs) {
				element.click(function () {
					scope.row.orig.actions.isToggle = !scope.row.orig.actions.isToggle;

					scope.row.orig.actions.setToggle(scope.row.orig, scope.row.orig.actions.isToggle, scope.detailsClass);
				});
			}
		}
	}]);
