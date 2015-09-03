(function () {
	'use strict'

	angular
		.module('ext.common.initDefault')
		.service('extInitDefaultService', extInitDefaultService);

	extInitDefaultService.$inject = [];

	function extInitDefaultService() {
		this.init = init;

		function init(defaultVal, initVal, propName) {
			initVal[propName] = {};

			for (var key in defaultVal) {
				if (defaultVal.hasOwnProperty(key)) {
					initVal[propName][key] = defaultVal[key];
				}
			}
		};
	};
} ());