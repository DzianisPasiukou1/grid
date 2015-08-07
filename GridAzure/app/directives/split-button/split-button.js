angular.module('gridTaskApp')
	.directive('splitButton', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				actions: '=',
				selected: '=',
				search: '=',
				typehead: '='
			},
			templateUrl: templatesPath + 'directive-templates/split-button.html',
			controller: 'splitButtonCtrl',
			link: function (scope, element, attrs) {
				element.find('ul').hide();

				scope.toggle = function () {
					if (element.find('ul').is(':visible')) {
						element.find('ul').hide();
						element.find('.split-btn__toggle').removeClass('opened');
					}
					else {
						element.find('ul').show();
						element.find('.split-btn__toggle').addClass('opened');
					}
				}

				scope.close = function () {
					if (element.find('ul').is(':visible')) {
						element.find('ul').hide();
						element.find('.split-btn__toggle').removeClass('opened');
					}
				}

				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						element.find('ul').hide();
						element.find('.split-btn__toggle').removeClass('opened');
					}
				})
			}
		}
	}]);