angular.module('gridTaskApp')
	.controller('gridSortCtrl', ['$scope', function ($scope) {
		$scope.isShow = false;

		$scope.toggleSort = function () {
			$scope.isShow = false;
			$scope.$apply();
		}
	}]);