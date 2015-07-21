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
			expandableRowScope: {
				subGridVariable: 'subGridScopeVariable'
			},
			onRegisterApi: function (gridApi) {
				$scope.gridApi = gridApi;

				gridApi.core.on.rowsRendered($scope, function () {
					$scope.gridApi.grid.rows.forEach(function (row) {
						row.actions = angular.copy($scope.options.rowActions);
						row.actions.tab = 2;
					})
				});

				gridApi.selection.on.rowSelectionChanged($scope, function (row) {
					var msg = 'row selected ' + row.isSelected;
					console.log(msg);
				});

				gridApi.expandable.on.rowExpandedStateChanged($scope, function (row) {
					if (row.isExpanded) {

					}
				});
			},
			gridFooterTemplate: '<div class="grid-footer"></div>',
			columnDefs: [
				{ field: 'details', displayName: '', cellTemplate: templatesPath + 'ui-grid-templates/cell-templates/details-cell.html', sortable: false, width: 60, minWidth: 60 },
			{ field: 'date', displayName: 'Date', minWidth: 140 },
				{
					field: 'name', displayName: 'Name',
					minWidth: 100
				},
				{
					field: 'type', displayName: 'Type',
					minWidth: 100
				},
				{
					field: 'value', displayName: 'Value', minWidth: 100
				},
				{
					field: 'trend', displayName: 'Trend', minWidth: 130
				},
				{
					field: 'status', displayName: 'Status', minWidth: 100
				},
				{
					field: 'category', displayName: 'Category', minWidth: 100
				},
				{
					field: 'conversion', displayName: 'Conversion', minWidth: 130
				},
				{
					field: 'action', displayName: '', cellTemplate: templatesPath + 'ui-grid-templates/cell-templates/action.html', sortable: false, width: 250, minWidth: 115
				}]
		}
	}]);