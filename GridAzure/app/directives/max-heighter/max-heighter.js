angular.module('gridTaskApp')
	.directive('maxHeighter', ['$timeout', function ($timeout) {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {
				$timeout(function () {
					element.css('max-height', $(window).height() - element.position().top - 400 + 'px');

					if ($(window).height() - element.position().top - 400 > 400) {
						$('.custom-overlay').css('min-height', $(window).height() - element.position().top - 400 + 'px')
						$('.custom-overlay').css('top', 0 + 'px')
					}
					else {
						$('.custom-overlay').css('min-height', $(window).height() - 140 + 'px')
						$('.custom-overlay').css('top', -$('.page-content__cards').offset().top - 100 + 'px')
					}

					if ($('.custom-overlay').css('min-height') === undefined) {
						$timeout(function () {
							if ($(window).height() - element.position().top - 400 > 400) {
								$('.custom-overlay').css('min-height', $(window).height() - element.position().top - 400 + 'px')
								$('.custom-overlay').css('top', 0 + 'px')
							}
							else {
								$('.custom-overlay').css('min-height', $(window).height() - 140 + 'px')
								$('.custom-overlay').css('top', -$('.page-content__cards').offset().top - 100 + 'px')
							}
						})
					}

					$(window).resize(function () {
						element.css('max-height', $(window).height() - element.position().top - 400 + 'px');

						if ($(window).height() - element.position().top - 400 > 400) {
							$('.custom-overlay').css('min-height', $(window).height() - element.position().top - 400 + 'px')
							$('.custom-overlay').css('top', 0 + 'px')
						}
						else {
							$('.custom-overlay').css('min-height', $(window).height() - 140 + 'px')
							$('.custom-overlay').css('top', -$('.page-content__cards').offset().top - 100 + 'px')
						}

						if ($('.custom-overlay').css('min-height') === undefined) {
							$timeout(function () {
								if ($(window).height() - element.position().top - 400 > 400) {
									$('.custom-overlay').css('min-height', $(window).height() - element.position().top - 400 + 'px')
									$('.custom-overlay').css('top', 0 + 'px')
								}
								else {
									$('.custom-overlay').css('min-height', $(window).height() - 140 + 'px')
									$('.custom-overlay').css('top', -$('.page-content__cards').offset().top - 100 + 'px')
								}
							})
						}
					});
				});

			}
		}
	}]);