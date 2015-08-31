(function () {
	'use strict'

	angular
		.module('ext.grid.contentOptionsCards', [
			'ext.common.datepicker',
			'ext.common.splitButton',
			'ext.common.search',
			
			'ext.grid.filter'
		])
		.value('extContentOptionsCardsTemplatesPath', 'src/app/ext.grid.modules/ext-content-options-cards/templates/');
} ());