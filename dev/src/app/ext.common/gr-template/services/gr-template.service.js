(function () {
	'use strict';

	angular
		.module('ext.common.grTemplate')
		.service('grTemplateService', grTemplateService);

	grTemplateService.$inject = ['$http', '$templateCache'];

	/**
	 * Description
	 * @method grTemplateService
	 * @param {} $templateCache
	 * @param {} $templateCache
	 * @return 
	 */
	function grTemplateService($http, $templateCache) {
		this.put = put;

		/**
		 * Description
		 * @method put
		 * @param {} template
		 * @param {} name
		 * @return 
		 */
		function put(template, name) {
			$templateCache.put(name, template)
		};
	};
} ());