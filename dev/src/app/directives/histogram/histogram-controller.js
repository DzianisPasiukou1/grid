angular.module('gridTaskApp')
	.controller('histogramCtrl', ['$scope', function ($scope) {
		$scope.selectedUsers = [];

		$scope.select = function (user) {
			if (user.name != "1") {
				$scope.selectedUsers.push({ touchpoints: user.name + ' touchpoints' });
			}
			else {
				$scope.selectedUsers.push({ touchpoints: user.name + ' touchpoint' });
			}

			$scope.$apply();
		}
	}]);