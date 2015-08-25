angular.module('gridTaskApp', ['ngGrid', 'ui.grid', 'ui.grid.selection', 'ui.grid.expandable', 'ui.select2', 'pascalprecht.translate'])
	.value('templatesPath', '/src/app/templates/');
var templatesPath = '/src/app/templates/';

angular.module('gridTaskApp')
	.constant('CONTENT', {
		checks: {
			options: {
				actions: {
					all: { label: 'All', isAll: true },
					noOne: { label: 'No one', isNoOne: true },
					marked: { label: 'Marked', isMarked: true },
					notMarked: { label: 'Not marked', isNotMarked: true }
				}
			}
		},
		mores: {
			options: {
				label: 'More',
				values: [{ label: 'View reports' }],
				isMenu: true
			}
		},
		exports: {
			options: {
				label: 'Export to: ',
				values: [{ label: 'Excel', isExcel: true }, { label: 'Pdf', isPdf: true }],
				callback: function (action) {
				}
			}
		},
		views: {
			options: {
				label: 'View: ',
				values: [{ label: 'Ng Grid', isGrid: true, isTiles: false }, { label: 'Tiles', isGrid: false, isTiles: true }, { label: 'UI Grid', isUiGrid: true }],
				callback: function (action) {
				}
			}
		},
		listSelector: '.page-content__list',
		loadingTemplate: '<loading ng-show="contentOptions.isLoading"></loading>',
		gridName: 'Default grid',
		ngGridOpt: {
			data: 'data',
			multiSelect: false,
			rowTemplate: templatesPath + 'grid-templates/row-templates/row-with-detalis.html',
			filterOptions: { filterText: '' },
			rowHeight: 60,
			headerRowHeight: 40,
			showFooter: true,
			footerRowHeight: 30,
			footerTemplate: templatesPath + 'grid-templates/grid-footer.html',
			detailsTemplate: templatesPath + 'grid-templates/details-templates/details.html',
			rowActions: {
				options: {
					label: 'Actions',
					values: [{ label: 'Edit', isEdit: true, priority: 4 }, { label: 'Copy', isCopy: true, priority: 3 }, { label: 'History', isHistory: true, priority: 2 }, { label: 'Delete', isDelete: true, priority: 1 }],
					isMenu: true
				},
				isShow: false
			},
			rowCheckAction: function (data) {
				var isCheckArray = data.filter(function (value) {
					if (value.actions.isCheck) {
						return true;
					}
				});

				if (isCheckArray.length == 0) {
					this.contentOptions.checks.options.selected = this.contentOptions.checks.options.actions.noOne;
				}
				else if (isCheckArray.length == data.length) {
					this.contentOptions.checks.options.selected = this.contentOptions.checks.options.actions.all;
				}
				else {
					this.contentOptions.checks.options.selected = this.contentOptions.checks.options.actions.marked;
				}
			}
		},
		uiGridOpt: {
			data: 'data',
			rowHeight: 60,
			showGridFooter: true,
			enableColumnMenus: false,
			enableRowSelection: true,
			enableGridMenu: false,
			multiSelect: false,
			modifierKeysToMultiSelect: false,
			noUnselect: true,
			enableExpandable: true,
			enableRowHeaderSelection: false,
			expandableRowTemplate: templatesPath + 'grid-templates/details-templates/details.html',
			expandableRowHeight: 220,
			selectionRowHeaderWidth: 35,
			enableExpandableRowHeader: false,
			enableFiltering: true,
			rowTemplate: templatesPath + 'ui-grid-templates/row.html',
			expandableRowScope: {
				subGridVariable: 'subGridScopeVariable'
			},
			gridFooterTemplate: '<div class="grid-footer"></div>',
			headerTemplate: templatesPath + 'ui-grid-templates/header.html',
			headerCellTemplate: templatesPath + 'ui-grid-templates/cell-templates/header.html',
			reInit: true,
			enableDetails: true,
			detailsCellTemplate: templatesPath + 'ui-grid-templates/cell-templates/details.html',
			detailsWidth: 60,
			detailsMinWidth: 60,
			enableAction: true,
			actionsCellTemplate: templatesPath + 'ui-grid-templates/cell-templates/action.html',
			actionsWidth: 250,
			actionsMinWidth: 115,
			columnMinWidth: 80,
			cellClass: function (grid, row, col, rowRenderedIndex, colRenderedIndex) {
				if (row.isChecked) {
					return 'checked';
				}
				else if (row.isExpanded) {
					return 'expanded';
				}
			},
			enableColumnFilter: false
		},
		cardsOptions: {
			cards: {
				//clicks: {
				//	label: 'Clicks',
				//	count: 0,
				//	counter: undefined,
				//	graphs: [{ style: { 'background-color': 'rgb(233, 124, 130)', height: '55px' } },
				//		{ style: { 'background-color': 'rgb(165, 189, 215)', height: '35px' } },
				//		{ style: { 'background-color': 'rgb(165, 215, 208)', height: '55px' } },
				//		{ style: { 'background-color': 'rgb(251, 201, 135)', height: '10px' } },
				//		{ style: { 'background-color': 'rgb(57, 124, 130)', height: '30px' } }]
				//},
				views: {
					label: 'Total Touchpoints',
					count: 1910000,
					graphs: [{ style: { 'background-color': 'rgb(10, 124, 130)', height: '30px' } },
						{ style: { 'background-color': 'rgb(165, 25, 215)', height: '50px' } },
						{ style: { 'background-color': 'rgb(165, 200, 208)', height: '60px' } },
						{ style: { 'background-color': 'rgb(30, 201, 135)', height: '25px' } },
						{ style: { 'background-color': 'rgb(57, 124, 100)', height: '30px' } }]
				},
				conversion: {
					label: 'Reached Goal',
					count: 2010,
					graphs: [{ style: { 'background-color': 'rgb(233, 44, 130)', height: '20px' } },
					{ style: { 'background-color': 'rgb(165, 189, 300)', height: '30px' } },
					{ style: { 'background-color': 'rgb(1, 215, 208)', height: '45px' } },
					{ style: { 'background-color': 'rgb(251, 201, 54)', height: '34px' } },
					{ style: { 'background-color': 'rgb(57, 33, 130)', height: '60px' } }]
				},
				spend: {
					label: 'Potential Reach',
					count: 2150,
					graphs: [{ style: { 'background-color': 'rgb(10, 124, 130)', height: '10px' } },
					{ style: { 'background-color': 'rgb(165, 189, 55)', height: '5px' } },
					{ style: { 'background-color': 'rgb(165, 231, 208)', height: '50px' } },
					{ style: { 'background-color': 'rgb(251, 201, 29)', height: '30px' } },
					{ style: { 'background-color': 'rgb(57, 124, 1)', height: '34px' } }]
				},
				//actions: {
				//	label: 'Actions',
				//	count: 1910000,
				//	graphs: [{ style: { 'background-color': 'rgb(10, 124, 130)', height: '30px' } },
				//		{ style: { 'background-color': 'rgb(165, 25, 215)', height: '50px' } },
				//		{ style: { 'background-color': 'rgb(165, 200, 208)', height: '60px' } },
				//		{ style: { 'background-color': 'rgb(30, 201, 135)', height: '25px' } },
				//		{ style: { 'background-color': 'rgb(57, 124, 100)', height: '30px' } }]
				//},
				//time: {
				//	label: 'Time',
				//	count: new Date(),
				//	graphs: [{ style: { 'background-color': 'rgb(233, 44, 130)', height: '20px' } },
				//	{ style: { 'background-color': 'rgb(165, 189, 300)', height: '30px' } },
				//	{ style: { 'background-color': 'rgb(1, 215, 208)', height: '45px' } },
				//	{ style: { 'background-color': 'rgb(251, 201, 54)', height: '34px' } },
				//	{ style: { 'background-color': 'rgb(57, 33, 130)', height: '60px' } }]
				//},
				//date: {
				//	label: 'Date',
				//	count: 2015,
				//	graphs: [{ style: { 'background-color': 'rgb(10, 124, 130)', height: '10px' } },
				//	{ style: { 'background-color': 'rgb(165, 189, 55)', height: '5px' } },
				//	{ style: { 'background-color': 'rgb(165, 231, 208)', height: '50px' } },
				//	{ style: { 'background-color': 'rgb(251, 201, 29)', height: '30px' } },
				//	{ style: { 'background-color': 'rgb(57, 124, 1)', height: '34px' } }]
				//}
			},
			startDate: new Date(new Date().setDate(new Date().getDate() - 1)),
			endDate: new Date(),
			dateRange: Math.abs(new Date().getTime() - new Date(new Date().setDate(new Date().getDate() - 1)).getTime()),
			margin: 270
		},
		filterOptions: function (data) {
			var options = [];

			if (Array.isArray(data) && data[0])
				for (var prop in data[0]) {
					if (prop != '$$hashKey') {
						options.push({ label: prop, isColumn: true });
					}
				}
			return options;
		},
		searchOptions: function (data) {
			var options = [];
			options.push({ label: 'everywhere', isEverywhere: true });

			if (Array.isArray(data) && data[0]) {
				for (var prop in data[0]) {
					if (prop != '$$hashKey') {
						options.push({ label: prop, isColumn: true });
					}
				}
			}

			return options;
		},
		eventType: {
			options: {
				actions: [
					{ label: 'Simple event' },
					{ label: 'Medium event' }],
				selected: { label: 'Simple event' }
			},
			selectOpt: {}
		},
		segments: {
			options: {
				actions: [{ label: 'People' }, { label: 'Trees' }, { label: 'Nodes' }, { label: 'Graphs' }, { label: 'Credentials' }],
			},
			selectOpt: {
				inheritClass: true,
				includeSelectAllOption: true
			}
		},
		campaign: {
			options: {
				actions: [{ label: 'AIX' }, { label: 'UI Campaign' }, { label: 'Design' }, { label: 'Modes' }, { label: 'KJ Entertainment' }],
			},
			selectOpt: {
				inheritClass: true,
				includeSelectAllOption: true
			}
		},
		sankeyFilters: {
			dateRange: {
				start: moment(new Date(new Date().setDate(new Date().getDate() - 7))),
				end: moment(new Date())
			},
		},
		sankeyPath: "data/sankey/my-graphs.json",
		debugCard: {
			id: 'debug',
			text: 'Debug',
			templateUrl: templatesPath + 'directive-templates/debug.html'
		},
		datepickerOptions: {
			config: {
				singleMonth: true,
				showShortcuts: false,
				showTopbar: false
			}
		}
	});
angular.module('gridTaskApp')
	 .constant("DATA", {
	 	count: 100,
	 	startDate: new Date(2000, 1, 1)
	 });
angular.module('gridTaskApp')
	.constant('HISTOGRAM', {
		data: [
	{ "name": "1", "value": 100000 },
	{ "name": "2", "value": 150000 },
	{ "name": "3", "value": 170000 },
	{ "name": "4", "value": 300000 },
	{ "name": "5", "value": 350000 },
	{ "name": "6", "value": 400000 },
	{ "name": "7", "value": 500000 },
	{ "name": "8", "value": 550000 },
	{ "name": "9", "value": 600000 },
	{ "name": "10", "value": 700000 }
		]
	})
angular.module('gridTaskApp')
	.constant('LOADING', {
		parentSelector: '.page-content__body'
	})
angular.module('gridTaskApp')
	.constant('MENU', {
		parentSelector: '.page-content',
		parentMinWidth: 500
});
angular.module('gridTaskApp')
	.constant('OVERLAY', {
		overlaySelector: '.custom-overlay',
		heighterSelector: '#chart[max-heighter]',
		alignTopSelector: '.page-content__cards',
		toggleMinWidth: 30
	});
angular.module('gridTaskApp')
	.constant('SANKEY', {
		data: {
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
				{
					"name": "View video",
					"color": "rgb(62,145,95)",
					"transform": "0,0",
					"mx": "0",
					"my": "0",
					"val": "50",
					"mouseover": {
						"type": { "isSimple": "true" },
						"header": "Video: ID: 124856",
						"data": [{ "campaignId": "657H836", "adId": "904743" }, { "campaignId": "657H836", "adId": "904743" }]
					}
				},
				{
					"name": "Log in",
					"color": "rgb(133,133,133)",
					"transform": "445,0",
					"mx": "445",
					"my": "0",
					"val": "65",
					"mouseover": {
						"type": { "isMedium": "true" },
						"header": "Event: Log In",
						"data": {
							"topSegments": ["Moms_2014", "Affiluent_buyers", "Auto-Inteders", "Star Wars", "Female 25 -34"],
							"topCampaings": ["C1_Dx_1", "F2_DX_2", "Gofundme DX3", "Test campaign", "Random Campaign"]
						}
					}
				},
				{
					"name": "Ad Imression",
					"color": "rgb(211,46,53)",
					"transform": "0,415.55555555555554",
					"mx": "0",
					"my": "415.55555555555554",
					"val": "15",
					"mouseover": {
						"type": { "isSimple": "true" },
						"header": "Video: ID: 124856",
						"data": [{ "campaignId": "657H836", "adId": "904743" }, { "campaignId": "657H836", "adId": "904743" }]
					}
				},
				{
					"name": "Ad Click",
					"color": "rgb(20,0,254)",
					"transform": "699,567.7777777777778",
					"mx": "699",
					"my": "567.7777777777778",
					"val": "20",
					"mouseover": {
						"type": { "isSimple": "true" },
						"header": "Video: ID: 124856",
						"data": [{ "campaignId": "657H836", "adId": "904743" }, { "campaignId": "657H836", "adId": "904743" }]
					}
				},
				{
					"name": "Add to Cart",
					"color": "rgb(157,226,141)",
					"transform": "827,333.18181818181824",
					"mx": "827",
					"my": "333.18181818181824",
					"val": "30",
					"mouseover": {
						"type": { "isSimple": "true" },
						"header": "Video: ID: 124856",
						"data": [{ "campaignId": "657H836", "adId": "904743" }, { "campaignId": "657H836", "adId": "904743" }]
					}
				},
				{
					"name": "Purchase Complete",
					"color": "rgb(20,58,173)",
					"transform": "1118,405.55555555555554",
					"mx": "1118",
					"my": "405.55555555555554",
					"val": "12",
					"mouseover": {
						"type": { "isSimple": "true" },
						"header": "Video: ID: 124856",
						"data": [{ "campaignId": "657H836", "adId": "904743" }, { "campaignId": "657H836", "adId": "904743" }]
					}
				},
				{
					"name": "Carting",
					"color": "rgb(123,20,56)",
					"transform": "1172,3.6327926195491926",
					"mx": "1172",
					"my": "3.6327926195491926",
					"val": "55",
					"mouseover": {
						"type": { "isSimple": "true" },
						"header": "Video: ID: 124856",
						"data": [{ "campaignId": "657H836", "adId": "904743" }, { "campaignId": "657H836", "adId": "904743" }]
					}
				},
				{
					"name": "Init",
					"color": "rgb(0,23,76)",
					"transform": "1390,82.6327926195492",
					"mx": "1390",
					"my": "82.6327926195492",
					"val": "65",
					"mouseover": {
						"type": { "isSimple": "true" },
						"header": "Video: ID: 124856",
						"data": [{ "campaignId": "657H836", "adId": "904743" }, { "campaignId": "657H836", "adId": "904743" }]
					}
				},
				{
					"name": "Log out",
					"color": "rgb(78,66,12)",
					"transform": "756,0",
					"mx": "756",
					"my": "0",
					"val": "23",
					"mouseover": {
						"type": { "isSimple": "true" },
						"header": "Video: ID: 124856",
						"data": [{ "campaignId": "657H836", "adId": "904743" }, { "campaignId": "657H836", "adId": "904743" }]
					}
				},
				{
					"name": "Information",
					"color": "rgb(66,66,66)",
					"transform": "1060,162.6327926195492",
					"mx": "1060",
					"my": "162.6327926195492",
					"val": "33",
					"mouseover": {
						"type": { "isSimple": "true" },
						"header": "Video: ID: 124856",
						"data": [{ "campaignId": "657H836", "adId": "904743" }, { "campaignId": "657H836", "adId": "904743" }]
					}
				},
				{
					"name": "Examination",
					"color": "rgb(12,51,128)",
					"transform": "1455,390.63279261954915",
					"mx": "1455",
					"my": "390.63279261954915",
					"val": "76",
					"mouseover": {
						"type": { "isSimple": "true" },
						"header": "Video: ID: 124856",
						"data": [{ "campaignId": "657H836", "adId": "904743" }, { "campaignId": "657H836", "adId": "904743" }]
					}
				}
			]
		}
	});
var directiveName = "anyOtherClick";

angular.module('gridTaskApp')
	.directive('anyOtherClick', ["$parse", 'anyOtherClickFactory', function ($parse, anyOtherClickFactory) {
		return {
			restrict: 'A',
			link: function (scope, element, attr, controller) {
				var anyOtherClickFunction, documentClickHandler;

				anyOtherClickFunction = $parse(attr[directiveName]);
				documentClickHandler = function (event) {
					var eventOutsideTarget = (element[0] !== event.target) && (0 === element.find(event.target).length);
					if (eventOutsideTarget) {
						scope.$apply(function () {
							anyOtherClickFunction(scope, {});
						});
					}
				};
				anyOtherClickFactory._register(documentClickHandler);

				scope.$on("$destroy", function () {
					anyOtherClickFactory._destroy(documentClickHandler);
				});
			},
		}
	}]);
angular.module('gridTaskApp')
	.controller('cardsCtrl', ['$scope', 'cardsFactory', function ($scope, cardsFactory) {
		cardsFactory.register($scope.cardsOptions.cards,
			$scope.contentOptions.datepickerOptions.startDate,
			$scope.contentOptions.datepickerOptions.endDate,
			$scope.cardsOptions.margin,
			$scope.contentOptions);

		angular.extend($scope, cardsFactory.getInstance());

		$scope.refresh = function (cards) {
			cardsFactory.refresh(cards);
			angular.extend($scope, cardsFactory.getInstance());
		}

		$scope.enableDebugging = function (isDebug) {
			cardsFactory.enableDebugging(isDebug);
		}

		$scope.flipAll = function () {
			cardsFactory.flipAll();
		}

		$scope.clear = function () {
			cardsFactory.clear();
		}
	}]);
angular.module('gridTaskApp')
	.directive('cards', ['templatesPath', '$timeout', function (templatesPath, $timeout) {
		return {
			restrict: 'EA',
			templateUrl: templatesPath + 'directive-templates/cards.html',
			scope: {
				cardsOptions: '=cards',
				contentOptions: '='
			},
			controller: 'cardsCtrl',
			link: function (scope, element, attrs) {
				if (scope.contentOptions.enableDebugging) {
					scope.$on('debugFlip', function (event, id) {
						element.find('#' + scope.contentOptions.debugCard.id).flip();
					})
					$timeout(function () {
						scope.enableDebugging(true);
					});
				}
				scope.$watch('cardsOptions.cards', function (cards) {
					scope.refresh(cards);
					scope.$on('cardFlip', function (event, id) {
						element.find('#' + id).flip();
					})
					$timeout(function () {
						scope.flipAll();
					})
				});
				scope.$on('$destroy', function () {
					scope.clear();
				})
			}
		}
	}]);
angular.module('gridTaskApp')
	.controller('chartSegmentCtrl', ['$scope', function ($scope) {
		$scope.panel = {
			header: {
				text: 'Selected Users'
			},
			btn: {
				text: 'Create Segment'
			}
		}

		$scope.deleteUser = function (user, index) {
			$scope.selectedUsers.splice(index, 1);
		}
	}]);
angular.module('gridTaskApp')
	.directive('chartSegment', ['templatesPath', function (templatesPath) {
		return {
			retstrict: 'EA',
			scope: {
				selectedUsers: '='
			},
			replace: true,
			controller: 'chartSegmentCtrl',
			templateUrl: templatesPath + 'directive-templates/chart-segment.html'
		}
	}]);
angular.module('gridTaskApp')
	.controller('checkboxSelectCtrl', ['$scope', function ($scope) {
		if ($scope.options.selected === undefined) {
			$scope.options.selected = {};
		}

		if ($scope.options.callback) {
			$scope.$on('checkboxSelect', function (event, data) {
				$scope.options.callback(data);
			});
		}

		$scope.$watch('options.selected', function (value) {
			if (value) {
				if (value.isAll) {
					value.check = true;
				}
				else {
					value.check = false;
				}
			}
		});

		$scope.toggle = function () {
			$scope.isShow = !$scope.isShow;
		}

		$scope.turnOff = function () {
			$scope.isShow = false;
		}

		$scope.select = function (action) {
			$scope.turnOff();
			$scope.options.selected = action;
			$scope.$emit('checkboxSelect', action);
		}

		$scope.checked = function (value) {
			$scope.turnOff();
			if (value) {
				$scope.options.selected = $scope.options.actions.all;
			}
			else {
				$scope.options.selected = $scope.options.actions.noOne;
			}
			$scope.$emit('checkboxSelect', $scope.options.selected);
		};
	}]);
angular.module('gridTaskApp')
	.directive('checkboxSelect', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			scope: {
				options: '=checkboxSelect'
			},
			replace: true,
			templateUrl: templatesPath + 'directive-templates/checkbox-select.html',
			controller: 'checkboxSelectCtrl',
			link: function (scope, element, attrs) {
			}
		}
	}]);
angular.module('gridTaskApp')
	.controller('coreDiagramCtrl', ['chartFactory', '$scope', '$parse', function (chartFactory, $scope, $parse) {
		$scope.chart = chartFactory.getChart($scope.data, $scope.opt);

		$scope.mouseOverInit = function (data) {
			$scope.type = $parse('mouseover.type')(data);
			$scope.value = {
				header: $parse('mouseover.header')(data),
				data: $parse('mouseover.data')(data)
			};
		}
	}]);
angular.module('gridTaskApp')
	.directive('coreDiagram', ['templatesPath', '$compile', function (templatesPath, $compile) {
		return {
			restrict: 'EA',
			templateUrl: templatesPath + 'directive-templates/core-diagram.html',
			controller: 'coreDiagramCtrl',
			scope: {
				opt: '=coreDiagram',
				data: '=sankeyData'
			},
			link: function (scope, element, attrs) {
				scope.$watch('data', function (graph) {
					if (graph) {
						scope.chart.clearHtml(element.find('#chart'));
						scope.chart.refreshData(graph);
						scope.chart.fullRenderSankey();
					}
				});

				scope.$on('mouseover', function (event, data) {
					scope.mouseOverInit(data);

					angular.element('mouse-over').remove();
					scope.parentTop = element.offset().top;
					element.append("<mouse-over type='type' parent-top='parentTop' value='value'></mouse-over>");

					$compile(angular.element('mouse-over'))(scope);
				})

				scope.$on('mouseout', function () {
					angular.element('mouse-over').remove();
				})

				scope.$on('drag', function (event, d, elm) {
					d3.select(elm).attr("transform",
							"translate(" + (
								   d.x = Math.max(0, Math.min(scope.chart.width - d.dx, d3.event.x))
								) + "," + (
									   d.y = Math.max(0, Math.min(scope.chart.height - d.dy, d3.event.y))
								) + ")");

					scope.chart.sankey.relayout();
					scope.chart.link.attr("d", scope.chart.path);
				})

				scope.$on("$destroy", function () {
					scope.chart.destroy();
				})
			}
		}
	}]);
angular.module('gridTaskApp')
	.controller('customDatepickerCtrl', ['$scope', '$element', function ($scope, $element) {
		$scope.dateBtnSelector = '.date-btn__toggle';

		$scope.toggle = function () {
			$scope.isShow = !$scope.isShow;

			if ($scope.isShow) {
				$element.find($scope.dateBtnSelector).data('dateRangePicker').open();
			}
			else {
				angular.element($scope.dateBtnSelector).data('dateRangePicker').close();
			}
		};

		$scope.close = function () {
			$scope.isShow = false;
			$element.find($scope.dateBtnSelector).data('dateRangePicker').close();
		}
	}]);
angular.module('gridTaskApp')
	.directive('customDatepicker', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			templateUrl: templatesPath + 'directive-templates/custom-datepicker.html',
			scope: {
				opt: '=customDatepicker'
			},
			controller: 'customDatepickerCtrl',
			link: function (scope, element, attrs) {
				element.find(scope.dateBtnSelector).dateRangePicker(scope.opt.config).bind('datepicker-change', function (event, obj) {
					scope.opt.startDate = obj.date1;
					scope.opt.endDate = obj.date2;
					scope.opt.dateRange = Math.abs(scope.opt.endDate.getTime() - scope.opt.startDate.getTime());
					scope.$apply();
				}).bind('datepicker-close', function () {
					scope.isShow = false;
					if (scope.$root.$$phase != '$apply' && scope.$root.$$phase != '$digest') {
						scope.$apply();
					}
				});
			}
		}
	}])
