angular.module('gridExpressApp')
	.directive('rowCheck', [function () {
		return {
			restrict: 'EAC',
			scope: {
				value: '=rowCheck'
			},
			link: function (scope, element, attrs) {
				scope.$watch('value.orig.actions.isCheck', function (value) {
					if (value) {
						element.parent().addClass('checked');
					}
					else {
						element.parent().removeClass('checked');
					}
				});
			}
		}
	}]);