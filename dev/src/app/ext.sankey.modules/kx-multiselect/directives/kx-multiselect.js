(function () {
	'use strict'

	angular
		.module('ext.sankey.multiselect')
		.directive('kxMultiselect', kxMultiselect);

	kxMultiselect.$inject = ['$timeout'];

	function kxMultiselect($timeout) {
		var directive = {
			restrict: 'A',
			scope: {
				options: '=kxMultiselect'
			},
			controller: 'KxMultiselectController',
			controllerAs: 'vm',
			bindToController: true,
			link: link
		};

		return directive;

		function link(scope, element, attrs, vm) {
			$timeout(function () {
				element.multipleSelect(vm.options);
			})
		};
	};

} ());