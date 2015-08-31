(function () {
	'use strict'
	
	angular
		.module('ext.sankey', [
			'ext.sankey.histogram',
			'ext.sankey.mouseOver',
			'ext.sankey.optionsSankey',
			'ext.sankey.overlay',
			'ext.sankey.pageSankey',
			'ext.sankey.dateRange',
			'ext.sankey.multiselect',
			'ext.sankey.navbar',
			'ext.sankey.stealthInput'
		]);
} ());