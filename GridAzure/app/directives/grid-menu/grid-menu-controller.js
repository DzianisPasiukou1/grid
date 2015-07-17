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
				//if (action) {
				//	for (var i = $scope.columns.length - 2; i > 0 ; i--) {
				//		if ($scope.columns[i].visible) {
				//			$scope.columns[i].toggleVisible();
				//			action.element.toggleVisible();

				//			this.values.splice(this.values.indexOf(action), 1);
				//			this.values.push({ label: $scope.columns[i].field, element: $scope.columns[i] });
				//			break;
				//		}
				//	}
				//}
			}
		};
	}]);