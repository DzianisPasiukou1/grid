angular.module('gridTaskApp')
	.directive('maxHeighter', ['$timeout', '$interval', function ($timeout, $interval) {
		function init_height(element) {
			element.css('max-height', getWindowHeight() - element.offset().top - 10 + 'px');
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
						$timeout(function () {
							init_height(element)
						});

						$(window).resize(function () {
							init_height(element)
						});
					}
				}
			}
		}
	}]);