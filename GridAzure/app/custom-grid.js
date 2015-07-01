///#source 1 1 /app/app.js
angular.module('gridTaskApp', ['ngGrid'])
	.value('templatesPath', 'app/templates/')
	.value('jsonPath', 'data/');
///#source 1 1 /app/constants/checkbox-select-constants.js
angular.module('gridTaskApp')
	 .constant("checkboxSelectConstants",
	 {
	 	values: {
	 		all: { label: 'All', isAll: true },
	 		noOne: { label: 'No one', isNoOne: true },
	 		marked: { label: 'Marked', isMarked: true },
	 		notMarked: { label: 'Not marked', isNotMarked: true }
	 	}
	 });
///#source 1 1 /app/constants/grid-constants.js
angular.module('gridTaskApp')
	 .constant("constantOfData", {
	 	count: 100,
	 	startDate: new Date(2000, 1, 1)
	 });
///#source 1 1 /app/directives/checkbox-select/checkbox-select-controller.js
angular.module('gridTaskApp')
	.controller('checkboxSelectCtrl', ['$scope', function ($scope) {
		if (!$scope.options.showClass) {
			$scope.options.showClass = 'glyphicon-menu-up'
		}
		if (!$scope.options.hideClass) {
			$scope.options.hideClass = 'glyphicon-menu-down'
		}

		$scope.options.selected = $scope.options.actions.noOne;

		if ($scope.options.callback) {
			$scope.options.callback($scope.options.selected);
		}
		$scope.options.selected.check = false;

		$scope.select = function (action) {
			$scope.options.selected = action;

			if (action.isAll) {
				$scope.options.selected.check = true;
			}
			else {
				$scope.options.selected.check = false;
			}

			if ($scope.options.callback) {
				$scope.options.callback(action);
			}
		}

		$scope.checked = function (value) {
			if (value) {
				$scope.options.selected = $scope.options.actions.all;
				$scope.options.selected.check = true;
			}
			else {
				$scope.options.selected = $scope.options.actions.noOne;
				$scope.options.selected.check = false;
			}

			if ($scope.options.callback) {
				$scope.options.callback($scope.options.selected);
			}
		};
	}]);
///#source 1 1 /app/directives/checkbox-select/checkbox-select.js
angular.module('gridTaskApp')
	.directive('checkboxSelect', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				options: '='
			},
			templateUrl: templatesPath + 'checkbox-select.html',
			controller: 'checkboxSelectCtrl',
			link: function (scope, element, attrs) {
				element.find('ul').hide();
				element.find('span').addClass(scope.options.hideClass);

				element.click(function () {
					if (element.find('ul').is(':visible')) {
						element.find('ul').hide();
						element.find('.glyphicon').addClass(scope.options.hideClass);
						element.find('.glyphicon').removeClass(scope.options.showClass);
					}
					else {
						element.find('ul').show();
						element.find('.glyphicon').removeClass(scope.options.hideClass);
						element.find('.glyphicon').addClass(scope.options.showClass);
					}
				});

				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						element.find('ul').hide();
						element.find('.glyphicon').addClass(scope.options.hideClass);
						element.find('.glyphicon').removeClass(scope.options.showClass);
					}
				})

				scope.$watch('options.selected', function (value) {
					if (value.isMarked || value.isNotMarked) {
						element.find('.checkbox-select__input-control__span').addClass('marked');
					}
					else {
						element.find('.checkbox-select__input-control__span').removeClass('marked');
					}

					if (value.isAll) {
						value.check = true;
					}
					else {
						value.check = false;
					}
				});
			}
		}
	}]);
///#source 1 1 /app/directives/custom-grid/custom-grid-controller.js
angular.module('gridTaskApp')
	.controller('customGridCtrl', ['$scope', 'templatesPath', function ($scope, templatesPath) {
		
		function plugin() {
			//if ($scope.exportTo.label == 'Excel') {
			//	$scope.options.plugins.push(new ngGridCsvExportPlugin());
			//}
		}

		plugin();
	}]);
///#source 1 1 /app/directives/custom-grid/custom-grid.js
angular.module('gridTaskApp')
	.directive('customGrid', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			controller: 'customGridCtrl',
			scope: {
				data: '=gridData',
				exportTo: '=',
				options: '=gridOptions'
			},
			templateUrl: templatesPath + 'custom-grid.html',
			link: function (scope, element, attrs, controller) {
			}
		};
	}]);
///#source 1 1 /app/directives/custom-grid/row-check/row-check.js
angular.module('gridTaskApp')
	.directive('rowCheck', [function () {
		return {
			restrict: 'A',
			scope: {
				value: '=rowCheck'
			},
			link: function (scope, element, attrs) {
				scope.$watch('value.entity.isCheck', function (value) {
					if (value) {
						element.parent().addClass('checked');
					}
					else {
						element.parent().removeClass('checked');
					}
				});
			}
		}
	}]);
