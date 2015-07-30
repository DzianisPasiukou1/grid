angular.module('gridTaskApp').directive('kxDateRange', ['$parse', '$translate', function ($parse, $translate) {
	return {
		restrict: 'CAE',
		require: '?ngModel',
		compile: function (elem, attr) {
			if (attr.disableEdit) {
				elem.append("<span class=\"kx-daterangepicker\">\n  <span class=\"add-on glyph-calendar\">\n    <i class=\"icon-calendar icon-large\"></i>\n  </span>\n  <form ng-submit=\"onHitReturn()\">\n    <input kx-stealth-input\n    ng-model=\"inputValue\"\n    ng-change=\"onInputChange()\"\n    ng-class=\"{'ng-invalid': isInvalid}\" readonly></input>\n  </form>\n</span>");
			} else {
				elem.append('<span class="kx-daterangepicker">\n  <span class="add-on glyph-calendar">\n    <i class="icon-calendar icon-large"></i>\n  </span>\n  <form ng-submit="onHitReturn()">\n    <input kx-stealth-input\n    ng-model="inputValue"\n    ng-change="onInputChange()"\n    ng-class="{\'ng-invalid\': isInvalid}"></input>\n  </form>\n</span>');
			}
			elem.after('<span ng-show="isInvalid" class="help-inline calendar-invalid-msg">{{"Incorrect Date" | translate}}</span>');
			return function ($scope, elem, attr, ngModelCtrl) {
				var format, inputRender, isValid, offset, onApplyRange, onModelChange, open, renderRange, separator;
				isValid = function (arg) {
					var end, isSyntacticValid, start;
					start = arg.start, end = arg.end;
					isSyntacticValid = start.isValid() && end.isValid();
					return isSyntacticValid && (attr.timeRange === 'future' ? start && end && (moment() <= start && start <= end) : attr.timeRange === 'past' ? start && end && (start <= end && end <= moment()) : start && end);
				};
				offset = elem.offset();
				if (offset.left <= 400) {
					open = 'right';
				} else {
					open = 'left';
				}
				format = attr.format || 'MMM DD, YYYY';
				separator = attr.separator || ' - ';
				renderRange = function (range) {
					return range.start.format(format) + separator + range.end.format(format);
				};
				onApplyRange = _.bind(function (start, end) {
					if ((!start.isSame(ngModelCtrl.$viewValue.start)) || (!end.isSame(ngModelCtrl.$viewValue.end))) {
						$scope.inputValue = renderRange({
							start: start,
							end: end
						});
						ngModelCtrl.$setViewValue({
							start: start,
							end: end
						});
						return ngModelCtrl.$setValidity('parses', true);
					}
				});
				$scope.onHitReturn = function () {
					var data;
					data = elem.data('daterangepicker');
					return onApplyRange(data.startDate, data.endDate);
				};
				$scope.onInputChange = function () {
					var dates, picker, range;
					dates = $scope.inputValue.split(separator);
					if (dates.length === 2) {
						range = {
							start: moment(dates[0], format, true),
							end: moment(dates[1], format, true)
						};
						picker = elem.data('daterangepicker');
						picker.setStartDate(range.start);
						picker.setEndDate(range.end);
						return $scope.isInvalid = !isValid(range);
					} else {
						return $scope.isInvalid = true;
					}
				};
				onModelChange = function (dateRange) {
					var elemData, end, ret, start;
					if (dateRange && dateRange.start) {
						start = dateRange.start, end = dateRange.end;
						elemData = elem.data('daterangepicker');
						elemData.oldStartDate = start;
						elemData.oldEndDate = end;
						elemData.startDate = start;
						elemData.endDate = end;
						elemData.updateView();
						elemData.updateCalendars();
						ret = renderRange(dateRange);
						$scope.inputValue = ret;
						return ret;
					}
				};
				ngModelCtrl.$parsers.push(function (val) {
					var dates, range;
					if (_.isString(val)) {
						dates = val.split(separator);
						range = {
							start: moment(dates[0], format, true),
							end: moment(dates[1], format, true)
						};
						ngModelCtrl.$setValidity('parses', isValid(range));
						if (isValid(range)) {
							return range;
						}
					} else {
						return val;
					}
				});
				inputRender = ngModelCtrl.$render;
				ngModelCtrl.$render = function () {
					inputRender();
					return elem.trigger('keyup');
				};
				return $translate(['Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days', 'This Month', 'Last Month', 'Last 3 Months', 'Apply', 'Cancel', 'From', 'To', 'W', 'Custom Range']).then(function (tr) {
					var current, end, i, j, modeRanges, options, rangeList, start;
					ngModelCtrl.$formatters.push(onModelChange);
					rangeList = [[tr['Today'], [moment(), moment()]], [tr['Yesterday'], [moment().subtract(1, 'days'), moment().subtract(1, 'days')]], [tr['Last 7 Days'], [moment().subtract(7, 'days'), moment().subtract(1, 'days')]], [tr['Last 30 Days'], [moment().subtract(30, 'days'), moment().subtract(1, 'days')]], [tr['This Month'], [moment().startOf('month'), moment().subtract(1, 'days')]], [tr['Last Month'], [moment().subtract(1, 'months').startOf('month'), moment().subtract(1, 'months').endOf('month')]], [tr['Last 3 Months'], [moment().subtract(3, 'months').startOf('month'), moment().subtract(1, 'months').endOf('month')]]];
					modeRanges = {
						'kx-date-range': _.object(rangeList),
						'exceptToday': _.object(_.rest(rangeList)),
						'lastYear': {}
					};
					for (i = j = 11; j >= 0; i = --j) {
						current = function () {
							return moment().subtract('months', i);
						};
						start = current().startOf('month');
						end = i === 0 ? current() : current().endOf('month');
						modeRanges.lastYear[current().format('MMM YYYY')] = [start, end];
					}
					options = {
						format: format,
						separator: separator,
						startDate: moment().subtract('day', 6),
						endDate: moment(),
						locale: {
							applyLabel: tr['Apply'],
							cancelLabel: tr['Cancel'],
							fromLabel: tr['From'],
							toLabel: tr['To'],
							weekLabel: tr['W'],
							customRangeLabel: tr['Custom Range']
						}
					};
					if (attr.timeRange === 'future') {
						_.extend(options, {
							minDate: moment()
						});
					} else if (attr.timeRange === 'past') {
						_.extend(options, {
							maxDate: moment(),
							opens: open,
							ranges: modeRanges[attr.kxDateRange]
						});
					}
					elem.daterangepicker(options);
					if (!onModelChange(ngModelCtrl.$modelValue)) {
						onModelChange({
							start: options.startDate,
							end: options.endDate
						});
					}
					elem.on('apply.daterangepicker', function (e, picker) {
						return onApplyRange(picker.startDate, picker.endDate);
					});

					$('.daterangepicker.dropdown-menu').css('display', 'none');

					return ngModelCtrl.$render();
				});
			};
		}
	};
}]);