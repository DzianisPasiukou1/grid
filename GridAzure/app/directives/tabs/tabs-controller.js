angular.module('gridTaskApp')
	.controller('tabsCtrl', ['$scope', 'templatesPath', function ($scope, templatesPath) {
		$scope.tabs = [
			{
				header: { label: 'Overview' },
				options: {
					template: templatesPath + 'tabs-templates/overview.html'
				},
				isVisible: false
			},
		{
			header: { label: 'Details Information' },
			options: {
				template: templatesPath + 'tabs-templates/details-information.html'
			},
			isVisible: true
		}
		];

		$scope.open = function (tab) {
			$scope.tabs.forEach(function (tab) {
				tab.isVisible = false;
			})

			tab.isVisible = true;
		};
	}]);