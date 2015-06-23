angular.module('gridTaskApp')
	.controller('contentOptionsCtrl', ['$scope', 'checkboxSelectConstants', function ($scope, checkboxSelectConstants) {
		$scope.checks = checkboxSelectConstants.values;
		$scope.mores = { name: 'More', values: [{ label: 'View reports' }] };
		$scope.shows = { values: [{ label: 'Everywhere' }] };
	}]);