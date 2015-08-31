(function () {
	'use strict'

	angular
		.module('ext.grid.pageContent')
		.controller('ExtPageContentController', ExtPageContentController);

	ExtPageContentController.$inject = ['$scope', 'initUtils', '$element'];

	function ExtPageContentController($scope, initUtils, $element) {
		var vm = this;

		vm.grid = vm.grid || {};
		vm.contentOptions = vm.contentOptions || {};
		vm.gridOptions = vm.gridOptions || {};
		vm.uiGridOptions = vm.uiGridOptions || {};

		initUtils.init(vm.grid, vm.contentOptions, $element, $scope, vm.data);

		$scope.$watch('vm.contentOptions', contentOptionsChanged);
		$scope.$watch('vm.data', dataChanged);
		$scope.$watch('vm.data.length', lengthChanged);
		$scope.$watch('vm.views.options.selected', viewsChangedvalue);
		$scope.$watch('vm.contentOptions.searchValue', searchValueChanged);

		function contentOptionsChanged(opt) {
			opt = initUtils.initContentOptions(opt, $element, $scope, vm.data);
			//vm.contentOptions = initUtils.refreshContentOptions(opt, vm.data, vm.gridOptions);
		};

		function dataChanged(data) {
			if (Array.isArray(data)) {
				initUtils.refreshData(data);
			}
		};

		function lengthChanged(value) {
			vm.grid.count = value;
		};

		function viewsChangedvalue(value) {
			if (value) {
				vm.contentOptions = initUtils.refreshContentOptions(vm.contentOptions, vm.data, vm.gridOptions);

				if (value.isGrid) {
					initUtils.refreshCheckCallback(vm.gridOptions);
				}
			}
		};

		function searchValueChanged(value) {
			vm.contentOptions.search(value);
		};
	};
} ());