(function () {
	'use strict'

	angular
		.module('azureApp')
		.controller('GridD3Controller', GridD3Controller);

	GridD3Controller.$inject = ['gridStandartOneService', '$scope'];

	/**
	 * Description
	 * @method GridD3Controller
	 * @param {} gridStandartOneService
	 * @param {} $scope
	 * @return 
	 */
	function GridD3Controller(gridStandartOneService, $scope) {
		var vm = this;

		vm.contentOptions = {
			/**
			 * Description
			 * @method uploadCards
			 * @param {} data
			 * @return 
			 */
			uploadCards: function (data) {
				vm.cardsOpt = data;
				$scope.$apply();
			},
			/**
			 * Description
			 * @method uploadSankey
			 * @param {} data
			 * @return 
			 */
			uploadSankey: function (data) {
				vm.sankeyData = data;
				$scope.$apply();
			},
			/**
			 * Description
			 * @method uploadHistogram
			 * @param {} data
			 * @return 
			 */
			uploadHistogram: function (data) {
				vm.histogramData = data;
				$scope.$apply();
			},
			enableDebugging: true,
			debugCard: {
				// text: 'test',
				// template: '<h1>Test</h1>',
				// body: 'HEllo'
			}
		};
	};
} ());