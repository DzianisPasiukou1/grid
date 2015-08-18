///#source 1 1 /app/app.js
angular.module('gridTaskApp', ['ngGrid', 'ui.grid', 'ui.grid.selection', 'ui.grid.expandable', 'ui.select2', 'pascalprecht.translate'])
	.value('templatesPath', 'app/templates/');

///#source 1 1 /app/constants/content-constants.js
var templatesPath = 'app/templates/';

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
			detailsCellTemplate: templatesPath +'ui-grid-templates/cell-templates/details.html',
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
///#source 1 1 /app/constants/grid-constants.js
angular.module('gridTaskApp')
	 .constant("DATA", {
	 	count: 100,
	 	startDate: new Date(2000, 1, 1)
	 });
///#source 1 1 /app/directives/cards/cards-controller.js
angular.module('gridTaskApp')
	.controller('cardsCtrl', ['$scope', function ($scope) {
		$scope.startLeft = 40;
		$scope.groupMarginRight = 50;

		$scope.cards = $scope.cardsOptions.cards;
		$scope.startDate = $scope.contentOptions.datepickerOptions.startDate;
		$scope.endDate = $scope.contentOptions.datepickerOptions.endDate;
		$scope.margin = $scope.cardsOptions.margin;
	}]);
///#source 1 1 /app/directives/cards/cards.js
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
					$timeout(function () {
						element.find('#' + scope.contentOptions.debugCard.id).flip();

						scope.contentOptions.debugCard.style = {
							left: scope.startLeft
						}
					});
				}

				scope.$watch('cardsOptions.cards', function (cards) {
					scope.cards = scope.cardsOptions.cards;

					$timeout(function () {
						var left = scope.startLeft;

						if (scope.contentOptions.enableDebugging) {
							left += scope.margin;
						}

						for (var card in cards) {
							element.find('#' + card).flip();

							cards[card].style = {
								left: left
							}

							left += scope.margin;
						}

						scope.groupStyle = {
							width: left + scope.groupMarginRight
						}
					})
				});
			}
		}
	}]);
///#source 1 1 /app/directives/chart-segment/chart-segment-controller.js
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
///#source 1 1 /app/directives/chart-segment/chart-segment.js
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
///#source 1 1 /app/directives/checkbox-select/checkbox-select-controller.js
angular.module('gridTaskApp')
	.controller('checkboxSelectCtrl', ['$scope', function ($scope) {
		if ($scope.options.selected === undefined) {
			$scope.options.selected = {};
		}

		$scope.toggle = function () {
			$scope.isShow = !$scope.isShow;
		}

		$scope.select = function (action) {
			$scope.isShow = false;
			$scope.options.selected = action;

			if ($scope.options.selected.isAll) {
				$scope.options.selected.check = true;
			}
			else {
				$scope.options.selected.check = false;
			}

			if ($scope.options.callback) {
				$scope.options.callback(action);
			}
		}

		$scope.checked = function (value) {
			if (value) {
				$scope.options.selected = $scope.options.actions.all;
				$scope.options.selected.check = true;

				if ($scope.options.selected === undefined) {
					$scope.options.selected = {};
				}
			}
			else {
				$scope.options.selected = $scope.options.actions.noOne;
				$scope.options.selected.check = false;

				if ($scope.options.selected === undefined) {
					$scope.options.selected = {};
				}
			}

			if ($scope.options.callback) {
				$scope.options.callback($scope.options.selected);
			}

			$scope.isShow = false;
		};
	}]);
///#source 1 1 /app/directives/checkbox-select/checkbox-select.js
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
				scope.$watch('options.selected', function (value) {
					if (value) {
						if (value.isAll) {
							value.check = true;
						}
						else {
							value.check = false;
						}
					}
				});
			}
		}
	}]);
///#source 1 1 /app/directives/core-diagram/core-diagram-controller.js
angular.module('gridTaskApp')
	.controller('coreDiagramCtrl', ['$scope', function ($scope) {
		$scope.mouseOverInit = function (d) {
			$scope.type = d.mouseover.type;
			$scope.value = { header: d.mouseover.header, data: d.mouseover.data };
		};
	}]);
