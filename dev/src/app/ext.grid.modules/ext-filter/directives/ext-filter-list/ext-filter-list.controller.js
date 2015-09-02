(function () {
	'use strict'

	angular
		.module('ext.grid.filter')
		.controller('ExtFilterListController', ExtFilterListController);

	ExtFilterListController.$inject = ['$scope'];

	function ExtFilterListController($scope) {
		$scope.filter = filter;

		function filter() {
			$scope.isFiltrate = true;
		}
	};
} ());