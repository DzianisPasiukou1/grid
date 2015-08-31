(function () {
	'use strict'

	angular
		.module('ext.sankey.optionsSankey')
		.controller('ExtOptionsSankeyController', ExtOptionsSankeyController);

	ExtOptionsSankeyController.$inject = ['$scope'];

	function ExtOptionsSankeyController($scope) {
		var vm = this;

		$scope.$watch('options.searchValue', searchValueChanged);

		function searchValueChanged(value) {
			if (!vm.options.searchOptions) {
				return;
			}

			if (vm.options.searchOptions.selected.label == 'everywhere') {
				vm.options.search(value);
			} else {
				vm.options.search(vm.options.searchOptions.selected.label + ':' + value);
			}
		};
	};
} ());