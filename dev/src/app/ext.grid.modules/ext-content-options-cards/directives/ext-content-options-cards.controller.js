(function () {
	'use strict'

	angular
		.module('ext.grid.contentOptionsCards')
		.controller('ExtContentOptionsCardsController', ExtContentOptionsCardsController);

	ExtContentOptionsCardsController.$inject = ['$parse', '$controller'];

	function ExtContentOptionsCardsController($parse, $controller) {
		var vm = this;

		angular.extend(vm, $controller('ExtContentOptionsSearchBaseController', {
			$parse: $parse,
			vm: vm
		}));
	};
} ());