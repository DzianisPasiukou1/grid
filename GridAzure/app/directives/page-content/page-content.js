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
				initializeOpt(scope, element, content, templatesPath, $compile);

				scope.$watch('contentOptions', function (opt) {
					initializeOpt(scope, element, content, templatesPath, $compile);

					scope.contentOptions.filterOptions = content.filterOptions(scope.data);

					scope.contentOptions.searchOptions = content.searchOptions(scope.data);
					scope.contentOptions.searchOptions.selected = scope.contentOptions.searchOptions[0];

					scope.contentOptions.searchValue = '';

					if (scope.contentOptions.loading) {
						scope.contentOptions.isLoading = false;
					}
				});

				scope.$watch('data', function (data) {
					if (data) {
						scope.grid.count = scope.data.length;

						scope.contentOptions.filterOptions = content.filterOptions(data);

						scope.contentOptions.searchOptions = content.searchOptions(data);

						scope.contentOptions.searchValue = '';

						scope.contentOptions.searchOptions.selected = scope.contentOptions.searchOptions[0];

						var oldColumn = angular.copy(scope.gridOptions.columnDefs);

						scope.gridOptions.columnDefs = columnGenerator(data, templatesPath);

						if (!columnsCompare(oldColumn, scope.gridOptions.columnDefs)) {
							$compile($('custom-grid'))(scope);
						}

						for (var i = 0; i < data.length; i++) {
							var value = data[i];

							value.action = angular.copy(scope.gridOptions.actions);

							var details;

							if (scope.gridOptions.detailsCondition) {
								details = scope.gridOptions.detailsCondition(value, i);
							}

							if (details === undefined) {
								details = angular.copy(scope.gridOptions.detailsTemplate);
							}

							value.detailsTemplate = details;
							value.onCheck = function () {
								var isCheckArray = scope.data.filter(function (value) {
									if (value.isCheck) {
										return true;
									}
								});

								if (isCheckArray.length == 0) {
									scope.contentOptions.checks.options.selected = scope.contentOptions.checks.options.actions.noOne;
								}
								else if (isCheckArray.length == scope.data.length) {
									scope.contentOptions.checks.options.selected = scope.contentOptions.checks.options.actions.all;
								}
								else {
									scope.contentOptions.checks.options.selected = scope.contentOptions.checks.options.actions.marked;
								}
							}
						}

						if (scope.contentOptions.loading) {
							scope.contentOptions.isLoading = false;
						}
					}
				});
			}
		}
	}]);