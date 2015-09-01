(function () {
	'use strict'

	angular
		.module('azureApp')
		.controller('GridStandartOneController', GridStandartOneController);

	GridStandartOneController.$inject = ['gridStandartOneService', 'templatesPath'];

	function GridStandartOneController(gridStandartOneService, templatesPath) {
		var vm = this;

		vm.grid = {
			name: 'Standart grid one',
		};

		vm.contentOptions = {
			refresh: function () {
				getData();

				vm.grid.count = vm.data.length;
			},
			withUpload: true
		};

		vm.uiGridOptions = {
			showResponsMenu: true,
			reInit: true
		}

		vm.gridOptions = {
			data: 'vm.data',
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

		getData();

		function getData() {
			gridStandartOneService.get(function (data) {
				vm.data = data;
				vm.grid.count = vm.data.length;
			});
		}
	};
} ());