///#source 1 1 /app/directives/details/details-template.js
angular.module('gridTaskApp')
	.directive('detailsTemplate', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'A',
			compile: function (element, attrs) {
				return {
					pre: function (scope, element, attrs) {

						if (scope.row.entity.detailsTemplate) {
							$.get(scope.row.entity.detailsTemplate, function (result) {
								element.append(result);
							});
						}

						element.hide();

						scope.$watch('row.entity.isToggle', function (value) {
							if (value) {
								element.show();

								scope.row.isDetails = true;

								if (scope.row.elm.height() != 0) {
									element.css('top', scope.row.elm.height() + 'px');
								}
								else {
									element.css('top', 78 + 'px');
								}

								if (!scope.row.entity.step) {
									scope.row.entity.step = 0;
								}
								else {
									scope.row.entity.step = 276;
								}
								scope.row.entity.step = scope.row.elm.context.scrollHeight;

								scope.renderedRows.forEach(function (value) {
									if (value.$$hashKey != scope.row.$$hashKey) {
										var totalWidth = element.height();

										if (parseInt(value.$$hashKey.replace('object:', '')) > parseInt(scope.row.$$hashKey.replace('object:', ''))) {
											value.elm.css('top', value.elm.position().top + totalWidth + 'px');
										}
									}
								});
							}
							else {
								element.hide();
							}
						})
					}
				}
			}
		}
	}]);
///#source 1 1 /app/directives/details/details.js
angular.module('gridTaskApp')
	.directive('details', ['$compile', function ($compile) {
		return {
			restict: 'A',
			scope: {
				row: '=',
				rowHeight: '=',
				detailsClass: '=detailsClass',
				renderedRows: '=',
				isToggle: '=',
				entity: '='
			},
			link: function (scope, element, attrs) {

				$('.ngViewport').scroll(function () {
					if (scope.row.entity.isToggle) {
						var elm;

						for (var i = 0; i < scope.renderedRows.length; i++) {
							if (!scope.renderedRows[i].entity.action.isShow) {
								scope.renderedRows[i].elm.removeClass('selected');
							}
						}

						for (var i = 0; i < scope.renderedRows.length; i++) {
							if (angular.equals(scope.renderedRows[i].entity, scope.row.entity)) {
								elm = scope.renderedRows[i].elm;
								break;
							}
						}

						if (elm) {
							if (elm.context.scrollHeight > 250) {
								var step = elm.position().top + elm.context.scrollHeight;
							}
							else {
								var step = elm.position().top + 296;
							}

							var top = Math.round(elm.position().top);
							var children = $(elm).parent().children();

							if (elm.context.scrollHeight != 0) {
								$(scope.row.elm).css('height', elm.context.scrollHeight + 'px');
							}
							else {
								$(scope.row.elm).css('height', 296 + 'px');
							}
							for (var i = 0; i < children.length; i++) {
								if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
									$(children[i]).css('top', step + 'px');

									step += scope.rowHeight;
								}
							}
						}
					}
				});

				element.click(function () {

					scope.$parent.$parent.data.forEach(function (value) {
						if (!angular.equals(value, scope.row.entity) && value.isToggle) {
							value.isToggle = false;

							scope.renderedRows.forEach(function (row) {
								row.elm.removeClass(scope.detailsClass);

								var step = row.elm.position().top + row.elm.context.scrollHeight;

								if (!scope.row.entity.step) {
									scope.row.entity.step = 0;
								}
								scope.row.entity.step = row.elm.context.scrollHeight;

								var top = Math.round(row.elm.position().top);
								var children = $(row.elm).parent().children();

								$(row.elm).css('height', scope.rowHeight + 'px');
								step = row.elm.position().top + scope.rowHeight;

								for (var i = 0; i < children.length; i++) {
									if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
										$(children[i]).css('top', step + 'px');
										step += scope.rowHeight;
									}
								}
							});
						}
					});

					scope.renderedRows.forEach(function (value) {

						if (!angular.equals(value.entity, scope.row.entity) && value.entity.isToggle) {
							value.entity.isToggle = false;

							value.elm.removeClass(scope.detailsClass);

							var step = value.elm.position().top + value.elm.context.scrollHeight;

							if (!scope.row.entity.step) {
								scope.row.entity.step = 0;
							}
							scope.row.entity.step = row.elm.context.scrollHeight;

							var top = Math.round(value.elm.position().top);
							var children = $(value.elm).parent().children();

							$(value.elm).css('height', scope.rowHeight + 'px');
							step = value.elm.position().top + scope.rowHeight;

							for (var i = 0; i < children.length; i++) {
								if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
									$(children[i]).css('top', step + 'px');
									step += scope.rowHeight;
								}
							}
						}
					});

					scope.row.entity.isToggle = !scope.row.entity.isToggle;
					scope.isToggle = scope.row.entity.isToggle;
					scope.entity = angular.copy(scope.row.entity);

					if (scope.row.entity.isToggle) {
						scope.row.elm.addClass(scope.detailsClass);
						scope.row.elm.addClass('selected');
					}
					else {
						scope.row.elm.removeClass(scope.detailsClass);
					}

					var step = scope.row.elm.position().top + scope.row.elm.context.scrollHeight;

					if (!scope.row.entity.step) {
						scope.row.entity.step = 0;
					}
					scope.row.entity.step = scope.row.elm.context.scrollHeight;

					var top = Math.round(scope.row.elm.position().top);
					var children = $(scope.row.elm).parent().children();

					if (scope.row.entity.isToggle) {

						$(scope.row.elm).css('height', scope.row.elm.context.scrollHeight + 'px');

						for (var i = 0; i < children.length; i++) {
							if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
								$(children[i]).css('top', step + 'px');
								step += scope.rowHeight;
							}
						}
					} else {
						$(scope.row.elm).css('height', scope.rowHeight + 'px');
						step = scope.row.elm.position().top + scope.rowHeight;

						for (var i = 0; i < children.length; i++) {
							if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
								$(children[i]).css('top', step + 'px');
								step += scope.rowHeight;
							}
						}
					}
				});
			}
		}
	}]);

