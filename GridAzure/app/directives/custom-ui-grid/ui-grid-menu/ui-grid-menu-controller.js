angular.module('gridTaskApp')
	.controller('uiGridMenuCtrl', ['$scope', 'MENU', 'uiGridGridMenuService', function ($scope, MENU, uiGridGridMenuService) {
		if ($scope.options.menu === undefined) {
			$scope.options.menu = {};
		}

		if ($scope.options.menu.parentSelector === undefined) {
			$scope.parentSelector = MENU.parentSelector;
		}

		if ($scope.options.menu.parentMinWidth === undefined) {
			$scope.parentMinWidth = MENU.parentMinWidth;
		}

		if ($scope.options.showResponsMenu) {
			$scope.options.enableGridMenu = true;
		}

		$scope.getTotalWidth = function () {
			var totalWidth = $scope.gridApi.grid.columns.reduce(function (a, b) {
				if (b.visible) {
					return a + b.minWidth;
				}
				else {
					return a;
				}
			}, 0);

			return totalWidth;
		}

		$scope.changeMinWidth = function (totalWidth) {
			if ($('body')[0].scrollWidth < totalWidth) {
				$($scope.parentSelector).css('minWidth', totalWidth + 'px');
			}
			else {
				$($scope.parentSelector).css('minWidth', $scope.parentMinWidth + 'px');
			}
		}

		$scope.resize = function (totalWidth) {
			if ($('body')[0].scrollWidth < totalWidth) {
				for (var i = $scope.gridApi.grid.columns.length - 2; i > 1; i--) {
					if ($scope.gridApi.grid.columns[i].visible) {
						uiGridGridMenuService.toggleColumnVisibility($scope.gridApi.grid.columns[i]);
						totalWidth -= $scope.gridApi.grid.columns[i].minWidth;
					}
					if ($(window).width() > totalWidth) {
						break;
					}
				}
			}
			else {
				for (var i = 0; i < $scope.gridApi.grid.columns.length; i++) {
					if (!$scope.gridApi.grid.columns[i].visible) {
						if ($(window).width() < totalWidth + $scope.gridApi.grid.columns[i].minWidth) {
							break;
						}
						uiGridGridMenuService.toggleColumnVisibility($scope.gridApi.grid.columns[i]);
						totalWidth += $scope.gridApi.grid.columns[i].minWidth;
					}
				}
			}
		}
	}])