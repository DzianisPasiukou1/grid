(function () {
	'use strict'

	angular
		.module('ext.sankey.overlay', [
			'ext.common.define',
			'ext.common.window'
		])
		.value('extOverlayTemplatesPath', 'src/app/ext.sankey.modules/ext-overlay/templates/');
} ());