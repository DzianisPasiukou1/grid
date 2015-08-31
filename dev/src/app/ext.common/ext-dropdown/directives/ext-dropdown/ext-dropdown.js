(function () {
	'use strict'
	
	angular
		.module('ext.common.dropdown')
		.directive('extDropdown', extDropdown);
	
	extDropdown.$inject = ['extDropdownTemplatePath'];
	
	function extDropdown(templatesPath) {
		var directive = {
			restrict: 'EA',
			scope: {
				options: '=extDropdown'
			},
			controller: 'ExtDropdownController',
			controllerAs: 'vm',
			bindToController: true,
			templateUrl: templatesPath + 'ext-dropdown.html'
		};
		
		return directive;
	};
}());