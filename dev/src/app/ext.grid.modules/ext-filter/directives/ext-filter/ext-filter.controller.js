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

			if (vm.listState) {
				vm.filterOptions.forEach(function (opt) {
					opt.filter = "";
				});
			}
		};

		function showRecords() {
			$scope.listState = false;

			vm.filtrate(vm.filterOptions);
		};
	};
} ());