angular.module('gridTaskApp')
	.controller('gridUploadCtrl', ['$scope', 'gridUploadService', function ($scope, gridUploadService) {
		function getData() {
			gridUploadService.get(function (data) {
				$scope.data = data;
			});
		}
		getData();

		$scope.contentOptions = {
			refreshCallback: getData,
			withUpload: true,
		};
	}]);