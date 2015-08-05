﻿///#source 1 1 /app/app.js
angular.module('gridTaskApp', ['ngGrid', 'ui.grid', 'ui.grid.selection', 'ui.grid.expandable', 'ui.select2', 'pascalprecht.translate'])
	.value('templatesPath', 'app/templates/');

///#source 1 1 /app/constants/class-constant.js
angular.module('gridTaskApp')
	.constant("classes", {
		menuDown: 'icon-menu-down',
		menuUp: 'icon-menu-up'
	});
///#source 1 1 /app/constants/content-constants.js
angular.module('gridTaskApp')
	.constant('content', {
		checks: {
			options: {
				actions: {
					all: { label: 'All', isAll: true },
					noOne: { label: 'No one', isNoOne: true },
					marked: { label: 'Marked', isMarked: true },
					notMarked: { label: 'Not marked', isNotMarked: true }
				}
			}
		},
		mores: {
			options: {
				label: 'More',
				values: [{ label: 'View reports' }],
				isMenu: true
			}
		},
		exports: {
			options: {
				label: 'Export to: ',
				values: [{ label: 'Excel', isExcel: true }, { label: 'Pdf', isPdf: true }],
				callback: function (action) {
				}
			}
		},
		views: {
			options: {
				label: 'View: ',
				values: [{ label: 'Ng Grid', isGrid: true, isTiles: false }, { label: 'Tiles', isGrid: false, isTiles: true }, { label: 'UI Grid', isUiGrid: true }],
				callback: function (action) {
				}
			}
		},
		listSelector: '.page-content__list',
		loadingTemplate: '<loading ng-show="contentOptions.isLoading"></loading>',
		gridName: 'Default grid',
		ngGridOpt: {
			data: 'data',
			multiSelect: false,
			rowTemplate: 'app/templates/grid-templates/row-templates/row-with-detalis.html',
			filterOptions: { filterText: '' },
			rowHeight: 60,
			headerRowHeight: 40,
			showFooter: true,
			footerRowHeight: 30,
			footerTemplate: 'app/templates/grid-templates/grid-footer.html',
			detailsTemplate: 'app/templates/grid-templates/details-templates/details.html',
			rowActions: {
				options: {
					label: 'Actions',
					values: [{ label: 'Edit', isEdit: true, priority: 4 }, { label: 'Copy', isCopy: true, priority: 3 }, { label: 'History', isHistory: true, priority: 2 }, { label: 'Delete', isDelete: true, priority: 1 }],
					isMenu: true
				},
				isShow: false
			},
			rowCheckAction: function (data) {
				var isCheckArray = data.filter(function (value) {
					if (value.actions.isCheck) {
						return true;
					}
				});

				if (isCheckArray.length == 0) {
					this.contentOptions.checks.options.selected = this.contentOptions.checks.options.actions.noOne;
				}
				else if (isCheckArray.length == data.length) {
					this.contentOptions.checks.options.selected = this.contentOptions.checks.options.actions.all;
				}
				else {
					this.contentOptions.checks.options.selected = this.contentOptions.checks.options.actions.marked;
				}
			}
		},
		uiGridOpt: {
			data: 'data',
			rowHeight: 60,
			showGridFooter: true,
			enableColumnMenus: false,
			enableRowSelection: true,
			enableGridMenu: false,
			multiSelect: false,
			modifierKeysToMultiSelect: false,
			noUnselect: true,
			enableExpandable: true,
			enableRowHeaderSelection: false,
			expandableRowTemplate: 'app/templates/grid-templates/details-templates/details.html',
			expandableRowHeight: 220,
			selectionRowHeaderWidth: 35,
			enableExpandableRowHeader: false,
			enableFiltering: true,
			rowTemplate: 'app/templates/ui-grid-templates/row.html',
			expandableRowScope: {
				subGridVariable: 'subGridScopeVariable'
			},
			gridFooterTemplate: '<div class="grid-footer"></div>',
			headerTemplate: 'app/templates/ui-grid-templates/header.html',
			headerCellTemplate: 'app/templates/ui-grid-templates/cell-templates/header.html',
			reInit: true,
			enableDetails: true,
			detailsCellTemplate: 'app/templates/ui-grid-templates/cell-templates/details.html',
			detailsWidth: 60,
			detailsMinWidth: 60,
			enableAction: true,
			actionsCellTemplate: 'app/templates/ui-grid-templates/cell-templates/action.html',
			actionsWidth: 250,
			actionsMinWidth: 115,
			columnMinWidth: 80,
			cellClass: function (grid, row, col, rowRenderedIndex, colRenderedIndex) {
				if (row.isChecked) {
					return 'checked';
				}
				else if (row.isExpanded) {
					return 'expanded';
				}
			},
			enableColumnFilter: false
		},
		cardsOptions: {
			cards: {
				//clicks: {
				//	label: 'Clicks',
				//	count: 0,
				//	counter: undefined,
				//	graphs: [{ style: { 'background-color': 'rgb(233, 124, 130)', height: '55px' } },
				//		{ style: { 'background-color': 'rgb(165, 189, 215)', height: '35px' } },
				//		{ style: { 'background-color': 'rgb(165, 215, 208)', height: '55px' } },
				//		{ style: { 'background-color': 'rgb(251, 201, 135)', height: '10px' } },
				//		{ style: { 'background-color': 'rgb(57, 124, 130)', height: '30px' } }]
				//},
				views: {
					label: 'Total Touchpoints',
					count: 1910000,
					graphs: [{ style: { 'background-color': 'rgb(10, 124, 130)', height: '30px' } },
						{ style: { 'background-color': 'rgb(165, 25, 215)', height: '50px' } },
						{ style: { 'background-color': 'rgb(165, 200, 208)', height: '60px' } },
						{ style: { 'background-color': 'rgb(30, 201, 135)', height: '25px' } },
						{ style: { 'background-color': 'rgb(57, 124, 100)', height: '30px' } }]
				},
				conversion: {
					label: 'Reached Goal',
					count: 2010,
					graphs: [{ style: { 'background-color': 'rgb(233, 44, 130)', height: '20px' } },
					{ style: { 'background-color': 'rgb(165, 189, 300)', height: '30px' } },
					{ style: { 'background-color': 'rgb(1, 215, 208)', height: '45px' } },
					{ style: { 'background-color': 'rgb(251, 201, 54)', height: '34px' } },
					{ style: { 'background-color': 'rgb(57, 33, 130)', height: '60px' } }]
				},
				spend: {
					label: 'Potential Reach',
					count: 2150,
					graphs: [{ style: { 'background-color': 'rgb(10, 124, 130)', height: '10px' } },
					{ style: { 'background-color': 'rgb(165, 189, 55)', height: '5px' } },
					{ style: { 'background-color': 'rgb(165, 231, 208)', height: '50px' } },
					{ style: { 'background-color': 'rgb(251, 201, 29)', height: '30px' } },
					{ style: { 'background-color': 'rgb(57, 124, 1)', height: '34px' } }]
				},
				//actions: {
				//	label: 'Actions',
				//	count: 1910000,
				//	graphs: [{ style: { 'background-color': 'rgb(10, 124, 130)', height: '30px' } },
				//		{ style: { 'background-color': 'rgb(165, 25, 215)', height: '50px' } },
				//		{ style: { 'background-color': 'rgb(165, 200, 208)', height: '60px' } },
				//		{ style: { 'background-color': 'rgb(30, 201, 135)', height: '25px' } },
				//		{ style: { 'background-color': 'rgb(57, 124, 100)', height: '30px' } }]
				//},
				//time: {
				//	label: 'Time',
				//	count: new Date(),
				//	graphs: [{ style: { 'background-color': 'rgb(233, 44, 130)', height: '20px' } },
				//	{ style: { 'background-color': 'rgb(165, 189, 300)', height: '30px' } },
				//	{ style: { 'background-color': 'rgb(1, 215, 208)', height: '45px' } },
				//	{ style: { 'background-color': 'rgb(251, 201, 54)', height: '34px' } },
				//	{ style: { 'background-color': 'rgb(57, 33, 130)', height: '60px' } }]
				//},
				//date: {
				//	label: 'Date',
				//	count: 2015,
				//	graphs: [{ style: { 'background-color': 'rgb(10, 124, 130)', height: '10px' } },
				//	{ style: { 'background-color': 'rgb(165, 189, 55)', height: '5px' } },
				//	{ style: { 'background-color': 'rgb(165, 231, 208)', height: '50px' } },
				//	{ style: { 'background-color': 'rgb(251, 201, 29)', height: '30px' } },
				//	{ style: { 'background-color': 'rgb(57, 124, 1)', height: '34px' } }]
				//}
			},
			startDate: new Date(new Date().setDate(new Date().getDate() - 1)),
			endDate: new Date(),
			dateRange: Math.abs(new Date().getTime() - new Date(new Date().setDate(new Date().getDate() - 1)).getTime()),
			margin: 270
		},
		filterOptions: function (data) {
			var options = [];

			if (Array.isArray(data) && data[0])
				for (var prop in data[0]) {
					if (prop != '$$hashKey') {
						options.push({ label: prop, isColumn: true });
					}
				}
			return options;
		},
		searchOptions: function (data) {
			var options = [];
			options.push({ label: 'everywhere', isEverywhere: true });

			if (Array.isArray(data) && data[0]) {
				for (var prop in data[0]) {
					if (prop != '$$hashKey') {
						options.push({ label: prop, isColumn: true });
					}
				}
			}

			return options;
		},
		eventType: {
			options: {
				actions: [
					{ label: 'Simple event' },
					{ label: 'Medium event' }],
				selected: { label: 'Simple event' }
			},
			selectOpt: {}
		},
		segments: {
			options: {
				actions: [{ label: 'People' }, { label: 'Trees' }, { label: 'Nodes' }, { label: 'Graphs' }, { label: 'Credentials' }],
			},
			selectOpt: {}
		},
		campaign: {
			options: {
				actions: [{ label: 'AIX' }, { label: 'UI Campaign' }, { label: 'Design' }, { label: 'Modes' }, { label: 'KJ Entertainment' }],
			},
			selectOpt: {}
		},
		sankeyFilters: {
			dateRange: {
				start: moment(new Date(new Date().setDate(new Date().getDate() - 7))),
				end: moment(new Date())
			},
		},
		sankeyPath: "data/sankey/my-graphs.json"
	});
///#source 1 1 /app/constants/grid-constants.js
angular.module('gridTaskApp')
	 .constant("constantOfData", {
	 	count: 100,
	 	startDate: new Date(2000, 1, 1)
	 });
///#source 1 1 /app/directives/cards/cards-controller.js
angular.module('gridTaskApp')
	.controller('cardsCtrl', ['$scope', function ($scope) {

	}]);
///#source 1 1 /app/directives/cards/cards.js
angular.module('gridTaskApp')
	.directive('cards', ['templatesPath', '$timeout', function (templatesPath, $timeout) {
		return {
			restrict: 'A',
			templateUrl: templatesPath + 'directive-templates/cards.html',
			scope: {
				cards: '=',
				startDate: '=',
				endDate: '=',
				margin: '=',
				contentOptions: '='
			},
			controller: 'cardsCtrl',
			link: function (scope, element, attrs) {

				if (scope.contentOptions.enableDebugging) {
					$timeout(function () {
						$('#debug').css('left', 40);
						$('#debug').flip();
					});
				}

				scope.$watch('cards', function (cards) {
					$timeout(function () {
						var left = 40;

						if (scope.contentOptions.enableDebugging) {
							left += scope.margin;
						}

						for (var card in cards) {
							$('#' + card).css('left', left);
							$('#' + card).flip();

							left += scope.margin;
						}

						$('.cards-group').css('width', left + 50 + 'px');
					})

				});
			}
		}
	}]);
///#source 1 1 /app/directives/chart-segment/chart-segment-controller.js
angular.module('gridTaskApp')
	.controller('chartSegmentCtrl', ['$scope', function ($scope) {
		$scope.deleteUser = function (user, index) {
			$scope.selectedUsers.splice(index, 1);
		}
	}]);
///#source 1 1 /app/directives/chart-segment/chart-segment.js
angular.module('gridTaskApp')
	.directive('chartSegment', ['templatesPath', function (templatesPath) {
		return {
			retstrict: 'E',
			scope: {
				selectedUsers: '='
			},
			controller: 'chartSegmentCtrl',
			templateUrl: templatesPath + 'directive-templates/chart-segment.html',
			link: function (scope, element, attrs) {

			}
		}
	}]);
///#source 1 1 /app/directives/checkbox-select/checkbox-select-controller.js
angular.module('gridTaskApp')
	.controller('checkboxSelectCtrl', ['$scope', 'classes', function ($scope, classes) {
		if (!$scope.options.showClass) {
			$scope.options.showClass = classes.menuUp;
		}
		if (!$scope.options.hideClass) {
			$scope.options.hideClass = classes.menuDown;
		}

		if ($scope.options.selected === undefined) {
			$scope.options.selected = {};
		}

		$scope.select = function (action) {
			$scope.isShow = false;
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

		$scope.toggle = function () {
			$scope.isShow = !$scope.isShow;
		}

		$scope.checked = function (value) {
			if (value) {
				$scope.options.selected = $scope.options.actions.all;

				if ($scope.options.selected === undefined) {
					$scope.options.selected = {};
				}
				$scope.options.selected.check = true;
			}
			else {
				$scope.options.selected = $scope.options.actions.noOne;

				if ($scope.options.selected === undefined) {
					$scope.options.selected = {};
				}
				$scope.options.selected.check = false;
			}

			if ($scope.options.callback) {
				$scope.options.callback($scope.options.selected);
			}

			$scope.isShow = false;
			setTimeout(function () {
				$scope.$apply();
			});
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
			templateUrl: templatesPath + 'directive-templates/checkbox-select.html',
			controller: 'checkboxSelectCtrl',
			link: function (scope, element, attrs) {
				element.find('.checkbox-select__expand').addClass(scope.options.hideClass);

				scope.$watch('isShow', function (value) {
					if (!value) {
						element.find('.checkbox-select__expand').addClass(scope.options.hideClass);
						element.find('.checkbox-select__expand').removeClass(scope.options.showClass);
						element.find('.checkbox-select__btn').removeClass('opened');
					}
					else {
						element.find('.checkbox-select__expand').removeClass(scope.options.hideClass);
						element.find('.checkbox-select__expand').addClass(scope.options.showClass);
						element.find('.checkbox-select__btn').addClass('opened');
					}
				});

				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						scope.isShow = false;
						element.find('.checkbox-select__expand').addClass(scope.options.hideClass);
						element.find('.checkbox-select__expand').removeClass(scope.options.showClass);
						element.find('checkbox-select__btn').removeClass('opened');
					}
				})

				scope.$watch('options.selected', function (value) {
					if (value) {
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
					}
				});
			}
		}
	}]);
///#source 1 1 /app/directives/custom-datepicker/custom-datepicker.js
angular.module('gridTaskApp')
	.directive('customDatepicker', ['templatesPath', 'classes', function (templatesPath, classes) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'directive-templates/custom-datepicker.html',
			link: function (scope, element, attrs) {
				element.find('.expand').addClass(classes.menuDown);

				scope.config = {
					singleMonth: true,
					showShortcuts: false,
					showTopbar: false
				};

				$(element.find('.date-btn__toggle')).dateRangePicker(scope.config).bind('datepicker-change', function (event, obj) {
					scope.startDate = obj.date1;
					scope.endDate = obj.date2;
					scope.dateRange = Math.abs(scope.endDate.getTime() - scope.startDate.getTime());
					scope.$apply();
				}).bind('datepicker-close', function () {
					scope.isShow = false;

					element.find('.expand').addClass(classes.menuDown);
					element.find('.expand').removeClass(classes.menuUp);
					element.find('.date-btn__toggle').removeClass('opened');
				});

				scope.toggle = function () {
					scope.isShow = !scope.isShow;

					if (scope.isShow) {
						element.find('.expand').removeClass(classes.menuDown);
						element.find('.expand').addClass(classes.menuUp);
						element.find('.date-btn__toggle').addClass('opened');
						$(element.find('.date-btn__toggle')).data('dateRangePicker').open();
					}
					else {
						element.find('.expand').addClass(classes.menuDown);
						element.find('.expand').removeClass(classes.menuUp);
						element.find('.date-btn__toggle').removeClass('opened');
						$(element.find('.date-btn__toggle')).data('dateRangePicker').close();
					}
				}

				scope.close = function () {
					scope.isShow = false;
					$(element.find('.date-btn__toggle')).data('dateRangePicker').close();

					element.find('.expand').addClass(classes.menuDown);
					element.find('.expand').removeClass(classes.menuUp);
					element.find('.date-btn__toggle').removeClass('opened');
				}
			}
		}
	}])
