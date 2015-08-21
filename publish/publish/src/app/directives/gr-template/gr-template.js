angular.module('gridTaskApp')
	.directive('grTemplate', ['myTemplateService', 'templatesPath', function (myTemplateService, templatesPath) {
		return {
			restrict: 'EAC',
			scope: {
				template: '=grTemplate',
				name: '@grName'
			},
			replace: true,
			require: '?^grName',
			templateUrl: templatesPath + 'directive-templates/gr-template.html',
			link: function (scope, element, attrs) {
				myTemplateService.put(scope.template, scope.name);

				scope.templateUrl = scope.name;
			}
		}
	}]);