///#source 1 1 /app/directives/core-diagram/core-diagram.js
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
				var units = "Widgets";

				var margin = { top: 0, right: 10, bottom: 10, left: 10 },
					width = 1500 - margin.left - margin.right,
					height = 740 - margin.top - margin.bottom;


				var formatNumber = d3.format(",.0f"),
					format = function (d) { return formatNumber(d) + " " + units; },
					color = d3.scale.category20();

				function init(graph) {
					element.find('#chart').html('');

					var svg = d3.select("#chart").append("svg")
						.attr("width", width + margin.left + margin.right)
						.attr("height", height + margin.top + margin.bottom)
					  .append("g")
						.attr("transform",
							  "translate(" + margin.left + "," + margin.top + ")");

					var sankey = d3.sankey()
						.nodeWidth(25)
						.nodePadding(35)
						.size([width, height]);

					var path = sankey.link();

					var nodeMap = {};
					graph.nodes.forEach(function (x) { nodeMap[x.name] = x; });
					graph.links = graph.links.map(function (x) {
						return {
							source: nodeMap[x.source],
							target: nodeMap[x.target],
							value: x.value
						};
					});

					sankey
						.nodes(graph.nodes)
						.links(graph.links)
						.layout(32);

					var link = svg.append("g").selectAll(".link")
						.data(graph.links)
					  .enter().append("path")
						.attr("class", "link")
						.attr("d", path)
						.style("stroke-width", function (d) { return Math.max(1, d.dy); })
						.style("stroke", function (d) {
							if (d.source.color) {
								return d.source.color;
							}
							else {
								return d.source.color = color(d.source.name.replace(/ .*/, ""));
							}
						})


					//link.append("title")
					//	  .text(function (d) {
					//	  	return d.source.name + " → " +
					//				d.target.name + "\n" + format(d.value);
					//	  });

					var node = svg.append("g").selectAll(".node")
						.data(graph.nodes)
					  .enter().append("g")
						.attr("class", "node")
						.attr("transform", function (d) {
							return "translate(" + d.x + "," + d.y + ")";
						})
					  .call(d3.behavior.drag()
						.origin(function (d) { return d; })
						.on("dragstart", function () {
							this.parentNode.appendChild(this);
						})
						.on("drag", dragmove));

					node.append("rect")
						.attr("height", function (d) { return d.dy; })
						.attr("width", sankey.nodeWidth())
						.style("fill", function (d) {
							if (d.color) {
								return d.color = d.color;
							}
							else {
								return d.color = color(d.name.replace(/ .*/, ""));
							}
						})
						.style("stroke", function (d) {
							return d3.rgb(d.color).darker(2);
						})
						.on("mouseover", mouseover)
						.on("mouseout", mouseout);


					node.append("text")
						.attr("x", -6)
						.attr("y", function (d) { return d.dy / 2; })
						.attr("dy", ".35em")
						.attr("text-anchor", "end")
						.attr("transform", null)
						.text(function (d) { return d.name; })
					  .filter(function (d) { return d.x < width / 2; })
						.attr("x", 6 + sankey.nodeWidth())
						.attr("text-anchor", "start");

					node.append("text")
						.attr("x", 20)
						.attr("y", function (d) { return d.dy / 2; })
						.attr("dy", ".35em")
						.attr("text-anchor", "end")
						.attr("transform", null)
						.text(function (d) { return d.val; })
					  .filter(function (d) { return d.x < width / 2; })
						.attr("x", -20 + sankey.nodeWidth())
						.attr("text-anchor", "start");

					function dragmove(d) {
						d3.select(this).attr("transform",
							"translate(" + (
								   d.x = Math.max(0, Math.min(width - d.dx, d3.event.x))
								) + "," + (
									   d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))
								) + ")");
						sankey.relayout();
						link.attr("d", path);
					};

					function mouseover(d) {
						scope.mouseOverInit(d);

						angular.element('mouse-over').remove();

						scope.parentTop = angular.element('#chart').offset().top;

						element.append("<mouse-over type='type' parent-top='parentTop' value='value'></mouse-over>");
						$compile(angular.element('mouse-over'))(scope);
					}

					function mouseout(d) {
						angular.element('mouse-over').remove();
					}
				}

				scope.$watch('data', function (graph) {
					if (graph) {
						init(graph);
					}
				});
			}
		}
	}]);
