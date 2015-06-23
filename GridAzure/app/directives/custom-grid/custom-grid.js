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
						if (check.isAll) {
							scope.data.forEach(function (value) {
								value.isCheck = true;
							});
						}
						else if (check.isNoOne) {
							scope.data.forEach(function (value) {
								value.isCheck = false;
							});
						}
						else if (check.isMarked) {
							scope.data.forEach(function (value) {
							});
						}
						else if (check.isNotMarked) {
							scope.data.forEach(function (value) {
								value.isCheck = !value.isCheck;
							});
						}
					}
				});
			}
		};
	}]);