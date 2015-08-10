angular.module('gridTaskApp')
	.controller('customDatepickerCtrl', ['$scope', '$element', function ($scope, $element) {
		$scope.toggle = function () {
			$scope.isShow = !$scope.isShow;

			if ($scope.isShow) {
				$element.find('.date-btn__toggle').data('dateRangePicker').open();
			}
			else {
				$('.date-btn__toggle').data('dateRangePicker').close();
			}
		};

		$scope.close = function () {
			$scope.isShow = false;
			$element.find('.date-btn__toggle').data('dateRangePicker').close();
		}
	}]);