angular.module('gridTaskApp')
	.controller('customGridCtrl', ['$scope', 'templatesPath', function ($scope, templatesPath) {
	}]);
angular.module('gridTaskApp')
	.directive('customGrid', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			controller: 'customGridCtrl',
			scope: {
				data: '=gridData',
				exportTo: '=',
				options: '=gridOptions'
			},
			require: ['?^gridData', '?^gridOptions'],
			templateUrl: templatesPath + 'directive-templates/custom-grid.html',
			link: function (scope, element, attrs) {
			}
		};
	}]);
(function () {
	'use strict'

	angular
		.module('gridTaskApp')
		.controller('gridMenuCtrl', gridMenuCtrl);

	gridMenuCtrl.$inject = ['menuUtils'];

	function gridMenuCtrl(menuUtils) {
		var self = this;

		self.menu = menuUtils;
		self.menu.register(self.columns, self.options);
	};
} ());

(function () {
	'use strict'

	angular
		.module('gridTaskApp')
		.directive('gridMenu', gridMenu);

	gridMenu.$inject = ['templatesPath', '$window', 'menuUtils'];

	function gridMenu(templatesPath, $window, menuUtils) {
		var menu = {
			restrict: 'EA',
			templateUrl: templatesPath + 'directive-templates/grid-menu.html',
			controller: 'gridMenuCtrl',
			controllerAs: 'gridMenuCtrl',
			scope: {
				columns: '=',
				options: '='
			},
			link: menuLink,
			bindToController: true
		}

		return menu;

		function menuLink(scope, element, attrs, ctrl) {
			scope.$watch('columns', function (value) {
				if (Array.isArray(value) && value.length > 0) {
					ctrl.menu.refreshColumns(value);
					ctrl.isShow = ctrl.menu.getIsMenu();

					ctrl.menu.toggleColumns(angular.element($window).width());
				}
			});

			ctrl.isShow = ctrl.menu.getIsMenu();

			var nToggle = function () {
				toggle(angular.element($window).width());
			}

			var toggle = angular.bind(
				ctrl.menu,
				ctrl.menu.toggleColumns
				);

			angular.element($window).resize(nToggle);

			scope.$on('$destroy', function () {
				ctrl.menu.destroy();
				angular.element($window).off("resize", nToggle);
			});
		};
	};
} ())


angular.module('gridTaskApp')
	.directive('rowCheck', [function () {
		return {
			restrict: 'EAC',
			scope: {
				value: '=rowCheck'
			},
			link: function (scope, element, attrs) {
				scope.$watch('value.orig.actions.isCheck', function (value) {
					if (value) {
						element.parent().addClass('checked');
					}
					else {
						element.parent().removeClass('checked');
					}
				});
			}
		}
	}]);
angular.module('gridTaskApp')
	.controller('customUiGridCtrl', ['$scope', 'templatesPath', '$compile', '$rootScope', function ($scope, templatesPath, $compile, $rootScope) {

		$scope.options.onRegisterApi = function (gridApi) {
			$scope.gridApi = gridApi;

			gridApi.core.on.rowsRendered($scope, function () {
				$scope.gridApi.grid.rows.forEach(function (row) {
					if ($scope.options.enableAction) {
						row.actions = angular.copy($scope.options.rowActions);
						row.actions.static = new Row(row, $rootScope, $compile)
						row.actions.history = [];
						row.actions.options.callback = function (action) {
							if (action.isEdit) {
								row.actions.static.edit();
							}
							else if (action.isCopy) {
								row.actions.static.copy();
							}
							else if (action.isDelete) {
								row.actions.static.delete($scope.data);
							}
							else if (action.isHistory) {
								row.actions.static.history();
							}
						};
					}
					else {
						row.actions = {};
					}
					if ($scope.options.enableDetails) {
						row.actions.tab = 2;
						row.actions.expand = function () {
							$scope.gridApi.expandable.toggleRowExpansion(row.entity);
						};
						row.actions.disableCheck = $scope.options.disableCheck;
					}
					if ($scope.contentOptions.checks) {
						row.actions.setCheck = function () {
							var data = $scope.gridApi.grid.rows;

							var isCheckArray = data.filter(function (value) {
								if (value.isCheck) {
									return true;
								}
							});

							if (isCheckArray.length == 0) {
								$scope.contentOptions.checks.options.selected = $scope.contentOptions.checks.options.actions.noOne;
							}
							else if (isCheckArray.length == data.length) {
								$scope.contentOptions.checks.options.selected = $scope.contentOptions.checks.options.actions.all;
							}
							else {
								$scope.contentOptions.checks.options.selected = $scope.contentOptions.checks.options.actions.marked;
							}

							$scope.gridApi.grid.refresh();
						}
					};
				})
			});

			$scope.gridApi.grid.registerRowsProcessor($scope.singleFilter, 200);

			if ($scope.options.enableDetails) {
				gridApi.expandable.on.rowExpandedStateChanged($scope, function (row) {
					if (row.isExpanded) {
						$scope.gridApi.grid.rows.forEach(function (rowCache) {
							if (rowCache.isExpanded && row.entity != rowCache.entity) {
								rowCache.actions.expand();
							}
						});
					}
				});
			}

			if ($scope.contentOptions.checks) {
				$scope.contentOptions.checks.options.callback = function (check) {
					if (check) {
						if (check.isAll) {
							$scope.gridApi.grid.rows.forEach(function (row) {
								row.isCheck = true;
							});
						}
						else if (check.isNoOne) {
							$scope.gridApi.grid.rows.forEach(function (row) {
								row.isCheck = false;
							});
						}
						else if (check.isMarked) {
							$scope.gridApi.grid.rows.forEach(function (row) {
							});
						}
						else if (check.isNotMarked) {
							$scope.gridApi.grid.rows.forEach(function (row) {
								row.isCheck = !row.isCheck;
							});
						}
					}
				}
			}
		}

		$scope.singleFilter = function (renderableRows) {
			var filtersText = $scope.options.filterOptions.filterText.split(';');

			if (filtersText.length == 1 && filtersText[0].indexOf(':') == -1) {
				var matcher = new RegExp($scope.options.filterOptions.filterText);

				renderableRows.forEach(function (row) {
					var match = false;

					$scope.options.columnDefs.forEach(function (col) {
						if (row.entity[col.field] !== undefined) {
							if (row.entity[col.field].toString().match(matcher)) {
								match = true;
							}
						}
					});

					if (!match) {
						row.visible = false;
					}
				});
			}
			else {
				for (var i = 0; i < filtersText.length; i++) {
					if (filtersText[i] == '') {
						break
					}

					var propName = filtersText[i].substr(0, filtersText[i].indexOf(':'));
					var propVal = filtersText[i].substr(filtersText[i].indexOf(':') + 1);

					var matcher = new RegExp(propVal);

					renderableRows.forEach(function (row) {
						var match = false;

						$scope.options.columnDefs.forEach(function (col) {
							if (row.entity[propName] !== undefined) {
								if (row.entity[propName].toString().match(matcher)) {
									match = true;
								}
							}
						});

						if (!match) {
							row.visible = false;
						}
					});

				}
			}


			return renderableRows;
		}

		$scope.rowChangedClass = function (renderableRows) {
			return renderableRows;
		};

		$scope.$watch('options.filterOptions.filterText', function (text) {
			$scope.gridApi.grid.refresh();
		});

		$scope.$watch('data', function (data) {
			if ($scope.options.reInit) {
				var columns = [];

				if ($scope.options.enableDetails) {
					columns.push({
						field: 'details', displayName: '', headerCellTemplate: $scope.options.headerCellTemplate, cellTemplate: $scope.options.detailsCellTemplate, enableSorting: false, width: $scope.options.detailsWidth, minWidth: $scope.options.detailsMinWidth, enableFiltering: $scope.options.enableColumnFilter,
						cellClass: $scope.options.cellClass
					});
				}

				if (data[0]) {
					for (var i = 0; i < data.length; i++) {
						if (data[i].isColumn) {
							return;
						}
					}

					for (var field in data[0]) {

						if (field == '$$hashKey') {
							continue;
						}

						columns.push({
							field: field,
							displayName: field,
							enableFiltering: $scope.options.enableColumnFilter,
							minWidth: $scope.options.columnMinWidth,
							cellClass: $scope.options.cellClass
						})
					}
				}

				if ($scope.options.enableAction) {
					columns.push({
						field: 'action', displayName: '', cellTemplate: $scope.options.actionsCellTemplate, headerCellTemplate: $scope.options.headerCellTemplate, enableSorting: false, width: $scope.options.actionsWidth, minWidth: $scope.options.actionsMinWidth, enableFiltering: $scope.options.enableColumnFilter,
						cellClass: $scope.options.cellClass
					});
				}

				$scope.options.columnDefs = columns;
			}
		});
	}]);
angular.module('gridTaskApp')
	.directive('customUiGrid', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			scope: {
				data: '=gridData',
				options: '=gridOptions',
				contentOptions: '='
			},
			controller: 'customUiGridCtrl',
			require: ['?^gridData', '?^gridOptions'],
			templateUrl: templatesPath + 'directive-templates/custom-ui-grid.html',
			link: function (scope, element, attrs) {
			}
		}
	}]);
angular.module('gridTaskApp')
	.controller('uiGridMenuCtrl', ['$scope', 'MENU', 'uiGridGridMenuService', '$window', function ($scope, MENU, uiGridGridMenuService, $window) {
		if ($scope.options.menu === undefined) {
			$scope.options.menu = {};
		}

		if ($scope.options.menu.parentSelector === undefined) {
			$scope.parentSelector = MENU.parentSelector;
		}

		if ($scope.options.menu.parentMinWidth === undefined) {
			$scope.parentMinWidth = MENU.parentMinWidth;
		}

		if ($scope.options.showResponsMenu) {
			$scope.options.enableGridMenu = true;
		}

		$scope.getTotalWidth = function () {
			var totalWidth = $scope.gridApi.grid.columns.reduce(function (a, b) {
				if (b.visible) {
					return a + b.minWidth;
				}
				else {
					return a;
				}
			}, 0);

			return totalWidth;
		}

		$scope.changeMinWidth = function (totalWidth) {
			if (angular.element('body')[0].scrollWidth < totalWidth) {
				angular.element($scope.parentSelector).css('minWidth', totalWidth + 'px');
			}
			else {
				angular.element($scope.parentSelector).css('minWidth', $scope.parentMinWidth + 'px');
			}
		}

		$scope.resize = function (totalWidth) {
			if (angular.element('body')[0].scrollWidth < totalWidth) {
				for (var i = $scope.gridApi.grid.columns.length - 2; i > 1; i--) {
					if ($scope.gridApi.grid.columns[i].visible) {
						uiGridGridMenuService.toggleColumnVisibility($scope.gridApi.grid.columns[i]);
						totalWidth -= $scope.gridApi.grid.columns[i].minWidth;
					}
					if (angular.element($window).width() > totalWidth) {
						break;
					}
				}
			}
			else {
				for (var i = 0; i < $scope.gridApi.grid.columns.length; i++) {
					if (!$scope.gridApi.grid.columns[i].visible) {
						if (angular.element($window).width() < totalWidth + $scope.gridApi.grid.columns[i].minWidth) {
							break;
						}
						uiGridGridMenuService.toggleColumnVisibility($scope.gridApi.grid.columns[i]);
						totalWidth += $scope.gridApi.grid.columns[i].minWidth;
					}
				}
			}
		}
	}])
angular.module('gridTaskApp')
	.directive('uiGridCustomMenu', ['$timeout', '$window', function ($timeout, $window) {
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

					scope.resize(totalWidth);

					var isAllVisible = true;

					for (var i = 0; i < this.scope.gridApi.grid.columns.length; i++) {
						if (!this.scope.gridApi.grid.columns[i].visible) {
							isAllVisible = false;
						}
					}

					if (!isAllVisible && !self.scope.options.enableGridMenu) {
						self.scope.options.enableGridMenu = true;
					}

					var resize = function () {
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

					}.bind(this);

					angular.element($window).resize(resize);

					scope.$on('$destroy', function () {
						angular.element($window).off("resize", resize);
					});
				}.bind(self));
			}
		}
	}]);
angular.module('gridTaskApp')
	.directive('details', ['$compile', '$timeout', function ($compile, $timeout) {
		return {
			restict: 'A',
			scope: {
				row: '=',
				detailsClass: '='
			},
			link: function (scope, element, attrs) {
				element.click(function () {
					scope.row.orig.actions.isToggle = !scope.row.orig.actions.isToggle;

					scope.row.orig.actions.setToggle(scope.row.orig, scope.row.orig.actions.isToggle, scope.detailsClass);
				});
			}
		}
	}]);

angular.module('gridTaskApp')
	.controller('dropdownCtrl', ['$scope', function ($scope) {
		if ($scope.options === undefined) {
			$scope.options = {};
		}

		if (!$scope.options.isMenu) {
			$scope.options.selected = $scope.options.values[0];

			if ($scope.options.callback) {
				$scope.options.callback($scope.options.selected);
			}
		}
		else {
			$scope.options.selected = {};
		}

		$scope.select = function (action) {
			$scope.options.selected = action;

			if ($scope.options.callback) {
				$scope.options.callback(action);
			}

			$scope.isShow = false;
		}
	}]);
angular.module('gridTaskApp')
	.directive('dropdown', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			scope: {
				options: '=dropdown'
			},
			controller: 'dropdownCtrl',
			templateUrl: templatesPath + 'directive-templates/dropdown.html',
			link: function (scope, element, attrs) {
			}
		}
	}]);
angular.module('gridTaskApp')
	.directive('dynamicDropdown', ['templatesPath', '$compile', '$timeout', '$window', function (templatesPath, $compile, $timeout, $window) {
		return {
			restrict: 'EA',
			scope: {
				origOpt: '=',
				dropdownOpt: '=',
				col: '=',
				row: '=',
				reInit: '=',
				toResize: '='
			},
			templateUrl: templatesPath + 'grid-templates/dynamic-actions.html',
			link: function (scope, element, attrs) {

				var dynamic = function () {
					for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
						if (!scope.dynamicOpt.values[i].isVisible) {
							scope.totalWidth += scope.dynamicOpt.values[i].width;
							if (scope.totalWidth + scope.offset.left > angular.element('body').prop('scrollWidth')) {
								scope.totalWidth -= scope.dynamicOpt.values[i].width;
								break;
							}
							else {
								scope.dynamicOpt.values[i].toggleVisible(true);
							}
						}
					}

					scope.$apply();

					if (scope.dropdownOpt.isVisible) {
						if (scope.dropdownOpt.width === undefined) {
							scope.dropdownOpt.width = element.parent().find('div[dropdown]').width();
						}
						scope.totalWidth += scope.dropdownOpt.width;

						for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
							if (!scope.dynamicOpt.values[i].isVisible) {
								if (scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]) == -1) {
									scope.dropdownOpt.values.push(scope.dynamicOpt.values[i]);
								}
							}
							else {
								scope.dropdownOpt.values.splice(scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]), 1);
							}
						}
					}
					else {
						scope.totalWidth -= scope.dropdownOpt.width;
					}

					if (scope.totalWidth + scope.offset.left > angular.element('body').prop('scrollWidth')) {
						for (var i = scope.dynamicOpt.values.length - 1; i > -1; i--) {
							if (scope.dynamicOpt.values[i].isVisible) {
								scope.dynamicOpt.values[i].toggleVisible(false);
								scope.totalWidth -= scope.dynamicOpt.values[i].width;
								if (scope.totalWidth + scope.offset.left < angular.element('body').prop('scrollWidth')) {
									break;
								}
							}
						}

						for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
							if (!scope.dynamicOpt.values[i].isVisible) {
								if (scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]) == -1) {
									scope.dropdownOpt.values.push(scope.dynamicOpt.values[i]);
								}
							}
							else {
								scope.dropdownOpt.values.splice(scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]), 1);
							}
						}
					}
				}

				var undynamic = function () {
					for (var i = scope.dynamicOpt.values.length - 1; i > -1; i--) {
						if (scope.dynamicOpt.values[i].isVisible) {
							scope.dynamicOpt.values[i].toggleVisible(false);
							scope.totalWidth -= scope.dynamicOpt.values[i].width;
							if (scope.totalWidth + scope.offset.left < angular.element('body').prop('scrollWidth')) {
								break;
							}
						}
					}

					scope.$apply();

					if (scope.dropdownOpt.isVisible) {
						if (scope.dropdownOpt.width === undefined) {
							scope.dropdownOpt.width = element.parent().find('div[dropdown]').width();
						}
						scope.totalWidth += scope.dropdownOpt.width;

						for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
							if (!scope.dynamicOpt.values[i].isVisible) {
								if (scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]) == -1) {
									scope.dropdownOpt.values.push(scope.dynamicOpt.values[i]);
								}
							}
							else {
								scope.dropdownOpt.values.splice(scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]), 1);
							}
						}
					}
					else {
						scope.totalWidth -= scope.dropdownOpt.width;
					}

					if (scope.totalWidth + scope.offset.left > angular.element('body').prop('scrollWidth')) {
						for (var i = scope.dynamicOpt.values.length - 1; i > -1; i--) {
							if (scope.dynamicOpt.values[i].isVisible) {
								scope.dynamicOpt.values[i].toggleVisible(false);
								scope.totalWidth -= scope.dynamicOpt.values[i].width;
								if (scope.totalWidth + scope.offset.left < angular.element('body').prop('scrollWidth')) {
									break;
								}
							}
						}

						for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
							if (!scope.dynamicOpt.values[i].isVisible) {
								if (scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]) == -1) {
									scope.dropdownOpt.values.push(scope.dynamicOpt.values[i]);
								}
							}
							else {
								scope.dropdownOpt.values.splice(scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]), 1);
							}
						}
					}
				}

				scope.dynamicOpt = angular.copy(scope.origOpt);
				scope.dropdownOpt = angular.copy(scope.origOpt);
				scope.dropdownOpt.values = [];
				scope.dropdownOpt.style = { "z-index": "-1" };

				scope.dropdownOpt.isVisible = true;

				for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
					scope.dynamicOpt.values[i].isVisible = true;
					scope.dynamicOpt.values[i].toggleVisible = function (value) {
						this.isVisible = value;
					}
				}

				scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
					scope.totalWidth = 20;
					scope.offset = element.parent().offset();

					for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
						scope.dynamicOpt.values[i].width = element.find('.' + scope.dynamicOpt.values[i].label).width();
						scope.totalWidth += scope.dynamicOpt.values[i].width;
					}

					if (scope.totalWidth + scope.offset.left < angular.element('body').prop('scrollWidth')) {
						dynamic();
					}
					else {
						undynamic();
					}

					var countVisible = 0;
					for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
						if (scope.dynamicOpt.values[i].isVisible) {
							countVisible += 1;

							if (countVisible > 2) {
								countVisible -= 1;
								scope.dynamicOpt.values[i].toggleVisible(false);
							}
						}
					}

					if (countVisible > 0) {
						scope.dropdownOpt.label = "More";
					}
					else {
						scope.dropdownOpt.label = "Actions";
					}

					scope.dropdownOpt.style = { "z-index": "9" };
				});

				var resize = function () {
					if (element.parent().offset().left != 0) {
						scope.offset = element.parent().offset();
					}

					scope.totalWidth = 20;

					for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
						if (scope.dynamicOpt.values[i].isVisible) {
							scope.totalWidth += scope.dynamicOpt.values[i].width;
						}
					}

					if (scope.dropdownOpt.isVisible) {
						scope.totalWidth += scope.dropdownOpt.width;
					}

					if (scope.totalWidth + scope.offset.left < angular.element('body').prop('scrollWidth')) {
						scope.dynamicOpt.values.sort(function (a, b) {
							if (a.priority > b.priority) {
								return -1;
							}
							if (a.priority < b.priority) {
								return 1;
							}

							return 0;
						});

						var countVisible = 0;

						for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
							if (scope.dynamicOpt.values[i].isVisible) {
								scope.totalWidth -= scope.dynamicOpt.values[i].width;
								scope.dynamicOpt.values[i].toggleVisible(false);
							}

							if (scope.totalWidth + scope.offset.left + scope.dynamicOpt.values[i].width < angular.element('body').prop('scrollWidth')) {
								scope.totalWidth += scope.dynamicOpt.values[i].width;
								scope.dynamicOpt.values[i].toggleVisible(true);
								countVisible += 1;
							}

							if (countVisible == 2) {
								break;
							}
						}

						if (countVisible > 0) {
							scope.dropdownOpt.label = "More";
						}
						else {
							scope.dropdownOpt.label = "Actions";
						}
					}
					else {
						scope.dynamicOpt.values.sort(function (a, b) {
							if (a.priority > b.priority) {
								return 1;
							}
							if (a.priority < b.priority) {
								return -1;
							}

							return 0;
						});

						var countVisible = 0;

						for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
							if (scope.dynamicOpt.values[i].isVisible) {
								scope.totalWidth -= scope.dynamicOpt.values[i].width;
								scope.dynamicOpt.values[i].toggleVisible(false);
							}

							if (scope.totalWidth + scope.offset.left + scope.dynamicOpt.values[i].width < angular.element('body').prop('scrollWidth')) {
								scope.totalWidth += scope.dynamicOpt.values[i].width;
								scope.dynamicOpt.values[i].toggleVisible(true);
								countVisible += 1;
							}

							if (countVisible == 2) {
								break;
							}
						}

						if (countVisible > 0) {
							scope.dropdownOpt.label = "More";
						}
						else {
							scope.dropdownOpt.label = "Actions";
						}
					}

					scope.dropdownOpt.values = [];

					for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
						if (!scope.dynamicOpt.values[i].isVisible) {
							scope.dropdownOpt.values.push(scope.dynamicOpt.values[i]);
						}
					}

					scope.$apply()
				};

				angular.element($window).resize(resize);

				scope.$on('$destroy', function () {
					angular.element($window).off("resize", resize);
				});
			}
		}
	}]);
angular.module('gridTaskApp')
	.controller('filterCtrl', ['$scope', '$element', function ($scope, $element) {
		$scope.listState = false;

		$scope.filterClick = function () {
			$scope.listState = !$scope.listState;

			if ($scope.listState) {
				$scope.filterOptions.forEach(function (opt) {
					opt.filter = "";
				});
			}
		};

		$scope.showRecords = function () {
			$scope.listState = false;

			$scope.filtrate($scope.filterOptions);
		}
	}]);
angular.module('gridTaskApp')
	.controller('filterListCtrl', ['$scope', function ($scope) {
		$scope.filter = function () {
			$scope.isFiltrate = true;
		}
	}]);
angular.module('gridTaskApp')
	.directive('filterList', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			templateUrl: templatesPath + 'directive-templates/filter-list.html',
			controller: 'filterListCtrl',
			link: function (scope, element, attrs) {
			}
		}
	}]);
angular.module('gridTaskApp')
	.directive('filter', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			scope: {
				filterOptions: '=filter',
				filtrate: '=onFiltrate'
			},
			controller: 'filterCtrl',
			templateUrl: templatesPath + 'directive-templates/filter.html',
			link: function (scope, element, attrs) {
			}
		}
	}]);

angular.module('gridTaskApp')
	.directive('grTemplate', ['myTemplateService', 'templatesPath', function (myTemplateService, templatesPath) {
		return {
			restrict: 'EAC',
			scope: {
				template: '=grTemplate',
				name: '@grName'
			},
			replace: true,
			require: '?^grName',
			templateUrl: templatesPath + 'directive-templates/gr-template.html',
			link: function (scope, element, attrs) {
				myTemplateService.put(scope.template, scope.name);

				scope.templateUrl = scope.name;
			}
		}
	}]);
angular.module('gridTaskApp')
	.directive('graphs', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			scope: {
				graphs: '='
			},
			templateUrl: templatesPath + 'directive-templates/graphs.html',
			link: function (scope, element, attrs) {
			}
		}
	}]);
angular.module('gridTaskApp')
	.directive('hideRender', ['$timeout', function ($timeout) {
		return {
			restrict: 'AC',
			priority: 1000,
			compile: function (element, attrs) {
				return {
					pre: function (scope, element, attrs) {
						element.hide();
					},
					post: function (scope, element, attrs) {
						element.show();
					}
				}

			}
		}
	}]);
