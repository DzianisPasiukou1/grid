(function () {
	'use strict'

	angular
		.module('ext.grid.pageContentCards')
		.controller('ExtPageContentCardsController', ExtPageContentCardsController);

	ExtPageContentCardsController.$inject = ['$scope', 'initCardsOptionsutils'];

	function ExtPageContentCardsController($scope, initCardsOptionsutils) {
		var vm = this;

		initCardsOptionsutils.init(vm.cardsOptions, vm.contentOptions);

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