///#source 1 1 /app/directives/custom-datepicker/custom-datepicker.js
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
///#source 1 1 /app/directives/custom-grid/custom-grid-controller.js
angular.module('gridTaskApp')
	.controller('customGridCtrl', ['$scope', 'templatesPath', function ($scope, templatesPath) {
	}]);
///#source 1 1 /app/directives/custom-grid/custom-grid.js
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
///#source 1 1 /app/directives/custom-grid/grid-menu/grid-menu-controller.js
angular.module('gridTaskApp')
	.controller('gridMenuCtrl', ['$scope', 'MENU', function ($scope, MENU) {
		$scope.options = $scope.options.menu;

		if ($scope.options === undefined) {
			$scope.options = {};
		}

		if ($scope.options.isMenu === undefined) {
			$scope.options.isMenu = false;
		}

		if ($scope.options.label === undefined) {
			$scope.options.label = '';
		}

		if ($scope.options.values === undefined) {
			$scope.options.values = [];
		}

		if ($scope.options.isCheckbox === undefined) {
			$scope.options.isCheckbox = true;
		}

		if ($scope.options.onCheck === undefined) {
			$scope.options.onCheck = function (action, index) {
				$scope.columns[index].toggleVisible();

				$scope.resize(action);
			}
		}

		if ($scope.options.withSave === undefined) {
			$scope.options.withSave = false;
		}

		if ($scope.options.onSave === undefined) {
			$scope.options.onSave = function () {
			}
		}

		if ($scope.options.callback === undefined) {
			$scope.options.callback = function (action) {
			}
		}

		if ($scope.options.parentSelector === undefined) {
			$scope.options.parentSelector = MENU.parentSelector;
		}

		if ($scope.options.parentMinWidth === undefined) {
			$scope.options.parentMinWidth = MENU.parentMinWidth;
		}

		$scope.resize = function (action) {
			var totalWidth = $scope.columns.reduce(function (a, b) {
				if (b.visible) {
					return a + b.minWidth;
				} else {
					return a;
				}
			}, 0);

			for (var j = 0; j < $scope.colCache.length; j++) {
				if ($scope.colCache[j].label == action.label) {
					$scope.colCache.splice(j, 1);
				}
			}

			if (angular.element(window).width() < totalWidth) {
				angular.element($scope.options.parentSelector).css('minWidth', totalWidth + 'px');
			}
			else {
				angular.element($scope.options.parentSelector).css('minWidth', $scope.options.parentMinWidth + 'px');
			}
		}
	}]);
///#source 1 1 /app/directives/custom-grid/grid-menu/grid-menu.js
angular.module('gridTaskApp')
	.directive('gridMenu', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'EA',
			templateUrl: templatesPath + 'directive-templates/grid-menu.html',
			controller: 'gridMenuCtrl',
			link: function (scope, element, attrs) {

				scope.$watch('columns', function (value) {
					if (Array.isArray(value) && value.length > 0) {

						scope.colCache = [];
						scope.options.values = [];

						var totalWidth = value.reduce(function (a, b) {
							return a + b.minWidth;
						}, 0);

						if (angular.element(window).width() < totalWidth) {
							for (var i = value.length - 2; i > 1; i--) {
								if (value[i].visible) {
									value[i].toggleVisible();
									totalWidth -= value[i].minWidth;
									scope.colCache.push({ label: value[i].field, element: value[i] });
								}
								if (angular.element(window).width() > totalWidth) {
									break;
								}
							}
						}

						if (scope.colCache.length > 0 || scope.$parent.options.showResponsMenu) {
							scope.isShow = true;
						}

						for (var i = 0; i < value.length; i++) {
							scope.options.values.push({ label: value[i].field, element: value[i], isVisible: value[i].visible });
						}

						angular.element(window).resize(function () {
							var totalWidth = value.reduce(function (a, b) {
								if (b.visible) {
									return a + b.minWidth;
								} else {
									return a;
								}
							}, 0);

							if (angular.element(window).width() < totalWidth) {
								for (var i = value.length - 2; i > 1; i--) {
									if (value[i].visible) {
										value[i].toggleVisible();
										totalWidth -= value[i].minWidth;
										scope.colCache.push({ label: value[i].field, element: value[i] });
									}
									if (angular.element(window).width() > totalWidth) {
										break;
									}
								}
							}
							else {
								for (var i = 0; i < value.length; i++) {
									if (!value[i].visible) {
										value[i].toggleVisible();
										totalWidth += value[i].minWidth;

										for (var j = 0; j < scope.colCache.length; j++) {
											if (scope.colCache[j].label == value[i].field) {
												scope.colCache.splice(j, 1);
											}
										}

										if (angular.element(window).width() < totalWidth) {
											value[i].toggleVisible();
											totalWidth -= value[i].minWidth;

											var isExist = false;
											for (var j = 0; j < scope.colCache.length; j++) {
												if (scope.colCache[j].label == value[i].field) {
													isExist = true;
												}
											}
											if (!isExist) {
												scope.colCache.push({ label: value[i].field, element: value[i] });
											}
											else {
												scope.colCache = [];

												for (var j = 0; j < value.length; j++) {
													if (!value[j].visible) {
														scope.colCache.push({ label: value[j].field, element: value[j] });
													}
												}
											}
											break;
										}
									}

								}
							}

							scope.options.values = [];

							for (var i = 0; i < value.length; i++) {
								scope.options.values.push({ label: value[i].field, element: value[i], isVisible: value[i].visible });
							}

							if (scope.colCache.length > 0 || scope.$parent.options.showResponsMenu) {
								scope.isShow = true;
							}
							else {
								scope.isShow = false;
							}
						});
					}
				});
			}
		}
	}]);
