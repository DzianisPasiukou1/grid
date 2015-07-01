angular.module('gridTaskApp')
	.directive('pageContent', ['templatesPath', '$compile', function (templatesPath, $compile) {
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
				if (scope.contentOptions === undefined) {
					scope.contentOptions = {};
				}

				if (scope.contentOptions.loading) {
					scope.contentOptions.isLoading = true;
				}

				if (scope.contentOptions.checks === undefined) {
					scope.contentOptions.checks = {
						options: {
							actions: {
								all: { label: 'All', isAll: true },
								noOne: { label: 'No one', isNoOne: true },
								marked: { label: 'Marked', isMarked: true },
								notMarked: { label: 'Not marked', isNotMarked: true }
							},
							callback: function (check) {
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
							}
						}
					};
				}

				if (scope.contentOptions.mores === undefined) {
					scope.contentOptions.mores = {
						options:
						{
							label: 'More',
							values: [{ label: 'View reports' }],
							isMenu: true
						}
					};
				}

				if (scope.contentOptions.loading) {
					element.append('<loading ng-show="contentOptions.isLoading"></loading>');
					$compile($('loading'))(scope);
				}

				if (scope.exports === undefined) {
					scope.exports = {
						options: {
							label: 'Export to: ',
							values: [{ label: 'Excel', isExcel: true }, { label: 'Pdf', isPdf: true }],
							callback: function (action) {
								scope.export = action;
							}
						}
					};
				}

				if (scope.views === undefined) {
					scope.views = {
						options:
							{
								label: 'View: ',
								values: [{ label: 'Grid', isGrid: true, isTiles: false }, { label: 'Tiles', isGrid: false, isTiles: true }],
								callback: function (action) {
									scope.view = action;
								}
							}
					};
				}

				if (scope.contentOptions.filtrate === undefined) {
					scope.contentOptions.filtrate = function (value) {
						scope.gridOptions.filterOptions.filterText = convertFilterOptions(value).filterText;
					};
				}

				if (scope.contentOptions.search === undefined) {
					scope.contentOptions.search = function (value) {
						scope.gridOptions.filterOptions.filterText = value;
					}
				}

				if (scope.contentOptions.refresh === undefined) {
					scope.contentOptions.refresh = function () {
						scope.contentOptions.refreshCallback();

						scope.grid.count = scope.data.length;
					};
				}

				if (scope.contentOptions.withUpload) {
					scope.contentOptions.isDynamic = true;

					scope.contentOptions.upload = function (data) {
						scope.data = data;

						scope.grid.count = scope.data.length;

						scope.$apply();
					}
				}

				if (scope.grid === undefined) {
					scope.grid = {};

					scope.grid.name = 'Default grid';
					if (Array.isArray(scope.data)) {
						scope.grid.count = scope.data.length;
					}
				}

				if (scope.gridOptions === undefined) {
					scope.gridOptions = {};
				}

				if (scope.gridOptions.data === undefined) {
					scope.gridOptions.data = 'data';
				}

				if (scope.gridOptions.multiSelect === undefined) {
					scope.gridOptions.multiSelect = false;
				}

				if (scope.gridOptions.rowTemplate === undefined) {
					scope.gridOptions.rowTemplate = templatesPath + 'row-templates/row-with-detalis.html';
				}

				if (scope.gridOptions.afterSelectionChange === undefined) {
					scope.gridOptions.afterSelectionChange = function (rowitem, event) {
						for (var i = 0; i < scope.data.length; i++) {
							scope.data[i].action.isShow = false;
						}

						rowitem.entity.action.isShow = rowitem.selected;
					};
				}

				if (scope.gridOptions.filterOptions === undefined) {
					scope.gridOptions.filterOptions = { filterText: '' };
				}

				if (scope.gridOptions.rowHeight === undefined) {
					scope.gridOptions.rowHeight = 60;
				}

				if (scope.gridOptions.headerRowHeight === undefined) {
					scope.gridOptions.headerRowHeight = 40;
				}

				if (scope.gridOptions.showFooter == undefined) {
					scope.gridOptions.showFooter = 40;
				}

				if (scope.gridOptions.showFooter === undefined) {
					scope.gridOptions.showFooter = true;
				}

				if (scope.gridOptions.footerRowHeight === undefined) {
					scope.gridOptions.footerRowHeight = 30;
				}

				if (scope.gridOptions.footerTemplate === undefined) {
					scope.gridOptions.footerTemplate = templatesPath + 'grid-footer.html';
				}

				if (scope.gridOptions.columnDefs === undefined) {
					scope.gridOptions.columnDefs = columnGenerator(scope.data, templatesPath);
				}

				if (scope.gridOptions.plugins === undefined) {
					scope.gridOptions.plugins = [new ngGridCanvasHeightPlugin()];
				}

				scope.$watch('data', function (data) {
					if (data) {
						scope.contentOptions.filterOptions = function () {
							var options = [];

							if (Array.isArray(data) && data[0])
								for (var prop in data[0]) {
									options.push({ label: prop, isColumn: true });
								}
							return options;
						}();

						scope.contentOptions.searchOptions = function () {
							var options = [];
							options.push({ label: 'everywhere', isEverywhere: true });

							if (Array.isArray(data) && data[0]) {
								for (var prop in data[0]) {
									options.push({ label: prop, isColumn: true });
								}
							}

							return options;
						}();

						scope.contentOptions.searchValue = '';

						if (scope.contentOptions.isDynamic) {
							scope.gridOptions.columnDefs = columnGenerator(data, templatesPath);
						}

						data.map(function (value) {
							value.action = {
								values: [{
									label: 'More',
									isMore: true,
									options: {
										label: 'Actions',
										values: [{ label: 'Edit' }, { label: 'Copy' }, { label: 'History' }, { label: 'Delete' }],
										isMenu: true
									}
								}],
								isShow: false
							};
							value.detailsTemplate = templatesPath + 'details.html';
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
						});

						$compile($('custom-grid'))(scope);
						$compile($('content-options'))(scope);
					}
				});

			}
		}
	}]);