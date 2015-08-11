angular.module('gridTaskApp')
	.directive('cards', ['templatesPath', '$timeout', function (templatesPath, $timeout) {
		return {
			restrict: 'EA',
			templateUrl: templatesPath + 'directive-templates/cards.html',
			scope: {
				cardsOptions: '=cards',
				contentOptions: '='
			},
			controller: 'cardsCtrl',
			link: function (scope, element, attrs) {
				if (scope.contentOptions.enableDebugging) {
					$timeout(function () {
						element.find('#' + scope.contentOptions.debugCard.id).flip();

						scope.contentOptions.debugCard.style = {
							left: scope.startLeft
						}
					});
				}

				scope.$watch('cardsOptions.cards', function (cards) {
					scope.cards = scope.cardsOptions.cards;

					$timeout(function () {
						var left = scope.startLeft;

						if (scope.contentOptions.enableDebugging) {
							left += scope.margin;
						}

						for (var card in cards) {
							element.find('#' + card).flip();

							cards[card].style = {
								left: left
							}

							left += scope.margin;
						}

						scope.groupStyle = {
							width: left + scope.groupMarginRight
						}
					})
				});
			}
		}
	}]);