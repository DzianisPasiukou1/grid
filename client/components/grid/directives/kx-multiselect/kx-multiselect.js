angular.module('gridExpressApp')
	.directive('kxMultiselect', ['$timeout', function ($timeout) {
		return {
			restrict: 'A',
			scope: {
				options: '=kxMultiselect'
			},
			link: function (scope, element, attrs) {
				$timeout(function () {
					element.multiselect(scope.options);
				})
			}
		}
	}]);