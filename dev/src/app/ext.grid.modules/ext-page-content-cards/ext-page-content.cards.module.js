(function () {
	'use strict'
	
	angular
		.module('ext.grid.pageContentCards', [
			'ext.common.dropdown',
			'ext.common.logger',
			'ext.common.counter',
			
			'ext.grid.contentOptionsCards',
			'ext.grid.cards',
			'ext.grid.uiGrid'
		])
		.constant('extPageContentCardsTemplatesPath', 'src/app/ext.grid.modules/ext-page-content-cards/templates/');
} ());