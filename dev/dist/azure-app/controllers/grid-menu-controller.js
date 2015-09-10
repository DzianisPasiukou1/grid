(function () {
	'use strict'

	angular
		.module('azureApp')
		.controller('GridWithMenuController', GridWithMenuController);

	GridWithMenuController.$inject = ['gridUploadService', 'gridTemplatesPath', '$scope'];

	/**
	 * Description
	 * @method GridWithMenuController
	 * @param {} gridUploadService
	 * @param {} templatesPath
	 * @param {} $scope
	 * @return 
	 */
	function GridWithMenuController(gridUploadService, templatesPath, $scope) {
		var vm = this;

		vm.data = [];

		vm.grid = {
			name: 'Grid with menu',
			count: 0
		};

		vm.contentOptions = {
			/**
			 * Description
			 * @method upload
			 * @param {} data
			 * @return 
			 */
			upload: function (data) {
				vm.contentOptions.isLoading = true;

				vm.data = data;

				vm.grid.count = vm.data.length;
			},
			/**
			 * Description
			 * @method refresh
			 * @return 
			 */
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
			/**
			 * Description
			 * @method init
			 * @param {} grid
			 * @param {} $scope
			 * @return 
			 */
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
			/**
			 * Description
			 * @method selectItem
			 * @param {} itemIndex
			 * @param {} state
			 * @return 
			 */
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

		/**
		 * Description
		 * @method getData
		 * @return 
		 */
		function getData() {
			setTimeout(function () {
				gridUploadService.get(function (data) {
					vm.data = data;

					vm.grid.count = vm.data.length;
					$scope.$apply();
				})
			}, 2000)
		}
	};
} ());