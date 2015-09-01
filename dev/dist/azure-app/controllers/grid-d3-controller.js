(function () {
	'use strict'

	angular
		.module('azureApp')
		.controller('GridD3Controller', GridD3Controller);

	GridD3Controller.$inject = ['gridStandartOneService'];

	function GridD3Controller(gridStandartOneService) {
		var vm = this;
	};
} ());