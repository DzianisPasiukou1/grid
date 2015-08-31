(function () {
	'use strict'

	angular
		.module('ext.grid.main')
		.directive('extDetails', extDetails)

	extDetails.$inject = [];

	function extDetails() {
		var directive = {
			restict: 'AC',
			scope: {
				row: '=',
				detailsClass: '='
			},
			controller: 'ExtDetailsController',
			controllerAs: 'vm',
			bindToController: true,
			link: link
		};

		return directive;

		function link(scope, element, attrs, vm) {
			element.click(click);
			scope.$on('$destroy', destroy);

			function click() {
				vm.row.orig.actions.isToggle = !vm.row.orig.actions.isToggle;

				vm.row.orig.actions.setToggle(vm.row.orig, vm.row.orig.actions.isToggle, vm.detailsClass);
			};

			function destroy() {
				element.off('click', click);
			}
		}
	}
} ());