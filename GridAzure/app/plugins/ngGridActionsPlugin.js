function ngGridCanvasHeightPlugin(opts) {
	var self = this;
	self.grid = null;
	self.scope = null;
	self.opts = opts;
	self.init = function (scope, grid, services) {
		self.domUtilityService = services.DomUtilityService;
		self.grid = grid;
		self.scope = scope;
		var recalcHeightForData = function () { setTimeout(innerRecalcForData, 1); };

		var innerRecalcForData = function () {
			if (Array.isArray(self.grid.rowCache)
				&& self.grid.rowCache[0]
				&& self.grid.rowCache[0].actions === undefined) {
				self.grid.rowCache.forEach(function (value) {
					value.actions = self.opts;
				});
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