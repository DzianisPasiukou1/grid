angular.module('gridTaskApp')
	.controller('filterCtrl', ['$scope', '$element', function ($scope, $element) {
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