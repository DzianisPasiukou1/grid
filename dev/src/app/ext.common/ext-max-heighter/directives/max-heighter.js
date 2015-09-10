(function () {
	'use strict';

	angular
		.module('ext.common.maxHeighter')
		.directive('extMaxHeighter', extMaxHeighter)

	extMaxHeighter.$inject = ['$timeout', '$window', 'extWindow'];

	/**
	 * Description
	 * @method extMaxHeighter
	 * @param {} $window
	 * @param {} $window
	 * @param {} extWindow
	 * @return directive
	 */
	function extMaxHeighter($timeout, $window, extWindow) {
		var directive = {
			restrict: 'AC',
			scope: {},
			compile: compile
		}

		return directive;

		/**
		 * Description
		 * @method compile
		 * @param {} element
		 * @param {} attrs
		 * @return compileObj
		 */
		function compile(element, attrs) {
			var compileObj = {
				post: compilePost
			};

			element.onPositionChanged(function () {
				onPositionChanged(element);
			}, 0);

			return compileObj;

			/**
			 * Description
			 * @method onPositionChanged
			 * @return 
			 */
			function onPositionChanged() {
				if (extWindow.height() - element.offset().top > 0) {
					element.css('max-height', extWindow.height() - element.offset().top - 10 + 'px');
				}
				else {
					element.css('max-height', 100 + 'px');
				}
			};

			/**
			 * Description
			 * @method compilePost
			 * @param {} scope
			 * @param {} element
			 * @param {} attrs
			 * @return 
			 */
			function compilePost(scope, element, attrs) {
				$timeout(function () {
					onPositionChanged(element);
				});

				angular.element($window).resize(onPositionChanged);

				scope.$on('$destroy', destroy);
			};

			/**
			 * Description
			 * @method destroy
			 * @return 
			 */
			function destroy() {
				angular.element($window).off("resize", onPositionChanged);
			};
		};
	};
} ());