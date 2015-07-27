angular.module('gridTaskApp')
	.controller('gridWithCardsCtrl', ['$scope', 'gridStandartOneService', function ($scope, gridStandartOneService) {
		function getData() {
			gridStandartOneService.get(function (data) {
				$scope.data = data;
			});
		}
		getData();

		$scope.myDatetimeRange = {
			date: {
				from: new Date(),
				to: new Date()
			},
			time: {
				from: 480,
				to: 1020,
				step: 15,
				minRange: 15,
				hours24: false
			}
		};

		$scope.myDatetimeLabels = {
			date: {
				from: 'Start date',
				to: 'End date'
			}
		};
	}])