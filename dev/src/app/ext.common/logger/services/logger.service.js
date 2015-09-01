(function () {
	'use strict'

	angular
		.module('ext.common.logger')
		.service('loggerService', loggerService);

	loggerService.$inject = ['$log'];

	function loggerService($log) {
		this.defineObj = defineObj;

		function defineObj(text, obj, type) {
			if (!angular.isDefined(obj)) {
				$log.warn(text);

				obj = type || {};
			}

			return obj;
		};
	};
} ());