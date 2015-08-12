angular.module('gridExpressApp')
	.directive('dropdown', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			scope: {
				options: '=dropdown'
			},
			controller: 'dropdownCtrl',
			templateUrl: templatesPath + 'directive-templates/dropdown.html',
			link: function (scope, element, attrs) {
			}
		}
	}]);