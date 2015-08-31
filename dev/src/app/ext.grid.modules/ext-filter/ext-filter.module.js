(function () {
	'use strict'

	angular
		.module('ext.grid.filter', [
			'ext.common.anyOtherClick',
			'ext.common.resizeOn'
		])
		.value('extFilterTemplatesPath', 'src/app/ext.grid.modules/ext-filter/templates/');
} ());