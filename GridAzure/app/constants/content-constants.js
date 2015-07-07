angular.module('gridTaskApp')
	.constant('content', {
		checks: {
			options: {
				actions: {
					all: { label: 'All', isAll: true },
					noOne: { label: 'No one', isNoOne: true },
					marked: { label: 'Marked', isMarked: true },
					notMarked: { label: 'Not marked', isNotMarked: true }
				},
				callback: function (check) {
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
				values: [{ label: 'Grid', isGrid: true, isTiles: false }, { label: 'Tiles', isGrid: false, isTiles: true }],
				callback: function (action) {
				}
			}
		},
		listSelector: '.page-content__list',
		loadingTemplate: '<loading ng-show="contentOptions.isLoading"></loading>',
		gridName: 'Default grid',
		rowTemplate: 'row-templates/row-with-detalis.html',
		rowHeight: 60,
		headerRowHeight: 40,
		showFooter: true,
		footerRowHeight: 30,
		footerTemplate: 'grid-footer.html',
		rowActions: {
			values: [{
				label: 'More',
				isMore: true,
				options: {
					label: 'Actions',
					values: [{ label: 'Edit' }, { label: 'Copy' }, { label: 'History' }, { label: 'Delete' }],
					isMenu: true
				}
			}],
			isShow: false
		},
		detailsTemplate: 'details.html',
		filterOptions: function (data) {
			var options = [];

			if (Array.isArray(data) && data[0])
				for (var prop in data[0]) {
					options.push({ label: prop, isColumn: true });
				}
			return options;
		},
		searchOptions: function (data) {
			var options = [];
			options.push({ label: 'everywhere', isEverywhere: true });

			if (Array.isArray(data) && data[0]) {
				for (var prop in data[0]) {
					options.push({ label: prop, isColumn: true });
				}
			}

			return options;
		}
	});