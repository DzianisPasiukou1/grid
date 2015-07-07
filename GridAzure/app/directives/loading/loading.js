angular.module('gridTaskApp')
	.directive('loading', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'loading.html',
			link: function (scope, element, attrs) {
				element.css('height', element.parent().parent().height() + 'px');
				element.css('width', element.parent().parent().width() + 'px');

				element.find('.loading-disabled').css('top', 0);

				element.find('.loading-disabled').css('height', element.parent().parent().height() + 'px');
				element.find('.loading-disabled').css('width', element.parent().parent().width() + 'px');

				$(window).resize(function () {
					element.css('height', element.parent().parent().height() + 'px');
					element.css('width', element.parent().parent().width() + 'px');

					element.find('.loading-disabled').css('top', 0);

					element.find('.loading-disabled').css('height', element.parent().parent().height() + 'px');
					element.find('.loading-disabled').css('width', element.parent().parent().width() + 'px');
				});
			}
		}
	}]);