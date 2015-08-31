(function () {
	'use strict'

	angular
		.module('ext.grid.contentOptions')
		.controller('ExtContentOptionsController', ExtContentOptionsController);

	ExtContentOptionsController.$inject = ['$scope', 'initContentOptionsUtils', '$parse'];

	function ExtContentOptionsController($scope, initOptionsUtils, $parse) {
		var vm = this;
		vm.options = initOptionsUtils.initOpt(vm.options);

		$scope.$watch('options.searchValue', searchValueChanged);

		function searchValueChanged(value) {
			var selected = $parse('options.searchOptions.selected.label')('vm');

			if (selected === undefined) {
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