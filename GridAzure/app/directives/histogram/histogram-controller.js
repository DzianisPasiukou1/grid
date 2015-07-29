angular.module('gridTaskApp')
	.controller('histogramCtrl', ['$scope', function ($scope) {
		$scope.selectedUsers = [{ touchpoints: '9 touchpoints' }, { touchpoints: '8 touchpoints' }];
	}]);