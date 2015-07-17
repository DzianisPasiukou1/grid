angular.module('gridTaskApp')
	.directive('modal', ['templatesPath', '$timeout', function (templatesPath, $timeout) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'modal.html',
			scope: {
				entities: '=renderedRows',
				rowIndex: '=',
				isModal: '='
			},
			controller: 'modalCtrl',
			link: function (scope, element, attrs) {
				scope.$watch('isModal', function (value) {
					$timeout(function () {
						if (!value) {
							$('body').css('overflow', 'inherit');
							element.remove();
						}
						else {
							element.find('.fade').css('height', element.find('.modal').prop('scrollHeight') + 'px');
							element.find('.fade').css('width', element.find('.modal').prop('scrollWidth') + 'px');
							$('body').css('overflow', 'hidden');
						}
					});
				})

				$(window).resize(function () {
					element.find('.fade').css('height', element.find('.modal').prop('scrollHeight') + 'px');
					element.find('.fade').css('width', element.find('.modal').prop('scrollWidth') + 'px');
				});
			}
		}
	}]);