angular.module('gridTaskApp')
	.directive('dropdown', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				options: '=dropdownOptions'
			},
			controller: 'dropdownCtrl',
			templateUrl: templatesPath + 'dropdown.html',
			link: function (scope, element, attrs) {
				element.find('ul').hide();
				element.find('span').addClass(scope.options.hideClass);

				element.click(function () {
					if (element.find('ul').is(':visible')) {
						element.find('ul').hide();
						element.find('span').addClass(scope.options.hideClass);
						element.find('span').removeClass(scope.options.showClass);
					}
					else {
						element.find('ul').show();
						element.find('span').removeClass(scope.options.hideClass);
						element.find('span').addClass(scope.options.showClass);
					}
				});

				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						element.find('ul').hide();
						element.find('span').addClass(scope.options.hideClass);
						element.find('span').removeClass(scope.options.showClass);
					}
				})
			}
		}
	}]);