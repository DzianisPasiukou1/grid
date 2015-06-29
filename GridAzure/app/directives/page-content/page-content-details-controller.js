angular.module('gridTaskApp')
	.controller('pageContentDetailsCtrl', ['$scope', 'templatesPath', 'gridWithDetailsTemplateService', function ($scope, templatesPath, gridWithDetailsTemplateService) {
		function getData() {
			gridWithDetailsTemplateService.get(function (data) {
				$scope.data = data;
			});
		}
		getData();

		$scope.grid = {
			name: 'Grid with details template',
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
					options.push({ label: prop, isColumn: true });
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
						label: 'More',
						isMore: true,
						options: { label: 'Actions', values: [{ label: 'Edit' }, { label: 'Copy' }, { label: 'History' }, { label: 'Delete' }], isMenu: true }
					}],
					isShow: false
				};
				value.oncheck = function (value) {
					//for (var i = 0; i < $scope.data.length; i++) {
					//	if ($scope.data[i].isCheck) {
					//		$scope.selectedOptions.check.isMarked = true;
					//		break;
					//	}
					//}
				};

				if ($scope.selectedOptions.check) {

					if ($scope.selectedOptions.check.isAll) {
						value.isCheck = true;
					}
					else if ($scope.selectedOptions.check.isNoOne) {
						value.isCheck = false;
					}
					else if ($scope.selectedOptions.check.isMarked) {
						value.isCheck = false;
					}
					else if ($scope.selectedOptions.check.isNotMarked) {
						value.isCheck = true;
					}
				}

				value.detailsTemplate = templatesPath + 'details.html';
			});
		}

		$scope.gridOptions = {
			data: 'data',
			init: function (grid, $scope) {
			},
			multiSelect: false,
			rowTemplate: templatesPath + 'row-templates/row-with-detalis.html',
			afterSelectionChange: function (rowitem, event) {
				for (var i = 0; i < $scope.data.length; i++) {
					$scope.data[i].action.isShow = false;
				}

				rowitem.entity.action.isShow = rowitem.selected;
			},
			filterOptions: { filterText: '' },
			rowHeight: 60,
			headerRowHeight: 40,
			showFooter: true,
			footerRowHeight: 30,
			footerTemplate: templatesPath + 'grid-footer.html',
			columnDefs: [
				{ field: '', displayName: '', cellTemplate: templatesPath + 'row-templates/details-cell.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', sortable: false, width: 60, minWidth: 60 },
			{ field: 'priority', displayName: 'Priority', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100 },
			{ field: 'name', displayName: 'Name', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100 },
			{ field: 'ID', displayName: 'ID', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100 },
			{ field: 'Type', displayName: 'Type', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100 },
			{ field: 'category', displayName: 'Category', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100 },
			{ field: 'subCategory', displayName: 'Sub Category', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100 },
			{ field: 'devices', displayName: 'Devices', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100 },
			{ field: 'persistent', displayName: 'Persistent', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100 },
			{ field: 'people', displayName: 'People', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100 },
			{ field: 'refreshFrequency', displayName: 'Refresh Frequency', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 180 },
			{ field: 'lastComputed', displayName: 'Last Computed', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 140 },
			{ field: 'dateCreated', displayName: 'Date Created', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100 },
			{ field: 'interchange', displayName: 'Interchange', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100 },
				{
					field: 'action', displayName: '', cellTemplate: templatesPath + 'row-templates/action.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', sortable: false, width: 150, minWidth: 150
				}],
			plugins: [new ngGridCanvasheightPlugin()]
		};

		$scope.refresh();
	}])