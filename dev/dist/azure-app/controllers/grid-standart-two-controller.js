(function () {
	'use strict'

	angular
		.module('azureApp')
		.controller('GridStandartTwoController', GridStandartTwoController);

	GridStandartTwoController.$inject = ['gridStandartTwoService', 'templatesPath'];

	function GridStandartTwoController(gridStandartTwoService, templatesPath) {
		var vm = this;

		vm.grid = {
			name: 'Standart grid two',
			count: vm.data.length
		};

		vm.contentOptions = {
			refresh: function () {
				getData();

				vm.grid.count = vm.data.length;
			}
		};

		vm.gridOptions = {
			data: 'vm.data',
			multiSelect: false,
			rowTemplate: templatesPath + 'grid-templates/row-templates/row.html',
			filterOptions: { filterText: '' },
			rowHeight: 60,
			headerRowHeight: 40,
			showFooter: true,
			footerRowHeight: 30,
			reInit: false,
			footerTemplate: templatesPath + 'grid-templates/grid-footer.html',
			columnDefs: [
				{ field: 'details', displayName: '', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/details.html', width: 60, headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', sortable: false, minWidth: 60 },
				{
					field: 'name', displayName: 'Name',
					headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100, cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/name.html'
				},
				{
					field: 'type', displayName: 'Type',
					headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100, cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/type.html'
				},
				{
					field: 'category', displayName: 'Category',
					headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'status', displayName: 'Status', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/status.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'conversion', displayName: 'Conversion',
					headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 130
				},
				{
					field: 'action', displayName: '', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/action.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', sortable: false, width: 300, minWidth: 115
				}]
		};

		getData();

		function getData() {
			gridStandartTwoService.get(function (data) {
				vm.data = data;
			});
		}
	};
} ());