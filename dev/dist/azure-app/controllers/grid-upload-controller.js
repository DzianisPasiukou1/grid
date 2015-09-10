(function () {
	'use strict'

	angular
		.module('azureApp')
		.controller('GridUploadController', GridUploadController);

	GridUploadController.$inject = ['gridUploadService'];

	/**
	 * Description
	 * @method GridUploadController
	 * @param {} gridUploadService
	 * @return 
	 */
	function GridUploadController(gridUploadService) {
		var vm = this;

		vm.contentOptions = {
			refreshCallback: getData,
			withUpload: true,
		};

		getData();

		/**
		 * Description
		 * @method getData
		 * @return 
		 */
		function getData() {
			gridUploadService.get(function (data) {
				vm.data = data;
			});
		}
	};
} ());