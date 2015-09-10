(function () {
	'use strict';

	angular
		.module('ext.sankey.pageSankey')
		.controller('ExtPageSankeyController', ExtPageSankeyController);

	ExtPageSankeyController.$inject = ['initUtils', 'loggerService'];

	/**
	 * Description
	 * @method ExtPageSankeyController
	 * @param {} initUtils
	 * @param {} loggerService
	 * @return 
	 */
	function ExtPageSankeyController(initUtils, loggerService) {
		var vm = this;

		vm.contentOptions = loggerService.defineObj('Content options is not defined', vm.contentOptions, initUtils.initContentOptions(vm.contentOptions));
		vm.cardsOptions = loggerService.defineObj('Cards options is not defined', vm.cardsOptions, initUtils.initCardsOptions(vm.cardsOptions));
		vm.sankeyData = loggerService.defineObj('Sankey data is not defined', vm.sankeyData, initUtils.initSankeyData(vm.sankeyData));
		vm.histogramData = loggerService.defineObj('Histogram data is not defined', vm.histogramData, initUtils.initHistogramData(vm.histogramData));
		vm.filters = loggerService.defineObj('Filters is not defined', vm.filters, initUtils.initFilters(vm.filters));

		vm.contentOptions.update = update;

		/**
		 * Description
		 * @method update
		 * @return 
		 */
		function update() {
			vm.sankeyData = initUtils.content.sankeyData;
			vm.histogramData = initUtils.content.histogramData;
			vm.cardsOptions.cards = initUtils.content.cards;
		};
	};
} ());