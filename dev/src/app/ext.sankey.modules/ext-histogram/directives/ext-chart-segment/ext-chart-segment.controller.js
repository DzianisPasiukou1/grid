(function () {
	'use strict'

	angular
		.module('ext.sankey.histogram')
		.controller('ExtChartSegmentController', ExtChartSegmentController);

	ExtChartSegmentController.$inject = [];

	function ExtChartSegmentController() {
		var vm = this;

		vm.panel = {
			header: {
				text: 'Selected Users'
			},
			btn: {
				text: 'Create Segment'
			}
		};

		vm.deleteUser = deleteUser;

		function deleteUser(user, index) {
			vm.selectedUsers.splice(index, 1);
		};
	};
} ());