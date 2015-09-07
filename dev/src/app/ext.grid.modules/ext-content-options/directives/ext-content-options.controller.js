(function () {
	'use strict'

	angular
		.module('ext.grid.contentOptions')
		.controller('ExtContentOptionsController', ExtContentOptionsController);

	ExtContentOptionsController.$inject = ['initContentOptionsUtils', '$parse', 'extExtend'];

	function ExtContentOptionsController(initOptionsUtils, $parse, extExtend) {
		var vm = this;
		vm.options = initOptionsUtils.initOpt(vm.options);

		extExtend('ExtContentOptionsSearchBaseController', {
			$parse: $parse,
			vm: vm
		}, vm);
	};

} ());