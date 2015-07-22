angular.module('gridTaskApp')
	.controller('historyCtrl', ['$scope', function ($scope) {
		$scope.isModal = true;

		$scope.close = function () {
			$scope.isModal = false;
		};
	}]);