(function () {
	'use strict'

	angular
		.module('azureApp')
		.controller('GridWithCardsController', GridWithCardsController);

	GridWithCardsController.$inject = ['gridStandartOneService'];

	function GridWithCardsController(gridStandartOneService) {
		var vm = this;

		vm.uiGridOptions = {
			showResponsMenu: true,
			enableAction: true,
			enableDetails: true,
			disableCheck: false
		}

		vm.cardsOpt = {
			cards: [],
			startDate: '',
			endDate: ''
		}

		getData();

		function getData() {
			gridStandartOneService.get(function (data) {
				vm.data = data;
			});
		};
	};
} ());