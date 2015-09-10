(function () {
	'use strict';

	angular
		.module('ext.sankey.pageSankey')
		.directive('extPageSankey', extPageSankey);

	extPageSankey.$inject = ['extPagesankeyTemplatesPath', '$compile', 'CONTENT'];

	/**
	 * Description
	 * @method extPageSankey
	 * @param {} templatesPath
	 * @param {} $compile
	 * @param {} CONTENT
	 * @return directive
	 */
	function extPageSankey(templatesPath, $compile, CONTENT) {
		var directive = {
			restrict: 'EA',
			scope: {
				contentOptions: '=',
				cardsOptions: '=',
				sankeyData: '=',
				histogramData: '=',
				filters: '='
			},
			templateUrl: templatesPath + 'ext-page-sankey.html',
			controller: 'ExtPageSankeyController',
			controllerAs: 'vm',
			bindToController: true,
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
			element.addClass('page-content-d3');

			vm.filters.onDateRangeChange = onDateRangeChange;

			/**
			 * Description
			 * @method onDateRangeChange
			 * @return 
			 */
			function onDateRangeChange() {
				for (var card in vm.cardsOptions.cards) {
					if (vm.cardsOptions.cards[card].counter) {
						vm.cardsOptions.cards[card].count = vm.cardsOptions.cards[card].counter.calculate(this.dateRange.start.toDate(), this.dateRange.end.toDate());
					}
				}
			};
		};
	};
} ());