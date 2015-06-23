angular.module('gridTaskApp')
	.controller('checkboxSelectCtrl', ['$scope', function ($scope) {
		if (!$scope.options.showClass) {
			$scope.options.showClass = 'glyphicon-menu-up'
		}
		if (!$scope.options.hideClass) {
			$scope.options.hideClass = 'glyphicon-menu-down'
		}

		$scope.selected = $scope.options.actions.noOne;

		if ($scope.options.callback) {
			$scope.options.callback($scope.selected);
		}
		$scope.check = false;

		$scope.select = function (action) {
			$scope.selected = action;

			if (action.isAll) {
				$scope.check = true;
			}
			else {
				$scope.check = false;
			}

			if ($scope.options.callback) {
				$scope.options.callback(action);
			}
		}
	}]);