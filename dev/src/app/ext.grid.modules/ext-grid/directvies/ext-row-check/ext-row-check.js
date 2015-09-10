(function () {
	'use strict';
	
	angular
		.module('ext.grid.main')
		.directive('extRowCheck', extRowCheck);

	extRowCheck.$inject = [];

	/**
	 * Description
	 * @method extRowCheck
	 * @return directive
	 */
	function extRowCheck() {
		var directive = {
			restrict: 'AC',
			scope: {
				value: '=extRowCheck'
			},
			link: link
		};

		return directive;

		/**
		 * Description
		 * @method link
		 * @param {} scope
		 * @param {} element
		 * @return 
		 */
		function link(scope, element) {
			scope.$watch('value.orig.actions.isCheck', checkChanged);

			/**
			 * Description
			 * @method checkChanged
			 * @param {} value
			 * @return 
			 */
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