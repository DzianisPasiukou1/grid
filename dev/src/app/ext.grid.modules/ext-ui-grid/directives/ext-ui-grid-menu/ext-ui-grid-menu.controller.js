﻿(function () {
	'use strict'

	angular
		.module('ext.grid.uiGrid')
		.controller('ExtUiGridMenuController', ExtUiGridMenuController);

	ExtUiGridMenuController.$inject = ['MENU', 'uiGridGridMenuService', '$window'];

	function ExtUiGridMenuController(MENU, uiGridGridMenuService, $window) {
		var vm = this;

		vm.options = vm.options || {};
		vm.options.parentSelector = vm.options.parentSelector || MENU.parentSelector;
		vm.options.parentMinWidth = vm.options.parentMinWidth || MENU.parentMinWidth;
		vm.options.enableGridMenu = vm.options.showResponsMenu;

		vm.getTotalWidth = getTotalWidth;
		vm.changeMinWidth = changeMinWidth;
		vm.resize = resize;
		vm.columnVisibilityChanged = columnVisibilityChanged;

		function getTotalWidth() {
			var totalWidth = vm.gridApi.grid.columns.reduce(function (a, b) {
				if (b.visible) {
					return a + b.minWidth;
				}
				else {
					return a;
				}
			}, 0);

			return totalWidth;
		};

		function changeMinWidth(totalWidth) {
			if (angular.element('body')[0].scrollWidth < totalWidth) {
				angular.element(vm.options.parentSelector).css('minWidth', totalWidth + 'px');
			}
			else {
				angular.element(vm.options.parentSelector).css('minWidth', vm.options.parentMinWidth + 'px');
			}
		};

		function resize(totalWidth) {
			if (angular.element('body')[0].scrollWidth < totalWidth) {
				for (var i = vm.gridApi.grid.columns.length - 2; i > 1; i--) {
					if (vm.gridApi.grid.columns[i].visible) {
						uiGridGridMenuService.toggleColumnVisibility(vm.gridApi.grid.columns[i]);
						totalWidth -= vm.gridApi.grid.columns[i].minWidth;
					}
					if (angular.element($window).width() > totalWidth) {
						break;
					}
				}
			}
			else {
				for (var i = 0; i < vm.gridApi.grid.columns.length; i++) {
					if (!vm.gridApi.grid.columns[i].visible) {
						if (angular.element($window).width() < totalWidth + vm.gridApi.grid.columns[i].minWidth) {
							break;
						}
						uiGridGridMenuService.toggleColumnVisibility(vm.gridApi.grid.columns[i]);
						totalWidth += vm.gridApi.grid.columns[i].minWidth;
					}
				}
			}
		};

		function columnVisibilityChanged() {
			var totalWidth = vm.getTotalWidth();

			vm.changeMinWidth(totalWidth);
		};
	};
} ());