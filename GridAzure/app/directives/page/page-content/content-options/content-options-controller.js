angular.module('gridTaskApp')
	.controller('contentOptionsCtrl', ['$scope', 'checkboxSelectConstants', function ($scope, checkboxSelectConstants) {
		$scope.checks = checkboxSelectConstants.values;
		$scope.mores = { values: [{ label: 'More' }] };
		$scope.shows = { values: [{ label: 'Everywhere' }] };
	}]);