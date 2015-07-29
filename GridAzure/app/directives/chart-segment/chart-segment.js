angular.module('gridTaskApp')
	.directive('chartSegment', ['templatesPath', function (templatesPath) {
		return {
			retstrict: 'E',
			scope: {
				selectedUsers: '='
			},
			controller: 'chartSegmentCtrl',
			templateUrl: templatesPath + 'directive-templates/chart-segment.html',
			link: function (scope, element, attrs) {

			}
		}
	}]);