angular.module('gridTaskApp')
	.controller('gridmenuCtrl', ['templatesPath', '$scope', 'gridUploadService', function (templatesPath, $scope, gridUploadService) {
		$scope.data = [];

		function getData() {
			setTimeout(function () {
				gridUploadService.get(function (data) {
					$scope.data = data;

					$scope.grid.count = $scope.data.length;

					$scope.$apply();
				})
			}, 2000)
		}
		getData();

		$scope.grid = {
			name: 'Grid with menu',
			count: 0
		};

		$scope.contentOptions = {
			upload: function (data) {
				$scope.contentOptions.isLoading = true;

				$scope.data = data;

				$scope.grid.count = $scope.data.length;

				$scope.$apply();
			},
			refresh: function () {
				$scope.contentOptions.isLoading = true;

				getData();

				$scope.grid.count = $scope.data.length;
			},
			isDynamic: true,
			loading: true
		};
		$scope.gridOptions = {
			data: 'data',
			withDetails: true,
			init: function (grid, $scope) {
			},
			showResponsMenu: true,
			multiSelect: false,
			rowTemplate: templatesPath + 'row-templates/row.html',
			filterOptions: { filterText: '' },
			rowHeight: 60,
			headerRowHeight: 40,
			showFooter: true,
			footerRowHeight: 30,
			footerTemplate: templatesPath + 'grid-footer.html',
			selectItem: function (itemIndex, state) {

			},
			columnDefs: [
				{ field: 'details', displayName: '', cellTemplate: templatesPath + 'row-templates/details-cell.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', sortable: false, width: 60, minWidth: 60 },
			{ field: 'date', displayName: 'Date', cellTemplate: templatesPath + 'row-templates/date.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 140 },
				{
					field: 'name', displayName: 'Name', cellTemplate: templatesPath + 'row-templates/name.html',
					headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'type', displayName: 'Type', cellTemplate: templatesPath + 'row-templates/type.html',
					headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'value', displayName: 'Value', cellTemplate: templatesPath + 'row-templates/value.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'trend', displayName: 'Trend', cellTemplate: templatesPath + 'row-templates/trend.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 130
				},
				{
					field: 'status', displayName: 'Status', cellTemplate: templatesPath + 'row-templates/status.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'category', displayName: 'Category', cellTemplate: templatesPath + 'row-templates/status.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'conversion', displayName: 'Conversion', cellTemplate: templatesPath + 'row-templates/status.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 130
				},
				{
					field: 'action', displayName: '', cellTemplate: templatesPath + 'row-templates/action.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', sortable: false, width: 300, minWidth: 115
				}]
		};
	}]);