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
			bindToController: true,
		}

		return menu;

		function menuLink(scope, element, attrs, vm) {
			scope.$watch('vm.columns', columnsChanged);
			scope.$on('$destroy', destroy);
			angular.element($window).resize(windowResize);

			toggleColumns();

			function columnsChanged(value) {
				if (Array.isArray(value) && value.length > 0) {
					vm.menu.refreshColumns(value);
					vm.menu.toggleColumns(angular.element($window).width());

					vm.isShow = vm.menu.getIsMenu();
				}
			};

			function destroy() {
				vm.menu.destroy();
				angular.element($window).off("resize", windowResize);
			};

			function windowResize() {
				toggleColumns();
			};

			function toggleColumns() {
				vm.menu.toggleColumns(angular.element($window).width());
				vm.isShow = vm.menu.getIsMenu();
			};
		};
	};
} ())

