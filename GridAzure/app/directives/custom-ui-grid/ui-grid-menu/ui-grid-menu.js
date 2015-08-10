angular.module('gridTaskApp')
	.directive('uiGridCustomMenu', ['$timeout', 'uiGridGridMenuService', function ($timeout, uiGridGridMenuService) {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {
				var self = {};
				self.scope = scope;
				self.uiGridGridMenuService = uiGridGridMenuService;

				if (self.scope.options.showResponsMenu) {
					self.scope.options.enableGridMenu = true;
				}

				$timeout(function () {
					this.scope.gridApi.core.on.columnVisibilityChanged(this.scope, function () {
						var totalWidth = this.scope.gridApi.grid.columns.reduce(function (a, b) {
							if (b.visible) {
								return a + b.minWidth;
							}
							else {
								return a;
							}
						}, 0);

						if ($(window).width() < totalWidth) {
							$('.page-CONTENT').css('minWidth', totalWidth + 'px');
						}
						else {
							$('.page-CONTENT').css('minWidth', '500px');
						}

						console.log('resize');
						console.log('total-width = ' + totalWidth);
						console.log('window width = ' + $(window).width());
					}.bind(this));

					var totalWidth = this.scope.gridApi.grid.columns.reduce(function (a, b) {
						return a + b.minWidth;
					}, 0);

					var isAllVisible = true;

					if ($(window).width() < totalWidth) {
						for (var i = this.scope.gridApi.grid.columns.length - 2; i > 1; i--) {
							if (this.scope.gridApi.grid.columns[i].visible) {
								this.uiGridGridMenuService.toggleColumnVisibility(this.scope.gridApi.grid.columns[i]);
								totalWidth -= this.scope.gridApi.grid.columns[i].minWidth;
								isAllVisible = false;
							}
							if ($(window).width() > totalWidth) {
								break;
							}
						}
					}

					if (!isAllVisible && !self.scope.options.enableGridMenu) {
						self.scope.options.enableGridMenu = true;
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
							for (var i = 0; i < this.scope.gridApi.grid.columns.length; i++) {
								if (!this.scope.gridApi.grid.columns[i].visible) {
									if ($(window).width() < totalWidth + this.scope.gridApi.grid.columns[i].minWidth) {
										break;
									}
									this.uiGridGridMenuService.toggleColumnVisibility(this.scope.gridApi.grid.columns[i]);
									totalWidth += this.scope.gridApi.grid.columns[i].minWidth;
								}
							}
						}

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