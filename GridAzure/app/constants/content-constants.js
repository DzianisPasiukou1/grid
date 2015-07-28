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
		}
	});