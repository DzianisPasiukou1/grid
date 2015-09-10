(function () {
	'use strict';

	angular
		.module('ext.common.splitButton')
		.controller('ExtSplitButtonControler', ExtSplitButtonControler);

	ExtSplitButtonControler.$inject = [];

	/**
	 * Description
	 * @method ExtSplitButtonControler
	 * @return 
	 */
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

		/**
		 * Description
		 * @method select
		 * @param {} action
		 * @return 
		 */
		function select(action) {
			vm.actions.selected = action;
			vm.search = '';

			close();
		};

		/**
		 * Description
		 * @method toggle
		 * @return 
		 */
		function toggle() {
			vm.isShow = !vm.isShow;
		};

		/**
		 * Description
		 * @method close
		 * @return 
		 */
		function close() {
			vm.isShow = false;
		};
	};
} ());