(function () {
	'use strict'

	angular
		.module('ext.grid.contentOptions')
		.factory('initContentOptionsUtils', initOptionsUtils);

	initOptionsUtils.$inject = [];

	function initOptionsUtils() {
		var utils = {};

		utils.checks = {
			options: {
				actions: {
					all: { label: 'All', isAll: true },
					noOne: { label: 'No one', isNoOne: true },
					marked: { label: 'Marked', isMarked: true },
					notMarked: { label: 'Not marked', isNotMarked: true }
				}
			}
		};
		utils.mores = {
			options: {
				label: 'More',
				values: [{ label: 'View reports' }],
				isMenu: true
			}
		};
		utils.initOpt = initOpt;

		return utils;

		function initOpt(opt) {
			var contentOptions = opt || {};

			contentOptions.checks = contentOptions.checks || this.checks;
			contentOptions.mores = contentOptions.mores || this.mores;
			contentOptions.filterOptions = contentOptions.filterOptions || [];
			contentOptions.filtrate = contentOptions.filtrate || function () { };

			return contentOptions;
		};
	};
} ());