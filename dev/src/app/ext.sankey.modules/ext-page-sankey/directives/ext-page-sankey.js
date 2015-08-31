(function () {
	'use strict'

	angular
		.module('ext.sankey.pageSankey')
		.directive('extPageSankey', extPageSankey);

	extPageSankey.$inject = ['extPagesankeyTemplatesPath', 'CONTENT', '$compile', 'HISTOGRAM', 'SANKEY'];

	function extPageSankey(templatesPath, CONTENT, $compile, HISTOGRAM, SANKEY) {
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
			link: link
		};

		return directive;

		function link(scope, element, attrs, vm) {
			element.addClass('page-content-d3');

			var initializer = new Initializer(scope, element, CONTENT, templatesPath, $compile, null, HISTOGRAM, SANKEY);
			initializer.initSankey();

			vm.contentOptions.refresh = refresh;
			vm.filters.onDateRangeChange = onDateRangeChange;

			function refresh() {
				initializer.refreshSankey();
			};

			function onDateRangeChange() {
				for (var card in scope.cardsOptions.cards) {
					if (scope.cardsOptions.cards[card].counter) {
						scope.cardsOptions.cards[card].count = scope.cardsOptions.cards[card].counter.calculate(this.dateRange.start.toDate(), this.dateRange.end.toDate());
					}
				}
			};
		};
	};
} ());