angular.module('gridTaskApp')
	.controller('gridStandartOneCtrl', ['$scope', 'gridStandartOneService', 'templatesPath', function ($scope, gridStandartOneService, templatesPath) {
		function getData() {
			gridStandartOneService.get(function (data) {
				$scope.data = data;
			});
		}
		getData();

		$scope.grid = {
			name: 'Standart grid one',
			count: $scope.data.length
		};

		$scope.contentOptions = {
			refresh: function () {
				getData();

				$scope.grid.count = $scope.data.length;
			},
			withUpload: true
		};

		$scope.uiGridOptions = {
			showResponsMenu: true,
			reInit: true
		}

		$scope.gridOptions = {
			data: 'data',
			init: function (grid, $scope) {
			},
			multiSelect: false,
			rowTemplate: templatesPath + 'grid-templates/row-templates/row.html',
			filterOptions: { filterText: '' },
			rowHeight: 60,
			headerRowHeight: 40,
			showFooter: true,
			footerRowHeight: 30,
			footerTemplate: templatesPath + 'grid-templates/grid-footer.html',
			selectItem: function (itemIndex, state) {

			},
			menu: {
				showResponsMenu: true
			},
			columnDefs: [
				{ field: 'details', displayName: '', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/details.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', sortable: false, width: 60, minWidth: 60 },
				{ field: 'date', displayName: 'Date', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/date.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 140 },
				{
					field: 'name', displayName: 'Name', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/name.html',
					headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'type', displayName: 'Type', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/type.html',
					headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'value', displayName: 'Value', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/value.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'trend', displayName: 'Trend', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/trend.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 130
				},
				{
					field: 'status', displayName: 'Status', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/status.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'category', displayName: 'Category', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/status.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'conversion', displayName: 'Conversion', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/status.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 130
				},
				{
					field: 'action', displayName: '', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/action.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', sortable: false, width: 250, minWidth: 115
				}]
		};
	}]);