angular.module('gridTaskApp')
	.controller('histogramCtrl', ['$scope', function ($scope) {
		$scope.selectedUsers = [];

		$scope.select = function (user) {
			if (user.name != "1") {
				$scope.selectedUsers.push({ touchpoints: user.name + ' touchpoints' });
			}
			else {
				$scope.selectedUsers.push({ touchpoints: user.name + ' touchpoint' });
			}

			$scope.$apply();
		}
	}]);
angular.module('gridTaskApp')
	.directive('histogram', ['templatesPath', '$compile', function (templatesPath, $compile) {
		return {
			restrict: "EA",
			controller: 'histogramCtrl',
			scope: {
				data: '=histogramData'
			},
			require: '?histogramData',
			templateUrl: templatesPath + 'directive-templates/histogram.html',
			link: function (scope, element, attrs) {
				scope.$watch('data', function (data) {
					if (data) {
						element.find('.chart').remove();
						element.find('.histogram').append('<svg class="chart"></svg>');

						var margin = { top: 50, right: 30, bottom: 60, left: 90 },
					width = 700 - margin.left - margin.right,
					height = 340 - margin.top - margin.bottom;

						var x = d3.scale.ordinal()
							.domain(data.map(function (d) { return d.name; }))
							.rangeRoundBands([0, width], .1);

						var y = d3.scale.linear()
							.domain([0, 900000])
							.range([height, 0]);

						var xAxis = d3.svg.axis()
							.scale(x)
							.orient("bottom");

						var yAxis = d3.svg.axis()
							.scale(y)
							.orient("left");

						var chart = d3.select(".chart")
							.attr("width", width + margin.left + margin.right)
							.attr("height", height + margin.top + margin.bottom)
						  .append("g")
							.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

						chart.selectAll(".bar")
							  .data(data)
							  .enter()
							  .append("rect")
							  .attr("class", "bar")
							  .attr("x", function (d) { return x(d.name) + 38; })
							  .attr("y", function (d) { return y(d.value); })
							  .attr("height", function (d) { return height - y(d.value); })
							  .attr("width", x.rangeBand() / 2)
							.on('click', function (d) {
								scope.select(d);
							});

						chart.append("g")
							.attr("class", "y axis")
							.call(yAxis)
						  .append("text")
							.attr("transform", "rotate(-90)")
							.attr("x", -height / 2)
							.attr("y", -10 - margin.bottom)
							.attr("dy", ".1em")
							.attr("dx", "40px")
							.style("text-anchor", "end")
							.text("Population");
						chart.append("g")
							.attr("class", "x axis")
							.attr("transform", "translate(0," + height + ")")
							.call(xAxis)
						  .append("text")
							.attr("x", width / 2)
							.attr("y", margin.bottom - 25)
							.attr("dy", ".71em")
							.style("text-anchor", "end")
							.text("Touchpoint #");
						chart.append("text")
						  .text("Potential Rich histogram")
						  .attr("x", 200)
						  .attr("class", "title");

					}
				})
			}
		}
	}]);
angular.module('gridTaskApp').directive('kxDateRange', ['$parse', '$translate', function ($parse, $translate) {
	return {
		restrict: 'CAE',
		require: '?ngModel',
		compile: function (elem, attr) {
			if (attr.disableEdit) {
				elem.append("<span class=\"kx-daterangepicker\">\n  <span class=\"add-on glyph-calendar\">\n    <i class=\"icon-calendar icon-large\"></i>\n  </span>\n  <form ng-submit=\"onHitReturn()\">\n    <input kx-stealth-input\n    ng-model=\"inputValue\"\n    ng-change=\"onInputChange()\"\n    ng-class=\"{'ng-invalid': isInvalid}\" readonly></input>\n  </form>\n</span>");
			} else {
				elem.append('<span class="kx-daterangepicker">\n  <span class="add-on glyph-calendar">\n    <i class="icon-calendar icon-large"></i>\n  </span>\n  <form ng-submit="onHitReturn()">\n    <input kx-stealth-input\n    ng-model="inputValue"\n    ng-change="onInputChange()"\n    ng-class="{\'ng-invalid\': isInvalid}"></input>\n  </form>\n</span>');
			}
			elem.after('<span ng-show="isInvalid" class="help-inline calendar-invalid-msg">{{"Incorrect Date" | translate}}</span>');
			return function ($scope, elem, attr, ngModelCtrl) {
				var format, inputRender, isValid, offset, onApplyRange, onModelChange, open, renderRange, separator;
				isValid = function (arg) {
					var end, isSyntacticValid, start;
					start = arg.start, end = arg.end;
					isSyntacticValid = start.isValid() && end.isValid();
					return isSyntacticValid && (attr.timeRange === 'future' ? start && end && (moment() <= start && start <= end) : attr.timeRange === 'past' ? start && end && (start <= end && end <= moment()) : start && end);
				};
				offset = elem.offset();
				if (offset.left <= 400) {
					open = 'right';
				} else {
					open = 'left';
				}
				format = attr.format || 'MMM DD, YYYY';
				separator = attr.separator || ' - ';
				renderRange = function (range) {
					return range.start.format(format) + separator + range.end.format(format);
				};
				onApplyRange = _.bind(function (start, end) {
					if ((!start.isSame(ngModelCtrl.$viewValue.start)) || (!end.isSame(ngModelCtrl.$viewValue.end))) {
						$scope.inputValue = renderRange({
							start: start,
							end: end
						});
						ngModelCtrl.$setViewValue({
							start: start,
							end: end
						});
						return ngModelCtrl.$setValidity('parses', true);
					}
				});
				$scope.onHitReturn = function () {
					var data;
					data = elem.data('daterangepicker');
					return onApplyRange(data.startDate, data.endDate);
				};
				$scope.onInputChange = function () {
					var dates, picker, range;
					dates = $scope.inputValue.split(separator);
					if (dates.length === 2) {
						range = {
							start: moment(dates[0], format, true),
							end: moment(dates[1], format, true)
						};
						picker = elem.data('daterangepicker');
						picker.setStartDate(range.start);
						picker.setEndDate(range.end);
						return $scope.isInvalid = !isValid(range);
					} else {
						return $scope.isInvalid = true;
					}
				};
				onModelChange = function (dateRange) {
					var elemData, end, ret, start;
					if (dateRange && dateRange.start) {
						start = dateRange.start, end = dateRange.end;
						elemData = elem.data('daterangepicker');
						elemData.oldStartDate = start;
						elemData.oldEndDate = end;
						elemData.startDate = start;
						elemData.endDate = end;
						elemData.updateView();
						elemData.updateCalendars();
						ret = renderRange(dateRange);
						$scope.inputValue = ret;
						return ret;
					}
				};
				ngModelCtrl.$parsers.push(function (val) {
					var dates, range;
					if (_.isString(val)) {
						dates = val.split(separator);
						range = {
							start: moment(dates[0], format, true),
							end: moment(dates[1], format, true)
						};
						ngModelCtrl.$setValidity('parses', isValid(range));
						if (isValid(range)) {
							return range;
						}
					} else {
						return val;
					}
				});
				inputRender = ngModelCtrl.$render;
				ngModelCtrl.$render = function () {
					inputRender();
					return elem.trigger('keyup');
				};
				return $translate(['Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days', 'This Month', 'Last Month', 'Last 3 Months', 'Apply', 'Cancel', 'From', 'To', 'W', 'Custom Range']).then(function (tr) {
					var current, end, i, j, modeRanges, options, rangeList, start;
					ngModelCtrl.$formatters.push(onModelChange);
					rangeList = [[tr['Today'], [moment(), moment()]], [tr['Yesterday'], [moment().subtract(1, 'days'), moment().subtract(1, 'days')]], [tr['Last 7 Days'], [moment().subtract(7, 'days'), moment().subtract(1, 'days')]], [tr['Last 30 Days'], [moment().subtract(30, 'days'), moment().subtract(1, 'days')]], [tr['This Month'], [moment().startOf('month'), moment().subtract(1, 'days')]], [tr['Last Month'], [moment().subtract(1, 'months').startOf('month'), moment().subtract(1, 'months').endOf('month')]], [tr['Last 3 Months'], [moment().subtract(3, 'months').startOf('month'), moment().subtract(1, 'months').endOf('month')]]];
					modeRanges = {
						'kx-date-range': _.object(rangeList),
						'exceptToday': _.object(_.rest(rangeList)),
						'lastYear': {}
					};
					for (i = j = 11; j >= 0; i = --j) {
						current = function () {
							return moment().subtract('months', i);
						};
						start = current().startOf('month');
						end = i === 0 ? current() : current().endOf('month');
						modeRanges.lastYear[current().format('MMM YYYY')] = [start, end];
					}
					options = {
						format: format,
						separator: separator,
						startDate: moment().subtract('day', 6),
						endDate: moment(),
						locale: {
							applyLabel: tr['Apply'],
							cancelLabel: tr['Cancel'],
							fromLabel: tr['From'],
							toLabel: tr['To'],
							weekLabel: tr['W'],
							customRangeLabel: tr['Custom Range']
						}
					};
					if (attr.timeRange === 'future') {
						_.extend(options, {
							minDate: moment()
						});
					} else if (attr.timeRange === 'past') {
						_.extend(options, {
							maxDate: moment(),
							opens: open,
							ranges: modeRanges[attr.kxDateRange]
						});
					}
					elem.daterangepicker(options);
					if (!onModelChange(ngModelCtrl.$modelValue)) {
						onModelChange({
							start: options.startDate,
							end: options.endDate
						});
					}
					elem.on('apply.daterangepicker', function (e, picker) {
						return onApplyRange(picker.startDate, picker.endDate);
					});

					angular.element('.daterangepicker.dropdown-menu').css('display', 'none');

					return ngModelCtrl.$render();
				});
			};
		}
	};
}]);
angular.module('gridTaskApp')
	.directive('kxMultiselect', ['$timeout', function ($timeout) {
		return {
			restrict: 'A',
			scope: {
				options: '=kxMultiselect'
			},
			link: function (scope, element, attrs) {
				$timeout(function () {
					element.multipleSelect(scope.options);
				})
			}
		}
	}]);
(function () {
	angular.module('gridTaskApp').directive('kxMenu', [function () {
		return {
			restrict: 'AE',
			link: function ($scope, elem, attrs) {
				var current, listItems, menuItems, selected;
				listItems = null;
				current = null;
				selected = null;
				menuItems = null;

				$scope.session = { user: { id: 1 } };

				return $scope.$watch('session.user.id', function (userId) {
					var click, close, init, mouseenter, mouseleave, navItem, _ref;
					if (userId && ((_ref = $scope.navigationTree) != null ? _ref.length : void 0) > 0) {
						listItems = elem.children('ul').children('li');
						if (sessionStorage.selectedNav) {
							navItem = JSON.parse(sessionStorage.selectedNav);
							selected = listItems.eq(1);
							selected.addClass('kx-menu-selected');
						}
						init = function () {
							listItems.mouseenter(mouseenter);
							return listItems.mouseleave(mouseleave);
						};
						mouseenter = function (event) {
							current = listItems.filter(this);
							current.addClass('kx-menu-open');
							menuItems = current.children('.kx-submenu').find('a');
							return menuItems.click(click);
						};
						mouseleave = function (event) {
							if (current) {
								return close();
							}
						};
						click = function (event) {
							if (selected) {
								selected.removeClass('kx-menu-selected');
							}
							selected = current;
							selected.addClass('kx-menu-selected');
							navItem = {
								index: _.indexOf(listItems, selected[0])
							};
							sessionStorage.selectedNav = JSON.stringify(navItem);
							return close();
						};
						close = function () {
							current.removeClass('kx-menu-open');
							current = null;
							menuItems.off('click');
							return menuItems = null;
						};
						return init();
					}
				});
			}
		};
	}]);

}).call(this);
angular.module('gridTaskApp')
	.controller('kxNavBarCtrl', ['$scope', function ($scope) {

	}]);
angular.module('gridTaskApp')
	.directive('kxNavBar', ['templatesPath', function myfunction(templatesPath) {
		return {
			restrict: 'A',
			controller: 'kxNavBarCtrl',
			scope: {
			},
			templateUrl: templatesPath + 'directive-templates/kx-nav-bar.html',
			link: function (scope, element, attrs) {
			}
		}
	}, ]);
angular.module('gridTaskApp').controller('NavigationCtrl', ['$scope', 'NavigationTree', function ($scope, NavigationTree) {
	return $scope.navigationTree = NavigationTree.get();
}]);
angular.module('gridTaskApp').directive('kxStealthInput', [function () {
	return {
		restrict: "CAE",
		link: function ($scope, elem, attrs) {
			var focus, hover, update;
			focus = false;
			hover = false;
			update = function () {
				return elem.toggleClass('stealth-mode', !(focus || hover));
			};
			elem.focus(function () {
				focus = true;
				return update();
			});
			elem.blur(function () {
				focus = false;
				return update();
			});
			elem.mouseover(function () {
				hover = true;
				return update();
			});
			elem.mouseout(function () {
				hover = false;
				return update();
			});
			return update();
		}
	};
}]);
angular.module('gridTaskApp')
	.controller('loadingCtrl', ['$scope', 'LOADING', function ($scope, LOADING) {
		var self = this;

		if (self.parent === undefined) {
			self.parent = LOADING.parentSelector;
		}

		self.resize = function () {
			self.disabled = {
				height: angular.element(self.parent).height() + 'px',
				width: angular.element(self.parent).width() + 'px',
				top: 0
			};
		}
	}]);
angular.module('gridTaskApp')
	.directive('loading', ['templatesPath', 'LOADING', '$window', function (templatesPath, LOADING, $window) {
		return {
			restrict: 'EA',
			scope: {
				parent: '='
			},
			templateUrl: templatesPath + 'directive-templates/loading.html',
			controller: 'loadingCtrl',
			controllerAs: 'ctrl',
			link: function (scope, element, attrs, ctrl) {
				ctrl.resize();

				angular.element($window).resize(ctrl.resize);

				scope.$on('$destroy', function () {
					angular.element($window).off("resize", ctrl.resize);
				});
			}
		}
	}]);
angular.module('gridTaskApp')
	.directive('maxHeighter', ['$timeout', '$window', function ($timeout, $window) {
		function init_height(element) {
			if (getWindowHeight() - element.offset().top > 0) {
				element.css('max-height', getWindowHeight() - element.offset().top - 10 + 'px');
			}
			else {
				element.css('max-height', 100 + 'px');
			}
		}

		return {
			restrict: 'EAC',
			scope: {},
			compile: function (element, attrs) {
				element.onPositionChanged(function () {
					init_height(element);
				}, 0);

				return {
					post: function (scope, element, attrs) {
						var resize = function () {
							init_height(element);
						}

						$timeout(function () {
							init_height(element)
						});

						angular.element($window).resize(resize);

						scope.$on('$destroy', function () {
							angular.element($window).off("resize", resize);
						});
					}
				}
			}
		}
	}]);
angular.module('gridTaskApp')
	.controller('modalCtrl', ['$scope', '$element', '$timeout', function ($scope, $element, $timeout) {
		$scope.isModal = true;

		$scope.fields = [];

		$scope.myEntity = angular.copy($scope.value.entity);

		$scope.modal = 'modal-ctrl';

		$scope.save = function () {
			if (!Array.isArray($scope.value.actions.history)) {
				$scope.value.actions.history = [];
			}

			$scope.value.actions.history.push({
				dateChange: new Date(),
				oldObj: angular.copy($scope.value.entity),
				newObj: angular.copy($scope.myEntity)
			})

			for (var field in $scope.myEntity) {
				$scope.value.entity[field] = $scope.myEntity[field];
			}

			$scope.close();
		};

		$scope.close = function () {
			$scope.myEntity = {};
			$scope.isModal = false;
		};

		$scope.resize = function () {
			$scope.fade = {
				height: $element.find('.' + 'dialog').prop('scrollHeight') + 60 + 'px',
				width: $element.find('.' + 'dialog').prop('scrollWidth') + 'px'
			}
		};

		$scope.onInclude = function () {
			$timeout(function () {
				$scope.fade = {
					height: $element.find('.' + $scope.modal).prop('scrollHeight') + 'px'
				}
			});
		}
	}]);
angular.module('gridTaskApp')
	.directive('modal', ['templatesPath', '$timeout', '$window', function (templatesPath, $timeout, $window) {
		return {
			restrict: 'EA',
			templateUrl: templatesPath + 'directive-templates/modal.html',
			scope: {
				value: '=',
				bodyTemplateUrl: '@',
				bodyTemplate: '@',
				enableSave: '='
			},
			controller: 'modalCtrl',
			link: function (scope, element, attrs) {
				var resize;

				resize = function () {
					scope.resize();
				};

				angular.element($window).resize(resize);

				scope.$on('$destroy', function () {
					angular.element($window).off("resize", resize);
				});

				scope.$watch('isModal', function (value) {
					$timeout(function () {
						if (!value) {
							angular.element(element).remove();
							angular.element('body').css('overflow', 'inherit');
						}
						else {
							scope.resize();
							angular.element('body').css('overflow', 'hidden');
						}
					});
				})
			}
		}
	}]);
angular.module('gridTaskApp')
	.directive('mouseOver', ['templatesPath', '$timeout', '$window', function (templatesPath, $timeout, $window) {
		return {
			restrict: 'E',
			scope: {
				type: '=',
				value: '=',
				parentTop: '=parentTop'
			},
			templateUrl: templatesPath + 'directive-templates/mouse-over.html',
			link: function (scope, element, attrs) {
				scope.style = {
					visibility: 'hidden'
				}

				if (scope.parentTop === undefined) {
					scope.parentTop = 0;
				}

				$timeout(function () {
					if ($.cursorMessageData.mouseY + element.find('.mouse-over').height() < angular.element($window).height()) {
						scope.style.top = ($.cursorMessageData.mouseY - scope.parentTop + 15) + 'px';
					}
					else {
						scope.style.top = ($.cursorMessageData.mouseY - element.find('.mouse-over').height() - scope.parentTop - 20) + 'px';
					}

					if ($.cursorMessageData.mouseX + 10 + element.find('.mouse-over').width() < angular.element($window).width()) {
						scope.style.left = ($.cursorMessageData.mouseX + 10) + 'px';
					}
					else {
						scope.style.left = angular.element($window).width() - element.find('.mouse-over').width() - 10 + 'px';
					}
					scope.style.visibility = 'visible'
				});

			}
		}
	}]);
angular.module('gridTaskApp')
	.directive('numberFormat', [function () {
		return {
			restrict: 'A',
			scope: {
				number: '=numberFormat'
			},
			link: function (scope, element, atrrs) {
				element.html(nFormatter(scope.number, 1));

				scope.$watch('number', function (num) {
					element.html(nFormatter(num, 1));
				})
			}
		}
	}]);

function nFormatter(num, digits) {
	var si = [
	  { value: 1E18, symbol: "E" },
	  { value: 1E15, symbol: "P" },
	  { value: 1E12, symbol: "T" },
	  { value: 1E9, symbol: "G" },
	  { value: 1E6, symbol: "M" },
	  { value: 1E3, symbol: "k" }
	], i;
	for (i = 0; i < si.length; i++) {
		if (num >= si[i].value) {
			return (num / si[i].value).toFixed(digits).replace(/\.?0+$/, "") + si[i].symbol;
		}
	}
	return num;
}
angular.module('gridTaskApp')
    .directive('onFinishRender', ['$timeout', function ($timeout) {
    	return {
    		restrict: 'A',
    		link: function (scope, element, attr) {
    			if (scope.$last === true) {
    				$timeout(function () {
    					scope.$emit('ngRepeatFinished');
    				});
    			}
    		}
    	}
    }]);
angular.module('gridTaskApp')
	.controller('overlayCtrl', ['$scope', 'OVERLAY', '$timeout', '$element', '$window', function ($scope, OVERLAY, $timeout, $element, $window) {
		if ($scope.selectors === undefined) {
			$scope.selectors = {};
		}

		if ($scope.selectors.overlaySelector === undefined) {
			$scope.selectors.overlaySelector = OVERLAY.overlaySelector;
		}

		if ($scope.selectors.heighterSelector === undefined) {
			$scope.selectors.heighterSelector = OVERLAY.heighterSelector;
		}

		if ($scope.selectors.alignTopSelector === undefined) {
			$scope.selectors.alignTopSelector = OVERLAY.alignTopSelector;
		}

		if ($scope.toggleMinWidth === undefined) {
			$scope.toggleMinWidth = OVERLAY.toggleMinWidth;
		}

		$scope.style = {
			left: getWindowWidth() - $scope.toggleMinWidth + 'px',
			transition: '',
			overflow: 'hidden'
		};

		$scope.transcludeStyle = {
		}

		$scope.setToggle = function (isResize) {
			$timeout(function () {
				if ($scope.state) {
					if (getWindowWidth() + 650 > 1750) {
						$scope.style.left = '650px';
					}
					else {
						$scope.style.left = 0;
					}

					$scope.transcludeStyle.width = angular.element('body').prop('scrollWidth') - $scope.style.left.toString().replace('px', '') - $scope.toggleMinWidth - 5 + 'px';
				}
				else {
					$scope.style.left = angular.element('body').prop('scrollWidth') - $scope.toggleMinWidth + 'px';

					$scope.style.overflow = 'hidden';

					if ($scope.state === undefined || isResize) {
						$scope.style.transition = 'none';
					}
				}

				if ($scope.state !== undefined && !isResize) {
					$scope.style.transition = '';
				}

				var size = 10;
				var min = 300;

				if (angular.element($scope.selectors.heighterSelector).length == 0){
					return;
				}

				if (angular.element($window).height() - angular.element($scope.selectors.heighterSelector).offset().top - size > min) {
					$scope.style.minHeight = (angular.element('body').prop('scrollHeight') - angular.element($scope.selectors.heighterSelector).offset().top - size) + 'px';

					$scope.style.top = 0;
				}
				else {
					$scope.style.minHeight = angular.element('body').prop('scrollHeight') - angular.element($scope.selectors.alignTopSelector).offset().top - 8 + 'px';

					if (angular.element($scope.selectors.alignTopSelector).offset().top - $element.offset().top != 0) {
						$scope.style.top = angular.element($scope.selectors.alignTopSelector).offset().top - $element.offset().top + 'px';
					}
				}

			})
		}
	}]);
angular.module('gridTaskApp')
	.directive('overlay', ['$timeout', 'templatesPath', '$window', function ($timeout, templatesPath, $window) {
		return {
			restrict: 'EAC',
			scope: {
				selectors: '=',
				toggleMinWidth: '='
			},
			controller: 'overlayCtrl',
			templateUrl: templatesPath + 'directive-templates/overlay.html',
			transclude: true,
			replace: true,
			link: function (scope, element, attrs) {
				var resize = function () {
					scope.setToggle(true);
					scope.$apply();
				};
				
				$timeout(function () {
					scope.$watch('state', function (state) {
						scope.setToggle();

						if (state == false) {
							element.scrollTop(0);
						}
					});
				});

				element.parent().onPositionChanged(resize, 0);

				angular.element($window).resize(resize);

				scope.$on('$destroy', function () {
					element.parent().off("onPositionChanged", resize);
					angular.element($window).off("resize", resize);
				});
			}
		}
	}]);
angular.module('gridTaskApp')
	.controller('contentOptionsCardsCtrl', ['$scope', function ($scope) {
		$scope.$watch('options.searchValue', function (value) {
			if (!$scope.options.searchOptions) {
				return;
			}

			if ($scope.options.searchOptions.selected.label == 'everywhere') {
				$scope.options.search(value);
			} else {
				$scope.options.search($scope.options.searchOptions.selected.label + ':' + value);
			}
		});

	}]);
angular.module('gridTaskApp')
	.directive('contentOptionsCards', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			controller: 'contentOptionsCardsCtrl',
			scope: {
				options: '=',
			},
			templateUrl: templatesPath + 'directive-templates/content-options-cards.html'
		}
	}]);
angular.module('gridTaskApp')
	.directive('pageContentCards', ['templatesPath', 'CONTENT', '$compile', function (templatesPath, CONTENT, $compile) {
		return {
			restrict: 'EA',
			scope: {
				data: '=gridData',
				contentOptions: '=',
				uiGridOptions: '=',
				cardsOptions: '='
			},
			templateUrl: templatesPath + 'directive-templates/page-content-cards.html',
			link: function (scope, element) {
				var initializer = new Initializer(scope, element, CONTENT, templatesPath, $compile);
				initializer.initCards();

				scope.$watch('contentOptions.datepickerOptions.dateRange', function (date) {
					if (date) {
						for (var card in scope.cardsOptions.cards) {
							if (scope.cardsOptions.cards[card].counter) {
								scope.cardsOptions.cards[card].count = scope.cardsOptions.cards[card].counter.calculate(scope.contentOptions.datepickerOptions.startDate, scope.contentOptions.datepickerOptions.endDate);
							}
						}
					}
				});
			}
		};
	}])
