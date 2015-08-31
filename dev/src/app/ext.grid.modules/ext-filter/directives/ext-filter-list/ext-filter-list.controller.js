(function () {
	'use strict'

	angular
		.module('ext.grid.filter')
		.controller('ExtFilterListController', ExtFilterListController);

	ExtFilterListController.$inject = [];

	function ExtFilterListController() {
		var vm = this;

		vm.filter = filter;

		function filter() {
			vm.isFiltrate = true;
		}
	};
} ());