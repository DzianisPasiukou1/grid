angular.module('gridTaskApp')
	.controller('gridMenuCtrl', ['$scope', 'MENU', function ($scope, MENU) {
		$scope.options = $scope.options.menu;

		if ($scope.options === undefined) {
			$scope.options = {};
		}

		if ($scope.options.isMenu === undefined) {
			$scope.options.isMenu = false;
		}

		if ($scope.options.label === undefined) {
			$scope.options.label = '';
		}

		if ($scope.options.values === undefined) {
			$scope.options.values = [];
		}

		if ($scope.options.isCheckbox === undefined) {
			$scope.options.isCheckbox = true;
		}

		if ($scope.options.onCheck === undefined) {
			$scope.options.onCheck = function (action, index) {
				$scope.columns[index].toggleVisible();

				$scope.resize(action);
			}
		}

		if ($scope.options.withSave === undefined) {
			$scope.options.withSave = false;
		}

		if ($scope.options.onSave === undefined) {
			$scope.options.onSave = function () {
			}
		}

		if ($scope.options.callback === undefined) {
			$scope.options.callback = function (action) {
			}
		}

		if ($scope.options.parentSelector === undefined) {
			$scope.options.parentSelector = MENU.parentSelector;
		}

		if ($scope.options.parentMinWidth === undefined) {
			$scope.options.parentMinWidth = MENU.parentMinWidth;
		}

		$scope.resize = function (action) {
			var totalWidth = $scope.columns.reduce(function (a, b) {
				if (b.visible) {
					return a + b.minWidth;
				} else {
					return a;
				}
			}, 0);

			for (var j = 0; j < $scope.colCache.length; j++) {
				if ($scope.colCache[j].label == action.label) {
					$scope.colCache.splice(j, 1);
				}
			}

			if ($(window).width() < totalWidth) {
				$($scope.options.parentSelector).css('minWidth', totalWidth + 'px');
			}
			else {
				$($scope.options.parentSelector).css('minWidth', $scope.options.parentMinWidth + 'px');
			}
		}
	}]);