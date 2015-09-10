(function () {
	'use strict';

	angular
		.module('ext.sankey.overlay')
		.controller('ExtOverlayController', ExtOverlayController);

	ExtOverlayController.$inject = ['OVERLAY', '$timeout', '$element', '$window', 'extDefine', 'extWindow'];

	/**
	 * Description
	 * @method ExtOverlayController
	 * @param {} OVERLAY
	 * @param {} $window
	 * @param {} $window
	 * @param {} $window
	 * @param {} extDefine
	 * @param {} extWindow
	 * @return 
	 */
	function ExtOverlayController(OVERLAY, $timeout, $element, $window, extDefine, extWindow) {
		var vm = this;
		vm.selectors = extDefine(vm.selectors, {});
		vm.selectors.overlaySelector = extDefine(vm.selectors, OVERLAY, 'overlaySelector');
		vm.selectors.heighterSelector = extDefine(vm.selectors, OVERLAY, 'heighterSelector');
		vm.selectors.alignTopSelector = extDefine(vm.selectors, OVERLAY, 'alignTopSelector');
		vm.toggleMinWidth = extDefine(vm, OVERLAY, 'toggleMinWidth');
		vm.style = {
			left: extWindow.width() - vm.toggleMinWidth + 'px',
			transition: '',
			overflow: 'hidden'
		};
		vm.transcludeStyle = {
		};
		vm.setToggle = toggle;
		vm.state = false;

		/**
		 * Description
		 * @method toggle
		 * @param {} isResize
		 * @return 
		 */
		function toggle(isResize) {
			$timeout(function () {
				if (vm.state) {
					if (extWindow.width() + 650 > 1750) {
						vm.style.left = '650px';
					}
					else {
						vm.style.left = 0;
					}

					vm.transcludeStyle.width = angular.element('body').prop('scrollWidth') - vm.style.left.toString().replace('px', '') - vm.toggleMinWidth - 5 + 'px';
				}
				else {
					vm.style.left = angular.element('body').prop('scrollWidth') - vm.toggleMinWidth + 'px';

					vm.style.overflow = 'hidden';

					if (vm.state === undefined || isResize) {
						vm.style.transition = 'none';
					}
				}

				if (vm.state !== undefined && !isResize) {
					vm.style.transition = '';
				}

				var size = 10;
				var min = 300;

				if (angular.element(vm.selectors.heighterSelector).length == 0) {
					return;
				}

				if (angular.element($window).height() - angular.element(vm.selectors.heighterSelector).offset().top - size > min) {
					vm.style.minHeight = (angular.element('body').prop('scrollHeight') - angular.element(vm.selectors.heighterSelector).offset().top - size) + 'px';

					vm.style.top = 0;
				}
				else {
					vm.style.minHeight = angular.element('body').prop('scrollHeight') - angular.element(vm.selectors.alignTopSelector).offset().top - 8 + 'px';

					if (angular.element(vm.selectors.alignTopSelector).offset().top - $element.offset().top != 0) {
						vm.style.top = angular.element(vm.selectors.alignTopSelector).offset().top - $element.offset().top + 'px';
					}
				}

			})
		};
	};
} ());