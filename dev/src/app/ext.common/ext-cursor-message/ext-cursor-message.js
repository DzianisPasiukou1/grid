(function () {
	'use strict';

	angular
		.module('ext.common.cursorMessage')
		.run(cursorMessage);

	cursorMessage.$inject = [];

	/**
	 * Description
	 * @method cursorMessage
	 * @return 
	 */
	function cursorMessage() {
		angular.element.cursorMessageData = {};

		angular.element(window).ready(function (e) {
			if (angular.element('.cursor-message').length == 0) {
				angular.element('body').append('<div class="cursor-message">&nbsp;</div>');
				angular.element('.cursor-message').hide();
			}

			angular.element('body').mousemove(function (e) {
				angular.element.cursorMessageData.mouseX = e.pageX;
				angular.element.cursorMessageData.mouseY = e.pageY;
				if (angular.element.cursorMessageData.options != undefined) angular.element._showCursorMessage();
			});
		});
		angular.element.extend({
			/**
			 * Description
			 * @method cursorMessage
			 * @param {} message
			 * @param {} options
			 * @return 
			 */
			cursorMessage: function (message, options) {
				if (options == undefined) options = {};
				if (options.offsetX == undefined) options.offsetX = 5;
				if (options.offsetY == undefined) options.offsetY = 5;
				if (options.hideTimeout == undefined) options.hideTimeout = 2000;

				angular.element('.cursor-message').html(message).fadeIn('slow');
				if (angular.element.cursorMessageData.hideTimeoutId != undefined) clearTimeout(angular.element.cursorMessageData.hideTimeoutId);
				if (options.hideTimeout > 0) angular.element.cursorMessageData.hideTimeoutId = setTimeout(angular.element.hideCursorMessage, options.hideTimeout);
				angular.element.cursorMessageData.options = options;
				angular.element._showCursorMessage();
			},
			/**
			 * Description
			 * @method hideCursorMessage
			 * @return 
			 */
			hideCursorMessage: function () {
				angular.element('.cursor-message').fadeOut('slow');
			},
			_showCursorMessage: function () {
				angular.element('.cursor-message').css({ top: (angular.element.cursorMessageData.mouseY + angular.element.cursorMessageData.options.offsetY + 30) + 'px', left: (angular.element.cursorMessageData.mouseX + angular.element.cursorMessageData.options.offsetX - 150) });

				if (angular.element.cursorMessageData.options.backgroundColor) {
					angular.element('.cursor-message').css({ 'background-color': angular.element.cursorMessageData.options.backgroundColor });
				}

			}
		});
	};
} ());