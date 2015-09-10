(function () {
	'use strict';

	angular
		.module('ext.grid.modal')
		.directive('extModal', extModal);

	extModal.$inject = ['extModalTemplatesPath', '$timeout', '$window'];

	/**
	 * Description
	 * @method extModal
	 * @param {} templatesPath
	 * @param {} $window
	 * @param {} $window
	 * @return directive
	 */
	function extModal(templatesPath, $timeout, $window) {
		var directive = {
			restrict: 'EA',
			templateUrl: templatesPath + 'ext-modal.html',
			scope: {
				value: '=',
				bodyTemplateUrl: '@',
				bodyTemplate: '@',
				enableSave: '='
			},
			controller: 'ExtModalController',
			controllerAs: 'vm',
			bindToController: true,
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
			angular.element($window).resize(resize);
			scope.$on('$destroy', destroy);
			scope.$watch('vm.isModal', toggleModal);

			/**
			 * Description
			 * @method toggleModal
			 * @param {} value
			 * @return 
			 */
			function toggleModal(value) {
				$timeout(function () {
					if (!value) {
						angular.element(element).remove();
						angular.element('body').css('overflow', 'inherit');
					}
					else {
						vm.resize();
						angular.element('body').css('overflow', 'hidden');
					}
				});
			};

			/**
			 * Description
			 * @method resize
			 * @return 
			 */
			function resize() {
				vm.resize();
			};

			/**
			 * Description
			 * @method destroy
			 * @return 
			 */
			function destroy() {
				angular.element($window).off("resize", resize);
			};
		};
	};
} ());