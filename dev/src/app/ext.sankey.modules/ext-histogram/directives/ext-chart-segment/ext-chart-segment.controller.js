(function () {
	'use strict';

	angular
		.module('ext.sankey.histogram')
		.controller('ExtChartSegmentController', ExtChartSegmentController);

	ExtChartSegmentController.$inject = [];

	/**
	 * Description
	 * @method ExtChartSegmentController
	 * @return 
	 */
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

		/**
		 * Description
		 * @method deleteUser
		 * @param {Object} user
		 * @param {Number} index
		 * @return 
		 */
		function deleteUser(user, index) {
			vm.selectedUsers.splice(index, 1);
		};
	};
} ());