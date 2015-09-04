(function () {
	'use strict'

	angular
		.module('ext.grid.contentOptions')
		.controller('ExtContentOptionsController', ExtContentOptionsController);

	ExtContentOptionsController.$inject = ['initContentOptionsUtils', '$parse', 'extExtend'];

	function ExtContentOptionsController(initOptionsUtils, $parse, extExtend) {
		var vm = this;

		extExtend('ExtContentOptionsSearchBaseController', {
			$parse: $parse,
			vm: vm
		}, vm);

		vm.options = initOptionsUtils.initOpt(vm.options);
	};

} ());