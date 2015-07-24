﻿angular.module('gridTaskApp')
	.directive('cards', ['templatesPath', '$timeout', function (templatesPath, $timeout) {
		return {
			restrict: 'A',
			templateUrl: templatesPath + 'cards.html',
			scope: {
				cards: '='
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