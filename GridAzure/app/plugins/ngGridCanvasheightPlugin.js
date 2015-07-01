function ngGridCanvasHeightPlugin(opts) {
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

			if (self.grid.$canvas.height() > 5900) {
				self.grid.$canvas.css('height', 6000 + 'px');
			}

			for (var i = 0; i < self.scope.renderedRows.length; i++) {
				if (self.scope.renderedRows[i].entity.isToggle) {
					step = self.scope.renderedRows[i].entity.step;

					if (self.grid.$canvas.height() > 5900) {
						self.grid.$canvas.css('height', 6300 + 'px');
					}
				}
				else {
					if (!self.scope.renderedRows[i].entity.action.isShow) {
						self.scope.renderedRows[i].elm.removeClass('selected');
					}
				}
			}

			if (self.scope.renderedRows[self.scope.renderedRows.length - 1]) {
				var height = self.scope.renderedRows[self.scope.renderedRows.length - 1].offsetTop + self.scope.renderedRows[self.scope.renderedRows.length - 1].elm.height();
			}
			else {
				var height = 0;
			}

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