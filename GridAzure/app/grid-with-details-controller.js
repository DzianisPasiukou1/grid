﻿angular.module('gridTaskApp')
	.controller('gridWithDetailsCtrl', ['$scope', 'templatesPath', 'gridWithDetailsTemplateService', function ($scope, templatesPath, gridWithDetailsTemplateService) {
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

		$scope.contentOptions = {
			refresh: function () {
				getData();

				$scope.grid.count = $scope.data.length;
			},
			isDynamic: true,
			filtrate: function (value) {
				$scope.gridOptions.filterOptions.filterText = convertFilterOptions(value).filterText;
			},
			search: function (value) {
				$scope.gridOptions.filterOptions.filterText = value;
			}
		};

		$scope.gridOptions = {
			data: 'data',
			withDetails: true,
			init: function (grid, $scope) {
			},
			multiSelect: false,
			rowTemplate: templatesPath + 'row-templates/row-with-detalis.html',
			filterOptions: { filterText: '' },
			rowHeight: 60,
			headerRowHeight: 40,
			showFooter: true,
			footerRowHeight: 30,
			footerTemplate: templatesPath + 'grid-footer.html',
			columnDefs: [
				{ field: 'details', displayName: '', cellTemplate: templatesPath + 'row-templates/details-cell.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', sortable: false, width: 60, minWidth: 60 },
			{ field: 'priority', displayName: 'Priority', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 60 },
			{ field: 'name', displayName: 'Name', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 60 },
			{ field: 'ID', displayName: 'ID', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 60 },
			{ field: 'Type', displayName: 'Type', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 60 },
			{ field: 'category', displayName: 'Category', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 60 },
			{ field: 'subCategory', displayName: 'Sub Category', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 60 },
			{ field: 'devices', displayName: 'Devices', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 60 },
			{ field: 'persistent', displayName: 'Persistent', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 60 },
			{ field: 'people', displayName: 'People', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 60 },
			{ field: 'refreshFrequency', displayName: 'Refresh Frequency', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 60 },
			{ field: 'lastComputed', displayName: 'Last Computed', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 60 },
			{ field: 'dateCreated', displayName: 'Date Created', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 60 },
			{ field: 'interchange', displayName: 'Interchange', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 60 },
				{
					field: 'action', displayName: '', cellTemplate: templatesPath + 'row-templates/action.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', sortable: false, width: 300, minWidth: 150
				}]
		};
	}])