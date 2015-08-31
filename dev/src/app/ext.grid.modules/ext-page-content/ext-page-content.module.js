(function () {
	'use strict'

	angular
		.module('ext.grid.pageContent', [
			'ext.common.dropdown',
			
			'ext.grid.contentOptions',
			'ext.grid.main',
			'ext.grid.uiGrid'
		])
		.value('extPageContentTemplatesPath', 'src/app/ext.grid.modules/ext-page-content/templates/');
} ());