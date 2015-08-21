angular.module('gridTaskApp')
	.controller('coreDiagramCtrl', ['chartFactory', '$scope', '$parse', function (chartFactory, $scope, $parse) {
		$scope.chart = chartFactory.getChart($scope.data, $scope.opt);

		$scope.mouseOverInit = function (data) {
			$scope.type = $parse('mouseover.type')(data);
			$scope.value = {
				header: $parse('mouseover.header')(data),
				data: $parse('mouseover.data')(data)
			};
		}
	}]);