angular.module('gridTaskApp')
	.controller('gridMenuCtrl', ['$scope', '$window', 'menuUtils', function ($scope, $window, menuUtils) {
		if (options.onCheck === undefined) {
			options.onCheck = function (action, index) {
				$scope.columns[index].toggleVisible();

				$scope.resize(action);
			}
		}

		$scope.menuUtils = menuUtils;
		$scope.menuUtils.register($scope.columns, $scope.options.menu);

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

			if (angular.element($window).width() < totalWidth) {
				angular.element($scope.options.parentSelector).css('minWidth', totalWidth + 'px');
			}
			else {
				angular.element($scope.options.parentSelector).css('minWidth', $scope.options.parentMinWidth + 'px');
			}
		}
	}]);