(function () {
	'use strict'

	angular
		.module('ext.grid.pageContentCards')
		.factory('loggerFactory', loggerFactory);

	loggerFactory.$inject = ['$log'];

	function loggerFactory($log) {
		var factory = {};

		factory.defineObj = defineObj;

		return factory;

		function defineObj(text, obj, type) {
			if (!angular.isDefined(obj)) {
				$log.warn(text);

				obj = type || {};
			}

			return obj;
		};
	};
} ());