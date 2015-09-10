(function () {
	'use strict';

	angular
		.module('ext.grid.filter')
		.controller('ExtFilterController', ExtFilterController);

	ExtFilterController.$inject = ['$scope'];

	/**
	 * Description
	 * @method ExtFilterController
	 * @param {} $scope
	 * @return 
	 */
	function ExtFilterController($scope) {
		$scope.filterClick = filterClick;
		$scope.showRecords = showRecords;
		
		/**
		 * Description
		 * @method filterClick
		 * @return 
		 */
		function filterClick() {
			$scope.listState = !$scope.listState;

			if ($scope.listState) {
				clear();
			}
		};

		/**
		 * Description
		 * @method showRecords
		 * @return 
		 */
		function showRecords() {
			$scope.listState = false;
			$scope.filtrate($scope.filterOptions);
		};

		/**
		 * Description
		 * @method clear
		 * @return 
		 */
		function clear() {
			$scope.filterOptions.forEach(function (opt) {
				opt.filter = "";
			});
		};
	};
} ());