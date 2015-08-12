angular.module('gridExpressApp')
	.directive('kxNavBar', ['templatesPath', function myfunction(templatesPath) {
		return {
			restrict: 'A',
			controller: 'kxNavBarCtrl',
			scope: {
			},
			templateUrl: templatesPath + 'directive-templates/kx-nav-bar.html',
			link: function (scope, element, attrs) {
			}
		}
	}, ]);