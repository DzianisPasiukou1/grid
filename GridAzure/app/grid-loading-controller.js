angular.module('gridTaskApp')
	.controller('gridLoadingCtrl', ['templatesPath', '$scope', 'gridUploadService', function (templatesPath, $scope, gridUploadService) {
		$scope.data = [];

		function getData() {
			setTimeout(function () {
				gridUploadService.get(function (data) {
					$scope.data = data;

					$scope.grid.count = $scope.data.length;

					$scope.$apply();
				})
			}, 2000)
		}
		getData();

		$scope.grid = {
			name: 'Grid with loading',
			count: 0
		};

		$scope.contentOptions = {
			upload: function (data) {
				$scope.contentOptions.isLoading = true;

				$scope.data = data;

				$scope.grid.count = $scope.data.length;

				$scope.gridOptions.detailsCondition = undefined;

				$scope.$apply();
			},
			refresh: function () {
				$scope.contentOptions.isLoading = true;

				getData();

				$scope.grid.count = $scope.data.length;
			},
			isDynamic: true,
			loading: true
		};

		$scope.gridOptions = {
			data: 'data',
			multiSelect: false,
			init: function (grid, event) {
				$scope.contentOptions.isLoading = false;
			},
			withDetails: true,
			rowTemplate: templatesPath + 'row-templates/row-with-detalis.html',
			filterOptions: { filterText: '' },
			rowHeight: 60,
			headerRowHeight: 40,
			showFooter: true,
			footerRowHeight: 30,
			footerTemplate: templatesPath + 'grid-footer.html',
			columnDefs: columnGenerator($scope.data, templatesPath),
			detailsCondition: function (entity, index) {
				if (index % 2 != 0) {
					return templatesPath + 'details-templates/details-example2.html';
				}
			}
		};
	}]);