angular.module('gridTaskApp')
	.controller('contentOptionsD3Ctrl', ['$scope', function ($scope) {
		$scope.$watch('options.searchValue', function (value) {
			if (!$scope.options.searchOptions) {
				return;
			}

			if ($scope.options.searchOptions.selected.label == 'everywhere') {
				$scope.options.search(value);
			} else {
				$scope.options.search($scope.options.searchOptions.selected.label + ':' + value);
			}
		});

	}]);
angular.module('gridTaskApp')
	.directive('contentOptionsD3', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			controller: 'contentOptionsD3Ctrl',
			scope: {
				options: '=',
				filters: '=',
				loading: '=',
				onDataRangeChanged: '=',
				past: '='
			},
			templateUrl: templatesPath + 'directive-templates/content-options-d3.html'
		}
	}]);
angular.module('gridTaskApp')
	.directive('pageContentD3', ['templatesPath', 'CONTENT', '$compile', 'jsonService', 'HISTOGRAM', 'SANKEY', function (templatesPath, CONTENT, $compile, jsonService, HISTOGRAM, SANKEY) {
		return {
			restrict: 'EA',
			scope: {
				contentOptions: '=',
				cardsOptions: '=',
				sankeyData: '=',
				histogramData: '=',
				filters: '='
			},
			templateUrl: templatesPath + 'directive-templates/page-content-d3.html',
			link: function (scope, element) {
				element.addClass('page-content-d3');				
				
				var initializer = new Initializer(scope, element, CONTENT, templatesPath, $compile, jsonService, HISTOGRAM, SANKEY);
				initializer.initSankey();

				scope.contentOptions.refresh = function () {
					initializer.refreshSankey();
				}

				scope.filters.onDateRangeChange = function () {
					for (var card in scope.cardsOptions.cards) {
						if (scope.cardsOptions.cards[card].counter) {
							scope.cardsOptions.cards[card].count = scope.cardsOptions.cards[card].counter.calculate(this.dateRange.start.toDate(), this.dateRange.end.toDate());
						}
					}
				}
			}
		};
	}])
angular.module('gridTaskApp')
	.controller('contentOptionsCtrl', ['$scope', function ($scope) {
		$scope.$watch('options.searchValue', function (value) {
			if (!$scope.options.searchOptions) {
				return;
			}

			if ($scope.options.searchOptions.selected.label == 'everywhere') {
				$scope.options.search(value);
			} else {
				$scope.options.search($scope.options.searchOptions.selected.label + ':' + value);
			}
		});

	}]);
angular.module('gridTaskApp')
	.directive('contentOptions', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			controller: 'contentOptionsCtrl',
			scope: {
				options: '='
			},
			templateUrl: templatesPath + 'directive-templates/content-options.html'
		}
	}]);
angular.module('gridTaskApp')
	.directive('pageContentBody', [function () {
		return {
			restrict: 'EA',
			link: function (scope, element, attrs) {
				element.append(scope.contentOptions.contentBodyTemplate);

				scope.$watch('contentOptions.contentBodyTemplate', function (template) {
					element.html('');
					element.append(template);
				});
			}
		}
	}]);
angular.module('gridTaskApp')
	.directive('pageContentFooter', [function () {
		return {
			restrict: 'EA',
			link: function (scope, element, attrs) {
				element.append(scope.contentOptions.contentFooterTempalte);

				scope.$watch('contentOptions.contentFooterTempalte', function (template) {
					element.html('');
					element.append(template);
				});
			}
		}
	}]);
angular.module('gridTaskApp')
	.directive('pageContentHeader', [function () {
		return {
			restrict: 'EA',
			link: function (scope, element, attrs) {
				element.append(scope.contentOptions.contentHeaderTempalte);

				scope.$watch('contentOptions.contentHeaderTempalte', function (template) {
					element.html('');
					element.append(template);
				});
			}
		}
	}]);
angular.module('gridTaskApp')
	.directive('pageContent', ['templatesPath', 'CONTENT', '$compile', function (templatesPath, CONTENT, $compile) {
		return {
			restrict: 'EA',
			scope: {
				data: '=gridData',
				contentOptions: '=',
				grid: '=',
				gridOptions: '=',
				uiGridOptions: '='
			},
			templateUrl: templatesPath + 'directive-templates/page-content.html',
			link: function (scope, element) {
				var initializer = new Initializer(scope, element, CONTENT, templatesPath, $compile);
				initializer.init();

				scope.$watch('contentOptions', function (opt) {
					initializer.init();
					initializer.refreshOpt();
				});

				scope.$watch('data', function (data) {
					if (Array.isArray(data)) {
						initializer.refreshData(data);
					}
				});

				scope.$watch('data.length', function () {
					if (Array.isArray(scope.data)) {
						scope.grid.count = scope.data.length;
					}
				});

				scope.$watch('views.options.selected', function (value) {
					if (value) {
						initializer.refreshOpt();

						if (value.isGrid) {
							initializer.refreshCheckCallback();
						}
					}
				})
			}
		}
	}]);
angular.module('gridTaskApp')
	.directive('resizeOn', ['$window', function ($window) {

		function resize_on(element, parent, width) {
			element.css('width', (angular.element(parent).position().left + angular.element(parent).width()) + 'px');

			if (element.width() < element.css('min-width').replace('px', '')) {
				element.css({
					right: 'auto',
					width: width + 'px',
					left: angular.element(parent).position().left + 'px'
				})
			}
			else {
				element.css({
					right: 0,
					left: 'auto'
				})
			}

		}

		return {
			restrict: 'AC',
			scope: {
				event: '=resizeOn',
				parent: '@',
				width: '=resizeWidth'
			},
			link: function (scope, element, attrs) {
				scope.width = scope.width || 450;

				element.css('top', angular.element(scope.parent).height() + 'px');

				var resize = function () {
					resize_on(element, scope.parent, scope.width);
				};

				angular.element($window).resize(resize);

				scope.$on('$destroy', function () {
					angular.element($window).off("resize", resize);
				});

				scope.$watch('event', function (value) {
					if (value) {
						resize_on(element, scope.parent, scope.width);
					}
				});
			}
		}
	}]);
angular.module('gridTaskApp')
	.controller('searchCtrl', ['$scope', function ($scope) {
		$scope.edited = false;

		$scope.clear = function () {
			$scope.searchValue = '';
		};

		$scope.$watch('searchValue', function (value) {
			if (value.length > 0) {
				$scope.edited = false;
			}
			else {
				$scope.edited = true;
			}
		})
	}]);
angular.module('gridTaskApp')
	.directive('search', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				searchValue: '=',
				edited: '='
			},
			controller: 'searchCtrl',
			templateUrl: templatesPath + 'directive-templates/search.html',
			link: function (scope, element, attrs) {
			}
		}
	}]);
angular.module('gridTaskApp')
	.controller('splitButtonCtrl', ['$scope', function ($scope) {
		if (!$scope.actions) {
			$scope.actions = [];
		}
		if (!$scope.typehead) {
			$scope.actions.everywhere = { label: 'everywhere', isEverywhere: true };

			$scope.actions.selected = $scope.actions.everywhere;
		}

		$scope.select = function (action) {
			$scope.actions.selected = action;
			$scope.search = '';

			$scope.close();
		}

		$scope.toggle = function () {
			$scope.isShow = !$scope.isShow;
		}

		$scope.close = function () {
			$scope.isShow = false;
		}
	}]);
angular.module('gridTaskApp')
	.directive('splitButton', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				actions: '=',
				selected: '=',
				search: '=',
				typehead: '='
			},
			templateUrl: templatesPath + 'directive-templates/split-button.html',
			controller: 'splitButtonCtrl',
			link: function (scope, element, attrs) {
			}
		}
	}]);
angular.module('gridTaskApp')
	.directive('upload', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			templateUrl: templatesPath + 'directive-templates/upload.html',
			scope: {
				upload: '=uploadCallback',
				label: '='
			},
			link: function (scope, element, attrs) {
				element.find(':file').change(function () {
					var file = this.files[0];

					if (file.name.indexOf('json') != -1) {
						var fileReader = new FileReader();

						fileReader.readAsText(file);

						fileReader.onloadend = function () {
							var result = fileReader.result;

							scope.jsonData = JSON.parse(result);

							if (scope.upload) {
								scope.upload(scope.jsonData);
							}
						}

						element.find(':file').val("");
					}
					else {
						element.find(':file').val("");
					}
				});
			}
		}
	}]);
