(function () {
	'use strict'

	angular
		.module('ext.grid.main')
		.controller('ExtGridController', ExtGridController);

	ExtGridController.$inject = ['extGridTemplatesPath', '$compile', '$scope', '$timeout'];

	function ExtGridController(templatesPath, $compile, $scope, $timeout) {
		$scope.options = $scope.options || {};
		$scope.options.data = $scope.options.data || 'data';
		$scope.options.multiSelect = $scope.options.multiSelect || false;
		$scope.options.rowTemplate = $scope.options.rowTemplate || templatesPath + 'grid-templates/row-templates/row-with-detalis.html';
		$scope.options.filterOptions = $scope.options.filterOptions || { filterText: '' };
		$scope.options.rowHeight = $scope.options.rowHeight || 60;
		$scope.options.headerRowHeight = $scope.options.headerRowHeight || 40;
		$scope.options.showFooter = $scope.options.showFooter || true;
		$scope.options.footerRowHeight = $scope.options.footerRowHeight || 30;
		$scope.options.footerTemplate = $scope.options.footerTemplate || templatesPath + 'grid-templates/grid-footer.html';
		$scope.options.init = $scope.options.init || init;
		$scope.options.detailsTemplate = $scope.options.data || templatesPath + 'grid-templates/details-templates/details.html';
		$scope.options.rowActions = $scope.options.rowActions || getRowActions();
		$scope.options.rowCheckAction = $scope.options.rowCheckAction || angular.bind($scope, rowCheckAction);
		$scope.options.beforeSelectionChange = $scope.options.beforeSelectionChange || beforeSelectionChange;
		$scope.options.pluginActionOpt = $scope.options.pluginActionOpt || getPluginActionOpt();
		$scope.options.plugins = getPlugins();
		$scope.options.columnDefs = $scope.options.columnDefs || initColumnDef($scope.data);

		function init() {
			$scope.options.isLoading = false;
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
				values: $scope.options.rowActions,
				detailsTemplate: $scope.options.detailsTemplate,
				detailsCondition: $scope.options.detailsCondition,
				onCheck: $scope.options.rowCheckAction,
				contentOptions: $scope.contentOptions
			};

			return pluginActionOpt;
		};

		function getPlugins() {
			var plugins = $scope.options.plugins || [];

			var isFindAct = false;
			for (var i = 0; i < plugins.length; i++) {
				if (plugins[i].constructor.name == 'ExtGridActionsPlugin') {
					isFindAct = true;
					break;
				}
			}

			if (!isFindAct) {
				plugins.push(new ExtGridActionsPlugin($scope.options.pluginActionOpt, $compile));
			}

			return plugins;
		};

		function initColumnDef(data) {
			var columns = [];

			columns.push({ field: 'details', displayName: '', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/details.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', sortable: false, width: 60, minWidth: 60, isColumn: true });

			if (data[0]) {
				for (var i = 0; i < data.length; i++) {
					if (data[i].isColumn) {
						return;
					}
				}

				for (var field in data[0]) {
					columns.push({
						field: field,
						displayName: field,
						headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html',
						isColumn: true
					})
				}
			}

			columns.push({
				field: 'action', displayName: '', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/action.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', sortable: false, width: 300, minWidth: 150, isColumn: true
			});

			return columns;
		};
	};
} ());