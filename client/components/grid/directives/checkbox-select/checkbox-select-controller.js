angular.module('gridExpressApp')
	.controller('checkboxSelectCtrl', ['$scope', function ($scope) {
		if ($scope.options.selected === undefined) {
			$scope.options.selected = {};
		}

		$scope.toggle = function () {
			$scope.isShow = !$scope.isShow;
		}

		$scope.select = function (action) {
			$scope.isShow = false;
			$scope.options.selected = action;

			if ($scope.options.selected.isAll) {
				$scope.options.selected.check = true;
			}
			else {
				$scope.options.selected.check = false;
			}

			if ($scope.options.callback) {
				$scope.options.callback(action);
			}
		}

		$scope.checked = function (value) {
			if (value) {
				$scope.options.selected = $scope.options.actions.all;
				$scope.options.selected.check = true;

				if ($scope.options.selected === undefined) {
					$scope.options.selected = {};
				}
			}
			else {
				$scope.options.selected = $scope.options.actions.noOne;
				$scope.options.selected.check = false;

				if ($scope.options.selected === undefined) {
					$scope.options.selected = {};
				}
			}

			if ($scope.options.callback) {
				$scope.options.callback($scope.options.selected);
			}

			$scope.isShow = false;
		};
	}]);