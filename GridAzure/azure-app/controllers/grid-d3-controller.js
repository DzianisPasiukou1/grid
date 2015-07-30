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
			margin: 525
		}

		$scope.histogramData = [
							{ name: "1", value: 100000 },
							{ name: "2", value: 150000 },
							{ name: "3", value: 170000 },
							{ name: "4", value: 300000 },
							{ name: "5", value: 350000 },
							{ name: "6", value: 400000 },
							{ name: "7", value: 500000 },
							{ name: "8", value: 550000 },
							{ name: "9", value: 600000 },
							{ name: "10", value: 700000 }
		];

		$scope.contentOptions = {
			uploadCards: function (data) {
				$scope.cardsOpt = data;
				$scope.cardsOpt.margin = 0;
				$scope.$apply();
			},
			uploadSankey: function (data) {
				$scope.sankeyData = data;
				$scope.$apply();
			},
			uploadHistogram: function (data) {
				$scope.histogramData = data;
				$scope.$apply();
			}
		}
	}])