angular.module('gridTaskApp')
	.directive('loading', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'loading.html',
			link: function (scope, element, attrs) {
				element.css('height', element.parent().parent().height() + 'px');
				element.css('width', element.parent().parent().width() + 'px');

				element.find('.loading-disabled').css('top', 0);

				//element.find('.spinner').css('top', (element.parent().parent().height() + element.find('.spinner').height()) / 2 + 'px');
				//element.find('.spinner').css('left', (element.parent().parent().width() + element.find('.spinner').width()) / 2 + 'px');
				element.find('.loading-disabled').css('height', element.parent().parent().height() + 'px');
				element.find('.loading-disabled').css('width', element.parent().parent().width() + 'px');

				$(window).resize(function () {
					element.css('height', element.parent().parent().height() + 'px');
					element.css('width', element.parent().parent().width() + 'px');

					element.find('.loading-disabled').css('top', 0);

					element.find('.spinner').css('top', (element.parent().parent().height() + element.find('.spinner').height()) / 2 + 'px');
					element.find('.spinner').css('left', (element.parent().parent().width() + element.find('.spinner').width()) / 2 + 'px');
					element.find('.loading-disabled').css('height', element.parent().parent().height() + 'px');
					element.find('.loading-disabled').css('width', element.parent().parent().width() + 'px');
				});
			}
		}
	}]);