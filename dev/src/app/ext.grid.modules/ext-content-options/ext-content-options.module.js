(function () {
	'use strict';

	angular
		.module('ext.grid.contentOptions', [
			'ext.common.dropdown',
			'ext.common.search',
			'ext.common.splitButton',
			'ext.common.upload',
			'ext.common.initDefault',
			'ext.common.searchBase',
			'ext.common.extend',
			'ext.common.define',

			'ext.grid.filter',
			'ext.grid.checkboxSelect'
		])
		.constant('extContentOptionsTemplatesPath', 'src/app/ext.grid.modules/ext-content-options/templates/');
} ());