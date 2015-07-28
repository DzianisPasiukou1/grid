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
		rowTemplate: 'grid-templates/row-templates/row-with-detalis.html',
		rowHeight: 60,
		headerRowHeight: 40,
		showFooter: true,
		footerRowHeight: 30,
		footerTemplate: 'grid-templates/grid-footer.html',
		rowActions: {
			options: {
				label: 'Actions',
				values: [{ label: 'Edit', isEdit: true, priority: 4 }, { label: 'Copy', isCopy: true, priority: 3 }, { label: 'History', isHistory: true, priority: 2 }, { label: 'Delete', isDelete: true, priority: 1 }],
				isMenu: true
			},
			isShow: false
		},
		detailsTemplate: 'grid-templates/details-templates/details.html',
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