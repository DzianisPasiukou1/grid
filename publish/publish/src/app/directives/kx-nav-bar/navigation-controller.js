angular.module('gridTaskApp').controller('NavigationCtrl', ['$scope', 'NavigationTree', function ($scope, NavigationTree) {
	return $scope.navigationTree = NavigationTree.get();
}]);