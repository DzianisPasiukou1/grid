(function () {
	'use strict'

	angular
		.module('ext.grid.filter')
		.controller('ExtFilterController', ExtFilterController);

	ExtFilterController.$inject = ['$scope'];

	function ExtFilterController($scope) {
		var vm = this;

		vm.filterClick = filterClick;
		vm.showRecords = showRecords;

		function filterClick() {
			$scope.listState = !$scope.listState;

			if ($scope.listState) {
				clear();
			}
		};

		function showRecords() {
			$scope.listState = false;
			vm.filtrate(vm.filterOptions);
		};

		function clear() {
			vm.filterOptions.forEach(function (opt) {
				opt.filter = "";
			});
		};
	};
} ());