angular.module('gridTaskApp')
	.controller('pageContentCtrl', ['$scope', 'gridService', function ($scope, gridService) {
		gridService.get(function (data) {
			$scope.data = data;
		});

		$scope.grid = {
			name: 'Grid name',
			count: $scope.data.length
		};

		$scope.exports = { name: 'Export to ', values: [{ label: 'Excel' }] };
		$scope.views = { name: 'View: ', values: [{ label: 'Grid' }] };

	}]);