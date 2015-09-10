(function () {
	'use strict';

	angular
		.module('ext.common.loading')
		.controller('ExtLoadingController', ExtLoadingController);

	ExtLoadingController.$inject = ['LOADING'];

	/**
	 * Description
	 * @method ExtLoadingController
	 * @param {} LOADING
	 * @return 
	 */
	function ExtLoadingController(LOADING) {
		var vm = this;

		vm.parent = vm.parent || LOADING.parentSelector;
		vm.resize = resize;
		resize();

		/**
		 * Description
		 * @method resize
		 * @return 
		 */
		function resize() {
			vm.disabled = {
				height: angular.element(vm.parent).height() + 'px',
				width: angular.element(vm.parent).width() + 'px',
				top: 0
			};
		};
	};
} ());