///#source 1 1 /app/directives/custom-grid/custom-grid-controller.js
angular.module('gridTaskApp')
	.controller('customGridCtrl', ['$scope', 'templatesPath', function ($scope, templatesPath) {
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
			templateUrl: templatesPath + 'directive-templates/custom-grid.html',
			link: function (scope, element, attrs) {
			}
		};
	}]);
///#source 1 1 /app/directives/custom-grid/grid-menu/grid-menu-controller.js
angular.module('gridTaskApp')
	.controller('gridMenuCtrl', ['$scope', function ($scope) {
		$scope.options = {
			isMenu: true,
			label: '',
			values: [],
			isCheckbox: true,
			onCheck: function (action, index) {
				$scope.columns[index].toggleVisible();

				$scope.resize(action);
			},
			withSave: false,
			onSave: function () {
			},
			callback: function (action) {
			}
		};
	}]);
///#source 1 1 /app/directives/custom-grid/grid-menu/grid-menu.js
angular.module('gridTaskApp')
	.directive('gridMenu', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'directive-templates/grid-menu.html',
			controller: 'gridMenuCtrl',
			link: function (scope, element, attrs) {

				scope.$watch('columns', function (value) {
					if (Array.isArray(value) && value.length > 0) {

						scope.colCache = [];
						scope.options.values = [];

						var totalWidth = value.reduce(function (a, b) {
							return a + b.minWidth;
						}, 0);

						if ($(window).width() < totalWidth) {
							for (var i = value.length - 2; i > 1; i--) {
								if (value[i].visible) {
									value[i].toggleVisible();
									totalWidth -= value[i].minWidth;
									scope.colCache.push({ label: value[i].field, element: value[i] });
								}
								if ($(window).width() > totalWidth) {
									break;
								}
							}
						}

						if (scope.colCache.length > 0 || scope.$parent.options.showResponsMenu) {
							scope.isShow = true;
						}

						for (var i = 0; i < value.length; i++) {
							scope.options.values.push({ label: value[i].field, element: value[i], isVisible: value[i].visible });
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
										scope.colCache.push({ label: value[i].field, element: value[i] });
									}
									if ($(window).width() > totalWidth) {
										break;
									}
								}
							}
							else {
								for (var i = 0; i < value.length; i++) {
									if (!value[i].visible) {
										value[i].toggleVisible();
										totalWidth += value[i].minWidth;

										for (var j = 0; j < scope.colCache.length; j++) {
											if (scope.colCache[j].label == value[i].field) {
												scope.colCache.splice(j, 1);
											}
										}

										if ($(window).width() < totalWidth) {
											value[i].toggleVisible();
											totalWidth -= value[i].minWidth;

											var isExist = false;
											for (var j = 0; j < scope.colCache.length; j++) {
												if (scope.colCache[j].label == value[i].field) {
													isExist = true;
												}
											}
											if (!isExist) {
												scope.colCache.push({ label: value[i].field, element: value[i] });
											}
											else {
												scope.colCache = [];

												for (var j = 0; j < value.length; j++) {
													if (!value[j].visible) {
														scope.colCache.push({ label: value[j].field, element: value[j] });
													}
												}
											}
											break;
										}
									}

								}
							}

							scope.options.values = [];

							for (var i = 0; i < value.length; i++) {
								scope.options.values.push({ label: value[i].field, element: value[i], isVisible: value[i].visible });
							}

							if (scope.colCache.length > 0 || scope.$parent.options.showResponsMenu) {
								scope.isShow = true;
							}
							else {
								scope.isShow = false;
							}
						});
					}
				});

				scope.resize = function (action) {
					var totalWidth = scope.columns.reduce(function (a, b) {
						if (b.visible) {
							return a + b.minWidth;
						} else {
							return a;
						}
					}, 0);

					for (var j = 0; j < scope.colCache.length; j++) {
						if (scope.colCache[j].label == action.label) {
							scope.colCache.splice(j, 1);
						}
					}

					if ($(window).width() < totalWidth) {
						$('.page-content').css('minWidth', totalWidth + 'px');
					}
					else {
						$('.page-content').css('minWidth', '500px');
					}
				}
			}
		}
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
				scope.$watch('value.orig.actions.isCheck', function (value) {
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
///#source 1 1 /app/directives/custom-ui-grid/custom-ui-grid-controller.js
angular.module('gridTaskApp')
	.controller('customUiGridCtrl', ['$scope', 'templatesPath', '$compile', '$interval', function ($scope, templatesPath, $compile, $interval) {

		$scope.options.onRegisterApi = function (gridApi) {
			$scope.gridApi = gridApi;

			if ($scope.options.enableAction) {
				gridApi.core.on.rowsRendered($scope, function () {
					$scope.gridApi.grid.rows.forEach(function (row) {
						row.actions = angular.copy($scope.options.rowActions);
						row.actions.tab = 2;
						row.actions.expand = function () {
							$scope.gridApi.expandable.toggleRowExpansion(row.entity);
						};
						row.actions.setCheck = function () {
							var data = $scope.gridApi.grid.rows;

							var isCheckArray = data.filter(function (value) {
								if (value.isCheck) {
									return true;
								}
							});

							if (isCheckArray.length == 0) {
								$scope.contentOptions.checks.options.selected = $scope.contentOptions.checks.options.actions.noOne;
							}
							else if (isCheckArray.length == data.length) {
								$scope.contentOptions.checks.options.selected = $scope.contentOptions.checks.options.actions.all;
							}
							else {
								$scope.contentOptions.checks.options.selected = $scope.contentOptions.checks.options.actions.marked;
							}

							$scope.gridApi.grid.refresh();
						};
						row.actions.copyRow = copyRow;
						row.actions.deleteRow = deleteRow;
						row.actions.editRow = editRow;
						row.actions.historyRow = historyRow;
						row.actions.history = [];
						row.actions.options.callback = function (action) {
							if (action.isEdit) {
								row.actions.editRow(row);
							}
							else if (action.isCopy) {
								row.actions.copyRow(row);
							}
							else if (action.isDelete) {
								row.actions.deleteRow(row.entity, $scope.data, row);
							}
							else if (action.isHistory) {
								row.actions.historyRow(row);
							}
						};
					})
				});
			}

			$scope.gridApi.grid.registerRowsProcessor($scope.singleFilter, 200);

			if ($scope.options.enableDetails) {
				gridApi.expandable.on.rowExpandedStateChanged($scope, function (row) {
					if (row.isExpanded) {
						$scope.gridApi.grid.rows.forEach(function (rowCache) {
							if (rowCache.isExpanded && row.entity != rowCache.entity) {
								rowCache.actions.expand();
							}
						});
					}
				});
			}

			if ($scope.contentOptions.checks) {
				$scope.contentOptions.checks.options.callback = function (check) {
					if (check) {
						if (check.isAll) {
							$scope.gridApi.grid.rows.forEach(function (row) {
								row.isCheck = true;
							});
						}
						else if (check.isNoOne) {
							$scope.gridApi.grid.rows.forEach(function (row) {
								row.isCheck = false;
							});
						}
						else if (check.isMarked) {
							$scope.gridApi.grid.rows.forEach(function (row) {
							});
						}
						else if (check.isNotMarked) {
							$scope.gridApi.grid.rows.forEach(function (row) {
								row.isCheck = !row.isCheck;
							});
						}
					}
				}
			}
		}

		$scope.singleFilter = function (renderableRows) {
			var filtersText = $scope.options.filterOptions.filterText.split(';');

			if (filtersText.length == 1 && filtersText[0].indexOf(':') == -1) {
				var matcher = new RegExp($scope.options.filterOptions.filterText);

				renderableRows.forEach(function (row) {
					var match = false;

					$scope.options.columnDefs.forEach(function (col) {
						if (row.entity[col.field] !== undefined) {
							if (row.entity[col.field].toString().match(matcher)) {
								match = true;
							}
						}
					});

					if (!match) {
						row.visible = false;
					}
				});
			}
			else {
				for (var i = 0; i < filtersText.length; i++) {
					if (filtersText[i] == '') {
						break
					}

					var propName = filtersText[i].substr(0, filtersText[i].indexOf(':'));
					var propVal = filtersText[i].substr(filtersText[i].indexOf(':') + 1);

					var matcher = new RegExp(propVal);

					renderableRows.forEach(function (row) {
						var match = false;

						$scope.options.columnDefs.forEach(function (col) {
							if (row.entity[propName] !== undefined) {
								if (row.entity[propName].toString().match(matcher)) {
									match = true;
								}
							}
						});

						if (!match) {
							row.visible = false;
						}
					});

				}
			}


			return renderableRows;
		}

		$scope.rowChangedClass = function (renderableRows) {
			return renderableRows;
		};

		$scope.$watch('options.filterOptions.filterText', function (text) {
			$scope.gridApi.grid.refresh();
		});

		var copyRow = function (row) {
			var s = JSON.stringify(row.entity);

			if (window.clipboardData && clipboardData.setData) {
				clipboardData.setData('text', s);

				if ($.cursorMessage) {
					$.cursorMessage('Row is copied to clipboard.');
				}
			}
			else {
				$('body').append('<input id="holdtext" style="display: none"/>')

				var elm = $("#holdtext");
				elm.val(s);
				elm.select();

				try {
					document.execCommand('copy');

					if ($.cursorMessage) {
						$.cursorMessage('Row is copied to clipboard.');
					}

				}
				catch (e) {
					if ($.cursorMessage) {
						$.cursorMessage('Copied ended with error.', { backgroundColor: 'rgb(143, 59, 59)' });
					}

				}
				finally {
					elm.remove('#holdtext');
				}
			};
		}

		var deleteRow = function (entity, data, row) {
			data.splice(data.indexOf(entity), 1);
		}

		var editRow = function (row) {
			if ($('modal').length != 0) {
				$('modal').remove();
			}

			$scope.editingRow = row;

			$('body').append('<modal value="editingRow"></modal>');
			var modal = $('modal');
			$compile(modal)($scope);
		}


		var historyRow = function (row) {
			if ($('history').length != 0) {
				$('history').remove();
			}

			$scope.historiedRow = row;

			$('body').append('<history value="historiedRow.actions.history"></history>');
			var history = $('history');
			$compile(history)($scope);
		}

		$scope.$watch('data', function (data) {
			if ($scope.options.reInit) {
				var columns = [];

				if ($scope.options.enableDetails) {
					columns.push({
						field: 'details', displayName: '', headerCellTemplate: $scope.options.headerCellTemplate, cellTemplate: $scope.options.detailsCellTemplate, enableSorting: false, width: $scope.options.detailsWidth, minWidth: $scope.options.detailsMinWidth, enableFiltering: $scope.options.enableColumnFilter,
						cellClass: $scope.options.cellClass
					});
				}

				if (data[0]) {
					for (var i = 0; i < data.length; i++) {
						if (data[i].isColumn) {
							return;
						}
					}

					for (var field in data[0]) {

						if (field == '$$hashKey') {
							continue;
						}

						columns.push({
							field: field,
							displayName: field,
							enableFiltering: $scope.options.enableColumnFilter,
							minWidth: $scope.options.columnMinWidth,
							cellClass: $scope.options.cellClass
						})
					}
				}

				if ($scope.options.enableAction) {
					columns.push({
						field: 'action', displayName: '', cellTemplate: $scope.options.actionsCellTemplate, headerCellTemplate: $scope.options.headerCellTemplate, enableSorting: false, width: $scope.options.actionsWidth, minWidth: $scope.options.actionsMinWidth, enableFiltering: $scope.options.enableColumnFilter,
						cellClass: $scope.options.cellClass
					});
				}

				$scope.options.columnDefs = columns;
			}
		});
	}]);
///#source 1 1 /app/directives/custom-ui-grid/custom-ui-grid.js
angular.module('gridTaskApp')
	.directive('customUiGrid', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				data: '=gridData',
				options: '=gridOptions',
				contentOptions: '='
			},
			controller: 'customUiGridCtrl',
			templateUrl: templatesPath + 'directive-templates/custom-ui-grid.html',
			link: function (scope, element, attrs) {
			}
		}
	}]);
///#source 1 1 /app/directives/custom-ui-grid/ui-grid-menu/ui-grid-menu.js
angular.module('gridTaskApp')
	.directive('uiGridCustomMenu', ['$timeout', 'uiGridGridMenuService', function ($timeout, uiGridGridMenuService) {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {
				var self = {};
				self.scope = scope;
				self.uiGridGridMenuService = uiGridGridMenuService;

				if (self.scope.options.showResponsMenu) {
					self.scope.options.enableGridMenu = true;
				}

				$timeout(function () {
					var totalWidth = this.scope.gridApi.grid.columns.reduce(function (a, b) {
						return a + b.minWidth;
					}, 0);

					var isAllVisible = true;

					if ($(window).width() < totalWidth) {
						for (var i = this.scope.gridApi.grid.columns.length - 2; i > 1; i--) {
							if (this.scope.gridApi.grid.columns[i].visible) {
								this.uiGridGridMenuService.toggleColumnVisibility(this.scope.gridApi.grid.columns[i]);
								totalWidth -= this.scope.gridApi.grid.columns[i].minWidth;
								isAllVisible = false;
							}
							if ($(window).width() > totalWidth) {
								break;
							}
						}
					}

					if (!isAllVisible && !self.scope.options.enableGridMenu) {
						self.scope.options.enableGridMenu = true;
					}

					$(window).resize(function () {
						var totalWidth = this.scope.gridApi.grid.columns.reduce(function (a, b) {
							if (b.visible) {
								return a + b.minWidth;
							}
							else {
								return a;
							}
						}, 0);

						if ($(window).width() < totalWidth) {
							for (var i = this.scope.gridApi.grid.columns.length - 2; i > 1; i--) {
								if (this.scope.gridApi.grid.columns[i].visible) {
									this.uiGridGridMenuService.toggleColumnVisibility(this.scope.gridApi.grid.columns[i]);
									totalWidth -= this.scope.gridApi.grid.columns[i].minWidth;
								}
								if ($(window).width() > totalWidth) {
									break;
								}
							}
						}
						else {
							for (var i = 0; i < this.scope.gridApi.grid.columns.length; i++) {
								if (!this.scope.gridApi.grid.columns[i].visible) {
									if ($(window).width() < totalWidth + this.scope.gridApi.grid.columns[i].minWidth) {
										break;
									}
									this.uiGridGridMenuService.toggleColumnVisibility(this.scope.gridApi.grid.columns[i]);
									totalWidth += this.scope.gridApi.grid.columns[i].minWidth;
								}
							}
						}

						if (!self.scope.options.showResponsMenu) {

							var isAllVisible = true;

							for (var i = 0; i < this.scope.gridApi.grid.columns.length; i++) {
								if (!this.scope.gridApi.grid.columns[i].visible) {
									isAllVisible = false;
								}
							}

							if (isAllVisible) {
								self.scope.options.enableGridMenu = false;
							}
							else {
								self.scope.options.enableGridMenu = true;
							}
						}

					}.bind(this));
				}.bind(self));
			}
		}
	}]);
///#source 1 1 /app/directives/details/details.js
angular.module('gridTaskApp')
	.directive('details', ['$compile', '$timeout', function ($compile, $timeout) {
		return {
			restict: 'A',
			scope: {
				row: '=',
				detailsClass: '='
			},
			link: function (scope, element, attrs) {
				element.click(function () {
					scope.row.orig.actions.isToggle = !scope.row.orig.actions.isToggle;

					scope.row.orig.actions.setToggle(scope.row.orig, scope.row.orig.actions.isToggle, scope.detailsClass);
				});
			}
		}
	}]);

