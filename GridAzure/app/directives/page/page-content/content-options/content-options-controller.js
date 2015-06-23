angular.module('gridTaskApp')
	.controller('contentOptionsCtrl', ['$scope', 'checkboxSelectConstants', function ($scope, checkboxSelectConstants) {
		$scope.checks = checkboxSelectConstants.values;
		$scope.mores = {
			options:
				{
					label: 'More',
					values: [{ label: 'View reports' }],
					callback: function (action) {
						$scope.more = action;
					},
					isMenu: true
				}
		};
		$scope.shows = { values: [{ label: 'Everywhere' }] };
	}]);