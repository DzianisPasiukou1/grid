angular.module('gridTaskApp')
	.directive('mouseOver', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				type: '=',
				value: '='
			},
			templateUrl: templatesPath + 'directive-templates/mouse-over.html',
			link: function (scope, element, attrs) {
				element.find('.mouse-over').css('top', ($.cursorMessageData.mouseY - 400) + 'px');
				element.find('.mouse-over').css('left', ($.cursorMessageData.mouseX + 10) + 'px');
			}
		}
	}]);