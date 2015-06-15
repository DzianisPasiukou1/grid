angular.module('gridTaskApp')
	.controller('contentOptionsCtrl', ['$scope', function ($scope) {
		$scope.checks = { values: [{ label: 'Not checked', value: false }, { label: 'Checked', value: true }] };
		$scope.mores = { values: [{ label: 'More' }] };
		$scope.shows = { values: [{ label: 'Everywhere' }] };
	}]);