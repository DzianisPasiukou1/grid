angular.module('gridTaskApp')
	.directive('cards', ['templatesPath', '$timeout', function (templatesPath, $timeout) {
		return {
			restrict: 'A',
			templateUrl: templatesPath + 'directive-templates/cards.html',
			scope: {
				cards: '=',
				startDate: '=',
				endDate: '=',
				margin: '='
			},
			controller: 'cardsCtrl',
			link: function (scope, element, attrs) {
				$timeout(function () {
					var left = 40;

					for (var card in scope.cards) {
						$('#' + card).flip();
						$('#' + card).css('left', left);

						left += scope.margin;
					}
				});
			}
		}
	}]);