(function () {
	'use strict'

	angular
		.module('ext.common.onFinishRender')
		.directive('extOnFinishRender', extOnFinishRender);

	extOnFinishRender.$inject = ['$timeout'];

	function extOnFinishRender($timeout) {
		var directive = {
			restrict: 'AC',
			link: link
		};

		return directive;

		function link(scope, element, attr) {
			if (scope.$last === true) {
				$timeout(function () {
					scope.$emit('ngRepeatFinished');
				});
			}
		}
	};
} ());