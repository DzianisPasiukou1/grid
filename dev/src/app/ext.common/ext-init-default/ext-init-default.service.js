(function () {
	'use strict'

	angular
		.module('ext.common.initDefault')
		.service('extInitDefaultService', extInitDefaultService);

	extInitDefaultService.$inject = [];

	/**
	 * Description
	 * @method extInitDefaultService
	 * @return 
	 */
	function extInitDefaultService() {
		this.init = init;

		/**
		 * Description
		 * @method init
		 * @param {} defaultVal
		 * @param {} initVal
		 * @param {} propName
		 * @return 
		 */
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