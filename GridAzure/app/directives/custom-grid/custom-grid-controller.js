angular.module('gridTaskApp')
	.controller('customGridCtrl', ['$scope', 'templatesPath', function ($scope, templatesPath) {
		$scope.data.map(function (value) {
			value.action = { values: [{ label: 'Action' }, { label: 'More' }], isShow: false };
			value.isCheck = false;
		});
		$scope.filterData = angular.copy($scope.data, []);

		$scope.options = {
			data: 'filterData',
			multiSelect: false,
			rowTemplate: templatesPath + 'row-templates/row.html',
			afterSelectionChange: function (rowitem, event) {
				rowitem.entity.action.isShow = rowitem.selected;
			},
			filterOptions: { filterText: '' },
			rowHeight: 100,
			headerRowHeight: 50,
			showFooter: true,
			columnDefs: [
				{ field: '', displayName: '', cellTemplate: templatesPath + 'row-templates/details.html', width: 100 },
			{ field: 'date', displayName: 'Date', cellTemplate: templatesPath + 'row-templates/date.html' },
				{ field: 'name', displayName: 'Name', cellTemplate: templatesPath + 'row-templates/name.html' },
				{ field: 'value', displayName: 'Value', cellTemplate: templatesPath + 'row-templates/value.html' },
				{ field: 'trend', displayName: 'Trend', cellTemplate: templatesPath + 'row-templates/trend.html' },
				{ field: 'action', displayName: '', cellTemplate: templatesPath + 'row-templates/action.html', width: 250 }],
			plugins: []
		};

		$scope.$watch('filters.searchValue', function (value) {
			if (value) {
				$scope.options.filterOptions.filterText = 'name:' + value;
			}
		});

		function plugin() {
			if ($scope.exportTo.label == 'Excel') {
				$scope.options.plugins.push(new ngGridCsvExportPlugin());
			}
		}

		plugin();
	}]);