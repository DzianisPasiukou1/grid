(function () {
	'use strict'

	angular
		.module('ext.common.grTemplate')
		.directive('grTemplate', grTemplate);

	grTemplate.$inject = ['grTemplateService', 'extGrTemplateTemplatesPath'];

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

		function link(scope, element, attrs) {
			grTemplateService.put(scope.template, scope.name);

			scope.templateUrl = scope.name;
		};
	};
} ());