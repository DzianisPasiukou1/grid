(function () {
	'use strict';

	angular
		.module('ext.grid.cards', [
			'ext.common.grTemplate',
			'ext.common.numberFormat'
		])
		.constant('extCardsTemplatesPath', 'src/app/ext.grid.modules/ext-cards/templates/');
} ());