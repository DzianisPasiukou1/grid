angular.module('gridTaskApp')
	.directive('customUiGrid', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			scope: {
				data: '=gridData',
				options: '=gridOptions',
				contentOptions: '='
			},
			controller: 'customUiGridCtrl',
			require: ['?^gridData', '?^gridOptions'],
			templateUrl: templatesPath + 'directive-templates/custom-ui-grid.html',
			link: function (scope, element, attrs) {
			}
		}
	}]);