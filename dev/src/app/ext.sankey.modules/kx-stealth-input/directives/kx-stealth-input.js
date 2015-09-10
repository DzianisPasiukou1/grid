(function () {
	'use strict';

	angular
		.module('ext.sankey.stealthInput')
		.directive('kxStealthInput', kxStealthInput);

	kxStealthInput.$inject = [];

	/**
	 * Description
	 * @method kxStealthInput
	 * @return directive
	 */
	function kxStealthInput() {
		var directive = {
			restrict: "CAE",
			link: link
		};

		return directive;

		/**
		 * Description
		 * @method link
		 * @param {} $scope
		 * @param {} elem
		 * @param {} attrs
		 * @return CallExpression
		 */
		function link($scope, elem, attrs) {
			var focus, hover, update;
			focus = false;
			hover = false;
			/**
			 * Description
			 * @return CallExpression
			 */
			update = function () {
				return elem.toggleClass('stealth-mode', !(focus || hover));
			};
			elem.focus(function () {
				focus = true;
				return update();
			});
			elem.blur(function () {
				focus = false;
				return update();
			});
			elem.mouseover(function () {
				hover = true;
				return update();
			});
			elem.mouseout(function () {
				hover = false;
				return update();
			});
			return update();
		};
	};
} ());