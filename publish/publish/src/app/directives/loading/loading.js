angular.module('gridTaskApp')
	.directive('loading', ['templatesPath', 'LOADING', '$window', function (templatesPath, LOADING, $window) {
		return {
			restrict: 'EA',
			scope: {
				parent: '='
			},
			templateUrl: templatesPath + 'directive-templates/loading.html',
			controller: 'loadingCtrl',
			controllerAs: 'ctrl',
			link: function (scope, element, attrs, ctrl) {
				ctrl.resize();

				angular.element($window).resize(ctrl.resize);

				scope.$on('$destroy', function () {
					angular.element($window).off("resize", ctrl.resize);
				});
			}
		}
	}]);