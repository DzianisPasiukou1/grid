angular.module('gridTaskApp')
	.controller('customGridCtrl', ['$scope', 'data', function ($scope, data) {
		$scope.grid = {};
		$scope.data = [];

		function generator() {
			for (var i = 0; i < data.count; i++) {
				var day = Math.floor((Math.random() * 1000) + 1);

				var obj = {
					date: new Date(data.startDate.setDate(data.startDate.getDate() + day)),
					name: 'Changing the icon font location\nBootstrap assumes icon font files will be located in the ../fonts/ directory, relative to the compiled CSS files. Moving or renaming those font files means updating the CSS in one of three ways:\nChange the @icon-font-path and/or @icon-font-name variables in the source Less files.\nUtilize the relative URLs option provided by the Less compiler.\nChange the url() paths in the compiled CSS.\nUse whatever option best suits your specific development setup.',
					value: 10122.97,
					trend: 7,
					action: { values: [{ label: 'Action' }, { label: 'More' }], isShow: false }
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
				rowTemplate: 'app/templates/row-templates/row.html',
				afterSelectionChange: function (rowitem, event) {
					rowitem.entity.action.isShow = rowitem.selected;
				},
				rowHeight: 50,
				columnDefs: [
					{ field: 'date', displayName: 'Date', cellTemplate: 'app/templates/row-templates/date.html' },
					{ field: 'name', displayName: 'Name', cellTemplate: 'app/templates/row-templates/name.html' },
					{ field: 'value', displayName: 'Value', cellTemplate: 'app/templates/row-templates/value.html' },
					{ field: 'trend', displayName: 'Trend', cellTemplate: 'app/templates/row-templates/trend.html' },
					{ field: 'action', displayName: '', cellTemplate: 'app/templates/row-templates/action.html' }]
			}
		};
	}]);