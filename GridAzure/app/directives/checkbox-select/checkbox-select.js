angular.module('gridTaskApp')
	.directive('checkboxSelect', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				options: '='
			},
			templateUrl: templatesPath + 'checkbox-select.html',
			controller: 'checkboxSelectCtrl',
			link: function (scope, element, attrs) {
				element.find('ul').hide();
				element.find('.checkbox-select__expand').addClass(scope.options.hideClass);

				element.click(function () {
					if (element.find('ul').is(':visible')) {
						element.find('ul').hide();
						element.find('.checkbox-select__expand').addClass(scope.options.hideClass);
						element.find('.checkbox-select__expand').removeClass(scope.options.showClass);
						element.find('.checkbox-select__btn').removeClass('opened');
					}
					else {
						element.find('ul').show();
						element.find('.checkbox-select__expand').removeClass(scope.options.hideClass);
						element.find('.checkbox-select__expand').addClass(scope.options.showClass);
						element.find('.checkbox-select__btn').addClass('opened');
					}
				});

				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						element.find('ul').hide();
						element.find('.checkbox-select__expand').addClass(scope.options.hideClass);
						element.find('.checkbox-select__expand').removeClass(scope.options.showClass);
						element.find('checkbox-select__btn').removeClass('opened');
					}
				})

				scope.$watch('options.selected', function (value) {
					if (value) {
						if (value.isMarked || value.isNotMarked) {
							element.find('.checkbox-select__input-control__span').addClass('marked');
						}
						else {
							element.find('.checkbox-select__input-control__span').removeClass('marked');
						}

						if (value.isAll) {
							value.check = true;
						}
						else {
							value.check = false;
						}
					}
				});
			}
		}
	}]);