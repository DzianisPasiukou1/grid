angular.module('gridTaskApp')
	.controller('gridMenuCtrl', ['$scope', function ($scope) {
		$scope.options = {
			isMenu: true,
			label: '',
			values: [],
			isCheckbox: true,
			onCheck: function (action, index) {
				$scope.columns[index].toggleVisible();

				$scope.resize(action);
			},
			withSave: false,
			onSave: function () {
			},
			callback: function (action) {
			}
		};
	}]);