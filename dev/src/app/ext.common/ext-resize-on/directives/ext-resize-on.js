(function () {
	'use strict'

	angular
		.module('ext.common.resizeOn')
		.directive('extResizeOn', extResizeOn);

	extResizeOn.$inject = ['$window'];

	function extResizeOn($window) {
		var directive = {
			restrict: 'AC',
			scope: {
				event: '=extResizeOn',
				parent: '@',
				width: '=resizeWidth'
			},
			controller: 'ExtResizeOnController',
			controllerAs: 'vm',
			bindToController: true,
			link: link
		};

		return directive;

		function link(scope, element, attrs, vm) {
			vm.width = vm.width || 450;
			element.css('top', angular.element(vm.parent).height() + 'px');
			angular.element($window).resize(resize);

			scope.$on('$destroy', destroy);
			scope.$watch('vm.event', event);
			
			function resizeOn(element, parent, width) {
				element.css('width', (angular.element(parent).position().left + angular.element(parent).width()) + 'px');

				if (element.width() < element.css('min-width').replace('px', '')) {
					element.css({
						right: 'auto',
						width: width + 'px',
						left: angular.element(parent).position().left + 'px'
					})
				}
				else {
					element.css({
						right: 0,
						left: 'auto'
					})
				}
			};

			function event(value) {
				if (value) {
					resizeOn(element, vm.parent, vm.width);
				}
			};

			function resize() {
				resizeOn(element, vm.parent, vm.width);
			};

			function destroy() {
				angular.element($window).off("resize", resize);
			};
		};
	};
} ());