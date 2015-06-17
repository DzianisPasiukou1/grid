angular.module('gridTaskApp')
	.controller('filterCtrl', ['$scope', function ($scope) {
		$scope.listState = false;
		$scope.isBlur = false;

		$scope.filterClick = function () {
			$scope.listState = !$scope.listState;
			if (!$scope.listState) {
				$scope.isBlur = true;
			}
			else {
				$scope.isBlur = false;
			}
		};

		$scope.filterBlur = function () {
			if (!$scope.isBlur) {
				$scope.listState = !$scope.listState;
				$scope.isBlur = true;
			}
		}
	}]);