angular.module('gridExpressApp')
	.controller('filterCtrl', ['$scope', function ($scope) {
		$scope.listState = false;

		$scope.filterClick = function () {
			$scope.listState = !$scope.listState;

			if ($scope.listState) {
				$scope.filterOptions.forEach(function (opt) {
					opt.filter = "";
				});
			}
		};

		$scope.showRecords = function () {
			$scope.listState = false;

			$scope.filtrate($scope.filterOptions);
		}
	}]);