(function () {
	'use strict'

	angular
		.module('ext.grid.cards')
		.controller('ExtCardsController', ExtCardsController);

	ExtCardsController.$inject = ['$scope', 'cardsFactory'];

	function ExtCardsController($scope, cardsFactory) {
		var vm = this;

		cardsFactory.register(
			vm.cardsOptions.cards,
			vm.contentOptions.datepickerOptions.startDate,
			vm.contentOptions.datepickerOptions.endDate,
			vm.cardsOptions.margin,
			vm.contentOptions
			);

		angular.extend(vm, cardsFactory.getInstance());

		vm.refresh = refresh;
		vm.enableDebugging = enableDebugging;
		vm.flipAll = flipAll;
		vm.clear = clear;

		function refresh(cards) {
			cardsFactory.refresh(cards);
			angular.extend(vm, cardsFactory.getInstance());
		};

		function enableDebugging(isDebug) {
			cardsFactory.enableDebugging(isDebug);
		};

		function flipAll() {
			cardsFactory.flipAll();
		};

		function clear() {
			cardsFactory.clear();
		};
	};
} ());