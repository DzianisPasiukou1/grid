angular.module('gridTaskApp')
	.controller('customGridCtrl', ['$scope', 'data', function ($scope, data) {
		$scope.grid = {};
		$scope.data = [];

		function generator() {
			for (var i = 0; i < data.count; i++) {
				var day = Math.floor((Math.random() * 1000) + 1);

				var obj = {
					date: new Date(data.startDate.setDate(data.startDate.getDate() + day)),
					name: 'Some text',
					value: 10122.97,
					trend: 7
				};

				$scope.data.push(obj);
			}
		}

		generator();

		$scope.grid = {
			name: 'Grid name',
			count: $scope.data.length,
			options: {
				data: 'data',
				multiSelect: false,
				columnDefs: [
					{ field: 'date', displayName: 'Date', cellTemplate: 'app/templates/row-templates/date.html' },
					{ field: 'name', displayName: 'Name', cellTemplate: 'app/templates/row-templates/name.html' },
					{ field: 'value', displayName: 'Value', cellTemplate: 'app/templates/row-templates/value.html' },
					{ field: 'trend', displayName: 'Trend', cellTemplate: 'app/templates/row-templates/trend.html' }]
			}
		};
	}]);