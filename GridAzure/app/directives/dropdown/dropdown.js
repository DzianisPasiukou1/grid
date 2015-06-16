angular.module('gridTaskApp')
	.directive('dropdown', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				actions: '=',
				selected: '='
			},
			controller: 'dropdownCtrl',
			templateUrl: templatesPath + 'dropdown.html',
			link: function (scope, element, attrs) {
				element.find('ul').hide();

				element.click(function () {
					if (element.find('ul').is(':visible')) {
						element.find('ul').hide();
					}
					else {
						element.find('ul').show();
					}
				});

				element.focusout(function () {
					if (element.find('ul').is(':visible')) {
						element.find('ul').hide();
					}
					if (element.is(":focus")) {
						if (element.find('ul').is(':visible')) {
							element.find('ul').hide();
						}
						else {
							element.find('ul').show();
						}
					}
				});
			}
		}
	}]);