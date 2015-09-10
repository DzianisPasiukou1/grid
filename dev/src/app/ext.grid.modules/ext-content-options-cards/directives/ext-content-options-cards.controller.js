(function () {
	'use strict';

	angular
		.module('ext.grid.contentOptionsCards')
		.controller('ExtContentOptionsCardsController', ExtContentOptionsCardsController);

	ExtContentOptionsCardsController.$inject = ['$parse', 'extExtend', 'initContentOptionsCardsUtils'];

	/**
	 * Description
	 * @method ExtContentOptionsCardsController
	 * @param {} $parse
	 * @param {} extExtend
	 * @param {} initContentOptionsCardsUtils
	 * @return 
	 */
	function ExtContentOptionsCardsController($parse, extExtend, initContentOptionsCardsUtils) {
		var vm = this;
		vm.options = initContentOptionsCardsUtils.initOpt(vm.options);

		extExtend('ExtContentOptionsSearchBaseController', {
			$parse: $parse,
			vm: vm
		}, vm);
	};
} ());