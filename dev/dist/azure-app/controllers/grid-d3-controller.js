(function () {
	'use strict'

	angular
		.module('azureApp')
		.controller('GridD3Controller', GridD3Controller);

	GridD3Controller.$inject = ['gridStandartOneService', '$scope'];

	function GridD3Controller(gridStandartOneService, $scope) {
		var vm = this;

		vm.contentOptions = {
			uploadCards: function (data) {
				vm.cardsOpt = data;
				$scope.$apply();
			},
			uploadSankey: function (data) {
				vm.sankeyData = data;
				$scope.$apply();
			},
			uploadHistogram: function (data) {
				vm.histogramData = data;
				$scope.$apply();
			},
			enableDebugging: true,
			debugCard: {
				// text: 'test',
				// template: '<h1>Test</h1>',
				// body: 'HEllo'
			}
		};
	};
} ());