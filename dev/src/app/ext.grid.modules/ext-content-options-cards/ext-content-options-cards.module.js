(function () {
	'use strict'

	angular
		.module('ext.grid.contentOptionsCards', [
			'ext.common.datepicker',
			'ext.common.splitButton',
			'ext.common.search',
			'ext.common.searchBase',
			'ext.common.extend',
			
			'ext.grid.filter'
		])
		.value('extContentOptionsCardsTemplatesPath', 'src/app/ext.grid.modules/ext-content-options-cards/templates/');
} ());