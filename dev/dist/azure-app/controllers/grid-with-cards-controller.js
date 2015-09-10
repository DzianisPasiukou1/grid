(function () {
	'use strict'

	angular
		.module('azureApp')
		.controller('GridWithCardsController', GridWithCardsController);

	GridWithCardsController.$inject = ['gridStandartOneService'];

	/**
	 * Description
	 * @method GridWithCardsController
	 * @param {} gridStandartOneService
	 * @return 
	 */
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

		/**
		 * Description
		 * @method getData
		 * @return 
		 */
		function getData() {
			gridStandartOneService.get(function (data) {
				vm.data = data;
			});
		};
	};
} ());