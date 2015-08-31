(function () {
	'use strict'

	angular
		.module('ext.sankey.histogram')
		.directive('extChartSegment', extChartSegment);

	extChartSegment.$inject = ['extHistogramTemplatesPath'];

	function extChartSegment(templatesPath) {
		var directive = {
			retstrict: 'EA',
			scope: {
				selectedUsers: '='
			},
			replace: true,
			controller: 'ExtChartSegmentController',
			controllerAs: 'vm',
			bindToController: true,
			templateUrl: templatesPath + 'ext-chart-segment.html'
		}

		return directive;
	};
} ());