///#source 1 1 /app/directives/dropdown/dropdown-controller.js
angular.module('gridTaskApp')
	.controller('dropdownCtrl', ['$scope', function ($scope) {
		if (!$scope.options.showClass) {
			$scope.options.showClass = 'glyphicon-menu-up'
		}
		if (!$scope.options.hideClass) {
			$scope.options.hideClass = 'glyphicon-menu-down'
		}

		$scope.selected = $scope.options.values[0];

		if ($scope.options.callback) {
			$scope.options.callback($scope.selected);
		}

		$scope.select = function (action) {
			$scope.selected = action;

			if ($scope.options.callback) {
				$scope.options.callback(action);
			}
		}
	}]);
///#source 1 1 /app/directives/dropdown/dropdown.js
angular.module('gridTaskApp')
	.directive('dropdown', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				options: '=dropdownOptions'
			},
			controller: 'dropdownCtrl',
			templateUrl: templatesPath + 'dropdown.html',
			link: function (scope, element, attrs) {
				element.find('ul').hide();
				element.find('span').addClass(scope.options.hideClass);

				element.click(function () {
					if (element.find('ul').is(':visible')) {
						element.find('ul').hide();
						element.find('span').addClass(scope.options.hideClass);
						element.find('span').removeClass(scope.options.showClass);
					}
					else {
						element.find('ul').show();
						element.find('span').removeClass(scope.options.hideClass);
						element.find('span').addClass(scope.options.showClass);
					}
				});

				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						element.find('ul').hide();
						element.find('span').addClass(scope.options.hideClass);
						element.find('span').removeClass(scope.options.showClass);
					}
				})
			}
		}
	}]);
///#source 1 1 /app/directives/filter/filter-controller.js
angular.module('gridTaskApp')
	.controller('filterCtrl', ['$scope', function ($scope) {
		$scope.listState = false;

		$scope.filterClick = function () {
			$scope.listState = !$scope.listState;

			if ($scope.listState) {
				$scope.filterOptions.forEach(function (opt) {
					opt.filter = "";
				});
			}
		};

		$scope.showRecords = function () {
			$scope.listState = false;

			$scope.filtrate($scope.filterOptions);
		}
	}]);
///#source 1 1 /app/directives/filter/filter.js
angular.module('gridTaskApp')
	.directive('filter', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				listState: '=',
				filterOptions: '=options',
				filtrate: '='
			},
			controller: 'filterCtrl',
			templateUrl: templatesPath + 'filter.html',
			link: function (scope, element, attrs) {
				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						scope.listState = false;
						scope.$apply();
					}
				})

				element.find('span.expand').addClass('glyphicon-menu-down');

				scope.$watch('listState', function (value) {
					if (value) {
						element.addClass('filter-selected');
						element.find('span.expand').removeClass('glyphicon-menu-down');
						element.find('span.expand').addClass('glyphicon-menu-up');
					}
					else {
						element.removeClass('filter-selected');
						element.find('span.expand').addClass('glyphicon-menu-down');
						element.find('span.expand').removeClass('glyphicon-menu-up');
					}
				});
			}
		}
	}]);
///#source 1 1 /app/directives/filter/filter-list/filter-list-controller.js
angular.module('gridTaskApp')
	.controller('filterListCtrl', ['$scope', function ($scope) {
		$scope.filter = function () {
			$scope.isFiltrate = true;
		}
	}]);
///#source 1 1 /app/directives/filter/filter-list/filter-list.js
angular.module('gridTaskApp')
	.directive('filterList', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'filter-list.html',
			controller: 'filterListCtrl',
			link: function (scope, element, attrs) {
			}
		}
	}]);
///#source 1 1 /app/directives/grid-menu/grid-menu-controller.js
angular.module('gridTaskApp')
	.controller('gridMenuCtrl', ['$scope', function ($scope) {
		$scope.options = {
			isMenu: true,
			label: '',
			values: [],
			callback: function (action) {
				if (action) {
					for (var i = $scope.columns.length - 2; i > 0 ; i--) {
						if ($scope.columns[i].visible) {
							$scope.columns[i].toggleVisible();
							action.element.toggleVisible();

							this.values.splice(this.values.indexOf(action), 1);
							this.values.push({ label: $scope.columns[i].field, element: $scope.columns[i] });
							break;
						}
					}
				}
			}
		};
	}]);
