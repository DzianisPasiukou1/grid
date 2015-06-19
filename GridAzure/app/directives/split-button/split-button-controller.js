angular.module('gridTaskApp')
	.controller('splitButtonCtrl', ['$scope', function ($scope) {
		$scope.selected = $scope.actions[0];

		$scope.select = function (action) {
			$scope.selected = action;
			$scope.search = '';
		}
	}]);