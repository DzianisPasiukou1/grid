angular.module('gridTaskApp')
	.controller('splitButtonCtrl', ['$scope', function ($scope) {
		if (!$scope.actions) {
			$scope.actions = [];
		}
		$scope.actions.everywhere = { label: 'everywhere', isEverywhere: true };

		$scope.actions.selected = $scope.actions.everywhere;

		$scope.select = function (action) {
			$scope.actions.selected = action;
			$scope.search = '';
		}
	}]);