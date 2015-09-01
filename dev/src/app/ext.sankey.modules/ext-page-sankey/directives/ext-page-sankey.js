(function () {
	'use strict'

	angular
		.module('ext.sankey.pageSankey')
		.directive('extPageSankey', extPageSankey);

	extPageSankey.$inject = ['extPagesankeyTemplatesPath', '$compile', 'CONTENT'];

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

		function link(scope, element, attrs, vm) {
			element.addClass('page-content-d3');

			vm.contentOptions.refresh = refresh;
			vm.filters.onDateRangeChange = onDateRangeChange;

			function refresh() {
			};

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