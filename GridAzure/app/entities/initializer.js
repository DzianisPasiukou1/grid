var Initializer = (function () {
	function Initializer(scope, element, CONTENT, templatesPath, $compile) {
		this.scope = scope;
		this.element = element;
		this.CONTENT = CONTENT;
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

	Initializer.prototype.initSankey = function () {
		this.initCardsOpt();
		this.initSankeyContentOpt();
	};

	Initializer.prototype.refreshSankey = function () {
		this.scope.cardsOptions.cards = this.CONTENT.cardsOptions.cards;
		this.scope.cardsOptions.startDate = this.CONTENT.cardsOptions.startDate;
		this.scope.cardsOptions.endDate = this.CONTENT.cardsOptions.endDate;
		this.scope.cardsOptions.margin = 525;
		this.scope.sankeyData = {
			"links": [
				{ "source": "View video", "target": "Log in", "value": "1" },
				{ "source": "View video", "target": "Add to Cart", "value": "1.5" },
				{ "source": "Ad Imression", "target": "Log in", "value": "1" },
				{ "source": "Ad Imression", "target": "Ad Click", "value": "1" },
				{ "source": "Ad Click", "target": "Log in", "value": ".75" },
				{ "source": "Log in", "target": "Purchase Complete", "value": "1" },
				{ "source": "Add to Cart", "target": "Purchase Complete", "value": "1" },
				{ "source": "Add to Cart", "target": "Carting", "value": 1 },
				{ "source": "Carting", "target": "Init", "value": 0.5 },
				{ "source": "Carting", "target": "Log out", "value": 0.5 },
				{ "source": "Log out", "target": "Log in", "value": 1 },
				{ "source": "Log in", "target": "Information", "value": 1 },
				{ "source": "Information", "target": "Examination", "value": 1 }
			],
			"nodes": [
				{ "name": "View video", "color": "rgb(62,145,95)", "transform": "0,0", "mx": "0", "my": "0", "val": "50" },
				{ "name": "Log in", "color": "rgb(133,133,133)", "transform": "445,0", "mx": "445", "my": "0", "val": "65" },
				{ "name": "Ad Imression", "color": "rgb(211,46,53)", "transform": "0,415.55555555555554", "mx": "0", "my": "415.55555555555554", "val": "15" },
				{ "name": "Ad Click", "color": "rgb(20,0,254)", "transform": "699,567.7777777777778", "mx": "699", "my": "567.7777777777778", "val": "20" },
				{ "name": "Add to Cart", "color": "rgb(157,226,141)", "transform": "827,333.18181818181824", "mx": "827", "my": "333.18181818181824", "val": "30" },
				{ "name": "Purchase Complete", "color": "rgb(20,58,173)", "transform": "1118,405.55555555555554", "mx": "1118", "my": "405.55555555555554", "val": "12" },
				{ "name": "Carting", "color": "rgb(123,20,56)", "transform": "1172,3.6327926195491926", "mx": "1172", "my": "3.6327926195491926", "val": "55" },
				{ "name": "Init", "color": "rgb(0,23,76)", "transform": "1390,82.6327926195492", "mx": "1390", "my": "82.6327926195492", "val": "65" },
				{ "name": "Log out", "color": "rgb(78,66,12)", "transform": "756,0", "mx": "756", "my": "0", "val": "23" },
				{ "name": "Information", "color": "rgb(66,66,66)", "transform": "1060,162.6327926195492", "mx": "1060", "my": "162.6327926195492", "val": "33" },
				{ "name": "Examination", "color": "rgb(12,51,128)", "transform": "1455,390.63279261954915", "mx": "1455", "my": "390.63279261954915", "val": "76" }
			]
		};
		this.scope.histogramData = [{ name: "1", value: 100000 },
							{ name: "2", value: 150000 },
							{ name: "3", value: 170000 },
							{ name: "4", value: 300000 },
							{ name: "5", value: 350000 },
							{ name: "6", value: 400000 },
							{ name: "7", value: 500000 },
							{ name: "8", value: 550000 },
							{ name: "9", value: 600000 },
							{ name: "10", value: 700000 }];

	};

	Initializer.prototype.initSankeyContentOpt = function () {
		if (this.scope.contentOptions === undefined) {
			this.scope.contentOptions = {};
		}

		if (this.scope.contentOptions.eventType === undefined) {
			this.scope.contentOptions.eventType = this.CONTENT.eventType;
		}

		if (this.scope.contentOptions.segments === undefined) {
			this.scope.contentOptions.segments = this.CONTENT.segments;
		}

		if (this.scope.contentOptions.campaign === undefined) {
			this.scope.contentOptions.campaign = this.CONTENT.campaign;
		}

		if (this.scope.contentOptions.debugCard === undefined) {
			this.scope.contentOptions.debugCard = {};
		}

		if (this.scope.contentOptions.debugCard.id === undefined) {
			this.scope.contentOptions.debugCard.id = this.CONTENT.debugCard.id;
		}

		if (this.scope.contentOptions.debugCard.text === undefined) {
			this.scope.contentOptions.debugCard.text = this.CONTENT.debugCard.text;
		}

		if (this.scope.contentOptions.debugCard.body === undefined) {
			this.scope.contentOptions.debugCard.body = this.CONTENT.debugCard.body;
		}

		if (this.scope.contentOptions.debugCard.templateUrl === undefined && this.scope.contentOptions.debugCard.template === undefined) {
			this.scope.contentOptions.debugCard.templateUrl = this.CONTENT.debugCard.templateUrl;
		}

		if (this.scope.contentOptions.datepickerOptions === undefined) {
			this.scope.contentOptions.datepickerOptions = {};
		}

		if (this.scope.contentOptions.datepickerOptions.startDate === undefined) {
			this.scope.contentOptions.datepickerOptions.startDate = this.CONTENT.cardsOptions.startDate;
		}

		if (this.scope.contentOptions.datepickerOptions.endDate === undefined) {
			this.scope.contentOptions.datepickerOptions.endDate = this.CONTENT.cardsOptions.endDate;
		}

		if (this.scope.contentOptions.datepickerOptions.dateRange === undefined) {
			this.scope.contentOptions.datepickerOptions.dateRange = this.CONTENT.cardsOptions.dateRange;
		}

		if (this.scope.contentOptions.datepickerOptions.config === undefined) {
			this.scope.contentOptions.datepickerOptions.config = {
				singleMonth: true,
				showShortcuts: false,
				showTopbar: false
			}
		}

		if (this.scope.filters === undefined) {
			this.scope.filters = this.CONTENT.sankeyFilters;
		}

		if (this.scope.sankeyData === undefined) {
			d3.json(this.CONTENT.sankeyPath, function (error, graph) {
				this.scope.sankeyData = graph;
			}.bind(this));
		}

		if (this.scope.histogramData === undefined) {
			this.scope.histogramData = [{ name: "1", value: 100000 },
							{ name: "2", value: 150000 },
							{ name: "3", value: 170000 },
							{ name: "4", value: 300000 },
							{ name: "5", value: 350000 },
							{ name: "6", value: 400000 },
							{ name: "7", value: 500000 },
							{ name: "8", value: 550000 },
							{ name: "9", value: 600000 },
							{ name: "10", value: 700000 }];
		}
	};

	Initializer.prototype.initCardsOpt = function () {
		if (this.scope.cardsOptions === undefined) {
			this.scope.cardsOptions = {};
		}

		if (this.scope.cardsOptions.cards === undefined) {
			this.scope.cardsOptions.cards = this.CONTENT.cardsOptions.cards;

			if (this.scope.cardsOptions.margin === undefined) {
				this.scope.cardsOptions.margin = this.CONTENT.cardsOptions.margin;
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
				this.element.find(this.CONTENT.listSelector).append(this.CONTENT.loadingTemplate);
				this.$compile($('loading'))(this.scope);
			}
		}

		if (this.scope.contentOptions.checks === undefined) {
			this.scope.contentOptions.checks = this.CONTENT.checks;
		}

		if (this.scope.contentOptions.mores === undefined) {
			this.scope.contentOptions.mores = this.CONTENT.mores;
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

		this.scope.contentOptions.filterOptions = this.CONTENT.filterOptions(this.scope.data);

		this.scope.contentOptions.searchOptions = this.CONTENT.searchOptions(this.scope.data);
		this.scope.contentOptions.searchOptions.selected = this.scope.contentOptions.searchOptions[0];

		this.scope.contentOptions.searchValue = '';

		if (this.scope.contentOptions.datepickerOptions === undefined) {
			this.scope.contentOptions.datepickerOptions = {};
		}

		if (this.scope.contentOptions.datepickerOptions.startDate === undefined) {
			this.scope.contentOptions.datepickerOptions.startDate = this.CONTENT.cardsOptions.startDate;
		}

		if (this.scope.contentOptions.datepickerOptions.endDate === undefined) {
			this.scope.contentOptions.datepickerOptions.endDate = this.CONTENT.cardsOptions.endDate;
		}

		if (this.scope.contentOptions.datepickerOptions.dateRange === undefined) {
			this.scope.contentOptions.datepickerOptions.dateRange = this.CONTENT.cardsOptions.dateRange;
		}

		if (this.scope.contentOptions.datepickerOptions.config === undefined) {
			this.scope.contentOptions.datepickerOptions.config = {
				singleMonth: true,
				showShortcuts: false,
				showTopbar: false
			}
		}
	};

	Initializer.prototype.initCardsGrid = function () {
		if (this.scope.exports === undefined) {
			this.scope.exports = this.CONTENT.exports;
			this.scope.exports.options.callback = function (action) {
				this.scope.export = action;
			}.bind(this);
		}
	};

	Initializer.prototype.initGrid = function () {
		if (this.scope.exports === undefined) {
			this.scope.exports = this.CONTENT.exports;
			this.scope.exports.options.callback = function (action) {
				this.scope.export = action;
			}.bind(this);
		}

		if (this.scope.views === undefined) {
			this.scope.views = this.CONTENT.views;
			this.scope.views.options.callback = function (action) {
				this.scope.view = action;
			}.bind(this);
		}

		if (this.scope.grid === undefined) {
			this.scope.grid = {};

			this.scope.grid.name = this.CONTENT.gridName;
			if (Array.isArray(this.scope.data)) {
				this.scope.grid.count = this.scope.data.length;
			}
		}

		if (this.scope.grid.name === undefined) {
			this.scope.grid.name = this.CONTENT.gridName;
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
			this.scope.gridOptions.data = this.CONTENT.ngGridOpt.data;
		}

		if (this.scope.gridOptions.multiSelect === undefined) {
			this.scope.gridOptions.multiSelect = this.CONTENT.ngGridOpt.multiSelect;
		}

		if (this.scope.gridOptions.rowTemplate === undefined) {
			this.scope.gridOptions.rowTemplate = this.CONTENT.ngGridOpt.rowTemplate;
		}

		if (this.scope.gridOptions.filterOptions === undefined) {
			this.scope.gridOptions.filterOptions = this.CONTENT.ngGridOpt.filterOptions;
		}

		if (this.scope.gridOptions.rowHeight === undefined) {
			this.scope.gridOptions.rowHeight = this.CONTENT.ngGridOpt.rowHeight;
		}

		if (this.scope.gridOptions.headerRowHeight === undefined) {
			this.scope.gridOptions.headerRowHeight = this.CONTENT.ngGridOpt.headerRowHeight;
		}

		if (this.scope.gridOptions.showFooter === undefined) {
			this.scope.gridOptions.showFooter = this.CONTENT.ngGridOpt.showFooter;
		}

		if (this.scope.gridOptions.footerRowHeight === undefined) {
			this.scope.gridOptions.footerRowHeight = this.CONTENT.ngGridOpt.footerRowHeight;
		}

		if (this.scope.gridOptions.footerTemplate === undefined) {
			this.scope.gridOptions.footerTemplate = this.CONTENT.ngGridOpt.footerTemplate;
		}

		if (this.scope.gridOptions.init === undefined) {
			if (this.scope.contentOptions.loading) {
				this.scope.gridOptions.init = function (grid, event) {
					this.scope.contentOptions.isLoading = false;
				}.bind(this);
			}
		}

		if (this.scope.gridOptions.detailsTemplate === undefined && this.scope.gridOptions.withDetails) {
			this.scope.gridOptions.detailsTemplate = this.CONTENT.ngGridOpt.detailsTemplate;
		}

		if (this.scope.gridOptions.rowActions === undefined) {
			this.scope.gridOptions.rowActions = this.CONTENT.ngGridOpt.rowActions;
		}

		if (this.scope.gridOptions.rowCheckAction === undefined) {
			this.scope.gridOptions.rowCheckAction = this.CONTENT.ngGridOpt.rowCheckAction;
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

		for (var prop in this.CONTENT.uiGridOpt) {
			if (this.scope.uiGridOptions[prop] === undefined) {
				this.scope.uiGridOptions[prop] = this.CONTENT.uiGridOpt[prop];
			}
		}

		if (this.scope.uiGridOptions.filterOptions === undefined) {
			this.scope.uiGridOptions.filterOptions = this.CONTENT.ngGridOpt.filterOptions;
		}

		if (this.scope.uiGridOptions.rowActions === undefined) {
			this.scope.uiGridOptions.rowActions = this.CONTENT.ngGridOpt.rowActions;
		}

	};

	Initializer.prototype.refreshOpt = function () {
		this.scope.contentOptions.filterOptions = this.CONTENT.filterOptions(this.scope.data);

		this.scope.contentOptions.searchOptions = this.CONTENT.searchOptions(this.scope.data);
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
				}
			}
		}
		else {
			if (view) {
				if (view.isGrid) {
					this.$compile($('custom-grid'))(this.scope);
				}
			}
		}

		if (this.scope.contentOptions.loading) {
			this.scope.contentOptions.isLoading = false;
		}
	};

	return Initializer;
})();
