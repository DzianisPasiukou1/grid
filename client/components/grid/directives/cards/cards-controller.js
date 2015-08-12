angular.module('gridExpressApp')
	.controller('cardsCtrl', ['$scope', function ($scope) {
		$scope.startLeft = 40;
		$scope.groupMarginRight = 50;

		$scope.cards = $scope.cardsOptions.cards;
		$scope.startDate = $scope.contentOptions.datepickerOptions.startDate;
		$scope.endDate = $scope.contentOptions.datepickerOptions.endDate;
		$scope.margin = $scope.cardsOptions.margin;
	}]);