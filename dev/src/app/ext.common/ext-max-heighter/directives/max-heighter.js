/* global getWindowHeight */
(function () {
	'use strict'

	angular
		.module('ext.common.maxHeighter')
		.directive('extMaxHeighter', extMaxHeighter)

	extMaxHeighter.$inject = ['$timeout', '$window'];

	function extMaxHeighter($timeout, $window) {
		var directive = {
			restrict: 'AC',
			scope: {},
			compile: compile
		}

		return directive;

		function compile(element, attrs) {
			var compileObj = {
				post: compilePost
			};

			element.onPositionChanged(function () {
				onPositionChanged(element);
			}, 0);

			return compileObj;

			function onPositionChanged(element) {
				if (getWindowHeight() - element.offset().top > 0) {
					element.css('max-height', getWindowHeight() - element.offset().top - 10 + 'px');
				}
				else {
					element.css('max-height', 100 + 'px');
				}
			};

			function compilePost(scope, element, attrs) {
				$timeout(function () {
					onPositionChanged(element);
				});

				angular.element($window).resize(onPositionChanged);

				scope.$on('$destroy', destroy);
			};

			function destroy() {
				angular.element($window).off("resize", onPositionChanged);
			};
		};
	};
} ());