(function () {
	'use strict'

	angular
		.module('ext.sankey.pageSankey', [
			'ext.sankey.optionsSankey',
			'ext.sankey.main',
			'ext.sankey.overlay',
			'ext.sankey.histogram',

			'ext.grid.cards',

			'ext.common.logger',
			'ext.common.counter',
			'ext.common.upload',
			'ext.common.define'
		])
		.constant('extPagesankeyTemplatesPath', 'src/app/ext.sankey.modules/ext-page-sankey/templates/');
} ());