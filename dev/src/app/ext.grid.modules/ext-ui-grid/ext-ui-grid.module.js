(function () {
	'use strict'

	angular
		.module('ext.grid.uiGrid', [
			'ui.grid',
			'ui.grid.selection',
			'ui.grid.expandable',
			
			'ext.common.dropdown'
		])
		.value('extUiGridTemplatesPath', '/src/app/ext.grid.modules/ext-ui-grid/templates/')
		.constant('MENU', {
			parentSelector: '.page-content',
			parentMinWidth: 500
		});
} ());