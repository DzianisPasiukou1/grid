(function () {
	'use strict';

	angular
		.module('ext.common.grTemplate')
		.directive('grTemplate', grTemplate);

	grTemplate.$inject = ['grTemplateService', 'extGrTemplateTemplatesPath'];

	/**
	 * Description
	 * @method grTemplate
	 * @param {} grTemplateService
	 * @param {} templatesPath
	 * @return grTemplateDirective
	 */
	function grTemplate(grTemplateService, templatesPath) {

		var grTemplateDirective = {
			restrict: 'EAC',
			scope: {
				template: '=grTemplate',
				name: '@grName'
			},
			replace: true,
			templateUrl: templatesPath + 'gr-template.html',
			link: link
		};

		return grTemplateDirective;

		/**
		 * Description
		 * @method link
		 * @param {} scope
		 * @param {} element
		 * @param {} attrs
		 * @return 
		 */
		function link(scope, element, attrs) {
			grTemplateService.put(scope.template, scope.name);

			scope.templateUrl = scope.name;
		};
	};
} ());