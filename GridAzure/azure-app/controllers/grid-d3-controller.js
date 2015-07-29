angular.module('gridTaskApp')
	.controller('gridD3Ctrl', ['$scope', 'gridStandartOneService', function ($scope, gridStandartOneService) {
		function getData() {
			gridStandartOneService.get(function (data) {
				$scope.data = data;
			});
		}
		getData();

		$scope.uiGridOptions = {
			showResponsMenu: true
		}

		$scope.cardsOpt = {
			margin: 415
		}

	}])