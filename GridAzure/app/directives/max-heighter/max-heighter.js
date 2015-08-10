angular.module('gridTaskApp')
	.directive('maxHeighter', ['$timeout', function ($timeout) {
		return {
			restrict: 'EAC',
			scope: {},
			link: function (scope, element, attrs) {
				$timeout(function () {
					element.css('max-height', $(window).height() - element.offset().top - 10 + 'px');

					$(window).resize(function () {
						element.css('max-height', $(window).height() - element.offset().top - 10 + 'px');
					});
				});
			}
		}
	}]);