function columnGenerator(data, templatesPath) {
	var columns = [];

	columns.push({ field: 'details', displayName: '', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/details.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', sortable: false, width: 60, minWidth: 60, isColumn: true });

	if (data[0]) {
		for (var i = 0; i < data.length; i++) {
			if (data[i].isColumn) {
				return;
			}
		}

		for (var field in data[0]) {
			columns.push({
				field: field,
				displayName: field,
				headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html',
				isColumn: true
			})
		}
	}

	columns.push({
		field: 'action', displayName: '', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/action.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', sortable: false, width: 300, minWidth: 150, isColumn: true
	});

	return columns;
}
function columnsCompare(arr1, arr2) {
	if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length != arr2.length) {
		return false;
	}

	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i].field != arr2[i].field) {
			return false;
		}
	}

	return true;
}
function convertFilterOptions(options) {
	var convertOpt = { filterText: '' };

	for (var i = 0; i < options.length; i++) {

		if (options[i].filter) {
			convertOpt.filterText += options[i].label + ':' + options[i].filter + ';';
		}
	}
	return convertOpt;
}
var Counter = (function () {
	function Counter(card) {
		this.card = card;
	}

	Counter.prototype.calculate = function (startDate, endDate) {
		var countDays = endDate.getDate() - startDate.getDate();

		var count = Math.floor((Math.random() * 1000) + 1);

		for (var i = 0; i < this.card.graphs.length; i++) {
			var height = Math.floor((Math.random() * 60) + 1);

			this.card.graphs[i].style['height'] = height + 'px';
		}

		return count * countDays;
	}


	return Counter;
})();
var Initializer = (function () {
	function Initializer(scope, element, CONTENT, templatesPath, $compile, jsonService, HISTOGRAM, SANKEY) {
		this.scope = scope;
		this.element = element;
		this.content = CONTENT;
		this.templatesPath = templatesPath;
		this.$compile = $compile;
		this.jsonService = jsonService;
		this.HISTOGRAM = HISTOGRAM;
		this.SANKEY = SANKEY;
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
		this.scope.cardsOptions.cards = this.content.cardsOptions.cards;
		this.scope.cardsOptions.startDate = this.content.cardsOptions.startDate;
		this.scope.cardsOptions.endDate = this.content.cardsOptions.endDate;
		this.scope.cardsOptions.margin = 525;
		this.scope.sankeyData = this.SANKEY.data;
		this.scope.histogramData = this.HISTOGRAM.data;
	};

	Initializer.prototype.initSankeyContentOpt = function () {
		if (this.scope.contentOptions === undefined) {
			this.scope.contentOptions = {};
		}

		if (this.scope.contentOptions.eventType === undefined) {
			this.scope.contentOptions.eventType = this.content.eventType;
		}

		if (this.scope.contentOptions.segments === undefined) {
			this.scope.contentOptions.segments = this.content.segments;
		}

		if (this.scope.contentOptions.campaign === undefined) {
			this.scope.contentOptions.campaign = this.content.campaign;
		}

		if (this.scope.contentOptions.debugCard === undefined) {
			this.scope.contentOptions.debugCard = {};
		}

		if (this.scope.contentOptions.debugCard.id === undefined) {
			this.scope.contentOptions.debugCard.id = this.content.debugCard.id;
		}

		if (this.scope.contentOptions.debugCard.text === undefined) {
			this.scope.contentOptions.debugCard.text = this.content.debugCard.text;
		}

		if (this.scope.contentOptions.debugCard.body === undefined) {
			this.scope.contentOptions.debugCard.body = this.content.debugCard.body;
		}

		if (this.scope.contentOptions.debugCard.templateUrl === undefined && this.scope.contentOptions.debugCard.template === undefined) {
			this.scope.contentOptions.debugCard.templateUrl = this.content.debugCard.templateUrl;
		}

		if (this.scope.contentOptions.datepickerOptions === undefined) {
			this.scope.contentOptions.datepickerOptions = {};
		}

		if (this.scope.contentOptions.datepickerOptions.startDate === undefined) {
			this.scope.contentOptions.datepickerOptions.startDate = this.content.cardsOptions.startDate;
		}

		if (this.scope.contentOptions.datepickerOptions.endDate === undefined) {
			this.scope.contentOptions.datepickerOptions.endDate = this.content.cardsOptions.endDate;
		}

		if (this.scope.contentOptions.datepickerOptions.dateRange === undefined) {
			this.scope.contentOptions.datepickerOptions.dateRange = this.content.cardsOptions.dateRange;
		}

		if (this.scope.contentOptions.datepickerOptions.config === undefined) {
			this.scope.contentOptions.datepickerOptions.config = {
				singleMonth: true,
				showShortcuts: false,
				showTopbar: false
			}
		}

		if (this.scope.filters === undefined) {
			this.scope.filters = this.content.sankeyFilters;
		}

		if (this.scope.sankeyData === undefined) {
			this.scope.sankeyData = this.SANKEY.data;
		}

		if (this.scope.histogramData === undefined) {
			this.scope.histogramData = this.HISTOGRAM.data;
		}
	};

	Initializer.prototype.initCardsOpt = function () {
		if (this.scope.cardsOptions === undefined) {
			this.scope.cardsOptions = {};
		}

		if (this.scope.cardsOptions.cards === undefined) {
			this.scope.cardsOptions.cards = this.content.cardsOptions.cards;

			if (this.scope.cardsOptions.margin === undefined) {
				this.scope.cardsOptions.margin = this.content.cardsOptions.margin;
			}

			for (var card in this.scope.cardsOptions.cards) {
				if (card == 'clicks') {
					continue;
				}

				this.scope.cardsOptions.cards[card].counter = new Counter(this.scope.cardsOptions.cards[card]);
			}

			angular.element(document).click(function (event) {
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
			if (angular.element('loading').length == 0) {
				this.element.find(this.content.listSelector).append(this.content.loadingTemplate);
				this.$compile(angular.element('loading'))(this.scope);
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

		if (this.scope.contentOptions.datepickerOptions === undefined) {
			this.scope.contentOptions.datepickerOptions = {};
		}

		if (this.scope.contentOptions.datepickerOptions.startDate === undefined) {
			this.scope.contentOptions.datepickerOptions.startDate = this.content.cardsOptions.startDate;
		}

		if (this.scope.contentOptions.datepickerOptions.endDate === undefined) {
			this.scope.contentOptions.datepickerOptions.endDate = this.content.cardsOptions.endDate;
		}

		if (this.scope.contentOptions.datepickerOptions.dateRange === undefined) {
			this.scope.contentOptions.datepickerOptions.dateRange = this.content.cardsOptions.dateRange;
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
						this.$compile(angular.element('div[custom-grid]'))(this.scope);
					}
				}
			}
		}
		else {
			if (this.scope.view) {
				if (this.scope.view.isGrid) {
					this.$compile(angular.element('div[custom-grid]'))(this.scope);
				}
			}
		}

		if (this.scope.contentOptions.loading) {
			this.scope.contentOptions.isLoading = false;
		}
	};

	return Initializer;
})();

var templatesPath = '/src/app/templates/';

var Row = function () {
	function Row(elm, rootScope, compile) {
		this.elm = elm;
		this.scope = rootScope.$new();
		this.compile = compile;
	}

	Row.prototype.edit = function () {
		if (angular.element('modal').length != 0) {
			angular.element('modal').remove();
		}

		this.scope.editingRow = this.elm;

		angular.element('body').append('<div modal value="editingRow" enable-save="true" body-template-url="' + templatesPath + 'directive-templates/edit-entity.html"></modal>');
		var modal = angular.element('div[modal]');
		this.compile(modal)(this.scope);
	}

	Row.prototype.delete = function (data) {
		data.splice(data.indexOf(this.elm.entity), 1);
	}

	Row.prototype.history = function () {
		if (angular.element('history').length != 0) {
			angular.element('history').remove();
		}

		this.scope.historiedRow = this.elm;

		angular.element('body').append('<div modal value="historiedRow.actions.history"  body-template-url="' + templatesPath + 'directive-templates/history.html"></history>');
		var modal = angular.element('div[modal]');
		this.compile(modal)(this.scope);
	}

	Row.prototype.copy = function () {
		var s = JSON.stringify(this.elm.entity);

		if (window.clipboardData && clipboardData.setData) {
			clipboardData.setData('text', s);

			if ($.cursorMessage) {
				$.cursorMessage('Row is copied to clipboard.');
			}
		}
		else {
			angular.element('body').append('<input id="holdtext" style="display: none"/>')

			var elm = angular.element("#holdtext");
			elm.val(s);
			elm.select();

			try {
				document.execCommand('copy');

				if ($.cursorMessage) {
					$.cursorMessage('Row is copied to clipboard.');
				}

			}
			catch (e) {
				if ($.cursorMessage) {
					$.cursorMessage('Copied ended with error.', { backgroundColor: 'rgb(143, 59, 59)' });
				}

			}
			finally {
				elm.remove('#holdtext');
			}
		};
	}

	return Row;
}();
angular.element.fn.center = function () {
	this.css("position", "absolute");
	this.css("top", Math.max(0, ((angular.element(this.parent()).height() - angular.element(this).outerHeight()) / 2) +
                                                angular.element(this.parent()).scrollTop()) + "px");
	this.css("left", Math.max(0, ((angular.element(this.parent()).width() - angular.element(this).outerWidth()) / 2) +
                                                angular.element(this.parent()).scrollLeft()) + "px");
	this.css("z-index", 10000);
	return this;
}
if (angular.element) {
	(function () {
		angular.element.cursorMessageData = {}; // needed for e.g. timeoutId
		//start registring mouse coцridnates from the start!

		angular.element(window).ready(function (e) {
			if (angular.element('.cursor-message').length == 0) {
				angular.element('body').append('<div class="cursor-message">&nbsp;</div>');
				angular.element('.cursor-message').hide();
			}

			angular.element('body').mousemove(function (e) {
				angular.element.cursorMessageData.mouseX = e.pageX;
				angular.element.cursorMessageData.mouseY = e.pageY;
				if (angular.element.cursorMessageData.options != undefined) angular.element._showCursorMessage();
			});
		});
		angular.element.extend({
			cursorMessage: function (message, options) {
				if (options == undefined) options = {};
				if (options.offsetX == undefined) options.offsetX = 5;
				if (options.offsetY == undefined) options.offsetY = 5;
				if (options.hideTimeout == undefined) options.hideTimeout = 2000;

				angular.element('.cursor-message').html(message).fadeIn('slow');
				if (angular.element.cursorMessageData.hideTimeoutId != undefined) clearTimeout(angular.element.cursorMessageData.hideTimeoutId);
				if (options.hideTimeout > 0) angular.element.cursorMessageData.hideTimeoutId = setTimeout(angular.element.hideCursorMessage, options.hideTimeout);
				angular.element.cursorMessageData.options = options;
				angular.element._showCursorMessage();
			},
			hideCursorMessage: function () {
				angular.element('.cursor-message').fadeOut('slow');
			},
			_showCursorMessage: function () {
				angular.element('.cursor-message').css({ top: (angular.element.cursorMessageData.mouseY + angular.element.cursorMessageData.options.offsetY + 30) + 'px', left: (angular.element.cursorMessageData.mouseX + angular.element.cursorMessageData.options.offsetX - 150) });

				if (angular.element.cursorMessageData.options.backgroundColor) {
					angular.element('.cursor-message').css({ 'background-color': angular.element.cursorMessageData.options.backgroundColor });
				}

			}
		});
	})(angular.element);
}
angular.element.fn.onPositionChanged = function (trigger, millis) {
	if (millis == null) millis = 100;
	var o = angular.element(this[0]);
	if (o.length < 1) return o;

	var lastPos = null;
	var lastOff = null;
	setInterval(function () {
		if (o == null || o.length < 1) return o;
		if (lastPos == null) lastPos = o.position();
		if (lastOff == null) lastOff = o.offset();
		var newPos = o.position();
		var newOff = o.offset();
		if (lastPos.top != newPos.top || lastPos.left != newPos.left) {
			angular.element(this).trigger('onPositionChanged', { lastPos: lastPos, newPos: newPos });
			if (typeof (trigger) == "function") trigger(lastPos, newPos);
			lastPos = o.position();
		}
		if (lastOff.top != newOff.top || lastOff.left != newOff.left) {
			angular.element(this).trigger('onOffsetChanged', { lastOff: lastOff, newOff: newOff });
			if (typeof (trigger) == "function") trigger(lastOff, newOff);
			lastOff = o.offset();
		}
	}, millis);

	return o;
};
d3.sankey = function () {
	var sankey = {},
		nodeWidth = 24,
		nodePadding = 8,
		size = [1, 1],
		nodes = [],
		links = [];

	sankey.nodeWidth = function (_) {
		if (!arguments.length) return nodeWidth;
		nodeWidth = +_;
		return sankey;
	};

	sankey.nodePadding = function (_) {
		if (!arguments.length) return nodePadding;
		nodePadding = +_;
		return sankey;
	};

	sankey.nodes = function (_) {
		if (!arguments.length) return nodes;
		nodes = _;
		return sankey;
	};

	sankey.links = function (_) {
		if (!arguments.length) return links;
		links = _;
		return sankey;
	};

	sankey.size = function (_) {
		if (!arguments.length) return size;
		size = _;
		return sankey;
	};

	sankey.layout = function (iterations) {
		computeNodeLinks();
		computeNodeValues();
		computeNodeBreadths();
		computeNodeDepths(iterations);
		computeLinkDepths();
		return sankey;
	};

	sankey.relayout = function () {
		computeLinkDepths();
		return sankey;
	};

	sankey.link = function () {
		var curvature = .5;

		function link(d) {
			var x0 = d.source.x + d.source.dx,
				x1 = d.target.x,
				xi = d3.interpolateNumber(x0, x1),
				x2 = xi(curvature),
				x3 = xi(1 - curvature),
				y0 = d.source.y + d.sy + d.dy / 2,
				y1 = d.target.y + d.ty + d.dy / 2;
			return "M" + x0 + "," + y0
				 + "C" + x2 + "," + y0
				 + " " + x3 + "," + y1
				 + " " + x1 + "," + y1;
		}

		link.curvature = function (_) {
			if (!arguments.length) return curvature;
			curvature = +_;
			return link;
		};

		return link;
	};

	// Populate the sourceLinks and targetLinks for each node.
	// Also, if the source and target are not objects, assume they are indices.
	function computeNodeLinks() {
		nodes.forEach(function (node) {
			node.sourceLinks = [];
			node.targetLinks = [];
		});
		links.forEach(function (link) {
			var source = link.source,
				target = link.target;
			if (typeof source === "number") source = link.source = nodes[link.source];
			if (typeof target === "number") target = link.target = nodes[link.target];
			source.sourceLinks.push(link);
			target.targetLinks.push(link);
		});
	}

	// Compute the value (size) of each node by summing the associated links.
	function computeNodeValues() {
		nodes.forEach(function (node) {
			node.value = Math.max(
			  d3.sum(node.sourceLinks, value),
			  d3.sum(node.targetLinks, value)
			);
		});
	}

	// Iteratively assign the breadth (x-position) for each node.
	// Nodes are assigned the maximum breadth of incoming neighbors plus one;
	// nodes with no incoming links are assigned breadth zero, while
	// nodes with no outgoing links are assigned the maximum breadth.
	function computeNodeBreadths() {
		var remainingNodes = nodes,
			nextNodes,
			x = 0;

		while (remainingNodes.length) {
			nextNodes = [];
			remainingNodes.forEach(function (node) {
				node.x = x;
				node.dx = nodeWidth;
				node.sourceLinks.forEach(function (link) {
					nextNodes.push(link.target);
				});
			});
			remainingNodes = nextNodes;
			++x;
		}

		//
		moveSinksRight(x);
		scaleNodeBreadths((size[0] - nodeWidth) / (x - 1));
	}

	function moveSourcesRight() {
		nodes.forEach(function (node) {
			if (!node.targetLinks.length) {
				node.x = d3.min(node.sourceLinks, function (d) { return d.target.x; }) - 1;
			}
		});
	}

	function moveSinksRight(x) {
		nodes.forEach(function (node) {
			if (!node.sourceLinks.length) {
				node.x = x - 1;
			}
		});
	}

	function scaleNodeBreadths(kx) {
		nodes.forEach(function (node) {
			node.x *= kx;
		});
	}

	function computeNodeDepths(iterations) {
		var nodesByBreadth = d3.nest()
			.key(function (d) { return d.x; })
			.sortKeys(d3.ascending)
			.entries(nodes)
			.map(function (d) { return d.values; });

		//
		initializeNodeDepth();
		resolveCollisions();
		for (var alpha = 1; iterations > 0; --iterations) {
			relaxRightToLeft(alpha *= .99);
			resolveCollisions();
			relaxLeftToRight(alpha);
			resolveCollisions();
		}

		function initializeNodeDepth() {
			var ky = d3.min(nodesByBreadth, function (nodes) {
				return (size[1] - (nodes.length - 1) * nodePadding) / d3.sum(nodes, value);
			});

			nodesByBreadth.forEach(function (nodes) {
				nodes.forEach(function (node, i) {
					node.y = i;
					node.dy = node.value * ky;
				});
			});

			links.forEach(function (link) {
				link.dy = link.value * ky;
			});
		}

		function relaxLeftToRight(alpha) {
			nodesByBreadth.forEach(function (nodes, breadth) {
				nodes.forEach(function (node) {
					if (node.targetLinks.length) {
						var y = d3.sum(node.targetLinks, weightedSource) / d3.sum(node.targetLinks, value);
						node.y += (y - center(node)) * alpha;
					}
				});
			});

			function weightedSource(link) {
				return center(link.source) * link.value;
			}
		}

		function relaxRightToLeft(alpha) {
			nodesByBreadth.slice().reverse().forEach(function (nodes) {
				nodes.forEach(function (node) {
					if (node.sourceLinks.length) {
						var y = d3.sum(node.sourceLinks, weightedTarget) / d3.sum(node.sourceLinks, value);
						node.y += (y - center(node)) * alpha;
					}
				});
			});

			function weightedTarget(link) {
				return center(link.target) * link.value;
			}
		}

		function resolveCollisions() {
			nodesByBreadth.forEach(function (nodes) {
				var node,
					dy,
					y0 = 0,
					n = nodes.length,
					i;

				// Push any overlapping nodes down.
				nodes.sort(ascendingDepth);
				for (i = 0; i < n; ++i) {
					node = nodes[i];
					dy = y0 - node.y;
					if (dy > 0) node.y += dy;
					y0 = node.y + node.dy + nodePadding;
				}

				// If the bottommost node goes outside the bounds, push it back up.
				dy = y0 - nodePadding - size[1];
				if (dy > 0) {
					y0 = node.y -= dy;

					// Push any overlapping nodes back up.
					for (i = n - 2; i >= 0; --i) {
						node = nodes[i];
						dy = node.y + node.dy + nodePadding - y0;
						if (dy > 0) node.y -= dy;
						y0 = node.y;
					}
				}
			});
		}

		function ascendingDepth(a, b) {
			return a.y - b.y;
		}
	}

	function computeLinkDepths() {
		nodes.forEach(function (node) {
			node.sourceLinks.sort(ascendingTargetDepth);
			node.targetLinks.sort(ascendingSourceDepth);
		});
		nodes.forEach(function (node) {
			var sy = 0, ty = 0;
			node.sourceLinks.forEach(function (link) {
				link.sy = sy;
				sy += link.dy;
			});
			node.targetLinks.forEach(function (link) {
				link.ty = ty;
				ty += link.dy;
			});
		});

		function ascendingSourceDepth(a, b) {
			return a.source.y - b.source.y;
		}

		function ascendingTargetDepth(a, b) {
			return a.target.y - b.target.y;
		}
	}

	function center(node) {
		return node.y + node.dy / 2;
	}

	function value(link) {
		return link.value;
	}

	return sankey;
};
function getWindowWidth() {
	var windowWidth = 0;
	if (typeof (window.innerWidth) == 'number') {
		windowWidth = window.innerWidth;
	}
	else {
		if (document.documentElement && document.documentElement.clientWidth) {
			windowWidth = document.documentElement.clientWidth;
		}
		else {
			if (document.body && document.body.clientWidth) {
				windowWidth = document.body.clientWidth;
			}
		}
	}
	return windowWidth;
}
function getWindowHeight() {
	var windowHeight = 0;
	if (typeof (window.innerHeight) == 'number') {
		windowHeight = window.innerHeight;
	}
	else {
		if (document.documentElement && document.documentElement.clientHeight) {
			windowHeight = document.documentElement.clientHeight;
		}
		else {
			if (document.body && document.body.clientHeight) {
				windowHeight = document.body.clientHeight;
			}
		}
	}
	return windowHeight;
}


angular.module('gridTaskApp')
.constant('LOCATIONS_EN', {
});
angular.module('gridTaskApp')
.constant('LOCATIONS_RU', {
});
angular.module('gridTaskApp')
.config(['$translateProvider', 'LOCATIONS_RU', 'LOCATIONS_EN', function ($translateProvider, LOCATIONS_RU, LOCATIONS_EN) {
	$translateProvider.translations('en', {
		'Selected Users': 'Selected Users',
		'usersInteract': 'Users who have interacted with at least ',
		'filterList': 'Filter list',
		'showRecords': 'Show records',
		'back': 'Back',
		'save': 'Save',
		'filter': 'Filter',
		'history': 'History',
		'oldValue': 'Old value',
		'newValue': 'New value',
		'dateChange': 'Date change',
		'historyEmpty': 'History is empty',
		'editEntity': 'Edit entity',
		'close': 'Close',
		'topSegments': 'Top Segments',
		'topCampaigns': 'Top campaigns',
		'records': 'records',
		'choose': 'Choose',
		'upload': 'Upload'
	});

	$translateProvider.translations('ru', {
		'Selected Users': 'Выбранные пользователи',
		'filterList': 'Список фильтров',
		'showRecords': 'Показать записи',
		'back': 'Назад',
		'save': 'Сохранить',
		'filter': 'Фильтр',
		'history': 'История',
		'oldValue': 'Старое значение',
		'newValue': 'Новое значение',
		'dateChange': 'Дата изменения',
		'historyEmpty': 'История пуста',
		'editEntity': 'Изменить сущность',
		'close': 'Закрыть',
		'topSegments': 'Лучшие сегменты',
		'topCampaigns': 'Лучшие кампании',
		'records': 'записей',
		'choose': 'Выбрать',
		'upload': 'Загрузить'
	});


	appendLocations('en', LOCATIONS_EN);
	appendLocations('ru', LOCATIONS_RU);

	function appendLocations(language, dictionary) {
		angular.forEach(dictionary, function (item, key) {
			$translateProvider.translations(language)[key] = item;
		});
	};

	$translateProvider.preferredLanguage('en');
}]);
var templatesPath = '/src/app/templates/';

function ngGridActionsPlugin(opts, compile) {
	var self = this;
	self.grid = null;
	self.scope = null;
	self.opts = opts;
	self.compile = compile;

	self.init = function (scope, grid, services) {
		self.domUtilityService = services.DomUtilityService;
		self.grid = grid;
		self.scope = scope;

		var recalcForData = function () {
			setTimeout(function () {

				self.grid.rowCache.forEach(function (row) {
					if (row) {
						row.actions = angular.copy(self.opts);
						row.actions.isCheck = false;
						row.actions.setToggle = setToggle;
						row.actions.setCheck = setCheck;
						row.actions.copyRow = copyRow;
						row.actions.deleteRow = deleteRow;
						row.actions.editRow = editRow;
						row.actions.historyRow = historyRow;
						row.actions.history = [];
						row.actions.tab = 2;
						row.actions.select = function (row) {
							row.elm.addClass('selected');

							self.grid.rowCache.forEach(function (row) {
								if (row.actions.isSelect) {
									row.actions.isSelect = false;
								}
							});

							this.isSelect = true;
						}

						if (row.actions.values.options.callback === undefined) {
							row.actions.values.options.callback = function (action) {
								if (action.isEdit) {
									row.actions.editRow(row);
								}
								else if (action.isCopy) {
									row.actions.copyRow(row);
								}
								else if (action.isDelete) {
									row.actions.deleteRow(row.entity, self.scope.data, row);
								}
								else if (action.isHistory) {
									row.actions.historyRow(row);
								}
							};
						}
					}
				});

				if (self.opts.contentOptions.checks.options.callback === undefined) {
					self.opts.contentOptions.checks.options.callback = function (check) {
						if (check) {
							if (check.isAll) {
								self.grid.rowCache.forEach(function (value) {
									value.actions.isCheck = true;
								});
							}
							else if (check.isNoOne) {
								self.grid.rowCache.forEach(function (value) {
									value.actions.isCheck = false;
								});
							}
							else if (check.isMarked) {
								self.grid.rowCache.forEach(function (value) {
								});
							}
							else if (check.isNotMarked) {
								self.grid.rowCache.forEach(function (value) {
									value.actions.isCheck = !value.actions.isCheck;
								});
							}
						};
					};
				}

				self.scope.$apply();
			});

			if (self.scope.toggleRow) {
				closeToggleRow(self.scope.toggleRow.clone, self.scope.detailsClass, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex), self.scope.rowHeight, true);
				self.scope.toggleRow = undefined;
			}

			setTimeout(innerRecalcForData, 1);
		};

		var innerRecalcForData = function () {

			if (self.scope.toggleRow) {
				var isExistToggle = false;

				for (idx in self.scope.renderedRows) {
					if (self.scope.renderedRows[idx].orig.actions) {
						if (self.scope.renderedRows[idx].orig.actions.isToggle) {

							if (!self.scope.renderedRows[idx].elm.hasClass('toggle')) {
								refreshToggle(self.scope.renderedRows[idx], self.scope.rowHeight, self.scope.step, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex));
							}

							isExistToggle = true;
						}
						else {
							self.scope.renderedRows[idx].elm.removeClass('toggle');
						}
					}
				}

				if (isExistToggle) {
					self.grid.$canvas.css('height', self.scope.newCanvasHeight + 'px');
				}
				else {
					angular.element('.details-template').parent().removeClass('toggle');
					angular.element('.details-template').remove();
				}
			}

			self.scope.catHashKeys = function () {
				var hash = '',
					idx;
				for (idx in self.scope.renderedRows) {
					hash += self.scope.renderedRows[idx].$$hashKey;

					if (self.scope.renderedRows[idx].orig.actions) {
						if (self.scope.renderedRows[idx].orig.actions.isSelect) {
							self.scope.renderedRows[idx].elm.addClass('selected');
							self.scope.renderedRows[idx].orig.actions.values.isShow = true;
						}
						else {
							self.scope.renderedRows[idx].elm.removeClass('selected');
							self.scope.renderedRows[idx].orig.actions.values.isShow = false;
						}
					}
				}
				return hash;
			};
		};

		self.grid.$viewport.scroll(function () {
			var isExistToggle = false;

			for (idx in self.scope.renderedRows) {
				if (self.scope.renderedRows[idx].orig.actions.isToggle) {

					if (!self.scope.renderedRows[idx].elm.hasClass('toggle')) {

						if (idx != self.scope.renderedRows.length - 1) {

						}
						refreshToggle(self.scope.renderedRows[idx], self.scope.rowHeight, self.scope.step, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex));
					}

					isExistToggle = true;
				}
				else {
					self.scope.renderedRows[idx].elm.removeClass('toggle');
				}
			}

			if (isExistToggle) {
				self.grid.$canvas.css('height', self.scope.newCanvasHeight + 'px');
			}
			else {
				angular.element('.details-template').parent().removeClass('toggle');
				angular.element('.details-template').remove();
			}
		});

		var setToggle = function (row, isToggle, detailsClass) {

			if (isToggle) {
				if (self.scope.toggleRow) {
					var deletedRow;

					for (var i = 0; i < self.grid.rowCache.length; i++) {
						if (angular.equals(self.grid.rowCache[i], self.scope.toggleRow)) {
							deletedRow = self.grid.rowCache[i];
							break;
						}
					}

					closeOrigToggleRow(deletedRow, self.scope.detailsClass, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex), self.scope.rowHeight)
				}

				self.scope.toggleRow = row;
				self.scope.detailsClass = detailsClass;

				setRenderToggle(row.clone, self.scope.detailsClass, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex), self.scope.rowHeight);
			}
			else {
				closeToggleRow(row.clone, detailsClass, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex), self.scope.rowHeight);
				self.scope.toggleRow = undefined;
			}
		};

		var refreshToggle = function (row, rowHeight, step, template) {
			if (template) {
				var step = step;
				var detElm;

				if (template.substr(template.length - 4) == 'html') {
					$.get(template, function (result) {
						angular.element('.details-template').remove();
						detElm = angular.element(result);
					}).fail(function () {
						angular.element('.details-template').remove();
						detElm = angular.element(template);

					}).always(function () {
						row.elm.append(detElm);
						self.compile(detElm)(self.scope);
						angular.element('.details-template').css('top', rowHeight + 'px');
						row.elm.addClass('toggle');
						var top = Math.round(row.elm.position().top);
						var children = angular.element(row.elm).parent().children();

						for (var i = 0; i < children.length; i++) {
							if (parseInt(angular.element(children[i]).css('top').replace('px', '')) > top) {
								angular.element(children[i]).css('top', step + 'px');
								step += rowHeight;
							}
						}
					});
				}
				else {
					angular.element('.details-template').remove();
					detElm = angular.element(template);
					row.elm.append(detElm);
					self.compile(detElm)(self.scope);
					angular.element('.details-template').css('top', rowHeight + 'px');
					row.elm.addClass('toggle');
					var top = Math.round(row.elm.position().top);
					var children = angular.element(row.elm).parent().children();

					for (var i = 0; i < children.length; i++) {
						if (parseInt(angular.element(children[i]).css('top').replace('px', '')) > top) {
							angular.element(children[i]).css('top', step + 'px');
							step += rowHeight;
						}
					}
				}
			}
			else {
				row.elm.addClass('toggle');
				angular.element(row.elm).css('height', row.elm.context.scrollHeight + 'px');

				var top = Math.round(row.elm.position().top);
				var children = angular.element(row.elm).parent().children();
				var step = step;

				for (var i = 0; i < children.length; i++) {
					if (parseInt(angular.element(children[i]).css('top').replace('px', '')) > top) {
						angular.element(children[i]).css('top', step + 'px');
						step += rowHeight;
					}
				}
			}
		}

		var setRenderToggle = function (row, detailsClass, template, rowHeight) {
			row.elm.addClass(detailsClass);
			row.isToggle = true;

			if (template) {
				var detElm;

				if (template.substr(template.length - 4) == 'html') {
					$.get(template, function (result) {
						angular.element('.details-template').remove();
						detElm = angular.element(result);
					}).fail(function () {
						angular.element('.details-template').remove();
						detElm = angular.element(template);
					}).always(function () {
						row.elm.append(detElm);
						self.compile(detElm)(self.scope);
						angular.element('.details-template').css('top', row.elm.height() + 'px');

						var top = Math.round(row.elm.position().top);
						var children = angular.element(row.elm).parent().children();
						var step = row.elm.position().top + row.elm.find('.details-template').height() + rowHeight;
						self.scope.step = step;

						self.canvasHeight = self.grid.$canvas.height();
						self.grid.$canvas.css('height', self.canvasHeight + row.elm.context.scrollHeight + 'px');
						self.scope.newCanvasHeight = self.canvasHeight + row.elm.context.scrollHeight;

						angular.element(row.elm).css('height', row.elm.context.scrollHeight + 'px');

						for (var i = 0; i < children.length; i++) {
							if (angular.element(children[i]).css('top').replace('px', '') == row.elm.position().top) {
								for (var j = i + 1; j < children.length; j++) {
									angular.element(children[j]).css('top', step + 'px');
									step += rowHeight;
								}
							}
						}
					});;
				}
				else {
					angular.element('.details-template').remove();
					detElm = angular.element(template);
					row.elm.append(detElm);
					self.compile(detElm)(self.scope);
					angular.element('.details-template').css('top', row.elm.height() + 'px');

					var top = Math.round(row.elm.position().top);
					var children = angular.element(row.elm).parent().children();
					var step = row.elm.position().top + row.elm.find('.details-template').height() + rowHeight;
					self.scope.step = step;

					self.canvasHeight = self.grid.$canvas.height();
					self.grid.$canvas.css('height', self.canvasHeight + row.elm.context.scrollHeight + 'px');
					self.scope.newCanvasHeight = self.canvasHeight + row.elm.context.scrollHeight;

					angular.element(row.elm).css('height', row.elm.context.scrollHeight + 'px');

					for (var i = 0; i < children.length; i++) {
						if (angular.element(children[i]).css('top').replace('px', '') == row.elm.position().top) {
							for (var j = i + 1; j < children.length; j++) {
								angular.element(children[j]).css('top', step + 'px');
								step += rowHeight;
							}
						}
					}
				}
			}
			else {
				var top = Math.round(row.elm.position().top);
				var children = angular.element(row.elm).parent().children();
				var step = row.elm.position().top + row.elm.context.scrollHeight;
				self.scope.step = step;

				self.canvasHeight = self.grid.$canvas.height();
				self.grid.$canvas.css('height', self.canvasHeight + row.elm.context.scrollHeight + 'px');
				self.scope.newCanvasHeight = self.canvasHeight + row.elm.context.scrollHeight;

				angular.element(row.elm).css('height', row.elm.context.scrollHeight + 'px');

				for (var i = 0; i < children.length; i++) {
					if (parseInt(angular.element(children[i]).css('top').replace('px', '')) > top) {
						angular.element(children[i]).css('top', step + 'px');
						step += rowHeight;
					}
				}

				self.scope.toggleElm = row.elm.clone();
			}
		}

		var closeOrigToggleRow = function (row, detailsClass, template, rowHeigth, reInit) {
			if (rowHeigth === undefined) {
				rowHeigth = 60;
			}

			row.clone.elm.removeClass('toggle');
			angular.element('.details-template').remove();
			row.actions.isToggle = false;
			self.grid.$canvas.css('height', self.canvasHeight + 'px');
			self.scope.newCanvasHeight = self.canvasHeight;

			var top = Math.round(row.clone.elm.position().top);
			var children = angular.element(row.clone.elm).parent().children();
			var step = row.clone.elm.position().top + rowHeigth;

			angular.element(row.clone.elm).css('height', rowHeigth + 'px');

			for (var i = 0; i < children.length; i++) {
				if (parseInt(angular.element(children[i]).css('top').replace('px', '')) > top) {
					angular.element(children[i]).css('top', step + 'px');
					step += rowHeigth;
				}
			}

			if (reInit) {
				self.scope.toggleRow = undefined;
			}
		}

		var closeToggleRow = function (row, detailsClass, template, rowHeigth, reInit) {
			row.elm.removeClass('toggle');
			angular.element('.details-template').remove();
			row.orig.actions.isToggle = false;
			self.grid.$canvas.css('height', self.canvasHeight + 'px');
			self.scope.newCanvasHeight = self.canvasHeight;

			var top = Math.round(row.elm.position().top);
			var children = angular.element(row.elm).parent().children();
			var step = row.elm.position().top + rowHeigth;

			angular.element(row.elm).css('height', rowHeigth + 'px');

			for (var i = 0; i < children.length; i++) {
				if (parseInt(angular.element(children[i]).css('top').replace('px', '')) > top) {
					angular.element(children[i]).css('top', step + 'px');
					step += rowHeigth;
				}
			}

			if (reInit) {
				self.scope.toggleRow = undefined;
			}
		}

		var setCheck = function (row) {
			row.actions.onCheck(self.grid.rowCache);
		}

		var getDetailsTemplate = function (template, condition, entity, index) {
			if (condition !== undefined && condition(entity, index) !== undefined) {
				template = condition(entity, index);
			}

			return template;
		}

		var copyRow = function (row) {
			var s = JSON.stringify(row.entity);

			if (window.clipboardData && clipboardData.setData) {
				clipboardData.setData('text', s);

				if ($.cursorMessage) {
					$.cursorMessage('Row is copied to clipboard.');
				}
			}
			else {
				angular.element(row.clone.elm).append('<input id="holdtext" style="display: none"/>')

				var elm = angular.element("#holdtext");
				elm.val(s);
				elm.select();

				try {
					document.execCommand('copy');

					if ($.cursorMessage) {
						$.cursorMessage('Row is copied to clipboard.');
					}

				}
				catch (e) {
					if ($.cursorMessage) {
						$.cursorMessage('Copied ended with error.', { backgroundColor: 'rgb(143, 59, 59)' });
					}

				}
				finally {
					elm.remove('#holdtext');
				}
			};
		}

		var deleteRow = function (entity, data, row) {
			for (var i = 0; i < self.grid.rowCache.length; i++) {
				if (self.grid.rowCache[i].entity == entity) {
					self.grid.rowCache.splice(i, 1);
					break
				}
			}

			var isEarlier = false;

			for (var i = 0; i < self.scope.renderedRows.length; i++) {
				if (self.scope.renderedRows[i].entity == entity) {
					self.scope.renderedRows.splice(i, 1);
					break
				}

				if (self.scope.toggleRow) {
					if (self.scope.renderedRows[i].entity == self.scope.toggleRow.entity) {
						isEarlier = true;
					}
				}
			}

			self.grid.setRenderedRows(self.scope.renderedRows);

			data.splice(data.indexOf(entity), 1);

			if (self.scope.toggleRow) {
				if (self.scope.toggleRow.entity == entity) {
					closeOrigToggleRow(self.scope.toggleRow, 'toggle', self.scope.toggleRow.actions.detailsTemplate, self.scope.rowHeight, true);
				}
				else {
					if (!isEarlier) {
						self.scope.step -= 60;

						refreshToggle(self.scope.toggleRow.clone, self.scope.rowHeight, self.scope.step, self.scope.toggleRow.actions.detailsTemplate);
					}
				}
			}
		}

		var editRow = function (row) {
			if (angular.element('div[modal]').length != 0) {
				angular.element('div[modal]').remove();
			}

			self.scope.rowEditing = row;

			angular.element('body').append('<div modal value="rowEditing" enable-save="true" body-template-url="' + templatesPath + 'directive-templates/edit-entity.html"></modal>');
			var modal = angular.element('div[modal]');
			self.compile(modal)(self.scope);
		}


		var historyRow = function (row) {
			if (angular.element('div[modal]').length != 0) {
				angular.element('div[modal]').remove();
			}

			self.scope.rowHistoried = row;

			angular.element('body').append('<div modal value="rowHistoried.actions.history"  body-template-url="' + templatesPath + 'directive-templates/history.html"></history>');
			var modal = angular.element('div[modal]');
			self.compile(modal)(self.scope);
		}

		self.scope.$watch('catHashKeys()', innerRecalcForData);
		self.scope.$watch(self.grid.config.data, recalcForData);
	}

	self.refreshOpt = function (otps) {
		self.opts = otps;
	}

	self.refreshCallback = function () {
		self.opts.contentOptions.checks.options.callback = function (check) {
			if (check) {
				if (check.isAll) {
					self.grid.rowCache.forEach(function (value) {
						value.actions.isCheck = true;
					});
				}
				else if (check.isNoOne) {
					self.grid.rowCache.forEach(function (value) {
						value.actions.isCheck = false;
					});
				}
				else if (check.isMarked) {
					self.grid.rowCache.forEach(function (value) {
					});
				}
				else if (check.isNotMarked) {
					self.grid.rowCache.forEach(function (value) {
						value.actions.isCheck = !value.actions.isCheck;
					});
				}
			};
		};
	}
};
// Todo:
// 1) Make the button prettier
// 2) add a config option for IE users which takes a URL.  That URL should accept a POST request with a
//    JSON encoded object in the payload and return a CSV.  This is necessary because IE doesn't let you
//    download from a data-uri link
//
// Notes:  This has not been adequately tested and is very much a proof of concept at this point
function ngGridCsvExportPlugin(opts) {
	var self = this;
	self.grid = null;
	self.scope = null;
	self.init = function (scope, grid, services) {
		self.grid = grid;
		self.scope = scope;
		function showDs() {
			var keys = [];
			for (var f in grid.config.columnDefs) { keys.push(grid.config.columnDefs[f].field); }
			var csvData = '';
			function csvStringify(str) {
				if (str == null) { // we want to catch anything null-ish, hence just == not ===
					return '';
				}
				if (typeof (str) === 'number') {
					return '' + str;
				}
				if (typeof (str) === 'boolean') {
					return (str ? 'TRUE' : 'FALSE');
				}
				if (typeof (str) === 'string') {
					return str.replace(/"/g, '""');
				}

				return JSON.stringify(str).replace(/"/g, '""');
			}
			function swapLastCommaForNewline(str) {
				var newStr = str.substr(0, str.length - 1);
				return newStr + "\n";
			}
			for (var k in keys) {
				csvData += '"' + csvStringify(keys[k]) + '",';
			}
			csvData = swapLastCommaForNewline(csvData);
			var gridData = grid.data;
			for (var gridRow in gridData) {
				for (k in keys) {
					var curCellRaw;
					if (opts != null && opts.columnOverrides != null && opts.columnOverrides[keys[k]] != null) {
						curCellRaw = opts.columnOverrides[keys[k]](gridData[gridRow][keys[k]]);
					}
					else {
						curCellRaw = gridData[gridRow][keys[k]];
					}
					csvData += '"' + csvStringify(curCellRaw) + '",';
				}
				csvData = swapLastCommaForNewline(csvData);
			}
			var fp = grid.$root.find(".ngFooterPanel");
			var csvDataLinkPrevious = grid.$root.find('.ngFooterPanel .csv-data-link-span');
			if (csvDataLinkPrevious != null) { csvDataLinkPrevious.remove(); }
			var csvDataLinkHtml = "<span class=\"csv-data-link-span\">";
			csvDataLinkHtml += "<br><a href=\"data:text/csv;charset=UTF-8,";
			csvDataLinkHtml += encodeURIComponent(csvData);
			csvDataLinkHtml += "\" download=\"Export.csv\">CSV Export</a></br></span>";
			fp.append(csvDataLinkHtml);
		}
		setTimeout(showDs, 0);
		scope.catHashKeys = function () {
			var hash = '';
			for (var idx in scope.renderedRows) {
				hash += scope.renderedRows[idx].$$hashKey;
			}
			return hash;
		};
		scope.$watch('catHashKeys()', showDs);
	};
}
function ngGridFlexibleHeightPlugin(opts) {
	var self = this;
	self.grid = null;
	self.scope = null;
	self.init = function (scope, grid, services) {
		self.domUtilityService = services.DomUtilityService;
		self.grid = grid;
		self.scope = scope;
		var recalcHeightForData = function () { setTimeout(innerRecalcForData, 1); };
		var innerRecalcForData = function () {
			var gridId = self.grid.gridId;
			var footerPanelSel = '.' + gridId + ' .ngFooterPanel';
			var extraHeight = self.grid.$topPanel.height() + angular.element(footerPanelSel).height();
			console.log('extra=' + extraHeight);
			var naturalHeight = self.grid.$canvas.height() + 1;
			if (opts != null) {
				if (opts.minHeight != null && (naturalHeight + extraHeight) < opts.minHeight) {
					naturalHeight = opts.minHeight - extraHeight - 2;
				}
			}

			var newViewportHeight = naturalHeight + 2;
			if (!self.scope.baseViewportHeight || self.scope.baseViewportHeight !== newViewportHeight) {
				self.grid.$viewport.css('height', newViewportHeight + 'px');
				console.log('resetting height to ' + (newViewportHeight + extraHeight));
				self.grid.$root.css('height', (newViewportHeight + extraHeight) + 'px');
				self.scope.baseViewportHeight = newViewportHeight;
				self.domUtilityService.UpdateGridLayout(self.scope, self.grid);
			}
			self.grid.$root.css('height', 600 + 'px');

		};
		self.scope.catHashKeys = function () {
			var hash = '',
                idx;
			for (idx in self.scope.renderedRows) {
				hash += self.scope.renderedRows[idx].$$hashKey;
			}
			return hash;
		};
		self.scope.$watch('catHashKeys()', innerRecalcForData);
		self.scope.$watch(self.grid.config.data, recalcHeightForData);
	};
}

angular.module('gridTaskApp')
	.factory('anyOtherClickFactory', ['$document', function ($document) {
		var handlers = [];

		return {
			_register: function (documentClickHandler) {
				$document.on("click", documentClickHandler);
				handlers.push(documentClickHandler);
			},
			_getHandlers: function () {
				return handlers;
			},
			_getCountHandlers: function () {
				return handlers.length;
			},
			_destroy: function (documentClickHandler) {
				$document.off("click", documentClickHandler);
				handlers.splice(documentClickHandler, 1);
			}
		}
	}]);
angular.module('gridTaskApp')
	.factory("cardsFactory", ['$rootScope', function ($rootScope) {
		var instance = {},
			startLeft = 40,
			groupMarginRight = 50,
			cardEvent = 'cardFlip',
			debugEvent = 'debugFlip';

		return {
			register: function (cards, startDate, endDate, margin, content) {
				angular.extend(instance, {
					cards: cards,
					startDate: startDate,
					endDate: endDate,
					margin: margin,
					startLeft: startLeft,
					groupMarginRight: groupMarginRight,
					isDebug: content.enableDebugging,
					debugCard: content.debugCard,
					groupStyle: {}
				});
			},
			getInstance: function () {
				return instance;
			},
			refresh: function (cards) {
				instance.cards = cards;
			},
			enableDebugging: function (isDebug) {
				if (isDebug) {
					this.flipDebug(instance.debugCard.id);
					instance.debugCard.style = {
						left: instance.startLeft
					}
					instance.startLeft += instance.margin;
				}
			},
			flipAll: function () {
				var left = instance.startLeft;
				for (var i in instance.cards) {
					this.flipCard(i);
					instance.cards[i].style = {
						left: left
					}
					left += instance.margin;
				}
				angular.extend(instance.groupStyle, {
					width: left + instance.groupMarginRight
				});
			},
			flipCard: function (propName) {
				$rootScope.$broadcast(cardEvent, propName);
			},
			flipDebug: function (propName) {
				$rootScope.$broadcast(debugEvent, propName);
			},
			clear: function () {
				instance = {}, startLeft = 40, groupMarginRight = 50;
			}
		}
	}]);
angular.module('gridTaskApp')
	.factory('chartFactory', ['$rootScope', function ($rootScope) {
		var Chart = function () {
			function Chart(data, opt) {
				this.units = "Widgets";
				this.margin = { top: 0, right: 10, bottom: 10, left: 10 };
				this.width = 1500 - this.margin.left - this.margin.right;
				this.height = 740 - this.margin.top - this.margin.bottom;
				this.format = function (d) {
					return this.formatNumber(d) + " " + this.units;
				}

				this.formatNumber = d3.format(",.0f");
				this.color = d3.scale.category20();

				this.data = angular.copy(data);
				this.opt = opt;

				this.handlers = [];
			};

			Chart.prototype.clearHtml = function (elm) {
				elm.html('');
			};

			Chart.prototype._transform = function () {
				return "translate(" + this.margin.left + "," + this.margin.top + ")";
			}

			Chart.prototype._renderSvg = function () {
				this.svg = d3.select("#chart").append("svg")
					.attr("width", this.width + this.margin.left + this.margin.right)
					.attr("height", this.height + this.margin.top + this.margin.bottom)
					.append("g")
					.attr("transform", this._transform.bind(this));
			};

			Chart.prototype._renderSankey = function () {
				this.sankey = d3.sankey()
					.nodeWidth(25)
					.nodePadding(35)
					.size([this.width, this.height]);
			};

			Chart.prototype._renderLink = function () {
				this.path = this.sankey.link();

				this.link = this.svg.append("g").selectAll(".link")
					.data(this.data.links)
					.enter().append("path")
					.attr("class", "link")
					.attr("d", this.path)
					.style("stroke-width", function (d) {
						return Math.max(1, d.dy);
					})
					.style("stroke", function (d) {
						if (d.source.color) {
							return d.source.color;
						}
						else {
							return d.source.color = this.color(d.source.name.replace(/ .*/, ""));
						}
					}.bind(this))
			};

			Chart.prototype._renderNode = function () {
				this.node = this.svg.append("g").selectAll(".node")
					.data(this.data.nodes)
					.enter().append("g")
					.attr("class", "node")
					.attr("transform", function (d) {
						return "translate(" + d.x + "," + d.y + ")";
					})
					.call(d3.behavior.drag()
						.origin(function (d) {
							return d;
						})
						.on("dragstart", function () {
							this.parentNode.appendChild(this);
						})
						.on("drag", function (d) {
							$rootScope.$broadcast("drag", d, this);
						}));

				this.handlers.push({
					remove: function () {
						this.svg.selectAll(".node").on("dragstart", null);
						this.svg.selectAll(".node").on("drag", null);
					}.bind(this)
				});

				this.node.append("rect")
					.attr("height", function (d) { return d.dy; })
					.attr("width", this.sankey.nodeWidth())
					.style("fill", function (d) {
						if (d.color) {
							return d.color = d.color;
						}
						else {
							return d.color = this.color(d.name.replace(/ .*/, ""));
						}
					}.bind(this))
					.style("stroke", function (d) {
						return d3.rgb(d.color).darker(2);
					})
					.on("mouseover", this.mouseover.bind(this))
					.on("mouseout", this.mouseout.bind(this));

				this.handlers.push({
					remove: function () {
						this.node.selectAll("rect").on("mouseover", null);
						this.node.selectAll("rect").on("mouseout", null);
					}.bind(this)
				});

				this.node.append("text")
					.attr("x", -6)
					.attr("y", function (d) { return d.dy / 2; })
					.attr("dy", ".35em")
					.attr("text-anchor", "end")
					.attr("transform", null)
					.text(function (d) { return d.name; })
					.filter(function (d) { return d.x < this.width / 2; }.bind(this))
					.attr("x", 6 + this.sankey.nodeWidth())
					.attr("text-anchor", "start");

				this.node.append("text")
					.attr("x", 20)
					.attr("y", function (d) { return d.dy / 2; })
					.attr("dy", ".35em")
					.attr("text-anchor", "end")
					.attr("transform", null)
					.text(function (d) { return d.val; })
					.filter(function (d) { return d.x < this.width / 2; }.bind(this))
					.attr("x", -20 + this.sankey.nodeWidth())
					.attr("text-anchor", "start");
			};

			Chart.prototype._initNodeMap = function () {
				var nodeMap = {};
				this.data.nodes.forEach(function (x) {
					nodeMap[x.name] = x;
				});
				this.data.links = this.data.links.map(function (x) {
					return {
						source: nodeMap[x.source],
						target: nodeMap[x.target],
						value: x.value
					};
				});
			};

			Chart.prototype._initSankey = function () {
				this.sankey
					.nodes(this.data.nodes)
					.links(this.data.links)
					.layout(32);
			};

			Chart.prototype.mouseover = function (d) {
				$rootScope.$broadcast('mouseover', d);
			};

			Chart.prototype.mouseout = function (d) {
				$rootScope.$broadcast('mouseout', d);
			};

			Chart.prototype.fullRenderSankey = function () {
				this._renderSvg();
				this._renderSankey();
				this._initNodeMap();
				this._initSankey();
				this._renderLink();
				this._renderNode();
			};

			Chart.prototype.refreshData = function (data) {
				this.data = angular.copy(data);
			};

			Chart.prototype._removeListeners = function () {
				angular.forEach(this.handlers, function (handler) {
					handler.remove();
				})
			}

			Chart.prototype.destroy = function () {
				this._removeListeners();

				if (this.svg) {
					this.svg.remove();
				}

				this.svg = this.node = this.link = this.path = this.sankey = this.data = null;
			};

			return Chart;
		} ();

		return {
			getChart: function (data, opt) {
				return new Chart(data, opt);
			}
		};
	}]);
angular.module('gridTaskApp')
	.service('jsonService', ['$http', '$q', function ($http, $q) {
		this.get = function (url) {
			var deferred = $q.defer()

			$http.get(url).success(function (data) {
				deferred.resolve(data);
			}).error(function () {
				deferred.reject("Failed to json.");
			});;

			return deferred.promise;
		}
	}]);
(function () {
	'use strict'

	angular
		.module('gridTaskApp')
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
					angular.forEach(this.colCache, function (col, index) {
						if (col.element == this.columns[index]) {
							this.colCache.splice(index, 1);
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

angular.module('gridTaskApp')
	.service('myTemplateService', ['$http', '$templateCache', function ($http, $templateCache) {
		this.put = function (template, name) {
			$templateCache.put(name, template)
		}
	}]);
angular.module('gridTaskApp').factory('NavigationTree', [function () {
	return {
		menu: [],
		get: function () {
			return this.menu = this.NAV_TREE;
		},
		generate: function () {
			var i, len, menu, node, ref, subMenu;
			menu = [];
			ref = this.NAV_TREE;
			for (i = 0, len = ref.length; i < len; i++) {
				node = ref[i];
				subMenu = this.subTree(node);
				if (!_.isEmpty(subMenu)) {
					menu.push(subMenu);
				}
			}
			return menu;
		},
		subTree: function (root) {
			var i, len, node, ref, subTree, tree;
			tree = {};
			if (root.nodes != null) {
				tree = {
					name: root.name,
					nodes: []
				};
				ref = root.nodes;
				for (i = 0, len = ref.length; i < len; i++) {
					node = ref[i];
					subTree = this.subTree(node);
					if (!_.isEmpty(subTree)) {
						tree.nodes.push(subTree);
					}
				}
				if (tree.nodes.length === 0) {
					tree = {};
				}
			} else {
				if ((root.permissions != null) && this.checkPermission(root.permissions)) {
					tree = {
						name: root.name,
						description: root.description,
						state: root.state,
						link: root.link
					};
				}
			}
			return tree;
		},
		checkPermission: function (permissions) {
			return permissions[0] === 'none' || arrayUtils.intersects(session.allow, permissions);
		},
		NAV_TREE: [
		  {
		  	name: 'PEOPLE',
		  	nodes: [
			  {
			  	name: 'Actions',
			  	nodes: [
				  {
				  	name: 'Manage Segments',
				  	description: 'Create segments from 1st and 3rd party data to use in audience targeting, audience insights, and personalization.',
				  	state: 'segments.switchPage.segmentList',
				  	link: '/segments/list',
				  	permissions: ['segments', 'segments_ro']
				  }, {
				  	name: 'Manage Events',
				  	description: 'Create and manage events to get detailed insights on any user action such as clicks, form submissions, video views and more.',
				  	state: 'events.list',
				  	link: '/events/list',
				  	permissions: ['events', 'events_ro']
				  }, {
				  	name: 'Manage Funnels',
				  	description: 'Create funnels to track sequence of events and optimize customer funnel for higher conversions.',
				  	state: 'funnels.funnelList',
				  	link: '/funnels/list',
				  	permissions: ['funnels', 'funnels_ro']
				  }
			  	]
			  }, {
			  	name: 'Insights',
			  	nodes: [
				  {
				  	name: 'Segment Insights',
				  	description: 'View segment specific statistics and insights.',
				  	state: 'audience.switchPage.discovery',
				  	link: '/audience/discovery',
				  	permissions: ['segments', 'segments_ro']
				  }, {
				  	name: 'Segment Overlaps',
				  	description: 'View population overlap for all your segments.',
				  	state: 'audience.overlaps',
				  	link: '/audience/overlaps',
				  	permissions: ['segment_overlaps_report']
				  }, {
				  	name: 'Attributes',
				  	description: 'View trends for attribute values.',
				  	state: 'audience.attributesReport',
				  	link: '/audience/attributes-report',
				  	permissions: ['attributes_report']
				  }, {
				  	name: 'Data Providers',
				  	description: 'Compare data provider population with Krux’s  people-data universe.',
				  	state: 'audience.dataprovidersReport',
				  	link: '/audience/dataproviders-report',
				  	permissions: ['dataproviders_report']
				  }, {
				  	name: 'Reach Opportunities',
				  	description: 'Reach and convert people who are similar to your most valuable customers.',
				  	state: 'opportunities.base2ndParty.chart',
				  	link: '/opportunities/secondPartyChart/',
				  	permissions: ['opportunities', 'opportunities_ro']
				  }, {
				  	name: 'Audience Profile',
				  	description: 'Audience Profile Report Organization Level.',
				  	state: 'audience.profileReportOrgLevel',
				  	link: '/audience/audience_profile/',
				  	permissions: []
				  }
			  	]
			  }, {
			  	name: 'Analytics',
			  	nodes: [
				  {
				  	name: 'Audience',
				  	description: ' ',
				  	state: 'audience.audienceAnalytics',
				  	link: '/audience/audience-analytics',
				  	permissions: ['audience_analytics']
				  }, {
				  	name: 'Engagement',
				  	description: ' ',
				  	state: 'audience.engagement',
				  	link: '/audience/engagement',
				  	permissions: ['user_engagement_distribution']
				  }, {
				  	name: 'Loyalty',
				  	description: ' ',
				  	state: 'audience.loyalty',
				  	link: '/audience/loyalty',
				  	permissions: ['loyalty_report']
				  }, {
				  	name: 'Social Sharing',
				  	description: '',
				  	state: 'audience.socialSharing',
				  	link: '/audience/socialSharing',
				  	permissions: []
				  }
			  	]
			  }
		  	]
		  }, {
		  	name: 'MARKETING',
		  	nodes: [
			  {
			  	name: 'Performance',
			  	nodes: [
				  {
				  	name: 'Segments',
				  	description: 'View segment specific performance details.',
				  	state: 'marketing.segmentPerformance',
				  	link: '/marketing/performance/?activeTab=audienceSegments',
				  	permissions: ['marketing_performance']
				  }, {
				  	name: 'Campaigns',
				  	description: 'View campaign specific performance details.',
				  	state: 'marketing.campaignPerformance',
				  	link: '/marketing/performance/?activeTab=campaigns',
				  	permissions: ['marketing_performance']
				  }, {
				  	name: 'Sites',
				  	description: 'View site specific performance details.',
				  	state: 'marketing.campaignPerformance',
				  	link: '/marketing/performance/?activeTab=sites',
				  	permissions: ['marketing_performance']
				  }, {
				  	name: 'Reach and Overlap',
				  	description: 'View reach overlap across channels for campaigns or segments to increase precision.',
				  	state: 'marketing.reachOverlap',
				  	link: '/marketing/reach_overlap',
				  	permissions: ['reach_and_overlap']
				  }
			  	]
			  }, {
			  	name: 'Real Time Bidding',
			  	nodes: [
				  {
				  	name: 'Manage Campaigns',
				  	description: '',
				  	state: 'rtb.campaign.list',
				  	link: '/rtb/campaign',
				  	permissions: ['ic_extend', 'ic_extend_ro']
				  }, {
				  	name: 'Manage Creatives',
				  	description: '',
				  	state: 'rtb.creative.list',
				  	link: '/rtb/creative',
				  	permissions: ['ic_extend', 'ic_extend_ro']
				  }
			  	]
			  }, {
			  	name: 'Customer Journey',
			  	nodes: [
				  {
				  	name: 'Manage Campaign Attribution',
				  	description: '',
				  	state: 'marketing.campaignAttribution',
				  	link: '/marketing/campaign_attribution',
				  	permissions: ['manage_goals']
				  }, {
				  	name: 'Attribution Report',
				  	description: '',
				  	state: 'marketing.attribution',
				  	link: '/marketing/attribution',
				  	permissions: ['manage_goals', 'attribution_report']
				  }
			  	]
			  }, {
			  	name: 'Global Frequency',
			  	nodes: [
				  {
				  	name: 'Manage Frequency',
				  	description: 'Control and fine-tune frequency across all execution systems.',
				  	state: 'marketing.globalFrequencyManagement',
				  	link: '/marketing/global_frequency_management',
				  	permissions: ['global_frequency_management']
				  }, {
				  	name: 'Frequency Distribution',
				  	description: 'Monitor under-performing and wasteful campaign frequency.',
				  	state: 'marketing.frequencyDistributionReport',
				  	link: '/frequency-reports',
				  	permissions: ['frequency_reports']
				  }
			  	]
			  }
		  	]
		  }, {
		  	name: 'LINK',
		  	nodes: [
			  {
			  	name: 'Buyer',
			  	nodes: [
				  {
				  	name: 'Search',
				  	description: '',
				  	state: 'buyersConsole.search',
				  	link: '/buyersConsole/search',
				  	permissions: ['search_audience_segments']
				  }, {
				  	name: 'Manage Orders',
				  	description: '',
				  	state: 'order.manageOrders',
				  	link: '/order/manageOrders',
				  	permissions: ['ic_brokerage_ui', 'ic_brokerage_ui_ro']
				  }, {
				  	name: 'Cart',
				  	description: '',
				  	state: 'order.cart',
				  	link: '/order/cart',
				  	permissions: ['purchase_segments_manage_orders', 'purchase_segments_manage_orders_ro', 'search_audience_segments']
				  }, {
				  	name: 'Billing',
				  	description: '',
				  	state: 'buyersConsole.buyerBilling',
				  	link: '/buyersConsole/buyer_billing',
				  	permissions: ['purchase_segments_manage_orders']
				  }
			  	]
			  }, {
			  	name: 'Seller',
			  	nodes: [
				  {
				  	name: 'Manage LinK',
				  	description: '',
				  	state: 'interchange.brokerage.list',
				  	link: '/interchange/link',
				  	permissions: ['ic_brokerage_ui', 'ic_brokerage_ui_ro']
				  }, {
				  	name: 'Manage Orders',
				  	description: '',
				  	state: 'interchange.brokerage.orders.list',
				  	link: '/interchange/link/orders',
				  	permissions: ['ic_brokerage_ui', 'ic_brokerage_ui_ro']
				  }, {
				  	name: 'Billing',
				  	description: '',
				  	state: 'buyersConsole.sellerBilling',
				  	link: '/buyersConsole/seller_billing',
				  	permissions: ['ic_brokerage_ui', 'ic_brokerage_ui_ro']
				  }
			  	]
			  }
		  	]
		  }, {
		  	name: 'INTERCHANGE',
		  	nodes: [
			  {
			  	name: 'Performance',
			  	nodes: [
				  {
				  	name: 'Yield Analytics',
				  	description: '',
				  	state: 'yieldAnalytics.aggregate',
				  	link: '/interchange/yield_analytics',
				  	permissions: ['yield_analytics', 'yield_analytics_ro']
				  }
			  	]
			  }, {
			  	name: 'Partner Management',
			  	nodes: [
				  {
				  	name: 'Manage Accounts',
				  	description: '',
				  	state: 'partnerEnablementFramework.list',
				  	link: '/partner_management',
				  	permissions: ['manage_partners']
				  }
			  	]
			  }
		  	]
		  }, {
		  	name: 'SUPERTAG',
		  	nodes: [
			  {
			  	name: 'Actions',
			  	nodes: [
				  {
				  	name: 'List Tags',
				  	description: '',
				  	state: 'supertag.listTags',
				  	link: '/supertag/list_tags',
				  	permissions: ['supertag_full', 'supertag_readonly']
				  }, {
				  	name: 'Pending Approval',
				  	description: '',
				  	state: 'supertag.pendingApproval.list',
				  	link: '/supertag/pendingApproval',
				  	permissions: ['supertag_approve']
				  }, {
				  	name: 'Library Tags',
				  	description: '',
				  	state: 'supertag.libraryTags',
				  	link: '/supertag/library_tags',
				  	permissions: []
				  }, {
				  	name: 'Rule manager',
				  	description: 'Manage supertag named rules',
				  	state: 'supertag.tagRules',
				  	link: '/supertag/tag_rules',
				  	permissions: ['supertag_full']
				  }
			  	]
			  }, {
			  	name: 'Reports',
			  	nodes: [
				  {
				  	name: 'Tag Summary',
				  	description: '',
				  	state: 'supertag.reports.list',
				  	link: '/supertag/reports',
				  	permissions: ['supertag_full', 'supertag_readonly']
				  }, {
				  	name: 'Tag Inspector',
				  	description: '',
				  	state: 'supertag.tagInspectorCode',
				  	link: '/supertag/tag_inspector?auto_inspect',
				  	permissions: ['supertag_full', 'supertag_readonly']
				  }
			  	]
			  }
		  	]
		  }, {
		  	name: 'DATA SENTRY',
		  	nodes: [
			  {
			  	name: 'Dashboard',
			  	description: '',
			  	state: 'dataSentry.globalDashboard',
			  	link: '/dataSentry/globalDashboard',
			  	permissions: ['data_sentry']
			  }
		  	]
		  }, {
		  	name: 'TOOLS',
		  	nodes: [
			  {
			  	name: 'Settings',
			  	nodes: [
				  {
				  	name: 'Manage Users',
				  	description: '',
				  	state: 'account.usersList',
				  	link: '/account/users',
				  	permissions: ['manage_users']
				  }, {
				  	name: 'Manage Sites',
				  	description: '',
				  	state: 'account.sites',
				  	link: '/account/sites',
				  	permissions: ['manage_sites']
				  }, {
				  	name: 'Manage Settings',
				  	description: '',
				  	state: 'account.settings',
				  	link: '/account/settings',
				  	permissions: ['none']
				  }
			  	]
			  }, {
			  	name: 'Internal',
			  	nodes: [
				  {
				  	name: 'Create Organization',
				  	description: '',
				  	state: 'organization.create',
				  	link: '/organization/create',
				  	permissions: []
				  }, {
				  	name: 'Organization Settings',
				  	description: '',
				  	state: 'organization.edit',
				  	link: '/organization/edit/',
				  	permissions: []
				  }, {
				  	name: 'Internal Dashboard',
				  	description: '',
				  	state: 'internal.dashboard',
				  	link: '/internal/dashboard',
				  	permissions: []
				  }, {
				  	name: 'Traffic Trends',
				  	description: '',
				  	state: 'internal.traffic_trends',
				  	link: '/internal/traffic_trends',
				  	permissions: []
				  }, {
				  	name: 'Pipeline Dashboard',
				  	description: '',
				  	state: 'dataPipeline',
				  	link: '/pipeline',
				  	permissions: []
				  }
			  	]
			  }, {
			  	name: 'Platform Commands',
			  	nodes: [
				  {
				  	name: 'Generate Krux Standard Segments',
				  	description: '',
				  	state: 'platform.generate',
				  	link: '/platform/generate',
				  	permissions: []
				  }
			  	]
			  }
		  	]
		  }
		]
	};
}]);
angular.module('gridTaskApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/src/app/templates/directive-templates/cards.html',
    "<div class=\"cards-group\" ng-style=\"groupStyle\">\r" +
    "\n" +
    "\t<div class=\"my-card\" id=\"{{contentOptions.debugCard.id}}\" ng-if=\"contentOptions.enableDebugging\" ng-style=\"contentOptions.debugCard.style\">\r" +
    "\n" +
    "\t\t<div class=\"front\">\r" +
    "\n" +
    "\t\t\t<div class=\"my-card__header\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"my-card__header__icon card-font icon-info\"></span>\r" +
    "\n" +
    "\t\t\t\t<span class=\"my-card__header__text\">{{contentOptions.debugCard.text | translate}}</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"my-card__body\">\r" +
    "\n" +
    "\t\t\t\t<span>{{contentOptions.debugCard.body | translate}}</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"back\">\r" +
    "\n" +
    "\t\t\t<div class=\"my-card__header\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"my-card__header__icon card-font icon-circle-left\"></span>\r" +
    "\n" +
    "\t\t\t\t<span class=\"my-card__header__text\">{{contentOptions.debugCard.text | translate}}</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"my-card__body\">\r" +
    "\n" +
    "\t\t\t\t<div ng-if=\"contentOptions.debugCard.templateUrl\" ng-include=\"contentOptions.debugCard.templateUrl\">\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t<div ng-if=\"!contentOptions.debugCard.templateUrl\" gr-template=\"contentOptions.debugCard.template\" gr-name=\"debugTemplate\"></div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"my-card\" ng-repeat=\"(id, card) in cards\" id=\"{{id}}\" ng-style=\"card.style\">\r" +
    "\n" +
    "\t\t<div class=\"front\">\r" +
    "\n" +
    "\t\t\t<div class=\"my-card__header\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"my-card__header__icon card-font icon-info\"></span>\r" +
    "\n" +
    "\t\t\t\t<span class=\"my-card__header__text\">{{card.label | translate}}</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div ng-if=\"card.counter\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"my-card__body\" ng-init=\"card.count = card.counter.calculate(startDate, endDate) || card.count\">\r" +
    "\n" +
    "\t\t\t\t\t<span number-format=\"card.count\"></span>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"back\">\r" +
    "\n" +
    "\t\t\t<div class=\"my-card__header\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"my-card__header__icon card-font icon-circle-left\"></span>\r" +
    "\n" +
    "\t\t\t\t<span class=\"my-card__header__text\">{{card.label | translate}}</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"my-card__body\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"my-card__body__graphs\" graphs=\"card.graphs\"></div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/directive-templates/chart-segment.html',
    "<div class=\"chart-segment\">\r" +
    "\n" +
    "\t<div class=\"chart-segment__list\">\r" +
    "\n" +
    "\t\t<div class=\"chart-segment__list__header\">\r" +
    "\n" +
    "\t\t\t<span class=\"chart-segment__list__header__text\">{{panel.header.text | translate}}</span>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"chart-segment__list__body\">\r" +
    "\n" +
    "\t\t\t<div ng-repeat=\"user in selectedUsers\" class=\"chart-segment__list__body__user\" ng-class=\"{'even' : $even, 'odd': $odd}\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"chart-segment__list__body__user__icon icon-close\" ng-click=\"deleteUser(user, $index)\"></span>\r" +
    "\n" +
    "\t\t\t\t<span class=\"chart-segment__list__body__user__text\">{{::'usersInteract' | translate}}{{user.touchpoints}}</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"chart-segment__btn\">\r" +
    "\n" +
    "\t\t<button class=\"kx-btn\">{{::panel.btn.text | translate}}</button>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/directive-templates/checkbox-select.html',
    "<div class=\"checkbox-select\" any-other-click=\"isShow=false\">\r" +
    "\n" +
    "\t<div class=\"checkbox-select__check\">\r" +
    "\n" +
    "\t\t<label class=\"checkbox-select__input-control\">\r" +
    "\n" +
    "\t\t\t<input type=\"checkbox\" ng-model=\"options.selected.check\" ng-change=\"checked(options.selected.check)\" />\r" +
    "\n" +
    "\t\t\t<span class=\"checkbox-select__input-control__span\" ng-class=\"{'marked':options.selected.isMarked || options.selected.isNotMarked}\"></span>\r" +
    "\n" +
    "\t\t</label>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<button type=\"button\" class=\"checkbox-select__btn\" ng-class=\"{'opened' : isShow}\" ng-click=\"toggle()\">\r" +
    "\n" +
    "\t\t<span class=\"checkbox-select__expand\" ng-class=\"{'icon-menu-down': !isShow, 'icon-menu-up': isShow}\"></span>\r" +
    "\n" +
    "\t</button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<ul class=\"checkbox-select__list\" ng-show=\"isShow\">\r" +
    "\n" +
    "\t\t<li ng-repeat=\"action in options.actions\" ng-click=\"select(action)\"><a>{{action.label | translate}}</a></li>\r" +
    "\n" +
    "\t</ul>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/content-options-cards.html',
    "<div class=\"options\">\r" +
    "\n" +
    "\t<div class=\"options__block\">\r" +
    "\n" +
    "\t\t<div custom-datepicker=\"options.datepickerOptions\"></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"options__filter\">\r" +
    "\n" +
    "\t\t<split-button class=\"options__show\" actions=\"options.searchOptions\" selected=\"options.show\" search=\"options.searchValue\"></split-button>\r" +
    "\n" +
    "\t\t<search class=\"options__search\" search-value=\"options.searchValue\"></search>\r" +
    "\n" +
    "\t\t<div class=\"options__filt\" filter=\"options.filterOptions\" on-filtrate=\"options.filtrate\"></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/content-options-d3.html',
    "<div class=\"options\">\r" +
    "\n" +
    "\t<div class=\"options__block\">\r" +
    "\n" +
    "\t\t<div class=\"input-prepend\">\r" +
    "\n" +
    "\t\t\t<div kx-date-range=\"kx-date-range\" time-range=\"past\" name=\"dateRange\" ng-model=\"filters.dateRange\" ng-disabled=\"loading\" ng-change=\"filters.onDateRangeChange()\" class=\"date-range-picker\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"options__select\">\r" +
    "\n" +
    "\t\t<select class=\"options__event\" ui-select2=\"options.eventType.selectOpt\" ng-model=\"options.eventOpt.options.selected\" data-placeholder=\"Choose Event\" ng-required=\"true\">\r" +
    "\n" +
    "\t\t\t<option value=\"\"></option>\r" +
    "\n" +
    "\t\t\t<option value=\"{{action}}\" ng-repeat=\"action in options.eventType.options.actions\">{{action.label|translate}}</option>\r" +
    "\n" +
    "\t\t</select>\r" +
    "\n" +
    "\t\t<select class=\"options__segments kx-multiselect\" kx-multiselect=\"options.segments.selectOpt\" ng-change=\"options.segments.options.onChange()\" ng-model=\"options.segments.options.selected\" multiple=\"true\" data-placeholder=\"{{::'Choose Segments' | translate}}\">\r" +
    "\n" +
    "\t\t\t<option value=\"{{action}}\" ng-repeat=\"action in options.segments.options.actions\">{{action.label|translate}}</option>\r" +
    "\n" +
    "\t\t</select>\r" +
    "\n" +
    "\t\t<select class=\"options__campaign kx-multiselect\" kx-multiselect=\"options.campaign.selectOpt\" ng-change=\"options.campaign.options.onChange()\" ng-model=\"options.campaign.options.selected\" data-placeholder=\"{{::'Choose Campaigns' | translate}}\" multiple=\"true\">\r" +
    "\n" +
    "\t\t\t<option value=\"{{action}}\" ng-repeat=\"action in options.campaign.options.actions\">{{action.label|translate}}</option>\r" +
    "\n" +
    "\t\t</select>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<button class=\"kx-btn\" ng-click=\"options.refresh()\">Update</button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/content-options.html',
    "<div class=\"options\">\r" +
    "\n" +
    "\t<div class=\"options__block\">\r" +
    "\n" +
    "\t\t<div checkbox-select=\"options.checks.options\" class=\"options__check\"></div>\r" +
    "\n" +
    "\t\t<button class=\"options__refresh\" ng-click=\"options.refresh()\">Refresh</button>\r" +
    "\n" +
    "\t\t<div dropdown=\"options.mores.options\" class=\"options__more\"></div>\r" +
    "\n" +
    "\t\t<upload class=\"options__upload\" ng-show=\"options.upload\" upload-callback=\"options.upload\"></upload>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"options__filter\">\r" +
    "\n" +
    "\t\t<search class=\"options__search\" search-value=\"options.searchValue\"></search>\r" +
    "\n" +
    "\t\t<split-button class=\"options__show\" actions=\"options.searchOptions\" selected=\"options.show\" search=\"options.searchValue\"></split-button>\r" +
    "\n" +
    "\t\t<div class=\"options__filt\" filter=\"options.filterOptions\" on-filtrate=\"options.filtrate\"></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/core-diagram.html',
    "<p id=\"chart\" max-heighter>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/custom-datepicker.html',
    "<button class=\"date-btn\" ng-click=\"close()\">\r" +
    "\n" +
    "\t<span class=\"date-btn__icon glyph-calendar\"></span>\r" +
    "\n" +
    "\t<span class=\"date-btn__text\">{{opt.startDate | date}} - {{opt.endDate | date}}</span>\r" +
    "\n" +
    "\t<button class=\"date-btn__toggle\" ng-click=\"toggle()\" ng-class=\"{'opened': isShow}\">\r" +
    "\n" +
    "\t\t<span class=\"expand\" ng-class=\"{ 'icon-menu-up': isShow, 'icon-menu-down': !isShow }\">\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t</button>\r" +
    "\n" +
    "\t<div class=\"date-btn__datepicker\" ng-if=\"isShow\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</button>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/custom-grid.html',
    "<div class=\"custom-grid\" ng-grid=\"options\">\r" +
    "\n" +
    "\t<div grid-menu class=\"custom-grid__menu\" options=\"options.menu\" columns=\"columns\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/directive-templates/custom-ui-grid.html',
    "<div ui-grid=\"options\" class=\"custom-ui-grid\" ui-grid-selection ui-grid-expandable ui-grid-custom-menu>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/directive-templates/debug.html',
    "<div class=\"debug\">\r" +
    "\n" +
    "\t<div class=\"debug__back\">\r" +
    "\n" +
    "\t\t<button class=\"debug__back__btn\" onclick=\"location.href = '/'\">{{::'back' | translate}}</button>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"debug__uploader\">\r" +
    "\n" +
    "\t\t<upload class=\"debug__uploader__btn\" upload-callback=\"contentOptions.uploadCards\" label=\"'Upload Cards'\"></upload>\r" +
    "\n" +
    "\t\t<upload class=\"debug__uploader__btn\" upload-callback=\"contentOptions.uploadSankey\" label=\"'Upload Sankey'\"></upload>\r" +
    "\n" +
    "\t\t<upload class=\"debug__uploader__btn\" upload-callback=\"contentOptions.uploadHistogram\" label=\"'Upload Histogram'\"></upload>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/dropdown.html',
    "<div class=\"my-dropdown\" any-other-click=\"isShow=false\">\r" +
    "\n" +
    "\t<button type=\"button\" class=\"my-dropdown__btn\" ng-show=\"!options.isMenu\" ng-click=\"isShow = !isShow\" ng-class=\"{'opened' : isShow}\">\r" +
    "\n" +
    "\t\t<span class=\"my-dropdown__text\" ng-show=\"!options.isCheckbox\">{{options.label | translate}}{{options.selected.label | translate}}</span>\r" +
    "\n" +
    "\t\t<span class=\"my-dropdown__expand\" ng-class=\"{'icon-menu-up': isShow, 'icon-menu-down' : !isShow}\"></span>\r" +
    "\n" +
    "\t</button>\r" +
    "\n" +
    "\t<button type=\"button\" class=\"my-dropdown__btn\" ng-show=\"options.isMenu\" ng-click=\"isShow = !isShow\" ng-class=\"{'opened' : isShow}\">\r" +
    "\n" +
    "\t\t<span class=\"my-dropdown__text\">{{options.label | translate}}</span>\r" +
    "\n" +
    "\t\t<span class=\"my-dropdown__expand\" ng-class=\"{'icon-menu-up': isShow, 'icon-menu-down' : !isShow}\"></span>\r" +
    "\n" +
    "\t</button>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<ul class=\"my-dropdown__list\" ng-show=\"isShow\">\r" +
    "\n" +
    "\t\t<li ng-repeat=\"action in options.values\">\r" +
    "\n" +
    "\t\t\t<div ng-if=\"options.isCheckbox\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"my-dropdown__list__check\">\r" +
    "\n" +
    "\t\t\t\t\t<label class=\"my-dropdown__list__input-control\">\r" +
    "\n" +
    "\t\t\t\t\t\t<input type=\"checkbox\" ng-model=\"action.isVisible\" ng-change=\"options.onCheck(action, $index)\" id=\"{{action.label}}\">\r" +
    "\n" +
    "\t\t\t\t\t\t<span class=\"my-dropdown__list__input-control__span\"></span>\r" +
    "\n" +
    "\t\t\t\t\t</label>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t<label class=\"my-dropdown__list__label\" for=\"{{action.label | translate}}\">{{action.label | translate}}</label>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<a ng-click=\"select(action)\" ng-if=\"!options.isCheckbox\">{{action.label | translate}}</a>\r" +
    "\n" +
    "\t\t</li>\r" +
    "\n" +
    "\t\t<button ng-if=\"options.withSave\" ng-click=\"options.onSave()\" class=\"my-dropdown__save\">{{::'save' | translate}}</button>\r" +
    "\n" +
    "\t</ul>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/edit-entity.html',
    "<h1>{{::'editEntity' | translate}}</h1>\r" +
    "\n" +
    "<div ng-repeat=\"(key, value) in myEntity\" class=\"dialog__entity\">\r" +
    "\n" +
    "\t<span class=\"dialog__key\">{{key}}</span><input class=\"dialog__value\" ng-model=\"myEntity[key]\" />\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/filter-list.html',
    "<div class=\"filter-list\">\r" +
    "\n" +
    "\t<div class=\"filter-list__header\">\r" +
    "\n" +
    "\t\t{{::'filterList' | translate}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"filter-list__options\">\r" +
    "\n" +
    "\t\t<div class=\"filter-list__options__value\" ng-repeat=\"opt in filterOptions\">\r" +
    "\n" +
    "\t\t\t<div class=\"filter-list__options__value__header\">\r" +
    "\n" +
    "\t\t\t\t{{opt.label | translate}}\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"filter-list__options__value__input\">\r" +
    "\n" +
    "\t\t\t\t<input type=\"text\" ng-model=\"opt.filter\" />\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div>\r" +
    "\n" +
    "\t\t<button class=\"filter-list__button\" ng-click=\"showRecords()\">{{::'showRecords' | translate}}</button>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/directive-templates/filter.html',
    "<div class=\"filter\" any-other-click=\"listState=false\" ng-class=\"{'filter-selected' : listState}\">\r" +
    "\n" +
    "\t<button class=\"filter__btn\" ng-click=\"filterClick()\">\r" +
    "\n" +
    "\t\t<span class=\"filter__icon icon-filter\"></span>\r" +
    "\n" +
    "\t\t<span class=\"filter__name\">{{::'filter'|translate}}</span>\r" +
    "\n" +
    "\t\t<span class=\"expand\" ng-class=\"{'icon-menu-up': listState, 'icon-menu-down' : !listState}\"></span>\r" +
    "\n" +
    "\t</button>\r" +
    "\n" +
    "\t<div ng-show=\"listState\">\r" +
    "\n" +
    "\t\t<div class=\"filter__list\" filter-list resize-on=\"listState\" parent=\".filter\"></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/gr-template.html',
    "<div ng-include=\"templateUrl\">\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/directive-templates/graphs.html',
    "<div ng-repeat=\"graph in graphs\" class=\"graphs\" ng-style=\"graph.style\">\r" +
    "\n" +
    "\t<div class=\"graph\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/directive-templates/grid-menu.html',
    "<div class=\"grid-menu\" ng-show=\"gridMenuCtrl.isShow\">\r" +
    "\n" +
    "\t<div class=\"grid-menu__options\" dropdown=\"gridMenuCtrl.menu.opt\"></div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/directive-templates/histogram.html',
    "<div class=\"histogram\">\r" +
    "\n" +
    "\t<svg class=\"chart\">\r" +
    "\n" +
    "\t</svg>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div chart-segment selected-users=\"selectedUsers\"></div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/history.html',
    "<h1>{{::'history' | translate}}</h1>\r" +
    "\n" +
    "<div class=\"message\" ng-if=\"value.length == 0\">{{::'historyEmpty' | translate}}.</div>\r" +
    "\n" +
    "<div class=\"history__content\" ng-repeat=\"hist in value\">\r" +
    "\n" +
    "\t<div class=\"dialog__oldVal\">\r" +
    "\n" +
    "\t\t{{::'oldValue' | translate}}: <div ng-repeat=\"(key, value) in hist.oldObj\" class=\"dialog__entity\">\r" +
    "\n" +
    "\t<span class=\"dialog__key\">{{key | translate}}</span>:<span class=\"dialog__value\">{{value | translate}}</span>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"dialog__newVal\">\r" +
    "\n" +
    "\t\t{{::'newValue' | translate}}: <div ng-repeat=\"(key, value) in hist.newObj\" class=\"dialog__entity\">\r" +
    "\n" +
    "\t<span class=\"dialog__key\">{{key | translate}}</span>:<span class=\"dialog__value\">{{value | translate}}</span>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"dialog__dateChange\">\r" +
    "\n" +
    "\t\t{{::'dateChange' | translate}}: <span>{{hist.dateChange | date}}</span>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<hr />\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/kx-nav-bar.html',
    "<nav class=\"kx-nav row-fluid\">\r" +
    "\n" +
    "\t<div class=\"span12\">\r" +
    "\n" +
    "\t\t<div class=\"row-fluid\">\r" +
    "\n" +
    "\t\t\t<div class=\"kx-menu span8\" ng-controller=\"NavigationCtrl\" kx-menu>\r" +
    "\n" +
    "\t\t\t\t<a class=\"brand kx-navbar-icon\"><img class=\"main-logo\"></a>\r" +
    "\n" +
    "\t\t\t\t<ul>\r" +
    "\n" +
    "\t\t\t\t\t<li ng-repeat=\"node in navigationTree\">\r" +
    "\n" +
    "\t\t\t\t\t\t<a>{{node.name}}</a>\r" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"kx-submenu\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t<div class=\"kx-submenu-inner\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t<div ng-repeat=\"subNode in node.nodes\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t<h4 ng-if=\"subNode.nodes\">{{subNode.name | translate}}</h4>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t<ul ng-if=\"subNode.nodes\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<li ng-repeat=\"path in subNode.nodes\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<a>{{path.name | translate}}</a>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t<ul ng-if=\"!subNode.nodes\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t<li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<a>{{subNode.name | translate}}</a>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"menu-util span4\">\r" +
    "\n" +
    "\t\t\t\t<ul class=\"row-fluid\">\r" +
    "\n" +
    "\t\t\t\t\t<li class=\"span7\">\r" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"org-switcher-off\" ng-hide=\"session.other_organizations.length\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t<span class=\"ng-binding\">Krux Demo Client</span>\r" +
    "\n" +
    "\t\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t\t<li class=\"span5 account-util dropdown\">\r" +
    "\n" +
    "\t\t\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t<i class=\"icon-user\"></i> krux-user\r" +
    "\n" +
    "\t\t\t\t\t\t\t<b class=\"caret\"></b>\r" +
    "\n" +
    "\t\t\t\t\t\t</a>\r" +
    "\n" +
    "\t\t\t\t\t\t<ul class=\"account-util-menu\" role=\"menu\" aria-labelledby=\"dLabel\">\r" +
    "\n" +
    "\t\t\t\t\t\t\t<li><a href=\"\">{{\"Account\" | translate}}</a></li>\r" +
    "\n" +
    "\t\t\t\t\t\t\t<li><a href=\"\">{{\"Logout\" | translate}}</a></li>\r" +
    "\n" +
    "\t\t\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t\t\t</li>\r" +
    "\n" +
    "\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</nav>"
  );


  $templateCache.put('/src/app/templates/directive-templates/loading.html',
    "<div class=\"loading\" ng-style=\"ctrl.element\">\r" +
    "\n" +
    "\t<div class=\"loading-disabled\" ng-style=\"ctrl.disabled\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"spinner\">\r" +
    "\n" +
    "\t\t<div class=\"spinner-container container1\">\r" +
    "\n" +
    "\t\t\t<div class=\"circle1\"></div>\r" +
    "\n" +
    "\t\t\t<div class=\"circle2\"></div>\r" +
    "\n" +
    "\t\t\t<div class=\"circle3\"></div>\r" +
    "\n" +
    "\t\t\t<div class=\"circle4\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"spinner-container container2\">\r" +
    "\n" +
    "\t\t\t<div class=\"circle1\"></div>\r" +
    "\n" +
    "\t\t\t<div class=\"circle2\"></div>\r" +
    "\n" +
    "\t\t\t<div class=\"circle3\"></div>\r" +
    "\n" +
    "\t\t\t<div class=\"circle4\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"spinner-container container3\">\r" +
    "\n" +
    "\t\t\t<div class=\"circle1\"></div>\r" +
    "\n" +
    "\t\t\t<div class=\"circle2\"></div>\r" +
    "\n" +
    "\t\t\t<div class=\"circle3\"></div>\r" +
    "\n" +
    "\t\t\t<div class=\"circle4\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/modal.html',
    "<div class=\"modal\" ng-class=\"modal\" ng-if=\"isModal\">\r" +
    "\n" +
    "\t<div class=\"fade\" ng-style=\"fade\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"dialog\">\r" +
    "\n" +
    "\t\t<div ng-include=\"bodyTemplateUrl\" ng-if=\"!bodyTemplate\" onload=\"onInclude()\">\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div ng-if=\"bodyTemplate\" gr-template=\"bodyTemplate\" gr-name=\"editEntityTemplate\">\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"dialog-btn\">\r" +
    "\n" +
    "\t\t\t<button class=\"save-btn\" ng-if=\"enableSave\" ng-click=\"save()\">{{::'save' | translate}}</button>\r" +
    "\n" +
    "\t\t\t<button class=\"close-btn\" ng-click=\"close()\">{{::'close' | translate}}</button>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/mouse-over.html',
    "<div class=\"mouse-over\" ng-style=\"style\">\r" +
    "\n" +
    "\t<div class=\"mouse-over-simple\" ng-if=\"type.isSimple\">\r" +
    "\n" +
    "\t\t<div class=\"mouse-over-simple__header\">\r" +
    "\n" +
    "\t\t\t<span class=\"mouse-over-simple__header__text\">{{value.header | translate}}</span>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"mouse-over-simple__body\">\r" +
    "\n" +
    "\t\t\t<div ng-repeat=\"val in value.data\" class=\"mouse-over-simple__body__value\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"mouse-over-simple__body__value__text\">{{::'Campaing ID' | translate}}: {{val.campaignId}}</span>\r" +
    "\n" +
    "\t\t\t\t<span class=\"mouse-over-simple__body__value__text\">{{::'Ad ID' | translate}}: {{val.adId}}</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"mouse-over-medium\" ng-if=\"type.isMedium\">\r" +
    "\n" +
    "\t\t<div class=\"mouse-over-medium__header\">\r" +
    "\n" +
    "\t\t\t<span class=\"mouse-over-simple__medium__text\">{{value.header | translate}}</span>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"mouse-over-medium__body\">\r" +
    "\n" +
    "\t\t\t<div class=\"mouse-over-medium__body__blockSegm\" ng-style=\"{float: 'left'}\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"mouse-over-medium__body__header\">\r" +
    "\n" +
    "\t\t\t\t\t{{:: 'topSegments' | translate}}\r" +
    "\n" +
    "\t\t\t\t</span>\r" +
    "\n" +
    "\t\t\t\t<div ng-repeat=\"prop in value.data.topSegments\">\r" +
    "\n" +
    "\t\t\t\t\t<span class=\"mouse-over-medium__body__value__text\">{{prop | translate}}</span>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"mouse-over-medium__body__blockCampaing\" ng-style=\"{float: 'right'}\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"mouse-over-medium__body__header\">\r" +
    "\n" +
    "\t\t\t\t\t{{:: 'topCampaigns' | translate}}\r" +
    "\n" +
    "\t\t\t\t</span>\r" +
    "\n" +
    "\t\t\t\t<div ng-repeat=\"prop in value.data.topCampaings\">\r" +
    "\n" +
    "\t\t\t\t\t<span class=\"mouse-over-medium__body__value__text\">{{prop | translate}}</span>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"mouse-over-custom\" ng-if=\"type.isCustom\">\r" +
    "\n" +
    "\t\t<div ng-if=\"type.templateUrl\" ng-include=\"type.templateUrl\">\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div ng-if=\"!type.templateUrl\" gr-template=\"type.template\" gr-name=\"mouseOverTemplate\"></div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/overlay.html',
    "<div class=\"custom-overlay\" ng-style=\"style\">\r" +
    "\n" +
    "\t<div class=\"custom-overlay__toggle\">\r" +
    "\n" +
    "\t\t<span ng-click=\"state = !state\" ng-show=\"!state\" class=\"glyphicon glyphicon-chevron-left\"></span>\r" +
    "\n" +
    "\t\t<span ng-click=\"state = !state\" ng-show=\"state\" class=\"glyphicon glyphicon-chevron-right\"></span>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<ng-transclude class=\"custom-overlay__transclude\" ng-style=\"transcludeStyle\"></ng-transclude>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/page-content-cards.html',
    "<div class=\"page-content\">\r" +
    "\n" +
    "\t<div class=\"page-content__header\">\r" +
    "\n" +
    "\t\t<div class=\"page-content__options\">\r" +
    "\n" +
    "\t\t\t<content-options-cards options=\"contentOptions\"></content-options-cards>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"page-content__actions\">\r" +
    "\n" +
    "\t\t\t<div class=\"page-content__actions__export\" dropdown=\"exports.options\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"page-content__body\">\r" +
    "\n" +
    "\t\t<div class=\"page-content__cards\" content-options=\"contentOptions\" cards=\"cardsOptions\">\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"page-content__list\">\r" +
    "\n" +
    "\t\t\t<div custom-ui-grid grid-data=\"data\" grid-options=\"uiGridOptions\" content-options=\"contentOptions\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"page-content__footer\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/page-content-d3.html',
    "<div class=\"page-content\">\r" +
    "\n" +
    "\t<div class=\"page-content__header\">\r" +
    "\n" +
    "\t\t<div class=\"page-content__options\">\r" +
    "\n" +
    "\t\t\t<div content-options-d3 options=\"contentOptions\" filters=\"filters\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"page-content__cards\" cards=\"cardsOptions\" content-options=\"contentOptions\">\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"page-content__body\">\r" +
    "\n" +
    "\t\t<div class=\"page-content__list\">\r" +
    "\n" +
    "\t\t\t<div class=\"core-diagram\" core-diagram=\"{}\" sankey-data=\"sankeyData\"></div>\r" +
    "\n" +
    "\t\t\t<div overlay>\r" +
    "\n" +
    "\t\t\t\t<div class=\"histogram-content\" histogram histogram-data=\"histogramData\"></div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/page-content.html',
    "<div class=\"page-content\">\r" +
    "\n" +
    "\t<div class=\"page-content__header\">\r" +
    "\n" +
    "\t\t<div class=\"page-content__icon\">\r" +
    "\n" +
    "\t\t\t<span class=\"page-content__icon__text icon-text2\"></span>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"page-content__name\">\r" +
    "\n" +
    "\t\t\t{{grid.name | translate}}\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"page-content__count\">\r" +
    "\n" +
    "\t\t\t{{grid.count}} {{::'records' | translate}}\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"page-content__actions\">\r" +
    "\n" +
    "\t\t\t<div class=\"page-content__actions__export\" dropdown=\"exports.options\"></div>\r" +
    "\n" +
    "\t\t\t<div class=\"page-content__actions__view\" dropdown=\"views.options\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"page-content__body\">\r" +
    "\n" +
    "\t\t<div class=\"page-content__options\">\r" +
    "\n" +
    "\t\t\t<content-options options=\"contentOptions\"></content-options>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"page-content__list\">\r" +
    "\n" +
    "\t\t\t<div custom-grid grid-data=\"data\" export-to=\"exports.options.selected\" ng-show=\"views.options.selected.isGrid\" grid-options=\"gridOptions\"></div>\r" +
    "\n" +
    "\t\t\t<div custom-ui-grid grid-data=\"data\" ng-if=\"views.options.selected.isUiGrid\" grid-options=\"uiGridOptions\" content-options=\"contentOptions\"></div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"page-content__footer\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/search.html',
    "<div class=\"search\">\r" +
    "\n" +
    "\t<input type=\"search\" ng-model=\"searchValue\" />\r" +
    "\n" +
    "\t<span class=\"search-span icon-search\" ng-show=\"edited\">\r" +
    "\n" +
    "\t</span>\r" +
    "\n" +
    "\t<span class=\"search-clear icon-close\" ng-click=\"clear()\" ng-show=\"!edited\">\r" +
    "\n" +
    "\t</span>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/split-button.html',
    "<button class=\"split-btn\" ng-click=\"close()\">\r" +
    "\n" +
    "\t<div ng-if=\"actions.selected\">\r" +
    "\n" +
    "\t\t<div ng-if=\"!actions.isComplex\">\r" +
    "\n" +
    "\t\t\t{{actions.selected.label | translate}}\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div ng-if=\"actions.isComplex\">\r" +
    "\n" +
    "\t\t\t{{::'choose' | translate}} {{actions.selected.label | translate}}\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t<div ng-if=\"!actions.selected\" style=\"opacity: 0.5\">\r" +
    "\n" +
    "\t\t{{typehead | translate}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<button class=\"split-btn__toggle\" ng-click=\"toggle()\" ng-class=\"{'opened' : isShow}\" any-other-click=\"isShow=false\">\r" +
    "\n" +
    "\t\t<span class=\"expand\" ng-class=\"{'icon-menu-up': isShow, 'icon-menu-down' : !isShow}\">\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t</button>\r" +
    "\n" +
    "\t<ul class=\"split-btn__list\" ng-show=\"isShow\">\r" +
    "\n" +
    "\t\t<li ng-repeat=\"action in actions\" ng-click=\"select(action)\"><a>{{action.label | translate}}</a> </li>\r" +
    "\n" +
    "\t</ul>\r" +
    "\n" +
    "</button>"
  );


  $templateCache.put('/src/app/templates/directive-templates/ui-grid-menu.html',
    "<div class=\"ui-grid-menu\">\r" +
    "\n" +
    "\t<dropdown class=\"ui-grid-menu__options\" dropdown-options=\"options\"></dropdown>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/directive-templates/upload.html',
    "<label>\r" +
    "\n" +
    "\t<input type=\"file\" />\r" +
    "\n" +
    "\t<span ng-if=\"!label\">{{::'upload' | translate}}</span>\r" +
    "\n" +
    "\t<span ng-if=\"label\">{{label | translate}}</span>\r" +
    "\n" +
    "</label>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/grid-templates/cell-templates/cell-without-sort.html',
    "<div class=\"ngHeaderSortColumn {{col.headerClass}}\" ng-style=\"{'cursor': col.cursor}\" ng-class=\"{ 'ngSorted': !noSortVisible }\">\r" +
    "\n" +
    "\t<div ng-click=\"col.sort($event)\" ng-class=\"'colt' + col.index\" class=\"ngHeaderText\">\r" +
    "\n" +
    "\t\t{{col.displayName | translate}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"ngSortButtonDown\" ng-show=\"col.showSortButtonDown()\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"ngSortButtonUp\" ng-show=\"col.showSortButtonUp()\"></div><div class=\"ngSortPriority\">\r" +
    "\n" +
    "\t\t{{col.sortPriority | translate}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div ng-class=\"{ ngPinnedIcon: col.pinned, ngUnPinnedIcon: !col.pinned }\" ng-click=\"togglePin(col)\" ng-show=\"col.pinnable\">\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div ng-show=\"col.resizable\" class=\"ngHeaderGrip\" ng-click=\"col.gripClick($event)\" ng-mousedown=\"col.gripOnMouseDown($event)\">\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/grid-templates/cell-templates/cell.html',
    "<div class=\"column\" ng-style=\"{'cursor': col.cursor}\" ng-class=\"{ 'ngSorted': !noSortVisible }\" ng-class=\"{ 'ngSorted': !noSortVisible }\">\r" +
    "\n" +
    "\t<div class=\"column__sort\" ng-click=\"col.sort($event)\" ng-style=\"{'height': col.headerRowHeight}\">\r" +
    "\n" +
    "\t\t<div class=\"column__name\" ng-style=\"{'height': col.headerRowHeight}\">\r" +
    "\n" +
    "\t\t\t<span class=\"column__name__span\">{{col.displayName | translate}}</span>\r" +
    "\n" +
    "\t\t\t<div class=\"column__sort-down\" ng-show=\"col.showSortButtonDown()\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"icon-arrow-down\"></span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"column__sort-up\" ng-show=\"col.showSortButtonUp()\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"icon-arrow-up\"></span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/grid-templates/cell-templates/fields/action.html',
    "<div class=\"action\" ng-if=\"row.orig.actions.values.isShow\" ng-style=\"dropdownOpt.style\">\r" +
    "\n" +
    "\t<div class=\"dynamic-dropdown\" dynamic-dropdown orig-opt=\"row.orig.actions.values.options\" dropdown-opt=\"dropdownOpt\" col=\"col\" row=\"row\" re-init=\"row.orig.actions.values\"></div>\r" +
    "\n" +
    "\t<div class=\"action__dropdown\" dropdown=\"dropdownOpt\" ng-if=\"dropdownOpt.isVisible\"></div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/grid-templates/cell-templates/fields/date.html',
    "<div class=\"row-date\">\r" +
    "\n" +
    "\t<div class=\"row-date__value wrap\">\r" +
    "\n" +
    "\t\t{{row.getProperty(col.field) | date}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/grid-templates/cell-templates/fields/details.html',
    "<div class=\"cell-details\">\r" +
    "\n" +
    "\t<span class=\"cell-details__expand\" details row=\"row\" details-class=\"'toggle'\" ng-class=\"{'icon-menu-down' : !row.orig.actions.isToggle, 'icon-menu-up': row.orig.actions.isToggle}\"></span>\r" +
    "\n" +
    "\t<div class=\"cell-details__check\">\r" +
    "\n" +
    "\t\t<label class=\"cell-details__input\">\r" +
    "\n" +
    "\t\t\t<input type=\"checkbox\" ng-model=\"row.orig.actions.isCheck\" ng-change=\"row.orig.actions.setCheck(row.orig)\" />\r" +
    "\n" +
    "\t\t\t<span class=\"cell-details__input__check\"></span>\r" +
    "\n" +
    "\t\t</label>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/grid-templates/cell-templates/fields/name.html',
    "<div class=\"row-name wrap\">\r" +
    "\n" +
    "\t<i class=\"glyphicon glyphicon-picture\"></i>\r" +
    "\n" +
    "\t<div class=\"row-name__value\">\r" +
    "\n" +
    "\t\t<span>{{row.getProperty(col.field) | translate}}</span>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/grid-templates/cell-templates/fields/status.html',
    "<div class=\"row-status\">\r" +
    "\n" +
    "\t<div class=\"row-status__value\">\r" +
    "\n" +
    "\t\t{{row.getProperty(col.field) | translate}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/grid-templates/cell-templates/fields/trend.html',
    "<div class=\"row-trend wrap\">\r" +
    "\n" +
    "\t<div class=\"row-trend__value \">\r" +
    "\n" +
    "\t\t{{row.getProperty(col.field) | translate}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/grid-templates/cell-templates/fields/type.html',
    "<div class=\"row-type\">\r" +
    "\n" +
    "\t<div class=\"row-type__value wrap\">\r" +
    "\n" +
    "\t\t{{row.getProperty(col.field) | translate}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/grid-templates/cell-templates/fields/value.html',
    "<div class=\"row-value\">\r" +
    "\n" +
    "\t<div class=\"row-value__value\">\r" +
    "\n" +
    "\t\t{{row.getProperty(col.field) | currency}}\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/grid-templates/details-templates/details-example1.html',
    "<div class=\"details-template\">\r" +
    "\n" +
    "\tDefrault template 1\r" +
    "\n" +
    "\t<hr />\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/grid-templates/details-templates/details-example2.html',
    "<div class=\"details-template\">\r" +
    "\n" +
    "\tOther details template\r" +
    "\n" +
    "\t<hr />\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/grid-templates/details-templates/details-upload.html',
    "<div class=\"details-template\">\r" +
    "\n" +
    "\tFrom upload template\r" +
    "\n" +
    "\t<hr />\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/grid-templates/details-templates/details.html',
    "<div class=\"details-template\" ng-init=\"row.actions.tab = row.actions.tab || 2\">\r" +
    "\n" +
    "\t<ul>\r" +
    "\n" +
    "\t\t<li ng-class=\"{active:row.actions.tab===1}\">\r" +
    "\n" +
    "\t\t\t<label ng-click=\"row.actions.tab = 1\">Overview</label>\r" +
    "\n" +
    "\t\t</li>\r" +
    "\n" +
    "\t\t<li ng-class=\"{active:row.actions.tab===2}\">\r" +
    "\n" +
    "\t\t\t<label ng-click=\"row.actions.tab = 2\">Details Information</label>\r" +
    "\n" +
    "\t\t</li>\r" +
    "\n" +
    "\t</ul>\r" +
    "\n" +
    "\t<div class=\"content\">\r" +
    "\n" +
    "\t\t<div class=\"overview\" ng-show=\"row.actions.tab === 1\">\r" +
    "\n" +
    "\t\t\t<div class=\"headers\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"header-row\">Overview:</span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"props\">\r" +
    "\n" +
    "\t\t\t\t<span>  Campaign, Refer</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div class=\"details-information\" ng-show=\"row.actions.tab === 2\">\r" +
    "\n" +
    "\t\t\t<div class=\"headers\">\r" +
    "\n" +
    "\t\t\t\t<span class=\"header-row\">Attributes:</span>\r" +
    "\n" +
    "\t\t\t\t<span class=\"header-row\">Created:</span>\r" +
    "\n" +
    "\t\t\t\t<span class=\"header-row\">Last Modified:</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"props\">\r" +
    "\n" +
    "\t\t\t\t<span>  Campaign, Refer</span>\r" +
    "\n" +
    "\t\t\t\t<span>  Demo User, 2015-03-03</span>\r" +
    "\n" +
    "\t\t\t\t<span>  Victoria Rabinovich, 2015-03-03</span>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/grid-templates/dynamic-actions.html',
    "<div ng-repeat=\"o in dynamicOpt.values\" class=\"dynamic-actions\" ng-class=\"o.label\" ng-show=\"o.isVisible\" on-finish-render=\"ngRepeatFinished\">\r" +
    "\n" +
    "\t<button class=\"dynamic-actions__btn\" ng-click=\"dynamicOpt.callback(o)\">{{o.label | translate}}</button>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/grid-templates/grid-footer.html',
    "<div ng-show=\"showFooter\" class=\"ngFooterPanel\" ng-class=\"{'ui-widget-CONTENT': jqueryUITheme, 'ui-corner-bottom': jqueryUITheme}\" ng-style=\"footerStyle()\">\r" +
    "\n" +
    "\t<div class=\"ngPagerContainer\" style=\"float: right; margin-top: 10px;\" ng-show=\"enablePaging\" ng-class=\"{'ngNoMultiSelect': !multiSelect}\">\r" +
    "\n" +
    "\t\t<div style=\"float:left; margin-right: 10px;\" class=\"ngRowCountPicker\">\r" +
    "\n" +
    "\t\t\t<span style=\"float: left; margin-top: 3px;\" class=\"ngLabel\">{{i18n.ngPageSizeLabel}}</span>\r" +
    "\n" +
    "\t\t\t<select style=\"float: left;height: 27px; width: 100px\" ng-model=\"pagingOptions.pageSize\">\r" +
    "\n" +
    "\t\t\t\t<option ng-repeat=\"size in pagingOptions.pageSizes\">{{size}}</option>\r" +
    "\n" +
    "\t\t\t</select>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t\t<div style=\"float:left; margin-right: 10px; line-height:25px;\" class=\"ngPagerControl\" style=\"float: left; min-width: 135px;\">\r" +
    "\n" +
    "\t\t\t<button class=\"ngPagerButton\" ng-click=\"pageToFirst()\" ng-disabled=\"cantPageBackward()\" title=\"{{i18n.ngPagerFirstTitle}}\"><div class=\"ngPagerFirstTriangle\"><div class=\"ngPagerFirstBar\"></div></div></button>\r" +
    "\n" +
    "\t\t\t<button class=\"ngPagerButton\" ng-click=\"pageBackward()\" ng-disabled=\"cantPageBackward()\" title=\"{{i18n.ngPagerPrevTitle}}\"><div class=\"ngPagerFirstTriangle ngPagerPrevTriangle\"></div></button>\r" +
    "\n" +
    "\t\t\t<input class=\"ngPagerCurrent\" min=\"1\" max=\"{{maxPages()}}\" type=\"number\" style=\"width:50px; height: 24px; margin-top: 1px; padding: 0 4px;\" ng-model=\"pagingOptions.currentPage\" />\r" +
    "\n" +
    "\t\t\t<button class=\"ngPagerButton\" ng-click=\"pageForward()\" ng-disabled=\"cantPageForward()\" title=\"{{i18n.ngPagerNextTitle}}\"><div class=\"ngPagerLastTriangle ngPagerNextTriangle\"></div></button>\r" +
    "\n" +
    "\t\t\t<button class=\"ngPagerButton\" ng-click=\"pageToLast()\" ng-disabled=\"cantPageToLast()\" title=\"{{i18n.ngPagerLastTitle}}\"><div class=\"ngPagerLastTriangle\"><div class=\"ngPagerLastBar\"></div></div></button>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/grid-templates/row-templates/header-row.html',
    "<div ng-style=\"{ height: col.headerRowHeight }\" ng-repeat=\"col in renderedColumns\" ng-class=\"col.colIndex()\" class=\"ngHeaderCell\" ng-header-cell></div>"
  );


  $templateCache.put('/src/app/templates/grid-templates/row-templates/row-with-detalis.html',
    "<div ng-style=\"{ 'cursor': row.cursor }\" ng-repeat=\"col in renderedColumns\" ng-class=\"col.colIndex()\" class=\"ngCell {{col.cellClass}}\" row-check=\"row\" ng-click=\"row.orig.actions.select(row)\">\r" +
    "\n" +
    "\t<div ng-cell>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/grid-templates/row-templates/row.html',
    "<div ng-style=\"{ 'cursor': row.cursor }\" ng-repeat=\"col in renderedColumns\" ng-class=\"col.colIndex()\" class=\"ngCell \" row-check=\"row\" ng-click=\"row.orig.actions.select(row)\">\r" +
    "\n" +
    "\t<div ng-cell>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/ui-grid-templates/cell-templates/action.html',
    "<div class=\"action\" ng-if=\"row.isSelected\" ng-style=\"dropdownOpt.style\">\r" +
    "\n" +
    "\t<div class=\"dynamic-dropdown\" dynamic-dropdown orig-opt=\"row.actions.options\" dropdown-opt=\"dropdownOpt\" col=\"col\" row=\"row\" re-init=\"row.actions.options\"></div>\r" +
    "\n" +
    "\t<div class=\"action__dropdown\" dropdown=\"dropdownOpt\" ng-if=\"dropdownOpt.isVisible\"></div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/ui-grid-templates/cell-templates/details.html',
    "<div class=\"cell-details\">\r" +
    "\n" +
    "\t<span class=\"cell-details__expand\" ng-click=\"row.actions.expand(row)\" ng-if=\"grid.options.enableExpandable\" ng-class=\"{'icon-menu-down' : !row.isExpanded, 'icon-menu-up': row.isExpanded}\"></span>\r" +
    "\n" +
    "\t<div class=\"cell-details__check\" ng-if=\"!row.actions.disableCheck\">\r" +
    "\n" +
    "\t\t<label class=\"cell-details__input\">\r" +
    "\n" +
    "\t\t\t<input type=\"checkbox\" ng-model=\"row.isCheck\" ng-change=\"row.actions.setCheck(row)\" />\r" +
    "\n" +
    "\t\t\t<span class=\"cell-details__input__check\"></span>\r" +
    "\n" +
    "\t\t</label>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/ui-grid-templates/cell-templates/header.html',
    "<div ng-class=\"{ 'sortable': sortable }\">\r" +
    "\n" +
    "\t<div class=\"ui-grid-cell-contents\" col-index=\"renderIndex\" title=\"TOOLTIP\">\r" +
    "\n" +
    "\t\t<span>{{ col.displayName CUSTOM_FILTERS }}</span>\r" +
    "\n" +
    "\t\t<span ng-if=\"col.sort.direction\" ui-grid-visible=\"col.sort.direction\" ng-class=\"{ 'icon-arrow-up': col.sort.direction == asc, 'icon-arrow-down': col.sort.direction == desc, 'ui-grid-icon-blank': !col.sort.direction }\">\r" +
    "\n" +
    "\t\t\t&nbsp;\r" +
    "\n" +
    "\t\t</span>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"ui-grid-column-menu-button\" ng-if=\"grid.options.enableColumnMenus && !col.isRowHeader  && col.colDef.enableColumnMenu !== false\" ng-click=\"toggleMenu($event)\" ng-class=\"{'ui-grid-column-menu-button-last-col': isLastCol}\">\r" +
    "\n" +
    "\t\t<i class=\"ui-grid-icon-angle-down\">&nbsp;</i>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div ui-grid-filter></div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('/src/app/templates/ui-grid-templates/header.html',
    "<div class=\"ui-grid-header\">\r" +
    "\n" +
    "\t<div class=\"ui-grid-top-panel\">\r" +
    "\n" +
    "\t\t<div class=\"ui-grid-header-viewport\">\r" +
    "\n" +
    "\t\t\t<div class=\"ui-grid-header-canvas\">\r" +
    "\n" +
    "\t\t\t\t<div class=\"ui-grid-header-cell-wrapper\" ng-style=\"colContainer.headerCellWrapperStyle()\">\r" +
    "\n" +
    "\t\t\t\t\t<div class=\"ui-grid-header-cell-row\">\r" +
    "\n" +
    "\t\t\t\t\t\t<div class=\"ui-grid-header-cell ui-grid-clearfix\" ng-repeat=\"col in colContainer.renderedColumns track by col.uid\" ui-grid-header-cell col=\"col\" render-index=\"$index\"></div>\r" +
    "\n" +
    "\t\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t\t</div>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('/src/app/templates/ui-grid-templates/row.html',
    "<div ng-click=\"grid.appScope.fnOne(row)\"\r" +
    "\n" +
    "\t ng-repeat=\"col in colContainer.renderedColumns track by col.colDef.name\"\r" +
    "\n" +
    "\t class=\"ui-grid-cell\" ng-class=\"{'checked': row.isCheck, 'expanded': row.isExpanded, 'selected': row.isSelected}\" ui-grid-cell>\r" +
    "\n" +
    "</div>"
  );

}]);
