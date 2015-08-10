angular.module('gridTaskApp')
	.directive('uiGridCustomMenu', ['$timeout', function ($timeout) {
		return {
			restrict: 'EA',
			controller: 'uiGridMenuCtrl',
			link: function (scope, element, attrs) {
				var self = {};
				self.scope = scope;

				$timeout(function () {
					this.scope.gridApi.core.on.columnVisibilityChanged(this.scope, function () {
						var totalWidth = scope.getTotalWidth();

						scope.changeMinWidth(totalWidth);
					}.bind(this));

					var totalWidth = scope.getTotalWidth();

					var isAllVisible = true;

					scope.resize(totalWidth);

					if (!isAllVisible && !self.scope.options.enableGridMenu) {
						self.scope.options.enableGridMenu = true;
					}

					$(window).resize(function () {
						var totalWidth = scope.getTotalWidth();

						scope.resize(totalWidth);

						if (!self.scope.options.showResponsMenu) {

							var isAllVisible = true;

							for (var i = 0; i < this.scope.gridApi.grid.columns.length; i++) {
								if (!this.scope.gridApi.grid.columns[i].visible) {
									isAllVisible = false;
								}
							}

							if (isAllVisible) {
								self.scope.options.enableGridMenu = false;
							}
							else {
								self.scope.options.enableGridMenu = true;
							}
						}

					}.bind(this));
				}.bind(self));
			}
		}
	}]);