angular.module('gridTaskApp')
	.controller('modalCtrl', ['$scope', '$element', '$timeout', function ($scope, $element, $timeout) {
		$scope.isModal = true;

		$scope.fields = [];

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

		$scope.resize = function () {
			$element.find('.fade').css('height', $element.find('.modal').prop('scrollHeight') + 'px');
			$element.find('.fade').css('width', $element.find('.modal').prop('scrollWidth') + 'px');
		};

		$scope.onInclude = function () {
			$timeout(function () {
				$element.find('.fade').css('height', $element.find('.modal').prop('scrollHeight') + 'px');
				$element.find('.fade').css('width', $element.find('.modal').prop('scrollWidth') + 'px');
			});
		}
	}]);