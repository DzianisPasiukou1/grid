(function () {
	'use strict';

	angular
		.module('ext.common.loading')
		.directive('extLoading', extLoading);

	extLoading.$inject = ['extLoadingTemplatesPath', '$window'];

	/**
	 * Description
	 * @method extLoading
	 * @param {} templatesPath
	 * @param {} $window
	 * @return directive
	 */
	function extLoading(templatesPath, $window) {
		var directive = {
			restrict: 'EA',
			scope: {
				parent: '='
			},
			templateUrl: templatesPath + 'ext-loading.html',
			controller: 'ExtLoadingController',
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
				angular.element($window).off("resize", vm.resize);
			};
		};
	};
} ());