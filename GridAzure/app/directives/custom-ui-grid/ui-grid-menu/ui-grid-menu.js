angular.module('gridTaskApp')
	.directive('uiGridCustomMenu', ['$timeout', 'uiGridGridMenuService', function ($timeout, uiGridGridMenuService) {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {
				var self = {};
				self.scope = scope;
				self.uiGridGridMenuService = uiGridGridMenuService;

				$timeout(function () {
					var totalWidth = this.scope.gridApi.grid.columns.reduce(function (a, b) {
						return a + b.minWidth;
					}, 0);

					if ($(window).width() < totalWidth) {
						for (var i = this.scope.gridApi.grid.columns.length - 2; i > 1; i--) {
							if (this.scope.gridApi.grid.columns[i].visible) {
								this.uiGridGridMenuService.toggleColumnVisibility(this.scope.gridApi.grid.columns[i]);
								totalWidth -= this.scope.gridApi.grid.columns[i].minWidth;
							}
							if ($(window).width() > totalWidth) {
								break;
							}
						}
					}

					$(window).resize(function () {
						var totalWidth = this.scope.gridApi.grid.columns.reduce(function (a, b) {
							if (b.visible) {
								return a + b.minWidth;
							}
							else {
								return a;
							}
						}, 0);

						if ($(window).width() < totalWidth) {
							for (var i = this.scope.gridApi.grid.columns.length - 2; i > 1; i--) {
								if (this.scope.gridApi.grid.columns[i].visible) {
									this.uiGridGridMenuService.toggleColumnVisibility(this.scope.gridApi.grid.columns[i]);
									totalWidth -= this.scope.gridApi.grid.columns[i].minWidth;
								}
								if ($(window).width() > totalWidth) {
									break;
								}
							}
						}
						else {
							for (var i = 2; i < this.scope.gridApi.grid.columns.length - 1; i++) {
								if (!this.scope.gridApi.grid.columns[i].visible) {
									if ($(window).width() < totalWidth + this.scope.gridApi.grid.columns[i].minWidth) {
										break;
									}
									this.uiGridGridMenuService.toggleColumnVisibility(this.scope.gridApi.grid.columns[i]);
									totalWidth += this.scope.gridApi.grid.columns[i].minWidth;
								}
							}
						}
					}.bind(this));
				}.bind(self));
			}
		}
	}]);