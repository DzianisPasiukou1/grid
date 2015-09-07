(function () {
	'use strict'

	angular
		.module('ext.grid.uiGrid', [
			'ui.grid',
			'ui.grid.selection',
			'ui.grid.expandable',
			
			'ext.grid.modal',
			
			'ext.common.dropdown',
			'ext.common.define'
		])
		.value('extUiGridTemplatesPath', '/src/app/ext.grid.modules/ext-ui-grid/templates/')
		.constant('MENU', {
			parentSelector: '.page-content',
			parentMinWidth: 500
		});
} ());