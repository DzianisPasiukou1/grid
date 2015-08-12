angular.module('gridExpressApp')
	.directive('filterList', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			templateUrl: templatesPath + 'directive-templates/filter-list.html',
			controller: 'filterListCtrl',
			link: function (scope, element, attrs) {
			}
		}
	}]);