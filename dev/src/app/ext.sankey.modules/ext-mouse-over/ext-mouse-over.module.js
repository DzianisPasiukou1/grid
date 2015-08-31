(function () {
	'use strict'

	angular
		.module('ext.sankey.mouseOver', [
			'ext.common.grTemplate'
		])
		.value('extMouseOverTemplatesPath', 'src/app/ext.sankey.modules/ext-mouse-over/templates/');
} ());