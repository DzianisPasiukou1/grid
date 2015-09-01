(function () {
	'use strict'

	angular
		.module('ext.grid.cards')
		.directive('extCards', extCards);

	extCards.$inject = ['extCardsTemplatesPath', '$timeout'];

	function extCards(templatesPath, $timeout) {
		var extCardsDirective = {
			restrict: 'EA',
			templateUrl: templatesPath + 'ext-cards.html',
			scope: {
				cardsOptions: '=extCards',
				contentOptions: '='
			},
			controller: 'ExtCardsController',
			controllerAs: 'vm',
			bindToController: true,
			link: extCardsLink
		};

		return extCardsDirective;

		function extCardsLink(scope, element, attrs, vm) {
			if (vm.contentOptions.enableDebugging) {
				scope.$on('debugFlip', debugFlip);
				$timeout(enableDebugging);
			}
			scope.$watch('vm.cardsOptions.cards', cardsChanged);
			scope.$on('$destroy', destroy);

			function enableDebugging() {
				vm.enableDebugging(true);
			}

			function debugFlip(event, id) {
				element.find('#' + vm.contentOptions.debugCard.id).flip();
			};

			function cardFlip(event, id) {
				element.find('#' + id).flip();
			};

			function destroy() {
				vm.clear();
			};

			function flipAll() {
				vm.flipAll();
			}

			function cardsChanged(cards) {
				vm.refresh(cards);
				scope.$on('cardFlip', cardFlip);
				$timeout(flipAll);
			}
		};
	};
} ());