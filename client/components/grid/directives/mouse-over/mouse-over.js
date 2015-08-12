angular.module('gridExpressApp')
	.directive('mouseOver', ['templatesPath', '$timeout', function (templatesPath, $timeout) {
		return {
			restrict: 'E',
			scope: {
				type: '=',
				value: '=',
				parentTop: '=parentTop'
			},
			templateUrl: templatesPath + 'directive-templates/mouse-over.html',
			link: function (scope, element, attrs) {
				scope.style = {
					visibility: 'hidden'
				}

				if (scope.parentTop === undefined) {
					scope.parentTop = 0;
				}

				$timeout(function () {
					if ($.cursorMessageData.mouseY + element.find('.mouse-over').height() < $(window).height()) {
						scope.style.top = ($.cursorMessageData.mouseY - scope.parentTop + 15) + 'px';
					}
					else {
						scope.style.top = ($.cursorMessageData.mouseY - element.find('.mouse-over').height() - scope.parentTop - 20) + 'px';
					}

					if ($.cursorMessageData.mouseX + 10 + element.find('.mouse-over').width() < $(window).width()) {
						scope.style.left = ($.cursorMessageData.mouseX + 10) + 'px';
					}
					else {
						scope.style.left = $(window).width() - element.find('.mouse-over').width() - 10 + 'px';
					}
					scope.style.visibility = 'visible'
				});

			}
		}
	}]);