(function () {
	'use strict';

	angular
		.module('ext.sankey.optionsSankey', [
			'ext.sankey.dateRange',
			'ext.sankey.multiselect',
			
			'ui.select2'
		])
		.value('extOptionsSankeyTemplatesPath', 'src/app/ext.sankey.modules/ext-options-sankey/templates/');
} ());