angular.module('gridExpressApp')
	.controller('gridWithCardsCtrl', ['$scope', 'gridStandartOneService', function ($scope, gridStandartOneService) {
		function getData() {
			gridStandartOneService.get(function (data) {
				$scope.data = data;
			});
		}
		getData();

		$scope.uiGridOptions = {
			showResponsMenu: true,
			enableAction: true,
			enableDetails: true,
			disableCheck: false
		}

		$scope.cardsOpt = {
			cards: [],
			startDate: '',
			endDate: ''
		}

	}])