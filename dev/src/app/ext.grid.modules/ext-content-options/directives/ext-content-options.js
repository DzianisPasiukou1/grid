(function () {
	'use strict'

	angular
		.module('ext.grid.contentOptions')
		.directive('extContentOptions', extContentOptions);

	extContentOptions.$inject = ['extContentOptionsTemplatesPath'];

	function extContentOptions(templatesPath) {
		var directive = {
			restrict: 'EA',
			controller: 'ExtContentOptionsController',
			controllerAs: 'vm',
			bindToController: true,
			scope: {
				options: '='
			},
			templateUrl: templatesPath + 'ext-content-options.html'
		};

		return directive;
	};
} ());