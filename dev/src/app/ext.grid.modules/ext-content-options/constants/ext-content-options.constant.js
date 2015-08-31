(function () {
	'use strict'

	angular
		.module('ext.grid.contentOptions')
		.constant('EXT_CONTENT_OPTIONS', {
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
			}
		});
} ());