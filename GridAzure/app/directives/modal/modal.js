angular.module('gridTaskApp')
	.directive('modal', ['templatesPath', '$timeout', function (templatesPath, $timeout) {
		return {
			restrict: 'EA',
			templateUrl: templatesPath + 'directive-templates/modal.html',
			scope: {
				value: '=',
				bodyTemplateUrl: '@',
				bodyTemplate: '@',
				enableSave: '='
			},
			controller: 'modalCtrl',
			link: function (scope, element, attrs) {
				scope.$watch('isModal', function (value) {
					$timeout(function () {
						if (!value) {
							angular.element(element).remove();
							angular.element('body').css('overflow', 'inherit');
						}
						else {
							scope.resize();
							angular.element('body').css('overflow', 'hidden');
						}
					});
				})

				angular.element(window).resize(function () {
					scope.resize();
				});
			}
		}
	}]);