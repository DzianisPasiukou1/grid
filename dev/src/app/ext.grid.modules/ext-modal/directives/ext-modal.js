(function () {
	'use strict'

	angular
		.module('ext.grid.modal')
		.directive('extModal', extModal);

	extModal.$inject = ['extModalTemplatesPath', '$timeout', '$window'];

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

		function link(scope, element, attrs, vm) {
			angular.element($window).resize(resize);
			scope.$on('$destroy', destroy);
			scope.$watch('vm.isModal', toggleModal);

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

			function resize() {
				vm.resize();
			};

			function destroy() {
				angular.element($window).off("resize", resize);
			};
		};
	};
} ());