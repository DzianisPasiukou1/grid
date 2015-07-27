angular.module('gridTaskApp')
	.directive('filter', ['templatesPath', 'classes', function (templatesPath, classes) {
		return {
			restrict: 'E',
			scope: {
				listState: '=',
				filterOptions: '=options',
				filtrate: '='
			},
			controller: 'filterCtrl',
			templateUrl: templatesPath + 'directive-templates/filter.html',
			link: function (scope, element, attrs) {
				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						scope.listState = false;
						scope.$apply();
					}
				})

				element.find('span.expand').addClass(classes.menuDown);

				scope.$watch('listState', function (value) {
					if (value) {
						element.addClass('filter-selected');
						element.find('span.expand').removeClass(classes.menuDown);
						element.find('span.expand').addClass(classes.menuUp);
					}
					else {
						element.removeClass('filter-selected');
						element.find('span.expand').addClass(classes.menuDown);
						element.find('span.expand').removeClass(classes.menuUp);
					}
				});
			}
		}
	}]);
