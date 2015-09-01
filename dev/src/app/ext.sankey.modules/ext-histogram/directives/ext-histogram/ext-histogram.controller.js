(function () {
	'use strict'

	angular
		.module('ext.sankey.histogram')
		.controller('ExtHistogramController', ExtHistogramController);

	ExtHistogramController.$inject = ['$scope'];

	function ExtHistogramController($scope) {
		var vm = this;

		vm.selectedUsers = [];
		vm.select = select;

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