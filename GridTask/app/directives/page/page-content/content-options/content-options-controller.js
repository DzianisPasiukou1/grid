angular.module('gridTaskApp')
	.controller('contentOptionsCtrl', ['$scope', function ($scope) {
		$scope.checks = { values: [{ label: 'Checked' }, { label: 'Not checked' }] };
		$scope.mores = { values: [{ label: 'More' }] };
		$scope.shows = { values: [{ label: 'Everywhere' }] };
	}]);