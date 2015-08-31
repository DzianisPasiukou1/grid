(function () {
	angular
		.module('ext.grid.main')
		.directive('extRowCheck', extRowCheck);

	extRowCheck.$inject = [];

	function extRowCheck() {
		var directive = {
			restrict: 'AC',
			scope: {
				value: '=extRowCheck'
			},
			link: link
		};

		return directive;

		function link(scope, element) {
			scope.$watch('value.orig.actions.isCheck', checkChanged);

			function checkChanged(value) {
				if (value) {
					element.parent().addClass('checked');
				}
				else {
					element.parent().removeClass('checked');
				}
			};
		};
	};
} ());