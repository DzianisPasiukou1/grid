angular.module('gridTaskApp')
	.directive('cards', ['templatesPath', '$timeout', function (templatesPath, $timeout) {
		return {
			restrict: 'A',
			templateUrl: templatesPath + 'directive-templates/cards.html',
			scope: {
				cards: '=',
				startDate: '=',
				endDate: '=',
				margin: '=',
				contentOptions: '='
			},
			controller: 'cardsCtrl',
			link: function (scope, element, attrs) {

				$('#debug').css('left', 40);
				$('#debug').flip();

				scope.$watch('cards', function (cards) {
					$timeout(function () {
						var left = 40;
						left += scope.margin;

						for (var card in cards) {
							$('#' + card).css('left', left);
							$('#' + card).flip();

							left += scope.margin;
						}

						$('.cards-group').css('width', left + 50 + 'px');
					})

				});
			}
		}
	}]);