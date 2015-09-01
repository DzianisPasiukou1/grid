(function () {
	'use strict'

	angular
		.module('azureApp')
		.controller('GridWithMenuController', GridWithMenuController);

	GridWithMenuController.$inject = ['gridTemplatesPath', 'templatesPath'];

	function GridWithMenuController(gridUploadService, templatesPath) {
		var vm = this;

		vm.data = [];

		vm.grid = {
			name: 'Grid with menu',
			count: 0
		};

		vm.contentOptions = {
			upload: function (data) {
				vm.contentOptions.isLoading = true;

				vm.data = data;

				vm.grid.count = vm.data.length;
			},
			refresh: function () {
				vm.contentOptions.isLoading = true;

				getData();

				vm.grid.count = vm.data.length;
			},
			isDynamic: true,
			loading: true
		};

		vm.uiGridOptions = {
			showResponsMenu: true
		}

		vm.gridOptions = {
			data: 'data',
			withDetails: true,
			init: function (grid, $scope) {
			},
			showResponsMenu: true,
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
					field: 'action', displayName: '', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/action.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', sortable: false, width: 300, minWidth: 115
				}]
		};

		getData();

		function getData() {
			setTimeout(function () {
				gridUploadService.get(function (data) {
					vm.data = data;

					vm.grid.count = vm.data.length;
				})
			}, 2000)
		}
	};
} ());