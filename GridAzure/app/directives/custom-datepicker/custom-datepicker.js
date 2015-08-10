angular.module('gridTaskApp')
	.directive('customDatepicker', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			templateUrl: templatesPath + 'directive-templates/custom-datepicker.html',
			scope: {
				opt: '=customDatepicker'
			},
			controller: 'customDatepickerCtrl',
			link: function (scope, element, attrs) {
				element.find('.date-btn__toggle').dateRangePicker(scope.opt.config).bind('datepicker-change', function (event, obj) {
					scope.opt.startDate = obj.date1;
					scope.opt.endDate = obj.date2;
					scope.opt.dateRange = Math.abs(scope.opt.endDate.getTime() - scope.opt.startDate.getTime());
					scope.$apply();
				}).bind('datepicker-close', function () {
					scope.isShow = false;
					scope.$apply();
				});
			}
		}
	}])