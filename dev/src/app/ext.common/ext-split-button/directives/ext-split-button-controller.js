/* global actions */
(function () {
	'use strict'

	angular
		.module('ext.common.splitButton')
		.controller('ExtSplitButtonControler', ExtSplitButtonControler);

	ExtSplitButtonControler.$inject = [];

	function ExtSplitButtonControler() {
		var vm = this;

		vm.actions = vm.actions || [];
		
		if (!vm.typehead) {
			vm.actions.everywhere = { label: 'everywhere', isEverywhere: true };
			vm.actions.selected = vm.actions.everywhere;
		}

		vm.select = select;
		vm.toggle = toggle;
		vm.close = close;

		function select(action) {
			vm.actions.selected = action;
			vm.search = '';

			close();
		};

		function toggle() {
			vm.isShow = !vm.isShow;
		};

		function close() {
			vm.isShow = false;
		};
	};
} ());