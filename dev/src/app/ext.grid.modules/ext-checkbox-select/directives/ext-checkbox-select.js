(function () {
	'use strict'

	angular
		.module('ext.grid.checkboxSelect')
		.directive('extCheckboxSelect', extCheckboxSelect);

	extCheckboxSelect.$inject = ['extCheckboxSelectTemplatesPath'];

	function extCheckboxSelect(templatesPath) {
		var directive = {
			restrict: 'EA',
			scope: {
				options: '=extCheckboxSelect'
			},
			replace: true,
			templateUrl: templatesPath + 'ext-checkbox-select.html',
			controller: 'ExtCheckboxSelectController',
			controllerAs: 'vm',
			bindToController: true
		};

		return directive;
	};
} ());