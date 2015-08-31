(function () {
	'use strict'

	angular
		.module('ext.sankey.main', [
			'ext.common.maxHeighter'
		])
		.value('extSankeyTemplatesPath', 'src/app/ext.sankey.modules/ext-sankey/templates/');
} ());