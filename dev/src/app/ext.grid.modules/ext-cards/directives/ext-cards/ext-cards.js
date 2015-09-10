(function () {
	'use strict';

	angular
		.module('ext.grid.cards')
		.directive('extCards', extCards);

	extCards.$inject = ['extCardsTemplatesPath', '$timeout'];

	/**
	 * Description
	 * @method extCards
	 * @param {} templatesPath
	 * @param {} $timeout
	 * @return extCardsDirective
	 */
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

		/**
		 * Description
		 * @method extCardsLink
		 * @param {} scope
		 * @param {} element
		 * @param {} attrs
		 * @param {} vm
		 * @return 
		 */
		function extCardsLink(scope, element, attrs, vm) {
			if (vm.contentOptions.enableDebugging) {
				scope.$on('debugFlip', debugFlip);
				$timeout(enableDebugging);
			}
			scope.$watch('vm.cardsOptions.cards', cardsChanged);
			scope.$on('$destroy', destroy);

			/**
			 * Description
			 * @method enableDebugging
			 * @return 
			 */
			function enableDebugging() {
				vm.enableDebugging(true);
			}

			/**
			 * Description
			 * @method debugFlip
			 * @param {} event
			 * @param {} id
			 * @return 
			 */
			function debugFlip(event, id) {
				element.find('#' + vm.contentOptions.debugCard.id).flip();
			};

			/**
			 * Description
			 * @method cardFlip
			 * @param {} event
			 * @param {} id
			 * @return 
			 */
			function cardFlip(event, id) {
				element.find('#' + id).flip();
			};

			/**
			 * Description
			 * @method destroy
			 * @return 
			 */
			function destroy() {
				vm.clear();
			};

			/**
			 * Description
			 * @method flipAll
			 * @return 
			 */
			function flipAll() {
				vm.flipAll();
			}

			/**
			 * Description
			 * @method cardsChanged
			 * @param {} cards
			 * @return 
			 */
			function cardsChanged(cards) {
				vm.refresh(cards);
				scope.$on('cardFlip', cardFlip);
				$timeout(flipAll);
			}
		};
	};
} ());