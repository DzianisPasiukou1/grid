angular.module('gridTaskApp')
	.controller('pageContentCtrl', ['$scope', 'gridService', function ($scope, gridService) {
		gridService.get(function (data) {
			$scope.data = data;
		});
	}]);