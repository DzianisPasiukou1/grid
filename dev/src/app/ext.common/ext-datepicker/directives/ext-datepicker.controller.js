(function () {
	'use strict';

	angular
		.module('ext.common.datepicker')
		.controller('ExtDatepickerController', ExtDatepickerController);

	ExtDatepickerController.$inject = ['$element'];

	/**
	 * Description
	 * @method ExtDatepickerController
	 * @param {} $element
	 * @return 
	 */
	function ExtDatepickerController($element) {
		var vm = this;

		vm.dateBtnSelector = '.date-btn__toggle';
		vm.toggle = toggle;
		vm.close = close;

		/**
		 * Description
		 * @method toggle
		 * @return 
		 */
		function toggle() {
			vm.isShow = !vm.isShow;

			if (vm.isShow) {
				$element.find(vm.dateBtnSelector).data('dateRangePicker').open();
			}
			else {
				angular.element(vm.dateBtnSelector).data('dateRangePicker').close();
			}
		};

		/**
		 * Description
		 * @method close
		 * @return 
		 */
		function close() {
			vm.isShow = false;
			$element.find(vm.dateBtnSelector).data('dateRangePicker').close();
		};
	};
} ());