///#source 1 1 /app/directives/custom-grid/row-check/row-check.js
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
///#source 1 1 /app/directives/custom-ui-grid/custom-ui-grid-controller.js
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
///#source 1 1 /app/directives/custom-ui-grid/custom-ui-grid.js
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
///#source 1 1 /app/directives/custom-ui-grid/ui-grid-menu/ui-grid-menu.js
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

					angular.element(window).resize(function () {
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
///#source 1 1 /app/directives/details/details.js
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

///#source 1 1 /app/directives/dropdown/dropdown-controller.js
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
///#source 1 1 /app/directives/dropdown/dropdown.js
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
///#source 1 1 /app/directives/dropdown/dynamic-dropdown/dynamic-dropdown.js
angular.module('gridTaskApp')
	.directive('dynamicDropdown', ['templatesPath', '$compile', '$timeout', function (templatesPath, $compile, $timeout) {
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



				angular.element(window).resize(function () {
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
				});
			}
		}
	}]);
///#source 1 1 /app/directives/filter/filter-controller.js
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
///#source 1 1 /app/directives/filter/filter.js
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

///#source 1 1 /app/directives/filter/filter-list/filter-list-controller.js
angular.module('gridTaskApp')
	.controller('filterListCtrl', ['$scope', function ($scope) {
		$scope.filter = function () {
			$scope.isFiltrate = true;
		}
	}]);
///#source 1 1 /app/directives/filter/filter-list/filter-list.js
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
///#source 1 1 /app/directives/graphs/graphs.js
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
///#source 1 1 /app/directives/histogram/histogram-controller.js
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
///#source 1 1 /app/directives/histogram/histogram.js
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
///#source 1 1 /app/directives/kx-date-range/kx-date-range.js
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
///#source 1 1 /app/directives/kx-multiselect/kx-multiselect.js
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
///#source 1 1 /app/directives/kx-nav-bar/kx-menu.js
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
///#source 1 1 /app/directives/kx-nav-bar/kx-nav-bar-controller.js
angular.module('gridTaskApp')
	.controller('kxNavBarCtrl', ['$scope', function ($scope) {

	}]);
///#source 1 1 /app/directives/kx-nav-bar/kx-nav-bar.js
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
///#source 1 1 /app/directives/kx-nav-bar/navigation-controller.js
angular.module('gridTaskApp').controller('NavigationCtrl', ['$scope', 'NavigationTree', function ($scope, NavigationTree) {
	return $scope.navigationTree = NavigationTree.get();
}]);
///#source 1 1 /app/directives/kx-stealth-input/kx-stealth-input.js
angular.module('gridTaskApp').directive('kxStealthInput', function () {
	return {
		restrict: "CAE",
		controller: function ($scope) { },
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
});
///#source 1 1 /app/directives/loading/loading.js
angular.module('gridTaskApp')
	.directive('loading', ['templatesPath', 'LOADING', function (templatesPath, LOADING) {
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

				angular.element(window).resize(function () {
					ctrl.resize();
				});
			}
		}
	}]);
