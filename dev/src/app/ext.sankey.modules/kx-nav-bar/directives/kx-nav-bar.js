(function () {
	'use strict'

	angular
		.module('ext.sankey.navbar')
		.directive('kxNavBar', kxNavBar);

	kxNavBar.$inject = ['kxNavBarTemplatesPath'];

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