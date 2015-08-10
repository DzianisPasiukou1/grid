angular.module('gridTaskApp')
	.controller('customUiGridCtrl', ['$scope', 'templatesPath', '$compile', function ($scope, templatesPath, $compile) {

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
							if ($scope.contentOptions.checks) {
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
							}
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

			$('body').append('<div modal value="editingRow" enable-save="true" body-template-url="app/templates/directive-templates/edit-entity.html"></modal>');
			var modal = $('div[modal]');
			$compile(modal)($scope);
		}


		var historyRow = function (row) {
			if ($('history').length != 0) {
				$('history').remove();
			}

			$scope.historiedRow = row;

			$('body').append('<div modal value="historiedRow.actions.history"  body-template-url="app/templates/directive-templates/history.html"></history>');
			var modal = $('div[modal]');
			$compile(modal)($scope);
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