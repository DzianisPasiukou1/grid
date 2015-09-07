(function () {
	'use strict'

	angular
		.module('ext.sankey.mouseOver')
		.directive('extMouseOver', extMouseOver);

	extMouseOver.$inject = ['extMouseOverTemplatesPath', '$timeout', '$window', 'extDefine'];

	function extMouseOver(templatesPath, $timeout, $window, extDefine) {
		var directive = {
			restrict: 'EAC',
			scope: {
				type: '=',
				value: '=',
				parentTop: '=parentTop'
			},
			controller: 'ExtMouseOverController',
			controllerAs: 'vm',
			bindToController: true,
			templateUrl: templatesPath + 'ext-mouse-over.html',
			link: link
		}

		return directive;

		function link(scope, element, attrs, vm) {
			vm.parentTop = extDefine(vm.parentTop, 0);
			vm.style = {
				visibility: 'hidden'
			}

			$timeout(init);

			function init() {
				if (angular.element.cursorMessageData.mouseY + element.find('.mouse-over').height() < angular.element($window).height()) {
					vm.style.top = (angular.element.cursorMessageData.mouseY - vm.parentTop + 15) + 'px';
				}
				else {
					vm.style.top = (angular.element.cursorMessageData.mouseY - element.find('.mouse-over').height() - vm.parentTop - 20) + 'px';
				}

				if (angular.element.cursorMessageData.mouseX + 10 + element.find('.mouse-over').width() < angular.element($window).width()) {
					vm.style.left = (angular.element.cursorMessageData.mouseX + 10) + 'px';
				}
				else {
					vm.style.left = angular.element($window).width() - element.find('.mouse-over').width() - 10 + 'px';
				}
				vm.style.visibility = 'visible'
			}
		};
	};
} ());