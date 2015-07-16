angular.module('gridTaskApp')
	.directive('modal', ['templatesPath', function (templatesPath) {
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
					if (!value) {
						$('body').css('overflow', 'inherit');
						element.remove();
					}
					else {
						element.find('.fade').css('height', $('body').prop('scrollHeight') + 'px');
						element.find('.fade').css('width', $('body').prop('scrollWidth') + 'px');
						$('body').css('overflow', 'hidden');
					}
				})

				$(window).resize(function () {
					element.find('.fade').css('height', $('body').prop('scrollHeight') + 'px');
					element.find('.fade').css('width', $('body').prop('scrollWidth') + 'px');
				});
			}
		}
	}]);