/* global ExtGridActionsPlugin */
(function () {
	'use strict'

	angular
		.module('ext.grid.main')
		.factory('initGridOptionsUtils', initGridOptionsUtils);

	initGridOptionsUtils.$inject = ['extGridOptions', 'extInitDefaultService', '$log', 'extDefine', 'extGridActionsPlugin'];

	function initGridOptionsUtils(extGridOptions, extInitDefaultService, $log, extDefine, ExtGridActionsPlugin) {
		var utils = {};

		utils.getDefault = getDefault;
		utils.initOptions = initOptions;
		utils.reInit = reInit;
		utils.columnsCompare = columnsCompare;
		utils.generateColumn = generateColumn;

		initContent();

		return utils;

		function initContent() {
			extInitDefaultService.init(extGridOptions, utils, 'content');

			utils.content.getPluginActionOpt = getPluginActionOpt;
			utils.content.getPlugins = getPlugins;
			utils.content.generateColumn = generateColumn;
			utils.content.rowCheckAction = rowCheckAction;
			utils.content.gridInit = gridInit;
		};

		function getDefault() {
			return utils.content;
		};

		function initOptions(gridOptions, data, contentOptions, $compile, templatesPath) {
			checkInit(data, contentOptions, $compile, templatesPath);

			var opt = gridOptions || {};

			opt.data = extDefine(opt, utils.content, 'data');
			opt.withDetails = extDefine(opt, utils.content, 'withDetails');
			opt.multiSelect = extDefine(opt, utils.content, 'multiSelect');
			opt.rowTemplate = extDefine(opt.rowTemplate, templatesPath + utils.content.rowTemplate);
			opt.filterOptions = extDefine(opt, utils.content, 'filterOptions');
			opt.rowHeight = extDefine(opt, utils.content, 'rowHeight');
			opt.headerRowHeight = extDefine(opt, utils.content, 'headerRowHeight');
			opt.showFooter = extDefine(opt, utils.content, 'showFooter');
			opt.footerRowHeight = extDefine(opt, utils.content, 'footerRowHeight');
			opt.footerTemplate = extDefine(opt.footerTemplate, templatesPath + utils.content.footerTemplate);
			opt.init = extDefine(opt.init, angular.bind(gridOptions, utils.content.init));
			opt.detailsTemplate = opt.withDetails ? extDefine(opt.detailsTemplate, templatesPath + utils.content.detailsTemplate) : null;
			opt.rowActions = extDefine(opt, utils.content, 'rowActions');
			opt.rowCheckAction = extDefine(opt.rowCheckAction, angular.bind(contentOptions, utils.content.rowCheckAction));
			opt.beforeSelectionChange = extDefine(opt, utils.content, 'beforeSelectionChange');
			opt.pluginActionOpt = extDefine(opt.pluginActionOpt, utils.content.getPluginActionOpt(gridOptions, contentOptions));
			opt.plugins = extDefine(opt.plugins, utils.content.getPlugins(gridOptions, $compile));
			opt.columnDefs = extDefine(opt.columnDefs, utils.content.generateColumn(data, templatesPath));
			opt.reInit = extDefine(opt, utils.content, 'reInit');

			return opt;
		};

		function reInit(data, gridOptions, templatesPath, $compile, $scope, reInit) {
			if (angular.isArray(data)) {
				var oldColumns = angular.copy(gridOptions.columnDefs);
				var newColumns = generateColumn(data, templatesPath);

				if (!columnsCompare(oldColumns, newColumns)) {
					gridOptions.columnDefs = newColumns;

					var grid = angular.element('div[ext-grid]') || angular.element('ext-grid');
					$compile(grid)($scope);
				}
			}
		};

		function columnsCompare(oldCols, newCols) {
			if (!Array.isArray(oldCols) || !Array.isArray(newCols) || oldCols.length != newCols.length) {
				return false;
			}

			for (var i = 0; i < oldCols.length; i++) {
				if (oldCols[i].field != newCols[i].field) {
					return false;
				}
			}

			return true;
		};

		function gridInit() {
			this.isLoading = false;
		};

		function rowCheckAction(data) {
			var isCheckArray = data.filter(function (value) {
				if (value.actions.isCheck) {
					return true;
				}
			});

			if (isCheckArray.length == 0) {
				this.checks.selected = this.checks.actions.noOne;
			}
			else if (isCheckArray.length == data.length) {
				this.checks.selected = this.checks.actions.all;
			}
			else {
				this.checks.selected = this.checks.actions.marked;
			}
		};

		function getPluginActionOpt(gridOptions, contentOptions) {
			var pluginActionOpt = {
				values: gridOptions.rowActions,
				detailsTemplate: gridOptions.detailsTemplate,
				detailsCondition: gridOptions.detailsCondition,
				onCheck: gridOptions.rowCheckAction,
				contentOptions: contentOptions
			};

			return pluginActionOpt;
		};

		function getPlugins(gridOptions, $compile) {
			var plugins = gridOptions.plugins || [];

			var isFindAct = false;
			for (var i = 0; i < plugins.length; i++) {
				if (plugins[i].constructor.name == 'ExtGridActionsPlugin') {
					isFindAct = true;
					break;
				}
			}

			if (!isFindAct) {
				plugins.push(new ExtGridActionsPlugin(gridOptions.pluginActionOpt, $compile));
			}

			return plugins;
		};
		function generateColumn(data, templatesPath) {
			var columns = [];

			columns.push({ field: 'details', displayName: '', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/details.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', sortable: false, width: 60, minWidth: 60, isColumn: true });

			if (data[0]) {
				for (var i = 0; i < data.length; i++) {
					if (data[i].isColumn) {
						return;
					}
				}

				for (var field in data[0]) {
					if (field == '$$hashKey') {
						continue;
					}

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

		function checkInit(data, contentOptions, $compile, templatesPath) {
			checkData(data);
			checkContentOptions(contentOptions);
			checkCompile($compile);
			checkTemplatePath(templatesPath);
		};

		function checkData(data) {
			if (!angular.isArray(data)) {
				$log.warn('Call init grid options utils with wrong data');
			}
		};

		function checkContentOptions(contentOptions) {
			if (!angular.isDefined(contentOptions)) {
				$log.warn('Call init grid options utils with wrong contentOptions');
			}
		};

		function checkCompile($compile) {
			if (!angular.isFunction($compile)) {
				$log.warn('Call init grid options with wrong compile function');
			}
		};

		function checkTemplatePath(templatesPath) {
			if (!angular.isString(templatesPath)) {
				$log.warn('Templates path should be string');
			}
		};
	};
} ());