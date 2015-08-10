angular.module('gridTaskApp')
	.controller('coreDiagramCtrl', ['$scope', function ($scope) {
		$scope.mouseOverInit = function (d) {
			$scope.type = {};
			$scope.value = { header: '', data: [] };

			if (d.name == 'Log in') {
				$scope.type.isMedium = true;
				$scope.value.header = "Event: Log In";
				$scope.value.data = {
					topSegments: ['Moms_2014', 'Affiluent_buyers', 'Auto-Inteders', 'Star Wars', 'Female 25-34'],
					topCampaings: ['C1_Dx_1', 'F2_DX_2', 'Gofundme DX3', 'Test campaign', 'Random Campaign']
				};
			}
			else {
				$scope.type.isSimple = true;
				$scope.value.header = "Video: ID: 124856";
				$scope.value.data = [{ campaignId: '657H836', adId: '904743' }, { campaignId: '657H836', adId: '904743' }]
			}

		};
	}]);