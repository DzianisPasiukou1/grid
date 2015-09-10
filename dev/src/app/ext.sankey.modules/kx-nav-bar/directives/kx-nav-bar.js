(function () {
	'use strict';

	angular
		.module('ext.sankey.navbar')
		.directive('kxNavBar', kxNavBar);

	kxNavBar.$inject = ['kxNavBarTemplatesPath'];

	/**
	 * Description
	 * @method kxNavBar
	 * @param {} templatesPath
	 * @return directive
	 */
	function kxNavBar(templatesPath) {
		var directive = {
			restrict: 'A',
			controller: 'KxNavbarController',
			controllerAs: 'vm',
			bindToController: true,
			scope: {
			},
			templateUrl: templatesPath + 'kx-nav-bar.html'
		};

		return directive;
	};
} ());