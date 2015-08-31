(function () {
	'use strict'

	angular
		.module('ext.common.dropdown', [
			'ext.common.anyOtherClick',
			'ext.common.onFinishRender'
		])
		.value('extDropdownTemplatePath', 'src/app/ext.common/ext-dropdown/templates/');
} ());