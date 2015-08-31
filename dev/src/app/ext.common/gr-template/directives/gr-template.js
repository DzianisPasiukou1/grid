(function () {
	'use strict'

	angular
		.module('ext.common.grTemplate')
		.directive('grTemplate', grTemplate);

	grTemplate.$inject = ['myTemplateService', 'extGrTemplateTemplatesPath'];

	function grTemplate(myTemplateService, templatesPath) {

		var grTemplateDirective = {
			restrict: 'EAC',
			scope: {
				template: '=grTemplate',
				name: '@grName'
			},
			replace: true,
			templateUrl: templatesPath + 'gr-template.html',
			link: grTemlateLink
		};

		return grTemplateDirective;

		function grTemlateLink(scope, element, attrs) {
			myTemplateService.put(scope.template, scope.name);

			scope.templateUrl = scope.name;
		};
	};
} ());