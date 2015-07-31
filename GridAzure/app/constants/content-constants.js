angular.module('gridTaskApp')
	.constant('content', {
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
			rowTemplate: 'app/templates/grid-templates/row-templates/row-with-detalis.html',
			filterOptions: { filterText: '' },
			rowHeight: 60,
			headerRowHeight: 40,
			showFooter: true,
			footerRowHeight: 30,
			footerTemplate: 'app/templates/grid-templates/grid-footer.html',
			detailsTemplate: 'app/templates/grid-templates/details-templates/details.html',
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
			expandableRowTemplate: 'app/templates/grid-templates/details-templates/details.html',
			expandableRowHeight: 220,
			selectionRowHeaderWidth: 35,
			enableExpandableRowHeader: false,
			enableFiltering: true,
			rowTemplate: 'app/templates/ui-grid-templates/row.html',
			expandableRowScope: {
				subGridVariable: 'subGridScopeVariable'
			},
			gridFooterTemplate: '<div class="grid-footer"></div>',
			headerTemplate: 'app/templates/ui-grid-templates/header.html',
			headerCellTemplate: 'app/templates/ui-grid-templates/cell-templates/header.html',
			reInit: true,
			enableDetails: true,
			detailsCellTemplate: 'app/templates/ui-grid-templates/cell-templates/details.html',
			detailsWidth: 60,
			detailsMinWidth: 60,
			enableAction: true,
			actionsCellTemplate: 'app/templates/ui-grid-templates/cell-templates/action.html',
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
				clicks: {
					label: 'Clicks',
					count: 0,
					counter: undefined,
					graphs: [{ style: { 'background-color': 'rgb(233, 124, 130)', height: '55px' } },
						{ style: { 'background-color': 'rgb(165, 189, 215)', height: '35px' } },
						{ style: { 'background-color': 'rgb(165, 215, 208)', height: '55px' } },
						{ style: { 'background-color': 'rgb(251, 201, 135)', height: '10px' } },
						{ style: { 'background-color': 'rgb(57, 124, 130)', height: '30px' } }]
				},
				views: {
					label: 'Views/Impressions',
					count: 1910000,
					graphs: [{ style: { 'background-color': 'rgb(10, 124, 130)', height: '30px' } },
						{ style: { 'background-color': 'rgb(165, 25, 215)', height: '50px' } },
						{ style: { 'background-color': 'rgb(165, 200, 208)', height: '60px' } },
						{ style: { 'background-color': 'rgb(30, 201, 135)', height: '25px' } },
						{ style: { 'background-color': 'rgb(57, 124, 100)', height: '30px' } }]
				},
				conversion: {
					label: 'Conversion',
					count: 2010,
					graphs: [{ style: { 'background-color': 'rgb(233, 44, 130)', height: '20px' } },
					{ style: { 'background-color': 'rgb(165, 189, 300)', height: '30px' } },
					{ style: { 'background-color': 'rgb(1, 215, 208)', height: '45px' } },
					{ style: { 'background-color': 'rgb(251, 201, 54)', height: '34px' } },
					{ style: { 'background-color': 'rgb(57, 33, 130)', height: '60px' } }]
				},
				//spend: {
				//	label: 'Spend',
				//	count: 2150,
				//	graphs: [{ style: { 'background-color': 'rgb(10, 124, 130)', height: '10px' } },
				//	{ style: { 'background-color': 'rgb(165, 189, 55)', height: '5px' } },
				//	{ style: { 'background-color': 'rgb(165, 231, 208)', height: '50px' } },
				//	{ style: { 'background-color': 'rgb(251, 201, 29)', height: '30px' } },
				//	{ style: { 'background-color': 'rgb(57, 124, 1)', height: '34px' } }]
				//},
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
			selectOpt: {}
		},
		campaign: {
			options: {
				actions: [{ label: 'AIX' }, { label: 'UI Campaign' }, { label: 'Design' }, { label: 'Modes' }, { label: 'KJ Entertainment' }],
			},
			selectOpt: {}
		},
		sankeyFilters: {
			dateRange: {
				start: moment(new Date(new Date().setDate(new Date().getDate() - 7))),
				end: moment(new Date())
			},
		}
	});