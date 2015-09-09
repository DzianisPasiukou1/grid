(function () {
	'use strict'

	angular
		.module('ext.common.window')
		.factory('extWindow', extWindow);

	extWindow.$inject = ['$window', '$document'];

	function extWindow($window, $document) {
		var extWindow = {};

		extWindow.width = width;
		extWindow.height = height;
		extWindow.getOrigWindow = getOrigWindow;

		return extWindow;

		function getOrigWindow() {
			return $window;
		};

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