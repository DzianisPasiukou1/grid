angular.module('gridTaskApp')
	.directive('customDatepicker', ['templatesPath', 'classes', function (templatesPath, classes) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'datepicker.html',
			scope: {
				options: '='
			},
			link: function (scope, element, attrs) {
				element.find('.expand').addClass(classes.menuDown);

				scope.startDate = new Date(2014, 1);
				scope.endDate = new Date();

				scope.toggle = function () {
					scope.isShow = !scope.isShow;

					if (scope.isShow) {
						element.find('.expand').removeClass(classes.menuDown);
						element.find('.expand').addClass(classes.menuUp);
						element.find('.date-btn__toggle').addClass('opened');
					}
					else {
						element.find('.expand').addClass(classes.menuDown);
						element.find('.expand').removeClass(classes.menuUp);
						element.find('.date-btn__toggle').removeClass('opened');
					}
				}
				scope.close = function () {
					scope.isShow = false;

					element.find('.expand').addClass(classes.menuDown);
					element.find('.expand').removeClass(classes.menuUp);
					element.find('.date-btn__toggle').removeClass('opened');
				}
			}
		}
	}])