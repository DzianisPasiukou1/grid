angular.module('gridExpressApp')
	.directive('pageContent', ['templatesPath', 'CONTENT', '$compile', function (templatesPath, CONTENT, $compile) {
		return {
			restrict: 'EA',
			scope: {
				data: '=gridData',
				contentOptions: '=',
				grid: '=',
				gridOptions: '=',
				uiGridOptions: '='
			},
			templateUrl: templatesPath + 'directive-templates/page-content.html',
			link: function (scope, element) {
				var initializer = new Initializer(scope, element, CONTENT, templatesPath, $compile);

				scope.$watch('contentOptions', function (opt) {
					initializer.init();
					initializer.refreshOpt();
				});

				scope.$watch('data', function (data) {
					if (Array.isArray(data)) {
						initializer.refreshData(data);
					}
				});

				scope.$watch('data.length', function () {
					if (Array.isArray(scope.data)) {
						scope.grid.count = scope.data.length;
					}
				});

				scope.$watch('views.options.selected', function (value) {
					if (value) {
						initializer.refreshOpt();

						if (value.isGrid) {
							initializer.refreshCheckCallback();
						}
					}
				})
			}
		}
	}]);