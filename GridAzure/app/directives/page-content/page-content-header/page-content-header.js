angular.module('gridTaskApp')
	.directive('pageContentHeader', [function () {
		return {
			restrict: 'EA',
			link: function (scope, element, attrs) {
				element.append(scope.contentOptions.contentHeaderTempalte);

				scope.$watch('contentOptions.contentHeaderTempalte', function (template) {
					element.html('');
					element.append(template);
				});
			}
		}
	}]);