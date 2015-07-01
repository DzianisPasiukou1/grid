angular.module('gridTaskApp')
	.controller('contentOptionsCtrl', ['$scope', function ($scope) {
		$scope.$watch('options.searchValue', function (value) {
			if (!$scope.options.show) {
				return;
			}

			if ($scope.options.show.label == 'everywhere') {
				$scope.options.search(value);
			} else {
				$scope.options.search($scope.options.show.label + ':' + value);
			}
		});

	}]);