(function () {
	'use strict';

	angular
		.module('ext.common.search')
		.controller('ExtSearchController', ExtSearchController);

	ExtSearchController.$inject = [];

	/**
	 * Description
	 * @method ExtSearchController
	 * @return 
	 */
	function ExtSearchController() {
		var vm = this;
		vm.edited = false;
		vm.clear = clear;
		vm.searchValueChanged = searchValueChanged;

		/**
		 * Description
		 * @method clear
		 * @return 
		 */
		function clear() {
			vm.searchValue = '';
			searchValueChanged(vm.searchValue);
		};

		/**
		 * Description
		 * @method searchValueChanged
		 * @param {} value
		 * @return 
		 */
		function searchValueChanged(value) {
			vm.edited = angular.isString(value) && value.length > 0;

			if (angular.isFunction(vm.onChange)) {
				vm.onChange(value);
			}
		};
	};
} ());