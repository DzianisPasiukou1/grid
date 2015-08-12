angular.module('gridExpressApp')
	.service('myTemplateService', ['$http', '$templateCache', function ($http, $templateCache) {
		this.put = function (template, name) {
			$templateCache.put(name, template)
		}
	}]);