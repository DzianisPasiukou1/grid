/**
 * @namespace factories
 * @memberOf anyOtherClick
 */
(function () {
	'use strict';

	angular
		.module('ext.common.anyOtherClick')
		.factory('anyOtherClickFactory', anyOtherClickFactory);

	anyOtherClickFactory.$inject = ['$document'];
	
	/**
	 * @memberOf anyOtherClick.factories
	 * @desc Factory for any other click
	 * @method anyOtherClickFactory
	 * @param {Object} $document
	 * @return ObjectExpression
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
		 * @memberOf anyOtherClick.factories
			   * @name _register
			   * @desc Register document event
			   * @param {Function} documentClickHandler Document event handler
			   */
		function _register(documentClickHandler) {
			$document.on('click', documentClickHandler);
			handlers.push(documentClickHandler);
		}

		/**
		 * @memberOf anyOtherClick.factories
		 * @name _getHandlers
	 	 * @desc Get handlers on document click event
		 * @returns {Array}
		 */
		function _getHandlers() {
			return handlers;
		}

		/**
		 * @memberOf anyOtherClick.factories
   * @name _getCountHandlers
   * @desc Get count of handlers on document click event
   * @returns {Number}
   */
		function _getCountHandlers() {
			return handlers.length;
		}
		
		/**
		 * @memberOf anyOtherClick.factories
   * @name _destroy
   * @desc Unhandle function from document events
   * @param {Function} Document click handler
   */
		function _destroy(documentClickHandler) {
			$document.off('click', documentClickHandler);
			handlers.splice(documentClickHandler, 1);
		}
	}
} ());

