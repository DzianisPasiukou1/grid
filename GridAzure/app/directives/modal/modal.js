angular.module('gridTaskApp')
	.directive('modal', ['templatesPath', '$timeout', '$window', function (templatesPath, $timeout, $window) {
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
				var resize;

				resize = function () {
					scope.resize();
				};

				angular.element($window).resize(resize);

				scope.$on('$destroy', function () {
					angular.element($window).off("resize", resize);
				});

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
			}
		}
	}]);