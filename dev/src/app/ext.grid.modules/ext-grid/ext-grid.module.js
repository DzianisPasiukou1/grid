(function () {
	'use strict'

	angular
		.module('ext.grid.main', [
			'ngGrid',
			'ext.common.dropdown'
		])
		.value('extGridTemplatesPath', 'src/app/ext.grid.modules/ext-grid/templates/')
		.constant('MENU', {
			parentSelector: '.page-content',
			parentMinWidth: 500
		});
} ());