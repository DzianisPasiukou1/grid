(function () {
	'use strict'
	angular
		.module('ext.grid.uiGrid')
		.controller('ExtUiGridController', ExtUiGridController);

	ExtUiGridController.$inject = ['extUiGridTemplatesPath', '$scope', 'rowFactory'];

	function ExtUiGridController(templatesPath, $scope, rowFactory) {
		var vm = this;

		vm.contentOptions = vm.contentOptions || {};

		vm.data = vm.data || [];

		vm.options = vm.options || {};
		vm.options.data = vm.options.data || 'vm.data';
		vm.options.rowHeight = vm.options.rowHeight || 60;
		vm.options.showGridFooter = vm.options.showGridFooter || true;
		vm.options.enableColumnMenus = vm.options.enableColumnMenus || false;
		vm.options.enableRowSelection = vm.options.enableRowSelection || true;
		vm.options.enableGridMenu = vm.options.enableGridMenu || false;
		vm.options.multiSelect = vm.options.multiSelect || false;
		vm.options.modifierKeysToMultiSelect = vm.options.modifierKeysToMultiSelect || false;
		vm.options.noUnselect = vm.options.noUnselect || true;
		vm.options.enableExpandable = vm.options.enableExpandable || true;
		vm.options.enableRowHeaderSelection = vm.options.enableRowHeaderSelection || false;
		vm.options.expandableRowTemplate = vm.options.expandableRowTemplate || templatesPath + 'ui-grid-templates/details.html';
		vm.options.expandableRowHeight = vm.options.expandableRowHeight || 220;
		vm.options.selectionRowHeaderWidth = vm.options.selectionRowHeaderWidth || 35;
		vm.options.enableExpandableRowHeader = vm.options.enableExpandableRowHeader || false;
		vm.options.enableFiltering = vm.options.enableFiltering || true;
		vm.options.rowTemplate = vm.options.rowTemplate || templatesPath + 'ui-grid-templates/row.html';
		vm.options.expandableRowScope = vm.options.expandableRowScope || {
			subGridVariable: 'subGridScopeVariable'
		};
		vm.options.gridFooterTemplate = vm.options.gridFooterTemplate || '<div class="grid-footer"></div>';
		vm.options.headerTemplate = vm.options.headerTemplate || templatesPath + 'ui-grid-templates/header.html';
		vm.options.headerCellTemplate = vm.options.headerCellTemplate || templatesPath + 'ui-grid-templates/cell-templates/header.html';
		vm.options.reInit = vm.options.reInit || false;
		vm.options.enableDetails = vm.options.enableDetails || true;
		vm.options.detailsCellTemplate = vm.options.detailsCellTemplate || templatesPath + 'ui-grid-templates/cell-templates/details.html';
		vm.options.detailsWidth = vm.options.detailsWidth || 60;
		vm.options.detailsMinWidth = vm.options.detailsMinWidth || 60;
		vm.options.enableAction = vm.options.enableAction || true;
		vm.options.actionsCellTemplate = vm.options.actionsCellTemplate || templatesPath + 'ui-grid-templates/cell-templates/action.html';
		vm.options.actionsWidth = vm.options.actionsWidth || 250;
		vm.options.actionsMinWidth = vm.options.actionsWidth || 115;
		vm.options.columnMinWidth = vm.options.columnMinWidth || 80;
		vm.options.cellClass = vm.options.cellClass || cellClass;
		vm.options.enableColumnFilter = vm.options.enableColumnFilter || false;
		vm.options.onRegisterApi = vm.options.onRegisterApi || onRegisterApi;
		vm.options.filterOptions = vm.options.filterOptions || getFilterOptions();
		vm.options.rowActions = vm.options.rowActions || getRowActions();
		vm.options.columnDefs = vm.options.columnDefs || initColumnDef(vm.data);
		vm.options.reInit = vm.options.reInit || false;

		vm.singleFilter = singleFilter;
		vm.rowChangedClass = rowChangedClass;
		
		$scope.$watch('vm.options.filterOptions.filterText', filterTextChanged);

		function cellClass(grid, row, col) {
			if (row.isChecked) {
				return 'checked';
			}
			else if (row.isExpanded) {
				return 'expanded';
			}
		};

		function getFilterOptions() {
			var filterOptions = {
				filterText: ''
			};

			return filterOptions;
		};

		function getRowActions() {
			var actions = {
				options: {
					label: 'Actions',
					values: [{ label: 'Edit', isEdit: true, priority: 4 }, { label: 'Copy', isCopy: true, priority: 3 }, { label: 'History', isHistory: true, priority: 2 }, { label: 'Delete', isDelete: true, priority: 1 }],
					isMenu: true
				},
				isShow: false
			};

			return actions;
		};

		function rowChangedClass(renderableRows) {
			return renderableRows;
		};

		function onRegisterApi(gridApi) {
			vm.gridApi = gridApi;

			$scope.$watch('options.filterOptions.filterText', filterTextChanged);
			$scope.$watch('data', dataChanged);

			gridApi.core.on.rowsRendered($scope, rowRendered);

			vm.gridApi.grid.registerRowsProcessor(vm.singleFilter, 200);

			if (vm.options.enableDetails) {
				gridApi.expandable.on.rowExpandedStateChanged($scope, rowExpandedStateChanged);
			}

			if (vm.contentOptions.checks) {
				vm.contentOptions.checks.options.callback = checkbCallback;
			}
		};

		function singleFilter(renderableRows) {
			var filtersText = vm.options.filterOptions.filterText.split(';');

			if (filtersText.length == 1 && filtersText[0].indexOf(':') == -1) {
				var matcher = new RegExp(vm.options.filterOptions.filterText);

				renderableRows.forEach(function (row) {
					mathRows(row, null, matcher);
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
						mathRows(row, propName, matcher);
					});
				}
			}

			return renderableRows;
		};

		function mathRows(row, propName, matcher) {
			var match = false;

			vm.options.columnDefs.forEach(function (item) {
				var propName = propName || item.field;

				if (row.entity[propName] !== undefined) {
					if (row.entity[propName].toString().match(matcher)) {
						match = true;
					}
				}
			});

			if (!match) {
				row.visible = false;
			}
		};

		function rowRendered() {
			vm.gridApi.grid.rows.forEach(function (row) {
				if (vm.options.enableAction) {
					row.actions = angular.copy(vm.options.rowActions);
					row.actions.static = rowFactory.getNewRow(row);
					row.actions.history = [];
					row.actions.options.callback = function (action) {
						if (action.isEdit) {
							row.actions.static.edit();
						}
						else if (action.isCopy) {
							row.actions.static.copy();
						}
						else if (action.isDelete) {
							row.actions.static.delete(vm.data);
						}
						else if (action.isHistory) {
							row.actions.static.history();
						}
					};
				}
				else {
					row.actions = {};
				}
				if (vm.options.enableDetails) {
					row.actions.tab = 2;
					row.actions.expand = function () {
						vm.gridApi.expandable.toggleRowExpansion(row.entity);
					};
					row.actions.disableCheck = vm.options.disableCheck;
				}
				if (vm.contentOptions.checks) {
					row.actions.setCheck = function () {
						var data = vm.gridApi.grid.rows;

						var isCheckArray = data.filter(function (value) {
							if (value.isCheck) {
								return true;
							}
						});

						if (isCheckArray.length == 0) {
							vm.contentOptions.checks.options.selected = vm.contentOptions.checks.options.actions.noOne;
						}
						else if (isCheckArray.length == data.length) {
							vm.contentOptions.checks.options.selected = vm.contentOptions.checks.options.actions.all;
						}
						else {
							vm.contentOptions.checks.options.selected = vm.contentOptions.checks.options.actions.marked;
						}

						vm.gridApi.grid.refresh();
					}
				};
			});
		};

		function rowExpandedStateChanged(row) {
			if (row.isExpanded) {
				vm.gridApi.grid.rows.forEach(function (rowCache) {
					if (rowCache.isExpanded && row.entity != rowCache.entity) {
						rowCache.actions.expand();
					}
				});
			}
		};

		function checkbCallback(check) {
			if (check) {
				if (check.isAll) {
					vm.gridApi.grid.rows.forEach(function (row) {
						row.isCheck = true;
					});
				}
				else if (check.isNoOne) {
					vm.gridApi.grid.rows.forEach(function (row) {
						row.isCheck = false;
					});
				}
				else if (check.isMarked) {
					vm.gridApi.grid.rows.forEach(function (row) {
					});
				}
				else if (check.isNotMarked) {
					vm.gridApi.grid.rows.forEach(function (row) {
						row.isCheck = !row.isCheck;
					});
				}
			}
		};

		function filterTextChanged(text) {
			vm.gridApi.grid.refresh();
		};

		function dataChanged(data) {
			if (Array.isArray(data)) {
				if (vm.options.reInit) {
					vm.options.columnDefs = initColumnDef(data);
				}
			}
		};

		function initColumnDef(data) {
			var columns = [];

			if (vm.options.enableDetails) {
				columns.push({
					field: 'details',
					displayName: '',
					headerCellTemplate: vm.options.headerCellTemplate,
					cellTemplate: vm.options.detailsCellTemplate,
					enableSorting: false,
					width: vm.options.detailsWidth,
					minWidth: vm.options.detailsMinWidth,
					enableFiltering: vm.options.enableColumnFilter,
					cellClass: vm.options.cellClass
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
						enableFiltering: vm.options.enableColumnFilter,
						minWidth: vm.options.columnMinWidth,
						cellClass: vm.options.cellClass
					})
				};
			}

			if (vm.options.enableAction) {
				columns.push({
					field: 'action',
					displayName: '',
					cellTemplate: vm.options.actionsCellTemplate,
					headerCellTemplate: vm.options.headerCellTemplate,
					enableSorting: false,
					width: vm.options.actionsWidth,
					minWidth: vm.options.actionsMinWidth,
					enableFiltering: vm.options.enableColumnFilter,
					cellClass: vm.options.cellClass
				});
			}

			return columns;
		};
	};
} ());