(function () {
	'use strict'

	angular
		.module('ext.grid.pageContent')
		.factory('initGridOptionsUtilsFactory', initGridOptionsUtilsFactory);

	initGridOptionsUtilsFactory.$inject = ['CONTENT'];

	function initGridOptionsUtilsFactory(CONTENT) {
		var utils = {};

		utils.content = {};
		utils.content.data = CONTENT.ngGridOpt.data;
		utils.content.multiSelect = CONTENT.ngGridOpt.multiSelect;
		utils.content.rowTemplate = CONTENT.ngGridOpt.rowTemplate;
		utils.content.filterOptions = CONTENT.ngGridOpt.filterOptions;
		utils.content.rowHeight = CONTENT.ngGridOpt.rowHeight;
		utils.content.headerRowHeight = CONTENT.ngGridOpt.headerRowHeight;
		utils.content.showFooter = CONTENT.ngGridOpt.showFooter;
		utils.content.footerRowHeight = CONTENT.ngGridOpt.footerRowHeight;
		utils.content.footerTemplate = CONTENT.ngGridOpt.footerTemplate;
		utils.content.detailsTemplate = CONTENT.ngGridOpt.detailsTemplate;
		utils.content.rowActions = CONTENT.ngGridOpt.rowActions;
		utils.content.rowCheckAction = CONTENT.ngGridOpt.rowCheckAction;
		utils.content.rowCheckAction = CONTENT.ngGridOpt.rowCheckAction;

		utils.initGridOpt = initGridOpt;

		return utils;

		function initGridOpt(opt) {
			var gridOptions = opt || {};

			gridOptions.data = gridOptions.data || this.content.data;
			gridOptions.multiSelect = gridOptions.multiSelect || this.content.multiSelect;
			gridOptions.rowTemplate = gridOptions.rowTemplate || this.content.rowTemplate;

			return gridOptions;
		};
	};
} ());