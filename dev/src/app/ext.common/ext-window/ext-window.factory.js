(function () {
	'use strict';

	angular
		.module('ext.common.window')
		.factory('extWindow', extWindow);

	extWindow.$inject = ['$window', '$document'];

	/**
	 * Description
	 * @method extWindow
	 * @param {} $document
	 * @param {} $document
	 * @return extWindow
	 */
	function extWindow($window, $document) {
		var extWindow = {};

		extWindow.width = width;
		extWindow.height = height;
		extWindow.getOrigWindow = getOrigWindow;

		return extWindow;

		/**
		 * Description
		 * @method getOrigWindow
		 * @return $window
		 */
		function getOrigWindow() {
			return $window;
		};

		/**
		 * Description
		 * @method width
		 * @return windowWidth
		 */
		function width() {
			var windowWidth = 0;
			if (typeof ($window.innerWidth) == 'number') {
				windowWidth = $window.innerWidth;
			}
			else {
				if ($document.documentElement && $document.documentElement.clientWidth) {
					windowWidth = document.documentElement.clientWidth;
				}
				else {
					if ($document.body && $document.body.clientWidth) {
						windowWidth = $document.body.clientWidth;
					}
				}
			}
			return windowWidth;
		};

		/**
		 * Description
		 * @method height
		 * @return windowHeight
		 */
		function height() {
			var windowHeight = 0;
			if (typeof ($window.innerHeight) == 'number') {
				windowHeight = $window.innerHeight;
			}
			else {
				if ($document.documentElement && $document.documentElement.clientHeight) {
					windowHeight = $document.documentElement.clientHeight;
				}
				else {
					if ($document.body && $document.body.clientHeight) {
						windowHeight = $document.body.clientHeight;
					}
				}
			}
			return windowHeight;
		};
	};
} ());