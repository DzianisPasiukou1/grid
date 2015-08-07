angular.module('gridTaskApp')
	.controller('cardsCtrl', ['$scope', function ($scope) {
		$scope.cards = $scope.cardsOptions.cards;
		$scope.startDate = $scope.cardsOptions.startDate;
		$scope.endDate = $scope.cardsOptions.endDate;
		$scope.margin = $scope.cardsOptions.margin;
	}]);