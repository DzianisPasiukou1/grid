angular.module('gridExpressApp')
	.directive('resizeOn', [function () {
		return {
			restrict: 'EAC',
			link: function (scope, element, attrs) {
				element.css('width', (element.parent().position().left + element.parent().width()) + 'px');

				if (element.width() < element.css('min-width').replace('px', '')) {
					element.css('right', 'auto');
					element.css('width', '450px');
					element.css('left', element.parent().position().left + 'px');
				}
				else {
					element.css('right', '0');
					element.css('left', 'auto');
				}

				element.css('top', element.parent().height() + 'px');

				$(window).resize(function () {
					element.css('width', (element.parent().position().left + element.parent().width()) + 'px');

					if (element.width() < element.css('min-width').replace('px', '')) {
						element.css('right', 'auto');
						element.css('width', '450px');
						element.css('left', element.parent().position().left + 'px');
					} else {
						element.css('right', '0');
						element.css('left', 'auto');
					}
				});
			}
		}
	}]);