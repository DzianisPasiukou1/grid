angular.module('gridExpressApp')
	.directive('customDatepicker', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			templateUrl: templatesPath + 'directive-templates/custom-datepicker.html',
			scope: {
				opt: '=customDatepicker'
			},
			controller: 'customDatepickerCtrl',
			link: function (scope, element, attrs) {
				element.find(scope.dateBtnSelector).dateRangePicker(scope.opt.config).bind('datepicker-change', function (event, obj) {
					scope.opt.startDate = obj.date1;
					scope.opt.endDate = obj.date2;
					scope.opt.dateRange = Math.abs(scope.opt.endDate.getTime() - scope.opt.startDate.getTime());
					scope.$apply();
				}).bind('datepicker-close', function () {
					scope.isShow = false;
					if (scope.$root.$$phase != '$apply' && scope.$root.$$phase != '$digest') {
						scope.$apply();
					}
				});
			}
		}
	}])