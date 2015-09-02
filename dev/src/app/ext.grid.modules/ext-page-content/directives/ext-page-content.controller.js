(function () {
	'use strict'

	angular
		.module('ext.grid.pageContent')
		.controller('ExtPageContentController', ExtPageContentController);

	ExtPageContentController.$inject = ['$scope', 'initPageContent', '$element', '$compile'];

	function ExtPageContentController($scope, initPageContent, $element, $compile) {
		var vm = this;

		vm.grid = vm.grid || {};
		vm.contentOptions = vm.contentOptions || {};
		vm.gridOptions = vm.gridOptions || {};
		vm.uiGridOptions = vm.uiGridOptions || {};

		initPageContent.init(vm.grid, vm.contentOptions, $element, $scope, vm.data);

		$scope.$watch('vm.contentOptions', contentOptionsChanged);
		$scope.$watch('vm.data.length', lengthChanged);
		$scope.$watch('vm.views.options.selected', viewsChangedvalue);
		$scope.$watch('vm.contentOptions.searchValue', searchValueChanged);

		function contentOptionsChanged(opt) {
			opt = initPageContent.initContentOptions(opt, $element, $scope, vm.data);
			//vm.contentOptions = initUtils.refreshContentOptions(opt, vm.data, vm.gridOptions);
		};

		function dataChanged(data) {
			if (angular.isArray(data)) {
				initPageContent.refreshData(data, $scope, $compile);
			}
		};

		function lengthChanged(value) {
			vm.grid.count = value;
		};

		function viewsChangedvalue(value) {
			if (value) {
				vm.contentOptions = initPageContent.refreshContentOptions(vm.contentOptions, vm.data, vm.gridOptions);

				if (value.isGrid) {
					initPageContent.refreshCheckCallback(vm.gridOptions);
				}
			}
		};

		function searchValueChanged(value) {
			vm.contentOptions.search(value);
		};
	};
} ());