///#source 1 1 /app/directives/dropdown/dropdown-controller.js
angular.module('gridTaskApp')
	.controller('dropdownCtrl', ['$scope', 'classes', function ($scope, classes) {
		if (!$scope.options.showClass) {
			$scope.options.showClass = classes.menuUp;
		}
		if (!$scope.options.hideClass) {
			$scope.options.hideClass = classes.menuDown;
		}

		if (!$scope.options.isMenu) {
			$scope.options.selected = $scope.options.values[0];

			if ($scope.options.callback) {
				$scope.options.callback($scope.options.selected);
			}
		}
		else {
			$scope.options.selected = {};
		}

		$scope.select = function (action) {
			$scope.options.selected = action;

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
			templateUrl: templatesPath + 'directive-templates/dropdown.html',
			link: function (scope, element, attrs) {
				element.find('ul').hide();
				element.find('.my-dropdown__expand').addClass(scope.options.hideClass);

				element.click(function () {
					if (element.find('ul').is(':visible')) {
						element.find('ul').hide();
						element.find('.my-dropdown__expand').addClass(scope.options.hideClass);
						element.find('.my-dropdown__expand').removeClass(scope.options.showClass);
						element.find('.my-dropdown__btn').removeClass('opened');
					}
					else {
						element.find('ul').show();
						element.find('.my-dropdown__expand').removeClass(scope.options.hideClass);
						element.find('.my-dropdown__expand').addClass(scope.options.showClass);
						element.find('.my-dropdown__btn').addClass('opened');
					}
				});

				$(document).click(function (event) {
					if (element.find('ul').is(':visible')) {
						if (!$(event.target).closest(element).length) {
							element.find('ul').hide();
							element.find('.my-dropdown__expand').addClass(scope.options.hideClass);
							element.find('.my-dropdown__expand').removeClass(scope.options.showClass);
							element.find('.my-dropdown__btn').removeClass('opened');
						}
					}
				})
			}
		}
	}]);
///#source 1 1 /app/directives/dropdown/dynamic-dropdown/dynamic-dropdown.js
angular.module('gridTaskApp')
	.directive('dynamicDropdown', ['templatesPath', '$compile', '$timeout', function (templatesPath, $compile, $timeout) {
		return {
			restrict: 'A',
			scope: {
				origOpt: '=',
				dropdownOpt: '=',
				col: '=',
				row: '=',
				reInit: '=',
				toResize: '='
			},
			templateUrl: templatesPath + 'grid-templates/dynamic-actions.html',
			link: function (scope, element, attrs) {

				var dynamic = function () {
					for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
						if (!scope.dynamicOpt.values[i].isVisible) {
							scope.totalWidth += scope.dynamicOpt.values[i].width;
							if (scope.totalWidth + scope.offset.left > $('body').prop('scrollWidth')) {
								scope.totalWidth -= scope.dynamicOpt.values[i].width;
								break;
							}
							else {
								scope.dynamicOpt.values[i].toggleVisible(true);
							}
						}
					}

					scope.$apply();

					if (scope.dropdownOpt.isVisible) {
						if (scope.dropdownOpt.width === undefined) {
							scope.dropdownOpt.width = element.parent().find('dropdown').width();
						}
						scope.totalWidth += scope.dropdownOpt.width;

						for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
							if (!scope.dynamicOpt.values[i].isVisible) {
								if (scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]) == -1) {
									scope.dropdownOpt.values.push(scope.dynamicOpt.values[i]);
								}
							}
							else {
								scope.dropdownOpt.values.splice(scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]), 1);
							}
						}
					}
					else {
						scope.totalWidth -= scope.dropdownOpt.width;
					}

					if (scope.totalWidth + scope.offset.left > $('body').prop('scrollWidth')) {
						for (var i = scope.dynamicOpt.values.length - 1; i > -1; i--) {
							if (scope.dynamicOpt.values[i].isVisible) {
								scope.dynamicOpt.values[i].toggleVisible(false);
								scope.totalWidth -= scope.dynamicOpt.values[i].width;
								if (scope.totalWidth + scope.offset.left < $('body').prop('scrollWidth')) {
									break;
								}
							}
						}

						for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
							if (!scope.dynamicOpt.values[i].isVisible) {
								if (scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]) == -1) {
									scope.dropdownOpt.values.push(scope.dynamicOpt.values[i]);
								}
							}
							else {
								scope.dropdownOpt.values.splice(scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]), 1);
							}
						}
					}
				}

				var undynamic = function () {
					for (var i = scope.dynamicOpt.values.length - 1; i > -1; i--) {
						if (scope.dynamicOpt.values[i].isVisible) {
							scope.dynamicOpt.values[i].toggleVisible(false);
							scope.totalWidth -= scope.dynamicOpt.values[i].width;
							if (scope.totalWidth + scope.offset.left < $('body').prop('scrollWidth')) {
								break;
							}
						}
					}

					scope.$apply();

					if (scope.dropdownOpt.isVisible) {
						if (scope.dropdownOpt.width === undefined) {
							scope.dropdownOpt.width = element.parent().find('dropdown').width();
						}
						scope.totalWidth += scope.dropdownOpt.width;

						for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
							if (!scope.dynamicOpt.values[i].isVisible) {
								if (scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]) == -1) {
									scope.dropdownOpt.values.push(scope.dynamicOpt.values[i]);
								}
							}
							else {
								scope.dropdownOpt.values.splice(scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]), 1);
							}
						}
					}
					else {
						scope.totalWidth -= scope.dropdownOpt.width;
					}

					if (scope.totalWidth + scope.offset.left > $('body').prop('scrollWidth')) {
						for (var i = scope.dynamicOpt.values.length - 1; i > -1; i--) {
							if (scope.dynamicOpt.values[i].isVisible) {
								scope.dynamicOpt.values[i].toggleVisible(false);
								scope.totalWidth -= scope.dynamicOpt.values[i].width;
								if (scope.totalWidth + scope.offset.left < $('body').prop('scrollWidth')) {
									break;
								}
							}
						}

						for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
							if (!scope.dynamicOpt.values[i].isVisible) {
								if (scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]) == -1) {
									scope.dropdownOpt.values.push(scope.dynamicOpt.values[i]);
								}
							}
							else {
								scope.dropdownOpt.values.splice(scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]), 1);
							}
						}
					}
				}

				scope.dynamicOpt = angular.copy(scope.origOpt);
				scope.dropdownOpt = angular.copy(scope.origOpt);
				scope.dropdownOpt.values = [];
				scope.dropdownOpt.style = { "z-index": "-1" };

				scope.dropdownOpt.isVisible = true;

				for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
					scope.dynamicOpt.values[i].isVisible = true;
					scope.dynamicOpt.values[i].toggleVisible = function (value) {
						this.isVisible = value;
					}
				}

				scope.$watch('toResize', function (value) {
					if (value) {
					}
				});

				scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
					scope.totalWidth = 20;
					scope.offset = element.parent().offset();

					for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
						scope.dynamicOpt.values[i].width = element.find('.' + scope.dynamicOpt.values[i].label).width();
						scope.totalWidth += scope.dynamicOpt.values[i].width;
					}

					if (scope.totalWidth + scope.offset.left < $('body').prop('scrollWidth')) {
						dynamic();
					}
					else {
						undynamic();
					}

					var countVisible = 0;
					for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
						if (scope.dynamicOpt.values[i].isVisible) {
							countVisible += 1;

							if (countVisible > 2) {
								countVisible -= 1;
								scope.dynamicOpt.values[i].toggleVisible(false);
							}
						}
					}

					if (countVisible > 0) {
						scope.dropdownOpt.label = "More";
					}
					else {
						scope.dropdownOpt.label = "Actions";
					}

					scope.dropdownOpt.style = { "z-index": "9" };
				});



				$(window).resize(function () {
					if (element.parent().offset().left != 0) {
						scope.offset = element.parent().offset();
					}

					scope.totalWidth = 20;

					for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
						if (scope.dynamicOpt.values[i].isVisible) {
							scope.totalWidth += scope.dynamicOpt.values[i].width;
						}
					}

					if (scope.dropdownOpt.isVisible) {
						scope.totalWidth += scope.dropdownOpt.width;
					}

					if (scope.totalWidth + scope.offset.left < $('body').prop('scrollWidth')) {
						scope.dynamicOpt.values.sort(function (a, b) {
							if (a.priority > b.priority) {
								return -1;
							}
							if (a.priority < b.priority) {
								return 1;
							}

							return 0;
						});

						var countVisible = 0;

						for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
							if (scope.dynamicOpt.values[i].isVisible) {
								scope.totalWidth -= scope.dynamicOpt.values[i].width;
								scope.dynamicOpt.values[i].toggleVisible(false);
							}

							if (scope.totalWidth + scope.offset.left + scope.dynamicOpt.values[i].width < $('body').prop('scrollWidth')) {
								scope.totalWidth += scope.dynamicOpt.values[i].width;
								scope.dynamicOpt.values[i].toggleVisible(true);
								countVisible += 1;
							}

							if (countVisible == 2) {
								break;
							}
						}

						if (countVisible > 0) {
							scope.dropdownOpt.label = "More";
						}
						else {
							scope.dropdownOpt.label = "Actions";
						}
					}
					else {
						scope.dynamicOpt.values.sort(function (a, b) {
							if (a.priority > b.priority) {
								return 1;
							}
							if (a.priority < b.priority) {
								return -1;
							}

							return 0;
						});

						var countVisible = 0;

						for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
							if (scope.dynamicOpt.values[i].isVisible) {
								scope.totalWidth -= scope.dynamicOpt.values[i].width;
								scope.dynamicOpt.values[i].toggleVisible(false);
							}

							if (scope.totalWidth + scope.offset.left + scope.dynamicOpt.values[i].width < $('body').prop('scrollWidth')) {
								scope.totalWidth += scope.dynamicOpt.values[i].width;
								scope.dynamicOpt.values[i].toggleVisible(true);
								countVisible += 1;
							}

							if (countVisible == 2) {
								break;
							}
						}

						if (countVisible > 0) {
							scope.dropdownOpt.label = "More";
						}
						else {
							scope.dropdownOpt.label = "Actions";
						}
					}

					scope.dropdownOpt.values = [];

					for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
						if (!scope.dynamicOpt.values[i].isVisible) {
							scope.dropdownOpt.values.push(scope.dynamicOpt.values[i]);
						}
					}

					scope.$apply()
				});
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
	.directive('filter', ['templatesPath', 'classes', function (templatesPath, classes) {
		return {
			restrict: 'E',
			scope: {
				listState: '=',
				filterOptions: '=options',
				filtrate: '='
			},
			controller: 'filterCtrl',
			templateUrl: templatesPath + 'directive-templates/filter.html',
			link: function (scope, element, attrs) {
				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						scope.listState = false;
						scope.$apply();
					}
				})

				element.find('span.expand').addClass(classes.menuDown);

				scope.$watch('listState', function (value) {
					if (value) {
						element.find('filter-list').resize();
						element.addClass('filter-selected');
						element.find('span.expand').removeClass(classes.menuDown);
						element.find('span.expand').addClass(classes.menuUp);
					}
					else {
						element.removeClass('filter-selected');
						element.find('span.expand').addClass(classes.menuDown);
						element.find('span.expand').removeClass(classes.menuUp);
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
			templateUrl: templatesPath + 'directive-templates/filter-list.html',
			controller: 'filterListCtrl',
			link: function (scope, element, attrs) {
			}
		}
	}]);
///#source 1 1 /app/directives/graphs/graphs.js
angular.module('gridTaskApp')
	.directive('graphs', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'A',
			scope: {
				graphs: '='
			},
			templateUrl: templatesPath + 'directive-templates/graphs.html',
			link: function (scope, element, attrs) {

			}
		}
	}]);
///#source 1 1 /app/directives/history/history-controller.js
angular.module('gridTaskApp')
	.controller('historyCtrl', ['$scope', function ($scope) {
		$scope.isModal = true;

		$scope.close = function () {
			$scope.isModal = false;
		};
	}]);
///#source 1 1 /app/directives/history/history.js
angular.module('gridTaskApp')
	.directive('history', ['templatesPath', '$timeout', function (templatesPath, $timeout) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'directive-templates/history.html',
			controller: 'historyCtrl',
			scope: {
				history: '=value'
			},
			link: function (scope, element, attrs) {
				scope.$watch('isModal', function (value) {
					$timeout(function () {
						if (!value) {
							$('body').css('overflow', 'inherit');
							element.remove();
						}
						else {
							element.find('.fade').css('height', element.find('.modal').prop('scrollHeight') + 'px');
							element.find('.fade').css('width', element.find('.modal').prop('scrollWidth') + 'px');
							$('body').css('overflow', 'hidden');
						}
					});
				})

				$(window).resize(function () {
					element.find('.fade').css('height', element.find('.modal').prop('scrollHeight') + 'px');
					element.find('.fade').css('width', element.find('.modal').prop('scrollWidth') + 'px');
				});
			}
		}
	}]);
///#source 1 1 /app/directives/kx-date-range/kx-date-range.js
angular.module('gridTaskApp').directive('kxDateRange', ['$parse', '$translate', function ($parse, $translate) {
	return {
		restrict: 'CAE',
		require: '?ngModel',
		compile: function (elem, attr) {
			if (attr.disableEdit) {
				elem.append("<span class=\"kx-daterangepicker\">\n  <span class=\"add-on glyph-calendar\">\n    <i class=\"icon-calendar icon-large\"></i>\n  </span>\n  <form ng-submit=\"onHitReturn()\">\n    <input kx-stealth-input\n    ng-model=\"inputValue\"\n    ng-change=\"onInputChange()\"\n    ng-class=\"{'ng-invalid': isInvalid}\" readonly></input>\n  </form>\n</span>");
			} else {
				elem.append('<span class="kx-daterangepicker">\n  <span class="add-on glyph-calendar">\n    <i class="icon-calendar icon-large"></i>\n  </span>\n  <form ng-submit="onHitReturn()">\n    <input kx-stealth-input\n    ng-model="inputValue"\n    ng-change="onInputChange()"\n    ng-class="{\'ng-invalid\': isInvalid}"></input>\n  </form>\n</span>');
			}
			elem.after('<span ng-show="isInvalid" class="help-inline calendar-invalid-msg">{{"Incorrect Date" | translate}}</span>');
			return function ($scope, elem, attr, ngModelCtrl) {
				var format, inputRender, isValid, offset, onApplyRange, onModelChange, open, renderRange, separator;
				isValid = function (arg) {
					var end, isSyntacticValid, start;
					start = arg.start, end = arg.end;
					isSyntacticValid = start.isValid() && end.isValid();
					return isSyntacticValid && (attr.timeRange === 'future' ? start && end && (moment() <= start && start <= end) : attr.timeRange === 'past' ? start && end && (start <= end && end <= moment()) : start && end);
				};
				offset = elem.offset();
				if (offset.left <= 400) {
					open = 'right';
				} else {
					open = 'left';
				}
				format = attr.format || 'MMM DD, YYYY';
				separator = attr.separator || ' - ';
				renderRange = function (range) {
					return range.start.format(format) + separator + range.end.format(format);
				};
				onApplyRange = _.bind(function (start, end) {
					if ((!start.isSame(ngModelCtrl.$viewValue.start)) || (!end.isSame(ngModelCtrl.$viewValue.end))) {
						$scope.inputValue = renderRange({
							start: start,
							end: end
						});
						ngModelCtrl.$setViewValue({
							start: start,
							end: end
						});
						return ngModelCtrl.$setValidity('parses', true);
					}
				});
				$scope.onHitReturn = function () {
					var data;
					data = elem.data('daterangepicker');
					return onApplyRange(data.startDate, data.endDate);
				};
				$scope.onInputChange = function () {
					var dates, picker, range;
					dates = $scope.inputValue.split(separator);
					if (dates.length === 2) {
						range = {
							start: moment(dates[0], format, true),
							end: moment(dates[1], format, true)
						};
						picker = elem.data('daterangepicker');
						picker.setStartDate(range.start);
						picker.setEndDate(range.end);
						return $scope.isInvalid = !isValid(range);
					} else {
						return $scope.isInvalid = true;
					}
				};
				onModelChange = function (dateRange) {
					var elemData, end, ret, start;
					if (dateRange && dateRange.start) {
						start = dateRange.start, end = dateRange.end;
						elemData = elem.data('daterangepicker');
						elemData.oldStartDate = start;
						elemData.oldEndDate = end;
						elemData.startDate = start;
						elemData.endDate = end;
						elemData.updateView();
						elemData.updateCalendars();
						ret = renderRange(dateRange);
						$scope.inputValue = ret;
						return ret;
					}
				};
				ngModelCtrl.$parsers.push(function (val) {
					var dates, range;
					if (_.isString(val)) {
						dates = val.split(separator);
						range = {
							start: moment(dates[0], format, true),
							end: moment(dates[1], format, true)
						};
						ngModelCtrl.$setValidity('parses', isValid(range));
						if (isValid(range)) {
							return range;
						}
					} else {
						return val;
					}
				});
				inputRender = ngModelCtrl.$render;
				ngModelCtrl.$render = function () {
					inputRender();
					return elem.trigger('keyup');
				};
				return $translate(['Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days', 'This Month', 'Last Month', 'Last 3 Months', 'Apply', 'Cancel', 'From', 'To', 'W', 'Custom Range']).then(function (tr) {
					var current, end, i, j, modeRanges, options, rangeList, start;
					ngModelCtrl.$formatters.push(onModelChange);
					rangeList = [[tr['Today'], [moment(), moment()]], [tr['Yesterday'], [moment().subtract(1, 'days'), moment().subtract(1, 'days')]], [tr['Last 7 Days'], [moment().subtract(7, 'days'), moment().subtract(1, 'days')]], [tr['Last 30 Days'], [moment().subtract(30, 'days'), moment().subtract(1, 'days')]], [tr['This Month'], [moment().startOf('month'), moment().subtract(1, 'days')]], [tr['Last Month'], [moment().subtract(1, 'months').startOf('month'), moment().subtract(1, 'months').endOf('month')]], [tr['Last 3 Months'], [moment().subtract(3, 'months').startOf('month'), moment().subtract(1, 'months').endOf('month')]]];
					modeRanges = {
						'kx-date-range': _.object(rangeList),
						'exceptToday': _.object(_.rest(rangeList)),
						'lastYear': {}
					};
					for (i = j = 11; j >= 0; i = --j) {
						current = function () {
							return moment().subtract('months', i);
						};
						start = current().startOf('month');
						end = i === 0 ? current() : current().endOf('month');
						modeRanges.lastYear[current().format('MMM YYYY')] = [start, end];
					}
					options = {
						format: format,
						separator: separator,
						startDate: moment().subtract('day', 6),
						endDate: moment(),
						locale: {
							applyLabel: tr['Apply'],
							cancelLabel: tr['Cancel'],
							fromLabel: tr['From'],
							toLabel: tr['To'],
							weekLabel: tr['W'],
							customRangeLabel: tr['Custom Range']
						}
					};
					if (attr.timeRange === 'future') {
						_.extend(options, {
							minDate: moment()
						});
					} else if (attr.timeRange === 'past') {
						_.extend(options, {
							maxDate: moment(),
							opens: open,
							ranges: modeRanges[attr.kxDateRange]
						});
					}
					elem.daterangepicker(options);
					if (!onModelChange(ngModelCtrl.$modelValue)) {
						onModelChange({
							start: options.startDate,
							end: options.endDate
						});
					}
					elem.on('apply.daterangepicker', function (e, picker) {
						return onApplyRange(picker.startDate, picker.endDate);
					});

					$('.daterangepicker.dropdown-menu').css('display', 'none');

					return ngModelCtrl.$render();
				});
			};
		}
	};
}]);
///#source 1 1 /app/directives/kx-multiselect/kx-multiselect.js
angular.module('gridTaskApp')
	.directive('kxMultiselect', ['$timeout', function ($timeout) {
		return {
			restrict: 'A',
			scope: {
				options: '=kxMultiselect'
			},
			link: function (scope, element, attrs) {
				$timeout(function () {
					element.multiselect({
						inheritClass: true,
						includeSelectAllOption: true
						//enableFiltering: true
					});
				})
			}
		}
	}]);
