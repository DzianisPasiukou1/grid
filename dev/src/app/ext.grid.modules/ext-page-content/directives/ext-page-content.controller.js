(function () {
	'use strict';

	angular
		.module('ext.grid.pageContent')
		.controller('ExtPageContentController', ExtPageContentController);

	ExtPageContentController.$inject = ['$scope', 'initPageContent', '$element', '$compile', 'extGridTemplatesPath', 'loggerService'];

	/**
	 * Description
	 * @method ExtPageContentController
	 * @param {} $compile
	 * @param {} initPageContent
	 * @param {} $compile
	 * @param {} $compile
	 * @param {} extGridTemplatesPath
	 * @param {} logger
	 * @return 
	 */
	function ExtPageContentController($scope, initPageContent, $element, $compile, extGridTemplatesPath, logger) {
		var vm = this;

		vm.grid = logger.defineObj('Grid is not defined', vm.grid, {});
		vm.data = logger.defineObj('Data is not defined', vm.data, []);
		vm.contentOptions = logger.defineObj('Content options is not defined', vm.contentOptions, {});
		vm.gridOptions = logger.defineObj('Grid options is not defined', vm.gridOptions, {});
		vm.uiGridOptions = logger.defineObj('Ui grid options is not defined', vm.uiGridOptions, {});

		initPageContent.init(vm.grid, vm.contentOptions, vm.gridOptions, $element, $scope, vm.data, $compile, extGridTemplatesPath);

		$scope.$watch('vm.data', dataChanged);
		$scope.$watch('vm.data.length', lengthChanged);
		$scope.$watch('vm.grid.views.options.selected', viewsChangedvalue);

		/**
		 * Description
		 * @method dataChanged
		 * @param {} data
		 * @return 
		 */
		function dataChanged(data) {
			if (angular.isArray(data)) {
				initPageContent.refreshContentOptions(vm.contentOptions, data, vm.gridOptions, vm.grid.views);
				initPageContent.refreshData(vm.contentOptions);
			}
		};

		/**
		 * Description
		 * @method lengthChanged
		 * @param {} value
		 * @return 
		 */
		function lengthChanged(value) {
			vm.grid.count = value;
		};

		/**
		 * Description
		 * @method viewsChangedvalue
		 * @param {} value
		 * @return 
		 */
		function viewsChangedvalue(value) {
			if (value) {
				initPageContent.refreshContentOptions(vm.contentOptions, vm.data, vm.gridOptions, vm.grid.views);

				if (value.isGrid) {
					initPageContent.refreshCheckCallback(vm.gridOptions);
				}
			}
		};
	};
} ());