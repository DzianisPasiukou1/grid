(function () {
	angular
		.module('ext.grid.uiGrid')
		.directive('extUiGridMenu', extUiGridMenu);

	extUiGridMenu.$inject = ['$timeout', '$window'];

	function extUiGridMenu($timeout, $window) {
		var directive = {
			restrict: 'EA',
			controller: 'ExtUiGridMenuController',
			controllerAs: 'vm',
			bindToController: true,
			scope: {
				gridApi: '=',
				options: '='
			},
			link: link
		};

		return directive;

		function link(scope, element, attrs, vm) {
			angular.element($window).resize(resize);
			scope.$on('$destroy', destroy);
			scope.$watch('vm.gridApi', gridApiChanged);

			function gridApiChanged(gridApi) {
				if (angular.isDefined(gridApi)) {
					init();
				}
			};

			function init() {
				vm.gridApi.core.on.columnVisibilityChanged(scope, vm.columnVisibilityChanged);

				var totalWidth = vm.getTotalWidth();
				vm.resize(totalWidth);

				var isAllVisible = true;

				for (var i = 0; i < vm.gridApi.grid.columns.length; i++) {
					if (!vm.gridApi.grid.columns[i].visible) {
						isAllVisible = false;
					}
				}

				if (!isAllVisible && !vm.options.enableGridMenu) {
					vm.options.enableGridMenu = true;
				}
			}

			function resize() {
				var totalWidth = vm.getTotalWidth();

				vm.resize(totalWidth);

				if (!vm.options.showResponsMenu) {
					var isAllVisible = true;

					for (var i = 0; i < vm.gridApi.grid.columns.length; i++) {
						if (!vm.gridApi.grid.columns[i].visible) {
							isAllVisible = false;
						}
					}

					if (isAllVisible) {
						vm.options.enableGridMenu = false;
					}
					else {
						vm.options.enableGridMenu = true;
					}
				}
			};

			function destroy() {
				angular.element($window).off("resize", resize);
			}
		};
	};
} ());