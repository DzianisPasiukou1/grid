angular.module('gridTaskApp')
	.controller('checkboxSelectCtrl', ['$scope', function ($scope) {
		$scope.selected = $scope.actions.noOne;
		$scope.check = false;

		$scope.select = function (action) {
			$scope.selected = action;

			if (action.isAll) {
				$scope.check = true;
			}
			else if (action.isNoOne) {
				$scope.check = false;
			}
			else {
				$scope.check = false;
			}
		}
	}]);