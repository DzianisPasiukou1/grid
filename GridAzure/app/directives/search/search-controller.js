angular.module('gridTaskApp')
	.controller('searchCtrl', ['$scope', function ($scope) {
		$scope.edited = false;

		$scope.focus = function () {
		};

		$scope.blur = function () {
		}

		$scope.clear = function () {
			$scope.searchValue = '';
		};
	}]);