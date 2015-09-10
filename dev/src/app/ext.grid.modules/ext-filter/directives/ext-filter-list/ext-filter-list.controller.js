(function () {
	'use strict';

	angular
		.module('ext.grid.filter')
		.controller('ExtFilterListController', ExtFilterListController);

	ExtFilterListController.$inject = ['$scope'];

	/**
	 * Description
	 * @method ExtFilterListController
	 * @param {} $scope
	 * @return 
	 */
	function ExtFilterListController($scope) {
		$scope.filter = filter;

		/**
		 * Description
		 * @method filter
		 * @return 
		 */
		function filter() {
			$scope.isFiltrate = true;
		}
	};
} ());