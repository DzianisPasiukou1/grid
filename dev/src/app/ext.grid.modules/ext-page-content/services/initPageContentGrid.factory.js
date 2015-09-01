(function () {
	'use strict'

	angular
		.module('ext.grid.pageContent')
		.factory('initPageContentGrid', initPageContentGrid);

	initPageContentGrid.$inject = [];

	function initPageContentGrid() {
		var utils = {};
		
		utils.content = {};

		utils.content.exports = {
			options: {
				label: 'Export to: ',
				values: [{ label: 'Excel', isExcel: true }, { label: 'Pdf', isPdf: true }],
				callback: function (action) {
				}
			}
		};
		utils.content.views = {
			options: {
				label: 'View: ',
				values: [{ label: 'Ng Grid', isGrid: true, isTiles: false }, { label: 'Tiles', isGrid: false, isTiles: true }, { label: 'UI Grid', isUiGrid: true }],
				callback: function (action) {
				}
			}
		};
		utils.content.gridName = 'Default grid';

		utils.initGrid = initGrid;

		return utils;

		function initGrid(grid) {
			var initGrid = grid || {};

			initGrid.exports = initGrid.exports || utils.content.exports;
			initGrid.views = initGrid.views || utils.content.views;
			initGrid.gridName = initGrid.gridName || utils.content.gridName;

			return initGrid;
		};
	};
} ());