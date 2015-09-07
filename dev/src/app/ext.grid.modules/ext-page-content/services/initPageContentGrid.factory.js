(function () {
	'use strict'

	angular
		.module('ext.grid.pageContent')
		.factory('initPageContentGrid', initPageContentGrid);

	initPageContentGrid.$inject = ['extDefine'];

	function initPageContentGrid(extDefine) {
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
		utils.content.name = 'Default grid';

		utils.initGrid = initGrid;

		return utils;

		function initGrid(grid) {
			var initGrid = extDefine(grid, {});

			initGrid.exports = extDefine(initGrid, utils.content, 'exports');
			initGrid.views = extDefine(initGrid, utils.content, 'views');
			initGrid.name = extDefine(initGrid, utils.content, 'name');

			return initGrid;
		};
	};
} ());