angular.module('gridTaskApp')
	.directive('customGrid', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			controller: 'customGridCtrl',
			scope: {
				data: '=gridData',
				exportTo: '=',
				filters: '=',
				isFiltrate: '='
			},
			templateUrl: templatesPath + 'custom-grid.html',
			link: function (scope, element, attrs, controller) {
				scope.$watch('filters.check', function (check) {
					if (check) {
						if (check.label == 'All') {
							scope.data.forEach(function (value) {
								value.isCheck = true;
							});
						}
						else if (check.label == 'No one') {
							scope.data.forEach(function (value) {
								value.isCheck = false;
							});
						}
					}
				});
			}
		};
	}]);