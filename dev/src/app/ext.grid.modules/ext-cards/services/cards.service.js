(function () {
	'use strict';

	angular
		.module('ext.grid.cards')
		.factory("cardsFactory", cardsFactory);

	cardsFactory.$inject = ['$rootScope'];

	/**
	 * Description
	 * @method cardsFactory
	 * @param {} $rootScope
	 * @return ObjectExpression
	 */
	function cardsFactory($rootScope) {
		var instance = {},
			startLeft = 40,
			groupMarginRight = 50,
			cardEvent = 'cardFlip',
			debugEvent = 'debugFlip';

		return {
			register: register,
			getInstance: getInstance,
			refresh: refresh,
			enableDebugging: enableDebugging,
			flipAll: flipAll,
			flipCard: flipCard,
			flipDebug: flipDebug,
			clear: clear
		};

		/**
		 * Description
		 * @method register
		 * @param {} cards
		 * @param {} startDate
		 * @param {} endDate
		 * @param {} margin
		 * @param {} content
		 * @return 
		 */
		function register(cards, startDate, endDate, margin, content) {
			angular.extend(instance, {
				cards: cards,
				startDate: startDate,
				endDate: endDate,
				margin: margin,
				startLeft: startLeft,
				groupMarginRight: groupMarginRight,
				isDebug: content.enableDebugging,
				debugCard: content.debugCard,
				groupStyle: {}
			});
		};

		/**
		 * Description
		 * @method getInstance
		 * @return instance
		 */
		function getInstance() {
			return instance;
		};

		/**
		 * Description
		 * @method refresh
		 * @param {} cards
		 * @return 
		 */
		function refresh(cards) {
			instance.cards = cards;
		};

		/**
		 * Description
		 * @method enableDebugging
		 * @param {} isDebug
		 * @return 
		 */
		function enableDebugging(isDebug) {
			if (isDebug) {
				this.flipDebug(instance.debugCard.id);
				instance.debugCard.style = {
					left: instance.startLeft
				}
				instance.startLeft += instance.margin;
			}
		};

		/**
		 * Description
		 * @method flipAll
		 * @return 
		 */
		function flipAll() {
			var left = instance.startLeft;
			for (var i in instance.cards) {
				this.flipCard(i);
				instance.cards[i].style = {
					left: left
				}
				left += instance.margin;
			}
			angular.extend(instance.groupStyle, {
				width: left + instance.groupMarginRight
			});
		};

		/**
		 * Description
		 * @method flipCard
		 * @param {} propName
		 * @return 
		 */
		function flipCard(propName) {
			$rootScope.$broadcast(cardEvent, propName);
		};

		/**
		 * Description
		 * @method flipDebug
		 * @param {} propName
		 * @return 
		 */
		function flipDebug(propName) {
			$rootScope.$broadcast(debugEvent, propName);
		};

		/**
		 * Description
		 * @method clear
		 * @return 
		 */
		function clear() {
			instance = {}, startLeft = 40, groupMarginRight = 50;
		};
	};
} ());