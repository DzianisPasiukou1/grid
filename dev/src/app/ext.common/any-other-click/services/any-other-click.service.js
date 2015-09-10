(function () {
	'use strict';

	angular
		.module('ext.common.anyOtherClick')
		.factory('anyOtherClickFactory', anyOtherClickFactory);

	anyOtherClickFactory.$inject = ['$document'];
	
	/**
   * @desc Factory for any other click
   * @memberOf anyOtherClick
   */
	function anyOtherClickFactory($document) {
		var handlers = [];

		return {
			_register: _register,
			_getHandlers: _getHandlers,
			_getCountHandlers: _getCountHandlers,
			_destroy: _destroy
		};

		/**
			   * @name _register
			   * @desc Register document event
			   * @param {Function} documentClickHandler Document event handler
			   * @memberOf anyOtherClick
			   */
		function _register(documentClickHandler) {
			$document.on("click", documentClickHandler);
			handlers.push(documentClickHandler);
		}

		/**
			   * @name _getHandlers
			   * @desc Get handlers on document click event
			   * @returns {Array}
			   * @memberOf anyOtherClick
			   */
		function _getHandlers() {
			return handlers;
		}

		/**
   * @name _getCountHandlers
   * @desc Get count of handlers on document click event
   * @returns {Number}
   * @memberOf anyOtherClick
   */
		function _getCountHandlers() {
			return handlers.length;
		}
		
		/**
   * @name _destroy
   * @desc Unhandle function from document events
   * @param {Function} Document click handler
   * @memberOf anyOtherClick
   */
		function _destroy(documentClickHandler) {
			$document.off("click", documentClickHandler);
			handlers.splice(documentClickHandler, 1);
		}
	}
} ());

