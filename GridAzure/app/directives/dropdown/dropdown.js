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
				element.find('.my-dropdown__expand').addClass(scope.options.hideClass);

				element.click(function () {
					if (element.find('ul').is(':visible')) {
						element.find('ul').hide();
						element.find('.my-dropdown__expand').addClass(scope.options.hideClass);
						element.find('.my-dropdown__expand').removeClass(scope.options.showClass);
						element.find('.my-dropdown__btn').removeClass('opened');
					}
					else {
						element.find('ul').show();
						element.find('.my-dropdown__expand').removeClass(scope.options.hideClass);
						element.find('.my-dropdown__expand').addClass(scope.options.showClass);
						element.find('.my-dropdown__btn').addClass('opened');
					}
				});

				$(document).click(function (event) {
					if (element.find('ul').is(':visible')) {
						if (!$(event.target).closest(element).length) {
							element.find('ul').hide();
							element.find('.my-dropdown__expand').addClass(scope.options.hideClass);
							element.find('.my-dropdown__expand').removeClass(scope.options.showClass);
							element.find('.my-dropdown__btn').removeClass('opened');
						}
					}
				})
			}
		}
	}]);