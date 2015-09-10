(function () {
	'use strict';

	angular
		.module('ext.sankey.histogram')
		.controller('ExtHistogramController', ExtHistogramController);

	ExtHistogramController.$inject = ['$scope'];

	/**
	 * Description
	 * @method ExtHistogramController
	 * @param {} $scope
	 * @return 
	 */
	function ExtHistogramController($scope) {
		var vm = this;

		vm.selectedUsers = [];
		vm.select = select;

		/**
		 * Description
		 * @method select
		 * @param {} user
		 * @return 
		 */
		function select(user) {
			if (user.name != "1") {
				vm.selectedUsers.push({ touchpoints: user.name + ' touchpoints' });
			}
			else {
				vm.selectedUsers.push({ touchpoints: user.name + ' touchpoint' });
			}
			
			$scope.$apply();
		};
	};
} ());