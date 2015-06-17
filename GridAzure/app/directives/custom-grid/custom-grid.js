angular.module('gridTaskApp')
	.directive('customGrid', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			controller: 'customGridCtrl',
			scope: {
				data: '=gridData',
				exportTo: '=',
				filters: '='
			},
			templateUrl: templatesPath + 'custom-grid.html',
			link: function (scope, element, attrs, controller) {
				scope.$watch('filters.check', function (check) {
					if (check) {
						if (check.label == 'All') {
							scope.filterData = scope.data;
							return;
						}

						scope.filterData = scope.data.filter(function (value) {
							if (check) {
								if (value.isCheck == check.value) {
									return value;
								}
							}
							else {
								return value;
							}
						});
					}
				});
			}
		};
	}]);