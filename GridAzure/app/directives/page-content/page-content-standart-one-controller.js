angular.module('gridTaskApp')
	.controller('pageContentStandartOneCtrl', ['$scope', 'gridStandartOneService', 'templatesPath', function ($scope, gridStandartOneService, templatesPath) {
		function getData() {
			gridStandartOneService.get(function (data) {
				$scope.data = data;
			});
		}
		getData();

		$scope.grid = {
			name: 'Grid standart one',
			count: $scope.data.length
		};

		$scope.exports = {
			options: {
				label: 'Export to: ',
				values: [{ label: 'Excel', isExcel: true }, { label: 'Pdf', isPdf: true }],
				callback: function (action) {
					$scope.export = action;
				}
			}
		};
		$scope.views = {
			options:
				{
					label: 'View: ',
					values: [{ label: 'Grid', isGrid: true, isTiles: false }, { label: 'Tiles', isGrid: false, isTiles: true }],
					callback: function (action) {
						$scope.view = action;
					}
				}
		};
		$scope.selectedOptions = {};
		$scope.selectedOptions.filterOptions = function () {
			var options = [];

			if (Array.isArray($scope.data) && $scope.data[0])
				for (var prop in $scope.data[0]) {
					options.push({ label: prop });
				}
			return options;
		}();

		$scope.selectedOptions.searchOptions = function () {
			var options = [];
			options.push({ label: 'everywhere', isEverywhere: true });

			if (Array.isArray($scope.data) && $scope.data[0]) {
				for (var prop in $scope.data[0]) {
					options.push({ label: prop, isColumn: true });
				}
			}

			return options;
		}();

		$scope.isFiltrate = false;

		$scope.refresh = function () {
			getData();

			$scope.data.map(function (value) {
				value.action = {
					values: [{
						label: 'Action', isAction: true
					}, {
						label: 'More',
						isMore: true,
						options: { label: 'More', values: [{ label: 'View Report' }], isMenu: true }
					}],
					isShow: false
				};

				if ($scope.selectedOptions.check) {
					if ($scope.selectedOptions.check.isAll) {
						value.isCheck = true;
					}
					else if ($scope.selectedOptions.check.isNoOne) {
						value.isCheck = false;
					}
					else if ($scope.selectedOptions.check.isMarked) {
					}
					else if ($scope.selectedOptions.check.isNotMarked) {
						value.isCheck = !value.isCheck;
					}
				}
			});
		}

		$scope.gridOptions = {
			data: 'data',
			init: function (grid, $scope) {
			},
			multiSelect: false,
			rowTemplate: templatesPath + 'row-templates/row.html',
			afterSelectionChange: function (rowitem, event) {
				rowitem.entity.action.isShow = rowitem.selected;
			},
			filterOptions: { filterText: '' },
			rowHeight: 60,
			headerRowHeight: 40,
			showFooter: true,
			footerRowHeight: 30,
			footerTemplate: templatesPath + 'grid-footer.html',
			selectItem: function (itemIndex, state) {

			},
			columnDefs: [
				{ field: '', displayName: '', cellTemplate: templatesPath + 'row-templates/details-cell.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', sortable: false, width: 60, minWidth: 60 },
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
					field: 'action', displayName: '', cellTemplate: templatesPath + 'row-templates/action.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', sortable: false, width: 240, minWidth: 240
				}],
			plugins: []
		};

		$scope.refresh();
	}]);