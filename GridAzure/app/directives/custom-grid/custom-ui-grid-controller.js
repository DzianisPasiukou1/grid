angular.module('gridTaskApp')
	.controller('customUiGridCtrl', ['$scope', 'templatesPath', '$compile', '$interval', function ($scope, templatesPath, $compile, $interval) {
		$scope.opt2 = {
			data: 'data',
			rowHeight: 60,
			showGridFooter: true,
			enableColumnMenus: false,
			enableRowSelection: true,
			enableGridMenu: true,
			multiSelect: false,
			modifierKeysToMultiSelect: false,
			noUnselect: true,
			enableExpandable: true,
			enableRowHeaderSelection: false,
			expandableRowTemplate: templatesPath + 'details.html',
			expandableRowHeight: 220,
			selectionRowHeaderWidth: 35,
			enableExpandableRowHeader: false,
			enableFiltering: true,
			rowTemplate: templatesPath + 'ui-grid-templates/row.html',
			expandableRowScope: {
				subGridVariable: 'subGridScopeVariable'
			},
			onRegisterApi: function (gridApi) {
				$scope.gridApi = gridApi;

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

				$scope.gridApi.grid.registerRowsProcessor($scope.singleFilter, 200);

				gridApi.selection.on.rowSelectionChanged($scope, function (row) {
					var msg = 'row selected ' + row.isSelected;
					console.log(msg);
				});

				gridApi.expandable.on.rowExpandedStateChanged($scope, function (row) {
					if (row.isExpanded) {
						$scope.gridApi.grid.rows.forEach(function (rowCache) {
							if (rowCache.isExpanded && row.entity != rowCache.entity) {
								rowCache.actions.expand();
							}
						});
					}
				});

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
			},
			gridFooterTemplate: '<div class="grid-footer"></div>',
			headerTemplate: templatesPath + 'ui-grid-templates/header.html',
			columnDefs: [
				{
					field: 'details', displayName: '', cellTemplate: templatesPath + 'ui-grid-templates/cell-templates/details-cell.html', enableSorting: false, width: 60, minWidth: 60, enableFiltering: false,
					cellClass: function (grid, row, col, rowRenderedIndex, colRenderedIndex) {
						if (row.isChecked) {
							return 'checked';
						}
						else if (row.isExpanded) {
							return 'expanded';
						}
					}
				},
			{
				field: 'date', displayName: 'Date', minWidth: 140, enableFiltering: false, filters: [], cellClass: function (grid, row, col, rowRenderedIndex, colRenderedIndex) {
					if (row.isChecked) {
						return 'checked';
					}
					else if (row.isExpanded) {
						return 'expanded';
					}
				}
			},
				{
					field: 'name', displayName: 'Name',
					minWidth: 100, enableFiltering: false, filters: [],
					cellClass: function (grid, row, col, rowRenderedIndex, colRenderedIndex) {
						if (row.isChecked) {
							return 'checked';
						}
						else if (row.isExpanded) {
							return 'expanded';
						}
					}
				},
				{
					field: 'type', displayName: 'Type',
					minWidth: 100, enableFiltering: false, filters: [],
					cellClass: function (grid, row, col, rowRenderedIndex, colRenderedIndex) {
						if (row.isChecked) {
							return 'checked';
						}
						else if (row.isExpanded) {
							return 'expanded';
						}
					}
				},
				{
					field: 'value', displayName: 'Value', minWidth: 100, enableFiltering: false, filters: [],
					cellClass: function (grid, row, col, rowRenderedIndex, colRenderedIndex) {
						if (row.isChecked) {
							return 'checked';
						}
						else if (row.isExpanded) {
							return 'expanded';
						}
					}
				},
				{
					field: 'trend', displayName: 'Trend', minWidth: 130, enableFiltering: false, filters: [],
					cellClass: function (grid, row, col, rowRenderedIndex, colRenderedIndex) {
						if (row.isChecked) {
							return 'checked';
						}
						else if (row.isExpanded) {
							return 'expanded';
						}
					}
				},
				{
					field: 'status', displayName: 'Status', minWidth: 100, enableFiltering: false, filters: [],
					cellClass: function (grid, row, col, rowRenderedIndex, colRenderedIndex) {
						if (row.isChecked) {
							return 'checked';
						}
						else if (row.isExpanded) {
							return 'expanded';
						}
					}
				},
				{
					field: 'category', displayName: 'Category', minWidth: 100, enableFiltering: false, filters: [],
					cellClass: function (grid, row, col, rowRenderedIndex, colRenderedIndex) {
						if (row.isChecked) {
							return 'checked';
						}
						else if (row.isExpanded) {
							return 'expanded';
						}
					}
				},
				{
					field: 'conversion', displayName: 'Conversion', minWidth: 130, enableFiltering: false, filters: [],
					cellClass: function (grid, row, col, rowRenderedIndex, colRenderedIndex) {
						if (row.isChecked) {
							return 'checked';
						}
						else if (row.isExpanded) {
							return 'expanded';
						}
					}
				},
				{
					field: 'action', displayName: '', cellTemplate: templatesPath + 'ui-grid-templates/cell-templates/action.html', enableSorting: false, width: 250, minWidth: 115, enableFiltering: false,
					cellClass: function (grid, row, col, rowRenderedIndex, colRenderedIndex) {
						if (row.isChecked) {
							return 'checked';
						}
						else if (row.isExpanded) {
							return 'expanded';
						}
					}
				}]
		}

		$scope.singleFilter = function (renderableRows) {
			var filtersText = $scope.options.filterOptions.filterText.split(';');

			if (filtersText.length == 1 && filtersText[0].indexOf(':') == -1) {
				var matcher = new RegExp($scope.options.filterOptions.filterText);

				renderableRows.forEach(function (row) {
					var match = false;

					$scope.opt2.columnDefs.forEach(function (col) {
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

						$scope.opt2.columnDefs.forEach(function (col) {
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
			var columns = [];

			columns.push({
				field: 'details', displayName: '', headerCellTemplate: templatesPath + 'ui-grid-templates/cell-templates/header-cell-template.html', cellTemplate: templatesPath + 'ui-grid-templates/cell-templates/details-cell.html', enableSorting: false, width: 60, minWidth: 60, enableFiltering: false,
				cellClass: function (grid, row, col, rowRenderedIndex, colRenderedIndex) {
					if (row.isChecked) {
						return 'checked';
					}
					else if (row.isExpanded) {
						return 'expanded';
					}
				}
			});

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
						enableFiltering: false,
						minWidth: 80,
						//headerCellTemplate: templatesPath + 'ui-grid-templates/cell-templates/header-cell-template.html',
						cellClass: function (grid, row, col, rowRenderedIndex, colRenderedIndex) {
							if (row.isChecked) {
								return 'checked';
							}
							else if (row.isExpanded) {
								return 'expanded';
							}
						}
					})
				}
			}

			columns.push({
				field: 'action', displayName: '', cellTemplate: templatesPath + 'ui-grid-templates/cell-templates/action.html', headerCellTemplate: templatesPath + 'ui-grid-templates/cell-templates/header-cell-template.html', enableSorting: false, width: 250, minWidth: 115, enableFiltering: false,
				cellClass: function (grid, row, col, rowRenderedIndex, colRenderedIndex) {
					if (row.isChecked) {
						return 'checked';
					}
					else if (row.isExpanded) {
						return 'expanded';
					}
				}
			});

			$scope.opt2.columnDefs = columns;
		});
	}]);