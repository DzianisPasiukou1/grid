(function () {
	'use strict'

	angular
		.module('ext.grid.main')
		.directive('extGridMenu', extGridMenu);

	extGridMenu.$inject = ['extGridTemplatesPath', '$window', 'menuUtils'];

	function extGridMenu(templatesPath, $window, menuUtils) {
		var menu = {
			restrict: 'EA',
			templateUrl: templatesPath + 'ext-grid-menu.html',
			controller: 'ExtGridMenuController',
			controllerAs: 'vm',
			scope: {
				columns: '=',
				options: '='
			},
			link: menuLink,
			bindToController: true
		}

		return menu;

		function menuLink(scope, element, attrs, vm) {
			scope.$watch('columns', columnsChanged);
			scope.$on('$destroy', destroy);
			angular.element($window).resize(windowResize);

			vm.isShow = vm.menu.getIsMenu();

			var toggle = angular.bind(
				vm.menu,
				vm.menu.toggleColumns
				);

			function columnsChanged(value) {
				if (Array.isArray(value) && value.length > 0) {
					vm.menu.refreshColumns(value);
					vm.isShow = vm.menu.getIsMenu();

					vm.menu.toggleColumns(angular.element($window).width());
				}
			};

			function destroy() {
				vm.menu.destroy();
				angular.element($window).off("resize", windowResize);
			};

			function windowResize() {
				toggle(angular.element($window).width());
			}
		};
	};
} ())

