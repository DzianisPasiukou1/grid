angular.module('gridTaskApp')
	.directive('overlay', ['$timeout', 'templatesPath', '$window', function ($timeout, templatesPath, $window) {
		return {
			restrict: 'EAC',
			scope: {
				selectors: '=',
				toggleMinWidth: '='
			},
			controller: 'overlayCtrl',
			templateUrl: templatesPath + 'directive-templates/overlay.html',
			transclude: true,
			replace: true,
			link: function (scope, element, attrs) {
				var resize = function () {
					scope.setToggle(true);
					scope.$apply();
				};

				$timeout(function () {
					scope.$watch('state', function (state) {
						scope.setToggle();

						if (state == false) {
							element.scrollTop(0);
						}
					});
				});

				element.parent().onPositionChanged(resize, 0);

				angular.element($window).resize(resize);

				scope.$on('$destroy', function () {
					element.parent().off("onPositionChanged", resize);
					angular.element($window).off("resize", resize);
				});
			}
		}
	}]);