///#source 1 1 /app/directives/max-heighter/max-heighter.js
angular.module('gridTaskApp')
	.directive('maxHeighter', ['$timeout', '$interval', function ($timeout, $interval) {
		function init_height(element) {
			element.css('max-height', getWindowHeight() - element.offset().top - 10 + 'px');
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
						$timeout(function () {
							init_height(element)
						});

						angular.element(window).resize(function () {
							init_height(element)
						});
					}
				}
			}
		}
	}]);
///#source 1 1 /app/directives/modal/modal-controller.js
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
				height: $element.find('.' + $scope.modal).prop('scrollHeight') + 'px'
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
///#source 1 1 /app/directives/modal/modal.js
angular.module('gridTaskApp')
	.directive('modal', ['templatesPath', '$timeout', function (templatesPath, $timeout) {
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

				angular.element(window).resize(function () {
					scope.resize();
				});
			}
		}
	}]);
///#source 1 1 /app/directives/mouse-over/mouse-over.js
angular.module('gridTaskApp')
	.directive('mouseOver', ['templatesPath', '$timeout', function (templatesPath, $timeout) {
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
					if ($.cursorMessageData.mouseY + element.find('.mouse-over').height() < angular.element(window).height()) {
						scope.style.top = ($.cursorMessageData.mouseY - scope.parentTop + 15) + 'px';
					}
					else {
						scope.style.top = ($.cursorMessageData.mouseY - element.find('.mouse-over').height() - scope.parentTop - 20) + 'px';
					}

					if ($.cursorMessageData.mouseX + 10 + element.find('.mouse-over').width() < angular.element(window).width()) {
						scope.style.left = ($.cursorMessageData.mouseX + 10) + 'px';
					}
					else {
						scope.style.left = angular.element(window).width() - element.find('.mouse-over').width() - 10 + 'px';
					}
					scope.style.visibility = 'visible'
				});

			}
		}
	}]);
///#source 1 1 /app/directives/number-format/number-format.js
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
///#source 1 1 /app/directives/on-finish-render/onFinishRender.js
angular.module('gridTaskApp')
    .directive('onFinishRender', function ($timeout) {
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
    });
///#source 1 1 /app/directives/overlay/overlay.js
angular.module('gridTaskApp')
	.directive('overlay', ['$timeout', 'templatesPath', function ($timeout, templatesPath) {
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
				$timeout(function () {
					scope.$watch('state', function (state) {
						scope.setToggle();

						if (state == false) {
							element.scrollTop(0);
						}
					});
				});

				angular.element(window).resize(function () {
					scope.setToggle(true);
					scope.style.transition = 'none';
					scope.$apply();
				});
			}
		}
	}]);
