angular.module('gridExpressApp')
	.directive('pageContentFooter', [function () {
		return {
			restrict: 'EA',
			link: function (scope, element, attrs) {
				element.append(scope.contentOptions.contentFooterTempalte);

				scope.$watch('contentOptions.contentFooterTempalte', function (template) {
					element.html('');
					element.append(template);
				});
			}
		}
	}]);