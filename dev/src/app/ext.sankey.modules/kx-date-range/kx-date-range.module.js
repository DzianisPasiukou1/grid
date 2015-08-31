(function () {
	'use strict'

	angular
		.module('ext.sankey.dateRange', [
			'ext.sankey.stealthInput'
		])
		.value('kxDateRangeTemplatesPath', 'src/app/ext.sankey/kx-date-range/templates/');
} ());