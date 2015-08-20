angular.module('gridTaskApp')
	.controller('checkboxSelectCtrl', ['$scope', function ($scope) {
		if ($scope.options.selected === undefined) {
			$scope.options.selected = {};
		}

		if ($scope.options.callback) {
			$scope.$on('checkboxSelect', function (event, data) {
				$scope.options.callback(data);
			});
		}

		$scope.$watch('options.selected', function (value) {
			if (value) {
				if (value.isAll) {
					value.check = true;
				}
				else {
					value.check = false;
				}
			}
		});

		$scope.toggle = function () {
			$scope.isShow = !$scope.isShow;
		}

		$scope.turnOff = function () {
			$scope.isShow = false;
		}

		$scope.select = function (action) {
			$scope.turnOff();
			$scope.options.selected = action;
			$scope.$emit('checkboxSelect', action);
		}

		$scope.checked = function (value) {
			$scope.turnOff();
			if (value) {
				$scope.options.selected = $scope.options.actions.all;
			}
			else {
				$scope.options.selected = $scope.options.actions.noOne;
			}
			$scope.$emit('checkboxSelect', $scope.options.selected);
		};
	}]);