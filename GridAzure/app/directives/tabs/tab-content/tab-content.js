angular.module('gridTaskApp')
	.directive('tabContent', [function () {
		return {
			restrict: 'E',
			scope: {
				tabOptions: '='
			},
			link: function (scope, element, attrs) {
				if (scope.tabOptions.template) {
					$.get(scope.tabOptions.template, function (result) {
						element.append(result);
					});
				}
			}
		}
	}])