///#source 1 1 /app/directives/kx-nav-bar/file1.js

///#source 1 1 /app/directives/kx-nav-bar/kx-menu.js
(function () {
	angular.module('gridTaskApp').directive('kxMenu', [function () {
		return {
			restrict: 'AE',
			link: function ($scope, elem, attrs) {
				var current, listItems, menuItems, selected;
				listItems = null;
				current = null;
				selected = null;
				menuItems = null;

				$scope.session = { user: { id: 1 } };

				return $scope.$watch('session.user.id', function (userId) {
					var click, close, init, mouseenter, mouseleave, navItem, _ref;
					if (userId && ((_ref = $scope.navigationTree) != null ? _ref.length : void 0) > 0) {
						listItems = elem.children('ul').children('li');
						if (sessionStorage.selectedNav) {
							navItem = JSON.parse(sessionStorage.selectedNav);
							selected = listItems.eq(1);
							selected.addClass('kx-menu-selected');
						}
						init = function () {
							listItems.mouseenter(mouseenter);
							return listItems.mouseleave(mouseleave);
						};
						mouseenter = function (event) {
							current = listItems.filter(this);
							current.addClass('kx-menu-open');
							menuItems = current.children('.kx-submenu').find('a');
							return menuItems.click(click);
						};
						mouseleave = function (event) {
							if (current) {
								return close();
							}
						};
						click = function (event) {
							if (selected) {
								selected.removeClass('kx-menu-selected');
							}
							selected = current;
							selected.addClass('kx-menu-selected');
							navItem = {
								index: _.indexOf(listItems, selected[0])
							};
							sessionStorage.selectedNav = JSON.stringify(navItem);
							return close();
						};
						close = function () {
							current.removeClass('kx-menu-open');
							current = null;
							menuItems.off('click');
							return menuItems = null;
						};
						return init();
					}
				});
			}
		};
	}]);

}).call(this);
///#source 1 1 /app/directives/kx-nav-bar/kx-nav-bar-controller.js
angular.module('gridTaskApp')
	.controller('kxNavBarCtrl', ['$scope', function ($scope) {

	}]);
///#source 1 1 /app/directives/kx-nav-bar/kx-nav-bar.js
angular.module('gridTaskApp')
	.directive('kxNavBar', ['templatesPath', function myfunction(templatesPath) {
		return {
			restrict: 'A',
			controller: 'kxNavBarCtrl',
			scope: {
			},
			templateUrl: templatesPath + 'directive-templates/kx-nav-bar.html',
			link: function (scope, element, attrs) {
			}
		}
	}, ]);
///#source 1 1 /app/directives/kx-nav-bar/navigation-controller.js
angular.module('gridTaskApp').controller('NavigationCtrl', ['$scope', 'NavigationTree', function ($scope, NavigationTree) {
	return $scope.navigationTree = NavigationTree.get();
}]);
///#source 1 1 /app/directives/kx-stealth-input/kx-stealth-input.js
angular.module('gridTaskApp').directive('kxStealthInput', function () {
	return {
		restrict: "CAE",
		controller: function ($scope) { },
		link: function ($scope, elem, attrs) {
			var focus, hover, update;
			focus = false;
			hover = false;
			update = function () {
				return elem.toggleClass('stealth-mode', !(focus || hover));
			};
			elem.focus(function () {
				focus = true;
				return update();
			});
			elem.blur(function () {
				focus = false;
				return update();
			});
			elem.mouseover(function () {
				hover = true;
				return update();
			});
			elem.mouseout(function () {
				hover = false;
				return update();
			});
			return update();
		}
	};
});
///#source 1 1 /app/directives/loading/loading.js
angular.module('gridTaskApp')
	.directive('loading', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'directive-templates/loading.html',
			link: function (scope, element, attrs) {
				element.css('height', element.parent().parent().height() + 'px');
				element.css('width', element.parent().parent().width() + 'px');

				element.find('.loading-disabled').css('top', 0);

				element.find('.loading-disabled').css('height', element.parent().parent().height() + 'px');
				element.find('.loading-disabled').css('width', element.parent().parent().width() + 'px');

				$(window).resize(function () {
					element.css('height', element.parent().parent().height() + 'px');
					element.css('width', element.parent().parent().width() + 'px');

					element.find('.loading-disabled').css('top', 0);

					element.find('.loading-disabled').css('height', element.parent().parent().height() + 'px');
					element.find('.loading-disabled').css('width', element.parent().parent().width() + 'px');
				});
			}
		}
	}]);
///#source 1 1 /app/directives/max-heighter/max-heighter.js
angular.module('gridTaskApp')
	.directive('maxHeighter', ['$timeout', function ($timeout) {
		return {
			restrict: 'A',
			scope: {},
			link: function (scope, element, attrs) {
				$timeout(function () {
					resize(10, 300);

					$(window).resize(function () {
						resize(10, 300);
					});
				});

				function resize(size, min) {
					element.css('max-height', $(window).height() - element.offset().top - size + 'px');

					if ($(window).height() - element.offset().top - size > min) {
						$timeout(function () {
							$('.custom-overlay').css('min-height', ($(window).height() - element.offset().top - size) + 'px')
							$('.custom-overlay').css('top', element.offset().top + 'px')
						});
					}
					else {
						$timeout(function () {
							$('.custom-overlay').css('min-height', $(window).height() - $('.page-content__cards').offset().top - 8 + 'px')
							$('.custom-overlay').css('top', $('.page-content__cards').offset().top + 'px')
						});
					}

				}
			}
		}
	}]);
///#source 1 1 /app/directives/modal/modal-controller.js
angular.module('gridTaskApp')
	.controller('modalCtrl', ['$scope', function ($scope) {
		$scope.isModal = true;

		$scope.fields = [];

		$scope.myEntity = {};

		$scope.myEntity = angular.copy($scope.value.entity);

		$scope.save = function () {
			if (!Array.isArray($scope.value.actions.history)) {
				$scope.value.actions.history = [];
			}

			$scope.value.actions.history.push({
				dateChange: new Date(),
				oldObj: angular.copy($scope.value.entity),
				newObj: angular.copy($scope.myEntity)
			})

			for (var field in $scope.myEntity) {
				$scope.value.entity[field] = $scope.myEntity[field];
			}

			$scope.close();
		};

		$scope.close = function () {
			$scope.myEntity = {};
			$scope.isModal = false;
		};

	}]);
///#source 1 1 /app/directives/modal/modal.js
angular.module('gridTaskApp')
	.directive('modal', ['templatesPath', '$timeout', function (templatesPath, $timeout) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'directive-templates/modal.html',
			scope: {
				value: '='
			},
			controller: 'modalCtrl',
			link: function (scope, element, attrs) {
				scope.$watch('isModal', function (value) {
					$timeout(function () {
						if (!value) {
							$('body').css('overflow', 'inherit');
							element.remove();
						}
						else {
							element.find('.fade').css('height', element.find('.modal').prop('scrollHeight') + 'px');
							element.find('.fade').css('width', element.find('.modal').prop('scrollWidth') + 'px');
							$('body').css('overflow', 'hidden');
						}
					});
				})

				$(window).resize(function () {
					element.find('.fade').css('height', element.find('.modal').prop('scrollHeight') + 'px');
					element.find('.fade').css('width', element.find('.modal').prop('scrollWidth') + 'px');
				});
			}
		}
	}]);
///#source 1 1 /app/directives/mouse-over/mouse-over.js
angular.module('gridTaskApp')
	.directive('mouseOver', ['templatesPath', '$timeout', function (templatesPath, $timeout) {
		return {
			restrict: 'E',
			scope: {
				type: '=',
				value: '=',
				parentTop: '=parentTop'
			},
			templateUrl: templatesPath + 'directive-templates/mouse-over.html',
			link: function (scope, element, attrs) {
				element.find('.mouse-over').css('visibility', 'hidden');

				if (scope.parentTop === undefined) {
					scope.parentTop = 0;
				}

				$timeout(function () {
					if ($.cursorMessageData.mouseY + element.find('.mouse-over').height() < $(window).height()) {
						element.find('.mouse-over').css('top', ($.cursorMessageData.mouseY - scope.parentTop + 15) + 'px');
					}
					else {
						element.find('.mouse-over').css('top', ($.cursorMessageData.mouseY - element.find('.mouse-over').height() - scope.parentTop - 20) + 'px');
					}

					if ($.cursorMessageData.mouseX + 10 + element.find('.mouse-over').width() < $(window).width()) {
						element.find('.mouse-over').css('left', ($.cursorMessageData.mouseX + 10) + 'px');
					}
					else {
						element.find('.mouse-over').css('left', $(window).width() - element.find('.mouse-over').width() - 10 + 'px');
					}

					element.find('.mouse-over').css('visibility', 'visible');
				});

			}
		}
	}]);
///#source 1 1 /app/directives/number-format/number-format.js
angular.module('gridTaskApp')
	.directive('numberFormat', [function () {
		return {
			restrict: 'A',
			scope: {
				number: '=numberFormat'
			},
			link: function (scope, element, atrrs) {
				element.html(nFormatter(scope.number, 1));

				scope.$watch('number', function (num) {
					element.html(nFormatter(num, 1));
				})
			}
		}
	}]);

function nFormatter(num, digits) {
	var si = [
	  { value: 1E18, symbol: "E" },
	  { value: 1E15, symbol: "P" },
	  { value: 1E12, symbol: "T" },
	  { value: 1E9, symbol: "G" },
	  { value: 1E6, symbol: "M" },
	  { value: 1E3, symbol: "k" }
	], i;
	for (i = 0; i < si.length; i++) {
		if (num >= si[i].value) {
			return (num / si[i].value).toFixed(digits).replace(/\.?0+$/, "") + si[i].symbol;
		}
	}
	return num;
}
///#source 1 1 /app/directives/on-finish-render/onFinishRender.js
angular.module('gridTaskApp')
    .directive('onFinishRender', function ($timeout) {
    	return {
    		restrict: 'A',
    		link: function (scope, element, attr) {
    			if (scope.$last === true) {
    				$timeout(function () {
    					scope.$emit('ngRepeatFinished');
    				});
    			}
    		}
    	}
    });
///#source 1 1 /app/directives/overlay/overlay.js
angular.module('gridTaskApp')
	.directive('overlay', ['$timeout', function ($timeout) {
		return {
			restrict: 'A',
			scope: {
				state: '=overlayState',
				style: '=overlayStyle'
			},
			link: function (scope, element, attrs) {

				$timeout(function () {
					scope.style = { 'left': getWindowWidth() - 30 + 'px', 'transition': 'none', 'overflow': 'hidden' }

					scope.$watch('state', function (state) {
						if (state) {
							if (getWindowWidth() + 650 > 1750) {
								scope.style = { 'left': '650px' }
							}
							else {
								scope.style = { 'left': '0' };
							}
						}
						else {
							if (scope.style.left != getWindowWidth() - 30 + 'px') {
								scope.style = { 'left': getWindowWidth() - 30 + 'px', 'overflow': 'hidden' }
							}

							element.scrollTop(0);
						}
					});
				});

				$(window).resize(function () {
					if (scope.state) {
						if (getWindowWidth() + 650 > 1750) {
							scope.style = { 'left': '650px', 'transition': 'none' }
						}
						else {
							scope.style = { 'left': '0', 'transition': 'none' }
						}
					}
					else {
						scope.style = { 'left': getWindowWidth() - 30 + 'px', 'transition': 'none', 'overflow': 'hidden' }
					}

					scope.$apply();
				});
			}
		}
	}]);
