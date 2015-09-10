(function () {
	'use strict'

	angular
		.module('azureApp')
		.controller('GridWithDetailsController', GridWithDetailsController);

	GridWithDetailsController.$inject = ['gridWithDetailsTemplateService', 'gridTemplatesPath'];

	/**
	 * Description
	 * @method GridWithDetailsController
	 * @param {} gridWithDetailsTemplateService
	 * @param {} templatesPath
	 * @return 
	 */
	function GridWithDetailsController(gridWithDetailsTemplateService, templatesPath) {
		var vm = this;

		vm.grid = {
			name: 'Grid with details template',
		};

		vm.contentOptions = {
			/**
			 * Description
			 * @method refresh
			 * @return 
			 */
			refresh: function () {
				getData();

				vm.grid.count = vm.data.length;
			},
			isDynamic: true
		};

		vm.gridOptions = {
			data: 'data',
			withDetails: true,
			/**
			 * Description
			 * @method init
			 * @param {} grid
			 * @param {} $scope
			 * @return 
			 */
			init: function (grid, $scope) {
			},
			multiSelect: false,
			rowTemplate: templatesPath + 'grid-templates/row-templates/row-with-detalis.html',
			filterOptions: { filterText: '' },
			rowHeight: 60,
			headerRowHeight: 40,
			showFooter: true,
			footerRowHeight: 30,
			footerTemplate: templatesPath + 'grid-templates/grid-footer.html',
			columnDefs: [
				{ field: 'details', displayName: '', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/details.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', sortable: false, width: 60, minWidth: 60 },
				{ field: 'priority', displayName: 'Priority', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
				{ field: 'name', displayName: 'Name', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
				{ field: 'ID', displayName: 'ID', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
				{ field: 'Type', displayName: 'Type', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
				{ field: 'category', displayName: 'Category', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
				{ field: 'subCategory', displayName: 'Sub Category', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
				{ field: 'devices', displayName: 'Devices', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
				{ field: 'persistent', displayName: 'Persistent', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
				{ field: 'people', displayName: 'People', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
				{ field: 'refreshFrequency', displayName: 'Refresh Frequency', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
				{ field: 'lastComputed', displayName: 'Last Computed', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
				{ field: 'dateCreated', displayName: 'Date Created', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
				{ field: 'interchange', displayName: 'Interchange', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
				{
					field: 'action', displayName: '', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/action.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', sortable: false, width: 300, minWidth: 150
				}]
		};

		getData();

		/**
		 * Description
		 * @method getData
		 * @return 
		 */
		function getData() {
			gridWithDetailsTemplateService.get(function (data) {
				vm.data = data;
			});
		};
	};
} ());