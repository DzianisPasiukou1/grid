angular.module('gridExpressApp')
	.controller('customDatepickerCtrl', ['$scope', '$element', function ($scope, $element) {
		$scope.dateBtnSelector = '.date-btn__toggle';

		$scope.toggle = function () {
			$scope.isShow = !$scope.isShow;

			if ($scope.isShow) {
				$element.find($scope.dateBtnSelector).data('dateRangePicker').open();
			}
			else {
				$($scope.dateBtnSelector).data('dateRangePicker').close();
			}
		};

		$scope.close = function () {
			$scope.isShow = false;
			$element.find($scope.dateBtnSelector).data('dateRangePicker').close();
		}
	}]);