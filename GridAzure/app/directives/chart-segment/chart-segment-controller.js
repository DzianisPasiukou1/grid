angular.module('gridTaskApp')
	.controller('chartSegmentCtrl', ['$scope', function ($scope) {
		$scope.deleteUser = function (user, index) {
			$scope.selectedUsers.splice(index, 1);
		}
	}]);