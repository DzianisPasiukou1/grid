(function () {
	'use strict'

	angular
		.module('ext.common.define')
		.factory('extDefine', extDefine);

	extDefine.$inject = [];

	function extDefine() {
		return definner;

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