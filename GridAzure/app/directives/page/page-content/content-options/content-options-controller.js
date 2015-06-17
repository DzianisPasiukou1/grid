angular.module('gridTaskApp')
	.controller('contentOptionsCtrl', ['$scope', function ($scope) {
		$scope.checks = { values: [{ label: 'All' }, { label: 'No one' }, { label: 'Marked' }, { label: 'Not marked' }] };
		$scope.mores = { values: [{ label: 'More' }] };
		$scope.shows = { values: [{ label: 'Everywhere' }] };
	}]);