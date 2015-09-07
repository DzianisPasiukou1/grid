(function () {
	'use strict'

	angular
		.module('ext.sankey.mouseOver', [
			'ext.common.grTemplate',
			'ext.common.define'
		])
		.value('extMouseOverTemplatesPath', 'src/app/ext.sankey.modules/ext-mouse-over/templates/');
} ());