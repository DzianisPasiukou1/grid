(function () {
	'use strict'

	angular
		.module('ext.grid.contentOptions', [
			'ext.common.dropdown',
			'ext.common.search',
			'ext.common.splitButton',
			'ext.common.upload',

			'ext.grid.filter',
			'ext.grid.checkboxSelect'
		])
		.value('extContentOptionsTemplatesPath', 'src/app/ext.grid.modules/ext-content-options/templates/');
} ());