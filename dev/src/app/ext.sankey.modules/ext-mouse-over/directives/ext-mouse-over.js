(function () {
	'use strict'

	angular
		.module('ext.sankey.mouseOver')
		.directive('extMouseOver', extMouseOver);

	extMouseOver.$inject = ['extMouseOverTemplatesPath', '$timeout', '$window'];

	function extMouseOver(templatesPath, $timeout, $window) {
		var directive = {
			restrict: 'EAC',
			scope: {
				type: '=',
				value: '=',
				parentTop: '=parentTop'
			},
			controllerAs: 'vm',
			bindToController: true,
			templateUrl: templatesPath + 'ext-mouse-over.html',
			link: link
		}

		return directive;

		function link(scope, element, attrs, vm) {
			vm.parentTop = vm.parentTop || 0;
			vm.style = {
				visibility: 'hidden'
			}

			$timeout(init);

			function init() {
				if ($.cursorMessageData.mouseY + element.find('.mouse-over').height() < angular.element($window).height()) {
					vm.style.top = ($.cursorMessageData.mouseY - vm.parentTop + 15) + 'px';
				}
				else {
					vm.style.top = ($.cursorMessageData.mouseY - element.find('.mouse-over').height() - vm.parentTop - 20) + 'px';
				}

				if ($.cursorMessageData.mouseX + 10 + element.find('.mouse-over').width() < angular.element($window).width()) {
					vm.style.left = ($.cursorMessageData.mouseX + 10) + 'px';
				}
				else {
					vm.style.left = angular.element($window).width() - element.find('.mouse-over').width() - 10 + 'px';
				}
				vm.style.visibility = 'visible'
			}
		};
	};
} ());