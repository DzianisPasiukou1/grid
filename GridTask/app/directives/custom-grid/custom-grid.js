angular.module('gridTaskApp')
	.directive('customGrid', function (templatesPath) {
		return {
			restrict: 'E',
			controller: 'customGridCtrl',
			scope: {
				data: '='
			},
			templateUrl: templatesPath + 'custom-grid.html',
			link: function (scope, element, attrs, controller) {
			}
		};
	});