angular.module('gridExpressApp')
	.directive('maxHeighter', ['$timeout', function ($timeout) {
		return {
			restrict: 'EAC',
			scope: {},
			link: function (scope, element, attrs) {

				$timeout(function () {
					element.css('max-height', getWindowHeight() - element.offset().top - 10 + 'px');

					$(window).resize(function () {
						element.css('max-height', getWindowHeight() - element.offset().top - 10 + 'px');
					});
				}, 100);
			}
		}
	}]);