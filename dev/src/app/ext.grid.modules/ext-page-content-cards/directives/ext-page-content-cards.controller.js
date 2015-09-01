(function () {
	'use strict'

	angular
		.module('ext.grid.pageContentCards')
		.controller('ExtPageContentCardsController', ExtPageContentCardsController);

	ExtPageContentCardsController.$inject = ['$scope', 'initCardsOptionsutils', 'loggerFactory'];

	function ExtPageContentCardsController($scope, initCardsOptionsutils, loggerFactory) {
		var vm = this;

		vm.contentOptions = loggerFactory.defineObj('Content options is not defined', vm.contentOptions, {});
		vm.cardsOptions = loggerFactory.defineObj('Cards options is not defined', vm.cardsOptions, {});
		vm.uiGridOptions = loggerFactory.defineObj('Ui grid options is not defined', vm.uiGridOptions, {});
		vm.data = loggerFactory.defineObj('Data is not defined', vm.data, []);

		initCardsOptionsutils.init(vm.cardsOptions, vm.contentOptions, vm.data, vm);

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