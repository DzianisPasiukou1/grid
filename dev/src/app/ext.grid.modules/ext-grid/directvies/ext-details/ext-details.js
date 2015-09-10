(function () {
	'use strict';

	angular
		.module('ext.grid.main')
		.directive('extDetails', extDetails)

	extDetails.$inject = [];

	/**
	 * Description
	 * @method extDetails
	 * @return directive
	 */
	function extDetails() {
		var directive = {
			restict: 'AC',
			scope: {
				row: '=',
				detailsClass: '='
			},
			controller: 'ExtDetailsController',
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
			element.click(click);
			scope.$on('$destroy', destroy);

			/**
			 * Description
			 * @method click
			 * @return 
			 */
			function click() {
				vm.row.orig.actions.isToggle = !vm.row.orig.actions.isToggle;

				vm.row.orig.actions.setToggle(vm.row.orig, vm.row.orig.actions.isToggle, vm.detailsClass);
			};

			/**
			 * Description
			 * @method destroy
			 * @return 
			 */
			function destroy() {
				element.off('click', click);
			}
		}
	};
} ());