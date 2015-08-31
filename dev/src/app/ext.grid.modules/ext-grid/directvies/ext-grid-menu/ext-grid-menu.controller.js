(function () {
	'use strict'

	angular
		.module('ext.grid.main')
		.controller('ExtGridMenuController', ExtGridMenuController);

	ExtGridMenuController.$inject = ['menuUtils', '$scope'];

	function ExtGridMenuController(menuUtils, $scope) {
		var vm = this;
		
		vm.menu = menuUtils;
		vm.menu.register(vm.columns, vm.options);
	};
} ());
