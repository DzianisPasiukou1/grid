angular.module('gridTaskApp')
	.directive('maxHeighter', ['$timeout', '$window', function ($timeout, $window) {
		function init_height(element) {
			if (getWindowHeight() - element.offset().top > 0) {
				element.css('max-height', getWindowHeight() - element.offset().top - 10 + 'px');
			}
			else {
				element.css('max-height', 100 + 'px');
			}
		}

		return {
			restrict: 'EAC',
			scope: {},
			compile: function (element, attrs) {
				element.onPositionChanged(function () {
					init_height(element);
				}, 0);

				return {
					post: function (scope, element, attrs) {
						var resize = function () {
							init_height(element);
						}

						$timeout(function () {
							init_height(element)
						});

						angular.element($window).resize(resize);

						scope.$on('$destroy', function () {
							angular.element($window).off("resize", resize);
						});
					}
				}
			}
		}
	}]);