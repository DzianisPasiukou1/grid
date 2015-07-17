angular.module('gridTaskApp')
	.directive('search', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				searchValue: '=',
				edited: '='
			},
			controller: 'searchCtrl',
			templateUrl: templatesPath + 'search.html',
			link: function (scope, element, attrs) {
				scope.$watch('searchValue', function (value) {
					if (value.length > 0) {
						scope.edited = false;
					}
					else {
						scope.edited = true;
					}
				})
			}
		}
	}]);