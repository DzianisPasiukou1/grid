(function () {
	'use strict'

	angular
		.module('ext.common.dropdown')
		.controller('ExtDropdownController', ExtDropdownController);

	ExtDropdownController.$inject = [];

	function ExtDropdownController() {
		var vm = this;

		vm.options = vm.options || {};

		if (!vm.options.isMenu) {
			vm.options.selected = vm.options.values[0];

			if (vm.options.callback) {
				vm.options.callback(vm.options.selected);
			}
		}
		else {
			vm.options.selected = {};
		}

		vm.select = select;

		function select(action) {
			vm.options.selected = action;

			if (vm.options.callback) {
				vm.options.callback(action);
			}

			vm.isShow = false;
		};
	};
} ());