angular.module('gridTaskApp')
	.controller('customGridCtrl', ['$scope', 'templatesPath', function ($scope, templatesPath) {
		$scope.data.map(function (value) {
			value.action = { values: [{ label: 'Action' }, { label: 'More', values: [{label: 'More'}] }], isShow: false };
			value.isCheck = false;
		});

		$scope.options = {
			data: 'data|filter:filterOptions',
			multiSelect: false,
			rowTemplate: templatesPath + 'row-templates/row.html',
			afterSelectionChange: function (rowitem, event) {
				rowitem.entity.action.isShow = rowitem.selected;
			},
			filterOptions: { filterText: '' },
			rowHeight: 60,
			headerRowHeight: 40,
			showFooter: true,
			columnDefs: [
				{ field: '', displayName: '', cellTemplate: templatesPath + 'row-templates/details.html', width: 70, headerCellTemplate: templatesPath + 'cell-templates/cell.html', sortable: false },
			{ field: 'date', displayName: 'Date', cellTemplate: templatesPath + 'row-templates/date.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html' },
				{ field: 'name', displayName: 'Name', cellTemplate: templatesPath + 'row-templates/name.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html' },
				{ field: 'value', displayName: 'Value', cellTemplate: templatesPath + 'row-templates/value.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html' },
				{ field: 'trend', displayName: 'Trend', cellTemplate: templatesPath + 'row-templates/trend.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html' },
				{ field: 'action', displayName: '', cellTemplate: templatesPath + 'row-templates/action.html', width: 250, headerCellTemplate: templatesPath + 'cell-templates/cell.html', sortable: false }],
			plugins: []
		};

		$scope.$watch('isFiltrate', function (value) {
			$scope.options.filterOptions.filterText = convertFilterOptions($scope.filters.filterOptions).filterText;
		});

		function plugin() {
			if ($scope.exportTo.label == 'Excel') {
				$scope.options.plugins.push(new ngGridCsvExportPlugin());
			}
		}

		function convertFilterOptions(options) {
			var convertOpt = { filterText: '' };

			for (var i = 0; i < options.length; i++) {

				if (options[i].filter) {
					convertOpt.filterText += options[i].label + ':' + options[i].filter + ';';
				}
			}
			return convertOpt;
		}

		plugin();
	}]);