(function () {
	'use strict'

	angular
		.module('ext.sankey.navbar')
		.controller('NavigationCtrl', NavigationCtrl);

	NavigationCtrl.$inject = ['NavigationTree'];

	function NavigationCtrl(NavigationTree) {
		var vm = this;

		vm.navigationTree = NavigationTree.get();
	}
} ());