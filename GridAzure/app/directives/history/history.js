angular.module('gridTaskApp')
	.directive('history', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'history.html',
			controller: 'historyCtrl',
			scope: {
				entities: '=renderedRows',
				rowIndex: '='
			},
			link: function (scope, element, attrs) {
				scope.$watch('isModal', function (value) {
					if (!value) {
						$('body').css('overflow', 'inherit');
						element.remove();
					}
					else {
						element.find('.fade').css('height', $('body').prop('scrollHeight') + 'px');
						element.find('.fade').css('width', $('body').prop('scrollWidth') + 'px');

						$('body').css('overflow', 'hidden');
					}
				});

				$(window).resize(function () {
					element.find('.fade').css('height', $('body').prop('scrollHeight') + 'px');
					element.find('.fade').css('width', $('body').prop('scrollWidth') + 'px');
				});
			}
		}
	}]);