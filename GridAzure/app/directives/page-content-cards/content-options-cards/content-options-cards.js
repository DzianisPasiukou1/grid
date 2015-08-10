angular.module('gridTaskApp')
	.directive('contentOptionsCards', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			controller: 'contentOptionsCardsCtrl',
			scope: {
				options: '=',
			},
			templateUrl: templatesPath + 'directive-templates/CONTENT-options-cards.html'
		}
	}]);