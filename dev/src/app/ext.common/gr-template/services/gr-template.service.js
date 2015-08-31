(function () {
	'use strict'

	angular
		.module('ext.common.grTemplate')
		.service('grTemplateService', grTemplateService);

	grTemplateService.$inject = ['$http', '$templateCache'];

	function grTemplateService($http, $templateCache) {
		this.put = put;

		function put(template, name) {
			$templateCache.put(name, template)
		};
	};
} ());