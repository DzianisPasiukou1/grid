angular.module('gridTaskApp')
	.controller('customGridCtrl', ['$scope', 'templatesPath', function ($scope, templatesPath) {
		$scope.grid = {
			name: 'Grid name',
			count: $scope.data.length,
			options: {
				data: 'data',
				multiSelect: false,
				rowTemplate: templatesPath + 'row-templates/row.html',
				afterSelectionChange: function (rowitem, event) {
					rowitem.entity.action.isShow = rowitem.selected;
				},
				rowHeight: 50,
				columnDefs: [
					{ field: 'date', displayName: 'Date', cellTemplate: templatesPath + 'row-templates/date.html' },
					{ field: 'name', displayName: 'Name', cellTemplate: templatesPath + 'row-templates/name.html' },
					{ field: 'value', displayName: 'Value', cellTemplate: templatesPath + 'row-templates/value.html' },
					{ field: 'trend', displayName: 'Trend', cellTemplate: templatesPath + 'row-templates/trend.html' },
					{ field: 'action', displayName: '', cellTemplate: templatesPath + 'row-templates/action.html' }]
			}
		};
	}]);