(function () {
	'use strict';

	angular
		.module('ext.grid.contentOptions')
		.controller('ExtContentOptionsController', ExtContentOptionsController);

	ExtContentOptionsController.$inject = ['initContentOptionsUtils', '$parse', 'extExtend'];

	/**
	 * Description
	 * @method ExtContentOptionsController
	 * @param {} initOptionsUtils
	 * @param {} $parse
	 * @param {} extExtend
	 * @return 
	 */
	function ExtContentOptionsController(initOptionsUtils, $parse, extExtend) {
		var vm = this;
		vm.options = initOptionsUtils.initOpt(vm.options);

		extExtend('ExtContentOptionsSearchBaseController', {
			$parse: $parse,
			vm: vm
		}, vm);
	};

} ());