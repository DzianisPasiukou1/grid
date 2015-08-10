angular.module('gridTaskApp')
	.directive('customGrid', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			controller: 'customGridCtrl',
			scope: {
				data: '=gridData',
				exportTo: '=',
				options: '=gridOptions'
			},
			require: ['?^gridData', '?^gridOptions'],
			templateUrl: templatesPath + 'directive-templates/custom-grid.html',
			link: function (scope, element, attrs) {
			}
		};
	}]);