(function () {
	'use strict';

	angular
		.module('ext.sankey.multiselect')
		.directive('kxMultiselect', kxMultiselect);

	kxMultiselect.$inject = ['$timeout'];

	/**
	 * Description
	 * @method kxMultiselect
	 * @param {} $timeout
	 * @return directive
	 */
	function kxMultiselect($timeout) {
		var directive = {
			restrict: 'A',
			scope: {
				options: '=kxMultiselect'
			},
			controller: 'KxMultiselectController',
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
			$timeout(function () {
				element.multipleSelect(vm.options);
			})
		};
	};

} ());