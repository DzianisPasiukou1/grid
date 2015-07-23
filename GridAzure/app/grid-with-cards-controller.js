angular.module('gridTaskApp')
	.controller('gridWithCardsCtrl', ['$scope', 'gridStandartOneService', function ($scope, gridStandartOneService) {
		function getData() {
			gridStandartOneService.get(function (data) {
				$scope.data = data;
			});
		}
		getData();
	}])