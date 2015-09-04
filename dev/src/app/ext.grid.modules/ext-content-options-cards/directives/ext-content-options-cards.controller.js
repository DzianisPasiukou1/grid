(function () {
	'use strict'

	angular
		.module('ext.grid.contentOptionsCards')
		.controller('ExtContentOptionsCardsController', ExtContentOptionsCardsController);

	ExtContentOptionsCardsController.$inject = ['$parse', 'extExtend'];

	function ExtContentOptionsCardsController($parse, extExtend) {
		var vm = this;

		extExtend('ExtContentOptionsSearchBaseController', {
			$parse: $parse,
			vm: vm
		}, vm);
	};

} ());