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
				element.find('span').addClass(scope.options.hideClass);

				element.click(function () {
					if (element.find('ul').is(':visible')) {
						element.find('ul').hide();
						element.find('.glyphicon').addClass(scope.options.hideClass);
						element.find('.glyphicon').removeClass(scope.options.showClass);
					}
					else {
						element.find('ul').show();
						element.find('.glyphicon').removeClass(scope.options.hideClass);
						element.find('.glyphicon').addClass(scope.options.showClass);
					}
				});

				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						element.find('ul').hide();
						element.find('.glyphicon').addClass(scope.options.hideClass);
						element.find('.glyphicon').removeClass(scope.options.showClass);
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