angular.module('gridExpressApp')
	.controller('searchCtrl', ['$scope', function ($scope) {
		$scope.edited = false;

		$scope.clear = function () {
			$scope.searchValue = '';
		};

		$scope.$watch('searchValue', function (value) {
			if (value.length > 0) {
				$scope.edited = false;
			}
			else {
				$scope.edited = true;
			}
		})
	}]);