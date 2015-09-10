(function () {
	'use strict';

	angular
		.module('ext.grid.cards')
		.controller('ExtCardsController', ExtCardsController);

	ExtCardsController.$inject = ['$scope', 'cardsFactory'];

	/**
	 * Description
	 * @method ExtCardsController
	 * @param {} $scope
	 * @param {} cardsFactory
	 * @return 
	 */
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

		/**
		 * Description
		 * @method refresh
		 * @param {} cards
		 * @return 
		 */
		function refresh(cards) {
			cardsFactory.refresh(cards);
			angular.extend(vm, cardsFactory.getInstance());
		};

		/**
		 * Description
		 * @method enableDebugging
		 * @param {} isDebug
		 * @return 
		 */
		function enableDebugging(isDebug) {
			cardsFactory.enableDebugging(isDebug);
		};

		/**
		 * Description
		 * @method flipAll
		 * @return 
		 */
		function flipAll() {
			cardsFactory.flipAll();
		};

		/**
		 * Description
		 * @method clear
		 * @return 
		 */
		function clear() {
			cardsFactory.clear();
		};
	};
} ());