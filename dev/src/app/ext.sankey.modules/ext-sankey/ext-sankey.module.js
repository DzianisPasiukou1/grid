(function () {
	'use strict'

	angular
		.module('ext.sankey.main', [
			'ext.common.maxHeighter',
			
			'ext.sankey.mouseOver'
		])
		.value('extSankeyTemplatesPath', 'src/app/ext.sankey.modules/ext-sankey/templates/');
} ());