///#source 1 1 /app/directives/page-content/page-content.js
angular.module('gridTaskApp')
	.directive('pageContent', ['templatesPath',  'content', function (templatesPath, content) {
		return {
			restrict: 'E',
			scope: {
				data: '=gridData',
				contentOptions: '=',
				grid: '=',
				gridOptions: '=',
				uiGridOptions: '='
			},
			templateUrl: templatesPath + 'directive-templates/page-content.html',
			link: function (scope, element) {
				var initializer = new Initializer(scope, element, content, templatesPath, $compile);

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
///#source 1 1 /app/directives/page-content/content-options/content-options-controller.js
angular.module('gridTaskApp')
	.controller('contentOptionsCtrl', ['$scope', function ($scope) {
		$scope.$watch('options.searchValue', function (value) {
			if (!$scope.options.searchOptions) {
				return;
			}

			if ($scope.options.searchOptions.selected.label == 'everywhere') {
				$scope.options.search(value);
			} else {
				$scope.options.search($scope.options.searchOptions.selected.label + ':' + value);
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
			templateUrl: templatesPath + 'directive-templates/content-options.html'
		}
	}]);
///#source 1 1 /app/directives/page-content/page-content-body/page-content-body.js
angular.module('gridTaskApp')
	.directive('pageContentBody', [function () {
		return {
			restrict: 'E',
			link: function (scope, element, attrs) {
				element.append(scope.contentOptions.contentBodyTemplate);

				scope.$watch('contentOptions.contentBodyTemplate', function (template) {
					element.html('');
					element.append(template);
				});
			}
		}
	}]);
///#source 1 1 /app/directives/page-content/page-content-footer/page-content-footer.js
angular.module('gridTaskApp')
	.directive('pageContentFooter', [function () {
		return {
			restrict: 'E',
			link: function (scope, element, attrs) {
				element.append(scope.contentOptions.contentFooterTempalte);

				scope.$watch('contentOptions.contentFooterTempalte', function (template) {
					element.html('');
					element.append(template);
				});
			}
		}
	}]);
///#source 1 1 /app/directives/page-content/page-content-header/page-content-header.js
angular.module('gridTaskApp')
	.directive('pageContentHeader', [function () {
		return {
			restrict: 'E',
			link: function (scope, element, attrs) {
				element.append(scope.contentOptions.contentHeaderTempalte);

				scope.$watch('contentOptions.contentHeaderTempalte', function (template) {
					element.html('');
					element.append(template);
				});
			}
		}
	}]);
///#source 1 1 /app/directives/page-content-cards/page-content-cards.js
angular.module('gridTaskApp')
	.directive('pageContentCards', ['templatesPath', 'content', '$compile', function (templatesPath, content, $compile) {
		return {
			restrict: 'E',
			scope: {
				data: '=gridData',
				contentOptions: '=',
				uiGridOptions: '=',
				cardsOptions: '='
			},
			templateUrl: templatesPath + 'directive-templates/page-content-cards.html',
			link: function (scope, element) {
				var initializer = new Initializer(scope, element, content, templatesPath, $compile);
				initializer.initCards();

				scope.$watch('cardsOptions.dateRange', function (date) {
					if (date) {
						for (var card in scope.cardsOptions.cards) {
							if (scope.cardsOptions.cards[card].counter) {
								scope.cardsOptions.cards[card].count = scope.cardsOptions.cards[card].counter.calculate(scope.cardsOptions.startDate, scope.cardsOptions.endDate);
							}
						}
					}
				});
			}
		};
	}])
///#source 1 1 /app/directives/page-content-cards/content-options-cards/content-options-cards-controller.js
angular.module('gridTaskApp')
	.controller('contentOptionsCardsCtrl', ['$scope', function ($scope) {
		$scope.$watch('options.searchValue', function (value) {
			if (!$scope.options.searchOptions) {
				return;
			}

			if ($scope.options.searchOptions.selected.label == 'everywhere') {
				$scope.options.search(value);
			} else {
				$scope.options.search($scope.options.searchOptions.selected.label + ':' + value);
			}
		});

	}]);
///#source 1 1 /app/directives/page-content-cards/content-options-cards/content-options-cards.js
angular.module('gridTaskApp')
	.directive('contentOptionsCards', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			controller: 'contentOptionsCardsCtrl',
			scope: {
				options: '=',
				startDate: '=',
				endDate: '=',
				dateRange: '='
			},
			templateUrl: templatesPath + 'directive-templates/content-options-cards.html'
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
					element.css('left', element.parent().position().left + 'px');
				}
				else {
					element.css('right', '0');
					element.css('left', 'auto');
				}

				element.css('top', element.parent().height() + 'px');

				$(window).resize(function () {
					element.css('width', (element.parent().position().left + element.parent().width()) + 'px');

					if (element.width() < element.css('min-width').replace('px', '')) {
						element.css('right', 'auto');
						element.css('width', '450px');
						element.css('left', element.parent().position().left + 'px');
					} else {
						element.css('right', '0');
						element.css('left', 'auto');
					}
				});
			}
		}
	}]);
///#source 1 1 /app/directives/search/search-controller.js
angular.module('gridTaskApp')
	.controller('searchCtrl', ['$scope', function ($scope) {
		$scope.edited = false;

		$scope.focus = function () {
		};

		$scope.blur = function () {
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
			templateUrl: templatesPath + 'directive-templates/search.html',
			link: function (scope, element, attrs) {
				scope.$watch('searchValue', function (value) {
					if (value.length > 0) {
						scope.edited = false;
					}
					else {
						scope.edited = true;
					}
				})
			}
		}
	}]);
///#source 1 1 /app/directives/split-button/split-button-controller.js
angular.module('gridTaskApp')
	.controller('splitButtonCtrl', ['$scope', function ($scope) {
		if (!$scope.actions) {
			$scope.actions = [];
		}
		if (!$scope.typehead) {
			$scope.actions.everywhere = { label: 'everywhere', isEverywhere: true };

			$scope.actions.selected = $scope.actions.everywhere;
		}

		$scope.select = function (action) {
			$scope.actions.selected = action;
			$scope.search = '';

			$scope.close();
		}
	}]);
///#source 1 1 /app/directives/split-button/split-button.js
angular.module('gridTaskApp')
	.directive('splitButton', ['templatesPath', 'classes', function (templatesPath, classes) {
		return {
			restrict: 'E',
			scope: {
				actions: '=',
				selected: '=',
				search: '=',
				typehead: '='
			},
			templateUrl: templatesPath + 'directive-templates/split-button.html',
			controller: 'splitButtonCtrl',
			link: function (scope, element, attrs) {
				element.find('ul').hide();
				element.find('.expand').addClass(classes.menuDown);

				scope.toggle = function () {
					if (element.find('ul').is(':visible')) {
						element.find('ul').hide();
						element.find('.expand').addClass(classes.menuDown);
						element.find('.expand').removeClass(classes.menuUp);
						element.find('.split-btn__toggle').removeClass('opened');
					}
					else {
						element.find('ul').show();
						element.find('.expand').removeClass(classes.menuDown);
						element.find('.expand').addClass(classes.menuUp);
						element.find('.split-btn__toggle').addClass('opened');
					}
				}

				scope.close = function () {
					if (element.find('ul').is(':visible')) {
						element.find('ul').hide();
						element.find('.expand').addClass(classes.menuDown);
						element.find('.expand').removeClass(classes.menuUp);
						element.find('.split-btn__toggle').removeClass('opened');
					}
				}

				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						element.find('ul').hide();
						element.find('.expand').addClass(classes.menuDown);
						element.find('.expand').removeClass(classes.menuUp);
						element.find('.split-btn__toggle').removeClass('opened');
					}
				})
			}
		}
	}]);
///#source 1 1 /app/directives/upload/upload.js
angular.module('gridTaskApp')
	.directive('upload', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'directive-templates/upload.html',
			scope: {
				upload: '=uploadCallback',
				label: '='
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
///#source 1 1 /app/entities/columnGenerator.js
function columnGenerator(data, templatesPath) {
	var columns = [];

	columns.push({ field: 'details', displayName: '', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/details.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', sortable: false, width: 60, minWidth: 60, isColumn: true });

	if (data[0]) {
		for (var i = 0; i < data.length; i++) {
			if (data[i].isColumn) {
				return;
			}
		}

		for (var field in data[0]) {
			columns.push({
				field: field,
				displayName: field,
				headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html',
				isColumn: true
			})
		}
	}

	columns.push({
		field: 'action', displayName: '', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/action.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', sortable: false, width: 300, minWidth: 150, isColumn: true
	});

	return columns;
}
///#source 1 1 /app/entities/columns-comparer.js
function columnsCompare(arr1, arr2) {
	if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length != arr2.length) {
		return false;
	}

	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i].field != arr2[i].field) {
			return false;
		}
	}

	return true;
}
///#source 1 1 /app/entities/convertFilterOptions.js
function convertFilterOptions(options) {
	var convertOpt = { filterText: '' };

	for (var i = 0; i < options.length; i++) {

		if (options[i].filter) {
			convertOpt.filterText += options[i].label + ':' + options[i].filter + ';';
		}
	}
	return convertOpt;
}
///#source 1 1 /app/entities/counter.js
var Counter = (function () {
	function Counter(card) {
		this.card = card;
	}

	Counter.prototype.calculate = function (startDate, endDate) {
		var countDays = endDate.getDate() - startDate.getDate();

		var count = Math.floor((Math.random() * 1000) + 1);

		for (var i = 0; i < this.card.graphs.length; i++) {
			var height = Math.floor((Math.random() * 60) + 1);

			this.card.graphs[i].style['height'] = height + 'px';
		}

		return count * countDays;
	}


	return Counter;
})();
///#source 1 1 /app/entities/initializer.js
var Initializer = (function () {
	function Initializer(scope, element, content, templatesPath, $compile) {
		this.scope = scope;
		this.element = element;
		this.content = content;
		this.templatesPath = templatesPath;
		this.$compile = $compile;
	}

	Initializer.prototype.init = function () {
		this.initContentOpt();
		this.initGrid();
		this.initGridOpt();
		this.initUiGridOpt();
	}

	Initializer.prototype.initCards = function () {
		this.initContentCardsOpt();
		this.initCardsGrid();
		this.initUiGridOpt();
		this.initCardsOpt();
	};

	Initializer.prototype.initSankey = function () {
		this.initCardsOpt();
		this.initSankeyContentOpt();
	};

	Initializer.prototype.refreshSankey = function () {
		this.scope.cardsOptions.cards = this.content.cardsOptions.cards;
		this.scope.cardsOptions.startDate = this.content.cardsOptions.startDate;
		this.scope.cardsOptions.endDate = this.content.cardsOptions.endDate;
		this.scope.cardsOptions.margin = 525;
		this.scope.sankeyData = {
			"links": [
				{ "source": "View video", "target": "Log in", "value": "1" },
				{ "source": "View video", "target": "Add to Cart", "value": "1.5" },
				{ "source": "Ad Imression", "target": "Log in", "value": "1" },
				{ "source": "Ad Imression", "target": "Ad Click", "value": "1" },
				{ "source": "Ad Click", "target": "Log in", "value": ".75" },
				{ "source": "Log in", "target": "Purchase Complete", "value": "1" },
				{ "source": "Add to Cart", "target": "Purchase Complete", "value": "1" },
				{ "source": "Add to Cart", "target": "Carting", "value": 1 },
				{ "source": "Carting", "target": "Init", "value": 0.5 },
				{ "source": "Carting", "target": "Log out", "value": 0.5 },
				{ "source": "Log out", "target": "Log in", "value": 1 },
				{ "source": "Log in", "target": "Information", "value": 1 },
				{ "source": "Information", "target": "Examination", "value": 1 }
			],
			"nodes": [
				{ "name": "View video", "color": "rgb(62,145,95)", "transform": "0,0", "mx": "0", "my": "0", "val": "50" },
				{ "name": "Log in", "color": "rgb(133,133,133)", "transform": "445,0", "mx": "445", "my": "0", "val": "65" },
				{ "name": "Ad Imression", "color": "rgb(211,46,53)", "transform": "0,415.55555555555554", "mx": "0", "my": "415.55555555555554", "val": "15" },
				{ "name": "Ad Click", "color": "rgb(20,0,254)", "transform": "699,567.7777777777778", "mx": "699", "my": "567.7777777777778", "val": "20" },
				{ "name": "Add to Cart", "color": "rgb(157,226,141)", "transform": "827,333.18181818181824", "mx": "827", "my": "333.18181818181824", "val": "30" },
				{ "name": "Purchase Complete", "color": "rgb(20,58,173)", "transform": "1118,405.55555555555554", "mx": "1118", "my": "405.55555555555554", "val": "12" },
				{ "name": "Carting", "color": "rgb(123,20,56)", "transform": "1172,3.6327926195491926", "mx": "1172", "my": "3.6327926195491926", "val": "55" },
				{ "name": "Init", "color": "rgb(0,23,76)", "transform": "1390,82.6327926195492", "mx": "1390", "my": "82.6327926195492", "val": "65" },
				{ "name": "Log out", "color": "rgb(78,66,12)", "transform": "756,0", "mx": "756", "my": "0", "val": "23" },
				{ "name": "Information", "color": "rgb(66,66,66)", "transform": "1060,162.6327926195492", "mx": "1060", "my": "162.6327926195492", "val": "33" },
				{ "name": "Examination", "color": "rgb(12,51,128)", "transform": "1455,390.63279261954915", "mx": "1455", "my": "390.63279261954915", "val": "76" }
			]
		};
		this.scope.histogramData = [{ name: "1", value: 100000 },
							{ name: "2", value: 150000 },
							{ name: "3", value: 170000 },
							{ name: "4", value: 300000 },
							{ name: "5", value: 350000 },
							{ name: "6", value: 400000 },
							{ name: "7", value: 500000 },
							{ name: "8", value: 550000 },
							{ name: "9", value: 600000 },
							{ name: "10", value: 700000 }];

	};

	Initializer.prototype.initSankeyContentOpt = function () {
		if (this.scope.contentOptions === undefined) {
			this.scope.contentOptions = {};
		}

		if (this.scope.contentOptions.eventType === undefined) {
			this.scope.contentOptions.eventType = this.content.eventType;
		}

		if (this.scope.contentOptions.segments === undefined) {
			this.scope.contentOptions.segments = this.content.segments;
		}

		if (this.scope.contentOptions.campaign === undefined) {
			this.scope.contentOptions.campaign = this.content.campaign;
		}

		if (this.scope.filters === undefined) {
			this.scope.filters = this.content.sankeyFilters;
		}

		if (this.scope.sankeyData === undefined) {
			d3.json(this.content.sankeyPath, function (error, graph) {
				this.scope.sankeyData = graph;
			}.bind(this));
		}

		if (this.scope.histogramData === undefined) {
			this.scope.histogramData = [{ name: "1", value: 100000 },
							{ name: "2", value: 150000 },
							{ name: "3", value: 170000 },
							{ name: "4", value: 300000 },
							{ name: "5", value: 350000 },
							{ name: "6", value: 400000 },
							{ name: "7", value: 500000 },
							{ name: "8", value: 550000 },
							{ name: "9", value: 600000 },
							{ name: "10", value: 700000 }];

		}
	};

	Initializer.prototype.initCardsOpt = function () {
		if (this.scope.cardsOptions === undefined) {
			this.scope.cardsOptions = {};
		}

		if (this.scope.cardsOptions.cards === undefined) {
			this.scope.cardsOptions.cards = this.content.cardsOptions.cards;

			if (this.scope.cardsOptions.startDate === undefined) {
				this.scope.cardsOptions.startDate = this.content.cardsOptions.startDate;
			}

			if (this.scope.cardsOptions.endDate === undefined) {
				this.scope.cardsOptions.endDate = this.content.cardsOptions.endDate;
			}

			if (this.scope.cardsOptions.dateRange === undefined) {
				this.scope.cardsOptions.dateRange = this.content.cardsOptions.dateRange;
			}

			if (this.scope.cardsOptions.margin === undefined) {
				this.scope.cardsOptions.margin = this.content.cardsOptions.margin;
			}

			for (var card in this.scope.cardsOptions.cards) {
				if (card == 'clicks') {
					continue;
				}

				this.scope.cardsOptions.cards[card].counter = new Counter(this.scope.cardsOptions.cards[card]);
			}

			$(document).click(function (event) {
				if (this.scope.cardsOptions.cards.clicks) {
					this.scope.cardsOptions.cards.clicks.count += 1;
					this.scope.$apply();
				}
			}.bind(this));
		};
	};

	Initializer.prototype.initContentOpt = function () {
		if (this.scope.contentOptions === undefined) {
			this.scope.contentOptions = {};
		}

		if (this.scope.contentOptions.loading) {
			this.scope.contentOptions.isLoading = true;
			if ($('loading').length == 0) {
				this.element.find(this.content.listSelector).append(this.content.loadingTemplate);
				this.$compile($('loading'))(this.scope);
			}
		}

		if (this.scope.contentOptions.checks === undefined) {
			this.scope.contentOptions.checks = this.content.checks;
		}

		if (this.scope.contentOptions.mores === undefined) {
			this.scope.contentOptions.mores = this.content.mores;
		}

		if (this.scope.contentOptions.filtrate === undefined) {
			this.scope.contentOptions.filtrate = function (value) {
				this.scope.gridOptions.filterOptions.filterText = convertFilterOptions(value).filterText;
				this.scope.uiGridOptions.filterOptions.filterText = convertFilterOptions(value).filterText;
			}.bind(this);
		}

		if (this.scope.contentOptions.search === undefined) {
			this.scope.contentOptions.search = function (value) {
				this.scope.gridOptions.filterOptions.filterText = value;
				this.scope.uiGridOptions.filterOptions.filterText = value;
			}.bind(this);
		}

		if (this.scope.contentOptions.refresh === undefined) {
			this.scope.contentOptions.refresh = function () {
				if (this.scope.contentOptions.loading) {
					this.scope.contentOptions.isLoading = true;
				}

				this.scope.contentOptions.refreshCallback();
			}.bind(this);
		}

		if (this.scope.contentOptions.withUpload || this.scope.contentOptions.upload !== undefined) {
			this.scope.contentOptions.isDynamic = true;

			if (this.scope.contentOptions.upload === undefined) {
				this.scope.contentOptions.upload = function (data) {
					if (this.scope.contentOptions.loading) {
						this.scope.contentOptions.isLoading = true;
					}

					this.scope.data = data;

					this.scope.grid.count = this.scope.data.length;

					this.scope.$apply();
				}.bind(this);
			}
		}

	};

	Initializer.prototype.initContentCardsOpt = function () {
		if (this.scope.contentOptions === undefined) {
			this.scope.contentOptions = {};
		}

		if (this.scope.contentOptions.filtrate === undefined) {
			this.scope.contentOptions.filtrate = function (value) {
				this.scope.uiGridOptions.filterOptions.filterText = convertFilterOptions(value).filterText;
			}.bind(this);
		}

		if (this.scope.contentOptions.search === undefined) {
			this.scope.contentOptions.search = function (value) {
				this.scope.uiGridOptions.filterOptions.filterText = value;
			}.bind(this);
		}

		this.scope.contentOptions.filterOptions = this.content.filterOptions(this.scope.data);

		this.scope.contentOptions.searchOptions = this.content.searchOptions(this.scope.data);
		this.scope.contentOptions.searchOptions.selected = this.scope.contentOptions.searchOptions[0];

		this.scope.contentOptions.searchValue = '';
	};

	Initializer.prototype.initCardsGrid = function () {
		if (this.scope.exports === undefined) {
			this.scope.exports = this.content.exports;
			this.scope.exports.options.callback = function (action) {
				this.scope.export = action;
			}.bind(this);
		}
	};

	Initializer.prototype.initGrid = function () {
		if (this.scope.exports === undefined) {
			this.scope.exports = this.content.exports;
			this.scope.exports.options.callback = function (action) {
				this.scope.export = action;
			}.bind(this);
		}

		if (this.scope.views === undefined) {
			this.scope.views = this.content.views;
			this.scope.views.options.callback = function (action) {
				this.scope.view = action;
			}.bind(this);
		}

		if (this.scope.grid === undefined) {
			this.scope.grid = {};

			this.scope.grid.name = this.content.gridName;
			if (Array.isArray(this.scope.data)) {
				this.scope.grid.count = this.scope.data.length;
			}
		}

		if (this.scope.grid.name === undefined) {
			this.scope.grid.name = this.content.gridName;
		}

		if (this.scope.grid.count === undefined) {
			if (Array.isArray(this.scope.data)) {
				this.scope.grid.count = this.scope.data.length;
			}
		}
	};

	Initializer.prototype.initGridOpt = function () {
		if (this.scope.gridOptions === undefined) {
			this.scope.gridOptions = {};
		}

		if (this.scope.gridOptions.data === undefined) {
			this.scope.gridOptions.data = this.content.ngGridOpt.data;
		}

		if (this.scope.gridOptions.multiSelect === undefined) {
			this.scope.gridOptions.multiSelect = this.content.ngGridOpt.multiSelect;
		}

		if (this.scope.gridOptions.rowTemplate === undefined) {
			this.scope.gridOptions.rowTemplate = this.content.ngGridOpt.rowTemplate;
		}

		if (this.scope.gridOptions.filterOptions === undefined) {
			this.scope.gridOptions.filterOptions = this.content.ngGridOpt.filterOptions;
		}

		if (this.scope.gridOptions.rowHeight === undefined) {
			this.scope.gridOptions.rowHeight = this.content.ngGridOpt.rowHeight;
		}

		if (this.scope.gridOptions.headerRowHeight === undefined) {
			this.scope.gridOptions.headerRowHeight = this.content.ngGridOpt.headerRowHeight;
		}

		if (this.scope.gridOptions.showFooter === undefined) {
			this.scope.gridOptions.showFooter = this.content.ngGridOpt.showFooter;
		}

		if (this.scope.gridOptions.footerRowHeight === undefined) {
			this.scope.gridOptions.footerRowHeight = this.content.ngGridOpt.footerRowHeight;
		}

		if (this.scope.gridOptions.footerTemplate === undefined) {
			this.scope.gridOptions.footerTemplate = this.content.ngGridOpt.footerTemplate;
		}

		if (this.scope.gridOptions.init === undefined) {
			if (this.scope.contentOptions.loading) {
				this.scope.gridOptions.init = function (grid, event) {
					this.scope.contentOptions.isLoading = false;
				}.bind(this);
			}
		}

		if (this.scope.gridOptions.detailsTemplate === undefined && this.scope.gridOptions.withDetails) {
			this.scope.gridOptions.detailsTemplate = this.content.ngGridOpt.detailsTemplate;
		}

		if (this.scope.gridOptions.rowActions === undefined) {
			this.scope.gridOptions.rowActions = this.content.ngGridOpt.rowActions;
		}

		if (this.scope.gridOptions.rowCheckAction === undefined) {
			this.scope.gridOptions.rowCheckAction = this.content.ngGridOpt.rowCheckAction;
		}

		if (this.scope.gridOptions.beforeSelectionChange === undefined) {
			this.scope.gridOptions.beforeSelectionChange = function (row, event) {
				return false;
			}.bind(this);
		}

		this.scope.pluginActionOpt = {
			values: this.scope.gridOptions.rowActions,
			detailsTemplate: this.scope.gridOptions.detailsTemplate,
			detailsCondition: this.scope.gridOptions.detailsCondition,
			onCheck: this.scope.gridOptions.rowCheckAction.bind(this.scope),
			contentOptions: this.scope.contentOptions
		}

		if (this.scope.gridOptions.plugins === undefined) {
			this.scope.gridOptions.plugins = [];
			this.scope.gridOptions.plugins.push(new ngGridActionsPlugin(this.scope.pluginActionOpt, this.$compile));
		}
		else {
			var isFindAct = false;

			for (var i = 0; i < this.scope.gridOptions.plugins.length; i++) {
				if (this.scope.gridOptions.plugins[i].constructor.name == 'ngGridActionsPlugin') {
					isFindAct = true;
					break;
				}
			}

			if (!isFindAct) {
				this.scope.gridOptions.plugins.push(new ngGridActionsPlugin(this.scope.pluginActionOpt, this.$compile));
			}
		}
	};

	Initializer.prototype.initUiGridOpt = function () {
		if (this.scope.uiGridOptions === undefined) {
			this.scope.uiGridOptions = {};
		}

		for (var prop in this.content.uiGridOpt) {
			if (this.scope.uiGridOptions[prop] === undefined) {
				this.scope.uiGridOptions[prop] = this.content.uiGridOpt[prop];
			}
		}

		if (this.scope.uiGridOptions.filterOptions === undefined) {
			this.scope.uiGridOptions.filterOptions = this.content.ngGridOpt.filterOptions;
		}

		if (this.scope.uiGridOptions.rowActions === undefined) {
			this.scope.uiGridOptions.rowActions = this.content.ngGridOpt.rowActions;
		}

	};

	Initializer.prototype.refreshOpt = function () {
		this.scope.contentOptions.filterOptions = this.content.filterOptions(this.scope.data);

		this.scope.contentOptions.searchOptions = this.content.searchOptions(this.scope.data);
		this.scope.contentOptions.searchOptions.selected = this.scope.contentOptions.searchOptions[0];

		this.scope.contentOptions.searchValue = '';
		this.scope.contentOptions.checks.options.selected = this.scope.contentOptions.checks.options.actions.noOne;

		var isFindAct = false;
		var indexAct = 0;

		for (var i = 0; i < this.scope.gridOptions.plugins.length; i++) {
			if (this.scope.gridOptions.plugins[i].constructor.name == 'ngGridActionsPlugin') {
				isFindAct = true;
				indexAct = i;
				break;
			}
		}

		if (!isFindAct) {
			this.scope.pluginActionOpt = {
				values: this.scope.gridOptions.rowActions,
				detailsTemplate: this.scope.gridOptions.detailsTemplate,
				detailsCondition: this.scope.gridOptions.detailsCondition,
				onCheck: this.scope.gridOptions.rowCheckAction.bind(this.scope),
				contentOptions: this.scope.contentOptions
			}
			this.scope.gridOptions.plugins[indexAct].refreshOpt(this.scope.pluginActionOpt);
		}

		if (this.scope.contentOptions.loading) {
			this.scope.contentOptions.isLoading = false;
		}
	};

	Initializer.prototype.refreshCheckCallback = function () {
		for (var i = 0; i < this.scope.gridOptions.plugins.length; i++) {
			if (this.scope.gridOptions.plugins[i].constructor.name == 'ngGridActionsPlugin') {
				isFindAct = true;
				indexAct = i;
				break;
			}
		}

		this.scope.gridOptions.plugins[indexAct].refreshCallback();
	};

	Initializer.prototype.refreshData = function (data) {
		this.refreshOpt();
		this.scope.grid.count = this.scope.data.length;
		this.scope.gridOptions.filterOptions.filterText = '';
		this.scope.uiGridOptions.filterOptions.filterText = '';

		var oldColumns = angular.copy(this.scope.gridOptions.columnDefs);
		var newColumns = columnGenerator(data, this.templatesPath);

		if (this.scope.gridOptions.reInit === undefined) {
			if (!columnsCompare(oldColumns, newColumns)) {
				this.scope.gridOptions.columnDefs = newColumns;

				if (this.scope.view) {
					if (this.scope.view.isGrid) {
						this.$compile($('custom-grid'))(this.scope);
					}
					else if (this.scope.view.isUiGrid) {
						//this.$compile($('custom-ui-grid'))(this.scope);
					}
				}
				else {
					//this.$compile($('.custom-ui-grid'))(this.scope);
				}
			}
		}
		else {
			if (view) {
				if (view.isGrid) {
					this.$compile($('custom-grid'))(this.scope);
				}
				else if (view.isUiGrid) {
					//this.$compile($('custom-ui-grid'))(this.scope);
				}
			}
			else {
				//this.$compile($('.custom-ui-grid'))(this.scope);
			}
		}

		if (this.scope.contentOptions.loading) {
			this.scope.contentOptions.isLoading = false;
		}
	};

	return Initializer;
})();

