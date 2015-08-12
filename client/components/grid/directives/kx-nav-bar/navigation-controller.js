angular.module('gridExpressApp').controller('NavigationCtrl', ['$scope', 'NavigationTree', function ($scope, NavigationTree) {
	return $scope.navigationTree = NavigationTree.get();
}]);