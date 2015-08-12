angular.module('gridExpressApp')
	.controller('filterListCtrl', ['$scope', function ($scope) {
		$scope.filter = function () {
			$scope.isFiltrate = true;
		}
	}]);