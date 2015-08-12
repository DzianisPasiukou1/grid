angular.module('gridExpressApp')
	.directive('chartSegment', ['templatesPath', function (templatesPath) {
		return {
			retstrict: 'EA',
			scope: {
				selectedUsers: '='
			},
			controller: 'chartSegmentCtrl',
			templateUrl: templatesPath + 'directive-templates/chart-segment.html'
		}
	}]);