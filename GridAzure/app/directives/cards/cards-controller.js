﻿angular.module('gridTaskApp')
	.controller('cardsCtrl', ['$scope', function ($scope) {
		$scope.cards = $scope.cardsOptions.cards;
		$scope.startDate = $scope.contentOptions.datepickerOptions.startDate;
		$scope.endDate = $scope.contentOptions.datepickerOptions.endDate;
		$scope.margin = $scope.cardsOptions.margin;
	}]);