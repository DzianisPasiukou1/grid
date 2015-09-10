(function () {
	'use strict';

	angular
		.module('ext.common.define')
		.factory('extDefine', extDefine);

	extDefine.$inject = [];

	/**
	 * Description
	 * @method extDefine
	 * @return definner
	 */
	function extDefine() {
		return definner;

		/**
		 * Description
		 * @method definner
		 * @param {} obj
		 * @param {} defaultObj
		 * @param {} prop
		 * @param {} defaultProp
		 * @return 
		 */
		function definner(obj, defaultObj, prop, defaultProp) {
			defaultProp = angular.isString(defaultProp) ? defaultProp : prop;

			if (angular.isString(prop)) {
				return angular.isDefined(obj[prop]) ? obj[prop] : defaultObj[defaultProp];
			}
			else {
				return angular.isDefined(obj) ? obj : defaultObj;
			}
		};
	};
} ());