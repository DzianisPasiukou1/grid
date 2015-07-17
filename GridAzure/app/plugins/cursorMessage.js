if (jQuery) {
	(function ($) {
		$.cursorMessageData = {}; // needed for e.g. timeoutId
		//start registring mouse coцridnates from the start!

		$(window).ready(function (e) {
			if ($('.cursor-message').length == 0) {
				$('body').append('<div class="cursor-message">&nbsp;</div>');
				$('.cursor-message').hide();
			}

			$('body').mousemove(function (e) {
				$.cursorMessageData.mouseX = e.pageX;
				$.cursorMessageData.mouseY = e.pageY;
				if ($.cursorMessageData.options != undefined) $._showCursorMessage();
			});
		});
		$.extend({
			cursorMessage: function (message, options) {
				if (options == undefined) options = {};
				if (options.offsetX == undefined) options.offsetX = 5;
				if (options.offsetY == undefined) options.offsetY = 5;
				if (options.hideTimeout == undefined) options.hideTimeout = 2000;

				$('.cursor-message').html(message).fadeIn('slow');
				if (jQuery.cursorMessageData.hideTimeoutId != undefined) clearTimeout(jQuery.cursorMessageData.hideTimeoutId);
				if (options.hideTimeout > 0) jQuery.cursorMessageData.hideTimeoutId = setTimeout($.hideCursorMessage, options.hideTimeout);
				jQuery.cursorMessageData.options = options;
				$._showCursorMessage();
			},
			hideCursorMessage: function () {
				$('.cursor-message').fadeOut('slow');
			},
			_showCursorMessage: function () {
				$('.cursor-message').css({ top: ($.cursorMessageData.mouseY + $.cursorMessageData.options.offsetY + 30) + 'px', left: ($.cursorMessageData.mouseX + $.cursorMessageData.options.offsetX - 150) });

				if ($.cursorMessageData.options.backgroundColor) {
					$('.cursor-message').css({ 'background-color': $.cursorMessageData.options.backgroundColor });
				}

			}
		});
	})(jQuery);
}