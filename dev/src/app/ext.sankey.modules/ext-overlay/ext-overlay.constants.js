(function () {
	'use strict';

	angular
		.module('ext.sankey.overlay')
		.constant('OVERLAY', {
			overlaySelector: '.custom-overlay',
			heighterSelector: '#chart[ext-max-heighter]',
			alignTopSelector: '.page-content__cards',
			toggleMinWidth: 30
		});
} ());