(function () {
	'use strict'

	angular
		.module('ext.common.searchBase')
		.controller('ExtContentOptionsSearchBaseController', ExtContentOptionsSearchBaseController);

	ExtContentOptionsSearchBaseController.$inject = ['$parse', 'vm'];

	function ExtContentOptionsSearchBaseController($parse, vm) {
		vm.searchValueChanged = searchValueChanged;

		function searchValueChanged(value) {
			var selected = $parse('options.searchOptions.selected.label')(vm);

			if (!angular.isDefined(selected)) {
				return;
			}

			if (selected == 'everywhere') {
				vm.options.search(value);
			} else {
				vm.options.search(selected + ':' + value);
			}
		}
	};
} ());