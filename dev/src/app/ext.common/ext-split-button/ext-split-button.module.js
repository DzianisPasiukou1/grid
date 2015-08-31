(function () {
	'use strict'

	angular
		.module('ext.common.splitButton', [
			'ext.common.anyOtherClick'
		])
		.value('extSplitButtonTemplatesPath', 'src/app/ext.common/ext-split-button/templates/');
} ());