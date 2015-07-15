angular.module('gridTaskApp')
	.controller('gridStandartTwoCtrl', ['$scope', 'gridStandartTwoService', 'templatesPath', function ($scope, gridStandartTwoService, templatesPath) {
		function getData() {
			gridStandartTwoService.get(function (data) {
				$scope.data = data;
			});
		}
		getData();

		$scope.grid = {
			name: 'Standart grid two',
			count: $scope.data.length
		};

		$scope.contentOptions = {
			refresh: function () {
				getData();

				$scope.grid.count = $scope.data.length;
			},
			filtrate: function (value) {
				$scope.gridOptions.filterOptions.filterText = convertFilterOptions(value).filterText;
			},
			search: function (value) {
				$scope.gridOptions.filterOptions.filterText = value;
			}
		};

		$scope.gridOptions = {
			data: 'data',
			multiSelect: false,
			rowTemplate: templatesPath + 'row-templates/row.html',
			filterOptions: { filterText: '' },
			rowHeight: 60,
			headerRowHeight: 40,
			showFooter: true,
			footerRowHeight: 30,
			reInit: false,
			footerTemplate: templatesPath + 'grid-footer.html',
			columnDefs: [
				{ field: 'details', displayName: '', cellTemplate: templatesPath + 'row-templates/details-cell.html', width: 60, headerCellTemplate: templatesPath + 'cell-templates/cell.html', sortable: false, minWidth: 60 },
				{
					field: 'name', displayName: 'Name',
					headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100, cellTemplate: templatesPath + 'row-templates/name.html'
				},
				{
					field: 'type', displayName: 'Type',
					headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100, cellTemplate: templatesPath + 'row-templates/type.html'
				},
				{
					field: 'category', displayName: 'Category',
					headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'status', displayName: 'Status', cellTemplate: templatesPath + 'row-templates/status.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'conversion', displayName: 'Conversion',
					headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 130
				},
				{
					field: 'action', displayName: '', cellTemplate: templatesPath + 'row-templates/action.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', sortable: false, width: 300, minWidth: 115
				}]
		};
	}]);