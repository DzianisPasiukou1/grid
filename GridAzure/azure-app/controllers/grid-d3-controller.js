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

		$scope.contentOptions = {
			uploadCards: function (data) {
				$scope.cardsOpt = data;
				$scope.cardsOpt.margin = 525;
				$scope.$apply();
			},
			uploadSankey: function (data) {
				$scope.sankeyData = data;
				$scope.$apply();
			},
			uploadHistogram: function (data) {
				$scope.histogramData = data;
				$scope.$apply();
			},
			enableDebugging: true,
			debugCard: {
				//text: 'test',
				//template: 'Hello world'
			}
		}
	}])