angular.module('gridTaskApp')
	.controller('dropdownCtrl', ['$scope', 'classes', function ($scope, classes) {
		if (!$scope.options.showClass) {
			$scope.options.showClass = classes.menuUp;
		}
		if (!$scope.options.hideClass) {
			$scope.options.hideClass = classes.menuDown;
		}

		if (!$scope.options.isMenu) {
			$scope.options.selected = $scope.options.values[0];

			if ($scope.options.callback) {
				$scope.options.callback($scope.options.selected);
			}
		}
		else {
			$scope.options.selected = {};
		}

		$scope.select = function (action) {
			$scope.options.selected = action;

			if ($scope.options.callback) {
				$scope.options.callback(action);
			}
		}
	}]);