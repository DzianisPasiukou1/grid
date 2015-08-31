(function () {
	'use strict'

	angular
		.module('ext.grid.main')
		.factory('menuUtils', menuUtils);

	menuUtils.$inject = ['MENU', '$window'];

	function menuUtils(MENU, $window) {
		return {
			register: function (columns, opt) {
				this.opt = opt;

				this.opt = this.opt || {};
				this.opt.isMenu = this.opt.isMenu || false;
				this.opt.label = this.opt.label || '';
				this.opt.values = this.opt.values || [];
				this.opt.isCheckbox = this.opt.isCheckbox || true;
				this.opt.withSave = this.opt.withSave || false;
				this.opt.onSave = this.opt.onSave || function () {
				}
				this.opt.callback = this.opt.callback || function (action) {
				}
				this.opt.onCheck = this.opt.onCheck || angular.bind(this, this.check);
				this.opt.parentSelector = this.opt.parentSelector || MENU.parentSelector;
				this.opt.parentMinWidth = this.opt.parentMinWidth || MENU.parentMinWidth;

				if (!Number.isFinite(this.opt.countBlockLastColumn)) {
					this.opt.countBlockLastColumn = 1;
				}

				if (!Number.isFinite(this.opt.countBlockFirstColumn)) {
					this.opt.countBlockFirstColumn = 1;
				}

				this.colCache = [];

				this.columns = columns;

				this._calcAllWidth();
				this._pushValues();
			},
			destroy: function () {
				this.opt = this.colCache = this.columns = this.totalWidth = this.visibleWidth = null;
			},
			getColCache: function () {
				return this.colCache;
			},
			getColumns: function () {
				return this.columns;
			},
			getTotalWidth: function (isRecalc) {
				if (isRecalc) {
					this._calcTotalWidth();
				}

				return this.totalWidth;
			},
			getVisibleWidth: function (isRecalc) {
				if (isRecalc) {
					this._calcVisibleWidth();
				}

				return this.visibleWidth;
			},
			getIsMenu: function () {
				return this.colCache.length > 0 || this.opt.showResponsMenu;
			},
			getOptions: function () {
				return this.opt;
			},
			refreshColumns: function (columns) {
				this.columns = columns;
				this.colCache = [];

				this._calcAllWidth();
				this._pushValues();
			},
			toggleVisible: function (index) {
				this.columns[index].toggleVisible();
				this._changeOptVisible(this.columns[index]);

				if (!this.columns[index].visible) {
					this.colCache.push({
						label: this.columns[index].field,
						element: this.columns[index]
					});

					this.visibleWidth -= this.columns[index].minWidth;
				}
				else {
					angular.forEach(this.colCache, function (col, i) {
						if (col.element == this.columns[index]) {
							this.colCache.splice(i, 1);
						}
					}, this);

					this.visibleWidth += this.columns[index].minWidth;
				}
			},
			toggleColumns: function (windowWidth) {
				if (windowWidth < this.visibleWidth) {
					this._toBackFor(function (item, index) {
						if (item.visible) {
							this.toggleVisible(index);

							if (windowWidth > this.visibleWidth) {
								return -1;
							}
						}
					}, this);
				}
				else {
					this._toNextFor(function (item, index) {
						if (!item.visible) {
							if (windowWidth > this.visibleWidth + item.minWidth) {
								this.toggleVisible(index);
							}
							else {
								return -1;
							}
						}
					}, this);
				}
			},
			check: function (action, index) {
				this.toggleVisible(index);

				if (angular.element($window).width() < this.visibleWidth) {
					angular.element(this.opt.parentSelector).css({
						minWidth: this.visibleWidth + 'px'
					});
				}
				else {
					angular.element(this.opt.parentSelector).css({
						minWidth: this.opt.parentMinWidth + 'px'
					});
				}
			},
			_calcVisibleWidth: function () {
				this.visibleWidth = this.columns.reduce(function (a, b) {
					if (b.visible) {
						return a + b.minWidth;
					} else {
						return a;
					}
				}, 0);
			},
			_calcTotalWidth: function () {
				this.totalWidth = this.columns.reduce(
					function (a, b) {
						return a + b.minWidth;
					}, 0);
			},
			_calcAllWidth: function () {
				this._calcTotalWidth();
				this._calcVisibleWidth();
			},
			_pushValues: function () {
				this.opt.values = [];

				this._toNextFor(function (item, index) {
					this.opt.values.push({
						label: item.field,
						element: item,
						isVisible: item.visible
					});
				}, this);
			},
			_changeOptVisible: function (element) {
				angular.forEach(this.opt.values, function (item, index) {
					if (item.element == element) {
						item.isVisible = element.visible;
					}
				});
			},
			_toNextFor: function (func, context) {
				for (var i = 0; i < this.columns.length; i++) {
					if (angular.isFunction(func)) {
						var nFunc;

						nFunc = angular.bind(context, func, this.columns[i], i);
						var ret = nFunc(this.columns[i], i);

						if (ret == -1) {
							break;
						}
					}
					else {
						throw new Error("Wrong function.");
					}
				}
			},
			_toBackFor: function (func, context) {
				for (var i = this.columns.length - this.opt.countBlockLastColumn - 1; i > this.opt.countBlockFirstColumn; i--) {
					if (angular.isFunction(func)) {
						var nFunc;

						nFunc = angular.bind(context, func, this.columns[i], i);
						var ret = nFunc(this.columns[i], i);

						if (ret == -1) {
							break;
						}
					}
					else {
						throw new Error("Wrong function.");
					}
				}
			}
		}
	};
} ());
