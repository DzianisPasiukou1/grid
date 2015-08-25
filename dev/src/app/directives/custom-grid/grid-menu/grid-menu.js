angular.module('gridTaskApp')
	.directive('gridMenu', ['templatesPath', '$window', 'menuUtils', function (templatesPath, $window, menuUtils) {
		return {
			restrict: 'EA',
			templateUrl: templatesPath + 'directive-templates/grid-menu.html',
			controller: 'gridMenuCtrl',
			controllerAs: 'gridMenuCtrl',
			link: function (scope, element, attrs, ctrl) {
				scope.$watch('columns', function (value) {
					if (Array.isArray(value) && value.length > 0) {
						ctrl.menu.refreshColumns(value);
						ctrl.isShow = ctrl.menu.getIsMenu();
						
						ctrl.menu.toggleColumns(angular.element($window).width());
					}
				});

				ctrl.isShow = ctrl.menu.getIsMenu();

				var nToggle = function () {
					toggle(angular.element($window).width());
				}

				var toggle = angular.bind(
					ctrl.menu,
					ctrl.menu.toggleColumns
					);

				angular.element($window).resize(nToggle);

				scope.$on('$destroy', function () {
					ctrl.menu.destroy();
					angular.element($window).off("resize", nToggle);
				});
			}
		}
	}]);