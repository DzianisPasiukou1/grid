(function () {
	'use strict'

	angular
		.module('ext.grid.pageContent', [
			'ext.common.dropdown',
			'ext.common.loading',
			'ext.common.define',
			'ext.common.logger',

			'ext.grid.contentOptions',
			'ext.grid.main',
			'ext.grid.uiGrid'
		])
		.value('extPageContentTemplatesPath', 'src/app/ext.grid.modules/ext-page-content/templates/');
} ());