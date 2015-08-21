angular.module('gridTaskApp')
	.directive('contentOptionsCards', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			controller: 'contentOptionsCardsCtrl',
			scope: {
				options: '=',
			},
			templateUrl: templatesPath + 'directive-templates/content-options-cards.html'
		}
	}]);