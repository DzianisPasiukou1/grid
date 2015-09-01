(function () {
	'use strict'

	angular
		.module('azureApp')
		.controller('GridD3Controller', GridD3Controller);

	GridD3Controller.$inject = ['gridStandartOneService'];

	function GridD3Controller(gridStandartOneService) {
		var vm = this;

		vm.uiGridOptions = {
			showResponsMenu: true
		}

		vm.cardsOpt = {
			margin: 525
		}

		vm.contentOptions = {
			uploadCards: function (data) {
				vm.cardsOpt = data;
				vm.cardsOpt.margin = 525;
			},
			uploadSankey: function (data) {
				vm.sankeyData = data;
			},
			uploadHistogram: function (data) {
				vm.histogramData = data;
			},
			enableDebugging: true,
			debugCard: {
				//text: 'test',
				//template: 'app/templates/directive-templates/chart-segment.html'
			}
		}

		getData();

		function getData() {
			gridStandartOneService.get(function (data) {
				vm.data = data;
			});
		}
	};
} ());