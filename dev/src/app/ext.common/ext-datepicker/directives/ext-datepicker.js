(function () {
	'use strict';

	angular
		.module('ext.common.datepicker')
		.directive('extDatepicker', extDatepicker);

	extDatepicker.$inject = ['extDatepickerTemplatesPath'];

	/**
	 * Description
	 * @method extDatepicker
	 * @param {} templatesPath
	 * @return directive
	 */
	function extDatepicker(templatesPath) {
		var directive = {
			restrict: 'EA',
			templateUrl: templatesPath + 'ext-datepicker.html',
			scope: {
				opt: '=extDatepicker'
			},
			controller: 'ExtDatepickerController',
			controllerAs: 'vm',
			bindToController: true,
			link: link
		};

		return directive;

		/**
		 * Description
		 * @method link
		 * @param {} scope
		 * @param {} element
		 * @param {} attrs
		 * @param {} vm
		 * @return 
		 */
		function link(scope, element, attrs, vm) {
			element.find(vm.dateBtnSelector)
				.dateRangePicker(vm.opt.config)
				.bind('datepicker-change', change)
				.bind('datepicker-close', close);

			/**
			 * Description
			 * @method change
			 * @param {} event
			 * @param {} obj
			 * @return 
			 */
			function change(event, obj) {
				vm.opt.startDate = obj.date1;
				vm.opt.endDate = obj.date2;
				vm.opt.dateRange = Math.abs(vm.opt.endDate.getTime() - vm.opt.startDate.getTime());
				if (scope.$root.$$phase != '$apply' && scope.$root.$$phase != '$digest') {
					scope.$apply();
				}
				
				vm.close();
			};

			/**
			 * Description
			 * @method close
			 * @return 
			 */
			function close() {
				vm.isShow = false;
				if (scope.$root.$$phase != '$apply' && scope.$root.$$phase != '$digest') {
					scope.$apply();
				}
			};
		}
	};
} ());