(function () {
	'use strict';

	angular
		.module('ext.common.splitButton')
		.directive('extSplitButton', extSplitButton);

	extSplitButton.$inject = ['extSplitButtonTemplatesPath'];

	/**
	 * Description
	 * @method extSplitButton
	 * @param {} templatesPath
	 * @return directive
	 */
	function extSplitButton(templatesPath) {
		var directive = {
			restrict: 'E',
			scope: {
				actions: '=',
				selected: '=',
				search: '=',
				typehead: '='
			},
			templateUrl: templatesPath + 'ext-split-button.html',
			controller: 'ExtSplitButtonControler',
			controllerAs: 'vm',
			bindToController: true
		};

		return directive;
	};
} ());