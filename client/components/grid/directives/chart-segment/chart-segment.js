angular.module('gridExpressApp')
	.directive('chartSegment', ['templatesPath', function (templatesPath) {
		return {
			retstrict: 'EA',
			scope: {
				selectedUsers: '='
			},
			replace: true,
			controller: 'chartSegmentCtrl',
			templateUrl: templatesPath + 'directive-templates/chart-segment.html'
		}
	}]);