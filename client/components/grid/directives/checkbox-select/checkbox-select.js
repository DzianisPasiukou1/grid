angular.module('gridExpressApp')
	.directive('checkboxSelect', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			scope: {
				options: '=checkboxSelect'
			},
			replace: true,
			templateUrl: templatesPath + 'directive-templates/checkbox-select.html',
			controller: 'checkboxSelectCtrl',
			link: function (scope, element, attrs) {
				scope.$watch('options.selected', function (value) {
					if (value) {
						if (value.isAll) {
							value.check = true;
						}
						else {
							value.check = false;
						}
					}
				});
			}
		}
	}]);