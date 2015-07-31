angular.module('gridTaskApp')
	.directive('mouseOver', ['templatesPath', '$timeout', function (templatesPath, $timeout) {
		return {
			restrict: 'E',
			scope: {
				type: '=',
				value: '='
			},
			templateUrl: templatesPath + 'directive-templates/mouse-over.html',
			link: function (scope, element, attrs) {
				element.find('.mouse-over').css('visibility', 'hidden');

				$timeout(function () {
					element.find('.mouse-over').css('top', ($.cursorMessageData.mouseY - 500) + 'px');

					if ($.cursorMessageData.mouseX + 10 + element.find('.mouse-over').width() < $(window).width()) {
						element.find('.mouse-over').css('left', ($.cursorMessageData.mouseX + 10) + 'px');
					}
					else {
						element.find('.mouse-over').css('left', $(window).width() - element.find('.mouse-over').width() - 10 + 'px');
					}

					element.find('.mouse-over').css('visibility', 'visible');
				});

			}
		}
	}]);