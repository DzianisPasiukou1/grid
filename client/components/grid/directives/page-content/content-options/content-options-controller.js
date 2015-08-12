angular.module('gridExpressApp')
	.controller('contentOptionsCtrl', ['$scope', function ($scope) {
		$scope.$watch('options.searchValue', function (value) {
			if (!$scope.options.searchOptions) {
				return;
			}

			if ($scope.options.searchOptions.selected.label == 'everywhere') {
				$scope.options.search(value);
			} else {
				$scope.options.search($scope.options.searchOptions.selected.label + ':' + value);
			}
		});

	}]);