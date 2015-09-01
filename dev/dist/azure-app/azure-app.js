(function () {
	'use strict'

	angular
		.module('azureApp', [
			'ext',
			'ngRoute'
		])
		.constant('templatesPath', 'dist/azure-app/templates/')
		.constant('DATA', {
			count: 100,
			startDate: new Date(2000, 1, 1)
		});
} ());