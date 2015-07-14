angular.module('gridTaskApp')
	.controller('modalCtrl', ['$scope', function ($scope) {
		$scope.isModal = true;

		$scope.fields = [];

		$scope.myEntity = {};

		for (var i = 0; i < $scope.entities.length; i++) {
			if ($scope.entities[i].rowIndex == $scope.rowIndex) {
				$scope.myEntity = angular.copy($scope.entities[i].entity);
				$scope.entityIndex = i;
			}
		}

		$scope.save = function () {
			if (!Array.isArray($scope.entities[$scope.entityIndex].orig.actions.history)) {
				$scope.entities[$scope.entityIndex].orig.actions.history = [];
			}

			$scope.entities[$scope.entityIndex].orig.actions.history.push({
				dateChange: new Date(),
				oldObj: $scope.entities[$scope.entityIndex].entity,
				newObj: $scope.myEntity
			})

			$scope.entities[$scope.entityIndex].entity = $scope.myEntity;

			$scope.close();
		};

		$scope.close = function () {
			$scope.myEntity = {};
			$scope.isModal = false;
		};

	}]);