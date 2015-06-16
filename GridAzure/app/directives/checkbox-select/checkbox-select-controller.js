angular.module('gridTaskApp')
	.controller('checkboxSelectCtrl', ['$scope', function ($scope) {
		$scope.selected = $scope.actions.values[0];

		$scope.select = function (action) {
			$scope.selected = action;
		}
	}]);