(function () {
	'use strict'

	angular
		.module('ext.grid.pageContentCards')
		.constant('EXT_CARDS_OPTIONS', {
			exports: {
				options: {
					label: 'Export to: ',
					values: [{ label: 'Excel', isExcel: true }, { label: 'Pdf', isPdf: true }],
					callback: function (action) {
					}
				}
			},
			cards: {
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
				}
			},
			startDate: new Date(new Date().setDate(new Date().getDate() - 1)),
			endDate: new Date(),
			dateRange: Math.abs(new Date().getTime() - new Date(new Date().setDate(new Date().getDate() - 1)).getTime()),
			margin: 270,
			searchValue: '',
			datepickerConfig: {
				singleMonth: true,
				showShortcuts: false,
				showTopbar: false
			}
		});
} ());