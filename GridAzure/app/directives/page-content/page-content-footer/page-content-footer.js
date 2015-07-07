﻿angular.module('gridTaskApp')
	.directive('pageContentFooter', [function () {
		return {
			restrict: 'E',
			link: function (scope, element, attrs) {
				element.append(scope.contentOptions.contentFooterTempalte);

				scope.$watch('contentOptions.contentFooterTempalte', function (template) {
					element.html('');
					element.append(template);
				});
			}
		}
	}]);