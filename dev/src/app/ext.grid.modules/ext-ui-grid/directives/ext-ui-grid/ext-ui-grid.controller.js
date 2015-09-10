(function () {
	'use strict';
	
	angular
		.module('ext.grid.uiGrid')
		.controller('ExtUiGridController', ExtUiGridController);

	ExtUiGridController.$inject = ['extUiGridTemplatesPath', '$scope', 'rowFactory', 'extDefine'];

	/**
	 * Description
	 * @method ExtUiGridController
	 * @param {} templatesPath
	 * @param {} $scope
	 * @param {} rowFactory
	 * @param {} extDefine
	 * @return 
	 */
	function ExtUiGridController(templatesPath, $scope, rowFactory, extDefine) {
		var vm = this;

		vm.contentOptions = vm.contentOptions || {};

		vm.data = vm.data || [];

		vm.options = extDefine(vm.options, {});
		vm.options.data = extDefine(vm.options.data, 'vm.data');
		vm.options.rowHeight = extDefine(vm.options.rowHeight, 60);
		vm.options.showGridFooter = extDefine(vm.options.showGridFooter, true)
		vm.options.enableColumnMenus = extDefine(vm.options.enableColumnMenus, false);
		vm.options.enableRowSelection = extDefine(vm.options.enableRowSelection, true);
		vm.options.enableGridMenu = extDefine(vm.options.enableGridMenu, false);
		vm.options.multiSelect = extDefine(vm.options.multiSelect, false);
		vm.options.modifierKeysToMultiSelect = extDefine(vm.options.modifierKeysToMultiSelect, false);
		vm.options.noUnselect = extDefine(vm.options.noUnselect, true);
		vm.options.enableExpandable = extDefine(vm.options.enableExpandable, true);
		vm.options.enableRowHeaderSelection = extDefine(vm.options.enableRowHeaderSelection, false);
		vm.options.expandableRowTemplate = extDefine(vm.options.expandableRowTemplate, templatesPath + 'ui-grid-templates/details.html');
		vm.options.expandableRowHeight = extDefine(vm.options.expandableRowHeight, 220);
		vm.options.selectionRowHeaderWidth = extDefine(vm.options.selectionRowHeaderWidth, 35);
		vm.options.enableExpandableRowHeader = extDefine(vm.options.enableExpandableRowHeader, false);
		vm.options.enableFiltering = extDefine(vm.options.enableFiltering, true);
		vm.options.rowTemplate = extDefine(vm.options.rowTemplate, templatesPath + 'ui-grid-templates/row.html');
		vm.options.expandableRowScope = extDefine(vm.options.expandableRowScope, {
			subGridVariable: 'subGridScopeVariable'
		});
		vm.options.gridFooterTemplate = extDefine(vm.options.gridFooterTemplate, '<div class="grid-footer"></div>');
		vm.options.headerTemplate = extDefine(vm.options.headerTemplate, templatesPath + 'ui-grid-templates/header.html');
		vm.options.headerCellTemplate = extDefine(vm.options.headerCellTemplate, templatesPath + 'ui-grid-templates/cell-templates/header-cell.html');
		vm.options.reInit = extDefine(vm.options.reInit, false);
		vm.options.enableDetails = extDefine(vm.options.enableDetails, true);
		vm.options.detailsCellTemplate = extDefine(vm.options.detailsCellTemplate, templatesPath + 'ui-grid-templates/cell-templates/details.html');
		vm.options.detailsWidth = extDefine(vm.options.detailsWidth, 60);
		vm.options.detailsMinWidth = extDefine(vm.options.detailsMinWidth, 60);
		vm.options.enableAction = extDefine(vm.options.enableAction, true);
		vm.options.actionsCellTemplate = extDefine(vm.options.actionsCellTemplate, templatesPath + 'ui-grid-templates/cell-templates/action.html');
		vm.options.actionsWidth = extDefine(vm.options.actionsWidth, 250);
		vm.options.actionsMinWidth = extDefine(vm.options.actionsWidth, 115);
		vm.options.columnMinWidth = extDefine(vm.options.columnMinWidth, 80);
		vm.options.cellClass = extDefine(vm.options.cellClass, cellClass);
		vm.options.enableColumnFilter = extDefine(vm.options.enableColumnFilter, false);
		vm.options.onRegisterApi = onRegisterApi;
		vm.options.filterOptions = extDefine(vm.options.filterOptions, getFilterOptions());
		vm.options.rowActions = extDefine(vm.options.rowActions, getRowActions());
		vm.options.columnDefs = extDefine(vm.options.columnDefs, initColumnDef(vm.data));
		vm.options.reInit = vm.contentOptions.withUpload ? extDefine(vm.options.reInit, true) : extDefine(vm.options.reInit, false);

		vm.singleFilter = singleFilter;
		vm.rowChangedClass = rowChangedClass;

		$scope.$watch('vm.data', dataChanged);

		/**
		 * Description
		 * @method cellClass
		 * @param {} grid
		 * @param {} row
		 * @param {} col
		 * @return 
		 */
		function cellClass(grid, row, col) {
			if (row.isChecked) {
				return 'checked';
			}
			else if (row.isExpanded) {
				return 'expanded';
			}
		};

		/**
		 * Description
		 * @method getFilterOptions
		 * @return filterOptions
		 */
		function getFilterOptions() {
			var filterOptions = {
				filterText: ''
			};

			return filterOptions;
		};

		/**
		 * Description
		 * @method getRowActions
		 * @return actions
		 */
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

		/**
		 * Description
		 * @method rowChangedClass
		 * @param {} renderableRows
		 * @return renderableRows
		 */
		function rowChangedClass(renderableRows) {
			return renderableRows;
		};

		/**
		 * Description
		 * @method onRegisterApi
		 * @param {} gridApi
		 * @return 
		 */
		function onRegisterApi(gridApi) {
			if (angular.isFunction(vm.options.extRegisterApi)) {
				vm.options.extRegisterApi(gridApi);
			}

			vm.gridApi = {};

			vm.gridApi = gridApi;

			$scope.$watch('vm.options.filterOptions.filterText', filterTextChanged);

			gridApi.core.on.rowsRendered($scope, rowRendered);

			vm.gridApi.grid.registerRowsProcessor(vm.singleFilter, 200);

			if (vm.options.enableDetails) {
				gridApi.expandable.on.rowExpandedStateChanged($scope, rowExpandedStateChanged);
			}

			if (vm.contentOptions.checks) {
				vm.contentOptions.checks.callback = checkCallback;
			}
		};

		/**
		 * Description
		 * @method singleFilter
		 * @param {} renderableRows
		 * @return renderableRows
		 */
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

		/**
		 * Description
		 * @method mathRows
		 * @param {} row
		 * @param {} propName
		 * @param {} matcher
		 * @return 
		 */
		function mathRows(row, propName, matcher) {
			var match = false;

			vm.options.columnDefs.forEach(function (item) {
				var prop = propName || item.field;

				if (row.entity[prop] !== undefined) {
					if (row.entity[prop].toString().match(matcher)) {
						match = true;
					}
				}
			});

			if (!match) {
				row.visible = false;
			}
		};

		/**
		 * Description
		 * @method rowRendered
		 * @return 
		 */
		function rowRendered() {
			vm.gridApi.grid.rows.forEach(function (row) {
				if (vm.options.enableAction) {
					row.actions = angular.copy(vm.options.rowActions);
					row.actions.static = rowFactory.getNewRow(row);
					row.actions.history = [];
					/**
					 * Description
					 * @method callback
					 * @param {} action
					 * @return 
					 */
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
					/**
					 * Description
					 * @method expand
					 * @return 
					 */
					row.actions.expand = function () {
						vm.gridApi.expandable.toggleRowExpansion(row.entity);
					};
					row.actions.disableCheck = vm.options.disableCheck;
				}
				if (vm.contentOptions.checks) {
					/**
					 * Description
					 * @method setCheck
					 * @return 
					 */
					row.actions.setCheck = function () {
						var data = vm.gridApi.grid.rows;

						var isCheckArray = data.filter(function (value) {
							if (value.isCheck) {
								return true;
							}
						});

						if (isCheckArray.length == 0) {
							vm.contentOptions.checks.selected = vm.contentOptions.checks.actions.noOne;
						}
						else if (isCheckArray.length == data.length) {
							vm.contentOptions.checks.selected = vm.contentOptions.checks.actions.all;
						}
						else {
							vm.contentOptions.checks.selected = vm.contentOptions.checks.actions.marked;
						}

						vm.gridApi.grid.refresh();
					}
				};
			});
		};

		/**
		 * Description
		 * @method rowExpandedStateChanged
		 * @param {} row
		 * @return 
		 */
		function rowExpandedStateChanged(row) {
			if (row.isExpanded) {
				vm.gridApi.grid.rows.forEach(function (rowCache) {
					if (rowCache.isExpanded && row.entity != rowCache.entity) {
						rowCache.actions.expand();
					}
				});
			}
		};

		/**
		 * Description
		 * @method checkCallback
		 * @param {} check
		 * @return 
		 */
		function checkCallback(check) {
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

		/**
		 * Description
		 * @method filterTextChanged
		 * @param {} text
		 * @return 
		 */
		function filterTextChanged(text) {
			vm.gridApi.grid.refresh();
		};

		/**
		 * Description
		 * @method dataChanged
		 * @param {} data
		 * @return 
		 */
		function dataChanged(data) {
			if (Array.isArray(data)) {
				if (vm.options.reInit) {
					var newColumn = initColumnDef(data)

					if (!columnsCompare(newColumn, vm.options.columnDefs)) {
						vm.options.columnDefs = newColumn;
						vm.gridApi.grid.refresh();
					}
				}
			}
		};

		/**
		 * Description
		 * @method initColumnDef
		 * @param {} data
		 * @return columns
		 */
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

		/**
		 * Description
		 * @method columnsCompare
		 * @param {} oldCols
		 * @param {} newCols
		 * @return Literal
		 */
		function columnsCompare(oldCols, newCols) {
			if (!Array.isArray(oldCols) || !Array.isArray(newCols) || oldCols.length != newCols.length) {
				return false;
			}

			for (var i = 0; i < oldCols.length; i++) {
				if (oldCols[i].field != newCols[i].field) {
					return false;
				}
			}

			return true;
		};
	};
} ());