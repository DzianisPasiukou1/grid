(function () {
	'use strict';

	angular
		.module('ext.common.logger')
		.service('loggerService', loggerService);

	loggerService.$inject = ['$log'];

	/**
	 * Description
	 * @method loggerService
	 * @param {} $log
	 * @return 
	 */
	function loggerService($log) {
		this.defineObj = defineObj;

		/**
		 * Description
		 * @method defineObj
		 * @param {} text
		 * @param {} obj
		 * @param {} type
		 * @return obj
		 */
		function defineObj(text, obj, type) {
			if (!angular.isDefined(obj)) {
				$log.warn(text);

				obj = angular.isDefined(type) ? type : {};
			}

			return obj;
		};
	};
} ());