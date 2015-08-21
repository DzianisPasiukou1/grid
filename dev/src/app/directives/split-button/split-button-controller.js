angular.module('gridTaskApp')
	.controller('splitButtonCtrl', ['$scope', function ($scope) {
		if (!$scope.actions) {
			$scope.actions = [];
		}
		if (!$scope.typehead) {
			$scope.actions.everywhere = { label: 'everywhere', isEverywhere: true };

			$scope.actions.selected = $scope.actions.everywhere;
		}

		$scope.select = function (action) {
			$scope.actions.selected = action;
			$scope.search = '';

			$scope.close();
		}

		$scope.toggle = function () {
			$scope.isShow = !$scope.isShow;
		}

		$scope.close = function () {
			$scope.isShow = false;
		}
	}]);