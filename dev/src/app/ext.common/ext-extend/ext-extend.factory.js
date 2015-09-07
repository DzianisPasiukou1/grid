(function () {
	'use strict'

	angular
		.module('ext.common.extend')
		.factory('extExtend', extExtend);

	extExtend.$inject = ['$controller'];

	function extExtend($controller) {
		return extend;

		function extend(ctrlName, dependecy, parent) {
			angular.extend(parent, $controller(ctrlName, dependecy));
		};
	};
} ());