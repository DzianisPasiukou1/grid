angular.module('gridTaskApp')
	.controller('customGridCtrl', ['$scope', 'templatesPath', function ($scope, templatesPath) {
		$scope.data.map(function (value) {
			value.action = {
				values: [{
					label: 'Action',
					isAction: true
				}, {
					label: 'More',
					options: { label: 'More', values: [{ label: 'View Report' }], isMenu: true },
					isMore: true
				}],
				isShow: false
			};
			value.isCheck = false;
		});

		$scope.$watch('isFiltrate', function (value) {
			$scope.options.filterOptions.filterText = convertFilterOptions($scope.filters.filterOptions).filterText;
		});

		$scope.$watch('filters.searchValue', function (value) {
			if (!$scope.filters.show) {
				return;
			}

			if ($scope.filters.show.label == 'everywhere') {
				$scope.options.filterOptions.filterText = value;
			} else {
				$scope.options.filterOptions.filterText = $scope.filters.show.label + ':' + value;
			}
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