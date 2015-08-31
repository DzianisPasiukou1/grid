(function () {
	'use strict'

	angular
		.module('ext.grid.main')
		.controller('ExtGridController', ExtGridController);

	ExtGridController.$inject = ['extGridTemplatesPath', '$compile'];

	function ExtGridController(templatesPath, $compile) {
		var vm = this;

		vm.options = vm.options || {};
		vm.options.data = vm.options.data || [];
		vm.options.multiSelect = vm.options.multiSelect || false;
		vm.options.rowTemplate = vm.options.rowTemplate || templatesPath + 'grid-templates/row-templates/row-with-detalis.html';
		vm.options.filterOptions = vm.options.filterOptions || { filterText: '' };
		vm.options.rowHeight = vm.options.rowHeight || 60;
		vm.options.headerRowHeight = vm.options.headerRowHeight || 40;
		vm.options.showFooter = vm.options.showFooter || true;
		vm.options.footerRowHeight = vm.options.footerRowHeight || 30;
		vm.options.footerTemplate = vm.options.footerTemplate || templatesPath + 'grid-templates/grid-footer.html';
		vm.options.init = vm.options.init || init;
		vm.options.detailsTemplate = vm.options.data || templatesPath + 'grid-templates/details-templates/details.html';
		vm.options.rowActions = vm.options.rowActions || getRowActions();
		vm.options.rowCheckAction = vm.options.rowCheckAction || rowCheckAction;
		vm.options.beforeSelectionChange = vm.options.beforeSelectionChange || beforeSelectionChange;
		vm.options.pluginActionOpt = vm.options.pluginActionOpt || getPluginActionOpt();
		vm.options.plugins = getPlugins();

		function init() {
			vm.options.isLoading = false;
		};

		function getRowActions() {
			var rowActions = {
				options: {
					label: 'Actions',
					values: [{ label: 'Edit', isEdit: true, priority: 4 }, { label: 'Copy', isCopy: true, priority: 3 }, { label: 'History', isHistory: true, priority: 2 }, { label: 'Delete', isDelete: true, priority: 1 }],
					isMenu: true
				},
				isShow: false
			};

			return rowActions;
		};

		function rowCheckAction(data) {
			var isCheckArray = data.filter(function (value) {
				if (value.actions.isCheck) {
					return true;
				}
			});

			if (isCheckArray.length == 0) {
				this.contentOptions.checks.options.selected = this.contentOptions.checks.options.actions.noOne;
			}
			else if (isCheckArray.length == data.length) {
				this.contentOptions.checks.options.selected = this.contentOptions.checks.options.actions.all;
			}
			else {
				this.contentOptions.checks.options.selected = this.contentOptions.checks.options.actions.marked;
			}
		};

		function beforeSelectionChange(row, event) {
			return false;
		};

		function getPluginActionOpt() {
			var pluginActionOpt = {
				values: vm.options.rowActions,
				detailsTemplate: vm.options.detailsTemplate,
				detailsCondition: vm.options.detailsCondition,
				onCheck: vm.options.rowCheckAction,
				contentOptions: vm.contentOptions
			};

			return pluginActionOpt;
		};

		function getPlugins() {
			vm.options.plugins = vm.options.plugins || [];

			var isFindAct = false;
			for (var i = 0; i < vm.options.plugins.length; i++) {
				if (vm.options.plugins[i].constructor.name == 'ExtGridActionsPlugin') {
					isFindAct = true;
					break;
				}
			}

			if (!isFindAct) {
				vm.options.plugins.push(new ExtGridActionsPlugin(vm.pluginActionOpt, $compile));
			}
		}
	};
} ());