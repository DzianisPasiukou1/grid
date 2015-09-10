(function () {
	'use strict';

	angular
		.module('ext.sankey.optionsSankey')
		.directive('extOptionsSankey', extOptionsSankey);

	extOptionsSankey.$inject = ['extOptionsSankeyTemplatesPath'];

	/**
	 * Description
	 * @method extOptionsSankey
	 * @param {} templatesPath
	 * @return directive
	 */
	function extOptionsSankey(templatesPath) {
		var directive = {
			restrict: 'EA',
			controller: 'ExtOptionsSankeyController',
			controllerAs: 'vm',
			bindToController: false,
			scope: {
				options: '=',
				filters: '=',
				loading: '=',
				onDataRangeChanged: '=',
				past: '='
			},
			templateUrl: templatesPath + 'ext-options-sankey.html'
		};

		return directive;
	};
} ());
