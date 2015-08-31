(function () {
	'use strict'
	
	angular
		.module('ext.common.upload')
		.controller('ExtUploadController', ExtUploadController);
	
	ExtUploadController.$inject = [];
	
	function ExtUploadController() {
		var vm = this;
	};
} ());