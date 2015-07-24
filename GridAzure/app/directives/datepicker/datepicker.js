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

				scope.config = {
					singleMonth: true,
					showShortcuts: false,
					showTopbar: false,
					startDate: scope.startDate.toString(),
					endDate: scope.endDate.toString()
				};

				$(element.find('.date-btn__toggle')).dateRangePicker(scope.config).bind('datepicker-change', function (event, obj) {
					scope.startDate = obj.date1;
					scope.endDate = obj.date2;
					scope.$apply();
				}).bind('datepicker-close', function () {
					scope.isShow = false;

					element.find('.expand').addClass(classes.menuDown);
					element.find('.expand').removeClass(classes.menuUp);
					element.find('.date-btn__toggle').removeClass('opened');
				});

				scope.toggle = function () {
					scope.isShow = !scope.isShow;

					if (scope.isShow) {
						element.find('.expand').removeClass(classes.menuDown);
						element.find('.expand').addClass(classes.menuUp);
						element.find('.date-btn__toggle').addClass('opened');
						$(element.find('.date-btn__toggle')).data('dateRangePicker').open();
					}
					else {
						element.find('.expand').addClass(classes.menuDown);
						element.find('.expand').removeClass(classes.menuUp);
						element.find('.date-btn__toggle').removeClass('opened');
						$(element.find('.date-btn__toggle')).data('dateRangePicker').close();
					}
				}

				scope.close = function () {
					scope.isShow = false;
					$(element.find('.date-btn__toggle')).data('dateRangePicker').close();

					element.find('.expand').addClass(classes.menuDown);
					element.find('.expand').removeClass(classes.menuUp);
					element.find('.date-btn__toggle').removeClass('opened');
				}
			}
		}
	}])