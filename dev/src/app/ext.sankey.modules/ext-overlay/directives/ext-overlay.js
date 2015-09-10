(function () {
	'use strict';

	angular
		.module('ext.sankey.overlay')
		.directive('extOverlay', extOverlay);

	extOverlay.$inject = ['$timeout', 'extOverlayTemplatesPath', '$window'];

	/**
	 * Description
	 * @method extOverlay
	 * @param {} $window
	 * @param {} templatesPath
	 * @param {} $window
	 * @return directive
	 */
	function extOverlay($timeout, templatesPath, $window) {
		var directive = {
			restrict: 'EAC',
			scope: {
				selectors: '=',
				toggleMinWidth: '='
			},
			controller: 'ExtOverlayController',
			controllerAs: 'vm',
			bindToController: true,
			templateUrl: templatesPath + 'ext-overlay.html',
			transclude: true,
			replace: true,
			link: link
		};

		return directive;

		/**
		 * Description
		 * @method link
		 * @param {} scope
		 * @param {} element
		 * @param {} attrs
		 * @param {} vm
		 * @return 
		 */
		function link(scope, element, attrs, vm) {
			scope.$watch('vm.state', changedState);
			scope.$on('$destroy', destroy);

			element.parent().onPositionChanged(resize, 0);
			angular.element($window).resize(resize);

			/**
			 * Description
			 * @method resize
			 * @return 
			 */
			function resize() {
				vm.setToggle(true);
			};

			/**
			 * Description
			 * @method changedState
			 * @param {} state
			 * @return 
			 */
			function changedState(state) {
				vm.setToggle();

				if (state == false) {
					element.scrollTop(0);
				}
			};

			/**
			 * Description
			 * @method destroy
			 * @return 
			 */
			function destroy() {
				element.parent().off("onPositionChanged", resize);
				angular.element($window).off("resize", resize);
			};
		}
	};
} ());