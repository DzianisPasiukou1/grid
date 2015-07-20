angular.module('gridTaskApp')
	.directive('splitButton', ['templatesPath', 'classes', function (templatesPath, classes) {
		return {
			restrict: 'E',
			scope: {
				actions: '=',
				selected: '=',
				search: '='
			},
			templateUrl: templatesPath + 'split-button.html',
			controller: 'splitButtonCtrl',
			link: function (scope, element, attrs) {
				element.find('ul').hide();
				element.find('.expand').addClass(classes.menuDown);

				scope.toggle = function () {
					if (element.find('ul').is(':visible')) {
						element.find('ul').hide();
						element.find('.expand').addClass(classes.menuDown);
						element.find('.expand').removeClass(classes.menuUp);
						element.find('.split-btn__toggle').removeClass('opened');
					}
					else {
						element.find('ul').show();
						element.find('.expand').removeClass(classes.menuDown);
						element.find('.expand').addClass(classes.menuUp);
						element.find('.split-btn__toggle').addClass('opened');
					}
				}

				scope.close = function () {
					if (element.find('ul').is(':visible')) {
						element.find('ul').hide();
						element.find('.expand').addClass(classes.menuDown);
						element.find('.expand').removeClass(classes.menuUp);
						element.find('.split-btn__toggle').removeClass('opened');
					}
				}

				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						element.find('ul').hide();
						element.find('.expand').addClass(classes.menuDown);
						element.find('.expand').removeClass(classes.menuUp);
						element.find('.split-btn__toggle').removeClass('opened');
					}
				})
			}
		}
	}]);