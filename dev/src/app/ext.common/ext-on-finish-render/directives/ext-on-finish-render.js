(function () {
	'use strict'

	angular
		.module('ext.common.onFinishRender')
		.directive('extOnFinishRender', extOnFinishRender);

	extOnFinishRender.$inject = ['$timeout'];

	/**
	 * Description
	 * @method extOnFinishRender
	 * @param {} $timeout
	 * @return directive
	 */
	function extOnFinishRender($timeout) {
		var directive = {
			restrict: 'AC',
			link: link
		};

		return directive;

		/**
		 * Description
		 * @method link
		 * @param {} scope
		 * @param {} element
		 * @param {} attr
		 * @return 
		 */
		function link(scope, element, attr) {
			if (scope.$last === true) {
				$timeout(function () {
					scope.$emit('ngRepeatFinished');
				});
			}
		}
	};
} ());