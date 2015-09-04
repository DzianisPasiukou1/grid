(function () {
	'use strict'

	angular
		.module('ext.grid.pageContent')
		.controller('ExtPageContentController', ExtPageContentController);

	ExtPageContentController.$inject = ['$scope', 'initPageContent', '$element', '$compile', 'extGridTemplatesPath'];

	function ExtPageContentController($scope, initPageContent, $element, $compile, extGridTemplatesPath) {
		var vm = this;

		vm.grid = vm.grid || {};
		vm.data = vm.data || [];
		vm.contentOptions = vm.contentOptions || {};
		vm.gridOptions = vm.gridOptions || {};
		vm.uiGridOptions = vm.uiGridOptions || {};

		initPageContent.init(vm.grid, vm.contentOptions, vm.gridOptions, $element, $scope, vm.data, $compile, extGridTemplatesPath);

		$scope.$watch('vm.data', dataChanged);
		$scope.$watch('vm.data.length', lengthChanged);
		$scope.$watch('vm.grid.views.options.selected', viewsChangedvalue);
		$scope.$watch('vm.contentOptions.searchValue', searchValueChanged);

		function dataChanged(data) {
			if (angular.isArray(data)) {
				initPageContent.refreshContentOptions(vm.contentOptions, data, vm.gridOptions, vm.grid.views);
				initPageContent.refreshData(vm.contentOptions);
			}
		};

		function lengthChanged(value) {
			vm.grid.count = value;
		};

		function viewsChangedvalue(value) {
			if (value) {
				initPageContent.refreshContentOptions(vm.contentOptions, vm.data, vm.gridOptions, vm.grid.views);

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