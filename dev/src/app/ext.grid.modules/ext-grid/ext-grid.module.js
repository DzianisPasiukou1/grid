(function () {
	'use strict'

	angular
		.module('ext.grid.main', [
			'ngGrid',
			
			'ext.grid.modal',
			
			'ext.common.dropdown'
		])
		.constant('extGridTemplatesPath', 'src/app/ext.grid.modules/ext-grid/templates/')
		.constant('MENU', {
			parentSelector: '.page-content',
			parentMinWidth: 500
		});
} ());