(function () {
	'use strict'

	angular
		.module('ext.sankey.overlay', [
			'ext.common.define'
		])
		.value('extOverlayTemplatesPath', 'src/app/ext.sankey.modules/ext-overlay/templates/');
} ());