(function () {
	'use strict'

	angular
		.module('ext.grid.pageContent')
		.constant('CONTENT', {
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
			},
			datepickerOptions: {
				config: {
					singleMonth: true,
					showShortcuts: false,
					showTopbar: false
				}
			}
		});
} ());