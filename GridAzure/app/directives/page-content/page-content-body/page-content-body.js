angular.module('gridTaskApp')
	.directive('pageContentBody', [function () {
		return {
			restrict: 'E',
			link: function (scope, element, attrs) {
				element.append(scope.contentOptions.contentBodyTemplate);

				scope.$watch('contentOptions.contentBodyTemplate', function (template) {
					element.html('');
					element.append(template);
				});
			}
		}
	}]);