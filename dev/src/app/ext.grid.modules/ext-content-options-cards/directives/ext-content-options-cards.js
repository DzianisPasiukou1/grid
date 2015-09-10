(function () {
	'use strict';
	
	angular
		.module('ext.grid.contentOptionsCards')
		.directive('extContentOptionsCards', extContentOptionsCards);
	
	extContentOptionsCards.$inject = ['extContentOptionsCardsTemplatesPath'];
	
	/**
	 * Description
	 * @method extContentOptionsCards
	 * @param {} templatesPath
	 * @return directive
	 */
	function extContentOptionsCards(templatesPath) {
		var directive = {
			restrict: 'EA',
			controller: 'ExtContentOptionsCardsController',
			controllerAs: 'vm',
			bindToController: true,
			scope: {
				options: '=',
			},
			templateUrl: templatesPath + 'ext-content-options-cards.html'
		};
		
		return directive;
	};
} ());