(function () {
	'use strict';

	angular
		.module('ext.common.extend')
		.factory('extExtend', extExtend);

	extExtend.$inject = ['$controller'];

	/**
	 * Description
	 * @method extExtend
	 * @param {} $controller
	 * @return extend
	 */
	function extExtend($controller) {
		return extend;

		/**
		 * Description
		 * @method extend
		 * @param {} ctrlName
		 * @param {} dependecy
		 * @param {} parent
		 * @return 
		 */
		function extend(ctrlName, dependecy, parent) {
			angular.extend(parent, $controller(ctrlName, dependecy));
		};
	};
} ());