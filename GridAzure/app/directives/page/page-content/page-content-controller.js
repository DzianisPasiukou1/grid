angular.module('gridTaskApp')
	.controller('pageContentCtrl', ['$scope', 'gridService', function ($scope, gridService) {
		function getData() {
			gridService.get(function (data) {
				$scope.data = data;
			});
		}
		getData();

		$scope.grid = {
			name: 'Grid name',
			count: $scope.data.length
		};

		$scope.exports = { name: 'Export to ', values: [{ label: 'Excel' }, { label: 'Pdf' }] };
		$scope.views = { name: 'View: ', values: [{ label: 'Grid' }, { label: 'Tiles' }] };
		$scope.selectedOptions = {};
		$scope.selectedOptions.filterOptions = function () {
			var options = [];

			if (Array.isArray($scope.data) && $scope.data[0])
				for (var prop in $scope.data[0]) {
					options.push({ label: prop });
				}
			return options;
		}();

		$scope.isFiltrate = false;

		$scope.refresh = function () {
			getData();

			$scope.data.map(function (value) {
				value.action = { values: [{ label: 'Action' }, { label: 'More', values: [{ label: 'More' }] }], isShow: false };
				value.isCheck = false;
			});
		}
	}]);