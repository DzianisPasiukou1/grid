(function () {
	'use strict'

	angular
		.module('ext.grid.filter')
		.controller('ExtFilterController', ExtFilterController);

	ExtFilterController.$inject = ['$scope'];

	function ExtFilterController($scope) {
		$scope.filterClick = filterClick;
		$scope.showRecords = showRecords;
		
		function filterClick() {
			$scope.listState = !$scope.listState;

			if ($scope.listState) {
				clear();
			}
		};

		function showRecords() {
			$scope.listState = false;
			$scope.filtrate($scope.filterOptions);
		};

		function clear() {
			$scope.filterOptions.forEach(function (opt) {
				opt.filter = "";
			});
		};
	};
} ());