///#source 1 1 /app/directives/grid-menu/grid-menu.js
angular.module('gridTaskApp')
	.directive('gridMenu', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'grid-menu.html',
			controller: 'gridMenuCtrl',
			link: function (scope, element, attrs) {

				scope.$watch('columns', function (value) {
					if (Array.isArray(value) && value.length > 0) {

						var totalWidth = value.reduce(function (a, b) {
							return a + b.minWidth;
						}, 0);

						if ($(window).width() < totalWidth) {
							for (var i = value.length - 2; i > 1; i--) {
								if (value[i].visible) {
									value[i].toggleVisible();
									totalWidth -= value[i].minWidth;
									scope.options.values.push({ label: value[i].field, element: value[i] });
								}
								if ($(window).width() > totalWidth) {
									break;
								}
							}
						}

						if (scope.options.values.length > 0) {
							scope.isShow = true;
						}

						$(window).resize(function () {
							var totalWidth = value.reduce(function (a, b) {
								if (b.visible) {
									return a + b.minWidth;
								} else {
									return a;
								}
							}, 0);

							if ($(window).width() < totalWidth) {
								for (var i = value.length - 2; i > 1; i--) {
									if (value[i].visible) {
										value[i].toggleVisible();
										totalWidth -= value[i].minWidth;
										scope.options.values.push({ label: value[i].field, element: value[i] });
									}
									if ($(window).width() > totalWidth) {
										break;
									}
								}
							}
							else {
								for (var i = 2; i < value.length - 1; i++) {
									if (!value[i].visible) {
										value[i].toggleVisible();
										totalWidth += value[i].minWidth;
										scope.options.values.splice(scope.options.values.indexOf(value[i]), 1);

										if ($(window).width() < totalWidth) {
											value[i].toggleVisible();
											totalWidth -= value[i].minWidth;

											var isExist = false;
											for (var j = 0; j < scope.options.values.length; j++) {
												if (scope.options.values[j].label == value[i].field) {
													isExist = true;
												}
											}
											if (!isExist) {
												scope.options.values.push({ label: value[i].field, element: value[i] });
											}
											else {
												scope.options.values = [];

												for (var j = 0; j < value.length; j++) {
													if (!value[j].visible) {
														scope.options.values.push({ label: value[j].field, element: value[j] });
													}
												}
											}
											break;
										}
									}

								}
							}

							if (scope.options.values.length > 0) {
								scope.isShow = true;
							}
							else {
								scope.isShow = false;
							}
						});
					}
				});
			}
		}
	}]);
///#source 1 1 /app/directives/loading/loading.js
angular.module('gridTaskApp')
	.directive('loading', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'loading.html',
			link: function (scope, element, attrs) {
				element.center();

				element.css("top", element.parent().find('.page-content').position().top + 200 + 'px');
				element.css("left", element.position().left - 100 + 'px');
				//element.css('height', element.parent().find('.page-content').height() + 'px');
				//element.css('width', element.parent().find('.page-content').width() + 'px');

				scope.$watch('isLoading', function (value) {
					var grid = element.parent().find('custom-grid');

					if (grid) {
						if (value) {
							//grid.parent().append('<div id="disabled__grid"></div>');
							//grid.parent().find('#disabled__grid').css('height', grid.find('.custom-grid').height() + grid.find('.custom-grid').position().top + 'px');
							//grid.parent().find('#disabled__grid').css('width', grid.find('.custom-grid').width() + 'px');
						}
						else {
							//grid.parent().find('#disabled__grid').remove();
						}
					}
				});
			}
		}
	}]);
///#source 1 1 /app/directives/page-content/page-content.js
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
///#source 1 1 /app/directives/page-content/content-options/content-options-controller.js
angular.module('gridTaskApp')
	.controller('contentOptionsCtrl', ['$scope', function ($scope) {
		$scope.$watch('options.searchValue', function (value) {
			if (!$scope.options.show) {
				return;
			}

			if ($scope.options.show.label == 'everywhere') {
				$scope.options.search(value);
			} else {
				$scope.options.search($scope.options.show.label + ':' + value);
			}
		});

	}]);
///#source 1 1 /app/directives/page-content/content-options/content-options.js
angular.module('gridTaskApp')
	.directive('contentOptions', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			controller: 'contentOptionsCtrl',
			scope: {
				options: '='
			},
			templateUrl: templatesPath + 'content-options.html'
		}
	}]);
///#source 1 1 /app/directives/resize-on/resize-on.js
angular.module('gridTaskApp')
	.directive('resizeOn', [function () {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {
				element.css('width', (element.parent().position().left + element.parent().width()) + 'px');

				if (element.width() < element.css('min-width').replace('px', '')) {
					element.css('right', 'auto');
					element.css('width', '450px');
				}
				else {
					element.css('right', '0');
				}

				$(window).resize(function () {
					element.css('width', (element.parent().position().left + element.parent().width()) + 'px');

					if (element.width() < element.css('min-width').replace('px', '')) {
						element.css('right', 'auto');
						element.css('width', '450px');
					} else {
						element.css('right', '0');
					}
				});
			}
		}
	}]);
