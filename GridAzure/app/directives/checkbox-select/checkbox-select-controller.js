angular.module('gridTaskApp')
	.controller('checkboxSelectCtrl', ['$scope', function ($scope) {
		$scope.selected = $scope.actions.noOne;
		$scope.check = false;

		$scope.select = function (action) {
			$scope.selected = action;

			if (action.label == 'All') {
				$scope.check = true;
			}
			else if (action.label == 'No one') {
				$scope.check = false;
			} else {
				$scope.check = false;
			}
		}
	}]);