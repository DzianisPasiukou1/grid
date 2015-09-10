(function () {
	'use strict';

	angular
		.module('ext.sankey.main')
		.controller('ExtSankeyController', ExtSankeyController);

	ExtSankeyController.$inject = ['chartFactory', '$parse'];

	/**
	 * Description
	 * @method ExtSankeyController
	 * @param {} chartFactory
	 * @param {} $parse
	 * @return 
	 */
	function ExtSankeyController(chartFactory, $parse) {
		var vm = this;

		vm.chart = chartFactory.getChart(vm.data, vm.opt);

		/**
		 * Description
		 * @method mouseOverInit
		 * @param {} data
		 * @return 
		 */
		vm.mouseOverInit = function (data) {
			vm.type = $parse('mouseover.type')(data);
			vm.value = {
				header: $parse('mouseover.header')(data),
				data: $parse('mouseover.data')(data)
			};
		};
	};
} ());