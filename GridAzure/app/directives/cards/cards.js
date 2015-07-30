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
				scope.$watch('cards', function (cards) {
					$timeout(function () {
						var left = 40;

						for (var card in cards) {
							$('#' + card).css('left', left);
							$('#' + card).flip();

							left += scope.margin;
						}
					})

				});
			}
		}
	}]);