(function () {
	'use strict'

	angular
		.module('ext.grid.main')
		.constant("extGridOptions", {
			data: 'data',
			multiSelect: false,
			rowTemplate: 'grid-templates/row-templates/row-with-detalis.html',
			filterOptions: { filterText: '' },
			rowHeight: 60,
			headerRowHeight: 40,
			showFooter: true,
			footerRowHeight: 30,
			footerTemplate: 'grid-templates/grid-footer.html',
			detailsTemplate: 'grid-templates/details-templates/details.html',
			rowActions: {
				options: {
					label: 'Actions',
					values: [{ label: 'Edit', isEdit: true, priority: 4 }, { label: 'Copy', isCopy: true, priority: 3 }, { label: 'History', isHistory: true, priority: 2 }, { label: 'Delete', isDelete: true, priority: 1 }],
					isMenu: true
				},
				isShow: false
			},
			beforeSelectionChange: function (row, event) {
				return false;
			},
			reInit: false
		});
} ());