(function () {
	'use strict'

	angular
		.module('ext.grid.contentOptions')
		.controller('ExtContentOptionsController', ExtContentOptionsController);

	ExtContentOptionsController.$inject = ['initContentOptionsUtils', '$parse', '$controller'];

	function ExtContentOptionsController(initOptionsUtils, $parse, $controller) {
		var vm = this;

		angular.extend(vm, $controller('ExtContentOptionsSearchBaseController', {
			$parse: $parse,
			vm: vm
		}));

		vm.options = initOptionsUtils.initOpt(vm.options);
	};

} ());