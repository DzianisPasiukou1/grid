angular.module('gridTaskApp')
	.controller('contentOptionsCtrl', ['$scope', 'checkboxSelectConstants', function ($scope, checkboxSelectConstants) {
		$scope.checks = {
			options: {
				actions: checkboxSelectConstants.values,
				callback: function (action) {
					$scope.selectedOptions.check = action;
				}
			}
		};
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