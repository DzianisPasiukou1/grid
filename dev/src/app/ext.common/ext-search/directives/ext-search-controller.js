(function () {
	'use strict'

	angular
		.module('ext.common.search')
		.controller('ExtSearchController', ExtSearchController);

	ExtSearchController.$inject = ['$scope'];

	function ExtSearchController($scope) {
		var vm = this;
		vm.edited = false;
		vm.clear = clear;
		$scope.$watch('vm.searchValue', searchValueChanged);

		function clear() {
			vm.searchValue = '';
		};

		function searchValueChanged(value) {
			if (angular.isString(value) && value.length > 0) {
				vm.edited = false;
			}
			else {
				vm.edited = true;
			}
		};
	};
} ());