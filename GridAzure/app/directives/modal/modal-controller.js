angular.module('gridTaskApp')
	.controller('modalCtrl', ['$scope', function ($scope) {
		$scope.isModal = true;

		$scope.fields = [];

		$scope.myEntity = {};

		$scope.myEntity = angular.copy($scope.value.entity);

		$scope.save = function () {
			if (!Array.isArray($scope.value.actions.history)) {
				$scope.value.actions.history = [];
			}

			$scope.value.actions.history.push({
				dateChange: new Date(),
				oldObj: angular.copy($scope.value.entity),
				newObj: angular.copy($scope.myEntity)
			})

			for (var field in $scope.myEntity) {
				$scope.value.entity[field] = $scope.myEntity[field];
			}

			$scope.close();
		};

		$scope.close = function () {
			$scope.myEntity = {};
			$scope.isModal = false;
		};

	}]);