﻿angular.module('gridTaskApp')
	.directive('pageContentCards', ['templatesPath', 'content', '$compile', function (templatesPath, content, $compile) {
		return {
			restrict: 'E',
			scope: {
				data: '=gridData',
				contentOptions: '=',
				gridOptions: '='
			},
			templateUrl: templatesPath + 'page-content-cards.html',
			link: function (scope, element) {
				var initializer = new Initializer(scope, element, content, templatesPath, $compile);
				initializer.init();

				scope.$watch('contentOptions', function (opt) {
					initializer.init();
					initializer.refreshOpt();
				});

				scope.$watch('data', function (data) {
					if (data) {
						initializer.refreshData(data);
					}
				});

				scope.$watch('data.length', function () {
					if (Array.isArray(scope.data)) {
						scope.grid.count = scope.data.length;
					}
				});

				scope.$watch('views.options.selected', function () {
					initializer.refreshOpt();
				})
			}
		};
	}])