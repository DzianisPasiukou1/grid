(function () {
	'use strict'

	angular
		.module('azureApp')
		.controller('GridLoadingController', GridLoadingController);

	GridLoadingController.$inject = ['gridTemplatesPath', '$scope', 'gridUploadService'];

	/**
	 * Description
	 * @method GridLoadingController
	 * @param {} templatesPath
	 * @param {} $scope
	 * @param {} gridUploadService
	 * @return 
	 */
	function GridLoadingController(templatesPath, $scope, gridUploadService) {
		var vm = this;

		vm.data = [];

		vm.grid = {
			name: 'Grid with loading',
			count: 0
		};

		vm.contentOptions = {
			/**
			 * Description
			 * @method upload
			 * @param {} data
			 * @return 
			 */
			upload: function (data) {
				vm.contentOptions.isLoading = true;

				vm.data = data;

				vm.grid.count = vm.data.length;

				vm.gridOptions.detailsCondition = undefined;
			},
			/**
			 * Description
			 * @method refreshCallback
			 * @return 
			 */
			refreshCallback: function () {
				getData();
			},
			isDynamic: true,
			loading: true
		};

		vm.gridOptions = {
			data: 'data',
			multiSelect: false,
			/**
			 * Description
			 * @method init
			 * @param {} grid
			 * @param {} event
			 * @return 
			 */
			init: function (grid, event) {
				vm.contentOptions.isLoading = false;
			},
			withDetails: true,
			filterOptions: { filterText: '' },
			rowHeight: 60,
			headerRowHeight: 40,
			showFooter: true,
			footerRowHeight: 30,
			/**
			 * Description
			 * @method detailsCondition
			 * @param {} entity
			 * @param {} index
			 * @return 
			 */
			detailsCondition: function (entity, index) {
				if (index % 2 != 0) {
					return templatesPath + 'grid-templates/details-templates/details-example2.html';
				}
			}
		};

		getData();

		/**
		 * Description
		 * @method getData
		 * @return 
		 */
		function getData() {
			setTimeout(function () {
				gridUploadService.get(function (data) {
					vm.data = data;

					vm.contentOptions.isLoading = false;
					$scope.$apply();
				})
			}, 2000)
		}
	};
} ());