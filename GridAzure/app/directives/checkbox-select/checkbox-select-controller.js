﻿angular.module('gridTaskApp')
	.controller('checkboxSelectCtrl', ['$scope', function ($scope) {
		if (!$scope.options.showClass) {
			$scope.options.showClass = 'glyphicon-menu-up'
		}
		if (!$scope.options.hideClass) {
			$scope.options.hideClass = 'glyphicon-menu-down'
		}

		if ($scope.options.selected === undefined) {
			$scope.options.selected = {};
		}

		$scope.select = function (action) {
			$scope.options.selected = action;

			if (action.isAll) {
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

				if ($scope.options.selected === undefined) {
					$scope.options.selected = {};
				}
				$scope.options.selected.check = true;
			}
			else {
				$scope.options.selected = $scope.options.actions.noOne;

				if ($scope.options.selected === undefined) {
					$scope.options.selected = {};
				}
				$scope.options.selected.check = false;
			}

			if ($scope.options.callback) {
				$scope.options.callback($scope.options.selected);
			}
		};
	}]);