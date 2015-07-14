angular.module('gridTaskApp')
	.controller('historyCtrl', ['$scope', function ($scope) {
		$scope.isModal = true;

		if (Array.isArray($scope.entities)) {
			for (var i = 0; i < $scope.entities.length; i++) {
				if ($scope.entities[i].rowIndex == $scope.rowIndex) {
					$scope.history = angular.copy($scope.entities[i].orig.actions.history);
					$scope.entityIndex = i;
				}
			}
		}

		$scope.close = function () {
			$scope.isModal = false;
		};
	}]);