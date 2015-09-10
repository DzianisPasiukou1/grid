(function () {
	'use strict';

	angular
		.module('ext.grid.main')
		.directive('extGridMenu', extGridMenu);

	extGridMenu.$inject = ['extGridTemplatesPath', '$window', 'menuUtils'];

	/**
	 * Description
	 * @method extGridMenu
	 * @param {} templatesPath
	 * @param {} $window
	 * @param {} menuUtils
	 * @return menu
	 */
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

		/**
		 * Description
		 * @method menuLink
		 * @param {} scope
		 * @param {} element
		 * @param {} attrs
		 * @param {} vm
		 * @return 
		 */
		function menuLink(scope, element, attrs, vm) {
			scope.$watch('vm.columns', columnsChanged);
			scope.$on('$destroy', destroy);
			angular.element($window).resize(windowResize);

			toggleColumns();

			/**
			 * Description
			 * @method columnsChanged
			 * @param {} value
			 * @return 
			 */
			function columnsChanged(value) {
				if (Array.isArray(value) && value.length > 0) {
					vm.menu.refreshColumns(value);
					vm.menu.toggleColumns(angular.element($window).width());

					vm.isShow = vm.menu.getIsMenu();
				}
			};

			/**
			 * Description
			 * @method destroy
			 * @return 
			 */
			function destroy() {
				vm.menu.destroy();
				angular.element($window).off("resize", windowResize);
			};

			/**
			 * Description
			 * @method windowResize
			 * @return 
			 */
			function windowResize() {
				toggleColumns();
			};

			/**
			 * Description
			 * @method toggleColumns
			 * @return 
			 */
			function toggleColumns() {
				vm.menu.toggleColumns(angular.element($window).width());
				vm.isShow = vm.menu.getIsMenu();
			};
		};
	};
} ());

