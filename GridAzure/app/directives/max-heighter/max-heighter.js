angular.module('gridTaskApp')
	.directive('maxHeighter', ['$timeout', function ($timeout) {
		return {
			restrict: 'A',
			scope: {},
			link: function (scope, element, attrs) {
				$timeout(function () {
					resize(10, 300);

					$(window).resize(function () {
						resize(10, 300);
					});
				});

				function resize(size, min) {
					element.css('max-height', $(window).height() - element.offset().top - size + 'px');

					if ($(window).height() - element.offset().top - size > min) {
						$timeout(function () {
							$('.custom-overlay').css('min-height', ($(window).height() - element.offset().top - size) + 'px')
							$('.custom-overlay').css('top', element.offset().top + 'px')
						});
					}
					else {
						$timeout(function () {
							$('.custom-overlay').css('min-height', $(window).height() - $('.page-content__cards').offset().top - 8 + 'px')
							$('.custom-overlay').css('top', $('.page-content__cards').offset().top + 'px')
						});
					}

				}
			}
		}
	}]);