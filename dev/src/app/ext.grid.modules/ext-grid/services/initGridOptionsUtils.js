(function () {
	'use strict';

	angular
		.module('ext.grid.main')
		.factory('initGridOptionsUtils', initGridOptionsUtils);

	initGridOptionsUtils.$inject = ['extGridOptions', 'extInitDefaultService', '$log', 'extDefine', 'extGridActionsPlugin'];

	/**
	 * Description
	 * @method initGridOptionsUtils
	 * @param {} extGridOptions
	 * @param {} extInitDefaultService
	 * @param {} $log
	 * @param {} extDefine
	 * @param {} ExtGridActionsPlugin
	 * @return utils
	 */
	function initGridOptionsUtils(extGridOptions, extInitDefaultService, $log, extDefine, ExtGridActionsPlugin) {
		var utils = {};

		utils.getDefault = getDefault;
		utils.initOptions = initOptions;
		utils.reInit = reInit;
		utils.columnsCompare = columnsCompare;
		utils.generateColumn = generateColumn;

		initContent();

		return utils;

		/**
		 * Description
		 * @method initContent
		 * @return 
		 */
		function initContent() {
			extInitDefaultService.init(extGridOptions, utils, 'content');

			utils.content.getPluginActionOpt = getPluginActionOpt;
			utils.content.getPlugins = getPlugins;
			utils.content.generateColumn = generateColumn;
			utils.content.rowCheckAction = rowCheckAction;
			utils.content.gridInit = gridInit;
		};

		/**
		 * Description
		 * @method getDefault
		 * @return MemberExpression
		 */
		function getDefault() {
			return utils.content;
		};

		/**
		 * Description
		 * @method initOptions
		 * @param {} gridOptions
		 * @param {} data
		 * @param {} contentOptions
		 * @param {} $compile
		 * @param {} templatesPath
		 * @return opt
		 */
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

		/**
		 * Description
		 * @method reInit
		 * @param {} data
		 * @param {} gridOptions
		 * @param {} templatesPath
		 * @param {} $scope
		 * @param {} $scope
		 * @param {} reInit
		 * @return 
		 */
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

		/**
		 * Description
		 * @method columnsCompare
		 * @param {} oldCols
		 * @param {} newCols
		 * @return Literal
		 */
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

		/**
		 * Description
		 * @method gridInit
		 * @return 
		 */
		function gridInit() {
			this.isLoading = false;
		};

		/**
		 * Description
		 * @method rowCheckAction
		 * @param {} data
		 * @return 
		 */
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

		/**
		 * Description
		 * @method getPluginActionOpt
		 * @param {} gridOptions
		 * @param {} contentOptions
		 * @return pluginActionOpt
		 */
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

		/**
		 * Description
		 * @method getPlugins
		 * @param {} gridOptions
		 * @param {} $compile
		 * @return plugins
		 */
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
		/**
		 * Description
		 * @method generateColumn
		 * @param {} data
		 * @param {} templatesPath
		 * @return columns
		 */
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

		/**
		 * Description
		 * @method checkInit
		 * @param {} data
		 * @param {} contentOptions
		 * @param {} $compile
		 * @param {} templatesPath
		 * @return 
		 */
		function checkInit(data, contentOptions, $compile, templatesPath) {
			checkData(data);
			checkContentOptions(contentOptions);
			checkCompile($compile);
			checkTemplatePath(templatesPath);
		};

		/**
		 * Description
		 * @method checkData
		 * @param {} data
		 * @return 
		 */
		function checkData(data) {
			if (!angular.isArray(data)) {
				$log.warn('Call init grid options utils with wrong data');
			}
		};

		/**
		 * Description
		 * @method checkContentOptions
		 * @param {} contentOptions
		 * @return 
		 */
		function checkContentOptions(contentOptions) {
			if (!angular.isDefined(contentOptions)) {
				$log.warn('Call init grid options utils with wrong contentOptions');
			}
		};

		/**
		 * Description
		 * @method checkCompile
		 * @param {} $compile
		 * @return 
		 */
		function checkCompile($compile) {
			if (!angular.isFunction($compile)) {
				$log.warn('Call init grid options with wrong compile function');
			}
		};

		/**
		 * Description
		 * @method checkTemplatePath
		 * @param {} templatesPath
		 * @return 
		 */
		function checkTemplatePath(templatesPath) {
			if (!angular.isString(templatesPath)) {
				$log.warn('Templates path should be string');
			}
		};
	};
} ());