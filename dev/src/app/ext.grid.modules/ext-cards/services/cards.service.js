(function () {
	'use strict'

	angular
		.module('ext.grid.cards')
		.factory("cardsFactory", cardsFactory);

	cardsFactory.$inject = ['$rootScope'];

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

		function getInstance() {
			return instance;
		};

		function refresh(cards) {
			instance.cards = cards;
		};

		function enableDebugging(isDebug) {
			if (isDebug) {
				this.flipDebug(instance.debugCard.id);
				instance.debugCard.style = {
					left: instance.startLeft
				}
				instance.startLeft += instance.margin;
			}
		};

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

		function flipCard(propName) {
			$rootScope.$broadcast(cardEvent, propName);
		};

		function flipDebug(propName) {
			$rootScope.$broadcast(debugEvent, propName);
		};

		function clear() {
			instance = {}, startLeft = 40, groupMarginRight = 50;
		};
	};
} ());