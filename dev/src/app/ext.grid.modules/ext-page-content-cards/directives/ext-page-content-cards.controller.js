(function () {
	'use strict'

	angular
		.module('ext.grid.pageContentCards')
		.controller('ExtPageContentCardsController', ExtPageContentCardsController);

	ExtPageContentCardsController.$inject = ['$scope', 'initCardsOptionsUtils', 'loggerService'];

	function ExtPageContentCardsController($scope, initCardsOptionsUtils, loggerService) {
		var vm = this;

		vm.contentOptions = loggerService.defineObj('Content options is not defined', vm.contentOptions, {});
		vm.cardsOptions = loggerService.defineObj('Cards options is not defined', vm.cardsOptions, {});
		vm.uiGridOptions = loggerService.defineObj('Ui grid options is not defined', vm.uiGridOptions, {});
		vm.data = loggerService.defineObj('Data is not defined', vm.data, []);

		initCardsOptionsUtils.init(vm.cardsOptions, vm.contentOptions, vm.data, vm);

		$scope.$watch('vm.contentOptions.datepickerOptions.dateRange', dateRangeChange);

		function dateRangeChange(date) {
			if (date) {
				for (var card in vm.cardsOptions.cards) {
					if (vm.cardsOptions.cards[card].counter) {
						vm.cardsOptions.cards[card].count = vm.cardsOptions.cards[card].counter.calculate(vm.contentOptions.datepickerOptions.startDate, vm.contentOptions.datepickerOptions.endDate);
					}
				}
			}
		};
	};
} ());