(function () {
	'use strict'

	angular
		.module('azureApp')
		.controller('GridUploadController', GridUploadController);

	GridUploadController.$inject = ['gridUploadService'];

	function GridUploadController(gridUploadService) {
		var vm = this;

		vm.contentOptions = {
			refreshCallback: getData,
			withUpload: true,
		};

		getData();

		function getData() {
			gridUploadService.get(function (data) {
				vm.data = data;
			});
		}
	};
} ());