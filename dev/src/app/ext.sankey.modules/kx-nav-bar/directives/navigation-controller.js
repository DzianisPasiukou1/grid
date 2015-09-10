(function () {
	'use strict';

	angular
		.module('ext.sankey.navbar')
		.controller('NavigationCtrl', NavigationCtrl);

	NavigationCtrl.$inject = ['NavigationTree', '$scope'];

	/**
	 * Description
	 * @method NavigationCtrl
	 * @param {} NavigationTree
	 * @param {} $scope
	 * @return 
	 */
	function NavigationCtrl(NavigationTree, $scope) {
		$scope.navigationTree = NavigationTree.get();
	}
} ());