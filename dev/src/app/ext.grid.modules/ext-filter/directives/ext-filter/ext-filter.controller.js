(function () {
	'use strict'

	angular
		.module('ext.grid.filter')
		.controller('ExtFilterController', ExtFilterController);

	ExtFilterController.$inject = [];

	function ExtFilterController() {
		var vm = this;

		vm.listState = false;
		vm.filterClick = filterClick;
		vm.showRecords = showRecords;

		function filterClick() {
			vm.listState = !vm.listState;

			if (vm.listState) {
				vm.filterOptions.forEach(function (opt) {
					opt.filter = "";
				});
			}
		};

		function showRecords() {
			vm.listState = false;

			vm.filtrate(vm.filterOptions);
		};
	};
} ());