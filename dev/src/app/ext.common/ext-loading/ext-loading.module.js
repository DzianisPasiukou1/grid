(function () {
	'use strict'
	angular
		.module('ext.common.loading', [])
		.constant('LOADING', {
			parentSelector: '.page-content__body'
		})
		.value('extLoadingTemplatesPath', 'src/app/ext.common/ext-loading/templates/');
} ());