angular.module('gridTaskApp')
	.directive('cards', ['templatesPath', '$timeout', function (templatesPath, $timeout) {
		return {
			restrict: 'A',
			templateUrl: templatesPath + 'directive-templates/cards.html',
			scope: {
				cards: '=',
				startDate: '=',
				endDate: '='
			},
			controller: 'cardsCtrl',
			link: function (scope, element, attrs) {
				$timeout(function () {
					$("#card1").flip();
					$("#card2").flip();
					$("#card3").flip();
					$("#card4").flip();
					$("#card5").flip();
					$("#card6").flip();
					$("#card7").flip();
				});
			}
		}
	}]);