///#source 1 1 /app/directives/scroll/scroll.js
angular.module('gridTaskApp')
	.directive('scroll', [function () {
		return {
			restrict: 'A',
			scope: {
				rows: '=renderedRows',
				selectedItems: '='
			},
			compile: function (element, attrs) {
				return {
					post: function (scope, element, attrs) {
						scope.$watch('rows', function (value) {

						});
					}
				}
			}
		}
	}]);
///#source 1 1 /app/directives/search/search-controller.js
angular.module('gridTaskApp')
	.controller('searchCtrl', ['$scope', function ($scope) {
		$scope.edited = false;

		$scope.focus = function () {
			$scope.edited = true;
		};

		$scope.blur = function () {
			$scope.edited = false;
		}

		$scope.clear = function () {
			$scope.searchValue = '';
		};
	}]);
///#source 1 1 /app/directives/search/search.js
angular.module('gridTaskApp')
	.directive('search', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				searchValue: '=',
				edited: '='
			},
			controller: 'searchCtrl',
			templateUrl: templatesPath + 'search.html',
			link: function (scope, element, attrs) {
				element.find('.search-clear').hide();
				element.find('.search-span').show();


				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						element.find('.search-clear').hide();
						element.find('.search-span').show();
					}
				})

				element.focusin(function () {
					element.find('.search-clear').show();
					element.find('.search-span').hide();
				})
			}
		}
	}]);
///#source 1 1 /app/directives/slider/slider.js
angular.module('gridTaskApp')
	.directive('slider', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				sliderValue: '='
			},
			templateUrl: templatesPath + 'slider.html'
		}
	}]);
///#source 1 1 /app/directives/split-button/split-button-controller.js
angular.module('gridTaskApp')
	.controller('splitButtonCtrl', ['$scope', function ($scope) {
		$scope.selected = $scope.actions[0];

		$scope.select = function (action) {
			$scope.selected = action;
			$scope.search = '';
		}
	}]);
///#source 1 1 /app/directives/split-button/split-button.js
angular.module('gridTaskApp')
	.directive('splitButton', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				actions: '=',
				selected: '=',
				search: '='
			},
			templateUrl: templatesPath + 'split-button.html',
			controller: 'splitButtonCtrl',
			link: function (scope, element, attrs) {
				element.find('ul').hide();
				element.find('span').addClass('glyphicon-menu-down');

				element.click(function () {
					if (element.find('ul').is(':visible')) {
						element.find('ul').hide();
						element.find('span').addClass('glyphicon-menu-down');
						element.find('span').removeClass('glyphicon-menu-up');
					}
					else {
						element.find('ul').show();
						element.find('span').removeClass('glyphicon-menu-down');
						element.find('span').addClass('glyphicon-menu-up');
					}
				});

				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						element.find('ul').hide();
						element.find('span').addClass('glyphicon-menu-down');
						element.find('span').removeClass('glyphicon-menu-up');
					}
				})
			}
		}
	}]);
///#source 1 1 /app/directives/tabs/tabs-controller.js
angular.module('gridTaskApp')
	.controller('tabsCtrl', ['$scope', 'templatesPath', function ($scope, templatesPath) {
		$scope.tabs = [
			{
				header: { label: 'Overview' },
				options: {
					template: templatesPath + 'tabs-templates/overview.html'
				},
				isVisible: false
			},
		{
			header: { label: 'Details Information' },
			options: {
				template: templatesPath + 'tabs-templates/details-information.html'
			},
			isVisible: true
		}
		];

		$scope.open = function (tab) {
			$scope.tabs.forEach(function (tab) {
				tab.isVisible = false;
			})

			tab.isVisible = true;
		};
	}]);
///#source 1 1 /app/directives/tabs/tabs.js
angular.module('gridTaskApp')
	.directive('tabs', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			controller: 'tabsCtrl',
			templateUrl: templatesPath + 'tabs.html'
		}
	}])
///#source 1 1 /app/directives/tabs/tab-content/tab-content.js
angular.module('gridTaskApp')
	.directive('tabContent', [function () {
		return {
			restrict: 'E',
			scope: {
				tabOptions: '='
			},
			link: function (scope, element, attrs) {
				if (scope.tabOptions.template) {
					$.get(scope.tabOptions.template, function (result) {
						element.append(result);
					});
				}
			}
		}
	}])
///#source 1 1 /app/directives/trend-slider/trend-slider.js
angular.module('gridTaskApp')
	.directive('trendSlider', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				value: '=sliderValue',
			},
			templateUrl: templatesPath + 'trend-slider.html',
			link: function (scope, element, attrs, controller) {
				element.find('input').slider({
					min: 0,
					value: scope.value,
					max: 100,
					tooltip: 'hide'
				});
			}
		};
	}]);
