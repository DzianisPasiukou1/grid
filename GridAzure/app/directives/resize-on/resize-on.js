angular.module('gridTaskApp')
	.directive('resizeOn', [function () {

		function resize_on(element, parent) {
			element.css('width', ($(parent).position().left + $(parent).width()) + 'px');

			if (element.width() < element.css('min-width').replace('px', '')) {
				element.css('right', 'auto');
				element.css('width', '450px');
				element.css('left', $(parent).position().left + 'px');
			}
			else {
				element.css('right', '0');
				element.css('left', 'auto');
			}

		}

		return {
			restrict: 'AC',
			scope: {
				event: '=resizeOn',
				parent: '@'
			},
			link: function (scope, element, attrs) {
				element.css('top', $(scope.parent).height() + 'px');

				$(window).resize(function () {
					resize_on(element, scope.parent);
				});

				scope.$watch('event', function (value) {
					if (value) {
						resize_on(element, scope.parent);
					}
				});
			}
		}
	}]);