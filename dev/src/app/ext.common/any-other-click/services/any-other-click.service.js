(function () {
	'use strict'

	angular
		.module('ext.common.anyOtherClick')
		.factory('anyOtherClickFactory', anyOtherClickFactory);

	anyOtherClickFactory.$inject = ['$document'];

	function anyOtherClickFactory($document) {
		var handlers = [];

		return {
			_register: _register,
			_getHandlers: _getHandlers,
			_getCountHandlers: _getCountHandlers,
			_destroy: _destroy
		};

		function _register(documentClickHandler) {
			$document.on("click", documentClickHandler);
			handlers.push(documentClickHandler);
		};

		function _getHandlers() {
			return handlers;
		};

		function _getCountHandlers() {
			return handlers.length;
		};

		function _destroy(documentClickHandler) {
			$document.off("click", documentClickHandler);
			handlers.splice(documentClickHandler, 1);
		};
	};
} ());

