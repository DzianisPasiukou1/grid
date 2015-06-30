function ngGridCanvasheightPlugin(opts) {
	var self = this;
	self.grid = null;
	self.scope = null;
	self.init = function (scope, grid, services) {
		self.domUtilityService = services.DomUtilityService;
		self.grid = grid;
		self.scope = scope;
		var recalcHeightForData = function () { setTimeout(innerRecalcForData, 1); };

		var innerRecalcForData = function () {
			var step = 0;

			for (var i = 0; i < self.scope.renderedRows.length; i++) {
				if (self.scope.renderedRows[i].entity.isToggle) {
					step = self.scope.renderedRows[i].entity.step;
				}
				else {
					self.scope.renderedRows[i].elm.removeClass('selected');
				}
			}

			self.grid.$canvas.css('height', self.grid.maxCanvasHt + step + 'px');

			self.scope.catHashKeys = function () {
				var hash = '',
					idx;
				for (idx in self.scope.renderedRows) {
					hash += self.scope.renderedRows[idx].$$hashKey;
				}
				return hash;
			};
		}
		self.scope.$watch('catHashKeys()', innerRecalcForData);
		self.scope.$watch(self.grid.config.data, recalcHeightForData);
	}
};