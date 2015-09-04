(function () {
	'use strict'

	angular
		.module('ext.sankey.navbar')
		.controller('NavigationCtrl', NavigationCtrl);

	NavigationCtrl.$inject = ['NavigationTree', '$scope'];

	function NavigationCtrl(NavigationTree, $scope) {
		$scope.navigationTree = NavigationTree.get();
	}
} ());