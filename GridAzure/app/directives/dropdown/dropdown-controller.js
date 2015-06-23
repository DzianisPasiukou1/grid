angular.module('gridTaskApp')
	.controller('dropdownCtrl', ['$scope', function ($scope) {
		if (!$scope.options.showClass) {
			$scope.options.showClass = 'glyphicon-menu-up'
		}
		if (!$scope.options.hideClass) {
			$scope.options.hideClass = 'glyphicon-menu-down'
		}

		$scope.selected = $scope.options.values[0];

		if ($scope.options.callback) {
			$scope.options.callback($scope.selected);
		}

		$scope.select = function (action) {
			$scope.selected = action;

			if ($scope.options.callback) {
				$scope.options.callback(action);
			}
		}
	}]);