angular.module('gridTaskApp')
	.controller('searchCtrl', ['$scope', function ($scope) {
		$scope.edited = false;

		$scope.focus = function () {
			$scope.edited = true;
		};

		$scope.blur = function () {
			$scope.edited = false;
		}

		$scope.clear = function () {
			$scope.searchValue = '';
		};
	}]);