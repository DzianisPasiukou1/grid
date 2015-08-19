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
					scope.$on('debugFlip', function (event, id) {
						element.find('#' + scope.contentOptions.debugCard.id).flip();
					})

					$timeout(function () {
						scope.enableDebugging(true);
					});
				}

				scope.$watch('cardsOptions.cards', function (cards) {
					scope.refresh(cards);

					for (var card in cards) {
						scope.$on('cardFlip', function (event, id) {
							element.find('#' + id).flip();
						})
					}

					$timeout(function () {
						scope.flipAll();
					})
				});

				scope.$on('$destroy', function () {
					scope.clear();
				})
			}
		}
	}]);