angular.module('gridTaskApp')
	.factory("cardsFactory", ['$rootScope', function ($rootScope) {
		var instance = {},
			startLeft = 40,
			groupMarginRight = 50,
			cardEvent = 'cardFlip',
			debugEvent = 'debugFlip';

		return {
			register: function (cards, startDate, endDate, margin, content) {
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
			},
			getInstance: function () {
				return instance;
			},
			refresh: function (cards) {
				instance.cards = cards;
			},
			enableDebugging: function (isDebug) {
				if (isDebug) {
					this.flipDebug(instance.debugCard.id);
					instance.debugCard.style = {
						left: instance.startLeft
					}

					instance.startLeft += instance.margin;
				}
			},
			flipAll: function () {
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
			},
			flipCard: function (propName) {
				$rootScope.$broadcast(cardEvent, propName);
			},
			flipDebug: function (propName) {
				$rootScope.$broadcast(debugEvent, propName);
			},
			clear: function () {
				instance = {}, startLeft = 40, groupMarginRight = 50;
			}
		}
	}]);