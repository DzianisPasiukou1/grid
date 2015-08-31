(function () {
	'use strict'

	angular
		.module('ext.common.loading')
		.directive('extLoading', extLoading);

	extLoading.$inject = ['extLoadingTemplatesPath', '$window'];

	function extLoading(templatesPath, $window) {
		var directive = {
			restrict: 'EA',
			scope: {
				parent: '='
			},
			templateUrl: templatesPath + 'ext-loading.html',
			controller: 'ExtLoadingController',
			controllerAs: 'ctrl',
			bindToController: true,
			link: link
		};

		return directive;

		function link(scope, element, attrs, vm) {
			angular.element($window).resize(resize);
			scope.$on('$destroy', destroy);

			function resize() {
				vm.resize();
			};

			function destroy() {
				angular.element($window).off("resize", vm.resize);
			};
		};
	};
} ());