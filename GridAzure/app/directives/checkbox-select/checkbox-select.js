angular.module('gridTaskApp')
	.directive('checkboxSelect', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				actions: '=',
				check: '=',
				selected: '='
			},
			templateUrl: templatesPath + 'checkbox-select.html',
			controller: 'checkboxSelectCtrl',
			link: function (scope, element, attrs) {
				element.find('ul').hide();
				element.find('span').addClass('glyphicon-menu-down');

				element.click(function () {
					if (element.find('ul').is(':visible')) {
						element.find('ul').hide();
						element.find('span').addClass('glyphicon-menu-down');
						element.find('span').removeClass('glyphicon-menu-up');
					}
					else {
						element.find('ul').show();
						element.find('span').removeClass('glyphicon-menu-down');
						element.find('span').addClass('glyphicon-menu-up');
					}
				});

				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						element.find('ul').hide();
						element.find('span').addClass('glyphicon-menu-down');
						element.find('span').removeClass('glyphicon-menu-up');
					}
				})

				scope.$watch('check', function (value) {
					if (value) {
						scope.selected = scope.actions.all;
					} else {
						scope.selected = scope.actions.noOne;
					}
				});
			}
		}
	}]);