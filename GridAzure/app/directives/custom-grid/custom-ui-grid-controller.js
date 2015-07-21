angular.module('gridTaskApp')
	.controller('customUiGridCtrl', ['$scope', 'templatesPath', function ($scope, templatesPath) {
		$scope.opt2 = {
			data: 'data',
			rowHeight: 57,
			showGridFooter: true,
			enableColumnMenus: false,
			enableRowSelection: true,
			multiSelect: false,
			modifierKeysToMultiSelect: false,
			noUnselect: true,
			enableRowHeaderSelection: false,
			expandableRowTemplate: templatesPath + 'details.html',
			expandableRowHeight: 220,
			selectionRowHeaderWidth: 35,
			enableExpandableRowHeader: false,
			enableFiltering: true,
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
					})
				});

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
			},
			gridFooterTemplate: '<div class="grid-footer"></div>',
			columnDefs: [
				{ field: 'details', displayName: '', cellTemplate: templatesPath + 'ui-grid-templates/cell-templates/details-cell.html', sortable: false, width: 60, minWidth: 60, enableFiltering: false },
			{ field: 'date', displayName: 'Date', minWidth: 140, enableFiltering: false, filters: [] },
				{
					field: 'name', displayName: 'Name',
					minWidth: 100, enableFiltering: false, filters: []
				},
				{
					field: 'type', displayName: 'Type',
					minWidth: 100, enableFiltering: false, filters: []
				},
				{
					field: 'value', displayName: 'Value', minWidth: 100, enableFiltering: false, filters: []
				},
				{
					field: 'trend', displayName: 'Trend', minWidth: 130, enableFiltering: false, filters: []
				},
				{
					field: 'status', displayName: 'Status', minWidth: 100, enableFiltering: false, filters: []
				},
				{
					field: 'category', displayName: 'Category', minWidth: 100, enableFiltering: false, filters: []
				},
				{
					field: 'conversion', displayName: 'Conversion', minWidth: 130, enableFiltering: false, filters: []
				},
				{
					field: 'action', displayName: '', cellTemplate: templatesPath + 'ui-grid-templates/cell-templates/action.html', sortable: false, width: 250, minWidth: 115, enableFiltering: false
				}]
		}

		$scope.$watch('options.filterOptions.filterText', function (text) {
			if (text !== undefined) {
				var filtersText = text.split(';');

				for (var i = 0; i < filtersText.length; i++) {
					var propName = filtersText[i].substr(0, filtersText[i].indexOf(':'));
					var propVal = filtersText[i].substr(filtersText[i].indexOf(':') + 1);

					if (propName == '') {
						for (var j = 0; j < $scope.gridApi.grid.columns.length; j++) {
							//if (!$scope.gridApi.grid.columns[j].filters[0]) {
							//	$scope.gridApi.grid.columns[j].filters[0] = {};
							//}
							//$scope.gridApi.grid.columns[j].filters[0].term = '*' + propVal + '*';
						}

						$scope.gridApi.grid.rows.forEach(function (row) {
							var isFinded = false;

							for (var prop in row.entity) {
								if (row.entity[prop].toString().indexOf(propVal) != -1) {
									isFinded = true;
									break;
								}
							}

							if (!isFinded) {
								$scope.gridApi.core.setRowInvisible(row);
								//row.visible = false;
							}
							else {
								row.visible = true;
							}
						});

						break;
					}

					for (var j = 0; j < $scope.gridApi.grid.columns.length; j++) {
						if ($scope.gridApi.grid.columns[j].field == propName) {
							if (!$scope.gridApi.grid.columns[j].filters[0]) {
								$scope.gridApi.grid.columns[j].filters[0] = {};
							}
							$scope.gridApi.grid.columns[j].filters[0].term = propVal;
							break;
						}
					}
				}

				$scope.gridApi.core.raise.rowsVisibleChanged();
				$scope.gridApi.grid.refreshRows();
			}
		});
	}]);