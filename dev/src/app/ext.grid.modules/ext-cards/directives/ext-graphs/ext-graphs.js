(function () {
	'use strict'

	angular
		.module('ext.grid.cards')
		.directive('extGraphs', extGraphs);

	extGraphs.$inject = ['extCardsTemplatesPath']

	function extGraphs(templatesPath) {
		var directive = {
			restrict: 'EA',
			scope: {
				graphs: '='
			},
			controllerAs: 'vm',
			bindToController: true,
			templateUrl: templatesPath + 'ext-graphs.html'
		};

		return directive;
	};

} ());