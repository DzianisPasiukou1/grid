﻿var Initializer = (function () {
	function Initializer(scope, element, content, templatesPath, $compile) {
		this.scope = scope;
		this.element = element;
		this.content = content;
		this.templatesPath = templatesPath;
		this.$compile = $compile;
	}

	Initializer.prototype.init = function () {
		this.initContentOpt();
		this.initGrid();
		this.initGridOpt();
		this.initUiGridOpt();
	}

	Initializer.prototype.initCards = function () {
		this.initContentCardsOpt();
		this.initCardsGrid();
		this.initUiGridOpt();
		this.initCardsOpt();
	};

	Initializer.prototype.initCardsOpt = function () {
		if (this.scope.cardsOptions === undefined) {
			this.scope.cardsOptions = {};
		}

		if (this.scope.cardsOptions.cards === undefined) {
			this.scope.cardsOptions.cards = this.content.cardsOptions.cards;

			if (this.scope.cardsOptions.startDate === undefined) {
				this.scope.cardsOptions.startDate = this.content.cardsOptions.startDate;
			}

			if (this.scope.cardsOptions.endDate === undefined) {
				this.scope.cardsOptions.endDate = this.content.cardsOptions.endDate;
			}

			if (this.scope.cardsOptions.dateRange === undefined) {
				this.scope.cardsOptions.dateRange = this.content.cardsOptions.dateRange;
			}

			if (this.scope.cardsOptions.margin === undefined) {
				this.scope.cardsOptions.margin = this.content.cardsOptions.margin;
			}

			for (var card in this.scope.cardsOptions.cards) {
				if (card == 'clicks') {
					continue;
				}

				this.scope.cardsOptions.cards[card].counter = new Counter(this.scope.cardsOptions.cards[card]);
			}

			$(document).click(function (event) {
				if (this.scope.cardsOptions.cards.clicks) {
					this.scope.cardsOptions.cards.clicks.count += 1;
					this.scope.$apply();
				}
			}.bind(this));
		};
	};

	Initializer.prototype.initContentOpt = function () {
		if (this.scope.contentOptions === undefined) {
			this.scope.contentOptions = {};
		}

		if (this.scope.contentOptions.loading) {
			this.scope.contentOptions.isLoading = true;
			if ($('loading').length == 0) {
				this.element.find(this.content.listSelector).append(this.content.loadingTemplate);
				this.$compile($('loading'))(this.scope);
			}
		}

		if (this.scope.contentOptions.checks === undefined) {
			this.scope.contentOptions.checks = this.content.checks;
		}

		if (this.scope.contentOptions.mores === undefined) {
			this.scope.contentOptions.mores = this.content.mores;
		}

		if (this.scope.contentOptions.filtrate === undefined) {
			this.scope.contentOptions.filtrate = function (value) {
				this.scope.gridOptions.filterOptions.filterText = convertFilterOptions(value).filterText;
				this.scope.uiGridOptions.filterOptions.filterText = convertFilterOptions(value).filterText;
			}.bind(this);
		}

		if (this.scope.contentOptions.search === undefined) {
			this.scope.contentOptions.search = function (value) {
				this.scope.gridOptions.filterOptions.filterText = value;
				this.scope.uiGridOptions.filterOptions.filterText = value;
			}.bind(this);
		}

		if (this.scope.contentOptions.refresh === undefined) {
			this.scope.contentOptions.refresh = function () {
				if (this.scope.contentOptions.loading) {
					this.scope.contentOptions.isLoading = true;
				}

				this.scope.contentOptions.refreshCallback();
			}.bind(this);
		}

		if (this.scope.contentOptions.withUpload || this.scope.contentOptions.upload !== undefined) {
			this.scope.contentOptions.isDynamic = true;

			if (this.scope.contentOptions.upload === undefined) {
				this.scope.contentOptions.upload = function (data) {
					if (this.scope.contentOptions.loading) {
						this.scope.contentOptions.isLoading = true;
					}

					this.scope.data = data;

					this.scope.grid.count = this.scope.data.length;

					this.scope.$apply();
				}.bind(this);
			}
		}

	};

	Initializer.prototype.initContentCardsOpt = function () {
		if (this.scope.contentOptions === undefined) {
			this.scope.contentOptions = {};
		}

		if (this.scope.contentOptions.filtrate === undefined) {
			this.scope.contentOptions.filtrate = function (value) {
				this.scope.uiGridOptions.filterOptions.filterText = convertFilterOptions(value).filterText;
			}.bind(this);
		}

		if (this.scope.contentOptions.search === undefined) {
			this.scope.contentOptions.search = function (value) {
				this.scope.uiGridOptions.filterOptions.filterText = value;
			}.bind(this);
		}

		this.scope.contentOptions.filterOptions = this.content.filterOptions(this.scope.data);

		this.scope.contentOptions.searchOptions = this.content.searchOptions(this.scope.data);
		this.scope.contentOptions.searchOptions.selected = this.scope.contentOptions.searchOptions[0];

		this.scope.contentOptions.searchValue = '';
	};

	Initializer.prototype.initCardsGrid = function () {
		if (this.scope.exports === undefined) {
			this.scope.exports = this.content.exports;
			this.scope.exports.options.callback = function (action) {
				this.scope.export = action;
			}.bind(this);
		}
	};

	Initializer.prototype.initGrid = function () {
		if (this.scope.exports === undefined) {
			this.scope.exports = this.content.exports;
			this.scope.exports.options.callback = function (action) {
				this.scope.export = action;
			}.bind(this);
		}

		if (this.scope.views === undefined) {
			this.scope.views = this.content.views;
			this.scope.views.options.callback = function (action) {
				this.scope.view = action;
			}.bind(this);
		}

		if (this.scope.grid === undefined) {
			this.scope.grid = {};

			this.scope.grid.name = this.content.gridName;
			if (Array.isArray(this.scope.data)) {
				this.scope.grid.count = this.scope.data.length;
			}
		}

		if (this.scope.grid.name === undefined) {
			this.scope.grid.name = this.content.gridName;
		}

		if (this.scope.grid.count === undefined) {
			if (Array.isArray(this.scope.data)) {
				this.scope.grid.count = this.scope.data.length;
			}
		}
	};

	Initializer.prototype.initGridOpt = function () {
		if (this.scope.gridOptions === undefined) {
			this.scope.gridOptions = {};
		}

		if (this.scope.gridOptions.data === undefined) {
			this.scope.gridOptions.data = this.content.ngGridOpt.data;
		}

		if (this.scope.gridOptions.multiSelect === undefined) {
			this.scope.gridOptions.multiSelect = this.content.ngGridOpt.multiSelect;
		}

		if (this.scope.gridOptions.rowTemplate === undefined) {
			this.scope.gridOptions.rowTemplate = this.content.ngGridOpt.rowTemplate;
		}

		if (this.scope.gridOptions.filterOptions === undefined) {
			this.scope.gridOptions.filterOptions = this.content.ngGridOpt.filterOptions;
		}

		if (this.scope.gridOptions.rowHeight === undefined) {
			this.scope.gridOptions.rowHeight = this.content.ngGridOpt.rowHeight;
		}

		if (this.scope.gridOptions.headerRowHeight === undefined) {
			this.scope.gridOptions.headerRowHeight = this.content.ngGridOpt.headerRowHeight;
		}

		if (this.scope.gridOptions.showFooter === undefined) {
			this.scope.gridOptions.showFooter = this.content.ngGridOpt.showFooter;
		}

		if (this.scope.gridOptions.footerRowHeight === undefined) {
			this.scope.gridOptions.footerRowHeight = this.content.ngGridOpt.footerRowHeight;
		}

		if (this.scope.gridOptions.footerTemplate === undefined) {
			this.scope.gridOptions.footerTemplate = this.content.ngGridOpt.footerTemplate;
		}

		if (this.scope.gridOptions.init === undefined) {
			if (this.scope.contentOptions.loading) {
				this.scope.gridOptions.init = function (grid, event) {
					this.scope.contentOptions.isLoading = false;
				}.bind(this);
			}
		}

		if (this.scope.gridOptions.detailsTemplate === undefined && this.scope.gridOptions.withDetails) {
			this.scope.gridOptions.detailsTemplate = this.content.ngGridOpt.detailsTemplate;
		}

		if (this.scope.gridOptions.rowActions === undefined) {
			this.scope.gridOptions.rowActions = this.content.ngGridOpt.rowActions;
		}

		if (this.scope.gridOptions.rowCheckAction === undefined) {
			this.scope.gridOptions.rowCheckAction = this.content.ngGridOpt.rowCheckAction;
		}

		if (this.scope.gridOptions.beforeSelectionChange === undefined) {
			this.scope.gridOptions.beforeSelectionChange = function (row, event) {
				return false;
			}.bind(this);
		}

		this.scope.pluginActionOpt = {
			values: this.scope.gridOptions.rowActions,
			detailsTemplate: this.scope.gridOptions.detailsTemplate,
			detailsCondition: this.scope.gridOptions.detailsCondition,
			onCheck: this.scope.gridOptions.rowCheckAction.bind(this.scope),
			contentOptions: this.scope.contentOptions
		}

		if (this.scope.gridOptions.plugins === undefined) {
			this.scope.gridOptions.plugins = [];
			this.scope.gridOptions.plugins.push(new ngGridActionsPlugin(this.scope.pluginActionOpt, this.$compile));
		}
		else {
			var isFindAct = false;

			for (var i = 0; i < this.scope.gridOptions.plugins.length; i++) {
				if (this.scope.gridOptions.plugins[i].constructor.name == 'ngGridActionsPlugin') {
					isFindAct = true;
					break;
				}
			}

			if (!isFindAct) {
				this.scope.gridOptions.plugins.push(new ngGridActionsPlugin(this.scope.pluginActionOpt, this.$compile));
			}
		}
	};

	Initializer.prototype.initUiGridOpt = function () {
		if (this.scope.uiGridOptions === undefined) {
			this.scope.uiGridOptions = {};
		}

		for (var prop in this.content.uiGridOpt) {
			if (this.scope.uiGridOptions[prop] === undefined) {
				this.scope.uiGridOptions[prop] = this.content.uiGridOpt[prop];
			}
		}

		if (this.scope.uiGridOptions.filterOptions === undefined) {
			this.scope.uiGridOptions.filterOptions = this.content.ngGridOpt.filterOptions;
		}

		if (this.scope.uiGridOptions.rowActions === undefined) {
			this.scope.uiGridOptions.rowActions = this.content.ngGridOpt.rowActions;
		}

	};

	Initializer.prototype.refreshOpt = function () {
		this.scope.contentOptions.filterOptions = this.content.filterOptions(this.scope.data);

		this.scope.contentOptions.searchOptions = this.content.searchOptions(this.scope.data);
		this.scope.contentOptions.searchOptions.selected = this.scope.contentOptions.searchOptions[0];

		this.scope.contentOptions.searchValue = '';
		this.scope.contentOptions.checks.options.selected = this.scope.contentOptions.checks.options.actions.noOne;

		var isFindAct = false;
		var indexAct = 0;

		for (var i = 0; i < this.scope.gridOptions.plugins.length; i++) {
			if (this.scope.gridOptions.plugins[i].constructor.name == 'ngGridActionsPlugin') {
				isFindAct = true;
				indexAct = i;
				break;
			}
		}

		if (!isFindAct) {
			this.scope.pluginActionOpt = {
				values: this.scope.gridOptions.rowActions,
				detailsTemplate: this.scope.gridOptions.detailsTemplate,
				detailsCondition: this.scope.gridOptions.detailsCondition,
				onCheck: this.scope.gridOptions.rowCheckAction.bind(this.scope),
				contentOptions: this.scope.contentOptions
			}
			this.scope.gridOptions.plugins[indexAct].refreshOpt(this.scope.pluginActionOpt);
		}

		if (this.scope.contentOptions.loading) {
			this.scope.contentOptions.isLoading = false;
		}
	};

	Initializer.prototype.refreshCheckCallback = function () {
		for (var i = 0; i < this.scope.gridOptions.plugins.length; i++) {
			if (this.scope.gridOptions.plugins[i].constructor.name == 'ngGridActionsPlugin') {
				isFindAct = true;
				indexAct = i;
				break;
			}
		}

		this.scope.gridOptions.plugins[indexAct].refreshCallback();
	};

	Initializer.prototype.refreshData = function (data) {
		this.refreshOpt();
		this.scope.grid.count = this.scope.data.length;
		this.scope.gridOptions.filterOptions.filterText = '';
		this.scope.uiGridOptions.filterOptions.filterText = '';

		var oldColumns = angular.copy(this.scope.gridOptions.columnDefs);
		var newColumns = columnGenerator(data, this.templatesPath);

		if (this.scope.gridOptions.reInit === undefined) {
			if (!columnsCompare(oldColumns, newColumns)) {
				this.scope.gridOptions.columnDefs = newColumns;

				if (this.scope.view) {
					if (this.scope.view.isGrid) {
						this.$compile($('custom-grid'))(this.scope);
					}
					else if (this.scope.view.isUiGrid) {
						//this.$compile($('custom-ui-grid'))(this.scope);
					}
				}
				else {
					//this.$compile($('.custom-ui-grid'))(this.scope);
				}
			}
		}
		else {
			if (view) {
				if (view.isGrid) {
					this.$compile($('custom-grid'))(this.scope);
				}
				else if (view.isUiGrid) {
					//this.$compile($('custom-ui-grid'))(this.scope);
				}
			}
			else {
				//this.$compile($('.custom-ui-grid'))(this.scope);
			}
		}

		if (this.scope.contentOptions.loading) {
			this.scope.contentOptions.isLoading = false;
		}
	};

	return Initializer;
})();
