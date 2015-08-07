angular.module('gridTaskApp')
	.service('myTemplateService', ['$http', '$templateCache', function ($http, $templateCache) {
		this.put = function (template, name) {
			$templateCache.put(name, template)
		}
	}]);