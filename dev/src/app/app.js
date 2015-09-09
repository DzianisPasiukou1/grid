//# require ('/ext.extensions/center.js','/ext.extensions/cursorMessage.js','/ext.extensions/on-position-changed.js','/ext.extensions/sankey.js' ,'/ext.extensions/window-size.js', '/ext.grid.modules/ext-grid/directvies/ext-grid/ext-grid-actions.plugin.js')

(function () {
	'use strict'

	angular
		.module('ext', [
			'ext.common',
			'ext.grid',
			'ext.sankey'
		]);
} ());