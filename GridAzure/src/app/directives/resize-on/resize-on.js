angular.module('gridTaskApp')
	.directive('resizeOn', ['$window', function ($window) {

		function resize_on(element, parent, width) {
			element.css('width', (angular.element(parent).position().left + angular.element(parent).width()) + 'px');

			if (element.width() < element.css('min-width').replace('px', '')) {
				element.css({
					right: 'auto',
					width: width + 'px',
					left: angular.element(parent).position().left + 'px'
				})
			}
			else {
				element.css({
					right: 0,
					left: 'auto'
				})
			}

		}

		return {
			restrict: 'AC',
			scope: {
				event: '=resizeOn',
				parent: '@',
				width: '=resizeWidth'
			},
			link: function (scope, element, attrs) {
				scope.width = scope.width || 450;

				element.css('top', angular.element(scope.parent).height() + 'px');

				var resize = function () {
					resize_on(element, scope.parent, scope.width);
				};

				angular.element($window).resize(resize);

				scope.$on('$destroy', function () {
					angular.element($window).off("resize", resize);
				});

				scope.$watch('event', function (value) {
					if (value) {
						resize_on(element, scope.parent, scope.width);
					}
				});
			}
		}
	}]);