///#source 1 1 /app/extensions/sankey.js
d3.sankey = function () {
	var sankey = {},
		nodeWidth = 24,
		nodePadding = 8,
		size = [1, 1],
		nodes = [],
		links = [];

	sankey.nodeWidth = function (_) {
		if (!arguments.length) return nodeWidth;
		nodeWidth = +_;
		return sankey;
	};

	sankey.nodePadding = function (_) {
		if (!arguments.length) return nodePadding;
		nodePadding = +_;
		return sankey;
	};

	sankey.nodes = function (_) {
		if (!arguments.length) return nodes;
		nodes = _;
		return sankey;
	};

	sankey.links = function (_) {
		if (!arguments.length) return links;
		links = _;
		return sankey;
	};

	sankey.size = function (_) {
		if (!arguments.length) return size;
		size = _;
		return sankey;
	};

	sankey.layout = function (iterations) {
		computeNodeLinks();
		computeNodeValues();
		computeNodeBreadths();
		computeNodeDepths(iterations);
		computeLinkDepths();
		return sankey;
	};

	sankey.relayout = function () {
		computeLinkDepths();
		return sankey;
	};

	sankey.link = function () {
		var curvature = .5;

		function link(d) {
			var x0 = d.source.x + d.source.dx,
				x1 = d.target.x,
				xi = d3.interpolateNumber(x0, x1),
				x2 = xi(curvature),
				x3 = xi(1 - curvature),
				y0 = d.source.y + d.sy + d.dy / 2,
				y1 = d.target.y + d.ty + d.dy / 2;
			return "M" + x0 + "," + y0
				 + "C" + x2 + "," + y0
				 + " " + x3 + "," + y1
				 + " " + x1 + "," + y1;
		}

		link.curvature = function (_) {
			if (!arguments.length) return curvature;
			curvature = +_;
			return link;
		};

		return link;
	};

	// Populate the sourceLinks and targetLinks for each node.
	// Also, if the source and target are not objects, assume they are indices.
	function computeNodeLinks() {
		nodes.forEach(function (node) {
			node.sourceLinks = [];
			node.targetLinks = [];
		});
		links.forEach(function (link) {
			var source = link.source,
				target = link.target;
			if (typeof source === "number") source = link.source = nodes[link.source];
			if (typeof target === "number") target = link.target = nodes[link.target];
			source.sourceLinks.push(link);
			target.targetLinks.push(link);
		});
	}

	// Compute the value (size) of each node by summing the associated links.
	function computeNodeValues() {
		nodes.forEach(function (node) {
			node.value = Math.max(
			  d3.sum(node.sourceLinks, value),
			  d3.sum(node.targetLinks, value)
			);
		});
	}

	// Iteratively assign the breadth (x-position) for each node.
	// Nodes are assigned the maximum breadth of incoming neighbors plus one;
	// nodes with no incoming links are assigned breadth zero, while
	// nodes with no outgoing links are assigned the maximum breadth.
	function computeNodeBreadths() {
		var remainingNodes = nodes,
			nextNodes,
			x = 0;

		while (remainingNodes.length) {
			nextNodes = [];
			remainingNodes.forEach(function (node) {
				node.x = x;
				node.dx = nodeWidth;
				node.sourceLinks.forEach(function (link) {
					nextNodes.push(link.target);
				});
			});
			remainingNodes = nextNodes;
			++x;
		}

		//
		moveSinksRight(x);
		scaleNodeBreadths((size[0] - nodeWidth) / (x - 1));
	}

	function moveSourcesRight() {
		nodes.forEach(function (node) {
			if (!node.targetLinks.length) {
				node.x = d3.min(node.sourceLinks, function (d) { return d.target.x; }) - 1;
			}
		});
	}

	function moveSinksRight(x) {
		nodes.forEach(function (node) {
			if (!node.sourceLinks.length) {
				node.x = x - 1;
			}
		});
	}

	function scaleNodeBreadths(kx) {
		nodes.forEach(function (node) {
			node.x *= kx;
		});
	}

	function computeNodeDepths(iterations) {
		var nodesByBreadth = d3.nest()
			.key(function (d) { return d.x; })
			.sortKeys(d3.ascending)
			.entries(nodes)
			.map(function (d) { return d.values; });

		//
		initializeNodeDepth();
		resolveCollisions();
		for (var alpha = 1; iterations > 0; --iterations) {
			relaxRightToLeft(alpha *= .99);
			resolveCollisions();
			relaxLeftToRight(alpha);
			resolveCollisions();
		}

		function initializeNodeDepth() {
			var ky = d3.min(nodesByBreadth, function (nodes) {
				return (size[1] - (nodes.length - 1) * nodePadding) / d3.sum(nodes, value);
			});

			nodesByBreadth.forEach(function (nodes) {
				nodes.forEach(function (node, i) {
					node.y = i;
					node.dy = node.value * ky;
				});
			});

			links.forEach(function (link) {
				link.dy = link.value * ky;
			});
		}

		function relaxLeftToRight(alpha) {
			nodesByBreadth.forEach(function (nodes, breadth) {
				nodes.forEach(function (node) {
					if (node.targetLinks.length) {
						var y = d3.sum(node.targetLinks, weightedSource) / d3.sum(node.targetLinks, value);
						node.y += (y - center(node)) * alpha;
					}
				});
			});

			function weightedSource(link) {
				return center(link.source) * link.value;
			}
		}

		function relaxRightToLeft(alpha) {
			nodesByBreadth.slice().reverse().forEach(function (nodes) {
				nodes.forEach(function (node) {
					if (node.sourceLinks.length) {
						var y = d3.sum(node.sourceLinks, weightedTarget) / d3.sum(node.sourceLinks, value);
						node.y += (y - center(node)) * alpha;
					}
				});
			});

			function weightedTarget(link) {
				return center(link.target) * link.value;
			}
		}

		function resolveCollisions() {
			nodesByBreadth.forEach(function (nodes) {
				var node,
					dy,
					y0 = 0,
					n = nodes.length,
					i;

				// Push any overlapping nodes down.
				nodes.sort(ascendingDepth);
				for (i = 0; i < n; ++i) {
					node = nodes[i];
					dy = y0 - node.y;
					if (dy > 0) node.y += dy;
					y0 = node.y + node.dy + nodePadding;
				}

				// If the bottommost node goes outside the bounds, push it back up.
				dy = y0 - nodePadding - size[1];
				if (dy > 0) {
					y0 = node.y -= dy;

					// Push any overlapping nodes back up.
					for (i = n - 2; i >= 0; --i) {
						node = nodes[i];
						dy = node.y + node.dy + nodePadding - y0;
						if (dy > 0) node.y -= dy;
						y0 = node.y;
					}
				}
			});
		}

		function ascendingDepth(a, b) {
			return a.y - b.y;
		}
	}

	function computeLinkDepths() {
		nodes.forEach(function (node) {
			node.sourceLinks.sort(ascendingTargetDepth);
			node.targetLinks.sort(ascendingSourceDepth);
		});
		nodes.forEach(function (node) {
			var sy = 0, ty = 0;
			node.sourceLinks.forEach(function (link) {
				link.sy = sy;
				sy += link.dy;
			});
			node.targetLinks.forEach(function (link) {
				link.ty = ty;
				ty += link.dy;
			});
		});

		function ascendingSourceDepth(a, b) {
			return a.source.y - b.source.y;
		}

		function ascendingTargetDepth(a, b) {
			return a.target.y - b.target.y;
		}
	}

	function center(node) {
		return node.y + node.dy / 2;
	}

	function value(link) {
		return link.value;
	}

	return sankey;
};
///#source 1 1 /app/extensions/window-width.js
function getWindowWidth() {
	var windowWidth = 0;
	if (typeof (window.innerWidth) == 'number') {
		windowWidth = window.innerWidth;
	}
	else {
		if (document.documentElement && document.documentElement.clientWidth) {
			windowWidth = document.documentElement.clientWidth;
		}
		else {
			if (document.body && document.body.clientWidth) {
				windowWidth = document.body.clientWidth;
			}
		}
	}
	return windowWidth;
}
///#source 1 1 /app/extensions/jquery/center.js
jQuery.fn.center = function () {
	this.css("position", "absolute");
	this.css("top", Math.max(0, (($(this.parent()).height() - $(this).outerHeight()) / 2) +
                                                $(this.parent()).scrollTop()) + "px");
	this.css("left", Math.max(0, (($(this.parent()).width() - $(this).outerWidth()) / 2) +
                                                $(this.parent()).scrollLeft()) + "px");
	this.css("z-index", 10000);
	return this;
}
///#source 1 1 /app/extensions/jquery/cursorMessage.js
if (jQuery) {
	(function ($) {
		$.cursorMessageData = {}; // needed for e.g. timeoutId
		//start registring mouse coцridnates from the start!

		$(window).ready(function (e) {
			if ($('.cursor-message').length == 0) {
				$('body').append('<div class="cursor-message">&nbsp;</div>');
				$('.cursor-message').hide();
			}

			$('body').mousemove(function (e) {
				$.cursorMessageData.mouseX = e.pageX;
				$.cursorMessageData.mouseY = e.pageY;
				if ($.cursorMessageData.options != undefined) $._showCursorMessage();
			});
		});
		$.extend({
			cursorMessage: function (message, options) {
				if (options == undefined) options = {};
				if (options.offsetX == undefined) options.offsetX = 5;
				if (options.offsetY == undefined) options.offsetY = 5;
				if (options.hideTimeout == undefined) options.hideTimeout = 2000;

				$('.cursor-message').html(message).fadeIn('slow');
				if (jQuery.cursorMessageData.hideTimeoutId != undefined) clearTimeout(jQuery.cursorMessageData.hideTimeoutId);
				if (options.hideTimeout > 0) jQuery.cursorMessageData.hideTimeoutId = setTimeout($.hideCursorMessage, options.hideTimeout);
				jQuery.cursorMessageData.options = options;
				$._showCursorMessage();
			},
			hideCursorMessage: function () {
				$('.cursor-message').fadeOut('slow');
			},
			_showCursorMessage: function () {
				$('.cursor-message').css({ top: ($.cursorMessageData.mouseY + $.cursorMessageData.options.offsetY + 30) + 'px', left: ($.cursorMessageData.mouseX + $.cursorMessageData.options.offsetX - 150) });

				if ($.cursorMessageData.options.backgroundColor) {
					$('.cursor-message').css({ 'background-color': $.cursorMessageData.options.backgroundColor });
				}

			}
		});
	})(jQuery);
}
///#source 1 1 /app/plugins/ngGridActionsPlugin.js
function ngGridActionsPlugin(opts, compile) {
	var self = this;
	self.grid = null;
	self.scope = null;
	self.opts = opts;
	self.compile = compile;

	self.init = function (scope, grid, services) {
		self.domUtilityService = services.DomUtilityService;
		self.grid = grid;
		self.scope = scope;

		var recalcForData = function () {
			setTimeout(function () {

				self.grid.rowCache.forEach(function (row) {
					if (row) {
						row.actions = angular.copy(self.opts);
						row.actions.isCheck = false;
						row.actions.setToggle = setToggle;
						row.actions.setCheck = setCheck;
						row.actions.copyRow = copyRow;
						row.actions.deleteRow = deleteRow;
						row.actions.editRow = editRow;
						row.actions.historyRow = historyRow;
						row.actions.history = [];
						row.actions.tab = 2;
						row.actions.select = function (row) {
							row.elm.addClass('selected');

							self.grid.rowCache.forEach(function (row) {
								if (row.actions.isSelect) {
									row.actions.isSelect = false;
								}
							});

							this.isSelect = true;
						}

						if (row.actions.values.options.callback === undefined) {
							row.actions.values.options.callback = function (action) {
								if (action.isEdit) {
									row.actions.editRow(row);
								}
								else if (action.isCopy) {
									row.actions.copyRow(row);
								}
								else if (action.isDelete) {
									row.actions.deleteRow(row.entity, self.scope.data, row);
								}
								else if (action.isHistory) {
									row.actions.historyRow(row);
								}
							};
						}
					}
				});

				if (self.opts.contentOptions.checks.options.callback === undefined) {
					self.opts.contentOptions.checks.options.callback = function (check) {
						if (check) {
							if (check.isAll) {
								self.grid.rowCache.forEach(function (value) {
									value.actions.isCheck = true;
								});
							}
							else if (check.isNoOne) {
								self.grid.rowCache.forEach(function (value) {
									value.actions.isCheck = false;
								});
							}
							else if (check.isMarked) {
								self.grid.rowCache.forEach(function (value) {
								});
							}
							else if (check.isNotMarked) {
								self.grid.rowCache.forEach(function (value) {
									value.actions.isCheck = !value.actions.isCheck;
								});
							}
						};
					};
				}

				self.scope.$apply();
			});

			if (self.scope.toggleRow) {
				closeToggleRow(self.scope.toggleRow.clone, self.scope.detailsClass, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex), self.scope.rowHeight, true);
				self.scope.toggleRow = undefined;
			}

			setTimeout(innerRecalcForData, 1);
		};

		var innerRecalcForData = function () {

			if (self.scope.toggleRow) {
				var isExistToggle = false;

				for (idx in self.scope.renderedRows) {
					if (self.scope.renderedRows[idx].orig.actions) {
						if (self.scope.renderedRows[idx].orig.actions.isToggle) {

							if (!self.scope.renderedRows[idx].elm.hasClass('toggle')) {
								refreshToggle(self.scope.renderedRows[idx], self.scope.rowHeight, self.scope.step, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex));
							}

							isExistToggle = true;
						}
						else {
							self.scope.renderedRows[idx].elm.removeClass('toggle');
						}
					}
				}

				if (isExistToggle) {
					self.grid.$canvas.css('height', self.scope.newCanvasHeight + 'px');
				}
				else {
					$('.details-template').parent().removeClass('toggle');
					$('.details-template').remove();
				}
			}

			self.scope.catHashKeys = function () {
				var hash = '',
					idx;
				for (idx in self.scope.renderedRows) {
					hash += self.scope.renderedRows[idx].$$hashKey;

					if (self.scope.renderedRows[idx].orig.actions) {
						if (self.scope.renderedRows[idx].orig.actions.isSelect) {
							self.scope.renderedRows[idx].elm.addClass('selected');
							self.scope.renderedRows[idx].orig.actions.values.isShow = true;
						}
						else {
							self.scope.renderedRows[idx].elm.removeClass('selected');
							self.scope.renderedRows[idx].orig.actions.values.isShow = false;
						}
					}
				}
				return hash;
			};
		};

		self.grid.$viewport.scroll(function () {
			var isExistToggle = false;

			for (idx in self.scope.renderedRows) {
				if (self.scope.renderedRows[idx].orig.actions.isToggle) {

					if (!self.scope.renderedRows[idx].elm.hasClass('toggle')) {

						if (idx != self.scope.renderedRows.length - 1) {

						}
						refreshToggle(self.scope.renderedRows[idx], self.scope.rowHeight, self.scope.step, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex));
					}

					isExistToggle = true;
				}
				else {
					self.scope.renderedRows[idx].elm.removeClass('toggle');
				}
			}

			if (isExistToggle) {
				self.grid.$canvas.css('height', self.scope.newCanvasHeight + 'px');
			}
			else {
				$('.details-template').parent().removeClass('toggle');
				$('.details-template').remove();
			}
		});

		var setToggle = function (row, isToggle, detailsClass) {

			if (isToggle) {
				if (self.scope.toggleRow) {
					var deletedRow;

					for (var i = 0; i < self.grid.rowCache.length; i++) {
						if (angular.equals(self.grid.rowCache[i], self.scope.toggleRow)) {
							deletedRow = self.grid.rowCache[i];
							break;
						}
					}

					closeOrigToggleRow(deletedRow, self.scope.detailsClass, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex), self.scope.rowHeight)
				}

				self.scope.toggleRow = row;
				self.scope.detailsClass = detailsClass;

				setRenderToggle(row.clone, self.scope.detailsClass, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex), self.scope.rowHeight);
			}
			else {
				closeToggleRow(row.clone, detailsClass, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex), self.scope.rowHeight);
				self.scope.toggleRow = undefined;
			}
		};

		var refreshToggle = function (row, rowHeight, step, template) {
			if (template) {
				var step = step;
				var detElm;

				if (template.substr(template.length - 4) == 'html') {
					$.get(template, function (result) {
						$('.details-template').remove();
						detElm = angular.element(result);
					}).fail(function () {
						$('.details-template').remove();
						detElm = angular.element(template);

					}).always(function () {
						row.elm.append(detElm);
						self.compile(detElm)(self.scope);
						$('.details-template').css('top', rowHeight + 'px');
						row.elm.addClass('toggle');
						var top = Math.round(row.elm.position().top);
						var children = $(row.elm).parent().children();

						for (var i = 0; i < children.length; i++) {
							if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
								$(children[i]).css('top', step + 'px');
								step += rowHeight;
							}
						}
					});
				}
				else {
					$('.details-template').remove();
					detElm = angular.element(template);
					row.elm.append(detElm);
					self.compile(detElm)(self.scope);
					$('.details-template').css('top', rowHeight + 'px');
					row.elm.addClass('toggle');
					var top = Math.round(row.elm.position().top);
					var children = $(row.elm).parent().children();

					for (var i = 0; i < children.length; i++) {
						if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
							$(children[i]).css('top', step + 'px');
							step += rowHeight;
						}
					}
				}
			}
			else {
				row.elm.addClass('toggle');
				$(row.elm).css('height', row.elm.context.scrollHeight + 'px');

				var top = Math.round(row.elm.position().top);
				var children = $(row.elm).parent().children();
				var step = step;

				for (var i = 0; i < children.length; i++) {
					if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
						$(children[i]).css('top', step + 'px');
						step += rowHeight;
					}
				}
			}
		}

		var setRenderToggle = function (row, detailsClass, template, rowHeight) {
			row.elm.addClass(detailsClass);
			row.isToggle = true;

			if (template) {
				var detElm;

				if (template.substr(template.length - 4) == 'html') {
					$.get(template, function (result) {
						$('.details-template').remove();
						detElm = angular.element(result);
					}).fail(function () {
						$('.details-template').remove();
						detElm = angular.element(template);
					}).always(function () {
						row.elm.append(detElm);
						self.compile(detElm)(self.scope);
						$('.details-template').css('top', row.elm.height() + 'px');

						var top = Math.round(row.elm.position().top);
						var children = $(row.elm).parent().children();
						var step = row.elm.position().top + row.elm.find('.details-template').height() + rowHeight;
						self.scope.step = step;

						self.canvasHeight = self.grid.$canvas.height();
						self.grid.$canvas.css('height', self.canvasHeight + row.elm.context.scrollHeight + 'px');
						self.scope.newCanvasHeight = self.canvasHeight + row.elm.context.scrollHeight;

						$(row.elm).css('height', row.elm.context.scrollHeight + 'px');

						for (var i = 0; i < children.length; i++) {
							if ($(children[i]).css('top').replace('px', '') == row.elm.position().top) {
								for (var j = i + 1; j < children.length; j++) {
									$(children[j]).css('top', step + 'px');
									step += rowHeight;
								}
							}
						}
					});;
				}
				else {
					$('.details-template').remove();
					detElm = angular.element(template);
					row.elm.append(detElm);
					self.compile(detElm)(self.scope);
					$('.details-template').css('top', row.elm.height() + 'px');

					var top = Math.round(row.elm.position().top);
					var children = $(row.elm).parent().children();
					var step = row.elm.position().top + row.elm.find('.details-template').height() + rowHeight;
					self.scope.step = step;

					self.canvasHeight = self.grid.$canvas.height();
					self.grid.$canvas.css('height', self.canvasHeight + row.elm.context.scrollHeight + 'px');
					self.scope.newCanvasHeight = self.canvasHeight + row.elm.context.scrollHeight;

					$(row.elm).css('height', row.elm.context.scrollHeight + 'px');

					for (var i = 0; i < children.length; i++) {
						if ($(children[i]).css('top').replace('px', '') == row.elm.position().top) {
							for (var j = i + 1; j < children.length; j++) {
								$(children[j]).css('top', step + 'px');
								step += rowHeight;
							}
						}
					}
				}
			}
			else {
				var top = Math.round(row.elm.position().top);
				var children = $(row.elm).parent().children();
				var step = row.elm.position().top + row.elm.context.scrollHeight;
				self.scope.step = step;

				self.canvasHeight = self.grid.$canvas.height();
				self.grid.$canvas.css('height', self.canvasHeight + row.elm.context.scrollHeight + 'px');
				self.scope.newCanvasHeight = self.canvasHeight + row.elm.context.scrollHeight;

				$(row.elm).css('height', row.elm.context.scrollHeight + 'px');

				for (var i = 0; i < children.length; i++) {
					if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
						$(children[i]).css('top', step + 'px');
						step += rowHeight;
					}
				}

				self.scope.toggleElm = row.elm.clone();
			}
		}

		var closeOrigToggleRow = function (row, detailsClass, template, rowHeigth, reInit) {
			if (rowHeigth === undefined) {
				rowHeigth = 60;
			}

			row.clone.elm.removeClass('toggle');
			$('.details-template').remove();
			row.actions.isToggle = false;
			self.grid.$canvas.css('height', self.canvasHeight + 'px');
			self.scope.newCanvasHeight = self.canvasHeight;

			var top = Math.round(row.clone.elm.position().top);
			var children = $(row.clone.elm).parent().children();
			var step = row.clone.elm.position().top + rowHeigth;

			$(row.clone.elm).css('height', rowHeigth + 'px');

			for (var i = 0; i < children.length; i++) {
				if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
					$(children[i]).css('top', step + 'px');
					step += rowHeigth;
				}
			}

			if (reInit) {
				self.scope.toggleRow = undefined;
			}
		}

		var closeToggleRow = function (row, detailsClass, template, rowHeigth, reInit) {
			row.elm.removeClass('toggle');
			$('.details-template').remove();
			row.orig.actions.isToggle = false;
			self.grid.$canvas.css('height', self.canvasHeight + 'px');
			self.scope.newCanvasHeight = self.canvasHeight;

			var top = Math.round(row.elm.position().top);
			var children = $(row.elm).parent().children();
			var step = row.elm.position().top + rowHeigth;

			$(row.elm).css('height', rowHeigth + 'px');

			for (var i = 0; i < children.length; i++) {
				if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
					$(children[i]).css('top', step + 'px');
					step += rowHeigth;
				}
			}

			if (reInit) {
				self.scope.toggleRow = undefined;
			}
		}

		var setCheck = function (row) {
			row.actions.onCheck(self.grid.rowCache);
		}

		var getDetailsTemplate = function (template, condition, entity, index) {
			if (condition !== undefined && condition(entity, index) !== undefined) {
				template = condition(entity, index);
			}

			return template;
		}

		var copyRow = function (row) {
			var s = JSON.stringify(row.entity);

			if (window.clipboardData && clipboardData.setData) {
				clipboardData.setData('text', s);

				if ($.cursorMessage) {
					$.cursorMessage('Row is copied to clipboard.');
				}
			}
			else {
				$(row.clone.elm).append('<input id="holdtext" style="display: none"/>')

				var elm = $("#holdtext");
				elm.val(s);
				elm.select();

				try {
					document.execCommand('copy');

					if ($.cursorMessage) {
						$.cursorMessage('Row is copied to clipboard.');
					}

				}
				catch (e) {
					if ($.cursorMessage) {
						$.cursorMessage('Copied ended with error.', { backgroundColor: 'rgb(143, 59, 59)' });
					}

				}
				finally {
					elm.remove('#holdtext');
				}
			};
		}

		var deleteRow = function (entity, data, row) {
			for (var i = 0; i < self.grid.rowCache.length; i++) {
				if (self.grid.rowCache[i].entity == entity) {
					self.grid.rowCache.splice(i, 1);
					break
				}
			}

			var isEarlier = false;

			for (var i = 0; i < self.scope.renderedRows.length; i++) {
				if (self.scope.renderedRows[i].entity == entity) {
					self.scope.renderedRows.splice(i, 1);
					break
				}

				if (self.scope.toggleRow) {
					if (self.scope.renderedRows[i].entity == self.scope.toggleRow.entity) {
						isEarlier = true;
					}
				}
			}

			self.grid.setRenderedRows(self.scope.renderedRows);

			data.splice(data.indexOf(entity), 1);

			if (self.scope.toggleRow) {
				if (self.scope.toggleRow.entity == entity) {
					closeOrigToggleRow(self.scope.toggleRow, 'toggle', self.scope.toggleRow.actions.detailsTemplate, self.scope.rowHeight, true);
				}
				else {
					if (!isEarlier) {
						self.scope.step -= 60;

						refreshToggle(self.scope.toggleRow.clone, self.scope.rowHeight, self.scope.step, self.scope.toggleRow.actions.detailsTemplate);
					}
				}
			}
		}

		var editRow = function (row) {
			if ($('modal').length != 0) {
				$('modal').remove();
			}

			self.scope.rowEditing = row;

			$('body').append('<modal value="rowEditing"></modal>');
			var modal = $('modal');
			self.compile(modal)(self.scope);
		}


		var historyRow = function (row) {
			if ($('history').length != 0) {
				$('history').remove();
			}

			self.scope.rowHistoried = row;

			$('body').append('<history value="rowHistoried.actions.history"></history>');
			var history = $('history');
			self.compile(history)(self.scope);
		}

		self.scope.$watch('catHashKeys()', innerRecalcForData);
		self.scope.$watch(self.grid.config.data, recalcForData);
	}

	self.refreshOpt = function (otps) {
		self.opts = otps;
	}

	self.refreshCallback = function () {
		self.opts.contentOptions.checks.options.callback = function (check) {
			if (check) {
				if (check.isAll) {
					self.grid.rowCache.forEach(function (value) {
						value.actions.isCheck = true;
					});
				}
				else if (check.isNoOne) {
					self.grid.rowCache.forEach(function (value) {
						value.actions.isCheck = false;
					});
				}
				else if (check.isMarked) {
					self.grid.rowCache.forEach(function (value) {
					});
				}
				else if (check.isNotMarked) {
					self.grid.rowCache.forEach(function (value) {
						value.actions.isCheck = !value.actions.isCheck;
					});
				}
			};
		};
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
			self.grid.$root.css('height', 600 + 'px');

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

///#source 1 1 /app/services/navigation-tree-service.js
angular.module('gridTaskApp').factory('NavigationTree', [function () {
	return {
		menu: [],
		get: function () {
			return this.menu = this.NAV_TREE;
		},
		generate: function () {
			var i, len, menu, node, ref, subMenu;
			menu = [];
			ref = this.NAV_TREE;
			for (i = 0, len = ref.length; i < len; i++) {
				node = ref[i];
				subMenu = this.subTree(node);
				if (!_.isEmpty(subMenu)) {
					menu.push(subMenu);
				}
			}
			return menu;
		},
		subTree: function (root) {
			var i, len, node, ref, subTree, tree;
			tree = {};
			if (root.nodes != null) {
				tree = {
					name: root.name,
					nodes: []
				};
				ref = root.nodes;
				for (i = 0, len = ref.length; i < len; i++) {
					node = ref[i];
					subTree = this.subTree(node);
					if (!_.isEmpty(subTree)) {
						tree.nodes.push(subTree);
					}
				}
				if (tree.nodes.length === 0) {
					tree = {};
				}
			} else {
				if ((root.permissions != null) && this.checkPermission(root.permissions)) {
					tree = {
						name: root.name,
						description: root.description,
						state: root.state,
						link: root.link
					};
				}
			}
			return tree;
		},
		checkPermission: function (permissions) {
			return permissions[0] === 'none' || arrayUtils.intersects(session.allow, permissions);
		},
		NAV_TREE: [
		  {
		  	name: 'PEOPLE',
		  	nodes: [
			  {
			  	name: 'Actions',
			  	nodes: [
				  {
				  	name: 'Manage Segments',
				  	description: 'Create segments from 1st and 3rd party data to use in audience targeting, audience insights, and personalization.',
				  	state: 'segments.switchPage.segmentList',
				  	link: '/segments/list',
				  	permissions: ['segments', 'segments_ro']
				  }, {
				  	name: 'Manage Events',
				  	description: 'Create and manage events to get detailed insights on any user action such as clicks, form submissions, video views and more.',
				  	state: 'events.list',
				  	link: '/events/list',
				  	permissions: ['events', 'events_ro']
				  }, {
				  	name: 'Manage Funnels',
				  	description: 'Create funnels to track sequence of events and optimize customer funnel for higher conversions.',
				  	state: 'funnels.funnelList',
				  	link: '/funnels/list',
				  	permissions: ['funnels', 'funnels_ro']
				  }
			  	]
			  }, {
			  	name: 'Insights',
			  	nodes: [
				  {
				  	name: 'Segment Insights',
				  	description: 'View segment specific statistics and insights.',
				  	state: 'audience.switchPage.discovery',
				  	link: '/audience/discovery',
				  	permissions: ['segments', 'segments_ro']
				  }, {
				  	name: 'Segment Overlaps',
				  	description: 'View population overlap for all your segments.',
				  	state: 'audience.overlaps',
				  	link: '/audience/overlaps',
				  	permissions: ['segment_overlaps_report']
				  }, {
				  	name: 'Attributes',
				  	description: 'View trends for attribute values.',
				  	state: 'audience.attributesReport',
				  	link: '/audience/attributes-report',
				  	permissions: ['attributes_report']
				  }, {
				  	name: 'Data Providers',
				  	description: 'Compare data provider population with Krux’s  people-data universe.',
				  	state: 'audience.dataprovidersReport',
				  	link: '/audience/dataproviders-report',
				  	permissions: ['dataproviders_report']
				  }, {
				  	name: 'Reach Opportunities',
				  	description: 'Reach and convert people who are similar to your most valuable customers.',
				  	state: 'opportunities.base2ndParty.chart',
				  	link: '/opportunities/secondPartyChart/',
				  	permissions: ['opportunities', 'opportunities_ro']
				  }, {
				  	name: 'Audience Profile',
				  	description: 'Audience Profile Report Organization Level.',
				  	state: 'audience.profileReportOrgLevel',
				  	link: '/audience/audience_profile/',
				  	permissions: []
				  }
			  	]
			  }, {
			  	name: 'Analytics',
			  	nodes: [
				  {
				  	name: 'Audience',
				  	description: ' ',
				  	state: 'audience.audienceAnalytics',
				  	link: '/audience/audience-analytics',
				  	permissions: ['audience_analytics']
				  }, {
				  	name: 'Engagement',
				  	description: ' ',
				  	state: 'audience.engagement',
				  	link: '/audience/engagement',
				  	permissions: ['user_engagement_distribution']
				  }, {
				  	name: 'Loyalty',
				  	description: ' ',
				  	state: 'audience.loyalty',
				  	link: '/audience/loyalty',
				  	permissions: ['loyalty_report']
				  }, {
				  	name: 'Social Sharing',
				  	description: '',
				  	state: 'audience.socialSharing',
				  	link: '/audience/socialSharing',
				  	permissions: []
				  }
			  	]
			  }
		  	]
		  }, {
		  	name: 'MARKETING',
		  	nodes: [
			  {
			  	name: 'Performance',
			  	nodes: [
				  {
				  	name: 'Segments',
				  	description: 'View segment specific performance details.',
				  	state: 'marketing.segmentPerformance',
				  	link: '/marketing/performance/?activeTab=audienceSegments',
				  	permissions: ['marketing_performance']
				  }, {
				  	name: 'Campaigns',
				  	description: 'View campaign specific performance details.',
				  	state: 'marketing.campaignPerformance',
				  	link: '/marketing/performance/?activeTab=campaigns',
				  	permissions: ['marketing_performance']
				  }, {
				  	name: 'Sites',
				  	description: 'View site specific performance details.',
				  	state: 'marketing.campaignPerformance',
				  	link: '/marketing/performance/?activeTab=sites',
				  	permissions: ['marketing_performance']
				  }, {
				  	name: 'Reach and Overlap',
				  	description: 'View reach overlap across channels for campaigns or segments to increase precision.',
				  	state: 'marketing.reachOverlap',
				  	link: '/marketing/reach_overlap',
				  	permissions: ['reach_and_overlap']
				  }
			  	]
			  }, {
			  	name: 'Real Time Bidding',
			  	nodes: [
				  {
				  	name: 'Manage Campaigns',
				  	description: '',
				  	state: 'rtb.campaign.list',
				  	link: '/rtb/campaign',
				  	permissions: ['ic_extend', 'ic_extend_ro']
				  }, {
				  	name: 'Manage Creatives',
				  	description: '',
				  	state: 'rtb.creative.list',
				  	link: '/rtb/creative',
				  	permissions: ['ic_extend', 'ic_extend_ro']
				  }
			  	]
			  }, {
			  	name: 'Customer Journey',
			  	nodes: [
				  {
				  	name: 'Manage Campaign Attribution',
				  	description: '',
				  	state: 'marketing.campaignAttribution',
				  	link: '/marketing/campaign_attribution',
				  	permissions: ['manage_goals']
				  }, {
				  	name: 'Attribution Report',
				  	description: '',
				  	state: 'marketing.attribution',
				  	link: '/marketing/attribution',
				  	permissions: ['manage_goals', 'attribution_report']
				  }
			  	]
			  }, {
			  	name: 'Global Frequency',
			  	nodes: [
				  {
				  	name: 'Manage Frequency',
				  	description: 'Control and fine-tune frequency across all execution systems.',
				  	state: 'marketing.globalFrequencyManagement',
				  	link: '/marketing/global_frequency_management',
				  	permissions: ['global_frequency_management']
				  }, {
				  	name: 'Frequency Distribution',
				  	description: 'Monitor under-performing and wasteful campaign frequency.',
				  	state: 'marketing.frequencyDistributionReport',
				  	link: '/frequency-reports',
				  	permissions: ['frequency_reports']
				  }
			  	]
			  }
		  	]
		  }, {
		  	name: 'LINK',
		  	nodes: [
			  {
			  	name: 'Buyer',
			  	nodes: [
				  {
				  	name: 'Search',
				  	description: '',
				  	state: 'buyersConsole.search',
				  	link: '/buyersConsole/search',
				  	permissions: ['search_audience_segments']
				  }, {
				  	name: 'Manage Orders',
				  	description: '',
				  	state: 'order.manageOrders',
				  	link: '/order/manageOrders',
				  	permissions: ['ic_brokerage_ui', 'ic_brokerage_ui_ro']
				  }, {
				  	name: 'Cart',
				  	description: '',
				  	state: 'order.cart',
				  	link: '/order/cart',
				  	permissions: ['purchase_segments_manage_orders', 'purchase_segments_manage_orders_ro', 'search_audience_segments']
				  }, {
				  	name: 'Billing',
				  	description: '',
				  	state: 'buyersConsole.buyerBilling',
				  	link: '/buyersConsole/buyer_billing',
				  	permissions: ['purchase_segments_manage_orders']
				  }
			  	]
			  }, {
			  	name: 'Seller',
			  	nodes: [
				  {
				  	name: 'Manage LinK',
				  	description: '',
				  	state: 'interchange.brokerage.list',
				  	link: '/interchange/link',
				  	permissions: ['ic_brokerage_ui', 'ic_brokerage_ui_ro']
				  }, {
				  	name: 'Manage Orders',
				  	description: '',
				  	state: 'interchange.brokerage.orders.list',
				  	link: '/interchange/link/orders',
				  	permissions: ['ic_brokerage_ui', 'ic_brokerage_ui_ro']
				  }, {
				  	name: 'Billing',
				  	description: '',
				  	state: 'buyersConsole.sellerBilling',
				  	link: '/buyersConsole/seller_billing',
				  	permissions: ['ic_brokerage_ui', 'ic_brokerage_ui_ro']
				  }
			  	]
			  }
		  	]
		  }, {
		  	name: 'INTERCHANGE',
		  	nodes: [
			  {
			  	name: 'Performance',
			  	nodes: [
				  {
				  	name: 'Yield Analytics',
				  	description: '',
				  	state: 'yieldAnalytics.aggregate',
				  	link: '/interchange/yield_analytics',
				  	permissions: ['yield_analytics', 'yield_analytics_ro']
				  }
			  	]
			  }, {
			  	name: 'Partner Management',
			  	nodes: [
				  {
				  	name: 'Manage Accounts',
				  	description: '',
				  	state: 'partnerEnablementFramework.list',
				  	link: '/partner_management',
				  	permissions: ['manage_partners']
				  }
			  	]
			  }
		  	]
		  }, {
		  	name: 'SUPERTAG',
		  	nodes: [
			  {
			  	name: 'Actions',
			  	nodes: [
				  {
				  	name: 'List Tags',
				  	description: '',
				  	state: 'supertag.listTags',
				  	link: '/supertag/list_tags',
				  	permissions: ['supertag_full', 'supertag_readonly']
				  }, {
				  	name: 'Pending Approval',
				  	description: '',
				  	state: 'supertag.pendingApproval.list',
				  	link: '/supertag/pendingApproval',
				  	permissions: ['supertag_approve']
				  }, {
				  	name: 'Library Tags',
				  	description: '',
				  	state: 'supertag.libraryTags',
				  	link: '/supertag/library_tags',
				  	permissions: []
				  }, {
				  	name: 'Rule manager',
				  	description: 'Manage supertag named rules',
				  	state: 'supertag.tagRules',
				  	link: '/supertag/tag_rules',
				  	permissions: ['supertag_full']
				  }
			  	]
			  }, {
			  	name: 'Reports',
			  	nodes: [
				  {
				  	name: 'Tag Summary',
				  	description: '',
				  	state: 'supertag.reports.list',
				  	link: '/supertag/reports',
				  	permissions: ['supertag_full', 'supertag_readonly']
				  }, {
				  	name: 'Tag Inspector',
				  	description: '',
				  	state: 'supertag.tagInspectorCode',
				  	link: '/supertag/tag_inspector?auto_inspect',
				  	permissions: ['supertag_full', 'supertag_readonly']
				  }
			  	]
			  }
		  	]
		  }, {
		  	name: 'DATA SENTRY',
		  	nodes: [
			  {
			  	name: 'Dashboard',
			  	description: '',
			  	state: 'dataSentry.globalDashboard',
			  	link: '/dataSentry/globalDashboard',
			  	permissions: ['data_sentry']
			  }
		  	]
		  }, {
		  	name: 'TOOLS',
		  	nodes: [
			  {
			  	name: 'Settings',
			  	nodes: [
				  {
				  	name: 'Manage Users',
				  	description: '',
				  	state: 'account.usersList',
				  	link: '/account/users',
				  	permissions: ['manage_users']
				  }, {
				  	name: 'Manage Sites',
				  	description: '',
				  	state: 'account.sites',
				  	link: '/account/sites',
				  	permissions: ['manage_sites']
				  }, {
				  	name: 'Manage Settings',
				  	description: '',
				  	state: 'account.settings',
				  	link: '/account/settings',
				  	permissions: ['none']
				  }
			  	]
			  }, {
			  	name: 'Internal',
			  	nodes: [
				  {
				  	name: 'Create Organization',
				  	description: '',
				  	state: 'organization.create',
				  	link: '/organization/create',
				  	permissions: []
				  }, {
				  	name: 'Organization Settings',
				  	description: '',
				  	state: 'organization.edit',
				  	link: '/organization/edit/',
				  	permissions: []
				  }, {
				  	name: 'Internal Dashboard',
				  	description: '',
				  	state: 'internal.dashboard',
				  	link: '/internal/dashboard',
				  	permissions: []
				  }, {
				  	name: 'Traffic Trends',
				  	description: '',
				  	state: 'internal.traffic_trends',
				  	link: '/internal/traffic_trends',
				  	permissions: []
				  }, {
				  	name: 'Pipeline Dashboard',
				  	description: '',
				  	state: 'dataPipeline',
				  	link: '/pipeline',
				  	permissions: []
				  }
			  	]
			  }, {
			  	name: 'Platform Commands',
			  	nodes: [
				  {
				  	name: 'Generate Krux Standard Segments',
				  	description: '',
				  	state: 'platform.generate',
				  	link: '/platform/generate',
				  	permissions: []
				  }
			  	]
			  }
		  	]
		  }
		]
	};
}]);
