(function () {
	'use strict'
	
	angular
		.module('ext.sankey.pageSankey', [
			'ext.sankey.optionsSankey',
			'ext.sankey.main',
			'ext.sankey.overlay',
			'ext.sankey.histogram',
			
			'ext.grid.cards'
		])
		.value('extPagesankeyTemplatesPath', 'src/app/ext.sankey.modules/ext-page-sankey/templates/');
} ());