///#source 1 1 /app/directives/page-content/page-content.js
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
///#source 1 1 /app/directives/page-content/content-options/content-options-controller.js
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
///#source 1 1 /app/directives/page-content/content-options/content-options.js
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
///#source 1 1 /app/directives/page-content/page-content-body/page-content-body.js
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
///#source 1 1 /app/directives/page-content/page-content-footer/page-content-footer.js
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
///#source 1 1 /app/directives/page-content/page-content-header/page-content-header.js
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
///#source 1 1 /app/directives/page-content-cards/page-content-cards.js
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
///#source 1 1 /app/directives/page-content-cards/content-options-cards/content-options-cards-controller.js
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
///#source 1 1 /app/directives/page-content-cards/content-options-cards/content-options-cards.js
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
///#source 1 1 /app/directives/page-content-d3/page-content-d3.js
angular.module('gridTaskApp')
	.directive('pageContentD3', ['templatesPath', 'CONTENT', '$compile', 'jsonService', function (templatesPath, CONTENT, $compile, jsonService) {
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
				var initializer = new Initializer(scope, element, CONTENT, templatesPath, $compile, jsonService);
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
///#source 1 1 /app/directives/page-content-d3/content-options-d3/content-options-d3.js
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
///#source 1 1 /app/directives/page-content-d3/content-options-d3/content-options-d3-controller.js
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
///#source 1 1 /app/directives/resize-on/resize-on.js
angular.module('gridTaskApp')
	.directive('resizeOn', [function () {

		function resize_on(element, parent) {
			element.css('width', (angular.element(parent).position().left + angular.element(parent).width()) + 'px');

			if (element.width() < element.css('min-width').replace('px', '')) {
				element.css('right', 'auto');
				element.css('width', '450px');
				element.css('left', angular.element(parent).position().left + 'px');
			}
			else {
				element.css('right', '0');
				element.css('left', 'auto');
			}

		}

		return {
			restrict: 'AC',
			scope: {
				event: '=resizeOn',
				parent: '@'
			},
			link: function (scope, element, attrs) {
				element.css('top', angular.element(scope.parent).height() + 'px');

				angular.element(window).resize(function () {
					resize_on(element, scope.parent);
				});

				scope.$watch('event', function (value) {
					if (value) {
						resize_on(element, scope.parent);
					}
				});
			}
		}
	}]);
///#source 1 1 /app/directives/search/search-controller.js
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
///#source 1 1 /app/directives/search/search.js
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
///#source 1 1 /app/directives/split-button/split-button-controller.js
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
///#source 1 1 /app/directives/split-button/split-button.js
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
///#source 1 1 /app/directives/upload/upload.js
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
///#source 1 1 /app/entities/columnGenerator.js
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
///#source 1 1 /app/entities/columns-comparer.js
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
///#source 1 1 /app/entities/convertFilterOptions.js
function convertFilterOptions(options) {
	var convertOpt = { filterText: '' };

	for (var i = 0; i < options.length; i++) {

		if (options[i].filter) {
			convertOpt.filterText += options[i].label + ':' + options[i].filter + ';';
		}
	}
	return convertOpt;
}
///#source 1 1 /app/entities/counter.js
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
///#source 1 1 /app/entities/initializer.js
var Initializer = (function () {
	function Initializer(scope, element, CONTENT, templatesPath, $compile, jsonService) {
		this.scope = scope;
		this.element = element;
		this.content = CONTENT;
		this.templatesPath = templatesPath;
		this.$compile = $compile;
		this.jsonService = jsonService;
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

		this.jsonService.get('data/sankey/my-graphs.json').then(function (data) {
			this.scope.sankeyData = data;
		}.bind(this));
		this.jsonService.get('data/histogram/default.json').then(function (data) {
			this.scope.histogramData = data;
		}.bind(this));
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
			d3.json(this.content.sankeyPath, function (error, graph) {
				this.scope.sankeyData = graph;
			}.bind(this));
		}

		if (this.scope.histogramData === undefined) {
			this.jsonService.get('data/histogram/default.json').then(function (data) {
				this.scope.histogramData = data;
			}.bind(this));
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

///#source 1 1 /app/extensions/sankey.js
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
///#source 1 1 /app/extensions/window-width.js
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


///#source 1 1 /app/extensions/angular/center.js
angular.element.fn.center = function () {
	this.css("position", "absolute");
	this.css("top", Math.max(0, ((angular.element(this.parent()).height() - angular.element(this).outerHeight()) / 2) +
                                                angular.element(this.parent()).scrollTop()) + "px");
	this.css("left", Math.max(0, ((angular.element(this.parent()).width() - angular.element(this).outerWidth()) / 2) +
                                                angular.element(this.parent()).scrollLeft()) + "px");
	this.css("z-index", 10000);
	return this;
}
///#source 1 1 /app/extensions/angular/cursorMessage.js
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
///#source 1 1 /app/plugins/ngGridActionsPlugin.js
var templatesPath = 'app/templates/';

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
///#source 1 1 /app/plugins/ngGridCsvExportPlugin.js
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
///#source 1 1 /app/plugins/ngGridFlexibleHeightPlugin.js
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

///#source 1 1 /app/services/navigation-tree-service.js
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
///#source 1 1 /app/directives/gr-template/gr-template.js
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
///#source 1 1 /app/services/my-template-service.js
angular.module('gridTaskApp')
	.service('myTemplateService', ['$http', '$templateCache', function ($http, $templateCache) {
		this.put = function (template, name) {
			$templateCache.put(name, template)
		}
	}]);
