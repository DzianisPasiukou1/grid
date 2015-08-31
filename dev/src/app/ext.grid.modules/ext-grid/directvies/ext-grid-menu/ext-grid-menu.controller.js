(function () {
	'use strict'

	angular
		.module('ext.grid.main')
		.controller('ExtGridMenuController', ExtGridMenuController);

	ExtGridMenuController.$inject = ['menuUtils'];

	function ExtGridMenuController(menuUtils) {
		var vm = this;

		vm.menu = menuUtils;
		vm.menu.register(vm.columns, vm.options);
	};
} ());
