(function () {
	'use strict'

	angular
		.module('ext.grid.pageContent')
		.constant('CONTENT', {
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