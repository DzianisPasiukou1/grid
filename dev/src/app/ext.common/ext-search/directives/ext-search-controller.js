(function () {
	'use strict'

	angular
		.module('ext.common.search')
		.controller('ExtSearchController', ExtSearchController);

	ExtSearchController.$inject = [];

	function ExtSearchController() {
		var vm = this;
		vm.edited = false;
		vm.clear = clear;
		vm.searchValueChanged = searchValueChanged;

		function clear() {
			vm.searchValue = '';
			searchValueChanged(vm.searchValue);
		};

		function searchValueChanged(value) {
			vm.edited = angular.isString(value) && value.length > 0;

			if (angular.isFunction(vm.onChange)) {
				vm.onChange(value);
			}
		};
	};
} ());