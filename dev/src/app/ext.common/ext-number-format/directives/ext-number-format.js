(function () {
	'use strict';

	angular
		.module('ext.common.numberFormat')
		.directive('extNumberFormat', extNumberFormat);

	extNumberFormat.$inject = [];

	/**
	 * Description
	 * @method extNumberFormat
	 * @return directive
	 */
	function extNumberFormat() {
		var directive = {
			restrict: 'AC',
			scope: {
				number: '=extNumberFormat'
			},
			link: link
		};

		return directive;

		/**
		 * Description
		 * @method link
		 * @param {} scope
		 * @param {} element
		 * @param {} attrs
		 * @param {} vm
		 * @return 
		 */
		function link(scope, element, attrs, vm) {
			scope.$watch('number', changedNumber);

			/**
			 * Description
			 * @method changedNumber
			 * @param {} num
			 * @return 
			 */
			function changedNumber(num) {
				element.html(nFormatter(num, 1));
			};

			/**
			 * Description
			 * @method nFormatter
			 * @param {} num
			 * @param {} digits
			 * @return num
			 */
			function nFormatter(num, digits) {
				var si = [
					{ value: 1E18, symbol: "E" },
					{ value: 1E15, symbol: "P" },
					{ value: 1E12, symbol: "T" },
					{ value: 1E9, symbol: "G" },
					{ value: 1E6, symbol: "M" },
					{ value: 1E3, symbol: "k" }
				], i;
				for (i = 0; i < si.length; i++) {
					if (num >= si[i].value) {
						return (num / si[i].value).toFixed(digits).replace(/\.?0+$/, "") + si[i].symbol;
					}
				}
				return num;
			};
		};
	};
} ());