///#source 1 1 /app/directives/upload/upload.js
angular.module('gridTaskApp')
	.directive('upload', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'upload.html',
			scope: {
				upload: '=uploadCallback'
			},
			link: function (scope, element, attrs) {
				element.find(':file').change(function () {
					var file = this.files[0];

					if (file.name.indexOf('json') != -1) {
						var fileReader = new FileReader();

						fileReader.readAsText(file);

						fileReader.onloadend = function () {
							var result = fileReader.result;

							scope.jsonData = JSON.parse(result);

							if (scope.upload) {
								scope.upload(scope.jsonData);
							}
						}

						element.find(':file').val("");
					}
					else {
						element.find(':file').val("");
					}
				});
			}
		}
	}]);
///#source 1 1 /app/plugins/center.js
jQuery.fn.center = function () {
	this.css("position", "absolute");
	this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                                                $(window).scrollTop()) + "px");
	this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                                                $(window).scrollLeft()) + "px");
	this.css("z-index", 10000);
	return this;
}
///#source 1 1 /app/plugins/columnGenerator.js
function columnGenerator(data, templatesPath) {
	var columns = [];

	columns.push({ field: '', displayName: '', cellTemplate: templatesPath + 'row-templates/details-cell.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', sortable: false, width: 60, minWidth: 60 });

	if (data[0]) {
		for (var field in data[0]) {
			columns.push({
				field: field,
				displayName: field,
				headerCellTemplate: templatesPath + 'cell-templates/cell.html'
			})
		}
	}

	columns.push({
		field: 'action', displayName: '', cellTemplate: templatesPath + 'row-templates/action.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', sortable: false, width: 150, minWidth: 150
	});

	return columns;
}
///#source 1 1 /app/plugins/convertFilterOptions.js
function convertFilterOptions(options) {
	var convertOpt = { filterText: '' };

	for (var i = 0; i < options.length; i++) {

		if (options[i].filter) {
			convertOpt.filterText += options[i].label + ':' + options[i].filter + ';';
		}
	}
	return convertOpt;
}
///#source 1 1 /app/plugins/ngGridCanvasHeightPlugin.js
function ngGridCanvasHeightPlugin(opts) {
	var self = this;
	self.grid = null;
	self.scope = null;
	self.init = function (scope, grid, services) {
		self.domUtilityService = services.DomUtilityService;
		self.grid = grid;
		self.scope = scope;
		var recalcHeightForData = function () { setTimeout(innerRecalcForData, 1); };

		var innerRecalcForData = function () {
			var step = 0;

			if (self.grid.$canvas.height() > 5900) {
				self.grid.$canvas.css('height', 6000 + 'px');
			}

			for (var i = 0; i < self.scope.renderedRows.length; i++) {
				if (self.scope.renderedRows[i].entity.isToggle) {
					step = self.scope.renderedRows[i].entity.step;

					if (self.grid.$canvas.height() > 5900) {
						self.grid.$canvas.css('height', 6300 + 'px');
					}
				}
				else {
					if (!self.scope.renderedRows[i].entity.action.isShow) {
						self.scope.renderedRows[i].elm.removeClass('selected');
					}
				}
			}

			if (self.scope.renderedRows[self.scope.renderedRows.length - 1]) {
				var height = self.scope.renderedRows[self.scope.renderedRows.length - 1].offsetTop + self.scope.renderedRows[self.scope.renderedRows.length - 1].elm.height();
			}
			else {
				var height = 0;
			}

			self.scope.catHashKeys = function () {
				var hash = '',
					idx;
				for (idx in self.scope.renderedRows) {
					hash += self.scope.renderedRows[idx].$$hashKey;
				}
				return hash;
			};
		}
		self.scope.$watch('catHashKeys()', innerRecalcForData);
		self.scope.$watch(self.grid.config.data, recalcHeightForData);
	}
};
///#source 1 1 /app/plugins/ngGridCsvExportPlugin.js
// Todo:
// 1) Make the button prettier
// 2) add a config option for IE users which takes a URL.  That URL should accept a POST request with a
//    JSON encoded object in the payload and return a CSV.  This is necessary because IE doesn't let you
//    download from a data-uri link
//
// Notes:  This has not been adequately tested and is very much a proof of concept at this point
function ngGridCsvExportPlugin(opts) {
	var self = this;
	self.grid = null;
	self.scope = null;
	self.init = function (scope, grid, services) {
		self.grid = grid;
		self.scope = scope;
		function showDs() {
			var keys = [];
			for (var f in grid.config.columnDefs) { keys.push(grid.config.columnDefs[f].field); }
			var csvData = '';
			function csvStringify(str) {
				if (str == null) { // we want to catch anything null-ish, hence just == not ===
					return '';
				}
				if (typeof (str) === 'number') {
					return '' + str;
				}
				if (typeof (str) === 'boolean') {
					return (str ? 'TRUE' : 'FALSE');
				}
				if (typeof (str) === 'string') {
					return str.replace(/"/g, '""');
				}

				return JSON.stringify(str).replace(/"/g, '""');
			}
			function swapLastCommaForNewline(str) {
				var newStr = str.substr(0, str.length - 1);
				return newStr + "\n";
			}
			for (var k in keys) {
				csvData += '"' + csvStringify(keys[k]) + '",';
			}
			csvData = swapLastCommaForNewline(csvData);
			var gridData = grid.data;
			for (var gridRow in gridData) {
				for (k in keys) {
					var curCellRaw;
					if (opts != null && opts.columnOverrides != null && opts.columnOverrides[keys[k]] != null) {
						curCellRaw = opts.columnOverrides[keys[k]](gridData[gridRow][keys[k]]);
					}
					else {
						curCellRaw = gridData[gridRow][keys[k]];
					}
					csvData += '"' + csvStringify(curCellRaw) + '",';
				}
				csvData = swapLastCommaForNewline(csvData);
			}
			var fp = grid.$root.find(".ngFooterPanel");
			var csvDataLinkPrevious = grid.$root.find('.ngFooterPanel .csv-data-link-span');
			if (csvDataLinkPrevious != null) { csvDataLinkPrevious.remove(); }
			var csvDataLinkHtml = "<span class=\"csv-data-link-span\">";
			csvDataLinkHtml += "<br><a href=\"data:text/csv;charset=UTF-8,";
			csvDataLinkHtml += encodeURIComponent(csvData);
			csvDataLinkHtml += "\" download=\"Export.csv\">CSV Export</a></br></span>";
			fp.append(csvDataLinkHtml);
		}
		setTimeout(showDs, 0);
		scope.catHashKeys = function () {
			var hash = '';
			for (var idx in scope.renderedRows) {
				hash += scope.renderedRows[idx].$$hashKey;
			}
			return hash;
		};
		scope.$watch('catHashKeys()', showDs);
	};
}
///#source 1 1 /app/plugins/ngGridFlexibleHeightPlugin.js
function ngGridFlexibleHeightPlugin(opts) {
	var self = this;
	self.grid = null;
	self.scope = null;
	self.init = function (scope, grid, services) {
		self.domUtilityService = services.DomUtilityService;
		self.grid = grid;
		self.scope = scope;
		var recalcHeightForData = function () { setTimeout(innerRecalcForData, 1); };
		var innerRecalcForData = function () {
			var gridId = self.grid.gridId;
			var footerPanelSel = '.' + gridId + ' .ngFooterPanel';
			var extraHeight = self.grid.$topPanel.height() + $(footerPanelSel).height();
			console.log('extra=' + extraHeight);
			var naturalHeight = self.grid.$canvas.height() + 1;
			if (opts != null) {
				if (opts.minHeight != null && (naturalHeight + extraHeight) < opts.minHeight) {
					naturalHeight = opts.minHeight - extraHeight - 2;
				}
			}

			var newViewportHeight = naturalHeight + 2;
			if (!self.scope.baseViewportHeight || self.scope.baseViewportHeight !== newViewportHeight) {
				self.grid.$viewport.css('height', newViewportHeight + 'px');
				console.log('resetting height to ' + (newViewportHeight + extraHeight));
				self.grid.$root.css('height', (newViewportHeight + extraHeight) + 'px');
				self.scope.baseViewportHeight = newViewportHeight;
				self.domUtilityService.UpdateGridLayout(self.scope, self.grid);
			}
		};
		self.scope.catHashKeys = function () {
			var hash = '',
                idx;
			for (idx in self.scope.renderedRows) {
				hash += self.scope.renderedRows[idx].$$hashKey;
			}
			return hash;
		};
		self.scope.$watch('catHashKeys()', innerRecalcForData);
		self.scope.$watch(self.grid.config.data, recalcHeightForData);
	};
}

///#source 1 1 /app/services/grid-standart-one-service.js
angular.module('gridTaskApp')
	.service('gridStandartOneService', ['StandartOneData', function (StandartOneData) {
		this.get = function (callback) {
			var data = StandartOneData.get();

			callback(data);
		}
	}])
	.factory('StandartOneData', ['constantOfData', function (constantOfData) {
		var types = ['Purchase', 'Default', 'Page View', 'Krux Click Tracker', 'Ad', 'Form', 'Subscription']
		var categories = ['ecommerce', 'User Match', 'Site Visit', 'User Action', 'Form Data'];
		var conversions = ['Yes', 'No'];

		var data = function () {
			var array = [];

			for (var i = 0; i < constantOfData.count; i++) {
				var day = Math.floor((Math.random() * 1000) + 1);
				var value = Math.floor((Math.random() * 100000) + 1);
				var trend = Math.floor((Math.random() * 100) + 1);
				var type = types[Math.floor(Math.random() * 7)];
				var category = categories[Math.floor(Math.random() * categories.length)];
				var conversion = conversions[Math.floor(Math.random() * conversions.length)];

				var obj = {
					date: new Date(constantOfData.startDate.setDate(constantOfData.startDate.getDate() + day)).toDateString(),
					name: 'Changing the icon font location\nBootstrap assumes icon font files will be located in the ../fonts/ directory, relative to the compiled CSS files. Moving or renaming those font files means updating the CSS in one of three ways:\nChange the @icon-font-path and/or @icon-font-name variables in the source Less files.\nUtilize the relative URLs option provided by the Less compiler.\nChange the url() paths in the compiled CSS.\nUse whatever option best suits your specific development setup.',
					type: type,
					value: value,
					trend: trend,
					status: 'Enabled',
					category: category,
					conversion: conversion
				};

				array.push(obj);
			}

			return array;
		};

		return {
			get: function () {
				return data();
			}
		}
	}]);
///#source 1 1 /app/services/grid-standart-two-service.js
angular.module('gridTaskApp')
	.service('gridStandartTwoService', ['StandartTwoData', function (StandartTwoData) {
		this.get = function (callback) {
			var data = StandartTwoData.get();

			callback(data);
		}
	}])
	.factory('StandartTwoData', ['constantOfData', function (constantOfData) {
		var names = ['Adids Originals Purchase', 'Affiliate User Match', 'Auto Trader App Visit', 'Auto Trader Home Page', 'Click Tracker Example', 'Coming to my home page', 'Contact Seller', 'Customer Registration']
		var types = ['Purchase', 'Default', 'Page View', 'Krux Click Tracker', 'Ad', 'Form', 'Subscription']
		var categories = ['ecommerce', 'User Match', 'Site Visit', 'User Action', 'Form Data'];
		var statues = ['Enabled', 'Disabled'];
		var conversions = ['Yes', 'No'];

		var data = function () {
			var array = [];

			for (var i = 0; i < constantOfData.count; i++) {
				var name = names[Math.floor(Math.random() * names.length)];
				var type = types[Math.floor(Math.random() * types.length)];
				var category = categories[Math.floor(Math.random() * categories.length)];
				var status = statues[Math.floor(Math.random() * statues.length)];
				var conversion = conversions[Math.floor(Math.random() * conversions.length)];

				var obj = {
					name: name,
					type: type,
					category: category,
					status: status,
					conversion: conversion
				};

				array.push(obj);
			}

			return array;
		};

		return {
			get: function () {
				return data();
			}
		}
	}]);
///#source 1 1 /app/services/grid-upload-service.js
angular.module('gridTaskApp')
	.service('gridUploadService', ['UploadData', '$http', function (UploadData, $http) {
		this.get = function (callback, url) {
			var data = UploadData.get();

			callback(data);
		}
	}])
	.factory('UploadData', ['constantOfData', function (constantOfData) {
		var types = ['Purchase', 'Default', 'Page View', 'Krux Click Tracker', 'Ad', 'Form', 'Subscription']
		var categories = ['ecommerce', 'User Match', 'Site Visit', 'User Action', 'Form Data'];
		var conversions = ['Yes', 'No'];

		var data = function () {
			var array = [];

			for (var i = 0; i < constantOfData.count; i++) {
				var day = Math.floor((Math.random() * 1000) + 1);
				var value = Math.floor((Math.random() * 100000) + 1);
				var trend = Math.floor((Math.random() * 100) + 1);
				var type = types[Math.floor(Math.random() * 7)];
				var category = categories[Math.floor(Math.random() * categories.length)];
				var conversion = conversions[Math.floor(Math.random() * conversions.length)];

				var obj = {
					date: new Date(constantOfData.startDate.setDate(constantOfData.startDate.getDate() + day)).toDateString(),
					name: 'Changing the icon font location\nBootstrap assumes icon font files will be located in the ../fonts/ directory, relative to the compiled CSS files. Moving or renaming those font files means updating the CSS in one of three ways:\nChange the @icon-font-path and/or @icon-font-name variables in the source Less files.\nUtilize the relative URLs option provided by the Less compiler.\nChange the url() paths in the compiled CSS.\nUse whatever option best suits your specific development setup.',
					type: type,
					value: value,
					trend: trend,
					status: 'Enabled',
					category: category,
					conversion: conversion
				};

				array.push(obj);
			}

			return array;
		};

		return {
			get: function () {
				return data();
			}
		}
	}]);
///#source 1 1 /app/services/grid-with-details-template-service.js
angular.module('gridTaskApp')
	.service('gridWithDetailsTemplateService', ['DetailsTemplateData', function (DetailsTemplateData) {
		this.get = function (callback) {
			var data = DetailsTemplateData.get();

			callback(data);
		}
	}])
	.factory('DetailsTemplateData', ['constantOfData', function (constantOfData) {

		var data = function () {
			var array = [];

			for (var i = 0; i < constantOfData.count; i++) {

				var obj = {
					priority: 'None',
					name: 'n1',
					ID: i,
					Type: 'basic',
					category: '',
					subCategory: '',
					devices: 0,
					persistent: 0,
					people: 0,
					refreshFrequency: 'daily',
					lastComputed: 'June 19, 2015',
					dateCreated: 'June 19, 2015',
					interchange: ''
				};

				array.push(obj);
			}

			return array;
		}();

		return {
			get: function () {
				return data;
			}
		}
	}]);
