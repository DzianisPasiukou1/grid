angular.module('gridTaskApp')
	.directive('loading', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'loading.html',
			link: function (scope, element, attrs) {
				element.center();

				element.css("top", element.parent().find('.page-content').position().top + 200 + 'px');
				element.css("left", element.position().left - 100 + 'px');
				//element.css('height', element.parent().find('.page-content').height() + 'px');
				//element.css('width', element.parent().find('.page-content').width() + 'px');

				scope.$watch('isLoading', function (value) {
					var grid = element.parent().find('custom-grid');

					if (grid) {
						if (value) {
							//grid.parent().append('<div id="disabled__grid"></div>');
							//grid.parent().find('#disabled__grid').css('height', grid.find('.custom-grid').height() + grid.find('.custom-grid').position().top + 'px');
							//grid.parent().find('#disabled__grid').css('width', grid.find('.custom-grid').width() + 'px');
						}
						else {
							//grid.parent().find('#disabled__grid').remove();
						}
					}
				});
			}
		}
	}]);