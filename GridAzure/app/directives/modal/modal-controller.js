angular.module('gridTaskApp')
	.controller('modalCtrl', ['$scope', '$element', '$timeout', function ($scope, $element, $timeout) {
		$scope.isModal = true;

		$scope.fields = [];

		$scope.myEntity = angular.copy($scope.value.entity);

		$scope.modal = 'modal-ctrl';

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
			$scope.fade = {
				height: $element.find('.' + 'dialog').prop('scrollHeight') + 60 + 'px',
				width: $element.find('.' + 'dialog').prop('scrollWidth') + 'px'
			}
		};

		$scope.onInclude = function () {
			$timeout(function () {
				$scope.fade = {
					height: $element.find('.' + $scope.modal).prop('scrollHeight') + 'px'
				}
			});
		}
	}]);