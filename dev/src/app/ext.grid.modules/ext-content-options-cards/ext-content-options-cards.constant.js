(function () {
	'use strict';

	angular
		.module('ext.grid.contentOptionsCards')
		.constant('EXT_CONTENT_OPTIONS_CARDS', {
			searchValue: '',
			datepickerOptions: {
				startDate: new Date(new Date().setDate(new Date().getDate() - 1)),
				endDate: new Date(),
				dateRange: Math.abs(new Date().getTime() - new Date(new Date().setDate(new Date().getDate() - 1)).getTime()),
				datepickerConfig: {
					singleMonth: true,
					showShortcuts: false,
					showTopbar: false
				}
			},
			filterOptions: [],
			searchOptions: [{
				label: 'everywhere', isEverywhere: true
			}],
			exports: {
				options: {
					label: 'Export to: ',
					values: [{ label: 'Excel', isExcel: true }, { label: 'Pdf', isPdf: true }],
					/**
					 * Description
					 * @method callback
					 * @param {} action
					 * @return 
					 */
					callback: function (action) {
					}
				}
			}
		});
} ());