angular.module('gridTaskApp')
	.directive('pageContent', ['templatesPath', '$compile', 'content', function (templatesPath, $compile, content) {
		return {
			restrict: 'E',
			scope: {
				data: '=gridData',
				contentOptions: '=',
				grid: '=',
				gridOptions: '='
			},
			templateUrl: templatesPath + 'page-content.html',
			link: function (scope, element) {
				var initializer = new Initializer(scope, element, content, templatesPath, $compile);
				initializer.init();

				scope.$watch('contentOptions', function (opt) {
					initializer.initContentOpt();
					initializer.refreshOpt();
				});

				scope.$watch('data', function (data) {
					if (data) {
						initializer.refreshData(data);
					}
				});
			}
		}
	}]);