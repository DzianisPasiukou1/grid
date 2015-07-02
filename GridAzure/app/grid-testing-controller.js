angular.module('gridTaskApp')
	.controller('gridTestingCtrl', ['$scope', 'gridUploadService', 'templatesPath', function ($scope, gridUploadService, templatesPath) {
		function getData() {
			setTimeout(function () {
				gridUploadService.get(function (data) {
					$scope.data = data;
					$scope.$apply();
				})
			}, 0);
		}
		getData();

		$scope.grid = {
			name: 'test grid1'
		}

		$scope.contentOptions = {
			loading: true,
			upload: function (data) {
				$scope.data = data;

				$scope.gridOptions.detailsTemplate = templatesPath + 'details-templates/details-upload.html';
				$scope.gridOptions.detailsCondition = undefined;

				$scope.$apply();
			},
			//refresh: function () {
			//	alert('refreshed');
			//},
			refreshCallback: getData,
			checks: {
				options: {
					actions: [{
						label: 'test'
					}],
					callback: function (action) {
						alert('test');
					}
				}
			}
		};

		$scope.gridOptions = {
			withDetails: true,
			detailsTemplate: templatesPath + 'details-templates/details-example1.html',
			detailsCondition: function (entity, index) {
				if (index % 2 != 0) {
					return templatesPath + 'details-templates/details-example2.html';
				}
			}
		}
	}]);